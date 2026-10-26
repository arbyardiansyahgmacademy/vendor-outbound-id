# Vendor Outbound — `vendoroutbound.id`

Website pemasaran outbound, gathering, team building, dan petualangan di area **Batu & Malang, Jawa Timur** lengkap dengan **CMS Admin Dashboard**, sistem desain terinspirasi crimson/ruby modern dengan aksen golden amber, integrasi **Supabase** (dengan migrasi SQL & RLS lengkap), dan optimasi teknis **SEO/AEO/GEO**.

---

## 🚀 Ringkasan Teknologi

- **Framework:** [Astro 5](https://astro.build/) (Static Site Generation & Islands Architecture)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) dengan custom tokens ruby/crimson, glassmorphism, dan aksen golden amber sesuai referensi visual.
- **Bahasa:** TypeScript & Bahasa Indonesia (`id-ID`)
- **Basis Data & Autentikasi:** [Supabase](https://supabase.com/) (PostgreSQL dengan RLS, Auth, dan Storage policies)
- **Optimasi Gambar:** Format WebP teroptimasi (< 100 KB per file)
- **Structured Data:** JSON-LD dinamis (`WebSite`, `BreadcrumbList`, `Service`, `Article`, `FAQPage`)

---

## 📁 Struktur Navigasi & Clean URLs

Semua rute publik menggunakan clean URL tanpa ekstensi `.html`:

| Halaman Publik | Clean URL | Deskripsi |
|---|---|---|
| Beranda | `/` | Hero crimson, Our Menu highlight, Kategori split, Product grid, Testimoni, FAQ, CTA |
| Tentang Kami | `/tentang-kami` | Profil brand, keunggulan, pendekatan kerja, FAQ |
| Layanan (Index) | `/layanan` | 4 kartu layanan utama |
| Detail Outbound Perusahaan | `/layanan/outbound-perusahaan` | Team building, benefits, aktivitas, CTA WhatsApp |
| Detail Family Gathering | `/layanan/family-gathering` | Gathering keluarga ramah anak & lansia |
| Detail Outbound Sekolah | `/layanan/outbound-sekolah` | Character building, LDKS, edukasi alam |
| Detail Wisata & Adventure | `/layanan/wisata-adventure` | Rafting Kaliwatu/Kasembon, jeep 4x4, camping |
| Paket (Index) | `/paket` | 16 paket dalam 4 kategori |
| Paket Perusahaan | `/paket/perusahaan` | Team Building, Fun Games, Leadership Camp, Corporate Gathering |
| Paket Family Gathering | `/paket/family-gathering` | Paket Hemat, Standard, Premium, Custom |
| Paket Sekolah | `/paket/sekolah` | Outbound Pelajar, Character Building, LDKS Leadership, Edukasi Alam |
| Paket Wisata & Adventure | `/paket/wisata-adventure` | Outbound Wisata, Rafting, Offroad 4x4, Camping |
| Galeri | `/galeri` | Grid interaktif + Lightbox modal dengan navigasi keyboard |
| Blog (Index) | `/blog` | Artikel dan panduan kegiatan outbound |
| Detail Artikel | `/blog/[slug]` | Answer-first box, TOC otomatis, share buttons, author bio, JSON-LD |
| Kontak | `/kontak` | Form leads konsultasi + WhatsApp + Honeypot anti-spam |
| Kebijakan Privasi | `/kebijakan-privasi` | Kebijakan perlindungan data |
| Syarat & Ketentuan | `/syarat-ketentuan` | Ketentuan layanan dan keselamatan |
| Halaman 404 | `/404` | Halaman error kustom dengan navigasi kembali |

---

## 🛠️ Panel CMS / Admin Dashboard

Akses admin portal berada pada URL:
- **Login Admin:** `/admin/login` (email: `admin@vendoroutbound.id`, password: `admin123`)
- **Dashboard Ringkasan:** `/admin` (Statistik real-time, akses cepat, leads terkini)
- **Editor Konten Halaman:** `/admin/halaman` (Edit Hero, Tentang Kami, CTA tanpa buka VS Code)
- **Kelola Layanan:** `/admin/layanan` (CRUD 4 layanan utama)
- **Kelola Paket:** `/admin/paket` (CRUD 16 paket outbound & durasi)
- **Galeri Foto:** `/admin/galeri` (Upload foto dengan validasi format WebP dan target ukuran < 100 KB)
- **Artikel Blog:** `/admin/blog` (CRUD artikel, TOC otomatis, answer-first, status Draft/Published)
- **Kelola FAQ:** `/admin/faq` (CRUD pertanyaan dan jawaban resmi)
- **Testimoni:** `/admin/testimoni` (CRUD ulasan klien dengan konfirmasi izin publikasi)
- **Leads Masuk:** `/admin/leads` (Penyaringan status, catatan internal, dan tombol direct chat WhatsApp)
- **Pengaturan Global:** `/admin/pengaturan` (Pengaturan nomor WhatsApp resmi, jam operasional, area layanan)

---

## 🗄️ Konfigurasi Supabase

Skrip migrasi dan seed data tersedia lengkap di direktori `supabase/`:
1. `supabase/migrations/20261025_init_vendor_outbound.sql`:
   - 13 tabel: `site_settings`, `pages`, `services`, `package_categories`, `packages`, `gallery_items`, `authors`, `blog_categories`, `blog_posts`, `faq_items`, `testimonials`, `leads`, `redirects`.
   - Kebijakan Row Level Security (RLS) aktif di seluruh tabel (Publik hanya bisa membaca published content dan INSERT lead; Admin authenticated memiliki akses CRUD penuh).
2. `supabase/seed.sql`: Data default awal faktual Batu - Malang dan nomor resmi `+62 822-1122-1909`.

### Langkah Menghubungkan Supabase:
1. Buka dashboard proyek Supabase Anda.
2. Buka menu **SQL Editor**, salin dan jalankan isi file `supabase/migrations/20261025_init_vendor_outbound.sql`.
3. Jalankan isi file `supabase/seed.sql` untuk mengisi data awal.
4. Buat file `.env` dari `.env.example`:
   ```bash
   PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
   ```

---

## 💻 Menjalankan Proyek Secara Lokal

1. **Instal dependensi:**
   ```bash
   npm install
   ```

2. **Jalankan development server:**
   ```bash
   npm run dev
   ```
   Buka peramban di `http://localhost:4321`.

3. **Build untuk produksi:**
   ```bash
   npm run build
   ```

4. **Pratinjau hasil build:**
   ```bash
   npm run preview
   ```

---

## 🔒 Catatan Kepatuhan PRD (Data Bisnis Nyata)

Sesuai aturan PRD Section 1.5 & Section 16:
- **Brand:** Vendor Outbound
- **Nomor WhatsApp Resmi:** `+62 822-1122-1909` (default di seluruh CTA dan floating action)
- **Wilayah Layanan:** Batu dan Malang, Jawa Timur
- **Harga Paket:** Ditampilkan sebagai label konsultasi ("Konsultasikan kebutuhan paket") karena belum ditetapkan sepihak.
- **Testimoni:** Bagian testimoni di frontend hanya menampilkan ulasan yang telah dikonfirmasi izinnya oleh klien, tanpa membuat klaim rekaan.
