"use client";

import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { useI18n } from "@/lib/i18n";
import { CONTACT_EMAIL } from "@/lib/site";

export default function ContactContent() {
  const { t } = useI18n();
  const c = t.contactPage;

  return (
    <>
      <Hero
        image="https://images.unsplash.com/photo-1499678329028-101435549a4e?auto=format&fit=crop&q=80&w=2000"
        eyebrow={c.hero.eyebrow}
        headline={c.hero.headline}
        subheadline={c.hero.subheadline}
        alt={c.hero.imageAlt}
      />

      <section className="bg-sand py-24">
        <div className="container-px">
          <Reveal className="mx-auto max-w-xl rounded-4xl bg-paper p-10 text-center shadow-card sm:p-14">
            <span className="eyebrow justify-center">{c.emailHeading}</span>
            <p className="mt-4 text-lg leading-relaxed text-ink/70">{c.emailBody}</p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="btn-primary mt-8">
              {c.emailCta}
            </a>
            <p className="mt-5 text-sm text-ink/50">{CONTACT_EMAIL}</p>
            <p className="mt-8 border-t border-ink/8 pt-6 text-sm leading-relaxed text-ink/55">
              {c.note}
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
