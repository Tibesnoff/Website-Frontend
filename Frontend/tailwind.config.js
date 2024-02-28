/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      height: {
        '1/8': '12.5%',
        '1/10': '10%'
      },
      width: {
        '1/8': '12.5%',
        '1/10': '10%'
      },
      size: {
        '1/15': '6.666666666666667%'
      }
    }
  },
  plugins: []
};
