/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com", // Povoluje obrázky z Pinterestu
      },
      {
        protocol: "https",
        hostname: "f3be96abaf.clvaw-cdnwnd.com", // Ten tvůj původní obrázek
      },
    ],
  },
};

export default nextConfig;
