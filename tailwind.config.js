/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {

      colors: {
        primary: "#f0e7db",
        secondary: "#ffffff40",
        brown: "#eac892",
        green: "#319795",
        greenDark: "#285E61",
        greenDarker: "#22543D",
        greenLight: "#e2e8f0",
        blueLight: "#588AEA ",
        teal: "#2C7A7B",
        grey: "#525252",
        purple: "#805AD5",
        purpleDark: "#6B46C1",
        orange: "#FBD38D",
        orangeDark: "#F6AD55",
        //darkmode
        bodyBG: "#202023",
      },
      width: {
        canvas: "640px",
        sxm: "450px",
      },
      height: {
        canvas: "640px",
      },
      fontFamily: {
        sans: ["Wix Madefor Text", "sans-serif"],
        oldLondon: ["Old London", "sans-serif"],

      },
      flexBasis: {
        "3/7": "48%",
      },
    },
    screens: {
      xsm: { max: "440px" },
      // => @media (max-width: 410px) { ... }

      sm: { max: "640px" },
      // => @media (max-width: 640px) { ... }

      md: { max: "768px" },
      // => @media (max-width: 768px) { ... }

      lg: { max: "1024px" },
      // => @media (max-width: 1024px) { ... }

      xl: { max: "1280px" },
      // => @media (max-width: 1280px) { ... }

      "2xl": { max: "1536px" },
      // => @media (max-width: 1536px) { ... }
    },
  },
  plugins: [],
};
