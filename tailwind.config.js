/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'brand-blue': '#181D27',
        'nav-text': '#414651',
        'border-gray': '#E9EAEB',
        'primary-blue': '#1570EF',
        'btn-border': '#D5D7DA',
        'badge-text': '#175CD3',
        'badge-blue': '#EFF8FF',
        'badge-border': '#B2DDFF',
        'repo-hover': '#F5F5F5',
        'login-border': '#D8DAE5',
        'sec-blue': '#0049C6',
        'prim-dark': '#171717',
      }
    },
  },
  plugins: [],
}

