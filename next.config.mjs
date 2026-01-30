if (!URL.canParse(process.env.WORDPRESS_API_URL)) {
  throw new Error(`
    Please provide a valid WordPress instance URL.
    Add to your environment variables WORDPRESS_API_URL.
  `);
}

const { protocol, hostname, port, pathname } = new URL(
  process.env.WORDPRESS_API_URL,
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'secure.gravatar.com',
        port,
        pathname: '/avatar/**',
      },
      {
        protocol: 'https',
        hostname: 'blog.globalcust.co.uk',
        port,
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/services',
        destination: '/customs-clearance-uk',
        permanent: true,
      },
    ]
  }
};

export default nextConfig;