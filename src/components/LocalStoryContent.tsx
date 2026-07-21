"use client";

import Image from "next/image";
import LocaleLink from "@/components/LocaleLink";
import Reveal from "@/components/Reveal";
import BookingModal from "@/components/BookingModal";
import SaveButton from "@/components/SaveButton";
import { useI18n } from "@/lib/i18n";

export default function LocalStoryContent({ slug }: { slug: string }) {
  const { t } = useI18n();
  const lp = t.localPage;

  const exp = t.experiences.find((e) => e.slug === slug);
  if (!exp) return null;

  const village = exp.villageSlug
    ? t.destinations.find((d) => d.slug === exp.villageSlug)
    : undefined;

  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative flex min-h-[78vh] items-end overflow-hidden">
        <Image
          src={exp.image}
          alt={`${exp.name} · ${exp.village}`}
          fill
          priority
          sizes="100vw"
          className="animate-slowZoom object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night/90 via-night/45 to-night/25" />

        <div className="container-px relative w-full pb-16 pt-36">
          <div className="max-w-2xl animate-fadeUp text-white">
            <LocaleLink
              href="/#experiences"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M11 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {lp.backLink}
            </LocaleLink>

            <div className="mt-6 flex items-center gap-4">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full ring-3 ring-white/80 shadow-soft">
                <Image src={exp.portrait} alt={exp.name} fill sizes="64px" className="object-cover" />
              </div>
              <div>
                <span className="eyebrow text-white before:bg-ember">{lp.eyebrow}</span>
                <p className="mt-1 text-sm font-medium uppercase tracking-[0.18em] text-white/85">
                  {exp.role}
                </p>
              </div>
            </div>

            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.03] sm:text-6xl">
              {exp.name}
            </h1>
            <p className="mt-5 max-w-xl text-xl leading-relaxed text-white/85">{exp.title}</p>

            <div className="mt-8 flex items-center gap-3">
              <BookingModal experienceName={exp.name} buttonClassName="btn-primary" />
              <SaveButton
                experienceSlug={exp.slug}
                experienceName={exp.name}
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/12 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- STORY ---------- */}
      <section className="bg-sand py-24">
        <div className="container-px grid items-start gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-4xl shadow-card lg:sticky lg:top-28">
              <Image
                src={exp.portrait}
                alt={exp.name}
                fill
                sizes="(max-width: 1024px) 100vw, 460px"
                className="object-cover"
              />
              <span className="absolute -bottom-4 left-6 rounded-full bg-ember px-5 py-2 text-sm font-semibold text-white shadow-soft">
                {exp.village}
              </span>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <span className="eyebrow">{lp.storyHeading}</span>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
              {exp.name}, {exp.village}
            </h2>

            <div className="mt-7 space-y-5 text-lg leading-relaxed text-ink/75">
              {exp.story.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <figure className="mt-9 rounded-4xl border-l-4 border-teal bg-paper/70 p-7">
              <blockquote className="font-display text-2xl font-medium italic leading-snug text-ink">
                “{exp.quote}”
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-teal">
                {exp.name}
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ---------- WHAT YOU'LL EXPERIENCE ---------- */}
      <section className="bg-paper py-24">
        <div className="container-px">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">{lp.offeringsHeading}</span>
            <h2 className="mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">
              {exp.title}
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-7 md:grid-cols-2">
            {exp.offerings.map((o, i) => (
              <Reveal key={o} delay={i * 90}>
                <div className="flex h-full items-start gap-5 rounded-4xl border border-ink/5 bg-sand p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal/10 font-display text-xl font-semibold text-teal">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="pt-1.5 text-lg leading-relaxed text-ink/80">{o}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- LINKED VILLAGE ---------- */}
      {village && (
        <section className="bg-sand pb-24">
          <div className="container-px">
            <Reveal>
              <LocaleLink
                href={`/destinations#${village.slug}`}
                className="group relative grid items-center gap-8 overflow-hidden rounded-4xl bg-paper shadow-card md:grid-cols-2"
              >
                <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto md:h-full md:min-h-[20rem]">
                  <Image
                    src={village.image}
                    alt={village.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 560px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 sm:p-10">
                  <span className="eyebrow">{lp.villageHeading}</span>
                  <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
                    {village.name}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-ink/70">{village.tagline}</p>
                  <span className="link-arrow mt-6 inline-flex">
                    {lp.villageCta}
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </LocaleLink>
            </Reveal>
          </div>
        </section>
      )}

      {/* ---------- CTA ---------- */}
      <section className="relative overflow-hidden bg-brand py-24 text-white">
        <div
          className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-ember/20 blur-3xl"
          aria-hidden="true"
        />
        <div className="container-px relative text-center">
          <Reveal className="mx-auto max-w-2xl">
            <h2 className="font-display text-4xl font-semibold sm:text-5xl">{lp.ctaTitle}</h2>
            <p className="mt-5 text-lg leading-relaxed text-white/80">{lp.ctaBody}</p>
            <LocaleLink href="/#join" className="btn-primary mt-9 bg-white text-brand hover:bg-white/90">
              {lp.ctaButton}
            </LocaleLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
