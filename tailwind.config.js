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
      'bgsBgYellow': '#FAE347',
      'bgsBgPurple': '#AC99C7',
      'bgsBgGreen': '#33B58F',
      'bgsBgRed': '#922A04',
      'bgsBgBlue': '#6FBCF2',
      'bgsBgOrange': '#E88C35',
    },
    extend: {
      fontFamily: {
        'gloria': ['Gloria Hallelujah', 'cursive'],
        'noticia': ['Noticia Text', 'serif'],
      },
      textShadow: {
        'lg': '2px 2px 10px rgba(0, 0, 0, 0.5)',
        // Define other shadow sizes and colors as needed
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require("daisyui"),
    require('tailwindcss-gradients'),
  ]
}

