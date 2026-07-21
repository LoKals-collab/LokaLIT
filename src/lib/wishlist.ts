"use client";

import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "lokalit_saved_experiences";
const WISHLIST_EVENT = "lokalit:wishlist-change";

function readSaved(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

function writeSaved(slugs: string[]) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(slugs));
  window.dispatchEvent(new Event(WISHLIST_EVENT));
}

function toggleSaved(slug: string): boolean {
  const saved = readSaved();
  const idx = saved.indexOf(slug);
  const nowSaved = idx === -1;
  if (nowSaved) {
    saved.push(slug);
  } else {
    saved.splice(idx, 1);
  }
  writeSaved(saved);
  return nowSaved;
}

/** Stato di salvataggio di un singolo local, sincronizzato tra tutte le istanze aperte. */
export function useSavedExperience(slug: string) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const sync = () => setSaved(readSaved().includes(slug));
    sync();
    window.addEventListener(WISHLIST_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(WISHLIST_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, [slug]);

  const toggle = useCallback(() => toggleSaved(slug), [slug]);

  return { saved, toggle };
}

/** Numero totale di locals salvati, per il badge in Navbar. */
export function useWishlistCount() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const sync = () => setCount(readSaved().length);
    sync();
    window.addEventListener(WISHLIST_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(WISHLIST_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  return count;
}
