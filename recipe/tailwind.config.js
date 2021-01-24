const colors = require("@tailwindcss/postcss7-compat/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      gray: {
        100: "#FFFEF7",
        900: "#111827",
      },
      green: {
        400: "#34D399",
      },
      red: {
        400: "#cf6175",
        300: "#ff002e",
      },
    },
  },
  variants: {
    extend: { backgroundColor: ["checked"], borderColor: ["checked"] },
  },
  plugins: [],
};
