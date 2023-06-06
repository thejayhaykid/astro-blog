/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "media", // or 'media' or 'class'
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [require(`@tailwindcss/forms`), require("@tailwindcss/typography")],
};
