import type { NextConfig } from "next";
import createMDX from '@next/mdx'

const withMDX = createMDX({

})


const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tanstack.com",
      },
    ],
  },
};

export default withMDX(nextConfig)
