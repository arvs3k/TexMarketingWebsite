import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Old URLs from the first version of the site.
  async redirects() {
    return [
      { source: "/home-textiles", destination: "/products/home-textiles", permanent: true },
      { source: "/quality", destination: "/factory#quality", permanent: true },
      { source: "/gallery", destination: "/factory#tour", permanent: true },
    ];
  },
};

export default nextConfig;
