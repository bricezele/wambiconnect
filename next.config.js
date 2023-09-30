/** @type {import('next').NextConfig} */

const withTranslateRoutes = require('next-translate-routes/plugin')

module.exports = withTranslateRoutes({
    output: 'standalone',
    reactStrictMode: true,
    compiler: {
        styledComponents: true
    },
    swcMinify: true,
    i18n: {
        locales: ['en', 'fr'],
        defaultLocale: 'en',
    },
    publicRuntimeConfig: {
        appVersion: process.env.npm_package_version
    }
})
