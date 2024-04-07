/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f0e7db",
        secondary: '#ffffff40',
        brown: '#eac892',
        green: '#319795',
        greenDark: '#285E61',
        greenLight: '#e2e8f0'
      },
      width: {
        canvas: '640px'
      },
      height: {
        canvas: '640px'
      },
      fontFamily: {
        sans: ["Wix Madefor Text", "sans-serif"],
      },
      flexBasis:{
        '3/7' : '45.8571429%'
      }
    },
  },
  plugins: [],
};
