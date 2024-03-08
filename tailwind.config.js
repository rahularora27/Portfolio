/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-1': '#EABE6C',
        'custom-2': '#FFEDD8',
      },

      fontFamily: {
        Madurai: ["Hind Madurai", "sans-serif"],
        Playfair: ["Playfair Display", "serif"],
        Arvo: ["Arvo", "serif"],
      },

      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      }
    },
  },
  plugins: [],
}