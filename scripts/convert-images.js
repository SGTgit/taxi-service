import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const ASSETS_DIR = path.join(process.cwd(), 'public', 'assets');
const exts = ['.png', '.jpg', '.jpeg'];

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(full);
    } else {
      const ext = path.extname(entry.name).toLowerCase();
      if (exts.includes(ext)) {
        const out = full.replace(ext, '.webp');
        try {
          await sharp(full).webp({ quality: 80 }).toFile(out);
          console.log('Converted:', full, '->', out);
        } catch (err) {
          console.error('Failed to convert', full, err.message);
        }
      }
    }
  }
}

(async () => {
  try {
    await walk(ASSETS_DIR);
    console.log('Image conversion complete.');
  } catch (err) {
    console.error('Error walking assets:', err.message);
    process.exit(1);
  }
})();
