let colors = {
  primary: "#CAD064",
  transparent: "transparent",
  white: "#EBF7F9",
  black: "#1A1D1E",
  blackout: "#000",
  orange: "#F89938",
  "light-green": "#CCCC64",
  "dark-green": "#99CC90",
  blue: "#69C8C7",
  action: "#99cc90",
  "dark-blue": "#16141D",

  "grey-darkest": "#201c29",
  "grey-darker": "#606f7b",
  "grey-dark": "#1C2021",
  grey: "#b8c2cc",
  "grey-light": "#dae1e7",
  "grey-lighter": "#f1f5f8",
  "grey-lightest": "#f8fafc",
}

module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.css", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    /*
    |-----------------------------------------------------------------------------
    | Colors                                  https://tailwindcss.com/docs/colors
    |-----------------------------------------------------------------------------
    |
    | The color palette defined above is also assigned to the "colors" key of
    | your Tailwind config. This makes it easy to access them in your CSS
    | using Tailwind's config helper. For example:
    |
    | .error { color: config('colors.red') }
    |
    */
    colors: colors,

    /*
    |-----------------------------------------------------------------------------
    | Text colors                         https://tailwindcss.com/docs/text-color
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your text colors. By default these use the
    | color palette we defined above, however you're welcome to set these
    | independently if that makes sense for your project.
    |
    | Class name: .text-{color}
    |
    */

    textColors: colors,

    /*
    |-----------------------------------------------------------------------------
    | Background colors             https://tailwindcss.com/docs/background-color
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your background colors. By default these use
    | the color palette we defined above, however you're welcome to set
    | these independently if that makes sense for your project.
    |
    | Class name: .bg-{color}
    |
    */

    backgroundColors: colors,

    /*
  |-----------------------------------------------------------------------------
  | Maximum width                        https://tailwindcss.com/docs/max-width
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your maximum width utility sizes. These can
  | be percentage based, pixels, rems, or any other units. By default
  | we provide a sensible rem based scale and a "full width" size,
  | which is basically a reset utility. You can, of course,
  | modify these values as needed.
  |
  | Class name: .max-w-{size}
  |
  */

    maxWidth: {
      20: "1rem",
      40: "2.5rem",
      "footer-logo": "13.125rem",
      xs: "20rem",
      sm: "30rem",
      md: "40rem",
      lg: "50rem",
      xl: "60rem",
      "2xl": "70rem",
      "3xl": "80rem",
      "4xl": "90rem",
      "5xl": "100rem",
      full: "100%",
    },

    /*
  |-----------------------------------------------------------------------------
  | Z-index                                https://tailwindcss.com/docs/z-index
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your z-index utility values. By default we
  | provide a sensible numeric scale. You can, of course, modify these
  | values as needed.
  |
  | Class name: .z-{index}
  |
  */

    zIndex: {
      auto: "auto",
      0: 0,
      100: 100,
      200: 200,
      300: 300,
      400: 400,
      500: 500,
      600: 600,
      700: 700,
      800: 800,
      900: 900,
      1000: 1000,
    },
  },

  extend: {},
  variants: {
    extend: {},
  },
  plugins: [],
}
