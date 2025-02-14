import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.module?.rules?.push({
      test: /\.scss$/,
      use: [
        {
          loader: "sass-loader",
          options: {
            additionalData: `@import "@/styles/globals.scss";`,
          },
        },
      ],
      include: path.resolve(__dirname, "src"),
    });

    return config;
  },
};

export default nextConfig;
