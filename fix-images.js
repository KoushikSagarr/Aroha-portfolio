import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const dir = path.join(process.cwd(), 'src/assets/images');
const files = fs.readdirSync(dir);

async function fixImages() {
  for (const file of files) {
    if (file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg')) {
      const filePath = path.join(dir, file);
      const tempPath = path.join(dir, 'temp_' + file);
      
      console.log('Processing', file);
      try {
        await sharp(filePath)
          .rotate() // This auto-orients based on EXIF
          .toFile(tempPath);
          
        fs.renameSync(tempPath, filePath);
        console.log('Fixed', file);
      } catch (e) {
        console.error('Failed on', file, e);
      }
    }
  }
}

fixImages();
