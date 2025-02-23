/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ["Poppins", "sans-serif"],
    },

    extend: {
      //colors
      colors: {
        primary:"#058603",
        secondary:"#EF863E",
      },
    },
  },
  plugins: [],
}

