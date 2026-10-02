// Static export: the build produces plain HTML/CSS/JS in the "out" folder.
// NEXT_PUBLIC_BASE_PATH is set by the GitHub Actions workflow.
// It is empty for a "username.github.io" repository and "/repo-name" for any other repository.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
