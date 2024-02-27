/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    screens: {
      xsm: '350px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1500px',
      '3xl': '1900px',
    },
    extend: {},
  },
  plugins: [],
}

