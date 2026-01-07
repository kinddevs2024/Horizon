import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        canvas: "#f7f7f5",
        surface: "#ffffff",
        ink: "#233C5A",
        muted: "#5A6B7F",
        subtle: "#8A95A5",
        border: "#D1D6DD",
        accent: "#233C5A",
      },
      fontFamily: {
        sans: ["var(--font-plex)", "system-ui", "sans-serif"],
        display: ["var(--font-space)", "var(--font-plex)", "system-ui"],
      },
      letterSpacing: {
        tightest: "-0.035em",
      },
    },
  },
  plugins: [],
};
export default config;
