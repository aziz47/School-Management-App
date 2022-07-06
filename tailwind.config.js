/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  darkMode: "class",
  i18n: {
      locales: ["fr-FR"],
      defaultLocale:"fr-FR"
  },
  content: [
      'templates/**/*.html.twig',
      'assets/js/**/*.js'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  future: {
      purgeLayersByDefault: true,
  }
}
