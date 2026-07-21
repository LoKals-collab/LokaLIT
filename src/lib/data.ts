// Tipi condivisi per i contenuti della webapp.
// I testi veri e propri (in italiano e inglese) vivono in `src/lib/translations.ts`.

import type { StaticImageData } from "next/image";

export type Experience = {
  slug: string;
  name: string;
  village: string;
  /** Ruolo / vocazione del local, mostrato nella pagina storia. */
  role: string;
  title: string;
  description: string;
  image: string;
  portrait: string;
  /** Racconto esteso (un elemento per paragrafo) per la pagina "Scopri la storia". */
  story: string[];
  /** Cosa si vive insieme al local. */
  offerings: string[];
  /** Citazione personale in evidenza. */
  quote: string;
  /** Slug della destinazione collegata, se il borgo è tra quelli mappati. */
  villageSlug?: string;
};

export type Destination = {
  slug: string;
  name: string;
  tagline: string;
  story: string;
  highlights: string[];
  culture: string;
  image: string | StaticImageData;
};
