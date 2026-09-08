import type { NextConfig } from 'next';

// This is a single page with anchor links. Prefix its assets for GitHub Pages.
const nextConfig: NextConfig = { output: 'export', assetPrefix: '/lean-bulk-plan', trailingSlash: true, images: { unoptimized: true } };

export default nextConfig;
