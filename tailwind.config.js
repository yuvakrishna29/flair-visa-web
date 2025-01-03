/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg_color: "#F8F9F9",
        header_color: "#16161A",
        primary_color: "#0A5CA5",
        card_color: "#F3F3F3",
        subtext_color: "#667085",
        banner_subtext_color: "#E5E4E8",
        header_text_color: "#CACED7",
        bg_customblue: "#0D1282",
        bg_customgreen: "#9FBA3A",
        bg_customgliteblue: "#9747FF",
        bg_thickgreen: "#1B8730",
        bg_customOrange: "#EF5022",
        bg_variengreen: "#3ABB52D6",
      },

      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
