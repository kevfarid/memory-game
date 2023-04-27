/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridTemplateRows: {
        'auto-fill': 'repeat(auto-fill,minmax(18vh,1fr))',
        'auto-fill-sm': 'repeat(auto-fill,minmax(10vh,1fr))',
      },
    },
  },
  plugins: [

  ],
};
