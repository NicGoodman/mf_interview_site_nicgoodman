module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        futura: "futura-pt, sans-serif",
      },
      colors: {
        "mf-gold": "#ffb81c",
        "mf-red": "#f9423a",
        "mf-purple": "#981e97",
        "mf-royal-purple": "#753bbd",
        "mf-blue": "#485cc7",
        "mf-mid-gray": "#53565a",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}
