import { NextResponse, type NextRequest } from "next/server";

// Tenute in sincronia con src/lib/translations.ts (qui hardcoded per mantenere
// il middleware leggero: gira nell'edge runtime).
const locales = ["it", "en"] as const;
const defaultLocale = "it";

function detectLocale(req: NextRequest): string {
  // 1) preferenza salvata (cookie impostato dal selettore di lingua)
  const cookie = req.cookies.get("NEXT_LOCALE")?.value;
  if (cookie && locales.includes(cookie as (typeof locales)[number])) return cookie;

  // 2) header Accept-Language del browser
  const accept = req.headers.get("accept-language");
  if (accept) {
    for (const part of accept.split(",")) {
      const base = part.split(";")[0].trim().toLowerCase().split("-")[0];
      if (locales.includes(base as (typeof locales)[number])) return base;
    }
  }

  // 3) fallback: italiano
  return defaultLocale;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Già prefissato con una lingua? Lascia passare.
  const hasLocale = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );
  if (hasLocale) return NextResponse.next();

  // Altrimenti reindirizza aggiungendo il prefisso lingua.
  const locale = detectLocale(req);
  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Esclude API, asset interni di Next e qualunque file con estensione.
  matcher: ["/((?!_next|api|.*\\.).*)"],
};
