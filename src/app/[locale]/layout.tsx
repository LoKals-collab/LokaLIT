import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/next";
import { Poppins, Fraunces } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import { LanguageProvider } from "@/lib/i18n";
import { NavigationProvider } from "@/lib/navigation";
import { translations, locales, altLanguages, type Locale } from "@/lib/translations";
import { SITE_URL } from "@/lib/site";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

// Pre-genera staticamente entrambe le lingue.
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = (locales.includes(params.locale as Locale) ? params.locale : "it") as Locale;
  const t = translations[locale];

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: t.meta.homeTitle,
      template: `%s | ${t.meta.siteName}`,
    },
    description: t.meta.homeDescription,
    keywords: [
      "borghi calabria",
      "borgo calabria",
      "viaggio autentico italia",
      "turismo lento italia",
      "esperienze locali calabria",
      "cosa fare in calabria",
      "cosa visitare in calabria",
      "località turistiche in calabria",
    ],
    authors: [{ name: t.meta.siteName }],
    alternates: {
      canonical: `/${locale}`,
      languages: altLanguages(""),
    },
    openGraph: {
      title: t.meta.homeTitle,
      description: t.meta.homeDescription,
      type: "website",
      locale: locale === "it" ? "it_IT" : "en_GB",
      siteName: t.meta.siteName,
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.homeTitle,
      description: t.meta.homeDescription,
    },
    robots: { index: true, follow: true },
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(params.locale as Locale)) {
    notFound();
  }
  const locale = params.locale as Locale;

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${poppins.variable} ${fraunces.variable}`}
    >
      <body className="font-sans antialiased">
        <ThemeProvider>
          <LanguageProvider locale={locale}>
            <NavigationProvider>
              <Navbar />
              <main>{children}</main>
              <Footer />
            </NavigationProvider>
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
