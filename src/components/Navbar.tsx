"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import ThemeToggle from "@/components/ThemeToggle";
import WishlistIndicator from "@/components/WishlistIndicator";
import LocaleLink from "@/components/LocaleLink";
import logo from "../images/logo-mark.png";

export default function Navbar() {
  const { t, locale } = useI18n();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/mission", label: t.nav.mission },
    { href: "/destinations", label: t.nav.destinations },
  ];

  // pathname include il prefisso lingua (es. "/it/mission"): confronto con la
  // versione localizzata della voce di menù.
  const isActive = (href: string) =>
    pathname === (href === "/" ? `/${locale}` : `/${locale}${href}`);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 16);
      // nascondi scrollando verso il basso, mostra verso l'alto.
      // resta sempre visibile vicino alla cima della pagina.
      if (y > lastY && y > 80) {
        setHidden(true);
      } else if (y < lastY) {
        setHidden(false);
      }
      lastY = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-transform duration-300 ${
        hidden && !open ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div
        className={`container-px transition-all duration-300 ${
          scrolled || open ? "pt-2.5" : "pt-4 sm:pt-5"
        }`}
      >
        {/* pillola bianca fluttuante */}
        <nav
          className={`mx-auto flex h-16 max-w-5xl items-center justify-between rounded-full pl-6 pr-3 backdrop-blur-md transition-all duration-300 ${
            scrolled || open
              ? "bg-paper/95 shadow-card ring-1 ring-ink/[0.06]"
              : "bg-paper/80 shadow-soft ring-1 ring-white/50"
          }`}
        >
          <LocaleLink
            href="/"
            className="flex items-center"
            aria-label={t.nav.homeAria}
          >
            <Image
              src={logo}
              alt="Lokalit"
              priority
              className="h-12 w-auto dark:brightness-110"
            />
          </LocaleLink>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((l) => {
              const active = isActive(l.href);
              return (
                <LocaleLink
                  key={l.href}
                  href={l.href}
                  className={`relative text-sm font-medium transition-colors duration-200 ${
                    active ? "text-teal" : "text-ink/70 hover:text-teal"
                  }`}
                >
                  {l.label}
                  {active && (
                    <span className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-ember" />
                  )}
                </LocaleLink>
              );
            })}
            <span className="h-6 w-px bg-ink/10" aria-hidden="true" />
            <WishlistIndicator />
            <ThemeToggle variant="dark" />
            <LanguageSwitcher variant="dark" />
            <LocaleLink href="/#join" className="btn-primary">
              {t.nav.join}
            </LocaleLink>
          </div>

          <div className="flex items-center gap-1 md:hidden">
            <WishlistIndicator />
            <ThemeToggle variant="dark" />
            <LanguageSwitcher variant="dark" />
            <button
              type="button"
              aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full transition-colors hover:bg-sand"
            >
              <span className="relative block h-3.5 w-5">
                <span
                  className={`absolute left-0 block h-0.5 w-5 rounded-full bg-ink transition-all duration-300 ${
                    open ? "top-1.5 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1.5 block h-0.5 w-5 rounded-full bg-ink transition-all duration-200 ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 block h-0.5 w-5 rounded-full bg-ink transition-all duration-300 ${
                    open ? "top-1.5 -rotate-45" : "top-3"
                  }`}
                />
              </span>
            </button>
          </div>
        </nav>

        {/* pannello mobile: una card bianca arrotondata sotto la pillola */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            open ? "mt-2 max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mx-auto flex max-w-5xl flex-col gap-1 rounded-3xl bg-paper p-3 shadow-card ring-1 ring-ink/[0.06]">
            {links.map((l) => {
              const active = isActive(l.href);
              return (
                <LocaleLink
                  key={l.href}
                  href={l.href}
                  className={`rounded-2xl px-4 py-3 text-lg font-medium transition-colors ${
                    active ? "bg-sand text-teal" : "text-ink hover:bg-sand hover:text-teal"
                  }`}
                >
                  {l.label}
                </LocaleLink>
              );
            })}
            <LocaleLink href="/#join" className="btn-primary mt-2 w-full">
              {t.nav.join}
            </LocaleLink>
          </div>
        </div>
      </div>
    </header>
  );
}
