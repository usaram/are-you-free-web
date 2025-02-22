/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
  ],
  theme: {
    extend: {
      colors: {
        base: '#f5f5f5',
        // base: '#fafafa',
      },
    },
  },
  plugins: [],
}
