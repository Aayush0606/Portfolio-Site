/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        indie: "'Indie Flower', cursive",
        quantico: "'Quantico', sans-serif",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
