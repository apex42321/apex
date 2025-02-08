/** @type {import('next').NextConfig} */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images-ext-1.discordapp.net',
        port: '',
        pathname: '/**',
      }
    ],
  },
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-Forwarded-Proto',
          value: 'https'
        }
      ],
    }
  ],
  experimental: {
    taint: true,
    suppressHydrationWarnings: true,
    staticRoutes: false
  },
  reactStrictMode: true,
};

export default nextConfig;