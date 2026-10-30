kakn inimport fs from 'node:fs';
import path from 'node:path';

const srcDir = path.resolve('public', 'images', 'kebutuhan-gambar');
const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.webp'));

console.log(`Total WebP files in kebutuhan-gambar: ${files.length}`);
files.sort().forEach((f, idx) => {
  const size = fs.statSync(path.join(srcDir, f)).size;
  console.log(`${(idx + 1).toString().padStart(2, ' ')}. ${f} (${(size / 1024).toFixed(1)} KB)`);
});

