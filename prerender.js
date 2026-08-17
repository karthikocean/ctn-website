import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import seoData from './src/data/seoData.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Mapping of React Router routes to seoData.js path-based keys
const routes = [
  { path: '/', key: '/' },
  { path: '/about', key: '/about' },
  { path: '/future', key: '/future' },
  { path: '/membership-plans', key: '/membership-plans' },
  { path: '/pricing', key: '/membership-plans' },
  { path: '/contact', key: '/contact' },
  { path: '/franchise', key: '/franchise' },
  { path: '/events', key: '/events' },
  { path: '/blogs', key: '/blogs' },
  { path: '/privacy-policy', key: '/privacy-policy' },
  { path: '/privacy', key: '/privacy-policy' },
  { path: '/terms-condition', key: '/terms-condition' },
  { path: '/terms', key: '/terms-condition' },
  { path: '/refund-policy', key: '/refund-policy' },
  { path: '/refund', key: '/refund-policy' },
  { path: '/community-guidelines', key: '/community-guidelines' }
];

const distDir = path.resolve(__dirname, 'dist');
const templatePath = path.resolve(distDir, 'index.html');

if (!fs.existsSync(templatePath)) {
  console.error('Build output index.html not found! Please run "vite build" first.');
  process.exit(1);
}

const template = fs.readFileSync(templatePath, 'utf-8');

console.log('Generating SEO prerendered HTML files...');

routes.forEach((route) => {
  const seo = seoData[route.key];
  if (!seo) {
    console.warn(`No SEO metadata found for key: ${route.key}`);
    return;
  }

  // Generate the SEO elements with data-rh="true" to play nicely with react-helmet-async client-side
  const seoTags = `
  <title data-rh="true">${seo.title}</title>
  <meta name="description" content="${seo.description}" data-rh="true">
  <meta name="keywords" content="${seo.keywords}" data-rh="true">`;

  let html = template;
  if (html.includes('<head>')) {
    html = html.replace('<head>', `<head>${seoTags}`);
  } else {
    html = html.replace('<html>', `<html><head>${seoTags}</head>`);
  }

  if (route.path === '/') {
    // Overwrite the main index.html for root path
    fs.writeFileSync(templatePath, html, 'utf-8');
    console.log(`✓ Generated: / -> dist/index.html`);
  } else {
    // Create nested directory and index.html for routes (e.g. dist/about/index.html)
    const routeDir = path.join(distDir, route.path);
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }
    const routeFilePath = path.join(routeDir, 'index.html');
    fs.writeFileSync(routeFilePath, html, 'utf-8');
    console.log(`✓ Generated: ${route.path} -> dist${route.path}/index.html`);
  }
});

console.log('SEO Prerendering completed successfully.');
