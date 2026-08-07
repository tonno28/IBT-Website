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
          primary: "#ffffff",
          card: "#f6f9f6",
          accent: "#ecf6ee",
          hover: "#eef4ef",
        },
        teal: {
          dark: "#0b6b3a",
          mid: "#16a34a",
          light: "#22c55e",
        },
        amber: {
          DEFAULT: "#16a34a",
          hover: "#12833c",
          muted: "#16a34a22",
        },
        zinc: {
          primary: "#0f1d15",
          secondary: "#43554a",
          muted: "#5f7166",
          hint: "#8b9c91",
          border: "#e2eae4",
          borderHover: "#cbdad0",
        },
        onAccent: "#ffffff",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-inter)", "sans-serif"],
        // numerals & technical labels now render in the geometric display face,
        // not a typewriter mono — kept under `mono` so existing usage just works
        mono: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.4s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "gradient-pan": "gradientPan 8s ease infinite",
        "spin-slow": "spin 24s linear infinite",
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
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        gradientPan: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
