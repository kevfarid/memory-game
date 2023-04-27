/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridTemplateRows: {
        'auto-fill': 'repeat(auto-fill,minmax(18vh,1fr))',
      },
    },
  },
  plugins: [],
};
