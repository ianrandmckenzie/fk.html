module.exports = {
  content: ['./**/*.html', './main.js', './style.css'],
  theme: {
    extend: {
      screens: {
        // iPad Pro specific breakpoints
        'ipad-portrait': {'raw': '(min-width: 834px) and (max-width: 1024px) and (orientation: portrait)'},
        'ipad-landscape': {'raw': '(min-width: 1024px) and (max-width: 1366px) and (orientation: landscape) and (max-height: 1024px)'},
        'ipad-pro-landscape': {'raw': '(min-width: 1194px) and (max-width: 1366px) and (orientation: landscape) and (max-height: 834px)'},
      }
    },
  },
  plugins: [],
}
