/** @type {import('next').NextConfig} */
const nextConfig = {
    // Recommended in connectkit docs page
    // https://docs.family.co/connectkit/getting-started#getting-started-nextjs:~:text=file%3A-,next.config.js,-module.exports
    webpack: (config) => {
        config.resolve.fallback = { fs: false, net: false, tls: false };
        return config;
    },
}

module.exports = nextConfig
