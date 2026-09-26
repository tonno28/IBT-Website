/** @type {import('next').NextConfig} */
const nextConfig = {
  // Statischer Export: die ganze Seite wird vorgerendert und als reines
  // HTML nach out/ gelegt, das IONOS Deploy Now unverändert ausliefert.
  output: "export",
  trailingSlash: true,
  experimental: {
    typedRoutes: false,
  },
};

export default nextConfig;
