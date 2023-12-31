/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,js}"];
export const theme = {
  extend: {
    width: {
      "55rem": "55rem",
      "509px": "509px"
    },
    height: {
      '23rem': '23.9rem', // Adding a custom height utility
    },
  },

  fontSize: {
    xs: ".75rem",
    sm: ".875rem",
    tiny: ".875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.25rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "4rem",
    "7xl": "5rem",
  },

  fontFamily: {
    "theme-f1": ['"GT Walsheim Pro"', "sans-serif"],
  },

  colors: {
    "nav-bar-text": '#545454'
  },

};
export const plugins = [];
