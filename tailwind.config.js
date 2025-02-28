// /** @type {import('tailwindcss').Config} */
// export const content = [
//   "./src/**/*.{js,jsx,ts,tsx}",
// ];
// export const theme = {
//   extend: {},
// };
// export const plugins = [];



/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // هام جداً
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
