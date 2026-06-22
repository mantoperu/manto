import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Fondo claro tipo hueso / lino
        bone: {
          DEFAULT: "#F6F4EE",
          50: "#FBFAF6",
          100: "#F6F4EE",
          200: "#EEEADF",
          300: "#E2DCCC",
          400: "#CFC7B2",
        },
        // Tinta cálida casi negra
        ink: {
          DEFAULT: "#161412",
          muted: "#57514A",
          soft: "#7A746B",
        },
        // Petróleo (teal profundo) — color principal
        petroleo: {
          DEFAULT: "#0E4D49",
          50: "#EAF2F1",
          100: "#CBDEDC",
          200: "#9CC0BD",
          300: "#5E928E",
          400: "#1F6863",
          500: "#0E4D49",
          600: "#0B3D3A",
          700: "#082C2A",
          800: "#061F1E",
        },
        // Arcilla (terracota desaturada) — color de acento
        arcilla: {
          DEFAULT: "#C75B39",
          50: "#FaEee9",
          100: "#F2D6CB",
          200: "#E5AF9C",
          300: "#D6816A",
          400: "#CB6A4C",
          500: "#C75B39",
          600: "#A8492B",
          700: "#833822",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        none: "0",
        sm: "2px",
        DEFAULT: "4px",
        md: "6px",
        lg: "8px",
        full: "9999px",
      },
      maxWidth: {
        content: "1180px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "weave-in": {
          "0%": { strokeDashoffset: "1" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        "fade-in": "fade-in 0.8s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
