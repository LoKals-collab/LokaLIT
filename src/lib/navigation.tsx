"use client";

import { createContext, useContext, useTransition, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import LoadingSpinner from "@/components/LoadingSpinner";

type NavigationContextValue = {
  /** Naviga verso un percorso interno mostrando lo spinner fino al commit. */
  navigate: (href: string) => void;
  /** True mentre una transizione di pagina è in corso. */
  isNavigating: boolean;
};

const NavigationContext = createContext<NavigationContextValue | null>(null);

/**
 * Avvolge l'app e rende globale lo stato di caricamento tra le pagine.
 * Usa useTransition: isPending resta true finché la nuova route non è
 * renderizzata, quindi lo spinner si nasconde automaticamente.
 */
export function NavigationProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const navigate = (href: string) => {
    startTransition(() => router.push(href));
  };

  return (
    <NavigationContext.Provider value={{ navigate, isNavigating: isPending }}>
      {children}
      <LoadingSpinner active={isPending} />
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const ctx = useContext(NavigationContext);
  if (!ctx) {
    throw new Error("useNavigation deve essere usato dentro <NavigationProvider>");
  }
  return ctx;
}
