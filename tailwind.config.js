/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Josefin: ["Josefin Sans'"],
    },
    borderRadius: {
      large: "20px",
    },
    extend: {},
  },
  plugins: [],
}
