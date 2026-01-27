/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  output: "export", // enables static HTML export
  images: {
    unoptimized: true, // disables next/image optimization
  },
};

export default nextConfig;
