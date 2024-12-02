import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  images: {
    domains: ["shopping-phinf.pstatic.net"],
  },
  env: {
    API_URL:
      process.env.NEXT_PUBLIC_API_SERVER_URL || "http://localhost:12345/api",
  },
};

export default nextConfig;
