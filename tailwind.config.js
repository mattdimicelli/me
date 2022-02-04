module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brownish: '#bd5d38',
        salmonish: 'rgba(255,255,255,.5)',
        'brighter-salmon': 'rgba(255,255,255,.75)'
      },
      borderWidth: {
        '1': '1px'
      },
      translate: {
        '66': '16.5rem'
      },
    },
  },
  plugins: [],
}