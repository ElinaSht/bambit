/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        black: '#111111',
        'spm-blue': '#0048CE',
        'spm-blue-light': '#548FFF',
        'spm-blue-mid': '#D9E4F8',
        'spm-blue-dark': '#7D8CB4',
        'spm-blue-footer': '#F1F4FD',
        'spm-cornflower': '#799EE5',
        'spm-blue-active-button': '#003AA6',
        'spm-blue-gradient-button': '#D4DFF8',
        'spm-disabled-button': '#0048CE',
        'spm-gray': '#6D6C74',
      },
      fontFamily: {
        'golos-text': ['Golos Text', 'serif'],
        merriweather: ['Merriweather', 'serif'],
      },
      boxShadow: {
        'spm-shadow': '0 14px 44px rgba(125, 140, 180, 7%)',
      },
      screens: {
        820: '820px',
      },
      keyframes: {
        'move-right': {
          '0%': { transform: 'translateX(-100%)' },
          '60%': { transform: 'translateX(70%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'move-right-repeat': 'move-right 5s linear infinite',
      },
    },
  },
}
