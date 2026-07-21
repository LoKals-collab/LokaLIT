"use client";

import { createContext, useContext, type ReactNode } from "react";
import { translations, type Dictionary, type Locale } from "@/lib/translations";

type I18nContextValue = {
  locale: Locale;
  t: Dictionary;
};

const I18nContext = createContext<I18nContextValue | null>(null);

/**
 * Rende disponibile la lingua attiva (presa dall'URL, segmento [locale]) e il
 * dizionario tradotto a tutti i componenti figli.
 */
export function LanguageProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  return (
    <I18nContext.Provider value={{ locale, t: translations[locale] }}>
      {children}
    </I18nContext.Provider>
  );
}

/** Hook per accedere a lingua attiva e dizionario tradotto. */
export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n deve essere usato dentro <LanguageProvider>");
  }
  return ctx;
}

/** Sostituisce i segnaposto tipo {name} in una stringa tradotta. */
export function fill(template: string, values: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (_, key) => values[key] ?? `{${key}}`);
}
