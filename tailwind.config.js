/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light', 'dark'],
  },
  theme: {
    animation: {
      fade: 'fadeIn 5s ease-in-out',
    },
    keyframes: theme => ({
      fadeIn: {
        '0%': { backgroundColor: theme('colors.red.300') },
        '100%': { backgroundColor: theme('colors.transparent') },
      },
    }),
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      primary: {
        100: '#b871cc',
        200: '#a05ab4',
        300: '#88439c',
        400: '#6f2c84',
        500: '#57156c',
      },
      secondary: {
        100: '#bcb8ff',
        200: '#9ea1fd',
        300: '#7f8afc',
        400: '#6172fa',
        500: '#425bf8',
      },
    },
  },
}
