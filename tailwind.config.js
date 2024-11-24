/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        pricolor: '#EE1B24',
        seccolor: '#01426A',
        accent: '#FFD4D4',
        background: '#FAFAFA',
        icons: '#FF7350',
        accentBlue: '#038FCF'
      }
    },
  },
  plugins: [],
}
