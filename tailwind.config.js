/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'active-green': '#00FF00',
        customGreen: '#62ff00',
      },
    },
  },
  variants: {
    extend: {
      textColor: ['active'],
    },
  },
  plugins: [],
}