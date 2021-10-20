module.exports = {
  mode: "jit",
  purge: [
    './pages/**/*.tsx',
    './components/**/*.tsx'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens:{
      'phone': {'max': '450px'},
      'tablet': {'max': '768px'},
      'laptop': {'max': '980px'}
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
