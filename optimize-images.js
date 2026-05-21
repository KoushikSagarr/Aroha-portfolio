/**
 * optimize-images.js
 * Resizes all large images in src/assets/images to max 1400px wide.
 * Run once: node optimize-images.js
 */

import sharp from './node_modules/sharp/lib/index.js';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const IMAGE_DIR = path.join(__dirname, 'src/assets/images');
const MAX_WIDTH = 1400;
const JPEG_QUALITY = 78;

const files = fs.readdirSync(IMAGE_DIR).filter(f => /\.(jpe?g|png)$/i.test(f));

async function optimizeAll() {
  console.log(`\n🖼  Optimizing ${files.length} images in ${IMAGE_DIR}\n`);

  for (const file of files) {
    const filePath = path.join(IMAGE_DIR, file);
    const tempPath = filePath + '.tmp';
    const originalSize = fs.statSync(filePath).size;
    const isJpeg = /\.(jpe?g)$/i.test(file);
    const isPng = /\.png$/i.test(file);

    try {
      // Read entire file into buffer first to avoid file-lock issues
      const inputBuffer = fs.readFileSync(filePath);
      const img = sharp(inputBuffer);
      const meta = await img.metadata();
      const shouldResize = meta.width > MAX_WIDTH;

      let pipeline = shouldResize
        ? img.resize({ width: MAX_WIDTH, withoutEnlargement: true })
        : img;

      if (isJpeg) {
        await pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toFile(tempPath);
      } else if (isPng) {
        await pipeline.png({ quality: 80, compressionLevel: 9 }).toFile(tempPath);
      }

      // Replace original with temp
      fs.unlinkSync(filePath);
      fs.renameSync(tempPath, filePath);

      const newSize = fs.statSync(filePath).size;
      const saving = (((originalSize - newSize) / originalSize) * 100).toFixed(0);
      const orig = (originalSize / 1024).toFixed(0);
      const now = (newSize / 1024).toFixed(0);

      console.log(
        `  ✅ ${file.padEnd(45)} ${orig} KB → ${now} KB  (${saving}% smaller)${shouldResize ? '  [resized to 1400px]' : ''}`
      );
    } catch (err) {
      // Clean up temp file if it exists
      if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
      console.error(`  ❌ ${file}: ${err.message}`);
    }
  }

  console.log('\n✨ Done! Now run: npm run build\n');
}

optimizeAll();
