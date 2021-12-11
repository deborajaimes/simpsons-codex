module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      borderRadius: {
        '7xl': '70px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
