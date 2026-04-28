import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      // disable: true, // Only for cold start
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/api\.example\.com\/.*/i,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'pwa-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'image-cache',
              expiration: {
                maxEntries: 60,
                maxAgeSeconds: 60 * 60 * 24 * 30,
              },
            },
          },
        ],
      },
      includeAssets: [
        'images/**/*',
        'icons/**/*',
        'fonts/**/*',
        'favicon.svg',
        'robots.txt',
        'apple-touch-icon-192x192.png',
      ],
      manifest: {
        name: 'PWA-app',
        short_name: 'PWA',
        description: 'PWA-application made for testing',
        start_url: '/',
        theme_color: '#2fb545',
        background_color: '#2fb545',
        display: 'standalone',
        icons: [
          {
            src: 'icons/48.png',
            sizes: '48x48',
            type: 'image/png',
          },
          {
            src: 'icons/72.png',
            sizes: '72x72',
            type: 'image/png',
          },
          {
            src: 'icons/96.png',
            sizes: '96x96',
            type: 'image/png',
          },
          {
            src: 'icons/144.png',
            sizes: '144x144',
            type: 'image/png',
          },
          {
            src: 'icons/192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icons/512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
          {
            src: 'icons/apple-touch-icon-192x192.png',
            sizes: '180x180',
            type: 'image/webp',
          },
        ],
      },
    }),
  ],
});
