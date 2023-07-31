/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-bg': '#0C0C0C',
        'custom-icon': '#997349',
        'custom-icon-hover': '#E9B171'
      },

      fontFamily: {
        Madurai: ["Hind Madurai", "sans-serif"],
        Playfair: ["Playfair Display", "serif"],
        Arvo: ["Arvo", "serif"],
      }
    },
  },
  plugins: [],
}