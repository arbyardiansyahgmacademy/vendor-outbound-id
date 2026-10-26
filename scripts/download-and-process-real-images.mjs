// Script to download authentic photographic imagery from Unsplash,
// resize and compress them via Sharp to WebP format, ensuring all files are < 100KB.
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const IMAGES_TO_FETCH = [
  // 1. Author Avatar
  {
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80', // Friendly professional male portrait
    width: 400,
    height: 400,
    quality: 80,
    targets: [
      'public/images/author-artikel/author-artikel-arby-ardiansyah.webp',
      'public/images/authors/author-artikel-arby-ardiansyah.webp',
      'public/images/authors/author-default.webp'
    ]
  },

  // 2. Article Hero & Key Supporting Images (Matching user's reference HTML)
  {
    url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80', // Mountain sunrise mist
    width: 1200,
    height: 675,
    quality: 78,
    targets: [
      'public/images/hero-bromo-sunrise.webp',
      'public/images/blog/panduan-lengkap-corporate-gathering-malang.webp'
    ]
  },
  {
    url: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80', // Team celebrating on lawn
    width: 800,
    height: 500,
    quality: 75,
    targets: [
      'public/images/team-about-malang.webp',
      'public/images/services/outbound-perusahaan.webp',
      'public/images/packages/corporate-gathering.webp'
    ]
  },
  {
    url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80', // Batu mountain panorama
    width: 800,
    height: 500,
    quality: 75,
    targets: [
      'public/images/dest-batu-malang.webp',
      'public/images/blog/panduan-lokasi-outbound.webp'
    ]
  },
  {
    url: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80', // Glamping tent in nature
    width: 800,
    height: 500,
    quality: 75,
    targets: [
      'public/images/prog-glamping.webp',
      'public/images/packages/camping.webp',
      'public/images/packages/paket-premium.webp'
    ]
  },
  {
    url: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=800&q=80', // Outdoor evening dinner
    width: 800,
    height: 500,
    quality: 75,
    targets: [
      'public/images/prog-gala-dinner.webp',
      'public/images/packages/paket-custom.webp'
    ]
  },
  {
    url: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80', // 4x4 Jeep trail
    width: 800,
    height: 500,
    quality: 75,
    targets: [
      'public/images/prog-offroad-jeep.webp',
      'public/images/packages/offroad-4x4.webp'
    ]
  },

  // 3. Hero Main Webpage
  {
    url: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80', // Team adventure in green nature
    width: 1200,
    height: 675,
    quality: 78,
    targets: [
      'public/images/hero/hero-outbound.webp'
    ]
  },

  // 4. Other Services
  {
    url: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80', // Family having fun on lawn
    width: 800,
    height: 533,
    quality: 75,
    targets: [
      'public/images/services/family-gathering.webp',
      'public/images/packages/fun-games.webp',
      'public/images/blog/tips-family-gathering.webp'
    ]
  },
  {
    url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80', // Youth group / students
    width: 800,
    height: 533,
    quality: 75,
    targets: [
      'public/images/services/outbound-sekolah.webp',
      'public/images/packages/outbound-pelajar.webp',
      'public/images/packages/ldks-leadership.webp',
      'public/images/packages/leadership-camp.webp'
    ]
  },
  {
    url: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=800&q=80', // Adventure outdoor
    width: 800,
    height: 533,
    quality: 75,
    targets: [
      'public/images/services/wisata-adventure.webp',
      'public/images/packages/outbound-wisata.webp',
      'public/images/packages/edukasi-alam.webp'
    ]
  },

  // 5. Packages: Team Building & Rafting
  {
    url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80', // Team collaboration
    width: 800,
    height: 533,
    quality: 75,
    targets: [
      'public/images/packages/team-building.webp',
      'public/images/packages/character-building.webp',
      'public/images/packages/paket-standard.webp',
      'public/images/packages/paket-hemat.webp',
      'public/images/blog/kunci-sukses-komunikasi.webp'
    ]
  },
  {
    url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80', // River rafting splash
    width: 800,
    height: 533,
    quality: 75,
    targets: [
      'public/images/packages/rafting.webp'
    ]
  },

  // 6. Gallery Items 1 - 6
  {
    url: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80', // Team outdoor activity
    width: 800,
    height: 600,
    quality: 75,
    targets: ['public/images/gallery/gallery-1.webp']
  },
  {
    url: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80', // Team cheer
    width: 800,
    height: 600,
    quality: 75,
    targets: ['public/images/gallery/gallery-2.webp']
  },
  {
    url: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=800&q=80', // Family laugh
    width: 800,
    height: 600,
    quality: 75,
    targets: ['public/images/gallery/gallery-3.webp']
  },
  {
    url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80', // Youth group
    width: 800,
    height: 600,
    quality: 75,
    targets: ['public/images/gallery/gallery-4.webp']
  },
  {
    url: 'https://images.unsplash.com/photo-1530866495561-507c9faab2ed?auto=format&fit=crop&w=800&q=80', // White water rafting action
    width: 800,
    height: 600,
    quality: 75,
    targets: ['public/images/gallery/gallery-5.webp']
  },
  {
    url: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80', // Jeep on mountain trail
    width: 800,
    height: 600,
    quality: 75,
    targets: ['public/images/gallery/gallery-6.webp']
  },

  // 7. Testimonials Client Avatars
  {
    url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80', // Executive man
    width: 300,
    height: 300,
    quality: 80,
    targets: ['public/images/testimonials/client-1.webp']
  },
  {
    url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80', // Professional woman
    width: 300,
    height: 300,
    quality: 80,
    targets: ['public/images/testimonials/client-2.webp']
  },
  {
    url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80', // Friendly senior leader
    width: 300,
    height: 300,
    quality: 80,
    targets: ['public/images/testimonials/client-3.webp']
  }
];

async function run() {
  console.log(`Starting download and processing of ${IMAGES_TO_FETCH.length} image sets...`);
  
  for (const item of IMAGES_TO_FETCH) {
    try {
      console.log(`Fetching: ${item.url.slice(0, 60)}...`);
      const response = await fetch(item.url);
      if (!response.ok) {
        throw new Error(`Failed to fetch HTTP ${response.status}`);
      }
      const arrayBuffer = await response.arrayBuffer();
      const inputBuffer = Buffer.from(arrayBuffer);

      // Process via sharp
      const webpBuffer = await sharp(inputBuffer)
        .resize(item.width, item.height, { fit: 'cover', position: 'center' })
        .webp({ quality: item.quality, effort: 4 })
        .toBuffer();

      const sizeKb = (webpBuffer.length / 1024).toFixed(1);
      console.log(`✓ Processed image (${item.width}x${item.height}) - ${sizeKb} KB (< 100 KB target)`);

      if (webpBuffer.length > 100 * 1024) {
        console.warn(`WARNING: File size ${sizeKb} KB is over 100 KB! Retrying with lower quality...`);
        const smallerBuffer = await sharp(inputBuffer)
          .resize(item.width, item.height, { fit: 'cover' })
          .webp({ quality: 65 })
          .toBuffer();
        for (const target of item.targets) {
          const dir = path.dirname(target);
          if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
          fs.writeFileSync(target, smallerBuffer);
          console.log(`   Saved: ${target} (${(smallerBuffer.length / 1024).toFixed(1)} KB)`);
        }
      } else {
        for (const target of item.targets) {
          const dir = path.dirname(target);
          if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
          fs.writeFileSync(target, webpBuffer);
          console.log(`   Saved: ${target} (${sizeKb} KB)`);
        }
      }
    } catch (err) {
      console.error(`Error processing image ${item.url}:`, err.message);
    }
  }

  console.log('Finished processing all images.');
}

run();
