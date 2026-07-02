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
          primary: "#f3ede2",
          card: "#fbf7f0",
          accent: "#ece3d3",
          hover: "#ece3d3",
        },
        teal: {
          dark: "#1e4435",
          mid: "#2e5c48",
          light: "#3f7a5c",
        },
        amber: {
          DEFAULT: "#5c8a3a",
          hover: "#4a7530",
          muted: "#5c8a3a22",
        },
        zinc: {
          primary: "#1d201b",
          secondary: "#54574d",
          muted: "#6f7266",
          hint: "#8a8c80",
          border: "#e2d9c8",
          borderHover: "#d4c8b2",
        },
        onAccent: "#fbf7f0",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-serif)", "var(--font-inter)", "serif"],
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
