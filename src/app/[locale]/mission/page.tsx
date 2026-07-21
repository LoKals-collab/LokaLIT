import type { Metadata } from "next";
import MissionContent from "@/components/MissionContent";
import { translations, locales, altLanguages, type Locale } from "@/lib/translations";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = (locales.includes(params.locale as Locale) ? params.locale : "it") as Locale;
  const t = translations[locale];

  return {
    title: t.meta.missionTitle,
    description: t.meta.missionDescription,
    alternates: {
      canonical: `/${locale}/mission`,
      languages: altLanguages("/mission"),
    },
  };
}

export default function MissionPage() {
  return <MissionContent />;
}
