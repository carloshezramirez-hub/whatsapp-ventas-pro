import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta sobria y premium. Color principal: verde elegante.
        brand: {
          50: "#eef6f2",
          100: "#d6ebe1",
          500: "#1f8a5b",
          600: "#1a784f",
          700: "#155e3f",
          800: "#114c33",
        },
        ink: {
          DEFAULT: "#1a1d1c",
          soft: "#3f4744",
          muted: "#6b746f",
        },
        surface: {
          DEFAULT: "#ffffff",
          soft: "#f6f8f7",
          line: "#e6eae8",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(16,24,40,0.04), 0 8px 24px rgba(16,24,40,0.06)",
        card: "0 1px 3px rgba(16,24,40,0.06), 0 12px 32px rgba(16,24,40,0.08)",
        lift: "0 18px 48px rgba(17,76,51,0.16)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      maxWidth: {
        content: "72rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
