/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enables static HTML export
  distDir: 'out',    // The directory where static files will be output
  images: {
    unoptimized: true,  // Required for static export
  },
  // Set the base path if you're not deploying to the root of the domain
  // e.g., if your repo is username.github.io/baptism-invitation
  // then basePath should be '/baptism-invitation'
  // If deploying to a custom domain or username.github.io, leave it empty
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  // Add trailing slash to all routes
  trailingSlash: true,
};

/**module.exports = nextConfig;*/
module.exports = {
  distDir: "out",
  output: "export",
};