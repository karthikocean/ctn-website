import axios from 'axios';
import seoData from '../src/data/seoData.js';

const routes = [
  '/',
  '/about',
  '/future',
  '/membership-plans',
  '/contact',
  '/franchise',
  '/events',
  '/blogs',
  '/privacy-policy',
  '/terms-condition',
  '/refund-policy',
  '/community-guidelines'
];

async function verifyAll() {
  console.log('Verifying all SEO routes against http://localhost:5173 ...');
  let allPass = true;

  for (const route of routes) {
    try {
      const url = `http://localhost:5173${route}`;
      const res = await axios.get(url, { headers: { 'Accept': 'text/html' } });
      const html = res.data;

      const expectedSeo = seoData[route];
      if (!expectedSeo) {
        console.error(`❌ Route ${route}: No expected SEO data in seoData.js`);
        allPass = false;
        continue;
      }

      // Extract SEO elements
      const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
      const title = titleMatch ? titleMatch[1].trim() : null;

      const descMatch = html.match(/<meta[^>]*name="description"[^>]*content="([^"]*)"[^>]*>/i) ||
                        html.match(/<meta[^>]*content="([^"]*)"[^>]*name="description"[^>]*>/i);
      const description = descMatch ? descMatch[1] : null;

      const kwMatch = html.match(/<meta[^>]*name="keywords"[^>]*content="([^"]*)"[^>]*>/i) ||
                      html.match(/<meta[^>]*content="([^"]*)"[^>]*name="keywords"[^>]*>/i);
      const keywords = kwMatch ? kwMatch[1] : null;

      console.log(`\nRoute: ${route}`);
      
      let pass = true;
      if (title === expectedSeo.title) {
        console.log(`  ✓ Title: ${title}`);
      } else {
        console.error(`  ❌ Title: Expected "${expectedSeo.title}", Got "${title}"`);
        pass = false;
      }

      if (description === expectedSeo.description) {
        console.log(`  ✓ Description matches`);
      } else {
        console.error(`  ❌ Description: Expected "${expectedSeo.description}", Got "${description}"`);
        pass = false;
      }

      if (keywords === expectedSeo.keywords) {
        console.log(`  ✓ Keywords matches`);
      } else {
        console.error(`  ❌ Keywords: Expected "${expectedSeo.keywords}", Got "${keywords}"`);
        pass = false;
      }

      if (!pass) allPass = false;

    } catch (err) {
      console.error(`❌ Route ${route}: Failed to fetch (${err.message})`);
      allPass = false;
    }
  }

  if (allPass) {
    console.log('\n🎉 ALL ROUTES PASSED VERIFICATION!');
  } else {
    console.error('\n❌ SOME ROUTES FAILED VERIFICATION!');
  }
}

verifyAll();
