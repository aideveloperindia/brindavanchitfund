/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
  },
  async redirects() {
    return [
      {
        source: '/news',
        destination: '/gallery',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
