import defaultTheme from "tailwindcss/defaultTheme";
import animations from "@midudev/tailwind-animations";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    fontFamily: {
      starwars: ["Star Wars", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [animations],
};
