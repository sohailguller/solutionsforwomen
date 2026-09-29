import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// BASE_PATH and SITE_URL are set by the GitHub Pages preview workflow.
// Production builds (Netlify) use the defaults.
export default defineConfig({
  site: process.env.SITE_URL || 'https://www.solutionsforwomen.net',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'never',
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
