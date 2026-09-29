import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Production (Vercel) uses the defaults. BASE_PATH and SITE_URL are only set
// by the optional GitHub Pages workflow when hosting under a sub-path.
export default defineConfig({
  site: process.env.SITE_URL || 'https://solutionsforwomen.net',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'never',
  // Pages build to about.html etc., which GitHub Pages, Netlify and Vercel
  // (cleanUrls) all serve at /about without a redirect.
  build: { format: 'file' },
  integrations: [sitemap()],
  // Keep links to the previous Wix site working on any host.
  redirects: {
    '/team': '/who-we-are#board',
    '/events-1/fleet-week-2026': '/events/fleet-week-2026',
    '/about-test': '/about',
    '/donate': '/support-us',
    '/home': '/',
  },
  image: {
    responsiveStyles: false,
  },
});
