/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textShadow: {
        'custom': '2px 3px 5px rgba(0,0,0,0.5)',
      },
      colors: {
        'gradient-start': '#dc2626',
        'gradient-middle': '#f43f5e',
        'gradient-end': '#fb7185',
      },
      backgroundImage: {
        'text-gradient': 'linear-gradient(45deg, #dc2626 32%, #f43f5e 60%, #fb7185 60%)',
        'celebration-gradient': 'linear-gradient(to right, #642B73 0%, #C6426E 100%)'
      },
    },
  },
  variants: {
    extend: {
      backgroundClip: ['text'],
      textColor: ['responsive', 'hover', 'focus'],
    },
  },
  plugins: [
  ],
}

