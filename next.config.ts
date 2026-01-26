// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "f3be96abaf.clvaw-cdnwnd.com",
      },
    ],
  },
};

export default nextConfig;
