import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1920px",
      },
      colors: {
        // Official Colorfit Brand System Colors
        canvas: "#FFFFFF", // Pure White
        paper: "#F5F5F5", // Cloud neutral
        ink: "#111111", // Colorfit Black
        muted: "#555555", // Graphite
        line: "#E5E5E5", // Neutral border
        accent: "#F0047F", // Colorfit Magenta (Anchor)
        accentSoft: "#FFF0F6", // Magenta soft tint

        // Brand Spectrum Palette
        brand: {
          magenta: "#F0047F",
          orange: "#F26522",
          violet: "#7B3FA0",
          black: "#111111",
          sky: "#3B9EDC",
          sunburst: "#F7C82A",
          leaf: "#5DBB46",
          coral: "#F05A5B",
          aqua: "#2BBCD4",
          cloud: "#F5F5F5",
          graphite: "#555555",
        },
      },

      fontFamily: {
        sans: [
          "Calibri",
          "Candara",
          "Segoe UI",
          "var(--font-sans)",
          "system-ui",
          "sans-serif",
        ],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },

      fontSize: {
        // Fluid display sizes
        "display-xl": [
          "clamp(3rem, 11vw, 11rem)",
          {
            lineHeight: "0.92",
            letterSpacing: "-0.03em",
          },
        ],

        "display-lg": [
          "clamp(2.5rem, 7vw, 6rem)",
          {
            lineHeight: "0.98",
            letterSpacing: "-0.02em",
          },
        ],

        "display-md": [
          "clamp(2rem, 4.5vw, 3.5rem)",
          {
            lineHeight: "1.02",
            letterSpacing: "-0.02em",
          },
        ],
      },

      maxWidth: {
        container: "100%",
      },

      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;