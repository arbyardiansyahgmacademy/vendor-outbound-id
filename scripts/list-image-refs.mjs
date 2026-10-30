import fs from 'node:fs';
import path from 'node:path';

function findFiles(dir, exts) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(findFiles(fullPath, exts));
    } else if (exts.some(ext => file.endsWith(ext))) {
      results.push(fullPath);
    }
  });
  return results;
}

const files = findFiles('src', ['.astro', '.ts', '.css']);
const imageMap = new Map();

for (const file of files) {
  const content = fs.readFileSync(file, 'utf-8');
  const matches = content.match(/\/images\/[a-zA-Z0-9_\-\.\/]+/g) || [];
  for (const m of matches) {
    if (!imageMap.has(m)) imageMap.set(m, new Set());
    imageMap.get(m).add(path.relative(process.cwd(), file).replace(/\\/g, '/'));
  }
}

console.log(`Found ${imageMap.size} unique image references in src:`);
for (const [img, refFiles] of imageMap.entries()) {
  console.log(`${img} -> [${[...refFiles].slice(0, 3).join(', ')}]`);
}

