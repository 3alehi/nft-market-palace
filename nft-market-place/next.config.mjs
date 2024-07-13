const nextConfig = {
    // Example configuration options
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: ['example.com'],
    },
    i18n: {
      locales: ['en', 'fr', 'es'],
      defaultLocale: 'en',
    },
    webpack: (config, { isServer }) => {
      // Modify the webpack configuration
      if (!isServer) {
        config.resolve.fallback.fs = false;
      }
      return config;
    },
    // Add any additional configuration options here
  };
  
  export default nextConfig;
  