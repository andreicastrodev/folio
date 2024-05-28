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
        greenDarker: '#22543D',
        greenLight: '#e2e8f0',
        blueLight: '#588AEA '

      },
      width: {
        canvas: '640px',
        sxm: '450px'
      },
      height: {
        canvas: '640px'
      },
      fontFamily: {
        sans: ["Wix Madefor Text", "sans-serif"],
      },
      flexBasis:{
        '3/7' : '48%'
      }
    },
    screens: {
      'xsm': '410px',
      // => @media (min-width: 440px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
};
