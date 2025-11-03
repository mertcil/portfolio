import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true, // Required for static export
    },
    // Security headers (note: these won't apply to static export hosted on GitHub Pages)
    // For production, configure these in your hosting platform (e.g., GitHub Pages, Vercel)
    reactStrictMode: true,
    poweredByHeader: false,
};

export default nextConfig;
