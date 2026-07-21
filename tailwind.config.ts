import type { Config } from "tailwindcss";

/** Colore basato su CSS variable a canali RGB: compatibile con le opacità Tailwind (es. text-ink/65). */
const v = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // --- Token semantici (light/dark via CSS variables in globals.css) ---
        background: v("background"),
        surface: v("surface"),
        foreground: v("foreground"),
        brand: v("brand"), // teal "ricco" per i pannelli colorati (bg-brand)
        night: v("night"), // scuro fisso per gli scrim sulle foto e il footer

        // --- Brand accenti ---
        teal: {
          DEFAULT: v("teal"),
          dark: v("teal-dark"),
          light: "#14908680",
        },
        ember: {
          DEFAULT: v("ember"),
          dark: v("ember-dark"),
        },

        // --- Alias retro-compatibili: le classi esistenti diventano theme-aware ---
        ink: v("foreground"),
        sand: v("background"),
        paper: v("surface"),
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
        display: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        soft: "0 18px 50px -20px rgba(31, 41, 55, 0.18)",
        card: "0 24px 60px -30px rgba(15, 118, 110, 0.28)",
        lift: "0 30px 70px -28px rgba(31, 41, 55, 0.30)",
      },
      maxWidth: {
        content: "1180px",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slowZoom: {
          "0%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1.14)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        slowZoom: "slowZoom 18s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
