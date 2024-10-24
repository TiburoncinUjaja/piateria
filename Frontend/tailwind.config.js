/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Azul-oscuro': '#0081A7',
        'Azul-claro': '#00AFB9',
        'Beige': '#EEF4ED',
        'Salmon': '#EDDEA4',
        'Rojo': '#F7A072',
      }

    },
  },
  plugins: [require("tw-elements-react/dist/plugin.cjs")],
}

