/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./component/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        rlight: ["RobotoSlab-Light", "sans-serif"],
        rthin: ["RobotoSlab-Thin", "sans-serif"],
        rregular: ["RobotoSlab-Regular", "sans-serif"],
        rbold: ["RobotoSlab-Bold", "sans-serif"],
      }
    }
  },
  plugins: [],
};



