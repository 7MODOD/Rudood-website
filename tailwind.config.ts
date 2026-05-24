import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Cairo", "Arial", "sans-serif"],
        cairo: ["Cairo", "sans-serif"],
      },
      colors: {
        // === Brand Colors (from logo: Blue → Purple → Cyan) ===
        primary: {
          DEFAULT: "#2563EB",
          dark: "#1D4ED8",
        },
        purple: "#7C3AED",
        cyan: {
          DEFAULT: "#06B6D4",
          light: "#22D3EE",
        },

        // === Background Scale ===
        night: "#070C18",
        surface: {
          DEFAULT: "#0D1628",
          2: "#141E38",
        },
        "surface-2": "#141E38",
        "surface-night": "#070C18",
        border: {
          DEFAULT: "#1E2A42",
          light: "#243252",
        },
        "border-light": "#243252",

        // === Text Scale ===
        "text-primary": "#F0F2FF",
        "text-muted": "#8B9BC8",
        "text-faint": "#4A5878",

        // === Legacy brand aliases (used by some components) ===
        brand: {
          blue: "#1d4ed8",
          purple: "#7c3aed",
          teal: "#06b6d4",
        },
        gold: {
          DEFAULT: "#2563EB",
          light: "#3B82F6",
        },
        teal: "#06B6D4",
      },
      animation: {
        "gradient-shift": "gradientShift 12s ease infinite",
        marquee: "marquee 20s linear infinite",
        "pulse-ring": "pulse-ring 2s infinite",
        "fade-in-up": "fadeInUp 0.7s ease forwards",
        float: "float 4s ease-in-out infinite",
      },
      keyframes: {
        gradientShift: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.95)", boxShadow: "0 0 0 0 rgba(124,58,237,0.4)" },
          "70%": { transform: "scale(1)", boxShadow: "0 0 0 15px rgba(124,58,237,0)" },
          "100%": { transform: "scale(0.95)", boxShadow: "0 0 0 0 rgba(124,58,237,0)" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      backgroundSize: {
        "400%": "400% 400%",
      },
    },
  },
  plugins: [],
};

export default config;
