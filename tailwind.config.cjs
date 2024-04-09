/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  darkMode: "media", // or 'media' or 'class'
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: {
          DEFAULT: "#f9f9f9",
          light: "#f9f9f9",
          dark: "#111827",
        },
        secondary: {
          DEFAULT: "#4f46e5",
          light: "#f3f4f6",
          dark: "#1f2937",
        },
        highlight: {
          DEFAULT: "#4f46e5",
          lighten: "#4338ca",
          darken: "#6366f1",
        },
        dark: "#0f172a",
      },
      textColor: {
        primary: {
          DEFAULT: "#111827",
          light: "#111827",
          dark: "#f9f9f9",
        },
        secondary: {
          DEFAULT: "#6b7280",
          light: "#6b7280",
          dark: "#d1d5db",
        },
        highlight: {
          DEFAULT: "#4f46e5",
          lighten: "#4338ca",
          darken: "#818cf8",
        },
        inverted: "#f9f9f9",
      },
      borderColor: {
        primary: {
          DEFAULT: "#d1d5db",
          light: "#d1d5db",
          dark: "#6b7280",
        },
        secondary: {
          DEFAULT: "#e5e7eb",
          light: "#e5e7eb",
          dark: "#374151",
        },
        highlight: "#4f46e5",
      },
      divideColor: {
        primary: {
          DEFAULT: "#d1d5db",
          light: "#d1d5db",
          dark: "#6b7280",
        },
        secondary: {
          DEFAULT: "#e5e7eb",
          light: "#e5e7eb",
          dark: "#374151",
        },
        highlight: "#4f46e5",
      },
      ringColor: {
        primary: {
          DEFAULT: "#d1d5db",
          light: "#d1d5db",
          dark: "#6b7280",
        },
        secondary: {
          DEFAULT: "#e5e7eb",
          light: "#e5e7eb",
          dark: "#374151",
        },
        highlight: "#4f46e5",
      },
      placeholderColor: {
        primary: {
          DEFAULT: "#6b7280",
          light: "#6b7280",
          dark: "#d1d5db",
        },
        secondary: {
          DEFAULT: "#6b7280",
          light: "#6b7280",
          dark: "#d1d5db",
        },
        highlight: "#4f46e5",
      },
      outlineColor: {
        primary: {
          DEFAULT: "#6b7280",
          light: "#6b7280",
          dark: "#d1d5db",
        },
        secondary: {
          DEFAULT: "#6b7280",
          light: "#6b7280",
          dark: "#d1d5db",
        },
        highlight: "#4f46e5",
      },
      scrollbarWidth: {
        thin: "thin",
      },
      fillColor: {
        primary: {
          DEFAULT: "#f9f9f9",
          light: "#f9f9f9",
          dark: "#111827",
        },
      },
    },
    fontFamily: {
      sans: ["Inter var", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [require(`@tailwindcss/forms`), require("@tailwindcss/typography")],
};
