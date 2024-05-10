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
        "primary-foreground": "hsl(var(--primary-foreground))",
        "primary-light": "hsl(var(--primary-light))",
        "primary-light-foreground": "hsl(var(--primary-light-foreground))",
        "primary-lighter": "hsl(var(--primary-lighter))",

        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",

        card: "hsl(var(--card))",
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
