import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname:
          "wedding-invitation-static-source.s3.ap-northeast-2.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
