import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tanstack.com",
      },
    ],
  },
};

export default nextConfig;
