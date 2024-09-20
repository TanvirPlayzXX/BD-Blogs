/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
 
        'header-texture': "url('/Header-img.svg')",
      }
    }, 
    fontFamily: {
     "Xnah": [ "Xanh Mono", "monospace"],
     "WorkSans": ["Work Sans","sans-serif"]
    },
  },
  plugins: [],
}