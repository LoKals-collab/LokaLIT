import Image from "next/image";
import LocaleLink from "@/components/LocaleLink";
import BookingModal from "@/components/BookingModal";
import SaveButton from "@/components/SaveButton";
import type { Experience } from "@/lib/data";

export default function ExperienceCard({
  exp,
  ctaLabel,
}: {
  exp: Experience;
  ctaLabel: string;
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-4xl bg-paper shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
      <div className="relative h-60 overflow-hidden">
        <Image
          src={exp.image}
          alt={`${exp.name} · ${exp.village}`}
          fill
          sizes="(max-width: 768px) 100vw, 380px"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night/55 via-transparent to-transparent" />

        <SaveButton
          experienceSlug={exp.slug}
          experienceName={exp.name}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-night/35 text-white backdrop-blur-sm transition-colors hover:bg-night/55"
        />

        {/* portrait + name overlay — people first */}
        <div className="absolute bottom-4 left-4 flex items-center gap-3">
          <div className="relative h-14 w-14 overflow-hidden rounded-full ring-3 ring-white shadow-soft">
            <Image
              src={exp.portrait}
              alt={exp.name}
              fill
              sizes="56px"
              className="object-cover"
            />
          </div>
          <div className="text-white">
            <p className="font-display text-xl font-semibold leading-none">{exp.name}</p>
            <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-white/85">
              {exp.village}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-semibold leading-snug text-ink">
          {exp.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/65">{exp.description}</p>
        <div className="mt-5 flex items-center justify-between gap-4">
          <LocaleLink href={`/experiences/${exp.slug}`} className="link-arrow self-start">
            {ctaLabel}
            <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </LocaleLink>
          <BookingModal
            experienceName={exp.name}
            buttonClassName="rounded-full bg-ember px-4 py-2 text-xs font-semibold text-white shadow-soft transition-all duration-300 hover:bg-ember-dark"
          />
        </div>
      </div>
    </article>
  );
}
