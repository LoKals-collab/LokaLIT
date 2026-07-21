"use client";

import Link from "next/link";
import type { ComponentProps, MouseEvent } from "react";
import { useI18n } from "@/lib/i18n";
import { useNavigation } from "@/lib/navigation";

type Props = ComponentProps<typeof Link>;

/**
 * Come <Link>, ma aggiunge il prefisso della lingua attiva ai percorsi interni
 * assoluti (es. "/mission" → "/it/mission"). Le àncore ("#join") e gli URL
 * esterni ("https://…") vengono lasciati invariati.
 *
 * Sulla navigazione interna avvia lo spinner globale via useNavigation, così
 * il caricamento è visibile a ogni cambio pagina.
 */
export default function LocaleLink({ href, onClick, ...rest }: Props) {
  const { locale } = useI18n();
  const { navigate } = useNavigation();

  let finalHref = href;
  if (typeof href === "string" && href.startsWith("/")) {
    finalHref = href === "/" ? `/${locale}` : `/${locale}${href}`;
  }

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);

    // Lascia il comportamento nativo di <Link> per: àncore/scroll, link esterni,
    // apertura in nuova scheda e click con tasti modificatori o non sinistri.
    if (
      e.defaultPrevented ||
      typeof finalHref !== "string" ||
      !finalHref.startsWith("/") ||
      finalHref.includes("#") ||
      rest.target === "_blank" ||
      e.button !== 0 ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey
    ) {
      return;
    }

    e.preventDefault();
    navigate(finalHref);
  };

  return <Link href={finalHref} onClick={handleClick} {...rest} />;
}
