import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'

import seoData from './src/data/seoData.js'

console.error('SEO DATA KEYS:', Object.keys(seoData || {}));

// Simple helper to match the path to seoData key
const getCanonicalPath = (path) => {
  const p = path.toLowerCase().replace(/\/$/, '');
  if (p === '' || p === '/') return '/';
  if (p === '/pricing') return '/membership-plans';
  if (p === '/privacy') return '/privacy-policy';
  if (p === '/terms') return '/terms-condition';
  if (p === '/refund') return '/refund-policy';
  if (p.startsWith('/events')) return '/events';
  if (p.startsWith('/blogs')) return '/blogs';
  return p;
};

const seoPlugin = () => {
  return {
    name: 'vite-plugin-seo-dev',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = req.url ? req.url.split('?')[0] : '/';
        console.error('MIDDLEWARE REQUEST:', url, 'ACCEPT:', req.headers.accept);
        const canonicalPath = getCanonicalPath(url);
        const seo = seoData[canonicalPath];

        if (seo && (url === '/' || !url.includes('.'))) {
          const templatePath = path.resolve(server.config.root, 'index.html');
          let html = fs.readFileSync(templatePath, 'utf-8');

          // Apply Vite's internal transforms (react-refresh, vite client, etc.)
          html = await server.transformIndexHtml(url, html);

          // Inject route-specific SEO metadata
          const seoTags = `
  <title data-rh="true">${seo.title}</title>
  <meta name="description" content="${seo.description}" data-rh="true">
  <meta name="keywords" content="${seo.keywords}" data-rh="true">`;

          if (html.includes('<head>')) {
            html = html.replace('<head>', `<head>${seoTags}`);
          }

          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/html');
          res.setHeader('X-SEO-Injected', 'true');
          res.end(html);
          return;
        }
        next();
      });
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), seoPlugin()],
  server: {
    host: true,
    port: 5173
  }
}) 
