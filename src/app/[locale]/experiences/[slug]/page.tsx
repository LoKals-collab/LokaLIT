import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocalStoryContent from "@/components/LocalStoryContent";
import { translations, locales, altLanguages, type Locale } from "@/lib/translations";

// Pre-genera staticamente le pagine storia di ogni local (gli slug sono uguali
// in tutte le lingue, quindi bastano quelli della lingua di default).
export function generateStaticParams() {
  return translations.it.experiences.map((e) => ({ slug: e.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}): Metadata {
  const locale = (locales.includes(params.locale as Locale) ? params.locale : "it") as Locale;
  const exp = translations[locale].experiences.find((e) => e.slug === params.slug);

  if (!exp) return {};

  return {
    title: `${exp.name} · ${exp.village}`,
    description: exp.description,
    alternates: {
      canonical: `/${locale}/experiences/${exp.slug}`,
      languages: altLanguages(`/experiences/${exp.slug}`),
    },
    openGraph: {
      title: `${exp.name} · ${exp.village}`,
      description: exp.description,
      images: [exp.image],
      type: "profile",
    },
  };
}

export default function LocalStoryPage({ params }: { params: { slug: string } }) {
  const exists = translations.it.experiences.some((e) => e.slug === params.slug);
  if (!exists) notFound();

  return <LocalStoryContent slug={params.slug} />;
}
