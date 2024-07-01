/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './client/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        custombg: '#1D1D1D',
        customInterior: '#333333',
        sambayon: '#9ECB18',
      },
      fontFamily: {
        customFont: ['inter'],
      },
    },
  },
  plugins: [],
}
