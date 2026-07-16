import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Parent folders (e.g. the user home dir) can contain their own lockfiles.
  // Pin tracing to this project so Next doesn't treat a higher folder as the root.
  outputFileTracingRoot: path.join(__dirname),
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
