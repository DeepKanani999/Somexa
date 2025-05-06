const withPWA = require('next-pwa')({
    dest: 'public', // Output directory for service worker files
    register: true, // Automatically register the service worker
    skipWaiting: true, // Make the service worker take control immediately
    disable: process.env.NODE_ENV === 'development', // Disable PWA in development
  });
  
  module.exports = withPWA({
    // Other Next.js configurations
    reactStrictMode: true,
  });