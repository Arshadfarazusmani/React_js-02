// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  // Set dark mode to 'media' for system preference or 'class' for manual toggle
  darkMode: 'media', 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}