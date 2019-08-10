// See https://tailwindcss.com/docs/configuration for details

module.exports = {
  theme: {
    fontFamily: {
      sans: `"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";;`
    },
    extend: {
      colors: {
        purple: {
          600: '#524D60',
          900: '#433F4F'
        }
      },
      opacity: {
        40: '.4'
      },
      inset: {
        full: '100%',
        '1/2': '50%'
      },
      width: {
        1: '3px'
      }
    }
  },
  variants: {},
  plugins: []
};
