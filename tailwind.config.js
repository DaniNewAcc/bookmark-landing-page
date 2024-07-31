/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'SoftBlue': "hsl(var(--clr-SoftBlue) / <alpha-value>)",
        'SoftRed': "hsl(var(--clr-SoftRed) / <alpha-value>)",
        'GrayishBlue': "hsl(var(--clr-GrayishBlue) / <alpha-value>)",
        'VeryDarkBlue': "hsl(var(--clr-VeryDarkBlue) / <alpha-value>)",
      }
    },
  },
  plugins: [],
}
