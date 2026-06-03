import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

// Configure which images to generate responsive variants for
const targets = [
  { src: 'public/assets/package-temple.png', name: 'package-temple' },
];

const sizes = [400, 800, 1200, 1600];

async function ensureDir(dir) {
  try {
    await fs.mkdir(dir, { recursive: true });
  } catch (e) {
    // noop
  }
}

async function run() {
  for (const t of targets) {
    const srcPath = path.join(process.cwd(), t.src);
    const outDir = path.join(process.cwd(), 'public', 'assets', 'responsive');
    await ensureDir(outDir);

    for (const w of sizes) {
      const out = path.join(outDir, `${t.name}-${w}.webp`);
      try {
        await sharp(srcPath).resize(w).webp({ quality: 78 }).toFile(out);
        console.log(`Wrote ${out}`);
      } catch (err) {
        console.error('Failed to write', out, err.message);
      }
    }
  }
}

run().catch((err) => { console.error(err); process.exit(1); });
