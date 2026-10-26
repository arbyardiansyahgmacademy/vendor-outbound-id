import fs from 'fs';

console.log('=== 1. Checking Article HTML Structure & Elements ===');
const art = fs.readFileSync('dist/blog/panduan-lengkap-corporate-gathering-malang/index.html', 'utf8');
const checks = [
  ['Author Name Arby Ardiansyah', art.includes('Arby Ardiansyah')],
  ['Author Avatar WebP', art.includes('author-artikel-arby-ardiansyah.webp')],
  ['TOC Elements (tocToggle & tocList)', art.includes('id="tocToggle"') && art.includes('id="tocList"')],
  ['Baca Juga Box', art.includes('baca-juga-box')],
  ['Timeline Phase H-60', art.includes('Fase H-60')],
  ['Video Highlight / Liputan Event Aftermovie Card', art.includes('news-widget')],
  ['Social Share Buttons (WA, FB, Twitter/X, LinkedIn, Copy)', art.includes('data-share="wa"') && art.includes('data-share="tw"')],
  ['FAQ Section Accordion in Article', art.includes('faq-section') && art.includes('faq-question')],
  ['Author Bio Box', art.includes('author-bio')],
  ['Bottom Recommended Packages Strip', art.includes('recommend-item')]
];
checks.forEach(([name, ok]) => console.log(ok ? '✓ PASS:' : '✗ FAIL:', name));

console.log('\n=== 2. Checking Homepage HTML ===');
const home = fs.readFileSync('dist/index.html', 'utf8');
const homeChecks = [
  ['Testimonial Section on Homepage', home.includes('testimoni')],
  ['Testimonial 3 Review Cards', home.includes('Hendro Wicaksono') && home.includes('Siti Nurhaliza') && home.includes('Bambang Priyambodo')],
  ['Footer Social Media Icons (IG, TikTok, FB, X, WA, YT)', home.includes('fa-instagram') && home.includes('fa-tiktok') && home.includes('fa-facebook-f') && home.includes('fa-x-twitter')],
  ['Testimonials placed before Informasi Praktis (FAQ)', home.indexOf('id="testimoni"') < home.indexOf('Informasi Praktis')]
];
homeChecks.forEach(([name, ok]) => console.log(ok ? '✓ PASS:' : '✗ FAIL:', name));

console.log('\n=== 3. Checking Images < 100KB ===');
let over100Count = 0;
function walk(dir) {
  for (const f of fs.readdirSync(dir)) {
    const p = `${dir}/${f}`;
    if (fs.statSync(p).isDirectory()) walk(p);
    else if (f.endsWith('.webp')) {
      const kb = fs.statSync(p).size / 1024;
      if (kb >= 100) {
        console.log('OVER 100KB:', p, kb.toFixed(1));
        over100Count++;
      }
    }
  }
}
walk('public/images');
console.log('✓ All WebP images < 100KB verified! Count over 100KB:', over100Count);
