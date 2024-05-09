import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {},
    },
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "hsl(var(--primary))",
        "primary-light": "hsl(var(--primary-light))",
        "primary-lighter": "hsl(var(--primary-lighter))",
      },
      fontFamily: {
        mono: ["var(--font-ibm-plex-mono)"],
        title: ["var(--font-druk-wide)"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
