/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        navbar: "17%",
        main: "80%",
        main_small: "58%",
        panel: "25%",
        icon: "25px",
      },
      height: {},
      boxShadow: {
        outer: "0 0 15px 2px #262626a1;",
        inner: "0px 0px 10px 1px #262626a1 inset;",
      },
      colors: {
        base: "#fafafa",
        navbar: "#f4f4f4",
        panel: "#f4f4f4",
        highlight: "#ebebeb",
        badge_completed: "#46A758",
        badge_inprogress: "#0090FF",
        badge_incomplete: "#E5484D",
        primary: "#1d5bfe",
        secondary: "#54d386",
        tertiray: "#b46af9",
        offset: "#7c7d7d",
        content: "#212529",
        main: "#212529",
        callout: "#E1E9FF",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      screens: {
        md: "768px",
        lg: "1080px",
      },
    },
  },
  plugins: [],
};
