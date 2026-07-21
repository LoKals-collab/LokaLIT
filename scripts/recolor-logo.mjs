import sharp from "sharp";

const SRC = "src/images/logo.png";
const OUT = "src/images/logo-mark.png";

// Verde del sito (tailwind teal.DEFAULT)
const TEAL = { r: 0x0f, g: 0x76, b: 0x6e };

// Soglie sul canale minimo: il fondo verde ha min≈10, il tratto bianco min≈255.
const LO = 45; // sotto → completamente trasparente
const HI = 205; // sopra → completamente opaco

const { data, info } = await sharp(SRC)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const out = Buffer.alloc(data.length);
for (let i = 0; i < data.length; i += info.channels) {
  const m = Math.min(data[i], data[i + 1], data[i + 2]);
  let a = (m - LO) / (HI - LO);
  a = a < 0 ? 0 : a > 1 ? 1 : a;
  out[i] = TEAL.r;
  out[i + 1] = TEAL.g;
  out[i + 2] = TEAL.b;
  out[i + 3] = Math.round(a * 255);
}

await sharp(out, {
  raw: { width: info.width, height: info.height, channels: 4 },
})
  .png()
  .toFile(OUT);

console.log("scritto", OUT, info.width + "x" + info.height);
