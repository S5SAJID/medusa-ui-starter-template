/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  presets: [require("@medusajs/ui-preset")],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/@medusajs/ui/dist/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter Variable', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
};
