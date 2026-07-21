"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useI18n } from "@/lib/i18n";

type Props = {
  /** "light" per sfondi scuri (icona chiara), "dark" per sfondi chiari. */
  variant?: "light" | "dark";
  className?: string;
};

/**
 * Pulsante di commutazione tema. Parte dalla preferenza di sistema e, al click,
 * fissa esplicitamente light/dark (persistito da next-themes).
 * Il guard `mounted` evita l'hydration mismatch: lato server il tema risolto
 * non è noto, quindi al primo render mostriamo un segnaposto delle stesse
 * dimensioni per non causare layout shift.
 */
export default function ThemeToggle({ variant = "dark", className = "" }: Props) {
  const { resolvedTheme, setTheme } = useTheme();
  const { t } = useI18n();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";
  const light = variant === "light";

  const base = `inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors duration-200 ${
    light
      ? "text-white/85 hover:bg-white/15 hover:text-white"
      : "text-ink/75 hover:bg-sand hover:text-teal"
  } ${className}`;

  if (!mounted) {
    // Segnaposto isomorfo (stesse dimensioni) finché il tema non è noto lato client.
    return <span aria-hidden="true" className={base} />;
  }

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? t.nav.theme.toLight : t.nav.theme.toDark}
      title={t.nav.theme.label}
      className={base}
    >
      {isDark ? (
        // Sole → passa a chiaro
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" strokeLinecap="round" />
        </svg>
      ) : (
        // Luna → passa a scuro
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  );
}
