/**
 * BANG! Companion — Static Asset Optimization & Brotli (Level 11) Compressor
 * 
 * - Automatically scans and updates assets/images-manifest.json for offline pre-caching.
 * - Compresses static text assets (JS, CSS, HTML, JSON, SVG) with Brotli Level 11 (max quality).
 * - Prevents double compression by explicitly skipping already-compressed binary
 *   formats (webp, png, jpg, mp3, m4a, zip, etc.) and existing .br / .gz files.
 * - Suitable for CI/CD pipelines (e.g. GitHub Actions) to avoid runtime server overhead.
 */

const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

// Extensions allowed for Brotli / Gzip compression
const COMPRESSIBLE_EXTENSIONS = new Set([
  '.html',
  '.css',
  '.js',
  '.json',
  '.svg',
  '.txt',
  '.xml'
]);

// Extensions that MUST NEVER be compressed (already compressed binary, media or archives)
const EXCLUDED_EXTENSIONS = new Set([
  '.br',
  '.gz',
  '.webp',
  '.png',
  '.jpg',
  '.jpeg',
  '.gif',
  '.ico',
  '.avif',
  '.mp3',
  '.m4a',
  '.ogg',
  '.wav',
  '.flac',
  '.pdf',
  '.zip',
  '.tar',
  '.gz',
  '.7z',
  '.rar',
  '.woff',
  '.woff2',
  '.ttf',
  '.eot'
]);

// Directories to ignore
const IGNORED_DIRS = new Set([
  '.git',
  '.github',
  'node_modules',
  'karty'
]);

function shouldCompressFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const base = path.basename(filePath);

  // Skip hidden files, system files, or already compressed archives
  if (base.startsWith('.') && base !== '.nojekyll') return false;
  if (EXCLUDED_EXTENSIONS.has(ext)) return false;
  if (filePath.endsWith('.br') || filePath.endsWith('.gz')) return false;

  return COMPRESSIBLE_EXTENSIONS.has(ext);
}

function findFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    if (IGNORED_DIRS.has(entry.name)) continue;

    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      findFiles(fullPath, fileList);
    } else if (entry.isFile() && shouldCompressFile(fullPath)) {
      fileList.push(fullPath);
    }
  }

  return fileList;
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  const kb = (bytes / 1024).toFixed(1);
  return `${kb} KB`;
}

// 1. Scan and generate images manifest for Service Worker pre-caching
function generateImagesManifest(rootDir) {
  const assetsDir = path.join(rootDir, 'assets');
  if (!fs.existsSync(assetsDir)) return 0;

  function scanImages(dir) {
    let images = [];
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.name.startsWith('.')) continue;
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        images = images.concat(scanImages(full));
      } else if (/\.(webp|png|jpg|jpeg|svg|ico)$/i.test(entry.name)) {
        const rel = './' + path.relative(rootDir, full).replace(/\\/g, '/');
        images.push(rel);
      }
    }
    return images;
  }

  const allImages = scanImages(assetsDir).sort();
  const manifestPath = path.join(assetsDir, 'images-manifest.json');
  fs.writeFileSync(manifestPath, JSON.stringify(allImages, null, 2), 'utf8');
  console.log(`✓ Indexed ${allImages.length} images into assets/images-manifest.json`);
  return allImages.length;
}

function compressFile(filePath) {
  const content = fs.readFileSync(filePath);
  const originalSize = content.length;

  if (originalSize === 0) return null;

  // 1. Brotli Level 11 (Maximum static compression quality)
  const brPath = `${filePath}.br`;
  const brCompressed = zlib.brotliCompressSync(content, {
    params: {
      [zlib.constants.BROTLI_PARAM_MODE]: zlib.constants.BROTLI_MODE_GENERIC,
      [zlib.constants.BROTLI_PARAM_QUALITY]: zlib.constants.BROTLI_MAX_QUALITY, // Level 11
      [zlib.constants.BROTLI_PARAM_LGWIN]: 22, // 4MB window
      [zlib.constants.BROTLI_PARAM_SIZE_HINT]: originalSize
    }
  });
  fs.writeFileSync(brPath, brCompressed);

  // 2. Gzip Level 9 (For legacy fallbacks)
  const gzPath = `${filePath}.gz`;
  const gzCompressed = zlib.gzipSync(content, { level: 9 });
  fs.writeFileSync(gzPath, gzCompressed);

  const brRatio = Math.round((brCompressed.length / originalSize) * 100);
  const gzRatio = Math.round((gzCompressed.length / originalSize) * 100);

  return {
    filePath,
    originalSize,
    brSize: brCompressed.length,
    gzSize: gzCompressed.length,
    brRatio,
    gzRatio
  };
}

function run() {
  console.log('🤠 BANG! Companion — Static Asset Optimization & Brotli (Level 11)');
  console.log('================================================================');

  const rootDir = path.resolve(__dirname, '..');

  // Step 1: Update images manifest
  generateImagesManifest(rootDir);

  // Step 2: Discover compressible files
  const filesToCompress = [];

  ['index.html', 'manifest.json', 'sw.js'].forEach(f => {
    const p = path.join(rootDir, f);
    if (fs.existsSync(p)) filesToCompress.push(p);
  });

  ['css', 'js', 'assets'].forEach(d => {
    findFiles(path.join(rootDir, d), filesToCompress);
  });

  // Deduplicate and filter out manifest itself if needed
  const uniqueFiles = [...new Set(filesToCompress)];

  let totalOriginal = 0;
  let totalBrotli = 0;
  let totalGzip = 0;

  console.log(`\nCompressing ${uniqueFiles.length} static text assets:\n`);

  for (const file of uniqueFiles) {
    const relPath = path.relative(rootDir, file);
    try {
      const stats = compressFile(file);
      if (stats) {
        totalOriginal += stats.originalSize;
        totalBrotli += stats.brSize;
        totalGzip += stats.gzSize;

        const padPath = relPath.padEnd(28);
        const origStr = formatBytes(stats.originalSize).padStart(9);
        const brStr = `${formatBytes(stats.brSize)} (${stats.brRatio}%)`.padStart(16);
        const gzStr = `${formatBytes(stats.gzSize)} (${stats.gzRatio}%)`.padStart(16);

        console.log(`  ✓ ${padPath} | Orig: ${origStr} | Brotli: ${brStr} | Gzip: ${gzStr}`);
      }
    } catch (err) {
      console.error(`  ✗ Error compressing ${relPath}:`, err.message);
    }
  }

  const overallBrRatio = Math.round((totalBrotli / totalOriginal) * 100);
  const overallGzRatio = Math.round((totalGzip / totalOriginal) * 100);

  console.log('\n================================================================');
  console.log(`Total Original Size: ${formatBytes(totalOriginal)}`);
  console.log(`Total Brotli (L11):  ${formatBytes(totalBrotli)} (${overallBrRatio}% of original, saved ${formatBytes(totalOriginal - totalBrotli)})`);
  console.log(`Total Gzip (L9):     ${formatBytes(totalGzip)} (${overallGzRatio}% of original)`);
  console.log('Brotli Level 11 pre-compression completed successfully! 🚀\n');
}

if (require.main === module) {
  run();
}

module.exports = { run, compressFile, shouldCompressFile, generateImagesManifest };
