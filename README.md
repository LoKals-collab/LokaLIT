# Locals — Meet Calabria Through Its People

A validation landing site for **Locals**, an authentic slow-travel concept connecting
travellers with local hosts across the hidden villages of Calabria.

Built with **Next.js 14 (App Router) · TypeScript · Tailwind CSS**.

## Strategic intent

The site is designed to test one hypothesis: **do people respond more to the person
than to the place?** Every primary section leads with a real local host (Francesco,
Federica, Maria…) and the experience you'd share with them. Villages are introduced
only *after* the people — so engagement on "meet a local" vs. "discover a village"
can be measured.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

> Fonts (Poppins + Fraunces) are loaded via `next/font/google` and are fetched at
> build time. A network connection to Google Fonts is required for the build step.

## Pages

| Route            | Purpose                                                        |
| ---------------- | ------------------------------------------------------------- |
| `/`              | Long-form home: hero, featured hosts, why, villages, spirit, timeline, testimonials, lead capture |
| `/mission`       | Brand storytelling: vision, why Calabria, values, looking ahead |
| `/destinations`  | Six village profiles (Scilla, Gerace, Civita, Pentedattilo, Badolato, Stilo) |

## Reusable components (`src/components`)

`Navbar` · `Footer` · `Hero` · `ExperienceCard` · `DestinationCard` ·
`TestimonialCard` · `CTASection` · `Reveal` (scroll-in animation)

All site copy and content lives in `src/lib/data.ts`.

## Design system

| Token        | Value     | Use                          |
| ------------ | --------- | ---------------------------- |
| Teal         | `#0F766E` | Brand primary, dark sections |
| Ember orange | `#F97316` | CTAs and accents only        |
| Ink          | `#1F2937` | Text, footer                 |
| Sand         | `#F8F3EC` | Page background              |
| Paper        | `#FFFFFF` | Cards, alternating sections  |

Type pairs **Fraunces** (editorial display serif) with **Poppins** (UI/body) for a
premium slow-travel magazine feel.

## Images

Hero and card imagery use Unsplash URLs as placeholders (configured in
`next.config.mjs`). Swap these for licensed photography of your real hosts and
villages before launch — the people-first imagery is the heart of the concept.

## Notes for production

- Wire the `Keep me updated` form in `CTASection.tsx` to your email/CRM endpoint.
- Replace placeholder social links in `Footer.tsx`.
- Update `metadataBase` in `layout.tsx` to the live domain for correct OG/SEO URLs.
