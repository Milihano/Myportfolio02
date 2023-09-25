/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      screens:{
        lg: { min:"801px", max:"5000px"},

        md:  { min:"415px", max: "800px"},

        sm: {max:"414px"}
      },
    },
  },
  plugins: [
    // require('flowbite/plugin')
  ],
}