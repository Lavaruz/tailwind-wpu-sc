/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#0ea5e9",
      },
      screens: {
        xl: "1100px",
      },
      fontFamily: {
        inter: Inter,
      },
    },
  },
  plugins: [],
};
