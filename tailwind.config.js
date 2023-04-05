/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    fontFamily: {
      Josefin: ["Josefin Sans'"],
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
