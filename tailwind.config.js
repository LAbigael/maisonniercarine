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
          yellow: "#FDFDBD",
          green: "#C8FFD4",
          blue: "#B8E8FC",
          purple: "#B1AFFF",
        },
      },
    },
  },
  plugins: [],
};
