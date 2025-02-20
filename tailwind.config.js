/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2b82c5",
          50: '#f2f8fd',
          100: '#e4eefa',
          200: '#c3ddf4',
          300: '#8fc2ea',
          400: '#53a2dd',
          500: '#2b82c5',
          600: '#1d69ac',
          700: '#19558b',
          800: '#184974',
          900: '#1a3d60',
          950: '#112740',
        },
        secondary: {
          DEFAULT: "#191A30",
          50: "#f5f3ff",
          100: "#ede9fe",
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#191A30",
        },
        highlight: {
          DEFAULT: "#FF5722",
          50: '#fff5f2',
          100: '#ffe6e0',
          200: '#ffc9b8',
          300: '#ffa28a',
          400: '#ff795c',
          500: '#FF5722',
          600: '#ed3b09',
          700: '#c52f07',
          800: '#9e260c',
          900: '#82220d',
          950: '#460e04',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}

