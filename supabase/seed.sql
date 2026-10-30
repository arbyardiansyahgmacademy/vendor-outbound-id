-- Seed data awal untuk Vendor Outbound (vendoroutbound.id)
-- Wilayah layanan: Batu & Malang, Jawa Timur
-- Kontak resmi: +62 822-1122-1909
-- Seluruh data mematuhi ketentuan PRD tanpa mengarang klaim palsu atau harga sepihak

-- 1. Site Settings
INSERT INTO site_settings (key, value) VALUES
('general', '{
  "brand_name": "Vendor Outbound",
  "tagline": "Spesialis Outbound, Gathering & Adventure di Batu - Malang",
  "domain": "https://vendoroutbound.id",
  "whatsapp": "6282211221909",
  "whatsapp_display": "+62 822-1122-1909",
  "default_wa_message": "Halo Vendor Outbound, saya ingin konsultasi kegiatan outbound/gathering di area Batu - Malang.",
  "service_areas": ["Kota Batu", "Malang Raya", "Pujon", "Kasembon"],
  "email": "",
  "office_address": "Batu & Malang, Jawa Timur",
  "operating_hours": "08:00 - 21:00 WIB"
}'::jsonb),
('navbar', '{
  "logo_text": "VENDOR OUTBOUND",
  "cta_text": "Konsultasi WA",
  "cta_url": "https://wa.me/6282211221909?text=Halo%20Vendor%20Outbound%2C%20saya%20ingin%20konsultasi%20paket%20outbound",
  "items": [
    {"label": "Beranda", "url": "/"},
    {"label": "Tentang Kami", "url": "/tentang-kami"},
    {"label": "Layanan", "url": "/layanan"},
    {
      "label": "Paket",
      "url": "/paket",
      "children": [
        {"label": "Outbound Perusahaan", "url": "/paket/perusahaan"},
        {"label": "Family Gathering", "url": "/paket/family-gathering"},
        {"label": "Outbound Sekolah", "url": "/paket/sekolah"},
        {"label": "Wisata & Adventure", "url": "/paket/wisata-adventure"}
      ]
    },
    {"label": "Galeri", "url": "/galeri"},
    {"label": "Blog", "url": "/blog"},
    {"label": "Kontak", "url": "/kontak"}
  ]
}'::jsonb),
('footer', '{
  "brand_description": "Mitra profesional penyedia program outbound, corporate team building, family gathering, outbound edukasi sekolah, dan wisata petualangan di kawasan sejuk Batu dan Malang, Jawa Timur.",
  "copyright_text": "Vendor Outbound. Hak Cipta Dilindungi.",
  "legal_links": [
    {"label": "Kebijakan Privasi", "url": "/kebijakan-privasi"},
    {"label": "Syarat & Ketentuan", "url": "/syarat-ketentuan"}
  ]
}'::jsonb)
ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value;

-- 2. Services
INSERT INTO services (title, slug, excerpt, content, image_url, target_audience, benefits, activities, status, featured, sort_order)
VALUES
(
  'Outbound Perusahaan',
  'outbound-perusahaan',
  'Program penguatan sinergi tim, leadership, dan komunikasi efektif untuk perusahaan dan institusi di Batu–Malang.',
  '{"overview": "Program outbound korporat dirancang khusus untuk meningkatkan kekompakan tim, kepemimpinan adaptif, problem solving, dan penyegaran suasana kerja di tengah udara sejuk pegunungan Batu - Malang.", "location_note": "Pilihan lokasi meliputi kawasan hutan pinus, resort outbound, dan area terbuka alami di Batu dan Malang."}'::jsonb,
  '/images/services/outbound-perusahaan.webp',
  'Perusahaan, BUMN, Instansi Pemerintah, Startup, dan Divisi Organisasi',
  '["Meningkatkan keakraban & soliditas tim lintas divisi", "Mengasah kepemimpinan & pemecahan masalah bersama", "Mengurangi kejenuhan kerja dengan suasana pegunungan sejuk", "Membangun budaya komunikasi terbuka dan sportif"]'::jsonb,
  '["Ice Breaking & Energizer", "Team Dynamic Simulation", "Trust & Synergy Challenges", "Strategic Problem Solving", "Debrief & Value Reflection"]'::jsonb,
  'published',
  true,
  1
),
(
  'Family Gathering',
  'family-gathering',
  'Kegiatan rekreasi santai dan hangat yang mempererat hubungan keluarga besar karyawan atau komunitas di alam terbuka.',
  '{"overview": "Family gathering memadukan suasana riang, permainan interaktif segala usia mulai anak-anak hingga dewasa, dan kehangatan kebersamaan di destinasi asri Batu Malang.", "location_note": "Dilaksanakan di venue ramah anak dan keluarga dengan fasilitas memadai."}'::jsonb,
  '/images/services/family-gathering.webp',
  'Keluarga Karyawan Perusahaan, Komunitas Warga, Perkumpulan Alumni & Paguyuban',
  '["Mempererat tali silaturahmi antar anggota keluarga", "Permainan ramah anak dan lansia yang menyenangkan", "Suasana santai tanpa beban kerja", "Dokumentasi kebersamaan yang hangat"]'::jsonb,
  '["Fun Games Keluarga", "Kids Play Area & Games", "Lomba Kekompakan Pasangan & Keluarga", "Panggung Kebersamaan & Doorprize", "Piknik Santai di Alam"]'::jsonb,
  'published',
  true,
  2
),
(
  'Outbound Sekolah',
  'outbound-sekolah',
  'Pembentukan karakter mandiri, kepemimpinan pelajar, dan edukasi alam untuk SD, SMP, SMA hingga perguruan tinggi.',
  '{"overview": "Program edukatif luar ruang yang menitikberatkan pada penanaman nilai budi pekerti, kemandirian, kepemimpinan dasar (LDKS), dan kepedulian terhadap kelestarian lingkungan alam.", "location_note": "Area perkemahan aman dan bumi perkemahan edukatif di kawasan Batu."}'::jsonb,
  '/images/services/outbound-sekolah.webp',
  'Siswa SD, Pelajar SMP/SMA/SMK, Pengurus OSIS/MPK, dan Mahasiswa',
  '["Menumbuhkan kemandirian dan rasa tanggung jawab siswa", "Melatih jiwa kepemimpinan dan empati sosial", "Memberikan edukasi pelestarian lingkungan secara langsung", "Membangun kekompakan angkatan belajar"]'::jsonb,
  '["Character Building Games", "LDKS Leadership Simulation", "Edukasi Ekosistem & Pertanian Organik", "Jungle Trekking & Observasi Alam", "Refleksi Mandiri & Komitmen Diri"]'::jsonb,
  'published',
  true,
  3
),
(
  'Wisata & Adventure',
  'wisata-adventure',
  'Petualangan pemacu adrenalin mulai dari rafting arus deras, offroad jeep 4x4 lereng pegunungan, hingga camping seru.',
  '{"overview": "Kombinasi kegiatan petualangan alam terbuka yang menantang namun aman dengan pendamping instruktur bersertifikat dan perlengkapan standar keselamatan tinggi.", "location_note": "Sungai Kaliwatu, Kasembon Rafting, Lereng Gunung Arjuno, dan Coban Talun."}'::jsonb,
  '/images/services/wisata-adventure.webp',
  'Komunitas Hobi, Perusahaan Penyuka Tantangan, Wisatawan Petualang & Kelompok Teman',
  '["Sensasi petualangan berkesan di alam terbuka Batu Malang", "Peralatan berstandar safety dengan briefing ketat", "Instruktur & pemandu berpengalaman di tiap jalur", "Dokumentasi momen aksi petualangan"]'::jsonb,
  '["Rafting Arus Deras Seru", "Offroad Jeep 4x4 Melintasi Hutan & Sungai", "Camping Ground di Bawah Bintang", "Paintball War Strategy Simulation"]'::jsonb,
  'published',
  true,
  4
)
ON CONFLICT (slug) DO NOTHING;

-- 3. Package Categories
INSERT INTO package_categories (id, name, slug, description, sort_order, status)
VALUES
('b3a31c51-5e28-4ef9-bb43-d2d480e60801', 'Perusahaan', 'perusahaan', 'Program team building dan corporate gathering di Batu Malang', 1, 'active'),
('b3a31c51-5e28-4ef9-bb43-d2d480e60802', 'Family Gathering', 'family-gathering', 'Paket gathering santai dan akrab untuk keluarga besar', 2, 'active'),
('b3a31c51-5e28-4ef9-bb43-d2d480e60803', 'Sekolah', 'sekolah', 'Outbound edukasi, pembentukan karakter, dan LDKS pelajar', 3, 'active'),
('b3a31c51-5e28-4ef9-bb43-d2d480e60804', 'Wisata & Adventure', 'wisata-adventure', 'Petualangan rafting, jeep 4x4, camping, dan paintball di Batu', 4, 'active')
ON CONFLICT (slug) DO NOTHING;

-- 4. Packages
INSERT INTO packages (category_id, title, slug, excerpt, image_url, activities, features, duration, price_label, featured, status, sort_order)
VALUES
-- Perusahaan
('b3a31c51-5e28-4ef9-bb43-d2d480e60801', 'Team Building', 'team-building', 'Fokus pada peningkatan kerja sama, komunikasi efektif, dan kepercayaan antar anggota tim kerja.', '/images/packages/team-building.webp', '["Ice Breaking", "Group Dynamic", "Effective Communication Games", "Synergy Problem Solving"]'::jsonb, '["Instruktur Berpengalaman", "Peralatan Games Lengkap", "Sound System Outdoor", "Air Mineral Selama Kegiatan"]'::jsonb, '1 Hari (Full Day / Half Day)', 'Konsultasikan kebutuhan paket', true, 'published', 1),
('b3a31c51-5e28-4ef9-bb43-d2d480e60801', 'Fun Games', 'fun-games', 'Aktivitas outbound ringan dan ceria untuk penyegaran suasana tanpa tekanan fisik berat.', '/images/packages/fun-games.webp', '["Cheerful Ice Breaking", "Fun Relay Games", "Water Challenge Bersama", "Panggung Ceria"]'::jsonb, '["Fasilitator Ramah", "Property Games Kreatif", "First Aid Kit", "Dokumentasi Foto"]'::jsonb, 'Setengah Hari (Half Day)', 'Konsultasikan kebutuhan paket', true, 'published', 2),
('b3a31c51-5e28-4ef9-bb43-d2d480e60801', 'Leadership Camp', 'leadership-camp', 'Program intensif pembentukan jiwa kepemimpinan strategis, pengambilan keputusan, dan ketahanan mental.', '/images/packages/leadership-camp.webp', '["Night Leadership Journey", "Survival Simulation", "Crisis Management", "Action Plan Workshop"]'::jsonb, '["Modul Leadership Khusus", "Trainer Dedikatif", "Akomodasi Perkemahan/Villa", "Konsumsi Lengkap"]'::jsonb, '2 Hari 1 Malam', 'Konsultasikan kebutuhan paket', false, 'published', 3),
('b3a31c51-5e28-4ef9-bb43-d2d480e60801', 'Corporate Gathering', 'corporate-gathering', 'Kombinasi temu tahunan perusahaan, malam kebersamaan, dan aktivitas outbound berkesan.', '/images/packages/corporate-gathering.webp', '["Outbound Team Building", "Gala Dinner Kebersamaan", "Live Music / Entertainment", "Awarding Session"]'::jsonb, '["Pendampingan Event Organizer", "Sewa Venue Rekomendasi", "Dekorasi Panggung", "Dokumentasi Foto & Video"]'::jsonb, '2 Hari 1 Malam / 1 Hari', 'Konsultasikan kebutuhan paket', true, 'published', 4),

-- Family Gathering
('b3a31c51-5e28-4ef9-bb43-d2d480e60802', 'Paket Hemat', 'paket-hemat', 'Pilihan efisien dan hangat untuk gathering keluarga dengan fasilitas inti lengkap.', '/images/packages/paket-hemat.webp', '["Fun Games Ringan", "Senam Bersama", "Game Anak", "Foto Bersama"]'::jsonb, '["Fasilitator Game", "Peralatan Sederhana", "Air Mineral", "Sound Standar"]'::jsonb, 'Half Day', 'Konsultasikan kebutuhan paket', false, 'published', 5),
('b3a31c51-5e28-4ef9-bb43-d2d480e60802', 'Paket Standard', 'paket-standard', 'Paket favorit dengan rangkaian aktivitas beragam dan makan siang prasmanan nusantara.', '/images/packages/paket-standard.webp', '["Ice Breaking", "Family Synergy Games", "Kids Corner", "Doorprize Support"]'::jsonb, '["Fasilitator & Kru Lapangan", "Makan Siang & Snack", "Dokumentasi Kegiatan", "Banner Acara"]'::jsonb, 'Full Day', 'Konsultasikan kebutuhan paket', true, 'published', 6),
('b3a31c51-5e28-4ef9-bb43-d2d480e60802', 'Paket Premium', 'paket-premium', 'Fasilitas premium dengan venue eksklusif resort Batu dan suguhan hiburan lengkap.', '/images/packages/paket-premium.webp', '["Fun Games Komprehensif", "Kids Activity & Edukasi", "Live Acoustic Music", "Makan Siang Spesial"]'::jsonb, '["Venue Pilihan Terbaik", "Dokumentasi Lengkap", "Souvenir/Goodie Bag Opsional", "Fasilitator Ramah"]'::jsonb, 'Full Day / Menginap', 'Konsultasikan kebutuhan paket', false, 'published', 7),
('b3a31c51-5e28-4ef9-bb43-d2d480e60802', 'Paket Custom', 'paket-custom', 'Disesuaikan sepenuhnya dengan rancangan kebutuhan, anggaran, dan tema keluarga Anda.', '/images/packages/paket-custom.webp', '["Agenda Menyesuaikan Permintaan", "Aktivitas Fleksibel Sesuai Usia"]'::jsonb, '["Konsultasi Gratis Rencana Acara", "Pilihan Lokasi Sesuai Keinginan", "Fasilitas Dapat Disesuaikan"]'::jsonb, 'Fleksibel', 'Konsultasikan kebutuhan paket', false, 'published', 8),

-- Sekolah
('b3a31c51-5e28-4ef9-bb43-d2d480e60803', 'Outbound Pelajar', 'outbound-pelajar', 'Membangun keakraban kelas, sportivitas, dan kegembiraan belajar di luar ruang kelas.', '/images/packages/outbound-pelajar.webp', '["Yel-yel Kreatif", "Permainan Kerja Sama Siswa", "Water Splash Ceria", "Refleksi Pelajar"]'::jsonb, '["Instruktur Ramah Anak", "Peralatan Edukatif", "Snack & Air Mineral", "P3K Standar"]'::jsonb, 'Half Day / Full Day', 'Konsultasikan kebutuhan paket', false, 'published', 9),
('b3a31c51-5e28-4ef9-bb43-d2d480e60803', 'Character Building', 'character-building', 'Menanamkan kedisiplinan, integritas pribadi, dan ketangguhan mental siswa.', '/images/packages/character-building.webp', '["Simulasi Mandiri", "Tantangan Ketahanan Diri", "Problem Solving Berkelompok", "Internalisasi Nilai"]'::jsonb, '["Fasilitator Berpengalaman", "Lembar Kerja Refleksi", "Area Lapangan Terpilih"]'::jsonb, '1 Hari / 2 Hari', 'Konsultasikan kebutuhan paket', true, 'published', 10),
('b3a31c51-5e28-4ef9-bb43-d2d480e60803', 'LDKS Leadership', 'ldks-leadership', 'Latihan Dasar Kepemimpinan Siswa untuk pengurus OSIS, MPK, dan ekstrakurikuler.', '/images/packages/ldks-leadership.webp', '["Materi Kepemimpinan Lapangan", "Simulasi Manajemen Organisasi", "Caraka Malam", "Penyusunan Program Kerja"]'::jsonb, '["Narasumber & Instruktur", "Area Perkemahan Aman", "Perlengkapan Simulasi", "Sertifikat Partisipasi"]'::jsonb, '2 Hari 1 Malam', 'Konsultasikan kebutuhan paket', false, 'published', 11),
('b3a31c51-5e28-4ef9-bb43-d2d480e60803', 'Edukasi Alam', 'edukasi-alam', 'Mengenalkan kelestarian lingkungan hidup, keanekaragaman flora fauna, dan pertanian Batu.', '/images/packages/edukasi-alam.webp', '["Jelajah Kebun Apel / Sayur", "Edukasi Kompos & Tanaman", "Trekking Alam Aman", "Kuis Cinta Lingkungan"]'::jsonb, '["Pemandu Edukasi", "Bibit Tanaman untuk Praktek", "Snack Sehat", "Tempat Nyaman"]'::jsonb, 'Half Day', 'Konsultasikan kebutuhan paket', false, 'published', 12),

-- Wisata & Adventure
('b3a31c51-5e28-4ef9-bb43-d2d480e60804', 'Outbound Wisata', 'outbound-wisata', 'Perpaduan outbound menyenangkan dengan kunjungan ke destinasi wisata populer Batu Malang.', '/images/packages/outbound-wisata.webp', '["Fun Games Pagi", "Kunjungan Destinasi Wisata", "Wisata Belanja Oleh-oleh"]'::jsonb, '["Pemandu Wisata", "Tiket Masuk Obyek Rekomendasi", "Makan Siang", "Transportasi Lokal (Opsional)"]'::jsonb, '1 Hari', 'Konsultasikan kebutuhan paket', false, 'published', 13),
('b3a31c51-5e28-4ef9-bb43-d2d480e60804', 'Rafting', 'rafting', 'Arung jeram seru di sungai alami dengan pemandangan tebing dan persawahan Batu - Pujon.', '/images/packages/rafting.webp', '["Safety Briefing Arung Jeram", "Pengarungan Sungai 7-12 KM", "Rescue Team Siaga", "Istirahat Kelapa Muda"]'::jsonb, '["Perahu Karet & Dayung", "Helm & Pelampung Standar", "Guide & Tim Rescue", "Asuransi Kegiatan & Makan Siang"]'::jsonb, 'Durasi Pengarungan ±2 Jam', 'Konsultasikan kebutuhan paket', true, 'published', 14),
('b3a31c51-5e28-4ef9-bb43-d2d480e60804', 'Offroad 4x4', 'offroad-4x4', 'Jelajah jalur ekstrem berlumpur dan perbukitan pinus menggunakan kendaraan Jeep 4x4.', '/images/packages/offroad-4x4.webp', '["Konvoi Jeep 4x4", "Melintasi Jalur Lumpur & Sungai", "Stop Foto View Pegunungan", "Finish di Basecamp Outbound"]'::jsonb, '["Armada Jeep 4x4 Terawat", "Driver Offroad Handal", "Bahan Bakar & Tiket Masuk Jalur", "Dokumentasi Aksi"]'::jsonb, '±3 - 4 Jam', 'Konsultasikan kebutuhan paket', true, 'published', 15),
('b3a31c51-5e28-4ef9-bb43-d2d480e60804', 'Camping', 'camping', 'Bermalam di alam bebas dengan tenda nyaman, api unggun, dan udara dingin khas Batu.', '/images/packages/camping.webp', '["Pemasangan Tenda Bersama", "Api Unggun & BBQ Malam", "Trekking Sunrise Pagi", "Fun Games Ringan"]'::jsonb, '["Tenda Dome & Matras", "Lampu Penerangan & Kayu Bakar", "Fasilitas Toilet Bersih di Ground", "Konsumsi Malam & Sarapan"]'::jsonb, '2 Hari 1 Malam', 'Konsultasikan kebutuhan paket', false, 'published', 16)
ON CONFLICT (slug) DO NOTHING;

-- 5. FAQ Items
INSERT INTO faq_items (page_slug, question, answer, sort_order, status)
VALUES
('/', 'Bagaimana alur pemesanan dan konsultasi kegiatan di Vendor Outbound?', 'Anda dapat menghubungi tim kami melalui tombol WhatsApp resmi atau formulir konsultasi. Sampaikan perkiraan jumlah peserta, jenis kegiatan yang diminati, rencana tanggal, serta kebutuhan khusus. Kami akan menyusun rancangan program dan rekomendasi venue terbaik di Batu - Malang.', 1, 'published'),
('/', 'Apakah agenda kegiatan dapat disesuaikan dengan kebutuhan instansi kami?', 'Ya, seluruh program baik team building perusahaan, family gathering, maupun outbound sekolah dapat disesuaikan (customized) dengan tema internal, nilai budaya organisasi, serta alokasi durasi yang Anda inginkan.', 2, 'published'),
('/', 'Bagaimana kesiapan keamanan dan penanganan cuaca di lapangan?', 'Setiap kegiatan outbound didampingi fasilitator dan instruktur lapangan yang terlatih dalam prosedur keselamatan. Kami selalu menyiapkan opsi rencana cadangan (plan B) di area semi-indoor jika cuaca hujan turun, serta kotak P3K standar di lokasi.', 3, 'published'),
('/', 'Di mana saja lokasi kegiatan outbound yang disediakan di area Batu dan Malang?', 'Kami memiliki rekomendasi lokasi beragam di Kota Batu, Pujon, Kasembon, dan Malang Raya, mulai dari bumi perkemahan hutan pinus, resort berfasilitas outbound, hingga sungai arung jeram dan jalur offroad.', 4, 'published'),
('/', 'Berapa jumlah peserta minimal untuk menyelenggarakan outbound?', 'Secara umum kegiatan dapat diselenggarakan untuk kelompok kecil (mulai dari 20 orang) hingga kelompok besar ratusan peserta. Konsultasikan jumlah peserta Anda kepada kami untuk pemilihan program dan venue yang paling proporsional.', 5, 'published');

-- 6. Authors & Blog
INSERT INTO authors (id, display_name, slug, bio, avatar_url, is_active)
VALUES
('a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d', 'Arby Ardiansyah', 'arby-ardiansyah', 'Praktisi pengembangan SDM dan perancang program experiential learning dengan pengalaman lebih dari 8 tahun memfasilitasi ratusan kegiatan outbound korporat, BUMN, dan acara kebersamaan keluarga di seluruh Jawa Timur.', '/images/author-artikel/author-artikel-arby-ardiansyah.webp', true)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO blog_categories (id, name, slug, description, status, sort_order)
VALUES
('c1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6e', 'Panduan Outbound', 'panduan-outbound', 'Tips, panduan persiapan, dan referensi kegiatan outbound di Batu Malang', 'active', 1),
('c1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6f', 'Tips Gathering', 'tips-gathering', 'Inspirasi tema, susunan acara, dan manajemen gathering perusahaan & keluarga', 'active', 2)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO blog_posts (title, slug, excerpt, body, category_id, author_id, thumbnail_url, image_alt, seo_title, seo_description, canonical_url, status, is_featured, reading_time_minutes, answer_first)
VALUES
(
  'Panduan Lengkap Mempersiapkan Corporate Gathering & Outbound di Malang Raya 2026',
  'panduan-lengkap-corporate-gathering-malang',
  'Panduan komprehensif persiapan corporate gathering dan outbound kantor di Malang Raya 2026. Mulai dari timeline H-60, pemilihan zona venue Batu & Bromo, desain rundown seimbang, hingga tips efisiensi anggaran.',
  'Panduan lengkap corporate gathering dan team building di Malang Raya 2026...',
  'c1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6e',
  'a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d',
  '/images/hero-bromo-sunrise.webp',
  'Corporate Gathering dan Outbound di Malang Raya 2026',
  'Panduan Lengkap Mempersiapkan Corporate Gathering & Outbound di Malang Raya 2026 | Vendor Outbound',
  'Panduan komprehensif persiapan corporate gathering dan outbound kantor di Malang Raya 2026. Mulai dari timeline H-60, pemilihan zona venue Batu & Bromo, desain rundown seimbang, hingga tips efisiensi anggaran.',
  'https://vendoroutbound.id/blog/panduan-lengkap-corporate-gathering-malang',
  'published',
  true,
  6,
  'Corporate gathering di Malang Raya menawarkan kombinasi terbaik antara udara sejuk pegunungan (18°C - 24°C), ratusan pilihan resort dan lapangan outbound hijau, serta aksesibilitas cepat via Tol Trans Jawa dan Bandara Abdulrachman Saleh. Ini adalah solusi tuntas menyegarkan motivasi kerja dan mengikis sekat komunikasi antar divisi.'
),
(
  'Panduan Memilih Lokasi Outbound di Batu dan Malang Sesuai Karakter Tim',
  'panduan-memilih-lokasi-outbound-batu-malang',
  'Memilih lokasi outbound yang tepat di kawasan sejuk Batu dan Malang sangat menentukan kenyamanan peserta dan keberhasilan tujuan kegiatan.',
  'Kawasan Batu dan Malang memiliki topografi pegunungan dengan variasi venue yang sangat luas...',
  'c1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6e',
  'a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d',
  '/images/blog/panduan-lokasi-outbound.webp',
  'Peserta kegiatan outbound berkumpul di area hijau asri pegunungan Batu',
  'Panduan Memilih Lokasi Outbound di Batu Malang | Vendor Outbound',
  'Simak panduan lengkap memilih venue outbound di Batu dan Malang berdasarkan karakter tim, tujuan kegiatan, dan fasilitas yang dibutuhkan.',
  'https://vendoroutbound.id/blog/panduan-memilih-lokasi-outbound-batu-malang',
  'published',
  false,
  5,
  'Lokasi outbound terbaik di Batu Malang bergantung pada target kegiatan: pilih area hutan pinus untuk konsentrasi team building, resort berfasilitas lengkap untuk kenyamanan family gathering, atau aliran sungai dan jalur offroad untuk petualangan pemacu adrenalin.'
)
ON CONFLICT (slug) DO NOTHING;

-- 7. Testimonials
INSERT INTO testimonials (display_name, organization, quote, avatar_url, permission_confirmed, status, sort_order)
VALUES
('Hendro Wicaksono, S.T.', 'PT Astra Graphia Tbk', 'Penyelenggaraan corporate gathering dan team building 150 staf kami di resort Batu berjalan luar biasa tertib, presisi waktu, dan sangat berkesan. Fasilitator BNSP sangat komunikatif membimbing simulasi tim, dan sesi debrief-nya berhasil menyegarkan kembali komitmen kerja lintas divisi.', '/images/testimonials/client-1.webp', true, 'published', 1),
('Dra. Hj. Siti Nurhaliza, M.Pd', 'SMAN 3 Surabaya', 'Latihan Dasar Kepemimpinan Siswa (LDKS) di Coban Rondo terlaksana sangat aman, edukatif, dan sarat nilai kedisiplinan. Fasilitator Vendor Outbound sangat sigap mengawal SOP keselamatan anak didik kami dengan pendekatan yang persuasif dan inspiratif. Luar biasa!', '/images/testimonials/client-2.webp', true, 'published', 2),
('Ir. Bambang Priyambodo', 'Paguyuban Alumni ITS Surabaya', 'Family gathering tahunan kami berjalan sangat meriah tanpa ada peserta yang jenuh. Variasi fun games-nya ramah untuk balita hingga lansia. Tim logistik dan konsumsinya sigap, plus dokumentasi foto dan drone-nya berkualitas studio. Pasti repeat order tahun depan!', '/images/testimonials/client-3.webp', true, 'published', 3);

-- 8. Gallery Items (Termasuk Gambar Aktivitas Baru: Outbound, Rafting, Berkemah, Offroad, Alam, Dokumentasi)
INSERT INTO gallery_items (title, caption, alt_text, public_url, category, width, height, status, sort_order)
VALUES
('Outbound & Team Building Dinamis', 'Aktivitas kolaboratif pemecahan masalah dan sinergi tim di hamparan rumput pinus Kota Batu.', 'Peserta outbound bersemangat dalam simulasi kerja sama tim', '/images/activities/outbound-team-building.webp', 'Perusahaan', 1000, 667, 'published', 1),
('Petualangan Rafting Arung Jeram', 'Sensasi menaklukkan arus deras dan jeram sungai alami Batu - Pujon dengan standar keselamatan tinggi.', 'Rombongan rafting mendayung melewati jeram sungai dengan pelampung dan helm', '/images/activities/rafting-arung-jeram.webp', 'Wisata & Adventure', 1000, 667, 'published', 2),
('Berkemah di Bawah Rimbun Pinus', 'Suasana berkemah nyaman dengan api unggun, udara sejuk pegunungan, dan gemerlap bintang.', 'Deretan tenda perkemahan di antara pepohonan pinus alami Batu', '/images/activities/berkemah-camping-ground.webp', 'Wisata & Adventure', 1000, 667, 'published', 3),
('Jelajah Jalur Offroad Jeep 4x4', 'Pacu adrenalin menembus rute ekstrem berbatu, lumpur, dan hutan dengan armada Jeep 4x4 prima.', 'Konvoi mobil Jeep 4x4 melintasi jalur offroad menantang', '/images/activities/offroad-jeep-4x4.webp', 'Wisata & Adventure', 1000, 667, 'published', 4),
('Pesona Keindahan Alam & Air Terjun Batu', 'Panorama alam pegunungan yang asri dan air terjun alami penyegar jiwa dan raga peserta.', 'Panorama air terjun alami dan pepohonan hijau asri di kawasan Batu Malang', '/images/activities/keindahan-alam-batu.webp', 'Wisata & Adventure', 1000, 667, 'published', 5),
('Ice Breaking Team Korporat', 'Keseruan peserta dalam sesi ice breaking pembuka di hamparan rumput pinus Kota Batu.', 'Peserta outbound perusahaan bergandengan tangan dalam lingkaran ice breaking', '/images/gallery/gallery-1.webp', 'Perusahaan', 800, 600, 'published', 6),
('Simulasi Jembatan Tali Bambu', 'Ujian kerja sama dan koordinasi tim membangun jembatan darurat.', 'Karyawan bekerja sama menyusun bilah bambu sebagai lintasan jembatan tali', '/images/gallery/gallery-2.webp', 'Perusahaan', 800, 600, 'published', 7),
('Keceriaan Family Gathering', 'Senyum riang keluarga besar dan anak-anak saat mengikuti game balon estafet.', 'Anak-anak dan orang tua tertawa riang bermain game balon di taman terbuka', '/images/gallery/gallery-3.webp', 'Family Gathering', 800, 600, 'published', 8),
('LDKS Kepemimpinan Siswa', 'Peserta LDKS mendengarkan instruksi kedisiplinan dan kepemimpinan di alam terbuka.', 'Siswa berseragam olahraga berbaris rapi di bumi perkemahan pegunungan', '/images/gallery/gallery-4.webp', 'Sekolah', 800, 600, 'published', 9),
('Arung Jeram Sungai Batu', 'Momen seru melintasi jeram berbatu dengan pengawasan pemandu profesional.', 'Perahu karet oranye meluncur di arus jeram sungai dengan peserta berhelm pelindung', '/images/gallery/gallery-5.webp', 'Wisata & Adventure', 800, 600, 'published', 10),
('Aksi Jeep Offroad 4x4', 'Konvoi armada jeep melintasi medan berlumpur di tengah hutan pinus lereng pegunungan.', 'Jeep 4x4 hijau melintasi genangan lumpur dengan latar belakang hutan pinus rindang', '/images/gallery/gallery-6.webp', 'Wisata & Adventure', 800, 600, 'published', 11)
ON CONFLICT DO NOTHING;
