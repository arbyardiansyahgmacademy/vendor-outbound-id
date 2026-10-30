import fs from 'fs';
import path from 'path';

const PKG_PAGES = [
  {
    file: 'src/pages/paket/perusahaan.astro',
    categoryName: 'Perusahaan & Korporat',
    categorySlug: 'perusahaan',
    categoryNumber: '01',
    destTitle: 'DESTINASI RESMI OUTBOUND PERUSAHAAN',
    destSub: 'Venue terpilih dengan kapasitas lapangan ratusan peserta, aula convention, dan fasilitas terlengkap di Batu Malang.',
    destSlugs: ['coban-rondo', 'hotel-jambuluwuk-resort', 'coban-talun', 'coban-rais'],
    heroDesc: 'Dirancang khusus untuk menguatkan kerja sama tim, efektivitas komunikasi kerja, dan kepemimpinan adaptif di tengah lingkungan pegunungan Batu - Malang.',
    ctaMsg: 'Halo Provider Outbound, saya ingin konsultasi paket outbound perusahaan di Batu Malang.'
  },
  {
    file: 'src/pages/paket/family-gathering.astro',
    categoryName: 'Family Gathering',
    categorySlug: 'family-gathering',
    categoryNumber: '02',
    destTitle: 'DESTINASI RESMI FAMILY GATHERING',
    destSub: 'Venue ramah segala usia, lanskap hijau asri, parkir bis luas, dan panorama pegunungan memukau di Kota Batu.',
    destSlugs: ['coban-rais', 'coban-rondo', 'payung-pinus', 'hotel-jambuluwuk-resort'],
    heroDesc: 'Pilihan paket gathering ceria, hangat, dan ramah segala usia untuk keluarga besar karyawan perusahaan, perkumpulan alumni, atau komunitas.',
    ctaMsg: 'Halo Provider Outbound, saya ingin konsultasi paket family gathering di Batu Malang.'
  },
  {
    file: 'src/pages/paket/sekolah.astro',
    categoryName: 'Sekolah & Pelajar',
    categorySlug: 'sekolah',
    categoryNumber: '03',
    destTitle: 'DESTINASI RESMI OUTBOUND SEKOLAH & LDKS',
    destSub: 'Bumi perkemahan aman, rute jelajah edukasi alam, dan fasilitas sanitasi bersih di kawasan Batu Malang.',
    destSlugs: ['coban-rondo', 'coban-talun', 'coban-rais', 'coban-putri'],
    heroDesc: 'Program pembentukan karakter disiplin, kepemimpinan siswa (LDKS), dan edukasi kelestarian lingkungan alam di bumi perkemahan sejuk Kota Batu.',
    ctaMsg: 'Halo Provider Outbound, saya ingin konsultasi paket outbound sekolah di Batu Malang.'
  }
];

function buildContent(cfg) {
  return `---
import PublicLayout from '../../layouts/PublicLayout.astro';
import FAQAccordion from '../../components/sections/FAQAccordion.astro';
import CTASection from '../../components/sections/CTASection.astro';
import DestinationsSection from '../../components/sections/DestinationsSection.astro';
import { PACKAGES } from '../../data/defaultContent';
import { getWhatsAppUrl } from '../../lib/utils';

const categorySlug = '${cfg.categorySlug}';
const categoryName = '${cfg.categoryName}';
const packages = PACKAGES.filter((p) => p.categorySlug === categorySlug);

const breadcrumbs = [
  { name: 'Paket', url: '/paket' },
  { name: categoryName }
];
---

<PublicLayout
  title={\`Paket Outbound \${categoryName} Batu Malang | Provider Outbound\`}
  description="Pilihan paket outbound \${categoryName.toLowerCase()} lengkap di Batu & Malang."
  breadcrumbs={breadcrumbs}
>
  <section class="py-16 sm:py-24 relative overflow-hidden">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
      <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-widest">
        Kategori Paket ${cfg.categoryNumber}
      </div>
      <h1 class="font-heading font-black text-3xl sm:text-5xl uppercase tracking-[0.14em] text-white">
        PAKET OUTBOUND \${categoryName.toUpperCase()}
      </h1>
      <p class="text-base sm:text-lg text-rose-100/85 max-w-3xl mx-auto leading-relaxed">
        ${cfg.heroDesc}
      </p>
    </div>
  </section>

  <section class="py-12 border-t border-rose-900/40">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div id="category-pkg-grid" data-category-slug={categorySlug} class="grid grid-cols-1 md:grid-cols-2 gap-8">
        {packages.map((pkg, idx) => {
          const waUrl = getWhatsAppUrl(\`Halo Provider Outbound, saya ingin konsultasi paket \${pkg.title} (\${categoryName}).\`);
          const letter = String.fromCharCode(97 + idx); // a, b, c, d

          return (
            <div class="rounded-2xl bg-[#480308]/60 border border-rose-700/35 overflow-hidden flex flex-col justify-between hover:border-amber-400/50 transition-all duration-300 shadow-card group">
              <div>
                <div class="aspect-16/9 w-full overflow-hidden bg-brand-950 relative">
                  <img
                    src={pkg.imageUrl}
                    alt={pkg.title}
                    width="600"
                    height="338"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span class="absolute top-3 left-3 px-3 py-1 rounded bg-stone-900/85 text-xs font-bold text-amber-400 border border-amber-400/30 uppercase">
                    Paket {letter}.
                  </span>
                </div>

                <div class="p-6 space-y-4 text-left">
                  <div class="flex items-center justify-between gap-2 border-b border-rose-900/40 pb-3">
                    <h2 class="font-heading font-black text-xl uppercase tracking-wider text-white group-hover:text-amber-400 transition-colors">
                      {pkg.title}
                    </h2>
                    <span class="text-xs text-rose-300 font-mono bg-stone-900/50 px-2.5 py-1 rounded border border-rose-800/30">
                      {pkg.duration}
                    </span>
                  </div>

                  <p class="text-xs sm:text-sm text-rose-100/80 leading-relaxed">
                    {pkg.excerpt}
                  </p>

                  <div class="space-y-2">
                    <span class="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                      Aktivitas Utama:
                    </span>
                    <ul class="space-y-1 text-xs text-rose-200/80">
                      {pkg.activities.map((act) => (
                        <li class="flex items-center gap-2">
                          <span class="text-amber-400">✓</span>
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div class="space-y-2 pt-2 border-t border-rose-900/40">
                    <span class="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                      Fasilitas Termasuk:
                    </span>
                    <ul class="space-y-1 text-xs text-rose-200/80">
                      {pkg.features.map((feat) => (
                        <li class="flex items-center gap-2">
                          <span class="text-amber-400">•</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div class="p-6 pt-0">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-full inline-flex items-center justify-center gap-2 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-heading font-black text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all"
                >
                  <i class="fab fa-whatsapp text-sm"></i>
                  <span>Konsultasi Paket Ini</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>

  <!-- Recommended Official Destinations -->
  <DestinationsSection
    title="${cfg.destTitle}"
    subtitle="${cfg.destSub}"
    filterSlug={${JSON.stringify(cfg.destSlugs)}}
  />

  <FAQAccordion title={\`FAQ SEPUTAR PAKET \${categoryName.toUpperCase()}\`} />

  <CTASection
    title={\`KONSULTASIKAN ACARA \${categoryName.toUpperCase()} BATU MALANG\`}
    customMessage="${cfg.ctaMsg}"
  />
</PublicLayout>
`;
}

PKG_PAGES.forEach(cfg => {
  const filePath = path.resolve(cfg.file);
  fs.writeFileSync(filePath, buildContent(cfg), 'utf8');
  console.log(`✓ Updated ${cfg.file}`);
});

