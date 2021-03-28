module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      //adding the futura font family to the tailwind config
      fontFamily: {
        futura: "futura-pt, sans-serif",
      },
      //these are the MF colors used in the project
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
  //activates the 3rd party text shadow plugin to easily add shadows to text elements.
  plugins: [
    require('tailwindcss-textshadow')
  ],
}
