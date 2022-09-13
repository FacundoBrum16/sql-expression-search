/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'table-shadow': '1px 1px 6px #BECAE3',
        'dark-table-shadow': '1px 1px 6px #031430',
      }
    },
  },
  plugins: [],
}
