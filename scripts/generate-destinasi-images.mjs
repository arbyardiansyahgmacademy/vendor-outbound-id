import https from 'https';
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const DESTINATIONS = [
  {
    name: 'Coban Rondo',
    filename: 'coban-rondo.webp',
    // Pine forest & grand waterfall
    url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Coban Rais',
    filename: 'coban-rais.webp',
    // Flower garden & pine mountain slope
    url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Coban Putri',
    filename: 'coban-putri.webp',
    // Cascading multi-tier waterfall in jungle
    url: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Coban Talun',
    filename: 'coban-talun.webp',
    // Pine trees and misty river valley
    url: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Payung Pinus',
    filename: 'payung-pinus.webp',
    // Pine high ridge mountain viewpoint overlooking valley
    url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Kaliwatu Rafting',
    filename: 'kaliwatu-rafting.webp',
    // River rafting action in vibrant green water
    url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Gunung Bromo',
    filename: 'gunung-bromo.webp',
    // Mount Bromo golden sunrise & sea of sand
    url: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Air Terjun Tumpak Sewu',
    filename: 'tumpak-sewu.webp',
    // Dramatic curtain waterfall / canyon
    url: 'https://images.unsplash.com/photo-1533240332313-0db49b459ad6?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Hotel Jambuluwuk Resort',
    filename: 'hotel-jambuluwuk-resort.webp',
    // Luxury villa resort with manicured lawn & mountain view
    url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
  }
];

const destDir = path.resolve('public/images/destinasi');
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

function fetchBuffer(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchBuffer(res.headers.location).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to load ${url}, status: ${res.statusCode}`));
      }
      const data = [];
      res.on('data', chunk => data.push(chunk));
      res.on('end', () => resolve(Buffer.concat(data)));
    }).on('error', reject);
  });
}

async function run() {
  console.log('Generating 9 official destination images...');
  for (const item of DESTINATIONS) {
    const targetPath = path.join(destDir, item.filename);
    try {
      console.log(`Downloading: ${item.name} (${item.filename})...`);
      const buffer = await fetchBuffer(item.url);
      
      let quality = 78;
      let outputBuffer = await sharp(buffer)
        .resize(800, 500, { fit: 'cover' })
        .webp({ quality })
        .toBuffer();

      // Ensure under 95KB
      while (outputBuffer.length > 95 * 1024 && quality > 40) {
        quality -= 5;
        outputBuffer = await sharp(buffer)
          .resize(800, 500, { fit: 'cover' })
          .webp({ quality })
          .toBuffer();
      }

      fs.writeFileSync(targetPath, outputBuffer);
      console.log(`✓ Saved ${item.filename} (${(outputBuffer.length / 1024).toFixed(1)} KB, Q=${quality})`);
    } catch (e) {
      console.error(`✗ Error processing ${item.name}:`, e.message);
    }
  }
  console.log('Done generating destination images!');
}

run();

