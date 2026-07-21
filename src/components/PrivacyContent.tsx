"use client";

import Reveal from "@/components/Reveal";
import { useI18n } from "@/lib/i18n";

export default function PrivacyContent() {
  const { t } = useI18n();
  const p = t.privacyPage;

  return (
    <>
      <section className="bg-sand pb-16 pt-36">
        <div className="container-px">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">{p.hero.eyebrow}</span>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
              {p.hero.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink/65">{p.hero.subtitle}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-20">
        <div className="container-px">
          <div className="mx-auto max-w-2xl space-y-12">
            {p.sections.map((s, i) => (
              <Reveal key={s.heading} delay={i * 60}>
                <h2 className="font-display text-2xl font-semibold text-ink">{s.heading}</h2>
                <p className="mt-3 text-base leading-relaxed text-ink/70">{s.body}</p>
              </Reveal>
            ))}
          </div>

          <p className="mx-auto mt-16 max-w-2xl border-t border-ink/8 pt-6 text-sm text-ink/45">
            {p.updatedLabel}: {p.updatedDate}
          </p>
        </div>
      </section>
    </>
  );
}
