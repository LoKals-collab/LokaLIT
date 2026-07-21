"use client";

import Image from "next/image";
import LocaleLink from "@/components/LocaleLink";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { useI18n } from "@/lib/i18n";

export default function MissionContent() {
  const { t } = useI18n();
  const m = t.mission;

  return (
    <>
      <Hero
        image="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&q=80&w=2000"
        eyebrow={m.hero.eyebrow}
        headline={m.hero.headline}
        subheadline={m.hero.subheadline}
        alt={m.hero.imageAlt}
      />

      {/* ---------- OUR VISION ---------- */}
      <section className="bg-sand py-24">
        <div className="container-px grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <span className="eyebrow">{m.vision.eyebrow}</span>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
              {m.vision.title}
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="space-y-5 text-lg leading-relaxed text-ink/70">
              {m.vision.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- WHY CALABRIA ---------- */}
      <section className="bg-paper py-24">
        <div className="container-px">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow justify-center">{m.whyCalabria.eyebrow}</span>
            <h2 className="mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">
              {m.whyCalabria.title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink/65">{m.whyCalabria.body}</p>
          </Reveal>

          <div className="mt-14 grid gap-7 md:grid-cols-2">
            {m.whyCalabria.items.map((item, i) => (
              <Reveal key={item.title} delay={(i % 2) * 110}>
                <article className="group flex h-full flex-col overflow-hidden rounded-4xl bg-sand shadow-soft sm:flex-row">
                  <div className="relative h-52 w-full shrink-0 sm:h-auto sm:w-44">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 176px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-7">
                    <h3 className="font-display text-xl font-semibold text-ink">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink/65">{item.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- OUR VALUES ---------- */}
      <section className="bg-brand py-24 text-white">
        <div className="container-px">
          <Reveal className="max-w-2xl">
            <span className="eyebrow text-white before:bg-ember">{m.valuesSection.eyebrow}</span>
            <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">
              {m.valuesSection.title}
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {t.values.map((v, i) => (
              <Reveal key={v.title} delay={i * 100}>
                <div className="flex h-full flex-col rounded-4xl bg-white/10 p-7 backdrop-blur-sm transition-all duration-300 hover:bg-white/15">
                  <span className="font-display text-4xl font-semibold text-ember">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/75">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- LOOKING AHEAD ---------- */}
      <section className="bg-sand py-24">
        <div className="container-px grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">{m.lookingAhead.eyebrow}</span>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
              {m.lookingAhead.title}
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink/70">
              {m.lookingAhead.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <LocaleLink href="/destinations" className="btn-ghost mt-8">
              {m.lookingAhead.cta}
            </LocaleLink>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-4xl shadow-soft">
                <Image
                  src="https://images.unsplash.com/photo-1499678329028-101435549a4e?auto=format&fit=crop&q=80&w=800"
                  alt={m.lookingAhead.imageAlt1}
                  fill
                  sizes="280px"
                  className="object-cover"
                />
              </div>
              <div className="relative mt-8 aspect-[3/4] overflow-hidden rounded-4xl shadow-soft">
                <Image
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=800"
                  alt={m.lookingAhead.imageAlt2}
                  fill
                  sizes="280px"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
