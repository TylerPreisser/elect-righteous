import type { NextConfig } from "next";

const siteBasePath =
  process.env.NEXT_PUBLIC_SITE_BASE_PATH !== undefined
    ? process.env.NEXT_PUBLIC_SITE_BASE_PATH
    : process.env.NODE_ENV === "production"
      ? "/elect-righteous"
      : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: siteBasePath,
};

export default nextConfig;
