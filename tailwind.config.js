const colors = require("tailwindcss/colors");

module.exports = {
  // mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx,css}",
    "./components/**/*.{js,ts,jsx,tsx,css}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ["Poppins", "system-ui", "sans-serif"],
      body: ["Poppins", "system-ui", "sans-serif"],
    },
    extend: {
      colors: {
        "light-blue": colors.lightBlue,
        cyan: colors.cyan,
        red: colors.red,
        blue: colors.blue,
        green: colors.green,
        yellow: colors.yellow,
        purple: colors.purple,
      },
      backgroundImage: {
        landscape: "url('https://picsum.photos/id/10/725/650')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
