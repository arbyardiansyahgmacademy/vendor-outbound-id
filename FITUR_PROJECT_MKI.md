# DOKUMENTASI LENGKAP FITUR PROJECT MKI
## Platform Website & CMS Admin "Provider Outbound Batu - Malang"
**Domain Resmi**: `https://provideroutbound.web.id`  
**Teknologi Utama**: Astro 5 (Static Site Generation + Client Hydration), Tailwind CSS, Supabase (PostgreSQL Cloud Database), TypeScript / Vanilla JS.

---

## DAFTAR ISI
1. [Ringkasan Eksekutif Proyek](#1-ringkasan-eksekutif-proyek)
2. [Frontend: Struktur Halaman & Rincian Section](#2-frontend-struktur-halaman--rincian-section)
   - [2.1 Halaman Beranda (Home)](#21-halaman-beranda-home--)
   - [2.2 Halaman Tentang Kami](#22-halaman-tentang-kami-tentang-kami)
   - [2.3 Halaman Indeks Layanan](#23-halaman-indeks-layanan-layanan)
   - [2.4 Halaman Detail Layanan Spesifik](#24-halaman-detail-layanan-spesifik-layananslug)
   - [2.5 Halaman Indeks Paket Outbound & Kategori](#25-halaman-indeks-paket-outbound--kategori-paket)
   - [2.6 Halaman Detail Paket Outbound](#26-halaman-detail-paket-outbound-paketdetailslug)
   - [2.7 Halaman Galeri Dokumentasi](#27-halaman-galeri-dokumentasi-galeri)
   - [2.8 Halaman Blog & Artikel Edukasi](#28-halaman-blog--artikel-edukasi-blog)
   - [2.9 Halaman Baca Artikel Blog](#29-halaman-baca-artikel-blog-blogslug)
   - [2.10 Halaman Testimoni Klien](#210-halaman-testimoni-klien-testimoni)
   - [2.11 Halaman FAQ (Tanya Jawab)](#211-halaman-faq-tanya-jawab-faq)
   - [2.12 Halaman Kontak & Lokasi](#212-halaman-kontak--lokasi-kontak)
   - [2.13 Halaman Legalitas (Syarat & Ketentuan, Kebijakan Privasi)](#213-halaman-legalitas-syarat--ketentuan-kebijakan-privasi)
   - [2.14 Komponen Global Frontend](#214-komponen-global-frontend)
3. [Backend: Fitur CMS Dashboard Admin](#3-backend-fitur-cms-dashboard-admin)
   - [3.1 Sistem Autentikasi & Keamanan Sesi](#31-sistem-autentikasi--keamanan-sesi-adminlogin)
   - [3.2 Dashboard Utama (Overview & Statistik)](#32-dashboard-utama-overview--statistik-admin)
   - [3.3 Master Editor Halaman Section-by-Section](#33-master-editor-halaman-section-by-section-adminhalaman)
   - [3.4 Editor Khusus Halaman Beranda & Kontrol Gambar](#34-editor-khusus-halaman-beranda--kontrol-gambar-adminhalamanberanda)
   - [3.5 Editor Khusus Halaman Tentang Kami](#35-editor-khusus-halaman-tentang-kami-adminhalamantentang-kami)
   - [3.6 Editor Khusus Halaman Kontak](#36-editor-khusus-halaman-kontak-adminhalamankontak)
   - [3.7 Editor Khusus Halaman Legalitas](#37-editor-khusus-halaman-legalitas-adminhalamanlegal)
   - [3.8 Manajemen CRUD Paket Outbound](#38-manajemen-crud-paket-outbound-adminpaket)
   - [3.9 Manajemen CRUD Layanan](#39-manajemen-crud-layanan-adminlayanan)
   - [3.10 Manajemen CRUD Galeri Kegiatan](#310-manajemen-crud-galeri-kegiatan-admingaleri)
   - [3.11 Manajemen CRUD Blog & Artikel SEO](#311-manajemen-crud-blog--artikel-seo-adminblog)
   - [3.12 Manajemen CRUD FAQ](#312-manajemen-crud-faq-adminfaq)
   - [3.13 Manajemen CRUD Testimoni](#313-manajemen-crud-testimoni-admintestimoni)
   - [3.14 Manajemen Leads & Konsultasi Masuk](#314-manajemen-leads--konsultasi-masuk-adminleads)
   - [3.15 Pengaturan Global, Tata Letak, Head, Navbar & Footer](#315-pengaturan-global-tata-letak-head-navbar--footer-adminpengaturan)
   - [3.16 Manajemen Profil Admin](#316-manajemen-profil-admin-adminprofil)
4. [Arsitektur Sinkronisasi Data & Realtime Cloud Engine](#4-arsitektur-sinkronisasi-data--realtime-cloud-engine)
5. [Ringkasan Keunggulan Platform](#5-ringkasan-keunggulan-platform)

---

## 1. RINGKASAN EKSEKUTIF PROYEK

Website **Provider Outbound Batu - Malang** dirancang sebagai portal komersial dan sistem reservasi outbound profesional yang melayani perusahaan korporat, BUMN, institusi pendidikan, instansi pemerintah, dan komunitas keluarga di wilayah Kota Batu, Malang Raya, dan Jawa Timur.

Sistem ini memadukan dua pilar utama:
1. **Frontend Berkecepatan Tinggi (High-Performance Public Website)**: Dibangun dengan arsitektur Astro 5 untuk optimasi SEO maksimal, loading instan di perangkat seluler, serta pengalaman pengguna yang mulus tanpa refresh berlebih.
2. **CMS Admin Headless & Section-to-Section**: Memungkinkan administrator memperbarui seluruh konten teks, tombol CTA, tautan, metadata SEO, hingga gambar di setiap section secara visual dan real-time tanpa perlu menyentuh kode program.

---

## 2. FRONTEND: STRUKTUR HALAMAN & RINCIAN SECTION

Berikut adalah seluruh halaman yang dapat diakses oleh publik beserta rincian section yang ada di dalamnya:

### 2.1 Halaman Beranda (Home - `/`)
Halaman utama yang berfungsi sebagai etalase konversi, memperkenalkan kredibilitas provider, ragam layanan, paket populer, serta testimoni klien.
- **Top Bar & Navbar**: Identitas brand, navigasi menu lengkap, serta tombol CTA *"Konsultasi Cepat (WhatsApp)"*.
- **Section 01: Hero Section**:
  - Headline utama promosi provider outbound terdepan di Batu Malang.
  - Subheadline deskriptif berorientasi solusi team building & gathering.
  - Badge akreditasi lisensi fasilitator BNSP.
  - Tombol CTA *"Konsultasi via WhatsApp"* dan *"Lihat Paket Pilihan"*.
  - Stat Counter Kredibilitas: Jumlah klien terlayani (500+ grup), tahun pengalaman (10+ tahun), dan rating kepuasan (4.9/5).
- **Section 02: About Us Preview (Pengenalan Singkat)**:
  - Berada tepat di bawah Hero Section.
  - Menjelaskan profil keunggulan provider di kawasan sejuk Batu Malang.
  - Tombol navigasi menuju halaman profil lengkap Tentang Kami.
- **Section 03: 4 Kategori Utama (Category Showcase)**:
  - Menampilkan 4 pilar layanan: *Outbound Perusahaan*, *Family Gathering*, *Outbound Sekolah*, dan *Wisata Adventure*.
  - Dilengkapi foto visual representatif, deskripsi ringkas, dan tautan langsung ke masing-masing kategori.
- **Section 04: Layanan Unggulan**:
  - Kartu modul layanan korporasi dan edukasi dengan rincian keunggulan aktivitas luar ruang.
- **Section 05: Paket Pilihan Populer (Product Grid)**:
  - Kartu paket favorit: *Team Building*, *Fun Games*, *Family Gathering Hemat/Premium*, *Rafting Pujon/Batu*, *Offroad Jeep 4x4*.
  - Informasi durasi kegiatan (Halfday, 1 Day, 2D1N) dan fasilitas inti.
  - Tombol aksi:
    - **"Konsultasi Paket Ini"** (terintegrasi langsung dengan icon WhatsApp dan otomatis membuka chat WA dengan pesan yang sudah terisi nama paket).
    - **"Detail Paket"** (menuju halaman rincian rundown dan spesifikasi lengkap).
- **Section 06: Mengapa Memilih Kami (Why Choose Us)**:
  - 4 pilar keunggulan: Fasilitator bersertifikat resmi BNSP, SOP Safety & Medis darurat teruji, Rundown & Bujet fleksibel sesuai kebutuhan klien, serta Venue eksklusif di alam pegunungan Batu Malang.
- **Section 07: Destinasi & Venue Populer**:
  - Rekomendasi lokasi outbound terbaik: Coban Talun, Coban Rondo, Songgoriti, Kusuma Agro, Kaliwatu Rafting, Pujon Kidul, dan Camping Ground lereng Arjuna-Panderman.
- **Section 08: Galeri Foto Dokumentasi Kegiatan**:
  - Cuplikan foto keceriaan dan dinamika peserta outbound di lapangan.
- **Section 09: Testimoni Klien**:
  - Ulasan bintang 5 dari pimpinan instansi, HRD perusahaan, panitia reuni, dan kepala sekolah.
- **Section 10: Artikel & Edukasi Terbaru (Blog Preview)**:
  - Cuplikan artikel tips outbound, ice breaking kantor, dan rekomendasi wisata Batu.
- **Section 11: FAQ Accordion**:
  - Tanya jawab umum seputar proses booking, lokasi hujan, fasilitas konsumsi, dan DP.
- **Section 12: CTA Banner (Call-to-Action Penutup)**:
  - Ajakan reservasi kegiatan outbound dengan latar visual alam pegunungan dan tombol direct konsultasi cepat WhatsApp.
- **Section 13: Footer Global**:
  - Informasi kontak, alamat basecamp, tautan navigasi, sosial media, dan copyright.

---

### 2.2 Halaman Tentang Kami (`/tentang-kami`)
Halaman profil perusahaan yang dirancang profesional untuk membangun kepercayaan instansi besar dan korporat.
- **Breadcrumb Navigasi**: Jalur navigasi halaman (`Beranda > Tentang Kami`).
- **Hero Section Tentang Kami**:
  - Narasi utama yang menegaskan status provider outbound nomor satu dan paling berpengalaman di wilayah Kota Batu, Malang Raya, dan Jawa Timur.
  - Gambar banner visual fasilitas outbound profesional.
- **Section Visi, Misi & Dedikasi**:
  - Komitmen membentuk tim kerja yang solid, berkarakter, berdaya saing, dan berintegritas tinggi melalui metode *Experiential Learning*.
- **Section 4 Pilar Mutu & Keunggulan**:
  1. *Safety First Standard*: Perlengkapan standar internasional dan mitigasi risiko tinggi.
  2. *Instruktur Bersertifikat BNSP*: Fasilitator berlisensi resmi dengan jam terbang ribuan peserta.
  3. *Impactful Programs*: Permainan yang memiliki makna psikologis dan evaluasi debrief mendalam.
  4. *Hospitality Prima*: Pendampingan ramah, konsumsi higienis, dan koordinasi teratur.
- **Section Fasilitator & Tim Lapangan**:
  - Foto dokumentasi tim fasilitator, instruktur games, tim medis darurat, dan tim rescue adventure.
- **Section CTA Konsultasi**:
  - Tombol penghubung konsultasi jadwal dan ketersediaan lokasi outbound.

---

### 2.3 Halaman Indeks Layanan (`/layanan`)
Halaman katalog layanan outbound yang tersusun rapi dan informatif.
- **Breadcrumb Navigasi**: `Beranda > Layanan`.
- **Hero Section Layanan**: Headline dan penjelasan cakupan program luar ruang untuk berbagai skala organisasi.
- **Grid Card Layanan Utama**:
  - *Outbound Perusahaan (Corporate Team Building & Capacity Building)*.
  - *Family Gathering (Rekreasi Keluarga & Komunitas)*.
  - *Outbound Sekolah (LDKS, Karakter Mandiri & Edukasi Lingkungan)*.
  - *Wisata Adventure (Rafting Sungai, Offroad Jeep 4x4, Paintball, & Camping)*.
  - Setiap card memuat foto sampul, ikhtisar manfaat, target peserta, dan tombol menuju rincian layanan.
- **Section CTA Khusus**: Ajakan konsultasi program kustom (Custom Program) sesuai tujuan khusus perusahaan.

---

### 2.4 Halaman Detail Layanan Spesifik (`/layanan/[slug]`)
Halaman rincian mendalam untuk masing-masing layanan:
- `/layanan/outbound-perusahaan`
- `/layanan/family-gathering`
- `/layanan/outbound-sekolah`
- `/layanan/wisata-adventure`
- `/layanan/outbound-wisata`

**Rincian Section di Setiap Halaman Detail Layanan**:
- **Hero Section Khusus Layanan**: Bersih dari tombol yang mengganggu, menonjolkan judul program, tagar kategori, dan foto banner tematik.
- **Section Gambaran Umum (Overview Program)**: Penjelasan mendalam mengenai esensi dan metodologi pelaksanaan program.
- **Section Sasaran Audiens (Target Participants)**: Penjelasan spesifik siapa saja yang cocok mengikuti program ini (misal: Divisi Kerja, BUMN, Pelajar, Keluarga Besar).
- **Section Nilai Tambah & Manfaat (Key Benefits)**: Rincian manfaat nyata yang didapat peserta pasca mengikuti kegiatan.
- **Section Modul Aktivitas (Activities Breakdown)**: Tahapan permainan mulai dari Ice Breaking, Group Dynamic, Problem Solving Challenge, hingga Sesi Refleksi / Debriefing.
- **Section Pilihan Format Paket**: Card proporsional berisi format paket yang direkomendasikan dengan icon modern (bukan emoji) dan tata letak yang rapi.
- **Section Rekomendasi Lokasi / Venue**: Catatan opsi tempat terbaik di Batu Malang yang mendukung aktivitas layanan ini.
- **Section FAQ Terkait Layanan**: Tanya jawab spesifik program tersebut.
- **Section CTA Konsultasi**: Tombol WhatsApp yang otomatis menyertakan nama layanan yang sedang dibuka di pesan pembuka calon klien.

---

### 2.5 Halaman Indeks Paket Outbound & Kategori (`/paket` & `/paket/[category]`)
Halaman daftar paket siap pilih yang memudahkan calon klien membandingkan durasi, fasilitas, dan jenis kegiatan.
- **Daftar URL Kategori**:
  - `/paket` (Semua Paket)
  - `/paket/perusahaan` (Paket Korporat)
  - `/paket/family-gathering` (Paket Keluarga)
  - `/paket/sekolah` (Paket Pelajar & Siswa)
  - `/paket/wisata-adventure` (Paket Petualangan)
- **Hero Section**: Judul pencarian paket outbound hemat dan premium.
- **Grid Card Paket**:
  - Foto utama paket resolusi tinggi.
  - Badge kategori & status populer (*Featured*).
  - Judul paket, durasi (misal: *1 Hari Penuh*, *2 Hari 1 Malam*, *Halfday 4 Jam*).
  - Ringkasan fasilitas yang sudah didapat (Fasilitator, Sound System, Banner Kegiatan, Air Mineral, Tiket Masuk).
  - Tombol aksi:
    - **"Konsultasi Paket Ini"** (terhubung langsung ke nomor WhatsApp dengan parameter nama paket).
    - **"Detail Paket"** (menampilkan rundown dan spesifikasi lengkap).

---

### 2.6 Halaman Detail Paket Outbound (`/paket/detail/[slug]` & `/paket/[category]/[slug]`)
Halaman presentasi paket secara komprehensif untuk memudahkan presentasi calon panitia ke pimpinan atau manajemen.
- **Breadcrumb & Identitas Paket**: Kategori, durasi, dan nama paket.
- **Visual Showcase**: Foto dokumentasi paket dan galeri visual pendukung.
- **Ikhtisar & Deskripsi Program**: Konsep pelatihan dan sasaran outbound.
- **Tabel Rundown Jadwal Acara (Itinerary Timeline)**:
  - Jam pelaksanaan, nama sesi kegiatan, dan deskripsi detail per menit kegiatan di lapangan.
- **Fasilitas Termasuk (Included Features)**:
  - Checklist lengkap fasilitas yang didapat (Tiket venue, Fasilitator games, Instruktur, Perlengkapan outbound, Kotak P3K, Sound system portable, Air mineral, Makan siang / coffee break).
- **Opsi Fasilitas Tambahan (Optional Add-ons)**:
  - Opsi tambahan seperti: Hiburan Live Music / Electone, Dokumentasi Foto & Video Drone, Kaos Seragam Custom, Kambing Guling & Barbeque, Souvenir Khas Batu.
- **Sidebar Reservasi Cepat**:
  - Tombol WhatsApp otomatis terisi format pemesanan (*Nama Paket*, *Perkiraan Tanggal*, dan *Jumlah Peserta*).
  - Estimasi bujet fleksibel yang dapat disesuaikan dengan anggaran instansi.
- **Rekomendasi Paket Terkait**: Pilihan alternatif paket sejenis.

---

### 2.7 Halaman Galeri Dokumentasi (`/galeri`)
Pusat dokumentasi visual pembuktian portofolio kegiatan outbound di lapangan.
- **Hero Galeri**: Judul dan penjelasan keaslian dokumentasi kegiatan klien kami.
- **Filter Kategori Interaktif**:
  - Tombol filter cepat: *Semua*, *Perusahaan*, *Family Gathering*, *Sekolah*, dan *Wisata Adventure*.
- **Grid Masonry Responsif**: Susunan foto dengan resolusi tajam, rasio proporsional, dan efek hover interaktif.
- **Lightbox Pratinjau Gambar Penuh (Fullscreen Modal)**:
  - Klik pada foto membuka tampilan resolusi penuh beserta caption kegiatan dan deskripsi alt text SEO.

---

### 2.8 Halaman Blog & Artikel Edukasi (`/blog`)
Kanal informasi dan optimasi SEO Organik untuk menjangkau pencarian Google terkait outbound di Malang Raya.
- **Hero Blog**: Judul artikel tips, inspirasi, dan panduan gathering.
- **Grid Kartu Artikel**:
  - Thumbnail gambar berformat WebP ringan.
  - Tag kategori artikel.
  - Judul artikel ramah SEO.
  - Cuplikan isi (*excerpt*).
  - Info penulis (*Author*) dan estimasi waktu baca (*Reading Time*).
  - Tautan *"Baca Selengkapnya"*.

---

### 2.9 Halaman Baca Artikel Blog (`/blog/[slug]`)
Halaman artikel lengkap yang dirancang sesuai panduan Google Search Console (SEO Modern):
- **Header Artikel**: Judul H1 SEO, kategori, tanggal terbit, waktu baca, serta profil penulis resmi (lengkap dengan foto avatar dan bio profesional).
- **Answer First Box**: Kotak ringkasan cepat 2–3 kalimat di awal artikel untuk merebut posisi *Featured Snippet* di Google.
- **Table of Contents (TOC) Interaktif**: Daftar isi artikel yang otomatis mengarahkan pembaca ke sub-judul yang diinginkan.
- **Konten Artikel Utama**: Tipografi mudah dibaca dengan pemformatan sub-judul (H2, H3), kutipan, dan gambar pendukung.
- **Summary Points**: Rangkuman poin-poin kesimpulan penting dari artikel.
- **FAQ Schema Box**: Tanya jawab seputar topik artikel yang terintegrasi dengan Structured Data Schema.org untuk Rich Snippet Google.
- **Tombol Berbagi (Share Buttons)**: WhatsApp, Facebook, Twitter/X, LinkedIn, dan Salin Tautan.
- **Widget Promo Paket Outbound Terkait**: Banner konversi paket outbound yang relevan dengan topik artikel.
- **Rekomendasi Artikel Terkait**: Tautan 3 artikel edukasi lainnya.

---

### 2.10 Halaman Testimoni Klien (`/testimoni`)
Halaman ulasan kepuasan pelanggan (*Social Proof*).
- **Hero Testimoni**: Headline komitmen kepuasan dan keselamatan peserta.
- **Grid Kartu Ulasan Klien**:
  - Tampilan rating bintang (5/5).
  - Nama klien, logo perusahaan atau foto perwakilan panitia.
  - Kutipan ulasan asli pengalaman beraktivitas bersama tim fasilitator.
  - Tanggal pelaksanaan kegiatan.
  - Badge Verifikasi Pelanggan.
- **Section Ajakan Bergabung**: Banner ajakan untuk menjadi mitra kegiatan berikutnya.

---

### 2.11 Halaman FAQ (Tanya Jawab - `/faq`)
Halaman jawaban komprehensif atas keraguan umum calon pemesan.
- **Hero FAQ**: Headline pusat informasi dan bantuan reservasi.
- **Accordion Interaktif**:
  - Pengelompokan kategori pertanyaan: Teknis Pemesanan, Sistem Pembayaran & DP, Rekomendasi Lokasi & Venue, SOP Cuaca Hujan, Standar Medis & Keselamatan, serta Kebijakan Pembatalan / Reschedule.
  - Fitur buka-tutup halus (*smooth collapse/expand*).
- **Kotak Bantuan Tambahan**: Tautan direct WhatsApp jika ada pertanyaan spesifik yang belum terjawab di halaman.

---

### 2.12 Halaman Kontak & Lokasi (`/kontak`)
Pusat komunikasi resmi calon pelanggan dengan tim marketing & operasional.
- **Hero Kontak**: Judul dan sapaan ramah layanan konsultasi 24/7.
- **Kartu Informasi Kontak Resmi**:
  - **WhatsApp Resmi**: Dilengkapi logo WhatsApp modern dan tombol interaktif yang langsung membuka chat.
  - **Email Resmi**: Untuk pengiriman surat penawaran (*proposal sponsorship/corporate request*).
  - **Jam Operasional Pelayanan**: Waktu operasional tim reservasi (08:00 – 21:00 WIB).
  - **Alamat Kantor Basecamp**: Lokasi representatif di Kota Batu & Malang Raya.
- **Formulir Konsultasi / Inquiry Online**:
  - Field input: Nama Lengkap, Nama Instansi / Perusahaan, Nomor WhatsApp Aktif, Estimasi Tanggal Acara, Perkiraan Jumlah Peserta, Pilihan Program yang Diminati, serta Catatan Tambahan.
  - Data yang dikirim otomatis tersimpan ke sistem **Leads Admin** untuk ditindaklanjuti.
- **Section Kanal Resmi Media Sosial**:
  - Tombol-tombol berukuran seragam dan selaras untuk YouTube, Instagram, Facebook, dan TikTok.
- **Peta Lokasi Google Maps Interaktif**: Embed peta resmi menuju kantor operasional dan titik kumpul outbound di Batu Malang.

---

### 2.13 Halaman Legalitas (Syarat & Ketentuan, Kebijakan Privasi)
- `/syarat-ketentuan`: Memuat ketentuan teknis uang muka (DP), pelunasan, hak dan kewajiban peserta, mitigasi force majeure (bencana alam/cuaca ekstrem), dan standar keselamatan.
- `/kebijakan-privasi`: Menjelaskan perlindungan data pribadi formulir kontak, kepatuhan privasi nomor WhatsApp klien, dan penggunaan cookie analytics.

---

### 2.14 Komponen Global Frontend
Komponen yang hadir di seluruh halaman untuk kenyamanan pengguna:
- **Floating WhatsApp Button**: Tombol mengambang di pojok kanan bawah dengan icon WhatsApp modern dan pesan pembuka otomatis.
- **Tombol Back to Top**: Memudahkan pengguna kembali ke bagian atas halaman dalam 1 klik.
- **Structured Data SEO Schema**: Menginjeksi *LocalBusiness*, *BreadcrumbList*, *Article*, dan *FAQPage* JSON-LD untuk peringkat maksimal di mesin pencari Google.
- **Real-Time Client Hydration**: Skrip pintar yang mendeteksi perubahan data dari dashboard admin secara instan tanpa perlu rebuild situs.

---

## 3. BACKEND: FITUR CMS DASHBOARD ADMIN

Dashboard Admin adalah pusat kendali penuh (Full Control Management System) yang dapat diakses melalui URL `/admin`. Sistem ini mengimplementasikan kemampuan CRUD (*Create, Read, Update, Delete*) pada seluruh halaman dan data master.

### 3.1 Sistem Autentikasi & Keamanan Sesi (`/admin/login`)
- **Proteksi Halaman**: Seluruh halaman `/admin/*` terlindungi otentikasi. Akses tanpa login akan otomatis dialihkan ke halaman login.
- **Form Login Modern**: Menggunakan otentikasi email dan kata sandi dengan verifikasi instan.
- **Penyimpanan Sesi Aman**: Pengelolaan sesi berbasis token lokal dengan opsi *Remember Me*.
- **Tombol Logout Aman**: Menghapus sesi aktif dan mengembalikan pengguna ke halaman publik.

---

### 3.2 Dashboard Utama (Overview & Statistik - `/admin`)
- **Widget Statistik Real-time**:
  - Total Paket Outbound Aktif.
  - Total Layanan Tersedia.
  - Total Artikel Blog Terbit.
  - Total Leads / Konsultasi Masuk.
  - Status Sinkronisasi Cloud Supabase (Online / Terhubung).
- **Aksi Cepat (Quick Actions)**:
  - Pintasan 1-klik: *Tambah Paket Baru*, *Tulis Artikel SEO*, *Kelola Leads Masuk*, *Edit Halaman Beranda*, dan *Lihat Website Live*.
- **Tabel Leads Masuk Terbaru**: Menampilkan 5 permintaan konsultasi paling baru lengkap dengan tombol aksi cepat hubungi ke WhatsApp klien.
- **Log Aktivitas Pembaruan Terkini**.

---

### 3.3 Master Editor Halaman Section-by-Section (`/admin/halaman`)
Pusat pengelolaan seluruh halaman web:
- Menampilkan daftar tabel seluruh halaman (Beranda, Tentang Kami, Layanan, Kontak, Legalitas, dsb.).
- Filter pencarian cepat nama halaman atau URL slug.
- Status publikasi halaman (*Published* / *Draft*).
- Tombol **"+ Buat Halaman Baru"** untuk pembuatan landing page kustom di masa depan.
- Tombol aksi: **Edit Section Halaman** dan **Pratinjau Live**.

---

### 3.4 Editor Khusus Halaman Beranda & Kontrol Gambar (`/admin/halaman/beranda`)
Editor terlengkap yang memungkinkan admin mengubah teks, tombol, hingga **gambar di setiap section Beranda**:
- **01. Head & Meta SEO**: Pengaturan Judul Tab Halaman, Deskripsi Meta Pencarian, Kata Kunci SEO, dan Gambar Open Graph (OG Image) untuk share WhatsApp/Facebook.
- **02. Hero Section**:
  - Ganti Teks Headline & Sub-headline.
  - Ganti Teks Badge Sertifikasi BNSP.
  - Ganti Gambar Banner Hero / Latar Belakang Hero.
  - Atur Teks & Tautan Tombol CTA WhatsApp dan Tombol Paket.
  - Atur Angka Counter Statistik (500+ Klien, 10+ Tahun, 4.9 Rating).
- **03. Section About Us Preview**:
  - Atur Judul Section, Subtitle, dan Narasi Profil Provider di Batu Malang.
  - Ganti Gambar Utama Section About Us.
  - Atur Label & Tautan Tombol Selengkapnya.
- **04. Section Services Highlight**:
  - Atur Judul dan Teks Pengantar Layanan Unggulan.
- **05. Section Mengapa Memilih Kami**:
  - Edit 4 Kartu Keunggulan (Judul, Deskripsi, dan Pilihan Icon Modern).
- **06. Section 4 Kategori Utama**:
  - Atur Teks & Ganti Gambar Cover masing-masing kategori (*Perusahaan*, *Family Gathering*, *Sekolah*, *Wisata Adventure*).
- **07. Section Paket Pilihan**:
  - Atur Judul Intro dan Deskripsi Ajakan Pemilihan Paket.
- **08. Section Destinasi Wisata Batu Malang**:
  - Kelola Foto Destinasi, Nama Lokasi, Ketinggian, dan Deskripsi Keistimewaan Alam.
- **09. Section Galeri Preview**:
  - Atur Headline dan Deskripsi Galeri di Beranda.
- **10. Section Blog Preview**:
  - Atur Headline dan Teks Pengantar Artikel Terbaru.
- **11. Section Testimoni Klien**:
  - Atur Headline dan Subtitle Section Ulasan.
- **12. Section FAQ Accordion**:
  - Atur Headline Tanya Jawab di Beranda.
- **13. Section CTA Banner Penutup**:
  - Ganti Gambar Latar Belakang CTA Banner.
  - Edit Judul Ajakan Booking dan Teks Tombol WhatsApp.

---

### 3.5 Editor Khusus Halaman Tentang Kami (`/admin/halaman/tentang-kami`)
- **01. Head & Meta SEO**: Judul SEO dan Deskripsi untuk halaman profil.
- **02. Hero Section Tentang Kami**:
  - Headline utama penegasan provider outbound terbaik di Kota Batu dan Malang Raya.
  - Paragraf narasi keunggulan dan integritas layanan.
  - Kontrol ganti Gambar Banner Hero Tentang Kami.
- **03. Profil Perusahaan & Sejarah**:
  - Narasi sejarah pengalaman lebih dari 10 tahun mendampingi ratusan instansi.
- **04. 4 Pilar Mutu & Keunggulan**:
  - Edit judul dan uraian masing-masing pilar (*Safety First*, *Fasilitator BNSP*, *Impactful*, *Hospitality*).
- **05. Foto Dokumentasi Fasilitator & Tim**:
  - Kontrol unggah / URL gambar foto tim instruktur lapangan.
- **06. Visi, Misi & Komitmen Pelayanan**.

---

### 3.6 Editor Khusus Halaman Kontak (`/admin/halaman/kontak`)
- **01. Header Halaman Kontak**: Headline & deskripsi sapaan ramah.
- **02. Informasi Kontak Utama**:
  - Nomor WhatsApp resmi konsultasi (format internasional).
  - Teks nomor tampilan (misal: `+62 822-1122-1909`).
  - Alamat email resmi.
  - Jam kerja operasional.
- **03. Alamat Basecamp Batu Malang**: Teks alamat lengkap kantor operasional.
- **04. Gambar Basecamp & Banner Kontak**: Kontrol ganti foto gedung/basecamp outbound.
- **05. Google Maps Embed**: Form input URL/Iframe peta Google Maps lokasi kantor.
- **06. Tautan Kanal Sosial Media Resmi**: Pengaturan tautan profil Instagram, YouTube, TikTok, dan Facebook.

---

### 3.7 Editor Khusus Halaman Legalitas (`/admin/halaman/legal`)
- Edit teks isi pasal-pasal **Kebijakan Privasi**.
- Edit teks isi syarat, ketentuan DP, dan pembatalan pada **Syarat & Ketentuan**.

---

### 3.8 Manajemen CRUD Paket Outbound (`/admin/paket`)
Fitur pengelolaan inventaris paket outbound secara menyeluruh:
- **Tabel Daftar Paket**: Dilengkapi pencarian judul, filter kategori (*Perusahaan*, *Family*, *Sekolah*, *Adventure*), status *Featured*, dan harga.
- **Form Modal Tambah & Edit Paket Lengkap**:
  - *Kategori Paket*: Pilihan dropdown kategori utama.
  - *Judul Paket & Slug URL*: Judul komersial dan URL ramah SEO.
  - *Deskripsi Singkat (Excerpt)* & *Deskripsi Lengkap*.
  - *Durasi Kegiatan*: Misal: `1 Hari (08.00 - 16.00)`, `2 Hari 1 Malam`, `Halfday (4 Jam)`.
  - *Label Harga & Estimasi*: Pengaturan teks label bujet (misal: `Mulai Rp 150.000 / pax` atau `Hubungi CS`).
  - *Gambar Utama & Galeri Foto Tambahan*: Upload atau input URL gambar dokumentasi paket.
  - *Editor Dinamis Modul Aktivitas*: Tambah/hapus poin aktivitas seru dalam paket.
  - *Editor Dinamis Fasilitas Included*: Tambah/hapus item fasilitas yang didapat peserta.
  - *Editor Dinamis Opsi Add-ons*: Tambah/hapus fasilitas opsional berbayar (drone, electone, kaos, kambing guling).
  - *Editor Dinamis Rundown Acara*: Tambah/hapus rincian waktu, nama kegiatan, dan deskripsi acara dari jam ke jam.
  - *Switch Paket Featured*: Menjadikan paket tampil di halaman Beranda.
  - *Urutan Tampil (Sort Order)*.
- **Aksi Cepat**: Edit data, Duplikasi Paket, dan Hapus Paket.

---

### 3.9 Manajemen CRUD Layanan (`/admin/layanan`)
- **Tabel Daftar Layanan**: Mengelola 4 pilar layanan utama dan sub-layanan.
- **Form Tambah & Edit Layanan**:
  - *Judul Layanan & Slug URL*.
  - *Kutipan Singkat (Excerpt)* & *Ikhtisar Mendalam (Overview)*.
  - *Target Audiens*: Mendefinisikan profil kelompok peserta yang disasar.
  - *Daftar Manfaat (Key Benefits)*: Tambah/hapus poin keuntungan program.
  - *Daftar Aktivitas*: Tambah/hapus materi permainan dan simulasi.
  - *Catatan Rekomendasi Lokasi*: Penjelasan venue yang cocok di Batu Malang.
  - *Gambar Banner Layanan*: Pengaturan visual cover layanan.
  - *Status Featured & Urutan Tampil*.
- **Aksi Cepat**: Edit dan Hapus Layanan.

---

### 3.10 Manajemen CRUD Galeri Kegiatan (`/admin/galeri`)
- **Tabel & Grid Foto Dokumentasi**:
  - Menampilkan thumbnail foto, judul kegiatan, caption, kategori, dan dimensi gambar.
  - Filter pencarian judul dan filter berdasarkan kategori acara.
- **Form Tambah & Edit Foto**:
  - *Judul Kegiatan*.
  - *Kategori Foto*: Dropdown (Perusahaan, Family, Sekolah, Adventure).
  - *Caption & Alt Text SEO*: Penjelasan foto untuk kebutuhan aksesibilitas dan Google Image SEO.
  - *URL Gambar / Upload Foto*.
- **Fitur Pratinjau**: Membuka modal foto resolusi penuh sebelum disimpan.
- **Aksi Hapus Foto**.

---

### 3.11 Manajemen CRUD Blog & Artikel SEO (`/admin/blog`)
Pengelolaan artikel edukasi untuk mendominasi kata kunci outbound di mesin pencari:
- **Tabel Daftar Artikel**: Judul, kategori, penulis, tanggal rilis, dan status.
- **Form Editor Artikel SEO Komprehensif**:
  - *Judul Artikel & Slug URL*: Otomatis menghasilkan slug bersih ramah SEO.
  - *Kategori Artikel*: Panduan, Tips Outbound, Venue Batu, dsb.
  - *Profil Penulis (Author)*: Nama penulis, jabatan, URL avatar foto profil, dan biografi singkat.
  - *Thumbnail Gambar & Alt Text*: Gambar unggulan artikel.
  - *Fitur Answer First*: Form khusus pengisian 2–3 kalimat jawaban langsung untuk Google Featured Snippet.
  - *Isi Konten Artikel*: Editor teks format artikel lengkap.
  - *Summary Points*: Input poin-poin ringkasan kesimpulan artikel.
  - *FAQ Schema Generator*: Tambah/hapus daftar tanya jawab di akhir artikel yang otomatis diubah menjadi JSON-LD Schema.org.
  - *Meta SEO*: Judul SEO kustom, Deskripsi Meta Google, dan Canonical URL.
- **Aksi Cepat**: Tulis Baru, Edit Konten, dan Hapus Artikel.

---

### 3.12 Manajemen CRUD FAQ (`/admin/faq`)
- **Tabel Daftar Tanya Jawab**:
  - Filter berdasarkan target halaman (*Beranda*, *Paket*, *Layanan*, *Kontak*, atau *Semua*).
- **Form Tambah & Edit FAQ**:
  - *Pilihan Target Halaman*.
  - *Pertanyaan (Question)*.
  - *Jawaban Lengkap (Answer)*.
  - *Nomor Urutan Tampil (Sort Order)*.
- **Aksi Cepat**: Edit dan Hapus FAQ.

---

### 3.13 Manajemen CRUD Testimoni (`/admin/testimoni`)
- **Tabel Ulasan Klien**: Menampilkan nama instansi, rating bintang, kutipan ulasan, dan tanggal.
- **Form Tambah & Edit Testimoni**:
  - *Nama Klien / Perwakilan*.
  - *Nama Instansi / Perusahaan / Sekolah*.
  - *Foto Profil Klien / Logo Perusahaan*.
  - *Rating Bintang*: Pilihan 1 sampai 5 Bintang.
  - *Kutipan Ulasan Lengkap*.
  - *Tanggal Kegiatan Outbound*.
  - *Status Tampil (Publish / Hide)*.
- **Aksi Cepat**: Edit dan Hapus Testimoni.

---

### 3.14 Manajemen Leads & Konsultasi Masuk (`/admin/leads`)
Sistem pencatatan otomatis (*Mini CRM*) calon pelanggan yang masuk dari formulir website:
- **Filter & Pencarian**: Filter berdasarkan status dan pencarian nama atau nomor WhatsApp.
- **Tabel Data Calon Klien**:
  - Tanggal & Waktu Masuk Formulir.
  - Nama Calon Klien & Asal Instansi/Perusahaan.
  - Nomor WhatsApp Klien.
  - Program Outbound yang Diminati.
  - Perkiraan Jumlah Peserta & Rencana Lokasi.
  - Catatan Kebutuhan Khusus / Permintaan Khusus.
  - Status Pipeline: `Baru` → `Dihubungi` → `Follow-up` → `Selesai` → `Spam`.
- **Aksi Cepat "Chat WhatsApp"**:
  - 1-klik membuka WhatsApp Web / Aplikasi WhatsApp langsung ke nomor calon klien dengan draf pesan sapaan resmi yang sudah diformat rapi atas nama Provider Outbound.

---

### 3.15 Pengaturan Global, Tata Letak, Head, Navbar & Footer (`/admin/pengaturan`)
Pusat kendali konfigurasi global website yang dibagi ke dalam 5 tab praktis:
1. **Tab 01: Head & SEO Global**:
   - Meta Title Default Website.
   - Meta Description Pencarian Global.
   - Meta Keywords Global.
   - Domain Kanonikal (`https://provideroutbound.web.id`).
   - Favicon & Open Graph (OG) Image Utama.
2. **Tab 02: Tata Letak Navbar**:
   - Teks Logo Brand & Slogan.
   - Susunan Menu Navigasi (Label & URL link).
   - Label & Link Tombol CTA Utama di Navbar.
3. **Tab 03: Tata Letak Footer**:
   - Paragraf deskripsi legal di footer.
   - Pengaturan kolom tautan cepat navigasi.
   - Pengaturan kolom kategori paket outbound.
   - Teks hak cipta (*Copyright Notice*).
4. **Tab 04: Profil Bisnis & Kontak Terpadu**:
   - Nomor WhatsApp Utama (penerima konsultasi).
   - Teks Template Pesan Otomatis WhatsApp.
   - Alamat Email Resmi.
   - Alamat Lengkap Kantor Basecamp Batu Malang.
   - Jam Pelayanan Operasional.
   - Iframe Embed Google Maps Lokasi Kantor.
   - Tautan Akun Resmi Media Sosial (Instagram, YouTube, TikTok, Facebook).
5. **Tab 05: Sinkronisasi Cloud Supabase**:
   - Status koneksi database awan.
   - Tombol **"Tarik Data dari Cloud"** (Pull from Supabase).
   - Tombol **"Kirim Data Lokal ke Cloud"** (Push to Supabase).
   - Backup Snapshot & Restore JSON data situs.

---

### 3.16 Manajemen Profil Admin (`/admin/profil`)
- Mengubah Nama Lengkap Administrator.
- Mengubah Email Kontak Admin.
- Mengubah Foto Profil / Avatar Administrator (dengan ring visual bertema Pine & Sage).
- Mengubah Kata Sandi (*Password*) Login Dashboard dengan verifikasi konfirmasi sandi.

---

## 4. ARSITEKTUR SINKRONISASI DATA & REALTIME CLOUD ENGINE

Sistem ini dirancang menggunakan arsitektur **Hybrid Dual-Store**:

```
+-----------------------------------------------------------+
|                   DASHBOARD ADMIN (CMS)                   |
|  - Pengaturan Global, SEO, Halaman, Paket, Layanan, dll   |
+-----------------------------------------------------------+
                             |
             [Update Data / Simpan Perubahan]
                             v
+-----------------------------------------------------------+
|             LOCAL STORAGE ENGINE (Browser Cache)          |
|  Menyimpan seluruh data seketika dengan respon 0-latency  |
+-----------------------------------------------------------+
         |                                           |
         v                                           v
[BroadcastChannel / Event]               [Background Async Sync]
         |                                           |
         v                                           v
+-----------------------------+             +-------------------------------+
|   FRONTEND PUBLIC WEBSITE   |             |   SUPABASE CLOUD DATABASE     |
|   Hydration Instan Otomatis |             |   Penyimpanan permanen di     |
|   tanpa perlu refresh/build |             |   PostgreSQL Cloud                |
+-----------------------------+             +-------------------------------+
```

1. **Kecepatan Instan (Zero Latency)**: Saat admin menekan tombol simpan, data langsung ditulis ke penyimpanan lokal sehingga admin tidak mengalami loading lama.
2. **Sinkronisasi Otomatis ke Cloud (Supabase PostgreSQL)**: Data secara otomatis dikirim ke tabel Supabase di awan untuk menjamin data tersimpan permanen dan aman.
3. **Frontend Live Hydration**: Begitu ada perubahan di dashboard admin, script frontend (`PublicLayout.astro` & `applyFrontendHydration`) langsung memperbarui tampilan teks, harga, nomor telepon, dan gambar pada halaman web pengguna tanpa perlu me-rebuild atau deploy ulang website.
4. **BroadcastChannel Cross-Tab**: Jika admin membuka website publik di tab sebelah sambil mengedit di tab dashboard, perubahan langsung terlihat seketika secara real-time.

---

## 5. RINGKASAN KEUNGGULAN PLATFORM

| Aspek Keunggulan | Deskripsi Implementasi |
| :--- | :--- |
| **Kecepatan Akses (Lighthouse)** | Dibangun dengan Astro 5 Static Generation, menghasilkan skor performa sangat tinggi di seluler dan desktop. |
| **SEO Terstruktur (Rich Results)** | Terintegrasi lengkap dengan Schema.org (*LocalBusiness*, *Article*, *FAQPage*, *BreadcrumbList*) untuk hasil pencarian Google yang kaya. |
| **Kemudahan Admin (CMS Lengkap)** | Admin dapat mengontrol 100% isi website dari Head SEO, Navbar, konten per-section, gambar, hingga Footer tanpa perlu keahlian koding. |
| **Konversi Penjualan (Lead Generation)** | Setiap paket dan layanan terhubung langsung dengan tombol WhatsApp resmi yang otomatis terisi pesan pesanan, ditambah formulir reservasi online dengan manajemen status lead. |
| **Keamanan & Keandalan** | Dashboard terproteksi login sandi, database tersinkronisasi ke cloud Supabase, dan dilengkapi cadangan snapshot JSON. |

---
*Dokumen ini dibuat secara resmi untuk dokumentasi fitur dan panduan operasional Project MKI (Magang Kerja Industri) - Vendor Outbound ID.*

