/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/week-12-project' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/week-12-project/' : '',
};

export default nextConfig;
