const fs = require('fs');
const path = require('path');
const sharp = require('./node_modules/sharp');

const INPUT_DIR = path.resolve(__dirname, '../karty');
const OUTPUT_DIR = path.resolve(__dirname, '../assets/cards');

// Helper to sanitize slug for web URLs
function toWebSlug(filename) {
  return filename
    .replace(/\.png$/i, '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') + '.webp';
}

async function run() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const folders = fs.readdirSync(INPUT_DIR).filter(f => {
    return fs.statSync(path.join(INPUT_DIR, f)).isDirectory() && !f.startsWith('.');
  });

  console.log(`Found ${folders.length} expansion folders.`);

  let totalOriginalBytes = 0;
  let totalOptimizedBytes = 0;
  let count = 0;
  const webpCatalog = [];

  for (const folder of folders) {
    const srcFolder = path.join(INPUT_DIR, folder);
    const folderSlug = folder.toLowerCase();
    const destFolder = path.join(OUTPUT_DIR, folderSlug);

    if (!fs.existsSync(destFolder)) {
      fs.mkdirSync(destFolder, { recursive: true });
    }

    const files = fs.readdirSync(srcFolder).filter(f => f.endsWith('.png'));

    for (const file of files) {
      const srcPath = path.join(srcFolder, file);
      const webFilename = toWebSlug(file);
      const destPath = path.join(destFolder, webFilename);
      const relativeWebPath = `assets/cards/${folderSlug}/${webFilename}`;

      const origStats = fs.statSync(srcPath);
      totalOriginalBytes += origStats.size;

      // Optimize: max width 360px (perfect for retina @2x mobile and desktop cards), quality 80 webp
      const image = sharp(srcPath);
      const metadata = await image.metadata();

      let pipeline = image.rotate(); // auto-rotate if orientation set
      if (metadata.width > 360) {
        pipeline = pipeline.resize({ width: 360, withoutEnlargement: true });
      }

      const buffer = await pipeline
        .webp({ quality: 80, effort: 6 })
        .toBuffer();

      fs.writeFileSync(destPath, buffer);
      totalOptimizedBytes += buffer.length;
      count++;

      const destMeta = await sharp(buffer).metadata();

      webpCatalog.push({
        origTitle: file.replace(/\.png$/i, ''),
        origFolder: folder,
        webPath: relativeWebPath,
        width: destMeta.width,
        height: destMeta.height,
        origBytes: origStats.size,
        webpBytes: buffer.length
      });
    }
  }

  const catalogPath = path.join(OUTPUT_DIR, 'catalog.json');
  fs.writeFileSync(catalogPath, JSON.stringify(webpCatalog, null, 2));

  console.log(`\nConversion complete!`);
  console.log(`Processed: ${count} card images.`);
  console.log(`Original PNG total: ${(totalOriginalBytes / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Optimized WebP total: ${(totalOptimizedBytes / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Savings: ${((1 - totalOptimizedBytes / totalOriginalBytes) * 100).toFixed(1)}% reduction!`);
  console.log(`Average card size: ${(totalOptimizedBytes / count / 1024).toFixed(1)} kB`);
  console.log(`Catalog saved to: ${catalogPath}`);
}

run().catch(err => {
  console.error('Error during webp conversion:', err);
  process.exit(1);
});
