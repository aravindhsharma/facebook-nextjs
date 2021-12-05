module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    textColor: [
      "responsive",
      "dark",
      "group-hover",
      "focus-within",
      "hover",
      "focus",
    ],
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
