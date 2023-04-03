/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#EAE2B7',
      'yellow': '#FCBF49',
      'dark-yellow': '#F77F00',
      'red': '#D62828',
      'blue': '#003049',
    },
    extend: {},
  },
  plugins: [],
}

