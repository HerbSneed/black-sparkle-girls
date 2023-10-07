/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.css",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'bgsBg': '#4E6A80',
      'navicon': '#E88C35',
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    require("daisyui"),
  ]
}

