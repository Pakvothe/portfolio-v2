/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,ts}"],
  theme: {
    extend: {
      colors: {
        background: "#18181b",
        primary: "#f59e0b",
        secondary: "#d4d4d8",
        accent: "#fbbf24",
        text: "#fafafa",
      },
    },
  },
  plugins: [],
};
