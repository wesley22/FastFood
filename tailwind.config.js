/** @type {import('tailwindcss').Config} */
export default {
  prefix: 'tw-',
    content: ['./**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
      extend: {
        fontFamily: {
          'nunito': ['"Nunito"', 'cursive'],
        },
      },
    },
  plugins: [],
}

