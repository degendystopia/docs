const path = require('path')
const withPlugins = require('next-compose-plugins')
// const withTM = require('next-transpile-modules')(['degen-dystopia'])
const sass = require('sass')

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    //     // Important: return the modified config
    //     return config
    // },
}

module.exports = withPlugins(
    [
        // add plugins here..
        // withTM,
    ],
    nextConfig,
)
