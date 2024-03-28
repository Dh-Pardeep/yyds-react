/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontSize: {
        "3xl": "28px",
        "5xl": "48px",
        "6xl": "64px",
      },
      fontFamily: {
        poppins: ['"Poppins", sans-serif'],
        indieFlower: ['"Indie Flower", cursive'],
        montserrat_alternates: ['"Montserrat+Alternates", cursive'],
      },
      colors: {
        lightBlack: "#010101",
        saffron: "#F8c338",
        yellowRed: "#F2BD64",
        skyBlue: "#31ABDF",
        papayaWhip: "#FFF0CE",
        racingRed: "#D70101",
        pastedOrange: "#F4B03B",
        darkCharcoal: "#2E2C28",
        lightWhite: "#FAFAFA",
      },
      lineHeight: {
        lh138: "138.4%",
        lh131: "131.4%",
      },
    },
  },
  plugins: [],
});
