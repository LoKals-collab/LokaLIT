"use client";

import Image from "next/image";
import heroImage from "../images/hero-image.png";
import LocaleLink from "@/components/LocaleLink";
import Reveal from "@/components/Reveal";
import ExperienceCard from "@/components/ExperienceCard";
import DestinationCard from "@/components/DestinationCard";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";
import { useI18n } from "@/lib/i18n";

export default function HomeContent() {
  const { t } = useI18n();
  const { experiences, villages, whyLocals, journeySteps, testimonials } = t;

  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <Image
          src={heroImage}
          alt={t.home.hero.imageAlt}
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          className="animate-slowZoom object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-night/85 via-night/55 to-night/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-night/70 via-transparent to-transparent" />

        <div className="container-px relative w-full pt-24">
          <div className="max-w-2xl animate-fadeUp text-white">
            <span className="eyebrow text-white before:bg-ember">{t.home.hero.badge}</span>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
              {t.home.hero.titleLine1}
              <br />
              {t.home.hero.titleLine2}
            </h1>
            <p className="mt-6 max-w-lg text-xl leading-relaxed text-white/85">
              {t.home.hero.subtitle}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <LocaleLink href="#experiences" className="btn-primary">
                {t.home.hero.exploreBtn}
              </LocaleLink>
              <LocaleLink href="#join" className="btn-secondary">
                {t.home.hero.joinBtn}
              </LocaleLink>
            </div>

            {/* meet-a-local hint badge */}
            <div className="mt-12 inline-flex items-center gap-3 rounded-full bg-white/12 py-2 pl-2 pr-5 backdrop-blur-sm">
              <span className="flex -space-x-3">
                {experiences.map((e) => (
                  <span
                    key={e.name}
                    className="relative h-9 w-9 overflow-hidden rounded-full ring-2 ring-white/70"
                  >
                    <Image src={e.portrait} alt={e.name} fill sizes="36px" className="object-cover" />
                  </span>
                ))}
              </span>
              <span className="text-sm text-white/85">{t.home.hero.hostHint}</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/60 sm:flex">
          <span className="text-[11px] font-medium uppercase tracking-[0.25em]">
            {t.home.hero.scroll}
          </span>
          <span className="h-9 w-px animate-pulse bg-white/40" />
        </div>
      </section>

      {/* ---------- FEATURED LOCAL EXPERIENCES (people first) ---------- */}
      <section id="experiences" className="bg-sand py-24">
        <div className="container-px">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">{t.home.experiencesSection.eyebrow}</span>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
              {t.home.experiencesSection.title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink/65">
              {t.home.experiencesSection.body}
            </p>
          </Reveal>

          <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {experiences.map((exp, i) => (
              <Reveal key={exp.name} delay={i * 110} className="h-full">
                <ExperienceCard exp={exp} ctaLabel={t.cards.experienceCta} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- WHY LOCALS ---------- */}
      <section className="bg-paper py-24">
        <div className="container-px">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow justify-center">{t.home.whyLocalsSection.eyebrow}</span>
            <h2 className="mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">
              {t.home.whyLocalsSection.title}
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-7 md:grid-cols-3">
            {whyLocals.map((item, i) => (
              <Reveal key={item.title} delay={i * 110}>
                <div className="flex h-full flex-col rounded-4xl border border-ink/5 bg-sand p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal/10 font-display text-xl font-semibold text-teal">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-6 font-display text-xl font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/65">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FEATURED VILLAGES (places, second) ---------- */}
      <section className="bg-sand py-24">
        <div className="container-px">
          <Reveal className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-xl">
              <span className="eyebrow">{t.home.villagesSection.eyebrow}</span>
              <h2 className="mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">
                {t.home.villagesSection.title}
              </h2>
            </div>
            <LocaleLink href="/destinations" className="btn-ghost shrink-0">
              {t.home.villagesSection.viewAll}
            </LocaleLink>
          </Reveal>

          <div className="mt-14 grid gap-7 md:grid-cols-3">
            {villages.map((v, i) => (
              <Reveal key={v.name} delay={i * 110}>
                <DestinationCard
                  name={v.name}
                  description={v.description}
                  image={v.image}
                  cta={t.cards.destinationCta}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- THE LOCAL SPIRIT ---------- */}
      <section className="bg-paper py-24">
        <div className="container-px grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-4xl shadow-card">
              <Image
                src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=1200"
                alt={t.home.spirit.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <span className="eyebrow">{t.home.spirit.eyebrow}</span>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
              {t.home.spirit.title}
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink/70">
              {t.home.spirit.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- EXPERIENCE CALABRIA DIFFERENTLY (timeline) ---------- */}
      <section className="bg-brand py-24 text-white">
        <div className="container-px">
          <Reveal className="max-w-2xl">
            <span className="eyebrow text-white before:bg-ember">{t.home.journeySection.eyebrow}</span>
            <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">
              {t.home.journeySection.title}
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-px sm:grid-cols-2 lg:grid-cols-4">
            {journeySteps.map((step, i) => (
              <Reveal key={step.label} delay={i * 110}>
                <div className="relative h-full px-1 sm:px-6 lg:px-0 lg:pr-8">
                  <div className="flex items-center gap-4">
                    <span className="font-display text-5xl font-semibold text-ember">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px flex-1 bg-white/20" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-semibold">{step.label}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/75">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- TESTIMONIALS ---------- */}
      <section className="bg-sand py-24">
        <div className="container-px">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow justify-center">{t.home.testimonialsSection.eyebrow}</span>
            <h2 className="mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">
              {t.home.testimonialsSection.title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink/65">
              {t.home.testimonialsSection.body}
            </p>
          </Reveal>

          <div className="mt-14 grid gap-7 md:grid-cols-3">
            {testimonials.map((tm, i) => (
              <Reveal key={tm.name} delay={i * 110} className="h-full">
                <TestimonialCard {...tm} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- JOIN ---------- */}
      <CTASection />
    </>
  );
}
