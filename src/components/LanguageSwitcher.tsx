"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useI18n } from "@/lib/i18n";
import { locales, localeNames, type Locale } from "@/lib/translations";

type Props = {
  /** "light" per sfondi scuri (testo chiaro), "dark" per sfondi chiari. */
  variant?: "light" | "dark";
  className?: string;
};

/** Sostituisce il primo segmento del percorso con la lingua scelta. */
function withLocale(pathname: string, next: Locale): string {
  const segments = pathname.split("/");
  // segments[0] è "" (il percorso inizia con "/"), segments[1] è la lingua.
  if (locales.includes(segments[1] as Locale)) {
    segments[1] = next;
  } else {
    segments.splice(1, 0, next);
  }
  return segments.join("/") || `/${next}`;
}

export default function LanguageSwitcher({ variant = "dark", className = "" }: Props) {
  const { locale, t } = useI18n();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Chiude il menù cliccando fuori o premendo Esc.
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const choose = (next: Locale) => {
    setOpen(false);
    if (next === locale) return;
    // Ricorda la preferenza per le visite successive (letta dal middleware).
    document.cookie = `NEXT_LOCALE=${next}; path=/; max-age=31536000; samesite=lax`;
    router.push(withLocale(pathname, next));
  };

  const light = variant === "light";

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t.language.choose}
        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium transition-colors duration-200 ${
          light
            ? "text-white/85 hover:bg-white/15 hover:text-white"
            : "text-ink/75 hover:bg-sand hover:text-teal"
        }`}
      >
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
        </svg>
        <span className="uppercase">{locale}</span>
        <svg
          viewBox="0 0 24 24"
          className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={t.language.label}
          className="absolute right-0 z-50 mt-2 min-w-[9.5rem] overflow-hidden rounded-2xl bg-paper py-1.5 shadow-card ring-1 ring-ink/5"
        >
          {locales.map((l) => {
            const active = l === locale;
            return (
              <li key={l} role="option" aria-selected={active}>
                <button
                  type="button"
                  onClick={() => choose(l)}
                  className={`flex w-full items-center justify-between gap-3 px-4 py-2.5 text-left text-sm transition-colors ${
                    active
                      ? "font-semibold text-teal"
                      : "text-ink/75 hover:bg-sand hover:text-teal"
                  }`}
                >
                  <span>{localeNames[l]}</span>
                  <span className="text-xs uppercase tracking-wider text-ink/40">{l}</span>
                  {active && (
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4 text-ember"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      aria-hidden="true"
                    >
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
