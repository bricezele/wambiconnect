/** @type {import('next').NextConfig} */
const withTranslateRoutes = require('next-translate-routes/plugin')
module.exports = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'fr'
  }
}
