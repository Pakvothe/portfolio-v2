/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ...colors,
      transparent: "transparent",
      background: "#F7F7F7",
      primary: "#256D85",
      secondary: "#2B4865",
      accent: "#8FE3CF",
      text: "#002B5B",
    },
  },
  plugins: [],
};
