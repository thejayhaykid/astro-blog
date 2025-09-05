/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  darkMode: "media", // or 'media' or 'class'
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      scrollbarWidth: {
        thin: "thin",
      },
      backgroundColor: {
        highlight: {
          DEFAULT: "#4f46e5",
          lighten: "#818cf8",
          darken: "#3730a3",
        },
      },
      textColor: {
        highlight: {
          DEFAULT: "#4f46e5",
          lighten: "#818cf8",
          darken: "#3730a3",
        },
      },
      borderColor: {
        highlight: {
          DEFAULT: "#4f46e5",
          lighten: "#818cf8",
          darken: "#3730a3",
        },
      },
      fillColor: {
        highlight: {
          DEFAULT: "#4f46e5",
          lighten: "#818cf8",
          darken: "#3730a3",
        },
      },
      outline: {
        highlight: {
          DEFAULT: "#4f46e5",
          lighten: "#818cf8",
          darken: "#3730a3",
        },
      },
    },
  },
  fontFamily: {
    sans: ["Inter var", ...defaultTheme.fontFamily.sans],
  },
  plugins: [require(`@tailwindcss/forms`), require("@tailwindcss/typography")],
};
