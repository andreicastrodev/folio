/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f0e7db",
        secondary: '#ffffff40',
        brown: '#eac892'
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
    },
  },
  plugins: [],
};
