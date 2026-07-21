import sharp from "sharp";

const SRC = "src/images/logo.png";
const TEAL = "#0F766E";
const LO = 45;
const HI = 205;

// --- Estrae il tratto del logo come bianco su trasparente (alpha = "biancore") ---
const { data, info } = await sharp(SRC).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const white = Buffer.alloc(data.length);
for (let i = 0; i < data.length; i += info.channels) {
  const m = Math.min(data[i], data[i + 1], data[i + 2]);
  let a = (m - LO) / (HI - LO);
  a = a < 0 ? 0 : a > 1 ? 1 : a;
  white[i] = 255;
  white[i + 1] = 255;
  white[i + 2] = 255;
  white[i + 3] = Math.round(a * 255);
}
const whiteLogo = await sharp(white, {
  raw: { width: info.width, height: info.height, channels: 4 },
}).png().toBuffer();

// --- Emblema "L": ritaglio + maschera per togliere il residuo della "o" ---
const EMB = { left: 10, top: 10, width: 100, height: 204 };
// rettangolo teal che cancella la "o" (lato destro, tra la barra della L e il piede)
const ERW = 22;
const eraser = await sharp({
  create: { width: ERW, height: 150, channels: 4, background: TEAL },
}).png().toBuffer();
const emblem = await sharp(whiteLogo)
  .extract(EMB)
  .flatten({ background: TEAL })
  .composite([{ input: eraser, left: EMB.width - ERW, top: 42 }])
  .png()
  .toBuffer();

// helper: emblema bianco centrato su quadrato teal
async function iconSquare(size, logoH) {
  return sharp({ create: { width: size, height: size, channels: 4, background: TEAL } })
    .composite([{ input: await sharp(emblem).resize({ height: logoH }).toBuffer(), gravity: "center" }])
    .png()
    .toBuffer();
}

// --- FAVICON (icon.png) e APPLE ICON ---
await sharp(await iconSquare(512, 340)).toFile("src/app/icon.png");
await sharp(await iconSquare(180, 120)).toFile("src/app/apple-icon.png");

// --- OG IMAGE 1200x630: logo bianco intero centrato su teal ---
const ogLogo = await sharp(whiteLogo).resize({ width: 620 }).toBuffer();
await sharp({ create: { width: 1200, height: 630, channels: 4, background: TEAL } })
  .composite([{ input: ogLogo, gravity: "center" }])
  .png()
  .toFile("src/app/opengraph-image.png");
await sharp("src/app/opengraph-image.png").toFile("src/app/twitter-image.png");

// preview favicon
await iconSquare(256, 170).then((b) => sharp(b).toFile("scripts/_icon-preview.png"));

console.log("OK → icon.png, apple-icon.png, opengraph-image.png, twitter-image.png");
