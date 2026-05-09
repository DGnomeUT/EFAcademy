import type { NextConfig } from "next";

const isProd = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/EFAcademy" : "",
  assetPrefix: isProd ? "/EFAcademy" : "",
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
