/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#14112E",
        "primary-lt": "#14112E10",
        "primary-cta": "#4E78FF",
        "danger": "#ff4961",
      },
      fontFamily: {
        "poppins": ["poppins-regular", "poppins-bold"]
      },
    },
  },
  plugins: [],
}