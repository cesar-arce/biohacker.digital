import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/lib/i18n/request.ts');

const securityHeaders = [
  // Prevents browsers from guessing MIME types — stops drive-by downloads
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  // Blocks the page from being embedded in iframes on other sites (clickjacking)
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  // Only send referrer to same origin; hides full URL from third-party analytics
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  // Disables browser features we don't use
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  // Force HTTPS for 1 year (only takes effect in production over HTTPS)
  { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },
  // Content Security Policy — whitelist every external source the site actually uses
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      // Scripts: our own + GA4 + Meta Pixel
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://connect.facebook.net",
      // Styles: our own + inline (Tailwind/shadcn inject inline styles)
      "style-src 'self' 'unsafe-inline'",
      // Images: our own + Amazon product images + data URIs
      "img-src 'self' data: https://m.media-amazon.com https://images-na.ssl-images-amazon.com https://www.facebook.com https://www.google-analytics.com",
      // Fonts: self-hosted via next/font (no external font CDN needed)
      "font-src 'self'",
      // API calls: our own domain + Supabase + GA4 + Meta
      "connect-src 'self' https://*.supabase.co https://www.google-analytics.com https://analytics.google.com https://www.facebook.com",
      // Frames: block all (no embeds)
      "frame-src 'none'",
      // Objects: block Flash and plugins
      "object-src 'none'",
      // Base URI: restrict to self
      "base-uri 'self'",
      // Form actions: only our own domain
      "form-action 'self'",
    ].join('; '),
  },
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'm.media-amazon.com' },
      { protocol: 'https', hostname: 'images-na.ssl-images-amazon.com' },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
