import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#0e1117",
          card: "#16181f",
          accent: "#1a2a2e",
          hover: "#1e2428",
        },
        teal: {
          dark: "#0F6E56",
          mid: "#1D9E75",
          light: "#34d399",
        },
        amber: {
          DEFAULT: "#D4942A",
          hover: "#e0a43a",
          muted: "#D4942A22",
        },
        zinc: {
          primary: "#f4f4f5",
          secondary: "#a1a1aa",
          muted: "#71717a",
          hint: "#52525b",
          border: "#26282f",
          borderHover: "#3a3d44",
        },
      },
      fontFamily: {
        sans: ["var(--font-instrument)", "system-ui", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.4s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
