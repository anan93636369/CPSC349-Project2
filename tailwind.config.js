/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.hbs"],
  theme: {
    extend: {
    colors: {
        brightRed: 'hsl(12,88%,59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12,88%,95%)',
        darkBlue: 'hsl(228,39%,23%)',
        darkGrayishBlue: 'hsl(227,12%,13%)',
        veryDarkBlue: 'hsl(13,100%,96%)',
        veryPaleRed: 'hsl(13,100%,96%)',
        veryLightGray: 'hsl(0,0%,98%)'

      },
    },
  },
  plugins: [],
}
