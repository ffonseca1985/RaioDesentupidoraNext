import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", sm: "1.5rem", lg: "2rem" },
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        /* Semantic surfaces — driven by CSS vars, flip with .dark */
        canvas: "rgb(var(--canvas) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        elevated: "rgb(var(--elevated) / <alpha-value>)",
        hairline: "rgb(var(--hairline) / <alpha-value>)",
        content: {
          DEFAULT: "rgb(var(--content) / <alpha-value>)",
          muted: "rgb(var(--content-muted) / <alpha-value>)",
          subtle: "rgb(var(--content-subtle) / <alpha-value>)",
          invert: "rgb(var(--content-invert) / <alpha-value>)",
        },

        /* Brand: deep institutional navy */
        ink: {
          50: "#f3f6fb", 100: "#e5ebf5", 200: "#c7d5e9", 300: "#9ab2d4",
          400: "#6788ba", 500: "#4567a1", 600: "#345086", 700: "#2b406d",
          800: "#223558", 900: "#16233c", 950: "#0a1424",
        },

        /* Accent: "Raio" — the lightning in the name */
        raio: {
          50: "#fffbeb", 100: "#fff3c6", 200: "#ffe588", 300: "#ffd24a",
          400: "#ffbe20", 500: "#f99d07", 600: "#dd7602", 700: "#b75306",
          800: "#94400c", 900: "#7a350d", 950: "#461a02",
        },

        /* Support: water / hydro */
        aqua: {
          50: "#eff9ff", 100: "#def1ff", 200: "#b6e5ff", 300: "#75d2ff",
          400: "#2cbcff", 500: "#02a2f2", 600: "#0081cf", 700: "#0067a7",
          800: "#04578a", 900: "#0a4872", 950: "#062e4c",
        },

        /* Functional */
        emergency: {
          50: "#fef2f2", 100: "#ffe1e1", 200: "#ffc8c8", 300: "#ffa2a2",
          400: "#fd6d6d", 500: "#f43f3f", 600: "#e11d1d", 700: "#bd1414",
          800: "#9c1515", 900: "#821818", 950: "#470707",
        },

        /* Back-compat with legacy markup */
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },

      fontSize: {
        /* Editorial display scale — tight tracking, controlled leading */
        "display-sm": ["clamp(1.875rem,1.4rem + 2vw,2.5rem)", { lineHeight: "1.1", letterSpacing: "-0.022em", fontWeight: "700" }],
        "display-md": ["clamp(2.25rem,1.6rem + 3vw,3.25rem)", { lineHeight: "1.06", letterSpacing: "-0.026em", fontWeight: "700" }],
        "display-lg": ["clamp(2.75rem,1.8rem + 4.4vw,4.25rem)", { lineHeight: "1.02", letterSpacing: "-0.03em", fontWeight: "700" }],
        "display-xl": ["clamp(3.25rem,2rem + 5.6vw,5.25rem)", { lineHeight: "0.98", letterSpacing: "-0.034em", fontWeight: "700" }],
        eyebrow: ["0.75rem", { lineHeight: "1", letterSpacing: "0.16em", fontWeight: "600" }],
        lede: ["clamp(1.0625rem,1rem + 0.35vw,1.25rem)", { lineHeight: "1.6" }],
      },

      boxShadow: {
        /* Layered, low-opacity elevation — no muddy blur halos */
        e1: "0 1px 2px 0 rgb(10 20 36 / 0.05), 0 1px 3px 0 rgb(10 20 36 / 0.06)",
        e2: "0 2px 4px -1px rgb(10 20 36 / 0.06), 0 4px 12px -2px rgb(10 20 36 / 0.08)",
        e3: "0 4px 8px -2px rgb(10 20 36 / 0.07), 0 12px 28px -6px rgb(10 20 36 / 0.12)",
        e4: "0 8px 16px -4px rgb(10 20 36 / 0.08), 0 24px 56px -12px rgb(10 20 36 / 0.18)",
        raio: "0 6px 20px -6px rgb(249 157 7 / 0.5)",
        inset: "inset 0 1px 0 0 rgb(255 255 255 / 0.06)",
      },

      borderRadius: { "4xl": "2rem" },

      transitionTimingFunction: {
        out: "cubic-bezier(0.16, 1, 0.3, 1)",
        inout: "cubic-bezier(0.65, 0, 0.35, 1)",
      },

      animation: {
        "fade-in": "fadeIn 0.5s cubic-bezier(0.16,1,0.3,1) both",
        "rise-in": "riseIn 0.6s cubic-bezier(0.16,1,0.3,1) both",
        marquee: "marquee 40s linear infinite",
        shimmer: "shimmer 2.4s ease-in-out infinite",
        "pulse-ring": "pulseRing 2.4s cubic-bezier(0.4,0,0.6,1) infinite",
        /* legacy aliases kept so old markup does not break */
        "slide-in": "riseIn 0.6s cubic-bezier(0.16,1,0.3,1) both",
        "bounce-subtle": "riseIn 0.6s cubic-bezier(0.16,1,0.3,1) both",
        glow: "shimmer 2.4s ease-in-out infinite",
        float: "shimmer 2.4s ease-in-out infinite",
      },

      keyframes: {
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        riseIn: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: { "0%,100%": { opacity: "1" }, "50%": { opacity: "0.72" } },
        pulseRing: {
          "0%": { transform: "scale(0.9)", opacity: "0.7" },
          "70%,100%": { transform: "scale(1.6)", opacity: "0" },
        },
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      spacing: { 18: "4.5rem", 88: "22rem", 128: "32rem" },
      maxWidth: { measure: "68ch", "measure-sm": "54ch" },
      backdropBlur: { xs: "2px" },
    },
  },
  plugins: [],
} satisfies Config;
