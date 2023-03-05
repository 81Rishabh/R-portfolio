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
      keyframes : {
        upDown : {
           '0%' : {transform : 'translateY(0px)'},
           '100%' : {transform : 'translateY(10px)'},
        }
      },
      animation: {
        upDown: 'upDown 1s linear infinite alternate',
        wiggle: 'wiggle .3s ease-in-out 1',
      },
    },
  },
  plugins: [],
}
