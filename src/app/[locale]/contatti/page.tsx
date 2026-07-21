import type { Metadata } from "next";
import ContactContent from "@/components/ContactContent";
import { translations, locales, altLanguages, type Locale } from "@/lib/translations";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = (locales.includes(params.locale as Locale) ? params.locale : "it") as Locale;
  const t = translations[locale];

  return {
    title: t.meta.contactTitle,
    description: t.meta.contactDescription,
    alternates: {
      canonical: `/${locale}/contatti`,
      languages: altLanguages("/contatti"),
    },
  };
}

export default function ContactPage() {
  return <ContactContent />;
}
