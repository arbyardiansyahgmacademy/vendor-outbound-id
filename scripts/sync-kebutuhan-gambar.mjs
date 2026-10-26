import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const pubImages = path.join(rootDir, 'public', 'images');
const srcDir = path.join(pubImages, 'kebutuhan-gambar');

console.log('--- SYNCING IMAGES FROM KEBUTUHAN-GAMBAR ---');

const mappings = [
  // Hero
  { from: 'hero-bromo-sunrise.webp', to: 'hero/hero-outbound.webp' },
  
  // Services
  { from: 'team-building.webp', to: 'services/outbound-perusahaan.webp' },
  { from: 'family-gathering.webp', to: 'services/family-gathering.webp' },
  { from: 'outbound-sekolah.webp', to: 'services/outbound-sekolah.webp' },
  { from: 'prog-offroad-jeep.webp', to: 'services/wisata-adventure.webp' },

  // Packages
  { from: 'team-building.webp', to: 'packages/team-building.webp' },
  { from: 'team-building.webp', to: 'packages/corporate-gathering.webp' },
  { from: 'family-gathering.webp', to: 'packages/fun-games.webp' },
  { from: 'camping-safari.webp', to: 'packages/leadership-camp.webp' },
  { from: 'outbound-sekolah.webp', to: 'packages/character-building.webp' },
  { from: 'outbound-sekolah.webp', to: 'packages/ldks-leadership.webp' },
  { from: 'dest-coban-rondo.webp', to: 'packages/edukasi-alam.webp' },
  { from: 'outbound-sekolah.webp', to: 'packages/outbound-pelajar.webp' },
  { from: 'rafting.webp', to: 'packages/rafting.webp' },
  { from: 'offroad-jeep.webp', to: 'packages/offroad-4x4.webp' },
  { from: 'prog-camping.webp', to: 'packages/camping.webp' },
  { from: 'dest-batu-malang.webp', to: 'packages/outbound-wisata.webp' },
  { from: 'family-gathering.webp', to: 'packages/paket-hemat.webp' },
  { from: 'prog-gala-dinner.webp', to: 'packages/paket-standar.webp' },
  { from: 'prog-glamping.webp', to: 'packages/paket-premium.webp' },
  { from: 'paintball-tactical.webp', to: 'packages/paket-custom.webp' },

  // Gallery
  { from: 'team-building.webp', to: 'gallery/gallery-1.webp' },
  { from: 'family-gathering.webp', to: 'gallery/gallery-2.webp' },
  { from: 'outbound-sekolah.webp', to: 'gallery/gallery-3.webp' },
  { from: 'rafting.webp', to: 'gallery/gallery-4.webp' },
  { from: 'offroad-jeep.webp', to: 'gallery/gallery-5.webp' },
  { from: 'prog-camping.webp', to: 'gallery/gallery-6.webp' },

  // About & Team
  { from: 'team-about-malang.webp', to: 'about/team-fasilitator.webp' },

  // Blog
  { from: 'team-building.webp', to: 'blog/panduan-lengkap-corporate-gathering-malang.webp' },
  { from: 'dest-coban-rondo.webp', to: 'blog/panduan-lokasi-outbound-batu-malang.webp' },
  { from: 'paintball-tactical.webp', to: 'blog/kunci-sukses-membangun-komunikasi-tim-outbound.webp' },
  { from: 'family-gathering.webp', to: 'blog/tips-family-gathering-batu-malang.webp' },

  // Activities
  { from: 'team-building.webp', to: 'activities/outbound-team-building.webp' },
  { from: 'rafting.webp', to: 'activities/rafting-arung-jeram.webp' },
  { from: 'offroad-jeep.webp', to: 'activities/offroad-jeep-4x4.webp' },
  { from: 'camping-safari.webp', to: 'activities/berkemah-camping-ground.webp' },
  { from: 'hero-bromo-sunrise.webp', to: 'activities/keindahan-alam-batu-malang.webp' },
];

for (const m of mappings) {
  const source = path.join(srcDir, m.from);
  const dest = path.join(pubImages, m.to);
  const destDir = path.dirname(dest);
  
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  if (fs.existsSync(source)) {
    fs.copyFileSync(source, dest);
    console.log(`✓ Copied: ${m.from} -> ${m.to}`);
  } else {
    console.warn(`! Source not found: ${source}`);
  }
}

// Logo fix copies
const logoSource = path.join(pubImages, 'logo', 'logo-fix.webp');
if (fs.existsSync(logoSource)) {
  fs.copyFileSync(logoSource, path.join(rootDir, 'public', 'favicon.webp'));
  fs.copyFileSync(logoSource, path.join(rootDir, 'public', 'favicon.ico'));
  console.log('✓ Copied logo-fix.webp to favicon.webp and favicon.ico');
}

console.log('--- ALL IMAGES SYNCHRONIZED SUCCESSFULLY ---');
