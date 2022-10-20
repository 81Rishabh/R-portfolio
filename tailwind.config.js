/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode : 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      animation: {
        wiggle: 'wiggle .3s ease-in-out 1',
      },
    },
  },
  plugins: [],
}
