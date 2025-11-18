/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-red': '#b74b4b',
        'dark-bg': '#0a0a0a',
        'card-bg': '#161616',
      }
    },
  },
  plugins: [],
}