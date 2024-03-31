/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  darkMode: "media", // or 'media' or 'class'
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#4f46e5",
          secondary: "#47E68B",
          accent: "#E65347",
          neutral: "#cdcdcd",
          "base-100": "#ffffff",
          info: "#605D91",
          success: "#9affdc",
          warning: "#fff129",
          error: "#ffbab9",
        },
      },
    ],
  },
  plugins: [
    require(`@tailwindcss/forms`),
    require("@tailwindcss/typography"),
    require("daisyui"),
  ],
};
