import type { Metadata } from "next";
import PrivacyContent from "@/components/PrivacyContent";
import { translations, locales, altLanguages, type Locale } from "@/lib/translations";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = (locales.includes(params.locale as Locale) ? params.locale : "it") as Locale;
  const t = translations[locale];

  return {
    title: t.meta.privacyTitle,
    description: t.meta.privacyDescription,
    alternates: {
      canonical: `/${locale}/privacy`,
      languages: altLanguages("/privacy"),
    },
  };
}

export default function PrivacyPage() {
  return <PrivacyContent />;
}
