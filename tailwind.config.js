/** @type {import('tailwindcss').Config} */
import fluid, { extract } from "fluid-tailwind";
export default {
  content: {
    files: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    extract,
  },
  darkMode: "media", // or 'class' for toggling via a class
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        qs: ["QuickSand", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [fluid, require("tailwindcss-animated")],
};
