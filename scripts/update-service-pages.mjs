import fs from 'fs';
import path from 'path';

const SERVICES_CONFIG = [
  {
    slug: 'outbound-perusahaan',
    categorySlug: 'perusahaan',
    badge: 'Program Korporat & Institusi',
    pkgHeading: '4 PAKET RESMI OUTBOUND PERUSAHAAN',
    destHeading: 'DESTINASI RESMI UNTUK OUTBOUND PERUSAHAAN',
    destSlugs: ['coban-rondo', 'hotel-jambuluwuk-resort', 'coban-talun', 'coban-rais'],
    ctaMsg: 'Halo Provider Outbound, saya ingin konsultasi kebutuhan Outbound Perusahaan untuk tim kami.'
  },
  {
    slug: 'family-gathering',
    categorySlug: 'family-gathering',
    badge: 'Program Rekreasi & Komunitas',
    pkgHeading: '4 PAKET RESMI FAMILY GATHERING',
    destHeading: 'DESTINASI RESMI UNTUK FAMILY GATHERING',
    destSlugs: ['coban-rais', 'coban-rondo', 'payung-pinus', 'hotel-jambuluwuk-resort'],
    ctaMsg: 'Halo Provider Outbound, saya ingin konsultasi kebutuhan Family Gathering untuk keluarga besar kami.'
  },
  {
    slug: 'outbound-sekolah',
    categorySlug: 'sekolah',
    badge: 'Program Pembinaan Karakter & Siswa',
    pkgHeading: '4 PAKET RESMI OUTBOUND SEKOLAH',
    destHeading: 'DESTINASI RESMI UNTUK OUTBOUND SEKOLAH',
    destSlugs: ['coban-rondo', 'coban-talun', 'coban-rais', 'coban-putri'],
    ctaMsg: 'Halo Provider Outbound, saya ingin konsultasi kebutuhan Outbound Sekolah & LDKS untuk siswa kami.'
  },
  {
    slug: 'wisata-adventure',
    categorySlug: 'wisata-adventure',
    badge: 'Petualangan & Wisata Alam Terbuka',
    pkgHeading: '4 PAKET RESMI OUTBOUND WISATA',
    destHeading: 'DESTINASI RESMI UNTUK OUTBOUND WISATA',
    destSlugs: ['kaliwatu-rafting', 'coban-talun', 'coban-putri', 'gunung-bromo', 'air-terjun-tumpak-sewu'],
    ctaMsg: 'Halo Provider Outbound, saya ingin konsultasi paket Outbound Wisata, Rafting & Offroad Batu Malang.'
  }
];

function generatePageContent(cfg) {
  return `---
import PublicLayout from '../../layouts/PublicLayout.astro';
import CTASection from '../../components/sections/CTASection.astro';
import FAQAccordion from '../../components/sections/FAQAccordion.astro';
import { SERVICES, PACKAGES, DESTINATIONS } from '../../data/defaultContent';
import { generateServiceSchema } from '../../lib/seo';
import { getWhatsAppUrl } from '../../lib/utils';

const service = SERVICES.find(s => s.slug === '${cfg.slug}')!;
const relatedPackages = PACKAGES.filter(p => p.categorySlug === '${cfg.categorySlug}');
const recommendedDestinations = DESTINATIONS.filter(d => ${JSON.stringify(cfg.destSlugs)}.includes(d.slug));
const serviceSchema = generateServiceSchema(service);

const breadcrumbs = [
  { name: 'Layanan', url: '/layanan' },
  { name: service.title }
];

const waConsultUrl = getWhatsAppUrl(\`Halo Provider Outbound, saya ingin konsultasi detail layanan \${service.title} di Batu Malang.\`);
---

<PublicLayout
  title={\`\${service.title} Batu Malang | Provider Outbound\`}
  description={service.excerpt}
  breadcrumbs={breadcrumbs}
>
  <!-- Hero Section -->
  <section class="py-16 sm:py-24 relative overflow-hidden">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
      <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-widest">
        ${cfg.badge}
      </div>
      <h1 class="font-heading font-black text-3xl sm:text-5xl uppercase tracking-[0.14em] text-white">
        {service.title}
      </h1>
      <p class="text-base sm:text-lg text-rose-100/85 max-w-3xl mx-auto leading-relaxed">
        {service.excerpt}
      </p>
    </div>
  </section>

  <!-- Detailed Content Grid -->
  <section class="py-12 border-t border-rose-900/40">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
      
      <!-- Left Content -->
      <div class="lg:col-span-8 space-y-8 text-left">
        
        <!-- Main Media Cover -->
        <div class="rounded-2xl overflow-hidden aspect-16/10 bg-brand-950 border border-rose-700/40 shadow-card">
          <img
            src={service.imageUrl}
            alt={service.title}
            width="800"
            height="500"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Overview Box -->
        <div class="rounded-xl bg-[#450308]/60 border border-rose-700/35 p-6 sm:p-8 space-y-4">
          <h2 class="font-heading font-black text-2xl uppercase tracking-wider text-white">
            Gambaran Program
          </h2>
          <p class="text-sm sm:text-base text-rose-100/85 leading-relaxed">
            {service.overview}
          </p>
          <div class="p-4 rounded-lg bg-stone-950/40 border border-rose-800/30 text-xs text-amber-300 font-medium">
            📍 {service.locationNote}
          </div>
        </div>

        <!-- Benefits & Objectives -->
        <div class="rounded-xl bg-[#450308]/60 border border-rose-700/35 p-6 sm:p-8 space-y-4">
          <h2 class="font-heading font-black text-xl uppercase tracking-wider text-white">
            Tujuan &amp; Manfaat Program
          </h2>
          <ul class="space-y-3 text-sm text-rose-100/85">
            {service.benefits.map((b) => (
              <li class="flex items-start gap-3">
                <span class="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center text-xs flex-shrink-0 mt-0.5">✓</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <!-- Activities Flow -->
        <div class="rounded-xl bg-[#450308]/60 border border-rose-700/35 p-6 sm:p-8 space-y-4">
          <h2 class="font-heading font-black text-xl uppercase tracking-wider text-white">
            Rangkaian Aktivitas Simulasi
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-rose-200/90">
            {service.activities.map((act, idx) => (
              <div class="p-3 rounded-lg bg-[#380105]/70 border border-rose-800/30 flex items-center gap-3">
                <span class="w-6 h-6 rounded bg-brand-800 text-amber-400 font-heading font-bold text-xs flex items-center justify-center flex-shrink-0">
                  {idx + 1}
                </span>
                <span>{act}</span>
              </div>
            ))}
          </div>
        </div>

        <!-- 4 Sub-Packages Section -->
        <div class="rounded-xl bg-[#450308]/60 border border-rose-700/35 p-6 sm:p-8 space-y-6">
          <div class="border-b border-rose-800/40 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span class="text-[10px] font-bold uppercase tracking-widest text-amber-400">Pilihan Paket Program</span>
              <h2 class="font-heading font-black text-xl uppercase tracking-wider text-white mt-1">
                ${cfg.pkgHeading}
              </h2>
            </div>
            <a
              href="/paket/${cfg.categorySlug}"
              class="text-xs font-bold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1"
            >
              <span>Halaman Paket</span>
              <i class="fas fa-arrow-right text-[10px]"></i>
            </a>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedPackages.map((pkg, idx) => {
              const pkgWa = getWhatsAppUrl(\`Halo Provider Outbound, saya tertarik konsultasi paket \${pkg.title} (\${service.title}) di Batu Malang.\`);
              const letter = String.fromCharCode(97 + idx); // a, b, c, d
              return (
                <div class="p-4 rounded-xl bg-stone-950/50 border border-rose-800/35 flex flex-col justify-between space-y-3 hover:border-amber-400/50 transition-colors">
                  <div>
                    <div class="flex items-center justify-between mb-1">
                      <span class="px-2 py-0.5 rounded bg-amber-500/15 border border-amber-400/30 text-amber-300 text-[10px] font-bold uppercase">
                        Paket {letter}.
                      </span>
                      <span class="text-[10px] text-rose-300/80 font-mono">{pkg.duration}</span>
                    </div>
                    <h3 class="font-heading font-bold text-base text-white uppercase">{pkg.title}</h3>
                    <p class="text-xs text-rose-100/75 mt-1 leading-relaxed">{pkg.excerpt}</p>
                    
                    <ul class="mt-2.5 space-y-1 text-[11px] text-rose-200/80">
                      {pkg.activities.slice(0, 3).map((act) => (
                        <li class="flex items-center gap-1.5">
                          <span class="text-amber-400 font-bold">✓</span>
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={pkgWa}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="w-full text-center py-2 px-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-heading font-bold text-[11px] uppercase tracking-wider transition-all"
                  >
                    Konsultasi Paket Ini
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        <!-- Rekomendasi Destinasi Resmi -->
        <div class="rounded-xl bg-[#450308]/60 border border-rose-700/35 p-6 sm:p-8 space-y-6">
          <div class="border-b border-rose-800/40 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span class="text-[10px] font-bold uppercase tracking-widest text-amber-400">Venue Pilihan Provider Outbound</span>
              <h2 class="font-heading font-black text-xl uppercase tracking-wider text-white mt-1">
                ${cfg.destHeading}
              </h2>
            </div>
            <a
              href="/layanan#destinasi-resmi"
              class="text-xs font-bold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1"
            >
              <span>Semua 9 Destinasi</span>
              <i class="fas fa-arrow-right text-[10px]"></i>
            </a>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {recommendedDestinations.map((dest) => {
              const destWa = getWhatsAppUrl(\`Halo Provider Outbound, saya ingin konsultasi kegiatan \${service.title} di venue resmi \${dest.name} Batu Malang.\`);
              return (
                <div class="rounded-xl bg-stone-950/50 border border-rose-800/35 overflow-hidden flex flex-col justify-between group hover:border-amber-400/50 transition-colors">
                  <div>
                    <div class="aspect-16/10 w-full overflow-hidden bg-brand-950 relative">
                      <img src={dest.imageUrl} alt={dest.name} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                      <span class="absolute top-2 left-2 px-2 py-0.5 rounded bg-stone-900/85 text-[10px] font-bold text-amber-400 border border-amber-400/30">
                        {dest.name}
                      </span>
                      {dest.elevation && (
                        <span class="absolute top-2 right-2 px-2 py-0.5 rounded bg-emerald-950/85 text-[10px] font-bold text-emerald-300 border border-emerald-500/30">
                          {dest.elevation}
                        </span>
                      )}
                    </div>
                    <div class="p-3.5 space-y-2 text-left">
                      <p class="text-xs text-rose-100/80 line-clamp-2">{dest.overview}</p>
                      <div class="flex flex-wrap gap-1">
                        {dest.features.slice(0, 4).map((f) => (
                          <span class="text-[10px] px-2 py-0.5 rounded bg-rose-950/60 border border-rose-800/30 text-rose-200">
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div class="p-3.5 pt-0">
                    <a
                      href={destWa}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="block text-center py-1.5 px-3 rounded bg-brand-900 hover:bg-amber-500 hover:text-stone-950 text-amber-400 border border-amber-500/30 text-[10px] font-bold uppercase transition-all"
                    >
                      Pilih Venue {dest.name}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      <!-- Right Sidebar: Quick Inquiry & Related Packages -->
      <div class="lg:col-span-4 space-y-6">
        
        <!-- Consultation Box -->
        <div class="rounded-2xl bg-gradient-to-br from-[#66050E] to-[#3B0206] border-2 border-amber-500/40 p-6 space-y-5 shadow-2xl">
          <span class="text-[10px] font-bold uppercase tracking-widest text-amber-400">
            Konsultasi Langsung
          </span>
          <h3 class="font-heading font-black text-xl text-white uppercase tracking-wider">
            Rencanakan Agenda Tim Anda
          </h3>
          <p class="text-xs text-rose-100/80 leading-relaxed">
            Sampaikan jumlah peserta, estimasi tanggal kegiatan, dan preferensi venue (hutan pinus, aliran coban, sungai rafting, atau resort) kepada konsultan kami.
          </p>
          <a
            href={waConsultUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-md bg-amber-500 hover:bg-amber-400 text-stone-950 font-heading font-black text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all"
          >
            Konsultasi via WhatsApp
          </a>
        </div>

        <!-- Target Audience -->
        <div class="rounded-xl bg-[#450308]/60 border border-rose-700/35 p-6 space-y-3 text-left">
          <h4 class="font-heading font-bold text-sm text-amber-400 uppercase tracking-wider">
            Sasaran Peserta
          </h4>
          <p class="text-xs text-rose-100/80 leading-relaxed">
            {service.targetAudience}
          </p>
        </div>

        <!-- Related Packages Links -->
        <div class="rounded-xl bg-[#450308]/60 border border-rose-700/35 p-6 space-y-4 text-left">
          <h4 class="font-heading font-bold text-sm text-white uppercase tracking-wider">
            4 Pilihan Paket Terkait
          </h4>
          <div class="space-y-2.5">
            {relatedPackages.map((pkg, idx) => {
              const letter = String.fromCharCode(97 + idx);
              return (
                <a
                  href="/paket/${cfg.categorySlug}"
                  class="block p-3 rounded-lg bg-brand-950/60 border border-rose-800/30 hover:border-amber-400/50 transition-colors group"
                >
                  <div class="text-xs font-bold text-white uppercase group-hover:text-amber-400 transition-colors flex items-center justify-between">
                    <span>{letter}. {pkg.title}</span>
                    <i class="fas fa-chevron-right text-[10px] text-amber-400/70"></i>
                  </div>
                  <div class="text-[11px] text-rose-300/70 mt-0.5">
                    Durasi: {pkg.duration}
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        <!-- Official Destinations Quick Links -->
        <div class="rounded-xl bg-[#450308]/60 border border-rose-700/35 p-6 space-y-4 text-left">
          <h4 class="font-heading font-bold text-sm text-white uppercase tracking-wider">
            Venue Destinasi Resmi
          </h4>
          <div class="space-y-2 text-xs">
            {recommendedDestinations.map((dest) => (
              <div class="flex items-center justify-between py-1.5 border-b border-rose-800/30 text-rose-200">
                <span class="font-medium">• {dest.name}</span>
                <span class="text-[10px] text-amber-400 font-mono">{dest.elevation || 'Malang'}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  </section>

  <!-- FAQ Section -->
  <FAQAccordion title={\`FAQ SEPUTAR \${service.title.toUpperCase()}\`} />

  <!-- CTA Section -->
  <CTASection
    title={\`KONSULTASIKAN PROGRAM \${service.title.toUpperCase()} SEKARANG\`}
    customMessage="${cfg.ctaMsg}"
  />

  <!-- Structured Data -->
  <script type="application/ld+json" set:html={JSON.stringify(serviceSchema)} />
</PublicLayout>
`;
}

SERVICES_CONFIG.forEach(cfg => {
  const filePath = path.resolve(`src/pages/layanan/${cfg.slug}.astro`);
  fs.writeFileSync(filePath, generatePageContent(cfg), 'utf8');
  console.log(`✓ Updated src/pages/layanan/${cfg.slug}.astro`);
});

// Also create alias src/pages/layanan/outbound-wisata.astro
fs.writeFileSync(
  path.resolve('src/pages/layanan/outbound-wisata.astro'),
  fs.readFileSync(path.resolve('src/pages/layanan/wisata-adventure.astro'), 'utf8'),
  'utf8'
);
console.log('✓ Created src/pages/layanan/outbound-wisata.astro');

