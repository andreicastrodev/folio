/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pink: "#edd4b9",
        blue: '#9ccdf6',
        brown: '#eac892'
      },
      fontFamily: {
        sans: ["Wix Madefor Text", "sans-serif"],
      },
    },
  },
  plugins: [],
};
