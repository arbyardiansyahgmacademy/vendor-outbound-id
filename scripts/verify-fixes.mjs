g, belumimport fs from 'node:fs';

const galeriHtml = fs.readFileSync('dist/galeri/index.html', 'utf-8');
const blogHtml = fs.readFileSync('dist/blog/index.html', 'utf-8');
const detailHtml = fs.readFileSync('dist/blog/panduan-lengkap-corporate-gathering-malang/index.html', 'utf-8');
const articleCss = fs.readFileSync('src/styles/article.css', 'utf-8');

console.log('1. GALERI:');
console.log(' - Contains aspect-[3/2]:', galeriHtml.includes('aspect-[3/2]'));
console.log(' - Contains aspect-ratio: 3 / 2:', galeriHtml.includes('aspect-ratio: 3 / 2;'));
console.log(' - Contains object-cover object-center:', galeriHtml.includes('object-cover object-center'));

console.log('\n2. BLOG INDEX:');
const blogArticles = blogHtml.match(/<article class="rounded-2xl/g);
console.log(' - Total Blog Article Cards:', blogArticles ? blogArticles.length : 0);
console.log(' - Contains h-52 sm:h-56 wrapper:', blogHtml.includes('h-52 sm:h-56'));
console.log(' - Contains object-center:', blogHtml.includes('object-center'));

console.log('\n3. BLOG DETAIL & SIDEBAR:');
console.log(' - Article page background is dark radial crimson:', articleCss.includes('radial-gradient(ellipse at 50% 10%'));
console.log(' - Article main card is dark crimson glass:', articleCss.includes('.article-main {\n  background: rgba(72, 3, 8, 0.75)'));
console.log(' - Sidebar has position: sticky:', articleCss.includes('position: sticky;'));
console.log(' - Sidebar has top: 96px:', articleCss.includes('top: 96px;'));
console.log(' - Sidebar max-height & overflow-y:', articleCss.includes('max-height: calc(100vh - 110px);'));
console.log(' - REKOMENDASI PROGRAM in HTML is dark (#250205):', detailHtml.includes('background: #250205'));
console.log(' - Recommend item in CSS is dark crimson glass:', articleCss.includes('.recommend-item {\n  background: rgba(72, 3, 8, 0.75)'));

