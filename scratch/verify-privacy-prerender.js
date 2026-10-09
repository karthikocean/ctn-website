import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '..', 'dist');

const filesToTest = [
  path.join(distDir, 'privacy-policy', 'index.html'),
  path.join(distDir, 'privacy-policy.html'),
  path.join(distDir, 'privacy', 'index.html')
];

const requiredSections = [
  { id: 'collect', title: '1. Information We Collect' },
  { id: 'use-info', title: '2. How We Use Information' },
  { id: 'cookies', title: '3. Cookies & Analytics' },
  { id: 'sharing', title: '4. Data Sharing' },
  { id: 'security', title: '5. Data Security' },
  { id: 'retention', title: '6. Data Retention & Account Status' },
  { id: 'rights', title: '7. User Rights' },
  { id: 'links', title: '8. Third-Party Links' },
  { id: 'children', title: "9. Children's Privacy" },
  { id: 'updates', title: '10. Policy Updates' },
  { id: 'contact', title: '11. Contact Information' }
];

const requiredStrings = [
  'Trusted Network Privacy Policy',
  'Oceansoftwares Pvt. Ltd.',
  'admin@trustednetwork.in',
  '+91 97911 52132',
  'https://trustednetwork.in',
  'June 27, 2026',
  'Important Legal Notice',
  '<title data-rh="true">Trusted Network Privacy Policy | Trusted Network</title>',
  'name="description"',
  'data privacy, online privacy, personal data'
];

let allPassed = true;

for (const filePath of filesToTest) {
  const relPath = path.relative(path.resolve(__dirname, '..'), filePath);
  console.log(`\nTesting ${relPath}...`);

  if (!fs.existsSync(filePath)) {
    console.error(`❌ File not found: ${relPath}`);
    allPassed = false;
    continue;
  }

  const html = fs.readFileSync(filePath, 'utf-8');

  // Verify not empty
  if (html.length < 5000) {
    console.error(`❌ File too small (${html.length} bytes), expected full prerendered HTML`);
    allPassed = false;
    continue;
  }
  console.log(`  ✓ File exists (${html.length} bytes, valid UTF-8)`);

  // Verify #root is NOT empty
  const rootMatch = html.match(/<div id="root">([\s\S]*?)<\/div>\s*<\/body>/);
  if (!rootMatch || !rootMatch[1].trim()) {
    console.error(`❌ <div id="root"> is empty or not found!`);
    allPassed = false;
  } else {
    console.log(`  ✓ <div id="root"> contains ${rootMatch[1].length} characters of initial HTML`);
  }

  // Verify H1
  if (html.includes('<h1>Trusted Network Privacy Policy</h1>')) {
    console.log('  ✓ <h1>Trusted Network Privacy Policy</h1> found');
  } else {
    console.error('❌ <h1>Trusted Network Privacy Policy</h1> missing!');
    allPassed = false;
  }

  // Verify all sections
  for (const sec of requiredSections) {
    const hasId = html.includes(`id="${sec.id}"`);
    // Extract title text without number (e.g. "Information We Collect")
    const titleText = sec.title.replace(/^\d+\.\s*/, '').replace('&', '&amp;');
    const hasTitle = html.includes(titleText);
    if (hasId && hasTitle) {
      console.log(`  ✓ Section "${sec.title}" found`);
    } else {
      console.error(`❌ Section "${sec.title}" (id="${sec.id}", titleText="${titleText}") missing or incomplete! (hasId: ${hasId}, hasTitle: ${hasTitle})`);
      allPassed = false;
    }
  }

  // Verify required key strings
  for (const str of requiredStrings) {
    if (html.includes(str)) {
      console.log(`  ✓ Contains "${str.slice(0, 40)}..."`);
    } else {
      console.error(`❌ Missing required string: "${str}"`);
      allPassed = false;
    }
  }

  // Verify JS bundle script tag is preserved for client-side hydration
  if (html.includes('<script type="module" crossorigin src="/assets/index-')) {
    console.log('  ✓ Client-side React bundle script tag preserved');
  } else {
    console.error('❌ Client-side React bundle script tag missing!');
    allPassed = false;
  }
}

if (allPassed) {
  console.log('\n🎉 ALL PRERENDER VERIFICATIONS PASSED SUCCESSFULLY!');
  process.exit(0);
} else {
  console.error('\n❌ SOME VERIFICATIONS FAILED!');
  process.exit(1);
}
