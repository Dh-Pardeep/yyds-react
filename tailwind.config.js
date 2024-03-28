/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "2xl": "28px",
        "5xl": "50px",
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
      },
      lineHeight: {
        lh138: "138.4%",
        lh131: "131.4%",
      },
    },
  },
  plugins: [],
};
