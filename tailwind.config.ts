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
        brand: {
          blue: "#1d4ed8",
          purple: "#7c3aed",
          teal: "#06b6d4",
        },
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
