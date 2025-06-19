/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#8B4513', // Warm sepia brown - saddle-brown
        'secondary': '#D2B48C', // Soft tan - tan
        'accent': '#CD853F', // Golden brown - peru
        'background': '#FFF8DC', // Cream base - cornsilk
        'surface': '#F5F5DC', // Slightly darker cream - beige
        'text-primary': '#2F2F2F', // Soft charcoal - dark-gray
        'text-secondary': '#696969', // Medium gray - dim-gray
        'success': '#228B22', // Forest green - forest-green
        'warning': '#DAA520', // Goldenrod - goldenrod
        'error': '#A0522D', // Sienna brown - sienna
      },
      fontFamily: {
        'heading': ['Caveat', 'cursive'],
        'body': ['Crimson Text', 'serif'],
        'caption': ['Kalam', 'cursive'],
        'mono': ['Source Code Pro', 'monospace'],
      },
      fontWeight: {
        'heading-normal': '400',
        'heading-semibold': '600',
        'heading-bold': '700',
        'body-normal': '400',
        'body-semibold': '600',
        'caption-light': '300',
        'caption-normal': '400',
        'mono-normal': '400',
      },
      borderRadius: {
        'paper': '3px',
        'envelope': '6px',
      },
      boxShadow: {
        'gentle': '0 2px 4px rgba(139, 69, 19, 0.15)',
        'elevated': '0 4px 8px rgba(139, 69, 19, 0.15)',
        'floating': '0 8px 16px rgba(139, 69, 19, 0.15)',
        'soft': '0 1px 3px rgba(139, 69, 19, 0.08)',
      },
      animation: {
        'gentle-pulse': 'pulse 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite',
        'gentle-bounce': 'bounce 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite',
        'typewriter': 'typewriter 3s steps(40, end)',
        'envelope-open': 'envelope-open 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'paper-unfold': 'paper-unfold 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'float-gentle': 'float-gentle 3s ease-in-out infinite',
      },
      keyframes: {
        'typewriter': {
          'from': { width: '0' },
          'to': { width: '100%' }
        },
        'envelope-open': {
          '0%': { transform: 'rotateX(0deg)' },
          '100%': { transform: 'rotateX(-180deg)' }
        },
        'paper-unfold': {
          '0%': { transform: 'scale(0.8) rotateY(-15deg)', opacity: '0' },
          '100%': { transform: 'scale(1) rotateY(0deg)', opacity: '1' }
        },
        'float-gentle': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      transitionTimingFunction: {
        'gentle': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      transitionDuration: {
        '300': '300ms',
        '600': '600ms',
        '800': '800ms',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
  ],
}