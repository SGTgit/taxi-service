import fs from 'fs/promises';
import path from 'path';
import { BUSINESS } from '../src/config/business.js';

async function main() {
  const root = process.cwd();
  const dataPath = path.join(root, 'src', 'data', 'siteData.jsx');
  let content = '';
  try {
    content = await fs.readFile(dataPath, 'utf8');
  } catch (err) {
    console.error('Could not read siteData.jsx', err);
    process.exit(1);
  }

  const ids = [];
  const idRegex = /id:\s*'([^']+)'/g;
  let m;
  while ((m = idRegex.exec(content)) !== null) {
    ids.push(m[1]);
  }

  const pages = [
    '/',
    '/packages',
    '/destinations',
    '/contact',
    '/about',
    '/services',
    '/gallery',
    '/booking',
  ];

  const urls = [];
  for (const p of pages) urls.push({ loc: `${BUSINESS.domain}${p}`, priority: p === '/' ? 1.0 : 0.8 });
  for (const id of ids) urls.push({ loc: `${BUSINESS.domain}/packages/${id}`, priority: 0.7 });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(u => `  <url>\n    <loc>${u.loc}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`).join('\n')}\n</urlset>`;

  const outPath = path.join(root, 'public', 'sitemap.xml');
  await fs.writeFile(outPath, sitemap, 'utf8');
  console.log(`Wrote sitemap with ${urls.length} URLs to ${outPath}`);
}

main().catch((err) => { console.error(err); process.exit(1); });
