/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#1976d2",
        "secondary":"#2AD879",
        "third":"#30BFF7"
      }
    },
  },
  plugins: [],
}

