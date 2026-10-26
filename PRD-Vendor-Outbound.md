# PRODUCT REQUIREMENTS DOCUMENT (PRD)
# Vendor Outbound — `vendoroutbound.id`

**Versi:** 1.0  
**Tanggal:** 25 Oktober 2026  
**Status:** Dokumen kebutuhan produk untuk implementasi  
**Bahasa antarmuka:** Bahasa Indonesia (`id-ID`)  
**Wilayah layanan utama:** Batu dan Malang, Jawa Timur  
**Stack utama:** Astro, Tailwind CSS, Supabase  
**Tujuan utama:** Website pemasaran outbound dengan CMS/admin dashboard yang memungkinkan pengelola mengubah konten frontend tanpa mengedit source code.

---

## 1. Ringkasan Proyek

Vendor Outbound adalah website penyedia program outbound, gathering, team building, kegiatan sekolah, family gathering, dan wisata petualangan untuk pasar Batu–Malang. Website harus berfungsi sebagai kanal informasi, katalog layanan/paket, galeri dokumentasi, pusat artikel, serta sarana memperoleh calon pelanggan melalui formulir dan WhatsApp.

Website dibuat menggunakan **Astro** untuk struktur halaman dan rendering yang ringan, **Tailwind CSS** untuk styling, serta **Supabase** untuk database, autentikasi admin, penyimpanan metadata konten, dan penyimpanan gambar bila diperlukan. Dashboard admin harus memungkinkan pengelola mengubah hampir seluruh konten yang tampil di frontend melalui antarmuka visual, tanpa membuka VS Code, Antigravity, atau mengedit file kode.

### Prinsip utama
1. **Desain mengikuti gambar referensi yang diberikan pengguna.** Referensi visual adalah acuan utama untuk warna, tipografi, komposisi, proporsi, gaya card, bentuk tombol, jarak, treatment gambar, navbar, dan footer. Jangan mengganti arah desain dengan template generik.
2. **Konten dapat dikelola melalui dashboard.** Konten halaman, artikel, FAQ, CTA, navbar, footer, kontak, dan media harus bersumber dari database/CMS, bukan hard-coded jika kontennya memang perlu dapat diubah admin.
3. **SEO teknis dan konten sejak awal.** Terapkan SEO, AEO (Answer Engine Optimization), dan GEO (Generative Engine Optimization) secara faktual, terstruktur, serta sesuai praktik mesin pencari yang berlaku saat implementasi.
4. **Mobile-first dan aksesibel.** Navigasi, galeri, formulir, artikel, dashboard, dan tombol mengambang harus nyaman digunakan pada ponsel, tablet, dan desktop.
5. **Tidak mengarang bukti bisnis.** Jangan membuat klaim jumlah klien, rating, sertifikasi, penghargaan, pengalaman bertahun-tahun, daftar venue rekanan, testimoni, harga, alamat kantor, atau statistik yang belum disediakan pemilik.

---

## 2. Tujuan dan Indikator Keberhasilan

### 2.1 Tujuan bisnis
- Memperjelas layanan Vendor Outbound di Batu dan Malang.
- Membantu calon pelanggan memahami pilihan layanan dan paket.
- Menghasilkan leads berkualitas melalui formulir konsultasi dan WhatsApp.
- Menumbuhkan visibilitas pencarian organik melalui halaman layanan, paket, galeri, dan artikel informatif.
- Memudahkan tim internal memperbarui informasi tanpa ketergantungan pada developer untuk perubahan konten rutin.

### 2.2 Tujuan pengguna
- Menemukan layanan yang cocok untuk perusahaan, keluarga, sekolah, atau wisata.
- Membandingkan jenis program dan komponen paket.
- Melihat dokumentasi kegiatan dengan preview galeri yang nyaman.
- Membaca artikel panduan dengan struktur yang jelas.
- Mengirim permintaan konsultasi dengan data yang cukup.
- Menemukan kontak resmi dan menghubungi admin dengan cepat.

### 2.3 Indikator keberhasilan
- Semua halaman publik dapat dibuka melalui URL clean dan responsif.
- Seluruh konten yang ditandai dapat dikelola admin dapat diedit dari dashboard.
- Formulir kontak berhasil divalidasi dan disimpan ke Supabase.
- Tombol WhatsApp menggunakan nomor resmi yang ditetapkan.
- Galeri mempunyai modal/lightbox yang berfungsi dengan keyboard dan layar sentuh.
- Artikel mempunyai metadata SEO, canonical, Open Graph, Twitter Card, breadcrumb, dan JSON-LD yang sesuai isi artikel.
- Tidak ada tautan internal rusak, placeholder yang tampil di produksi, atau konten contoh yang diklaim sebagai fakta.
- Target performa: Lighthouse/PageSpeed mobile dan desktop **diupayakan ≥90** untuk Performance, Accessibility, Best Practices, dan SEO; hasil aktual bergantung pada hosting, gambar, skrip pihak ketiga, serta konten yang dipublikasikan.

---

## 3. Target Pengguna

1. **Perusahaan/HR/GA/People & Culture:** mencari team building, leadership camp, fun games, corporate gathering, atau kegiatan pengembangan tim.
2. **Keluarga dan komunitas:** mencari family gathering dan program kebersamaan dengan format yang dapat disesuaikan.
3. **Sekolah dan lembaga pendidikan:** mencari outbound pelajar, character building, LDKS, dan edukasi alam.
4. **Wisatawan/komunitas petualangan:** mencari outbound wisata, rafting, offroad 4x4, atau camping.
5. **Admin/pengelola website:** memperbarui konten, artikel, foto, FAQ, informasi kontak, serta leads dari satu dashboard.

---

## 4. Teknologi dan Arsitektur

### 4.1 Teknologi wajib
- **Astro:** framework utama, routing halaman, layout, komponen, dan rendering.
- **Tailwind CSS:** utility-first styling. Hindari menambah framework CSS besar lain tanpa alasan yang jelas.
- **Supabase:** PostgreSQL database, Auth untuk admin, Storage untuk media, serta Row Level Security (RLS).
- **TypeScript:** dianjurkan untuk tipe data, validasi, dan mengurangi kesalahan.
- **Astro Content Collections atau integrasi konten database:** pilih pendekatan yang konsisten. Karena konten harus dapat diedit admin dan langsung muncul pada frontend, data utama artikel/halaman yang dikelola admin harus berasal dari Supabase atau sistem CMS yang terhubung ke Supabase.
- **Deployment:** platform yang mendukung Astro dan mode rendering yang dipilih; dokumentasikan konfigurasi environment dan proses deploy.

### 4.2 Prinsip rendering
- Gunakan **static rendering/SSG** untuk konten publik yang tidak membutuhkan data real-time, jika arsitektur memungkinkan.
- Untuk konten dari Supabase yang harus segera berubah setelah disimpan, tentukan strategi yang konsisten: SSR, revalidation/rebuild melalui webhook, atau fetch runtime pada area yang sesuai. Jangan mengasumsikan perubahan database otomatis memperbarui hasil build statis.
- Dashboard admin dan halaman yang membutuhkan autentikasi harus dilindungi di server/middleware, bukan hanya disembunyikan melalui UI.
- Semua halaman publik harus tetap mempunyai judul, deskripsi, canonical, struktur heading, dan konten utama yang layak dirender ketika JavaScript tidak aktif sejauh memungkinkan.

### 4.3 Variabel lingkungan
Sediakan `.env.example` tanpa nilai rahasia, minimal:
- `PUBLIC_SUPABASE_URL`
- `PUBLIC_SUPABASE_ANON_KEY` (atau publishable key sesuai konfigurasi Supabase terbaru)
- `SUPABASE_SERVICE_ROLE_KEY` hanya di lingkungan server, bila benar-benar dibutuhkan.

**Dilarang:** mengekspos service-role key di kode browser, repository publik, atau variabel berawalan `PUBLIC_`. Jangan menyimpan kata sandi admin di source code.

### 4.4 Struktur direktori yang disarankan
Struktur final boleh disesuaikan, tetapi pemisahan tanggung jawab harus jelas.

```text
vendoroutbound/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── images/                 # hanya aset statis yang memang tidak dikelola CMS
├── src/
│   ├── components/
│   │   ├── layout/             # Navbar, Footer, Breadcrumb, FloatingActions
│   │   ├── sections/           # Hero, FAQ, CTA, card, testimonial
│   │   ├── gallery/            # GalleryGrid, Lightbox
│   │   ├── blog/               # ArticleCard, ArticleMeta, TOC, RelatedArticles
│   │   └── admin/              # form, editor, upload, tabel dashboard
│   ├── layouts/
│   │   ├── PublicLayout.astro
│   │   ├── ArticleLayout.astro
│   │   └── AdminLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── tentang-kami.astro
│   │   ├── layanan/
│   │   ├── paket/
│   │   ├── galeri.astro
│   │   ├── blog/
│   │   ├── kontak.astro
│   │   ├── kebijakan-privasi.astro
│   │   ├── syarat-ketentuan.astro
│   │   └── admin/
│   ├── lib/                    # supabase client, validasi, SEO helpers
│   ├── data/                   # data default/seed yang aman
│   ├── styles/
│   └── middleware.ts           # proteksi rute admin jika diperlukan
├── supabase/
│   ├── migrations/
│   └── seed.sql
├── .env.example
├── astro.config.mjs
├── package.json
└── README.md
```

---

## 5. Acuan Desain dan UI/UX

### 5.1 Referensi visual wajib
Gunakan gambar referensi yang diunggah pengguna sebagai sumber visual utama. Sebelum membangun halaman:
1. Periksa gambar referensi yang tersedia di workspace.
2. Identifikasi palet warna, font/karakter tipografi, skala heading, lebar kontainer, bentuk tombol, radius, shadow, gaya navbar, gaya card, overlay gambar, jarak antarbagian, serta tampilan mobile jika referensi menyediakannya.
3. Terapkan sistem desain yang konsisten di seluruh halaman.
4. Jangan menyalin identitas merek atau konten milik website lain yang tidak menjadi milik Vendor Outbound; gunakan referensi untuk arah visual.
5. Jika gambar referensi tidak tersedia bagi agen, jangan mengklaim telah melihatnya. Minta pengguna menyediakan ulang atau lanjutkan hanya dengan struktur netral sementara, tanpa mengunci keputusan visual yang belum diketahui.

### 5.2 Sistem desain
- Buat design tokens melalui CSS variables atau konfigurasi Tailwind untuk warna, tipografi, radius, shadow, spacing, dan container.
- Seluruh komponen menggunakan token yang sama, sehingga perubahan warna/brand mudah dilakukan.
- Hindari efek dekoratif berlebihan, gradient acak, emoji sebagai ikon utama, animasi yang mengganggu, dan pola desain generik yang tidak sesuai referensi.
- Gunakan ikon SVG yang konsisten; jangan memakai karakter emoji sebagai pengganti ikon UI.
- Gunakan animasi singkat dan halus hanya jika membantu feedback atau orientasi pengguna.
- Pastikan kontras teks memenuhi WCAG AA sejauh memungkinkan.
- Semua tombol, link, input, dropdown, modal, dan elemen interaktif mempunyai hover, focus-visible, active, disabled, serta error state yang jelas.

### 5.3 Responsivitas
- Mobile-first; uji minimal lebar 360 px, 390 px, 768 px, 1024 px, dan 1440 px.
- Tidak boleh ada horizontal overflow yang tidak disengaja.
- Navbar berubah menjadi menu mobile yang mudah dioperasikan.
- Card menyesuaikan jumlah kolom sesuai ruang.
- Lightbox galeri memiliki tombol close yang mudah dijangkau.
- Dashboard mempunyai navigasi yang usable di layar kecil, tabel dapat diubah menjadi daftar/card atau memiliki overflow terkontrol.

---

## 6. Sitemap dan Routing Clean URL

Semua URL publik menggunakan **clean URL tanpa `.html`**. Gunakan lowercase, kebab-case, konsisten, dan hindari slug berubah setelah halaman diindeks.

| Halaman | URL |
|---|---|
| Beranda | `/` |
| Tentang Kami | `/tentang-kami` |
| Layanan | `/layanan` |
| Detail layanan perusahaan | `/layanan/outbound-perusahaan` |
| Detail layanan family gathering | `/layanan/family-gathering` |
| Detail layanan sekolah | `/layanan/outbound-sekolah` |
| Detail layanan wisata | `/layanan/wisata-adventure` |
| Paket | `/paket` |
| Paket kategori perusahaan | `/paket/perusahaan` |
| Paket kategori family gathering | `/paket/family-gathering` |
| Paket kategori sekolah | `/paket/sekolah` |
| Paket kategori wisata | `/paket/wisata-adventure` |
| Galeri | `/galeri` |
| Blog index | `/blog` |
| Artikel | `/blog/[slug]` |
| Kontak | `/kontak` |
| Kebijakan Privasi | `/kebijakan-privasi` |
| Syarat & Ketentuan | `/syarat-ketentuan` |
| Login admin | `/admin/login` |
| Dashboard admin | `/admin` |
| Pengaturan situs | `/admin/pengaturan` |

### Aturan routing
- Semua tautan internal menggunakan path clean di atas.
- Terapkan redirect 301 bila slug lama diganti.
- Slug harus unik dan divalidasi sebelum publikasi.
- Halaman tidak ditemukan menampilkan 404 branded dengan navigasi kembali.
- Halaman admin tidak boleh masuk sitemap publik dan harus memakai `noindex, nofollow`.
- Breadcrumb tampil **di bawah navbar pada semua halaman publik**, termasuk halaman detail layanan, kategori paket, dan artikel.

---

## 7. Struktur Global Seluruh Halaman Publik

### 7.1 Navbar
Item utama:
- Beranda
- Tentang Kami
- Layanan
- Paket (dropdown)
- Galeri
- Blog
- Kontak

Ketentuan:
- Logo dan nama Vendor Outbound dapat diatur admin.
- Navbar memiliki active state sesuai rute.
- Dropdown Paket memuat kategori Perusahaan, Family Gathering, Sekolah, dan Wisata & Adventure.
- Dropdown bisa dioperasikan menggunakan keyboard, mouse, dan sentuhan.
- Tombol CTA navbar mengarah ke WhatsApp resmi atau halaman kontak.
- Mobile menu memiliki tombol buka/tutup dengan `aria-expanded` dan label aksesibel.
- Semua label, urutan menu, URL, dan CTA navbar dapat diatur melalui dashboard.

### 7.2 Breadcrumb
- Posisi tepat di bawah navbar.
- Mengikuti hierarki URL, contoh: `Beranda / Blog / Judul Artikel`.
- Item selain halaman aktif berupa link.
- Halaman aktif tidak perlu menjadi link.
- Gunakan `aria-label="Breadcrumb"` dan struktur semantik.
- Breadcrumb visual harus mengikuti referensi desain.
- JSON-LD `BreadcrumbList` dibuat sesuai hierarki halaman, bukan disalin mentah dari artikel contoh.

### 7.3 Footer
Footer memuat:
- Logo dan ringkasan singkat brand.
- Link navigasi utama.
- Link layanan dan kategori paket.
- Kontak resmi, area layanan, email bila telah dikonfirmasi, dan sosial media bila tersedia.
- Link Kebijakan Privasi dan Syarat & Ketentuan.
- Copyright dengan tahun dinamis.
- Semua isi, urutan kolom, tautan, logo, alamat, sosial media, dan teks footer dapat diedit admin.
- Jangan tampilkan alamat kantor atau email rekaan. Bila belum diberikan, sediakan field kosong di dashboard dan sembunyikan item kosong dari frontend.

### 7.4 Floating actions
Pada semua halaman publik:
- **Floating WhatsApp** berada di pojok kanan bawah.
- **Back to Top** berada tepat di atas tombol WhatsApp, dengan jarak yang aman dan tidak saling menutupi.
- Back to Top muncul setelah pengguna scroll melewati ambang yang wajar, lalu melakukan scroll halus ke atas.
- Floating WhatsApp membuka `https://wa.me/6282211221909` dengan pesan awal yang relevan dengan halaman saat ini.
- Gunakan `target="_blank"` dan `rel="noopener noreferrer"` jika membuka tab baru.
- Sediakan label aksesibel, focus state, dan ukuran sentuh yang memadai.
- Nomor dapat diedit admin, tetapi default resmi adalah **+62 822-1122-1909**.
- Pastikan floating buttons tidak menutupi tombol submit, cookie notice, konten artikel, atau navigasi mobile.

### 7.5 Pola FAQ, CTA, dan section
- FAQ menggunakan accordion yang dapat dioperasikan keyboard, dengan `button`, `aria-expanded`, dan hubungan ke panel jawaban.
- CTA memiliki heading, teks penjelas, dan tombol konsultasi.
- Konten FAQ dan CTA per halaman dikelola melalui dashboard.
- FAQ yang tidak diisi tidak boleh menampilkan pertanyaan placeholder.
- FAQ JSON-LD hanya boleh dibuat jika pertanyaan dan jawaban benar-benar tampil pada halaman dan sesuai kebijakan structured data yang berlaku saat implementasi.

---

## 8. Spesifikasi Halaman Publik

## 8.1 Beranda `/`

Urutan section wajib:
1. Hero
2. Ringkasan Tentang Kami
3. Mengapa Memilih Kami
4. Tiga layanan terbaik
5. Galeri preview
6. Tiga paket rekomendasi
7. Tiga card blog
8. Testimoni
9. FAQ (5 pertanyaan)
10. CTA
11. Footer

### Hero
- Heading utama yang jelas menyebut layanan outbound dan konteks Batu–Malang secara alami.
- Supporting text yang menjelaskan nilai layanan, bukan klaim berlebihan.
- CTA utama untuk konsultasi WhatsApp dan CTA sekunder menuju layanan/paket.
- Gambar hero, alt text, posisi focal point, overlay, heading, deskripsi, label kecil, dan tautan CTA dapat diubah admin.
- Gambar tidak boleh mengorbankan keterbacaan teks.

### Ringkasan Tentang Kami
- Ringkasan singkat brand dan cakupan kegiatan.
- Tombol menuju `/tentang-kami`.
- Semua teks dan gambar dapat diubah dari dashboard.

### Mengapa Memilih Kami
- Card keunggulan yang dapat ditambah, diubah, diurutkan, atau dinonaktifkan admin.
- Jangan mengisi dengan klaim sertifikasi atau pengalaman yang belum diverifikasi.

### Tiga layanan terbaik
- Pilih maksimal tiga item yang ditandai “featured” di dashboard.
- Card berisi gambar, kategori, judul, ringkasan, dan link detail.
- Jika belum ada item featured, tampilkan item aktif berdasarkan urutan admin, bukan error.

### Galeri preview
- Tampilkan beberapa foto terpilih yang dapat diatur dari dashboard.
- Klik foto membuka lightbox, bukan halaman gambar mentah.
- Sediakan tombol menuju `/galeri`.

### Tiga paket rekomendasi
- Tampilkan tiga paket yang ditandai rekomendasi.
- Karena harga belum ditetapkan, jangan membuat harga contoh. Gunakan label seperti “Konsultasikan kebutuhan paket” atau “Paket dapat disesuaikan” jika disetujui admin.
- CTA menuju detail paket atau WhatsApp dengan konteks nama paket.

### Tiga card blog
- Artikel terbaru atau artikel yang ditandai featured.
- Setiap card memuat thumbnail, kategori, judul, ringkasan, nama penulis, tanggal publikasi, dan link “Baca selengkapnya”.
- Hanya artikel berstatus Published yang tampil.

### Testimoni
- Dikelola admin, dengan nama/organisasi, isi, tanggal (opsional), foto (opsional), dan status publikasi.
- Jangan membuat testimoni palsu untuk mengisi desain. Jika belum ada data, sembunyikan section atau gunakan bagian “Pengalaman yang Dirancang untuk Tim Anda” yang bukan testimoni, jika desain mengizinkan.
- Jangan menampilkan rating bintang tanpa data asli.

### FAQ
- Lima pertanyaan yang relevan dengan layanan, proses konsultasi, penyesuaian kegiatan, peserta, lokasi, dan cuaca.
- Jawaban awal harus berupa draft yang dapat diedit admin dan tidak menjanjikan fasilitas/layanan yang belum dikonfirmasi.

---

## 8.2 Tentang Kami `/tentang-kami`

Urutan:
1. Hero
2. Mengapa Memilih Kami
3. Keunggulan
4. FAQ (5 pertanyaan)
5. CTA
6. Footer

Konten:
- Cerita, fokus layanan, pendekatan kerja, dan area layanan.
- Visi/misi boleh ditambahkan bila disediakan admin.
- Keunggulan berupa poin konkret yang dapat dibuktikan.
- Foto tim hanya jika tersedia dan mendapat izin.
- Hindari biodata, tahun pengalaman, sertifikasi, dan klaim perusahaan yang tidak diberikan.
- Semua gambar, heading, teks, daftar keunggulan, FAQ, dan CTA dapat diedit dari dashboard.

---

## 8.3 Layanan `/layanan`

Urutan:
1. Hero
2. Empat kartu layanan utama
3. FAQ (5 pertanyaan)
4. CTA
5. Footer

Empat layanan wajib:
1. **Outbound Perusahaan** — link detail `/layanan/outbound-perusahaan`
2. **Family Gathering** — link detail `/layanan/family-gathering`
3. **Outbound Sekolah** — link detail `/layanan/outbound-sekolah`
4. **Wisata & Adventure** — link detail `/layanan/wisata-adventure`

Setiap card menampilkan gambar WebP, judul, deskripsi, poin manfaat bila tersedia, dan tombol **Detail Layanan**. Semua konten dan urutan dapat diedit admin.

### Template halaman detail layanan
Setiap detail layanan menggunakan template reusable:
- Breadcrumb
- Hero khusus layanan
- Ringkasan layanan dan siapa yang cocok mengikutinya
- Manfaat/tujuan kegiatan
- Aktivitas atau opsi program
- Informasi yang perlu dikonsultasikan (jumlah peserta, tanggal, lokasi, durasi, kebutuhan khusus)
- Galeri terkait (jika ada)
- Paket terkait (jika ada)
- FAQ khusus (opsional, dikelola admin)
- CTA WhatsApp dengan pesan terisi nama layanan
- Footer

Jangan mengunci jumlah peserta minimum/maksimum, durasi, lokasi spesifik, atau fasilitas sebagai fakta sebelum dikonfirmasi pemilik.

---

## 8.4 Paket `/paket`

Urutan:
1. Hero
2. Kategori Perusahaan
3. Kategori Family Gathering
4. Kategori Sekolah
5. Kategori Wisata & Adventure
6. FAQ (5 pertanyaan)
7. CTA
8. Footer

Paket dibagi sebagai berikut:

### A. Perusahaan
- Team Building
- Fun Games
- Leadership Camp
- Corporate Gathering

### B. Family Gathering
- Paket Hemat
- Paket Standard
- Paket Premium
- Paket Custom

### C. Sekolah
- Outbound Pelajar
- Character Building
- LDKS Leadership
- Edukasi Alam

### D. Wisata & Adventure
- Outbound Wisata
- Rafting
- Offroad 4x4
- Camping

### Ketentuan card paket
- Nama, slug, kategori, gambar, deskripsi, daftar aktivitas, durasi (opsional), target peserta, fasilitas, CTA, status, dan urutan dapat dikelola admin.
- Tidak boleh menampilkan harga yang belum ditentukan. Dashboard boleh memiliki field harga opsional; jika kosong, frontend menyembunyikan harga dan menampilkan CTA konsultasi.
- Paket Custom harus menjelaskan bahwa rincian disesuaikan berdasarkan kebutuhan calon pelanggan, tanpa menjanjikan komponen tertentu.
- Setiap item memiliki halaman detail clean URL bila dibutuhkan untuk SEO. Jika halaman detail dibuat, gunakan slug unik dan breadcrumb yang tepat.
- Filter kategori boleh tersedia sebagai enhancement, tetapi jangan sampai menggantikan akses ke kategori melalui navigasi.

---

## 8.5 Galeri `/galeri`

Urutan:
1. Hero
2. Kumpulan card galeri dengan preview/lightbox
3. FAQ (5 pertanyaan)
4. CTA
5. Footer

### Fitur galeri
- Grid responsif dengan rasio gambar konsisten.
- Klik thumbnail membuka modal/lightbox yang menampilkan gambar besar tanpa memotong bagian penting.
- Tombol sebelumnya/berikutnya, close, navigasi keyboard (Escape, panah kiri/kanan), swipe pada perangkat sentuh, dan fokus yang dikelola dengan benar.
- Klik di luar gambar dapat menutup modal jika tidak mengganggu usability.
- Tampilkan caption, kategori, alt text, dan tanggal bila tersedia.
- Jangan menggunakan gambar yang belum memiliki hak penggunaan.
- Media dapat dicari/difilter berdasarkan kategori (Perusahaan, Family, Sekolah, Wisata & Adventure) jika kategori sudah diisi.
- Gambar ditampilkan dalam versi teroptimasi; lightbox boleh memakai varian resolusi lebih besar selama ukuran tetap efisien.
- Semua gambar dan metadata galeri dapat dikelola dari dashboard.

---

## 8.6 Blog `/blog`

Urutan:
1. Hero
2. Kumpulan card artikel
3. FAQ (5 pertanyaan)
4. CTA
5. Footer

### Blog index
Setiap card menampilkan:
- Thumbnail WebP
- Kategori artikel
- Judul
- Ringkasan
- Nama author
- Tanggal publikasi
- Estimasi waktu baca bila tersedia
- Tombol/link “Baca selengkapnya” ke `/blog/[slug]`

Fitur yang dianjurkan:
- Pagination atau “Muat artikel lainnya” dengan URL yang tetap dapat dirayapi.
- Filter kategori jika jumlah artikel cukup.
- Pencarian artikel jika mudah dan tidak membebani performa.
- Hanya artikel Published yang muncul.
- Artikel Draft/Archived tidak boleh bisa diakses publik, kecuali preview admin yang terlindungi.

### Struktur halaman artikel `/blog/[slug]`
Halaman artikel harus mengambil inspirasi struktur dan komponen dari kode referensi yang diberikan pengguna, tetapi **diimplementasikan secara idiomatis menggunakan Astro + Tailwind**, bukan menyalin Bootstrap, Font Awesome, atau JavaScript lama secara mentah. Pertahankan elemen pengalaman dan fungsi yang penting:

1. Metadata SEO lengkap di `<head>`.
2. Navbar dan breadcrumb.
3. Header artikel: kategori/badge, H1, author, tanggal publikasi, tanggal pembaruan jika ada, estimasi waktu baca.
4. Gambar utama dengan `alt`, dimensi eksplisit, `fetchpriority="high"` bila menjadi LCP, dan `loading="eager"` hanya untuk gambar utama.
5. Ringkasan utama artikel/answer-first box.
6. Daftar isi otomatis dari heading H2/H3 dengan tautan anchor.
7. Konten artikel semantik yang mendukung paragraf, heading, list, tabel, kutipan, gambar, caption, callout, checklist, dan link internal.
8. Kotak “Baca Juga” di dalam konten bila artikel terkait tersedia.
9. FAQ artikel bila ditulis oleh editor.
10. CTA relevan ke WhatsApp.
11. Bio author berdasarkan data author yang benar dan disetujui.
12. Tombol share ke WhatsApp, Facebook, X, LinkedIn, dan salin link; gunakan URL yang dikodekan dengan benar.
13. Sidebar desktop berisi artikel terkait, CTA konsultasi, dan konten galeri terkait bila tersedia; pada mobile, pindahkan ke bawah konten atau susun sesuai referensi.
14. Rekomendasi artikel/paket terkait setelah konten utama.
15. Footer dan floating actions.

### Ketentuan penting untuk menyesuaikan kode contoh
- Ganti seluruh nama brand, URL, gambar, metadata, nomor WhatsApp, link, author, dan teks milik Malang Traveler menjadi data Vendor Outbound yang benar.
- Jangan memakai klaim seperti “No. 1”, “terbaik”, “terpercaya”, angka peserta, suhu, statistik, lisensi BNSP, atau pengalaman bertahun-tahun kecuali sudah diverifikasi dan disetujui admin.
- Jangan salin fakta atau testimoni dari kode referensi ke website baru.
- Gunakan URL canonical `https://vendoroutbound.id/blog/[slug]`.
- Gunakan clean URL tanpa `.html`.
- Artikel harus mempunyai judul dan deskripsi yang unik.
- TOC dibangun dari heading yang mempunyai ID stabil; jangan membuat ID duplikat.
- Share dan copy link harus memiliki fallback jika Clipboard API tidak tersedia.
- Artikel terkait dan “Baca Juga” hanya menampilkan artikel yang Published.
- Jangan membuat halaman artikel tipis hanya untuk menambah jumlah URL. Setiap artikel perlu menjawab intent pembaca dengan substansi asli.

---

## 8.7 Kontak `/kontak`

Urutan:
1. Hero
2. Formulir kontak/konsultasi dan informasi sosial media
3. FAQ (5 pertanyaan)
4. CTA
5. Footer

### Formulir
Field yang disarankan:
- Nama lengkap (wajib)
- Nama perusahaan/sekolah/komunitas (opsional)
- Nomor WhatsApp (wajib)
- Email (opsional)
- Kebutuhan layanan (dropdown: Perusahaan, Family Gathering, Sekolah, Wisata & Adventure, Lainnya)
- Perkiraan jumlah peserta (opsional)
- Tanggal/rentang tanggal kegiatan (opsional)
- Area/lokasi yang diinginkan (opsional)
- Pesan/kebutuhan khusus (wajib)
- Checkbox persetujuan pemrosesan data sesuai Kebijakan Privasi (wajib bila diperlukan)

Perilaku:
- Validasi client-side dan server-side.
- Tampilkan pesan sukses/gagal yang jelas.
- Cegah spam menggunakan honeypot, rate limiting, atau mekanisme anti-spam yang proporsional.
- Simpan lead ke Supabase.
- Jangan menampilkan data leads ke publik.
- Jangan mengirim email otomatis kecuali provider email sudah dikonfigurasi secara sah.
- Setelah berhasil, tampilkan konfirmasi dan opsi melanjutkan ke WhatsApp.
- Jangan menghapus data input saat validasi gagal.

### Informasi kontak
- WhatsApp resmi: **+62 822-1122-1909**
- Sosial media, email, alamat kantor, jam operasional, dan peta hanya ditampilkan jika datanya telah diberikan dan diverifikasi.
- Area layanan utama: Batu dan Malang, Jawa Timur.
- Jangan menampilkan alamat kantor spesifik yang belum dikonfirmasi.

---

## 9. Spesifikasi SEO, AEO, dan GEO

SEO/AEO/GEO harus menjadi bagian dari arsitektur dan workflow editorial, bukan sekadar plugin atau penambahan schema.

### 9.1 Metadata unik
Untuk setiap halaman publik:
- `<title>` unik, deskriptif, dan tidak terpotong; target praktis sekitar 50–60 karakter bila sesuai.
- `meta description` unik, informatif, dan ringkas; target sekitar 120–155 karakter sesuai konteks, tanpa keyword stuffing.
- Canonical absolut yang menunjuk URL utama clean.
- `meta robots` yang sesuai status publikasi.
- Open Graph (`og:type`, `og:site_name`, `og:url`, `og:title`, `og:description`, `og:image`).
- Twitter Card (`summary_large_image` jika memiliki gambar).
- Bahasa dokumen `lang="id"`.
- Favicon yang benar.
- H1 utama satu per halaman dan hierarki H2/H3 logis.
- Image alt menjelaskan isi gambar secara natural; dekoratif gunakan alt kosong.
- Link internal deskriptif dan relevan.
- Sitemap XML otomatis untuk halaman publik canonical.
- `robots.txt` tidak memblokir CSS/JS penting atau halaman publik yang harus dirayapi.
- Halaman admin, draft, hasil pencarian internal, dan preview privat diberi `noindex`.

Batas karakter bukan jaminan ranking. Prioritaskan kejelasan, keunikan, intent, dan tampilan snippet.

### 9.2 JSON-LD / Structured Data
Buat JSON-LD dinamis berdasarkan data nyata dan halaman yang sedang dirender. Gunakan tipe yang relevan, misalnya:
- `Organization` atau `LocalBusiness` hanya jika informasi bisnis yang dibutuhkan sudah tersedia dan sesuai.
- `WebSite` untuk identitas website bila relevan.
- `WebPage` untuk halaman umum.
- `BreadcrumbList` untuk seluruh halaman publik dengan breadcrumb.
- `Article` atau `BlogPosting` untuk artikel.
- `Person` untuk author hanya jika profil author benar dan sudah disetujui.
- `ImageObject` jika sesuai dan data gambar tersedia.
- `FAQPage` hanya jika FAQ terlihat pada halaman dan mengikuti pedoman Google terbaru; jangan mengandalkan FAQ rich result sebagai jaminan tampilan hasil pencarian.
- `Service` hanya jika representasi layanan memang sesuai dan datanya lengkap.

Ketentuan:
- Semua URL dalam schema menggunakan `https://vendoroutbound.id` dan URL clean.
- `headline`, `description`, `image`, `author`, `datePublished`, `dateModified`, `publisher`, `mainEntityOfPage`, dan breadcrumb harus konsisten dengan konten yang terlihat.
- Jangan menyalin schema artikel contoh yang masih menyebut Malang Traveler.
- Jangan membuat rating, review, harga, alamat, geo-coordinate, jam operasional, atau sertifikasi palsu.
- Validasi JSON-LD tanpa syntax error dan periksa dengan Rich Results Test/validator yang relevan sebelum rilis.
- Structured data tidak menjamin rich result.

### 9.3 AEO — Answer Engine Optimization
- Berikan jawaban langsung terhadap pertanyaan utama di bagian awal halaman atau artikel.
- Untuk artikel panduan, sediakan ringkasan inti/answer-first box yang menjawab kebutuhan pembaca dalam sekitar 40–80 kata bila cocok.
- Gunakan heading berbentuk pertanyaan ketika sesuai intent.
- Jawaban FAQ singkat, spesifik, tidak berputar-putar, dan didukung informasi yang benar.
- Gunakan tabel, checklist, langkah-langkah, definisi, dan perbandingan bila membantu pembaca.
- Cantumkan konteks wilayah Batu–Malang secara alami, bukan berulang secara berlebihan.
- Jangan membuat konten semata-mata untuk memanipulasi AI answer atau mengulang keyword.

### 9.4 GEO — Generative Engine Optimization
- Tulis konten asli, faktual, jelas, dan mudah dikutip.
- Identitas brand, layanan, wilayah, author, dan detail kontak harus konsisten di seluruh halaman.
- Bedakan fakta yang dikonfirmasi, rekomendasi, dan hal yang perlu dikonsultasikan.
- Gunakan heading yang deskriptif, definisi eksplisit, ringkasan, daftar, dan sumber rujukan bila mengutip data eksternal.
- Hindari klaim superlatif, statistik tanpa sumber, dan konten hasil parafrase massal.
- Buat halaman layanan yang menjawab target pengguna, aktivitas, manfaat, pertimbangan keselamatan, persiapan, dan hal yang perlu ditanyakan sebelum booking.
- Jangan menjanjikan bahwa optimasi GEO pasti membuat website dikutip oleh sistem AI tertentu.

### 9.5 Strategi internal linking
- Beranda mengarah ke layanan unggulan, paket rekomendasi, galeri, dan artikel.
- Halaman layanan mengarah ke paket terkait dan artikel panduan yang relevan.
- Halaman paket mengarah ke layanan terkait dan CTA kontak.
- Artikel menghubungkan ke halaman layanan/paket yang relevan secara kontekstual.
- Artikel dapat menautkan 2–4 artikel terkait jika benar-benar relevan.
- Hindari link farm, anchor text yang dipaksakan, dan footer berisi daftar domain yang tidak relevan.

### 9.6 Konten artikel dan editorial
Field artikel minimum:
- Judul
- Slug
- Ringkasan/excerpt
- Isi artikel
- Kategori
- Tags (opsional)
- Author
- Thumbnail
- Gambar utama
- Alt text
- Caption gambar (opsional)
- Meta title
- Meta description
- Canonical (default otomatis, override hanya untuk kebutuhan sah)
- OG image
- Tanggal publikasi
- Tanggal pembaruan
- Status: Draft, Published, Archived
- Featured
- Artikel terkait
- FAQ artikel (opsional)
- SEO score/checklist internal (opsional; bukan faktor ranking Google langsung)
- Konten answer-first/ringkasan
- Waktu baca yang dihitung atau dapat dikoreksi editor

Editor artikel sebaiknya menyediakan blok konten terstruktur atau rich text editor yang aman. Sanitasi HTML agar konten berbahaya tidak dapat dieksekusi. Jika menggunakan Markdown, tampilkan preview sebelum publikasi.

---

## 10. Persyaratan Gambar dan Media

Semua gambar yang digunakan di website harus berformat **WebP** dan target ukuran file **di bawah 100 KB per gambar**.

### Aturan implementasi
- Konversi aset unggahan ke WebP di server atau proses upload yang aman bila memungkinkan.
- Tampilkan validasi ukuran file dan format.
- Jika hasil WebP tetap di atas 100 KB, lakukan optimasi ulang; jangan mengorbankan kualitas sampai gambar sulit dilihat.
- Jika ada kebutuhan foto hero beresolusi besar, pecah varian ukuran dan optimalkan dengan lebih ketat. Target <100 KB tetap menjadi sasaran; jika tidak realistis untuk aset tertentu, beri peringatan kepada admin dan dokumentasikan pengecualian, bukan diam-diam mengabaikan aturan.
- Gunakan `srcset`/`sizes` atau image service yang sesuai untuk menyediakan resolusi yang tepat.
- Tetapkan `width` dan `height` untuk mengurangi layout shift.
- Gunakan `loading="lazy"` untuk gambar di bawah fold; jangan lazy-load gambar LCP/hero utama.
- Gunakan `decoding="async"` bila sesuai.
- Alt text wajib untuk gambar informatif.
- Nama file bersih, deskriptif, lowercase, kebab-case, dan tidak mengandung nama file kamera mentah.
- Simpan metadata gambar: alt, caption, kategori, ukuran file, dimensi, dan pemilik/asal aset.
- Gunakan Supabase Storage bucket yang sesuai dan kebijakan akses yang tepat.
- Jangan menerima SVG/HTML sebagai gambar upload tanpa sanitasi dan alasan teknis yang kuat.
- Pastikan file yang dihapus dari galeri tidak menyebabkan broken image pada halaman yang masih menggunakannya.

---

## 11. Dashboard Admin / CMS

### 11.1 Tujuan dashboard
Dashboard admin adalah CMS internal yang profesional dan elegan, terpisah dari frontend publik. Pengelola dapat memperbarui konten tanpa membuka editor kode. UI dashboard harus konsisten dengan sistem desain Vendor Outbound tetapi mengutamakan produktivitas dan kejelasan.

### 11.2 Rute dan akses
- `/admin/login`
- `/admin`
- `/admin/halaman`
- `/admin/layanan`
- `/admin/paket`
- `/admin/galeri`
- `/admin/blog`
- `/admin/testimoni`
- `/admin/faq`
- `/admin/leads`
- `/admin/pengaturan`
- `/admin/pengguna` (opsional bila ada lebih dari satu admin)

### 11.3 Autentikasi dan keamanan
- Gunakan Supabase Auth.
- Hanya akun yang telah diundang/diizinkan dapat menjadi admin.
- Jangan menyediakan registrasi admin publik.
- Lindungi rute melalui validasi session di server/middleware.
- Aktifkan RLS untuk seluruh tabel yang terekspos melalui API.
- Pengunjung publik hanya boleh membaca data yang memang dipublikasikan.
- Pengunjung publik tidak boleh membaca leads, akun, draft, data privat, atau konfigurasi rahasia.
- Mutasi konten hanya boleh dilakukan role yang berwenang.
- Validasi input di server dan database, bukan hanya browser.
- Gunakan rate limit untuk login/form publik bila tersedia.
- Terapkan logout, session expiry yang wajar, dan penanganan error autentikasi.
- Jangan pernah menyimpan password dalam tabel custom atau log.

### 11.4 Dashboard ringkasan
Tampilkan kartu ringkasan yang berguna:
- Jumlah artikel Published
- Jumlah artikel Draft
- Jumlah item layanan/paket aktif
- Jumlah foto galeri aktif
- Leads baru/belum ditindaklanjuti
- Shortcut “Tambah Artikel”, “Upload Galeri”, dan “Edit Beranda”
- Aktivitas terbaru jika log aktivitas telah diimplementasikan

Data ringkasan harus berasal dari database. Jangan menampilkan angka dummy yang terlihat seperti data nyata.

### 11.5 Pengelolaan konten per halaman
Admin harus bisa:
- Mengedit heading, subheading, body copy, label, gambar, alt text, caption, CTA label, CTA URL, dan urutan section.
- Mengaktifkan/menonaktifkan section jika diperbolehkan.
- Menambah, mengedit, menghapus, mengurutkan, dan menandai item unggulan.
- Melihat preview sebelum menerbitkan.
- Menyimpan Draft dan menerbitkan perubahan.
- Membatalkan perubahan yang belum disimpan.
- Melihat validasi field yang belum lengkap.
- Menggunakan editor yang sesuai tipe konten, bukan textarea tunggal untuk semua hal.

### 11.6 Editor Beranda
Pengaturan per section:
- Hero: eyebrow, H1, deskripsi, gambar WebP, alt text, focal position (jika diimplementasikan), CTA utama/sekunder.
- Tentang ringkas: heading, teks, gambar, link.
- Mengapa memilih kami: list item dengan ikon, judul, deskripsi, urutan, status.
- Layanan unggulan: pilih maksimal 3 item layanan aktif.
- Galeri preview: pilih gambar dan atur urutan.
- Paket rekomendasi: pilih maksimal 3 paket aktif.
- Artikel pilihan: pilih 3 artikel Published.
- Testimoni: pilih item aktif.
- FAQ: kelola 5 item atau lebih, dengan kontrol jumlah tampilan.
- CTA: heading, deskripsi, tombol, URL.
- Footer: melalui pengaturan global.

### 11.7 Editor Tentang Kami
- Hero
- Cerita/overview
- Mengapa Memilih Kami
- Keunggulan
- FAQ
- CTA
- Gambar dan alt text
- Status section dan urutan

### 11.8 Editor Layanan
- CRUD empat layanan utama dan layanan tambahan bila dibutuhkan.
- Field: nama, slug, ringkasan, konten detail, gambar, alt, manfaat, target audiens, aktivitas, galeri terkait, paket terkait, FAQ, SEO title/description, OG image, status publikasi, urutan.
- Tombol “Detail Layanan” harus otomatis mengarah ke slug layanan yang sesuai.
- Slug yang sudah dipublikasikan tidak boleh berubah tanpa peringatan dan penanganan redirect.

### 11.9 Editor Paket
- CRUD kategori dan paket.
- Field: nama, slug, kategori, deskripsi, gambar, alt, aktivitas, fasilitas (opsional), durasi (opsional), sasaran peserta, harga opsional, catatan harga, CTA, status, featured, urutan, metadata SEO.
- Harga kosong berarti tidak ditampilkan pada frontend.
- Jangan mengisi fasilitas atau durasi sebagai fakta tanpa data pemilik.

### 11.10 Editor Galeri
- Upload banyak gambar.
- Validasi WebP dan ukuran target <100 KB.
- Isi alt text, caption, kategori, tanggal (opsional), status, dan urutan.
- Preview thumbnail dan lightbox.
- Ganti file tanpa memutus referensi yang masih digunakan jika memungkinkan.
- Hapus dengan konfirmasi; periksa penggunaan gambar sebelum menghapus.
- Bulk selection dan bulk status merupakan enhancement.

### 11.11 Editor Blog
- Daftar artikel dengan pencarian, filter kategori/status/author, dan pagination.
- Buat, edit, preview, publish, unpublish, archive, dan hapus dengan konfirmasi.
- Slug otomatis dari judul tetapi bisa diedit sebelum publish.
- Validasi slug unik.
- Editor artikel dengan heading, paragraf, daftar, tautan, tabel, gambar WebP, caption, callout, FAQ, dan internal links.
- Preview desktop/mobile.
- Atur author, tanggal publikasi, tanggal pembaruan, thumbnail, featured image, related posts, CTA, dan kategori.
- Atur meta title, meta description, canonical, OG image, robots directive, dan data terstruktur yang relevan.
- Tampilkan preview snippet pencarian sebagai alat editorial, bukan janji hasil SERP.
- Artikel Published tidak boleh menjadi Draft secara tidak sengaja tanpa konfirmasi.
- Perubahan slug menampilkan peringatan dan menawarkan pembuatan redirect.
- Schema JSON-LD dibuat secara dinamis dari field artikel dan tidak diedit sebagai JSON mentah oleh pengguna biasa.

### 11.12 Editor FAQ
- FAQ dapat ditautkan ke halaman tertentu atau artikel tertentu.
- Field: pertanyaan, jawaban, halaman/relasi, urutan, status.
- Validasi agar pertanyaan tidak kosong.
- Accordion publik dan JSON-LD mengambil data yang sama sehingga tidak terjadi perbedaan.

### 11.13 Pengelolaan leads
- Tabel leads berisi nama, organisasi (jika ada), WhatsApp, email (jika ada), jenis kebutuhan, peserta, tanggal, lokasi, pesan, waktu masuk, status, dan catatan internal.
- Status: Baru, Dihubungi, Follow-up, Selesai, Spam.
- Pencarian, filter, detail, dan penyalinan kontak.
- Tombol membuka WhatsApp dengan pesan yang telah di-encode.
- Data leads tidak boleh tampil di frontend publik.
- Akses hanya untuk admin berwenang.
- Hindari mengekspor data sensitif tanpa kontrol akses.
- Tetapkan kebijakan retensi dan penghapusan data sesuai Kebijakan Privasi.

### 11.14 Pengaturan global
Admin dapat mengubah:
- Nama brand dan tagline
- Logo dan favicon
- Nomor WhatsApp resmi (default `+62 822-1122-1909`)
- Pesan default WhatsApp
- Alamat (opsional; tampil hanya jika diisi dan disetujui)
- Email dan jam operasional (opsional)
- Link media sosial
- Navbar: label, URL, urutan, visibilitas, item dropdown
- Footer: deskripsi, navigasi, layanan, kontak, legal links, copyright
- Default SEO: site name, default title suffix, default description, default OG image
- Pengaturan sitemap/robots yang aman
- Link Kebijakan Privasi dan Syarat & Ketentuan
- Pengaturan tracking hanya jika ID dan consent yang diperlukan sudah dikonfigurasi

### 11.15 Preview dan publikasi
- Simpan sebagai Draft tidak mengubah konten publik.
- Tombol Preview hanya dapat menampilkan konten draft kepada admin yang terautentikasi melalui token/session aman.
- Tombol Publish menampilkan ringkasan perubahan.
- Tampilkan toast atau pesan sukses/gagal berdasarkan hasil server.
- Jangan mengklaim tersimpan jika request gagal.
- Sediakan indikator “Perubahan belum disimpan”.
- Perubahan global harus memiliki mekanisme invalidasi cache/revalidation yang sesuai arsitektur.

---

## 12. Rancangan Database Supabase

Nama tabel dapat disesuaikan, tetapi hubungan dan aturan akses harus terdokumentasi.

### 12.1 Tabel `site_settings`
Kolom yang disarankan:
- `id` UUID primary key
- `key` text unique
- `value` jsonb
- `updated_at` timestamptz
- `updated_by` UUID nullable

Simpan konfigurasi global, navbar, footer, nomor WhatsApp, sosial media, dan default SEO. Hindari menyimpan secret di tabel ini.

### 12.2 Tabel `pages`
- `id` UUID
- `title` text
- `slug` text unique
- `page_type` text
- `content` jsonb
- `seo_title` text nullable
- `seo_description` text nullable
- `canonical_url` text nullable
- `og_image_id` UUID nullable
- `status` enum/text: draft, published, archived
- `updated_at`, `published_at`
- `created_by`, `updated_by`

`content` memakai struktur terdefinisi/validasi schema per tipe halaman, bukan JSON bebas tanpa validasi.

### 12.3 Tabel `services`
- `id` UUID
- `title`, `slug`, `excerpt`
- `content` jsonb
- `image_id` UUID nullable
- `target_audience` text nullable
- `benefits` jsonb
- `activities` jsonb
- `seo_title`, `seo_description`
- `status`, `featured`, `sort_order`
- timestamp dan user audit fields

### 12.4 Tabel `package_categories`
- `id` UUID
- `name`, `slug`, `description`
- `sort_order`, `status`
- timestamps

### 12.5 Tabel `packages`
- `id` UUID
- `category_id` UUID foreign key
- `title`, `slug`, `excerpt`
- `content` jsonb
- `image_id` UUID nullable
- `activities` jsonb
- `features` jsonb nullable
- `duration` text nullable
- `price_label` text nullable
- `price_amount` numeric nullable, jika memang diperlukan
- `featured`, `status`, `sort_order`
- SEO fields dan timestamps

Harga tidak tampil jika kosong. Jangan memaksa satu format harga bila paket memerlukan konsultasi.

### 12.6 Tabel `gallery_items`
- `id` UUID
- `title` text nullable
- `caption` text nullable
- `alt_text` text
- `storage_path` text
- `public_url` text atau URL hasil transformasi yang tervalidasi
- `category` text nullable
- `width`, `height`, `file_size_bytes`
- `status`, `sort_order`
- `created_at`, `updated_at`, `created_by`

### 12.7 Tabel `authors`
- `id` UUID
- `display_name` text
- `slug` text unique
- `bio` text nullable
- `avatar_image_id` UUID nullable
- `profile_url` text nullable
- `is_active` boolean
- timestamps

Jangan mengisi kredensial, gelar, sertifikasi, atau pengalaman yang belum dikonfirmasi.

### 12.8 Tabel `blog_posts`
- `id` UUID
- `title` text
- `slug` text unique
- `excerpt` text
- `body` jsonb atau format editor terstruktur
- `category_id` UUID nullable
- `author_id` UUID foreign key
- `thumbnail_image_id` UUID nullable
- `featured_image_id` UUID nullable
- `image_alt` text
- `seo_title`, `seo_description`
- `canonical_url` text nullable
- `og_image_id` UUID nullable
- `status` enum/text
- `is_featured` boolean
- `published_at`, `modified_at`
- `reading_time_minutes` integer nullable
- `related_post_ids` jsonb nullable
- `created_at`, `updated_at`, `created_by`, `updated_by`

### 12.9 Tabel `blog_categories`
- `id` UUID
- `name`, `slug`, `description`
- `status`, `sort_order`
- timestamps

### 12.10 Tabel `faq_items`
- `id` UUID
- `page_slug` text nullable
- `blog_post_id` UUID nullable
- `question` text
- `answer` text
- `sort_order` integer
- `status` text
- timestamps

Validasi agar FAQ terhubung ke konteks yang benar dan tidak muncul ganda tanpa sengaja.

### 12.11 Tabel `testimonials`
- `id` UUID
- `display_name` text
- `organization` text nullable
- `quote` text
- `avatar_image_id` UUID nullable
- `event_date` date nullable
- `permission_confirmed` boolean
- `status`, `sort_order`
- timestamps

Hanya tampilkan testimoni dengan izin publikasi yang telah dikonfirmasi.

### 12.12 Tabel `leads`
- `id` UUID
- `name` text
- `organization` text nullable
- `whatsapp` text
- `email` text nullable
- `service_type` text
- `participant_count` integer nullable
- `event_date` date nullable
- `preferred_location` text nullable
- `message` text
- `privacy_consent` boolean
- `status` text
- `internal_notes` text nullable
- `created_at`, `updated_at`
- `assigned_to` UUID nullable

Leads hanya dapat dibaca/diubah admin yang sah.

### 12.13 Tabel `redirects` (disarankan)
- `id` UUID
- `source_path` text unique
- `destination_path` text
- `status_code` integer default 301
- `created_at`

Gunakan untuk mempertahankan URL lama ketika slug berubah.

### 12.14 RLS dan Storage
- Aktifkan RLS pada seluruh tabel.
- Kebijakan SELECT publik hanya untuk data Published/Active yang memang perlu dibaca.
- Kebijakan INSERT publik hanya pada alur leads yang tervalidasi dan aman; lebih baik melalui server endpoint/action jika diperlukan untuk mengurangi penyalahgunaan.
- Mutasi tabel konten hanya untuk admin.
- Storage publik hanya untuk aset yang memang dimaksudkan publik. Upload/delete harus memerlukan autentikasi admin.
- Pisahkan bucket publik dan privat jika ada media internal.
- Sediakan migration SQL dan seed data awal yang jelas.
- Jangan menaruh kredensial nyata dalam seed atau repository.

---

## 13. Integrasi Form, WhatsApp, dan Notifikasi

- Tombol WhatsApp menggunakan nomor default `6282211221909`.
- Pesan otomatis dikodekan dengan `encodeURIComponent`.
- Pesan dapat menyertakan halaman asal, nama layanan/paket, dan informasi yang dipilih pengguna tanpa memasukkan data sensitif secara otomatis.
- Form kontak disimpan ke Supabase dengan validasi server-side.
- Tampilkan status loading, sukses, error, dan retry.
- Cegah double-submit.
- Hindari mengirim data form ke URL query string publik.
- Jika kelak menambah email notification, gunakan provider yang sah, simpan API key di server, dan dokumentasikan konfigurasi.
- Jangan mengklaim notifikasi terkirim bila provider belum diatur.

---

## 14. Aksesibilitas, Keamanan, dan Privasi

### Aksesibilitas
- Gunakan landmark semantik: `header`, `nav`, `main`, `article`, `aside`, `footer`.
- Sediakan skip link ke konten utama.
- Heading berurutan dan tidak dipakai hanya untuk styling.
- Semua elemen interaktif dapat diakses keyboard.
- Modal mengelola fokus dan menutup dengan Escape.
- Form punya label nyata, instruksi, dan pesan error yang terhubung.
- Jangan menyampaikan status hanya melalui warna.
- Hormati `prefers-reduced-motion`.
- Pastikan focus indicator terlihat.

### Keamanan
- RLS wajib.
- Validasi dan sanitasi data.
- Jangan render HTML bebas dari database tanpa sanitasi.
- Hindari XSS melalui judul, artikel, caption, dan URL.
- Validasi tipe MIME dan ukuran file saat upload.
- Batasi akses admin di server.
- Hindari kebocoran stack trace atau secret di frontend.
- Gunakan dependency yang terawat dan minimalkan library yang tidak diperlukan.
- Terapkan CSP/security headers yang sesuai deployment jika memungkinkan.
- Buat prosedur backup database dan media.

### Privasi
- Sediakan halaman Kebijakan Privasi dan Syarat & Ketentuan.
- Jelaskan data yang dikumpulkan melalui formulir, tujuan penggunaan, masa penyimpanan, dan cara menghubungi pengelola.
- Minta persetujuan yang sesuai sebelum memproses data bila diperlukan.
- Jangan mengumpulkan data sensitif yang tidak diperlukan.
- Analytics/marketing cookies harus mengikuti aturan dan persetujuan yang relevan.
- Data leads tidak boleh digunakan untuk tujuan lain tanpa dasar yang sesuai.

---

## 15. Performa dan Core Web Vitals

Target teknis:
- Optimalkan LCP, INP, dan CLS.
- Kurangi JavaScript client-side; gunakan komponen Astro statis jika interaktivitas tidak diperlukan.
- Gunakan island/hydration hanya untuk fitur interaktif seperti lightbox, menu mobile, accordion, dan form.
- Kompres gambar ke WebP dan target di bawah 100 KB.
- Hindari autoplay video hero dan library besar yang tidak diperlukan.
- Gunakan font dengan jumlah family/weight yang terbatas, font-display yang sesuai, dan preload hanya untuk font penting.
- Tetapkan dimensi gambar dan reserve space untuk media.
- Hindari layout shift dari navbar, gambar, banner, dan konten async.
- Minify asset produksi dan gunakan caching yang sesuai.
- Audit halaman beranda, layanan, artikel, galeri, kontak, dan dashboard secara terpisah.
- Jangan menjanjikan skor pasti; ukur hasil build/deployment sebenarnya dan dokumentasikan temuan.

---

## 16. Konten Awal dan Aturan Placeholder

Data bisnis yang telah ditentukan:
- **Brand:** Vendor Outbound
- **Domain:** `https://vendoroutbound.id`
- **Wilayah utama:** Batu dan Malang, Jawa Timur
- **Nomor WhatsApp resmi:** `+62 822-1122-1909`
- **Stack:** Astro, Tailwind CSS, Supabase
- **Bahasa:** Indonesia

Konten yang belum diberikan:
- Logo final
- Alamat kantor
- Email resmi
- Akun sosial media
- Jam operasional
- Harga paket
- Detail fasilitas dan durasi paket
- Daftar venue/mitra
- Profil dan kredensial tim
- Testimoni asli
- Foto kegiatan asli dan izin penggunaannya
- Nama penulis artikel final

Aturan:
- Jangan mengarang data tersebut.
- Sediakan field di dashboard.
- Sembunyikan field kosong di frontend.
- Jika perlu data contoh untuk pengembangan, tandai jelas sebagai dummy/internal dan pastikan tidak masuk production.
- Jangan menampilkan lorem ipsum atau teks instruksi developer di website live.

---

## 17. Kriteria Penerimaan (Acceptance Criteria)

### Frontend
- [ ] Desain dibandingkan dengan referensi gambar dan penyesuaian visual telah dilakukan.
- [ ] Navbar menampilkan seluruh item yang ditentukan dan dropdown Paket bekerja.
- [ ] Breadcrumb tampil tepat di bawah navbar pada semua halaman publik.
- [ ] Semua halaman wajib tersedia dan mempunyai struktur sesuai PRD.
- [ ] Setiap layanan memiliki tombol Detail Layanan yang mengarah ke halaman benar.
- [ ] Semua URL publik clean, tanpa `.html`.
- [ ] Floating WhatsApp tampil pada seluruh halaman publik dengan nomor resmi.
- [ ] Back to Top berada di atas floating WhatsApp dan tidak menutupi konten.
- [ ] Galeri menampilkan lightbox yang dapat dioperasikan mouse, keyboard, dan sentuhan.
- [ ] Blog card membuka halaman artikel yang benar.
- [ ] Artikel memiliki TOC, author, tanggal, artikel terkait, share controls, CTA, dan footer.
- [ ] FAQ accordion berfungsi dan dapat diakses.
- [ ] Semua halaman responsif tanpa overflow horizontal yang tidak disengaja.
- [ ] Tidak ada harga, alamat, testimoni, rating, sertifikasi, atau klaim bisnis rekaan.

### CMS/Admin
- [ ] Login admin menggunakan Supabase Auth.
- [ ] Pengguna tanpa izin tidak dapat membuka dashboard atau melakukan mutasi data.
- [ ] Admin dapat mengubah semua section halaman yang ditentukan.
- [ ] Admin dapat mengubah navbar, footer, nomor WhatsApp, sosial media, dan alamat (jika tersedia).
- [ ] Admin dapat CRUD layanan, paket, galeri, artikel, FAQ, testimoni, dan leads sesuai izin.
- [ ] Upload gambar divalidasi format WebP dan ukuran target di bawah 100 KB.
- [ ] Artikel mendukung Draft, Preview, Published, dan Archived.
- [ ] Meta SEO dan schema artikel dibuat dari data masing-masing artikel.
- [ ] Perubahan konten tersimpan di Supabase dan terlihat di frontend sesuai strategi rendering/cache.
- [ ] Leads hanya terlihat oleh admin berwenang.
- [ ] RLS telah diuji dengan role publik dan admin.

### SEO/Performa/Kualitas
- [ ] Title, description, canonical, OG, dan Twitter Card unik pada halaman publik.
- [ ] Sitemap XML dan robots.txt tersedia.
- [ ] Halaman admin tidak terindeks.
- [ ] Breadcrumb dan JSON-LD valid.
- [ ] Artikel menggunakan Article/BlogPosting JSON-LD dengan data yang konsisten.
- [ ] Tidak ada structured data yang memuat fakta palsu atau tidak terlihat di halaman.
- [ ] Gambar memiliki alt text, dimensi, dan loading strategy yang tepat.
- [ ] Tidak ada broken links, console errors, atau error server yang belum ditangani.
- [ ] Lighthouse/PageSpeed telah diuji pada mobile dan desktop; isu mayor diperbaiki.
- [ ] Kebijakan Privasi dan Syarat & Ketentuan tersedia sebelum pengumpulan leads di production.

---

## 18. Rencana Implementasi Bertahap

### Tahap 1 — Fondasi
- Setup Astro, Tailwind, TypeScript, Supabase.
- Siapkan design tokens berdasarkan referensi.
- Bangun layout global, navbar, breadcrumb, footer, floating actions.
- Buat struktur route dan halaman 404.
- Siapkan environment dan README.

### Tahap 2 — Database dan keamanan
- Buat migration, tabel, relasi, enum/status, dan seed awal.
- Konfigurasikan Supabase Auth, RLS, Storage, dan akses server.
- Uji akses publik/admin sebelum memasukkan konten.

### Tahap 3 — Halaman publik
- Bangun Beranda dan Tentang Kami.
- Bangun Layanan dan detail layanan.
- Bangun Paket dan detail kategori/item yang diperlukan.
- Bangun Galeri dan lightbox.
- Bangun Blog index, template artikel, TOC, artikel terkait, dan share.
- Bangun Kontak dan form leads.
- Tambahkan FAQ, CTA, breadcrumb, dan footer ke semua halaman sesuai kebutuhan.

### Tahap 4 — CMS/Admin
- Login dan dashboard.
- Pengaturan global.
- Editor halaman/section.
- CRUD layanan, paket, galeri, blog, FAQ, testimoni.
- Leads management.
- Preview/publish dan invalidasi cache/revalidation.

### Tahap 5 — SEO dan konten
- SEO metadata helpers.
- Canonical, sitemap, robots, OG/Twitter.
- JSON-LD dinamis.
- Internal links dan breadcrumb.
- Validasi konten dan data structured.
- Siapkan template editorial yang membantu AEO/GEO.

### Tahap 6 — QA dan rilis
- Uji responsive dan browser utama.
- Uji aksesibilitas keyboard.
- Uji formulir, WhatsApp, lightbox, TOC, share, dan admin.
- Uji RLS dan proteksi data.
- Audit Lighthouse/PageSpeed.
- Uji redirect, sitemap, canonical, 404, dan broken links.
- Dokumentasikan deployment, environment variables, backup, dan cara memakai dashboard.

---

## 19. Deliverables yang Harus Dihasilkan Agen Pengembang

1. Source code proyek Astro + Tailwind + TypeScript.
2. Implementasi frontend seluruh halaman dan detail halaman.
3. Dashboard admin/CMS yang benar-benar berfungsi.
4. Supabase migrations dan seed data yang aman.
5. Kebijakan RLS untuk tabel dan Storage.
6. Upload media WebP dengan validasi ukuran.
7. SEO helpers, sitemap, robots, metadata, dan JSON-LD.
8. Form kontak yang menyimpan leads ke Supabase.
9. README setup lokal, konfigurasi Supabase, deployment, backup, dan panduan admin.
10. `.env.example` tanpa secret.
11. Checklist QA dan hasil pengujian yang benar-benar dijalankan.
12. Catatan konten yang masih membutuhkan konfirmasi pemilik.

---

## 20. Instruksi Final untuk Agen AI/Developer

Bangun Vendor Outbound sebagai website bisnis yang production-minded, bukan sekadar mockup statis. Prioritaskan kesesuaian dengan gambar referensi, struktur halaman yang diminta, clean URLs, konten yang bisa dikelola dari dashboard, keamanan Supabase, dan SEO teknis yang valid.

Sebelum menyatakan pekerjaan selesai:
- Pastikan setiap tombol dan form memiliki fungsi nyata.
- Pastikan data yang dikelola admin benar-benar tersimpan ke Supabase.
- Pastikan konten yang diubah admin tampil di frontend tanpa perlu mengedit source code, sesuai strategi rendering/cache yang telah dibuat.
- Pastikan seluruh nomor WhatsApp memakai nomor resmi default `+62 822-1122-1909`.
- Pastikan tidak ada URL `.html`.
- Pastikan tidak ada aset gambar yang sengaja dibiarkan di atas target 100 KB tanpa peringatan.
- Pastikan metadata dan JSON-LD unik per artikel dan sesuai konten.
- Pastikan tidak ada klaim, testimoni, alamat, harga, atau kredensial yang dikarang.
- Pastikan semua halaman publik mempunyai breadcrumb di bawah navbar, floating WhatsApp di pojok kanan bawah, serta Back to Top di atasnya.
- Laporkan bagian yang belum dapat diselesaikan atau membutuhkan data pemilik secara jujur; jangan menandai fitur sebagai selesai jika masih berupa placeholder.
