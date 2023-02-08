/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        homePage: "url('./Components/Images/home.svg')",
        homePage2: "url('./Components/Images/home2.png')",
        homePage3: "url('./Components/Images/home3.jpg')",
        logo: "url('./Components/Images/logo.svg')",
      },
      fontFamily: {
        hel: ["HelveticaNeue", "sans-serif"],
      },
      colors: {
        bgGray: "rgb(249,249,249,1)",
        borderGray: "rgba(188,188,188,1)",
        redText: "rgba(229,47,47,1)",
        redElement: "rgba(239,80,80,1)",
        orangeText: "rgba(249,59,29,1)",
      },
    },
  },
  plugins: [],
};
