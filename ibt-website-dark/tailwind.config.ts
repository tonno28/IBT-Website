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
        void:    "#030508",
        surface: "#07101e",
        card:    "#0b1828",
        raised:  "#0f2035",
        // Using CSS var pattern so opacity modifiers work (bg-electric/10 etc.)
        electric: "rgb(var(--c-electric) / <alpha-value>)",
        warm:     "rgb(var(--c-warm) / <alpha-value>)",
        line: {
          dim:    "#0e2040",
          mid:    "#1a334f",
          bright: "#254870",
        },
        ink: {
          bright: "#eef2ff",
          body:   "#7a90ab",
          muted:  "#3d526a",
          ghost:  "#1e3048",
        },
      },
      fontFamily: {
        display: ["var(--font-syne)", "system-ui", "sans-serif"],
        sans:    ["var(--font-inter)", "system-ui", "sans-serif"],
        mono:    ["var(--font-space-mono)", "monospace"],
      },
      animation: {
        "fade-up":      "fadeUp 0.7s ease-out forwards",
        "fade-in":      "fadeIn 0.5s ease-out forwards",
        "glow-breathe": "glowBreathe 5s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        glowBreathe: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%":      { opacity: "0.8", transform: "scale(1.08)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
