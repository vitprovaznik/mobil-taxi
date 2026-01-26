// next.config.ts
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'i.pinimg.com' },
      { protocol: 'https', hostname: 'f3be96abaf.clvaw-cdnwnd.com' },
    ],
  },
};
export default nextConfig;