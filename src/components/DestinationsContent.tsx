"use client";

import Image from "next/image";
import LocaleLink from "@/components/LocaleLink";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import { useI18n } from "@/lib/i18n";

export default function DestinationsContent() {
  const { t } = useI18n();
  const d = t.destinationsPage;

  return (
    <>
      <Hero
        image="https://images.unsplash.com/photo-1499678329028-101435549a4e?auto=format&fit=crop&q=80&w=2000"
        eyebrow={d.hero.eyebrow}
        headline={d.hero.headline}
        subheadline={d.hero.subheadline}
        alt={d.hero.imageAlt}
      />

      <section className="bg-sand py-24">
        <div className="container-px space-y-24">
          {t.destinations.map((dest, i) => {
            const flip = i % 2 === 1;
            return (
              <Reveal key={dest.slug}>
                <article
                  id={dest.slug}
                  className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
                >
                  {/* image */}
                  <div className={`relative ${flip ? "lg:order-2" : ""}`}>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-4xl shadow-card">
                      <Image
                        src={dest.image}
                        alt={dest.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 560px"
                        className="object-cover"
                      />
                    </div>
                    <span className="absolute -bottom-4 left-6 rounded-full bg-ember px-5 py-2 text-sm font-semibold text-white shadow-soft">
                      {dest.tagline}
                    </span>
                  </div>

                  {/* content */}
                  <div className={flip ? "lg:order-1" : ""}>
                    <span className="eyebrow">{`${d.villageLabel} ${String(i + 1).padStart(2, "0")}`}</span>
                    <h2 className="mt-3 font-display text-4xl font-semibold text-ink sm:text-5xl">
                      {dest.name}
                    </h2>
                    <p className="mt-5 text-lg leading-relaxed text-ink/70">{dest.story}</p>

                    <div className="mt-7">
                      <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
                        {d.highlightsHeading}
                      </h3>
                      <ul className="mt-4 flex flex-wrap gap-2.5">
                        {dest.highlights.map((h) => (
                          <li
                            key={h}
                            className="rounded-full bg-paper px-4 py-2 text-sm font-medium text-ink/75 shadow-soft"
                          >
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-7 rounded-4xl border-l-4 border-teal bg-paper/60 p-6">
                      <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
                        {d.cultureHeading}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-ink/70">{dest.culture}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ---------- MORE VILLAGES ---------- */}
      <section className="relative overflow-hidden bg-brand py-24 text-white">
        <div
          className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-ember/20 blur-3xl"
          aria-hidden="true"
        />
        <div className="container-px relative text-center">
          <Reveal className="mx-auto max-w-2xl">
            <span className="eyebrow justify-center text-white before:bg-ember">
              {d.more.eyebrow}
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">
              {d.more.title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/80">{d.more.body}</p>
            <LocaleLink href="/#join" className="btn-primary mt-9 bg-white text-brand hover:bg-white/90">
              {d.more.cta}
            </LocaleLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
