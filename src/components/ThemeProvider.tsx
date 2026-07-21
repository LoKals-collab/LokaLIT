"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ComponentProps } from "react";

/**
 * Wrapper di next-themes per l'App Router.
 * - attribute="class": applica .dark su <html> (allineato a darkMode:"class" in Tailwind).
 * - defaultTheme="system" + enableSystem: rispetta la preferenza di sistema.
 * - la scelta viene persistita automaticamente in localStorage.
 * Lo script di next-themes imposta il tema prima del paint → niente flash né mismatch.
 */
export default function ThemeProvider({
  children,
  ...props
}: ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
