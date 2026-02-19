/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        qing: '#1E8D8D',
        'qing-light': '#40E0D0',
        'qing-dark': '#0A2F2F',
        zi: '#6A0DAD',
        'zi-light': '#B266FF',
        'zi-dark': '#4A0080',
        huang: '#C89F68',
        'huang-light': '#F4C542',
        'huang-dark': '#B8863F',
        chi: '#D43A2F',
        'chi-light': '#FF7F50',
        'chi-dark': '#B22222',
        mo: '#1A1A1A',
        xuan: '#F5F5F5',
        bai: '#FFFFFF',
        hei: '#1A1A1A',
      },
      fontFamily: {
        serif: ['"Noto Serif SC"', '"Songti SC"', 'SimSun', 'serif'],
      },
    },
  },
  plugins: [],
}
