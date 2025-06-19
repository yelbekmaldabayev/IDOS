/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  serverExternalPackages: ['@prisma/client'],
  poweredByHeader: false,
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Import window patch on server side
      config.resolve.alias = {
        ...config.resolve.alias,
        './lib/window-patch': require.resolve('./lib/window-patch.ts'),
      }
    }
    return config
  }
}

module.exports = nextConfig
