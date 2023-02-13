/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    plugins: [require("tailwindcss-text-rendering")],

    extend: {
      backgroundImage: {
        homePage: "url('./Components/Images/home.svg')",
        homePage2: "url('./Components/Images/home2.png')",
        homePage3: "url('./Components/Images/home3.jpg')",
        logo: "url('./Components/Images/logo.svg')",
        xicon: "url('./Components/Images/xicon.svg')",
        backicon: "url('./Components/Images/backicon.svg')",
      },
      fontFamily: {
        hel: ["HelveticaNeue"],
        helBold: ["HelveticaNeuBold"],
        helMedium: ["HelveticaNeueMedium"],
        helLight: ["HelveticaNeueLight"],
      },
      colors: {
        bgGray: "rgba(249,249,249,1)",
        borderGray: "rgba(188,188,188,1)",
        redText: "rgba(229,47,47,1)",
        redElement: "rgba(239,80,80,1)",
        greenElement: "rgba(152,227,126,1)",
        orangeText: "rgba(249,59,29,1)",
        textGray: "rgba(144,144,144,1)",
        buttonIndigo: "rgba(107,64,227,1)",
        buttonIndigoLight: "rgba(121,73,255,1)",
        buttonBlue: " rgba(98,161,235,1)",
        buttonBlueLight: " rgba(125,180,245,1)",
      },
    },
  },
  plugins: [],
};
