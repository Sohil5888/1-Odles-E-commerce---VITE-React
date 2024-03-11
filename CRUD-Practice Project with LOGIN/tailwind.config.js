/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '350px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1400px',
      '3xl': '1700px',
      '4xl': '1920px',
    },
    container: {
      center: true,
      padding: {
        xs: '0.5rem',
        sm: '0.8rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '2rem',
        '3xl': '2rem',
        '4xl': '2rem',
      }
    },
    extend: {},
  },
  plugins: [],
}

