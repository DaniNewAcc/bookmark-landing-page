/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'dots': "url('/images/bg-dots.svg')"
      },
      colors: {
        'SoftBlue': "hsl(var(--clr-SoftBlue) / <alpha-value>)",
        'SoftRed': "hsl(var(--clr-SoftRed) / <alpha-value>)",
        'GrayishBlue': "hsl(var(--clr-GrayishBlue) / <alpha-value>)",
        'LightGray': "hsl(var(--clr-LightGray) / <alpha-value>)",
        'VeryDarkBlue': "hsl(var(--clr-VeryDarkBlue) / <alpha-value>)",
      },
      screens: {
        'sm': '425px'
      }
    },
  },
  plugins: [],
}

