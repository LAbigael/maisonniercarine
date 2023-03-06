/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        palette: {
          yellow: "#f3ebea",
          green: "#FFE7CC",
          blue: "#AEE1E1",
          purple: "#D9ACF5",
        },
      },
    },
  },
  plugins: [],
};
