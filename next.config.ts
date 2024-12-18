import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'tailwindui.com',
      },
    ],
  },
  // reactStrictMode: false,
  // Targeting Edge >= 18 and Chrome >= 80
  /* config options here */
};

export default nextConfig;
