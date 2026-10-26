// Script to download and optimize new real photographs of:
// Outbound, Rafting, Berkemah, Offroad, and Alam (Nature).
// All images are compressed into WebP format strictly under 100 KB.

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const NEW_IMAGES = [
  {
    theme: 'Outbound / Team Building',
    url: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80',
    target: 'public/images/activities/outbound-team-building.webp',
    width: 1000,
    height: 667,
    quality: 75
  },
  {
    theme: 'Rafting / Arung Jeram',
    url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
    target: 'public/images/activities/rafting-arung-jeram.webp',
    width: 1000,
    height: 667,
    quality: 75
  },
  {
    theme: 'Berkemah / Camping Ground',
    url: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80',
    target: 'public/images/activities/berkemah-camping-ground.webp',
    width: 1000,
    height: 667,
    quality: 75
  },
  {
    theme: 'Offroad Jeep 4x4',
    url: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80',
    target: 'public/images/activities/offroad-jeep-4x4.webp',
    width: 1000,
    height: 667,
    quality: 75
  },
  {
    theme: 'Keindahan Alam & Wisata Pegunungan Batu',
    url: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=80',
    target: 'public/images/activities/keindahan-alam-batu.webp',
    width: 1000,
    height: 667,
    quality: 75
  }
];

async function run() {
  console.log('--- Generating New Real Images for Outbound, Rafting, Berkemah, Offroad, Alam ---');
  
  for (const item of NEW_IMAGES) {
    try {
      console.log(`Downloading [${item.theme}] from Unsplash...`);
      const response = await fetch(item.url);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      const buffer = Buffer.from(await response.arrayBuffer());

      let webpBuffer = await sharp(buffer)
        .resize(item.width, item.height, { fit: 'cover', position: 'center' })
        .webp({ quality: item.quality, effort: 4 })
        .toBuffer();

      // Ensure < 100KB
      if (webpBuffer.length > 95 * 1024) {
        webpBuffer = await sharp(buffer)
          .resize(item.width, item.height, { fit: 'cover' })
          .webp({ quality: 68, effort: 4 })
          .toBuffer();
      }

      const dir = path.dirname(item.target);
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

      fs.writeFileSync(item.target, webpBuffer);
      const sizeKb = (webpBuffer.length / 1024).toFixed(1);
      console.log(`✓ Saved: ${item.target} (${sizeKb} KB) — Theme: ${item.theme}`);
    } catch (err) {
      console.error(`✗ Error processing ${item.theme}:`, err.message);
    }
  }

  console.log('--- All new activity images generated successfully! ---');
}

run();
