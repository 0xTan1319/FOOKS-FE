module.exports = {
  content: ['./dist/**/*.html', './src/**/*.{js,jsx,ts,tsx}', './*.html'],
  plugins: [require('@tailwindcss/forms')],
  theme: {
    boxShadow: {
      '3xl': '0px 0px 8px 2px #001'
    }
  },
  variants: {
    extend: {
      opacity: ['disabled']
    }
  }
}
