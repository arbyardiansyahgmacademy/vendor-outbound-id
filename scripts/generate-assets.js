import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const assets = [
  // Hero
  {
    path: 'public/images/hero/hero-outbound.webp',
    width: 1200,
    height: 700,
    title: 'VENDOR OUTBOUND BATU MALANG',
    subtitle: 'Team Building • Gathering • Adventure',
    theme: 'hero',
    icon: 'mountain'
  },
  // Services
  {
    path: 'public/images/services/outbound-perusahaan.webp',
    width: 800,
    height: 520,
    title: 'OUTBOUND PERUSAHAAN',
    subtitle: 'Team Building Korporat di Pinus Batu',
    theme: 'corporate',
    icon: 'users'
  },
  {
    path: 'public/images/services/family-gathering.webp',
    width: 800,
    height: 520,
    title: 'FAMILY GATHERING',
    subtitle: 'Rekreasi Ceria & Hangat Keluarga',
    theme: 'family',
    icon: 'heart'
  },
  {
    path: 'public/images/services/outbound-sekolah.webp',
    width: 800,
    height: 520,
    title: 'OUTBOUND SEKOLAH',
    subtitle: 'Character Building & LDKS Pelajar',
    theme: 'school',
    icon: 'award'
  },
  {
    path: 'public/images/services/wisata-adventure.webp',
    width: 800,
    height: 520,
    title: 'WISATA & ADVENTURE',
    subtitle: 'Rafting • Offroad 4x4 • Camping',
    theme: 'adventure',
    icon: 'compass'
  },
  // Packages
  { path: 'public/images/packages/team-building.webp', width: 600, height: 400, title: 'TEAM BUILDING', subtitle: 'Sinergi & Komunikasi Tim', theme: 'corporate' },
  { path: 'public/images/packages/fun-games.webp', width: 600, height: 400, title: 'FUN GAMES', subtitle: 'Outbound Ceria Tanpa Beban', theme: 'corporate' },
  { path: 'public/images/packages/leadership-camp.webp', width: 600, height: 400, title: 'LEADERSHIP CAMP', subtitle: 'Kepemimpinan & Ketahanan Mental', theme: 'corporate' },
  { path: 'public/images/packages/corporate-gathering.webp', width: 600, height: 400, title: 'CORPORATE GATHERING', subtitle: 'Gala Dinner & Team Outbound', theme: 'corporate' },
  { path: 'public/images/packages/paket-hemat.webp', width: 600, height: 400, title: 'PAKET HEMAT', subtitle: 'Gathering Keluarga Ekonomis', theme: 'family' },
  { path: 'public/images/packages/paket-standard.webp', width: 600, height: 400, title: 'PAKET STANDARD', subtitle: 'Favorit Prasmanan & Fun Games', theme: 'family' },
  { path: 'public/images/packages/paket-premium.webp', width: 600, height: 400, title: 'PAKET PREMIUM', subtitle: 'Resort Eksklusif & Live Music', theme: 'family' },
  { path: 'public/images/packages/paket-custom.webp', width: 600, height: 400, title: 'PAKET CUSTOM', subtitle: 'Agenda Sesuai Rancangan Anda', theme: 'family' },
  { path: 'public/images/packages/outbound-pelajar.webp', width: 600, height: 400, title: 'OUTBOUND PELAJAR', subtitle: 'Sportivitas & Keakraban Kelas', theme: 'school' },
  { path: 'public/images/packages/character-building.webp', width: 600, height: 400, title: 'CHARACTER BUILDING', subtitle: 'Disiplin, Integritas & Kemandirian', theme: 'school' },
  { path: 'public/images/packages/ldks-leadership.webp', width: 600, height: 400, title: 'LDKS LEADERSHIP', subtitle: 'Simulasi Pemimpin OSIS & MPK', theme: 'school' },
  { path: 'public/images/packages/edukasi-alam.webp', width: 600, height: 400, title: 'EDUKASI ALAM', subtitle: 'Konservasi Lingkungan Batu', theme: 'school' },
  { path: 'public/images/packages/outbound-wisata.webp', width: 600, height: 400, title: 'OUTBOUND WISATA', subtitle: 'Kombinasi Wisata Populer Batu', theme: 'adventure' },
  { path: 'public/images/packages/rafting.webp', width: 600, height: 400, title: 'RAFTING ARUNG JERAM', subtitle: 'Jeram Arus Deras Kaliwatu/Kasembon', theme: 'adventure' },
  { path: 'public/images/packages/offroad-4x4.webp', width: 600, height: 400, title: 'OFFROAD 4X4 JEEP', subtitle: 'Jalur Ekstrem Hutan Pinus Batu', theme: 'adventure' },
  { path: 'public/images/packages/camping.webp', width: 600, height: 400, title: 'CAMPING GROUND', subtitle: 'Api Unggun & Suasana Pinus Dingin', theme: 'adventure' },
  // Gallery
  { path: 'public/images/gallery/gallery-1.webp', width: 800, height: 600, title: 'ICE BREAKING KORPORAT', subtitle: 'Dokumentasi Outbound Batu', theme: 'corporate' },
  { path: 'public/images/gallery/gallery-2.webp', width: 800, height: 600, title: 'SIMULASI JEMBATAN TALI', subtitle: 'Sinergi & Problem Solving', theme: 'corporate' },
  { path: 'public/images/gallery/gallery-3.webp', width: 800, height: 600, title: 'FAMILY FUN GAMES', subtitle: 'Keceriaan Anak & Keluarga', theme: 'family' },
  { path: 'public/images/gallery/gallery-4.webp', width: 800, height: 600, title: 'LDKS SISWA BERKEMAH', subtitle: 'Kedisiplinan di Alam Bebas', theme: 'school' },
  { path: 'public/images/gallery/gallery-5.webp', width: 800, height: 600, title: 'ARUNG JERAM SUNGAI BATU', subtitle: 'Aksi Jeram Deras Kaliwatu', theme: 'adventure' },
  { path: 'public/images/gallery/gallery-6.webp', width: 800, height: 600, title: 'KONVOI JEEP 4X4 OFFROAD', subtitle: 'Menembus Hutan Pinus Lereng Arjuno', theme: 'adventure' },
  // Blog
  { path: 'public/images/blog/panduan-lokasi-outbound.webp', width: 800, height: 500, title: 'PANDUAN LOKASI OUTBOUND', subtitle: 'Memilih Venue Terbaik Batu & Malang', theme: 'adventure' },
  { path: 'public/images/blog/kunci-sukses-komunikasi.webp', width: 800, height: 500, title: '5 KUNCI KOMUNIKASI TIM', subtitle: 'Membongkar Silo Lewat Simulasi Outdoor', theme: 'corporate' },
  { path: 'public/images/blog/tips-family-gathering.webp', width: 800, height: 500, title: 'TIPS GATHERING KELUARGA', subtitle: 'Acara Nyaman & Ramah Segala Usia', theme: 'family' },
  // Author
  { path: 'public/images/authors/author-default.webp', width: 250, height: 250, title: 'VO', subtitle: 'Tim Editorial', theme: 'author' }
];

function escapeXml(unsafe) {
  return unsafe.replace(/[<>&'"]/g, c => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
    }
  });
}

function generateSvg({ width, height, title, subtitle, theme }) {
  const safeTitle = escapeXml(title);
  const safeSubtitle = escapeXml(subtitle);
  let g1 = '#8F0B17', g2 = '#380004', accent = '#F59E0B';
  if (theme === 'hero') { g1 = '#B00E1C'; g2 = '#250104'; accent = '#FBBF24'; }
  if (theme === 'family') { g1 = '#9C0D19'; g2 = '#3D0509'; accent = '#F59E0B'; }
  if (theme === 'adventure') { g1 = '#7F0813'; g2 = '#1E0103'; accent = '#F59E0B'; }
  if (theme === 'author') { g1 = '#B00E1C'; g2 = '#5C060E'; accent = '#F59E0B'; }

  return `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bg" cx="50%" cy="35%" r="70%">
          <stop offset="0%" stop-color="${g1}" />
          <stop offset="100%" stop-color="${g2}" />
        </radialGradient>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="20" cy="20" r="1" fill="rgba(255,255,255,0.08)" />
        </pattern>
        <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="rgba(255,255,255,0.12)" />
          <stop offset="100%" stop-color="rgba(255,255,255,0.02)" />
        </linearGradient>
      </defs>

      <!-- Background -->
      <rect width="${width}" height="${height}" fill="url(#bg)" />
      <rect width="${width}" height="${height}" fill="url(#grid)" />

      <!-- Decorative Mountain silhouettes / Nature shapes -->
      <path d="M0 ${height} L${width * 0.25} ${height * 0.45} L${width * 0.55} ${height * 0.8} L${width * 0.8} ${height * 0.35} L${width} ${height} Z" fill="rgba(0,0,0,0.32)" />
      <path d="M0 ${height} L${width * 0.15} ${height * 0.65} L${width * 0.45} ${height * 0.4} L${width * 0.75} ${height * 0.7} L${width} ${height * 0.5} L${width} ${height} Z" fill="rgba(255,255,255,0.04)" />

      <!-- Pine tree silhouettes -->
      <g fill="rgba(0,0,0,0.45)">
        <polygon points="${width * 0.1},${height * 0.85} ${width * 0.12},${height * 0.65} ${width * 0.14},${height * 0.85}" />
        <polygon points="${width * 0.15},${height * 0.9} ${width * 0.18},${height * 0.6} ${width * 0.21},${height * 0.9}" />
        <polygon points="${width * 0.82},${height * 0.88} ${width * 0.85},${height * 0.58} ${width * 0.88},${height * 0.88}" />
        <polygon points="${width * 0.88},${height * 0.92} ${width * 0.91},${height * 0.68} ${width * 0.94},${height * 0.92}" />
      </g>

      <!-- Center Glow -->
      <circle cx="${width / 2}" cy="${height / 2}" r="${width * 0.25}" fill="${accent}" opacity="0.08" />

      <!-- Inner Glass Badge -->
      <rect x="${width * 0.08}" y="${height * 0.18}" width="${width * 0.84}" height="${height * 0.64}" rx="18" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.18)" stroke-width="1.5" />

      <!-- Tag line -->
      <rect x="${width / 2 - 90}" y="${height * 0.28}" width="180" height="26" rx="13" fill="${accent}" />
      <text x="${width / 2}" y="${height * 0.28 + 17}" font-family="sans-serif" font-weight="800" font-size="11" fill="#1C0204" text-anchor="middle" letter-spacing="2">BATU - MALANG</text>

      <!-- Title -->
      <text x="${width / 2}" y="${height * 0.48}" font-family="sans-serif" font-weight="900" font-size="${width > 600 ? 28 : 20}" fill="#FFFFFF" text-anchor="middle" letter-spacing="1.5">${safeTitle}</text>

      <!-- Subtitle -->
      <text x="${width / 2}" y="${height * 0.60}" font-family="sans-serif" font-weight="500" font-size="${width > 600 ? 15 : 12}" fill="rgba(255,240,242,0.85)" text-anchor="middle">${safeSubtitle}</text>

      <!-- Accent line -->
      <line x1="${width / 2 - 50}" y1="${height * 0.68}" x2="${width / 2 + 50}" y2="${height * 0.68}" stroke="${accent}" stroke-width="3" stroke-linecap="round" />
    </svg>
  `;
}

async function run() {
  console.log('Generating WebP images...');
  for (const asset of assets) {
    const dir = path.dirname(asset.path);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const svg = Buffer.from(generateSvg(asset));
    await sharp(svg)
      .webp({ quality: 85, effort: 6 })
      .toFile(asset.path);

    const stats = fs.statSync(asset.path);
    const kb = (stats.size / 1024).toFixed(1);
    console.log(`Generated: ${asset.path} (${kb} KB) - Target < 100KB: ${stats.size < 102400 ? 'PASS' : 'WARN'}`);
  }
  console.log('All images generated successfully!');
}

run().catch(console.error);
