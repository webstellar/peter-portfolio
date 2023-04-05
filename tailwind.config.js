/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Josefin: ["Josefin Sans"],
    },
    borderRadius: {
      large: "20px",
    },
    extend: {
      colors: {
        "yellow-orange": "#F6701C",
      },
    },
  },
  plugins: [],
}
