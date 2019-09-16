// See https://tailwindcss.com/docs/configuration for details

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: `"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`
      },
      colors: {
        purple: {
          100: "#D6CFD8",
          200: "#8C8A94",
          300: "#8583C8",
          600: "#524D60",
          700: "#9B8FBC",
          900: "#433F4F"
        },
        gray: {
          100: "#FCFAFA",
          200: "#D2D2D2",
          500: "#707070",
          800: "#525252"
        },
        teal: {
          100: "#C5E2DD",
          500: "#39C1BC",
          900: "#0F4D4A"
        }
      },
      inset: {
        full: "100%",
        "1/2": "50%"
      },
      width: {
        1: "3px",
        26: "6.5rem"
      },
      maxWidth: {
        sm: "330px",
        md: "360px"
      },
      borderRadius: {
        sm: ".25rem",
        default: ".4375rem"
      },
      boxShadow: {
        default: "0px 4px 14px rgba(0, 0, 0, 0.25)",
        "inset-combo":
          "0px 2px 2px rgba(0, 0, 0, 0.06), inset 0px 2px 4px rgba(0, 0, 0, 0.25)",
        "inset-teal":
          "0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 3px 0px #55D3B8"
      }
    }
  },
  variants: {},
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        ".gradient": {
          background: "linear-gradient(99.32deg, #8555B8 1.22%, #1D6399 167.6%)"
        }
      };

      addUtilities(newUtilities);
    },
    // Aliases
    function({ addUtilities, theme }) {
      const newUtilities = {
        ".alias-max-w-index-wide": {
          "max-width": theme("maxWidth").md
        },
        ".alias-rounded-index": {
          "border-radius": theme("borderRadius").default
        },
        // TODO: better tailwind way to handle background opacity?
        ".bg-grey-800-opacity-05": {
          "background-color": "rgba(87, 87, 87, 0.5)"
        },
        ".bg-grey-800-opacity-08": {
          "background-color": "rgba(87, 87, 87, 0.8)"
        },
        ".shadow-inner-radio": {
          "box-shadow": `inset 0px 1px 0px ${theme("colors").purple[300]}`
        }
      };

      addUtilities(newUtilities);
    }
  ]
};
