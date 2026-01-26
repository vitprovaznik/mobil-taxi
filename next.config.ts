// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // TENTO ŘÁDEK JE KLÍČOVÝ
  images: {
    unoptimized: true, // PRO STATICKÝ EXPORT JE TOTO NUTNÉ
    remotePatterns: [
      { protocol: 'https', hostname: 'i.pinimg.com' },
      { protocol: 'https', hostname: 'f3be96abaf.clvaw-cdnwnd.com' },
    ],
  },
};

export default nextConfig;