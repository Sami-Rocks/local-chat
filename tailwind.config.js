/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors : {
        background: '#F6F5F5',
        primary: '#1F3C88',
        red: '#EE6F57',
        black: "#070D2B",
        white: "#E5E5E5",
      },
      fontFamily: {
        sans: ["Ubuntu", "sans-serif"],
      },
    },
  },
  plugins: [],
}
