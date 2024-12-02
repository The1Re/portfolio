/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#ff4a57',
        'background': '#23263a',
        'content': '#2b2d41',
        'navbar': '#212336'
      }
    },
  },
  plugins: [],
}

