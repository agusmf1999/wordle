import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto"],
      },
    },
    colors: {
      "lighter-grey": "#DADCE0",
      "light-grey": "#F3F3F3",
      grey: "#D3D6DA",
      "dark-grey": "#939B9F",
      "darkest-grey": "#818181",
      "black-grey": "#56575E",
      green: "#6AAA64",
      yellow: "#CEB02C",
      white: "#ffffff",
    },
  },
  plugins: [],
} satisfies Config;
