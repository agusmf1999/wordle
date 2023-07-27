import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  darkMode:"class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto"],
      },
    },
    colors: {
      "black":"#202537",
      "lighter-grey": "#DADCE0",
      "light-grey": "#F3F3F3",
      grey: "#D3D6DA",
      "dark-grey": "#939B9F",
      "darkest-grey": "#818181",
      "black-grey": "#56575E",
      green: "#6AAA64",
      yellow: "#CEB02C",
      white: "#ffffff",
      // Dark Mode
      "dark-blue":"#262B3C",
      "opaque-blue":"#565F7E",
      "card-bg-grey":"rgba(218, 220, 224, 0.03)",
      
    },
  },
  plugins: [],
} satisfies Config;
