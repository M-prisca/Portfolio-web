// tailwind.config.js
module.exports = {
  darkMode: 'class', // ✅ Required for manual toggling
  content: ['./*.html', './*.js'],
  theme: {
    extend: {},
  },
  plugins: [],
}

// This configuration enables dark mode using the 'class' strategy, allowing you to toggle dark mode by adding a 'dark' class to the HTML element.
// The content array specifies the files Tailwind should scan for class names, ensuring that styles are generated only for the classes used in your HTML and JavaScript files.