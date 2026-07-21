"use client";

import { useI18n } from "@/lib/i18n";
import LocaleLink from "@/components/LocaleLink";

function Social({ label, path }: { label: string; path: string }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 transition-all duration-200 hover:bg-ember hover:text-white"
    >
      <svg viewBox="0 0 24 24" className="h-4.5 w-4.5 h-5 w-5" fill="currentColor" aria-hidden="true">
        <path d={path} />
      </svg>
    </a>
  );
}

export default function Footer() {
  const { t } = useI18n();
  const nav = [
    { href: "/", label: t.nav.home },
    { href: "/mission", label: t.nav.mission },
    { href: "/destinations", label: t.nav.destinations },
  ];

  return (
    <footer className="bg-night text-white">
      <div className="container-px py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm">
            <span className="font-display text-3xl font-semibold tracking-tight">
              Lokal<span className="text-ember">it</span>
            </span>
            <p className="mt-4 text-sm leading-relaxed text-white/65">
              {t.footer.tagline}
            </p>
            <div className="mt-6 flex gap-3">
              {/* <Social
                label="Instagram"
                path="M12 2.2c3.2 0 3.6 0 4.9.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s0 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58 0-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s0-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2Zm0 1.8c-3.15 0-3.5 0-4.74.07-.9.04-1.38.2-1.71.32-.43.17-.74.37-1.06.69-.32.32-.52.63-.69 1.06-.13.33-.28.81-.32 1.71C3.4 8.5 3.4 8.85 3.4 12s0 3.5.07 4.74c.04.9.2 1.38.32 1.71.17.43.37.74.69 1.06.32.32.63.52 1.06.69.33.13.81.28 1.71.32 1.24.06 1.59.07 4.74.07s3.5 0 4.74-.07c.9-.04 1.38-.2 1.71-.32.43-.17.74-.37 1.06-.69.32-.32.52-.63.69-1.06.13-.33.28-.81.32-1.71.06-1.24.07-1.59.07-4.74s0-3.5-.07-4.74c-.04-.9-.2-1.38-.32-1.71a2.85 2.85 0 0 0-.69-1.06 2.85 2.85 0 0 0-1.06-.69c-.33-.13-.81-.28-1.71-.32C15.5 4 15.15 4 12 4Zm0 3.06A4.94 4.94 0 1 1 12 17a4.94 4.94 0 0 1 0-9.88Zm0 1.8a3.14 3.14 0 1 0 0 6.28 3.14 3.14 0 0 0 0-6.28Zm5.15-2.95a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3Z"
              /> */}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
              {t.footer.exploreHeading}
            </h3>
            <ul className="mt-4 space-y-3">
              {nav.map((l) => (
                <li key={l.href}>
                  <LocaleLink
                    href={l.href}
                    className="text-sm text-white/75 transition-colors hover:text-ember"
                  >
                    {l.label}
                  </LocaleLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
              {t.footer.stayHeading}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-white/65">
              {t.footer.stayBody}
            </p>
            <LocaleLink href="/#join" className="link-arrow mt-4 text-ember hover:text-white">
              {t.footer.joinLink}
            </LocaleLink>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-7 text-xs text-white/45 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {t.meta.siteName}. {t.footer.madeWith}</p>
          <p className="flex gap-5">
            <LocaleLink href="/privacy" className="transition-colors hover:text-white/80">
              {t.footer.privacy}
            </LocaleLink>
            <LocaleLink href="/contatti" className="transition-colors hover:text-white/80">
              {t.footer.contact}
            </LocaleLink>
          </p>
        </div>
      </div>
    </footer>
  );
}
