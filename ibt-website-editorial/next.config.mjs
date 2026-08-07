/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: the whole site is prerendered, so we ship plain HTML.
  // This lets Vercel deploy from the repo root via vercel.json without
  // needing the Root-Directory project setting.
  output: "export",
  trailingSlash: true,
  experimental: {
    typedRoutes: false,
  },
};

export default nextConfig;
