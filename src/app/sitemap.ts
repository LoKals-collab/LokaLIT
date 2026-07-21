import type { MetadataRoute } from "next";
import { locales, defaultLocale, translations } from "@/lib/translations";
import { SITE_URL as BASE } from "@/lib/site";

// Percorsi comuni a ogni lingua + le pagine storia dei local (slug dinamici).
const staticPaths = ["", "/mission", "/destinations", "/contatti", "/privacy"];
const experiencePaths = translations[defaultLocale].experiences.map(
  (e) => `/experiences/${e.slug}`,
);

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Per ogni percorso generiamo un'entry per lingua, con gli alternates hreflang.
  return [...staticPaths, ...experiencePaths].flatMap((path) =>
    locales.map((locale) => ({
      url: `${BASE}/${locale}${path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
      alternates: {
        languages: {
          ...Object.fromEntries(locales.map((l) => [l, `${BASE}/${l}${path}`])),
          "x-default": `${BASE}/${defaultLocale}${path}`,
        },
      },
    })),
  );
}
