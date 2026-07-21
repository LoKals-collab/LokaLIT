import type { Metadata } from "next";
import DestinationsContent from "@/components/DestinationsContent";
import { translations, locales, altLanguages, type Locale } from "@/lib/translations";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = (locales.includes(params.locale as Locale) ? params.locale : "it") as Locale;
  const t = translations[locale];

  return {
    title: t.meta.destinationsTitle,
    description: t.meta.destinationsDescription,
    alternates: {
      canonical: `/${locale}/destinations`,
      languages: altLanguages("/destinations"),
    },
  };
}

export default function DestinationsPage() {
  return <DestinationsContent />;
}
