/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4CAF50",
        secondary: "#8BC34a",
        accent: "#FFC107",
        bgColor: "#F1F8E9",
        textColor: "#212121",
        lightText: "#616161",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
