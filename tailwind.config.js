/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'min': '300px', 'max': '600px'},
      'md': {'min': '601px', 'max': '1099px'},
      'lg': {'min': '1100px', 'max': '1499px'},
      'xl': {'min': '1500px', 'max': '1535px'},
      '2xl': {'min': '1536px'},    },
    extend: {},
  },
  plugins: [
  ],
}