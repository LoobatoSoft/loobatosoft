import type { NextConfig } from "next";

// GitHub Pages serves this repo at https://loobatosoft.github.io/loobatosoft/
// Set NEXT_PUBLIC_BASE_PATH="" when deploying to a custom domain or <org>.github.io repo.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  reactCompiler: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
