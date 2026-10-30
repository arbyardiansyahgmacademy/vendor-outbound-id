// Default and seed content strictly adhering to PRD specifications for provideroutbound.web.id

export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  overview: string;
  targetAudience: string;
  benefits: string[];
  activities: string[];
  locationNote: string;
  imageUrl: string;
  featured: boolean;
  sortOrder: number;
}

export interface DestinationItem {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  overview: string;
  elevation?: string;
  features: string[];
  imageUrl: string;
  recommendedFor: string[];
  location: string;
  sortOrder: number;
}

export interface PackageRundownItem {
  time: string;
  activity: string;
  desc: string;
}

export interface PackageItem {
  id: string;
  categorySlug: string;
  categoryName: string;
  title: string;
  slug: string;
  excerpt: string;
  description?: string;
  imageUrl: string;
  galleryImages?: string[];
  activities: string[];
  features: string[];
  addons?: string[];
  rundown?: PackageRundownItem[];
  duration: string;
  priceLabel: string;
  priceAmount?: number | null;
  featured: boolean;
  sortOrder: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  altText: string;
  category: string;
  imageUrl: string;
  width: number;
  height: number;
}

export interface FAQItem {
  id: string;
  pageSlug: string;
  question: string;
  answer: string;
  sortOrder: number;
}

export interface BlogPostItem {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  body: string;
  category: string;
  authorName: string;
  authorRole?: string;
  authorAvatar?: string;
  authorBio: string;
  thumbnailUrl: string;
  imageAlt: string;
  seoTitle: string;
  seoDescription: string;
  canonicalUrl: string;
  publishedAt: string;
  readingTimeMinutes: number;
  answerFirst: string;
  summaryPoints?: string[];
  faqs?: { question: string; answer: string }[];
}

export const SITE_INFO = {
  brandName: 'Provider Outbound',
  domain: 'https://provideroutbound.web.id',
  tagline: 'Penyedia Outbound, Gathering & Adventure Profesional Batu - Malang',
  whatsappNumber: '6282211221909',
  whatsappDisplay: '+62 822-1122-1909',
  defaultWaMessage: 'Halo Provider Outbound, saya ingin konsultasi kegiatan outbound/gathering di area Batu - Malang.',
  serviceAreas: 'Batu dan Malang, Jawa Timur',
  operatingHours: '08:00 - 21:00 WIB',
  description: 'Penyedia program outbound, team building korporat, family gathering, outbound edukasi sekolah, dan wisata petualangan di area Batu dan Malang, Jawa Timur.',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'srv-1',
    title: 'Outbound Perusahaan',
    slug: 'outbound-perusahaan',
    excerpt: 'Program penguatan sinergi tim, kepemimpinan, dan komunikasi efektif untuk perusahaan dan institusi di kawasan sejuk Batu - Malang.',
    overview: 'Program outbound korporat dirancang khusus untuk membangun kekompakan tim kerja lintas divisi, mengasah daya adaptasi dan kolaborasi pemecahan masalah (problem solving), serta menyegarkan kembali semangat kerja di tengah panorama alami pegunungan Batu Malang.',
    targetAudience: 'Perusahaan, BUMN, Instansi Pemerintah, Startup, Korporasi, & Divisi Kerja',
    benefits: [
      'Meningkatkan rasa saling percaya dan kekompakan tim kerja',
      'Mengasah komunikasi terbuka dan sinergi pemecahan masalah',
      'Mengurangi kejenuhan kerja dengan suasana alam pegunungan yang segar',
      'Membangun komitmen bersama untuk mencapai target organisasi'
    ],
    activities: [
      'Ice Breaking & Team Energizer',
      'Team Dynamic & Synergy Simulation',
      'Strategic Problem Solving Games',
      'Trust & Leadership Challenges',
      'Debrief & Evaluasi Nilai Organisasi'
    ],
    locationNote: 'Tersedia di venue hutan pinus, resort outbound, dan area terbuka alami di Batu dan Malang.',
    imageUrl: '/images/services/outbound-perusahaan.webp',
    featured: true,
    sortOrder: 1,
  },
  {
    id: 'srv-2',
    title: 'Family Gathering',
    slug: 'family-gathering',
    excerpt: 'Kegiatan rekreasi santai dan hangat yang mempererat hubungan keluarga besar karyawan atau komunitas di alam terbuka.',
    overview: 'Family gathering memadukan suasana riang gembira, aneka permainan interaktif untuk segala kelompok usia (anak-anak hingga kakek-nenek), dan kehangatan silaturahmi tanpa tekanan kompetisi yang berat.',
    targetAudience: 'Keluarga Besar Karyawan, Paguyuban, Komunitas Warga, & Ikatan Alumni',
    benefits: [
      'Mempererat tali silaturahmi dan keharmonisan antar keluarga',
      'Permainan ramah anak dan lansia yang menyenangkan dan aman',
      'Suasana rileks untuk melepas penat rutinitas sehari-hari',
      'Momen kebersamaan berharga dengan dokumentasi foto lengkap'
    ],
    activities: [
      'Fun Games Keluarga & Pasangan',
      'Kids Corner & Aktivitas Edukasi Anak',
      'Lomba Kekompakan Antar Keluarga',
      'Panggung Doorprize & Kebersamaan',
      'Piknik Santai di Hamparan Rumput'
    ],
    locationNote: 'Dilaksanakan di venue taman terbuka hijau dan resort ramah keluarga di Kota Batu.',
    imageUrl: '/images/services/family-gathering.webp',
    featured: true,
    sortOrder: 2,
  },
  {
    id: 'srv-3',
    title: 'Outbound Sekolah',
    slug: 'outbound-sekolah',
    excerpt: 'Pembentukan karakter mandiri, kepemimpinan pelajar, dan edukasi alam untuk SD, SMP, SMA hingga perguruan tinggi.',
    overview: 'Program edukatif luar ruang yang menitikberatkan pada penanaman kemandirian, kepemimpinan dasar (LDKS), kerja sama kawan sebaya, dan apresiasi terhadap kelestarian lingkungan hidup.',
    targetAudience: 'Siswa SD, Pelajar SMP/SMA/SMK, Pengurus OSIS/MPK, & Mahasiswa',
    benefits: [
      'Menanamkan nilai budi pekerti, disiplin, dan rasa tanggung jawab',
      'Melatih jiwa kepemimpinan dini dan toleransi kawan',
      'Belajar langsung mengenai ekosistem dan keanekaragaman alam',
      'Membangun keakraban positif antar siswa satu angkatan'
    ],
    activities: [
      'Permainan Pembangunan Karakter (Character Building)',
      'Simulasi Kepemimpinan Siswa (LDKS)',
      'Jelajah Alam & Observasi Lingkungan Hidup',
      'Edukasi Pertanian & Konservasi Alam Batu',
      'Sesi Refleksi & Ikrar Integritas Pelajar'
    ],
    locationNote: 'Bumi perkemahan aman dan area edukasi alam terkelola di Batu Malang.',
    imageUrl: '/images/services/outbound-sekolah.webp',
    featured: true,
    sortOrder: 3,
  },
  {
    id: 'srv-4',
    title: 'Outbound Wisata',
    slug: 'wisata-adventure',
    excerpt: 'Perpaduan outbound menyenangkan dengan petualangan rafting, safari offroad jeep 4x4, camping ground, dan eksplorasi destinasi alam Batu Malang.',
    overview: 'Program Outbound Wisata memadukan pembelajaran kerja sama tim dengan rekreasi alam pemacu adrenalin namun tetap terjamin keamanannya. Didampingi instruktur profesional bersertifikat BNSP dengan standar perlengkapan keselamatan internasional.',
    targetAudience: 'Komunitas Pecinta Alam, Perusahaan Petualang, Wisatawan Rombongan, & Kelompok Organisasi',
    benefits: [
      'Sensasi petualangan berkesan di alam terbuka Batu Malang',
      'Instruktur dan tim rescue profesional siaga di setiap rute',
      'Peralatan standar safety lengkap (helm, pelampung, roll bar jeep)',
      'Pelepasan stres kerja yang maksimal dengan adrenalin positif'
    ],
    activities: [
      'Outbound + Wisata Populer Kota Batu',
      'Outbound + Rafting Arung Jeram Kaliwatu',
      'Outbound + Offroad Safari Jeep 4x4',
      'Outbound + Camping Ground Alam Bebas'
    ],
    locationNote: 'Kaliwatu Rafting, Coban Talun, Coban Putri, Gunung Bromo, dan Tumpak Sewu.',
    imageUrl: '/images/services/wisata-adventure.webp',
    featured: true,
    sortOrder: 4,
  }
];

export const DESTINATIONS: DestinationItem[] = [
  {
    id: 'dest-1',
    name: 'Coban Rondo',
    slug: 'coban-rondo',
    tagline: 'Venue Outbound Legendaris No. 1 Malang Raya (1.135 mdpl)',
    overview: 'Venue outbound legendaris nomor satu di Malang Raya dengan udara sejuk hutan pinus di ketinggian 1.135 mdpl. Dikelilingi fasilitas pendukung super lengkap untuk rombongan korporasi, instansi pemerintah, dan sekolah skala ratusan hingga ribuan peserta.',
    elevation: '1.135 mdpl',
    features: [
      'Akses Bus Luas',
      'Parkiran Sangat Luas',
      'Ground Outbound Luas',
      'Toilet Banyak di Berbagai Titik',
      'Ground Paintball Khusus',
      'Field Arena Tetap',
      'Camping Ground',
      'Outbound & Gathering'
    ],
    imageUrl: '/images/destinasi/coban-rondo.webp',
    recommendedFor: ['Outbound Perusahaan', 'Family Gathering', 'Outbound Sekolah'],
    location: 'Panderman / Pujon, Kab. Malang',
    sortOrder: 1,
  },
  {
    id: 'dest-2',
    name: 'Coban Rais',
    slug: 'coban-rais',
    tagline: 'Akses Bus Langsung & Lereng Asri Gunung Panderman',
    overview: 'Destinasi favorit di lereng Gunung Panderman dengan akses langsung yang sangat praktis bagi rombongan rombongan besar. Area parkiran luas dapat menampung bis besar pariwisata sehingga peserta dapat langsung menuju lokasi kegiatan tanpa repot oper kendaraan.',
    elevation: '1.025 mdpl',
    features: [
      'Bis Bisa Masuk',
      'Tanpa Suttle (Langsung ke Lokasi)',
      'Lanskap Hutan Asri',
      'Wisata Foto Batu Flower Garden',
      'Toilet Bersih Tersedia',
      'Fun Games & Gathering'
    ],
    imageUrl: '/images/destinasi/coban-rais.webp',
    recommendedFor: ['Family Gathering', 'Fun Games Korporat', 'Outbound Sekolah'],
    location: 'Oro-Oro Ombo, Kota Batu',
    sortOrder: 2,
  },
  {
    id: 'dest-3',
    name: 'Coban Putri',
    slug: 'coban-putri',
    tagline: 'Air Terjun Bertingkat Eksotis & Wahana Land Rover 4x4',
    overview: 'Venue alam eksotis dengan aliran air terjun bertingkat yang menawan. Keunggulan utamanya adalah jarak menuju air terjun yang sangat dekat dan ramah anak/lansia, tersedianya shuttle lokal, serta arena petualangan legendaris mobil Land Rover klasik 4x4.',
    elevation: '980 mdpl',
    features: [
      'Jarak Coban Dekat',
      'Ada Suttle Transportasi',
      'Wahana Land Rover',
      'Offroad 4x4 Ekstrem',
      'Outbound Team Building',
      'Paintball War Games'
    ],
    imageUrl: '/images/destinasi/coban-putri.webp',
    recommendedFor: ['Outbound Wisata', 'Offroad 4x4', 'Team Building'],
    location: 'Tlekung, Junrejo, Kota Batu',
    sortOrder: 3,
  },
  {
    id: 'dest-4',
    name: 'Coban Talun',
    slug: 'coban-talun',
    tagline: 'Markas Utama Safari Offroad Jeep 4x4 & Hutan Pinus Hulu Brantas',
    overview: 'Kawasan hutan pinus luas dengan panorama lembah hulu Sungai Brantas. Akses jalan menuju lokasi sangat mudah dan mulus dari pusat kota. Menjadi markas utama komunitas offroad jeep 4x4 rute lumpur menantang serta simulasi taktis paintball.',
    elevation: '1.200 mdpl',
    features: [
      'Akses Jalan Mudah',
      'Safari Offroad Jeep 4x4',
      'Outbound Team Building',
      'Arena Taktis Paintball',
      'Area Glamping Pagupon',
      'Hutan Pinus Rindang'
    ],
    imageUrl: '/images/destinasi/coban-talun.webp',
    recommendedFor: ['Outbound Wisata', 'Offroad + Outbound', 'Leadership Camp'],
    location: 'Tulungrejo, Bumiaji, Kota Batu',
    sortOrder: 4,
  },
  {
    id: 'dest-5',
    name: 'Payung Pinus',
    slug: 'payung-pinus',
    tagline: 'Panorama Puncak Kota Batu dari Ketinggian & Offroad ATV',
    overview: 'Spot wisata outbound di kawasan Payung dengan udara sangat sejuk pegunungan dan panorama indah kota dari ketinggian. Lokasinya berada tepat di tepi jalan raya utama sehingga aksesibilitas sangat praktis tanpa perlu masuk jalan sempit.',
    elevation: '1.100 mdpl',
    features: [
      'Akses Sangat Mudah',
      'Udara Sangat Sejuk',
      'Toilet Banyak & Bersih',
      'Wahana Offroad ATV',
      'Rest Area & Cafe Pinus',
      'Ramah Seluruh Kalangan'
    ],
    imageUrl: '/images/destinasi/payung-pinus.webp',
    recommendedFor: ['Family Gathering', 'Fun Games Ceria', 'Rekreasi Komunitas'],
    location: 'Kawasan Payung, Songgokerto, Kota Batu',
    sortOrder: 5,
  },
  {
    id: 'dest-6',
    name: 'Kaliwatu Rafting',
    slug: 'kaliwatu-rafting',
    tagline: 'Pusat Petualangan Arung Jeram & Outbound Sungai Kota Batu',
    overview: 'Pusat petualangan arung jeram dan outbound air terpopuler di jantung Kota Batu. Menyajikan aliran Sungai Brantas hulu berarus seru Grade 2-3 yang aman untuk pemula & korporasi, didukung basecamp luas tepi sungai dengan gazebo dan kamar bilas melimpah.',
    elevation: '850 mdpl',
    features: [
      'Akses Bus Besar Mudah',
      'Kamar Mandi & Bilas Banyak',
      'Rafting Arung Jeram 7-9 KM',
      'Donut Boat & River Tubing',
      'Ground Outbound Rumput Hijau',
      'Arena Paintball Tepi Sungai'
    ],
    imageUrl: '/images/destinasi/kaliwatu-rafting.webp',
    recommendedFor: ['Outbound + Rafting', 'Corporate Gathering', 'Outbound Wisata'],
    location: 'Bumiaji, Kota Batu',
    sortOrder: 6,
  },
  {
    id: 'dest-7',
    name: 'Gunung Bromo',
    slug: 'gunung-bromo',
    tagline: 'Eksklusif Corporate Safari Jeep 4x4, Lautan Pasir & Golden Sunrise',
    overview: 'Destinasi wisata kebanggaan Jawa Timur berkelas internasional. Menghadirkan paket outbound eksklusif terintegrasi dengan ekspedisi armada jeep 4x4 melintasi Lautan Pasir (Pasir Berbisik), kawah aktif, Bukit Teletubbies, dan momentum golden sunrise spektakuler.',
    elevation: '2.329 mdpl',
    features: [
      'Konvoi Jeep 4x4 Hardtop',
      'Golden Sunrise Penanjakan',
      'Kawah Bromo & Pura Luhur',
      'Pasir Berbisik & Savana',
      'Dokumentasi Foto & Drone HD',
      'Eksklusif Corporate Tour'
    ],
    imageUrl: '/images/destinasi/gunung-bromo.webp',
    recommendedFor: ['Corporate Gathering Eksklusif', 'Outbound + Wisata', 'Executive Retreat'],
    location: 'Kawasan TNBTS, Jawa Timur',
    sortOrder: 7,
  },
  {
    id: 'dest-8',
    name: 'Air Terjun Tumpak Sewu',
    slug: 'air-terjun-tumpak-sewu',
    tagline: 'The Niagara of Indonesia, Trekking Lembah Purba & Gua Tetes',
    overview: 'Air terjun melingkar seperti tirai raksasa dengan ketinggian 120 meter yang dijuluki Niagara-nya Indonesia. Memberikan pengalaman petualangan trekking menyusuri lembah sungai alami, panorama tebing purba, dan keindahan Gua Tetes yang magis.',
    elevation: '600 mdpl',
    features: [
      'Tirai Air Terjun 120M',
      'Trekking Panorama Lembah',
      'Eksplorasi Gua Tetes',
      'Panorama Spot Foto Viral',
      'Tim Rescue & Guide Lokal',
      'Adventure Healing Trip'
    ],
    imageUrl: '/images/destinasi/tumpak-sewu.webp',
    recommendedFor: ['Adventure Healing Trip', 'Outbound Wisata', 'Trekking Komunitas'],
    location: 'Perbatasan Malang - Lumajang',
    sortOrder: 8,
  },
  {
    id: 'dest-9',
    name: 'Hotel Jambuluwuk Resort',
    slug: 'hotel-jambuluwuk-resort',
    tagline: 'Villa Kayu Bintang 5, Lapangan Rumput Privat & Convention Hall Megah',
    overview: 'Resort villa kayu eksklusif bintang 5 berpadu panorama spektakuler Gunung Panderman. Dilengkapi Convention Hall megah untuk rapat kerja / gala dinner ratusan orang, serta lapangan rumput privat asri untuk simulasi outbound team building berkelas.',
    elevation: '1.050 mdpl',
    features: [
      'Villa Kayu Resort Bintang 5',
      'Convention Hall & Ballroom',
      'Lapangan Outbound Rumput Privat',
      'Katering Buffet & Gala Dinner',
      'Parkir Bus & Mobil Luas',
      'Executive Leadership Retreat'
    ],
    imageUrl: '/images/destinasi/hotel-jambuluwuk-resort.webp',
    recommendedFor: ['Executive Leadership Retreat', 'Corporate Gala Dinner', 'Team Building Bintang 5'],
    location: 'Songgokerto, Kota Batu',
    sortOrder: 9,
  }
];

export const PACKAGE_CATEGORIES = [
  { name: 'Perusahaan', slug: 'perusahaan', description: 'Program outbound dan gathering korporat penguat sinergi organisasi' },
  { name: 'Family Gathering', slug: 'family-gathering', description: 'Paket santai dan ceria untuk keluarga karyawan dan komunitas' },
  { name: 'Sekolah', slug: 'sekolah', description: 'Program pembentukan karakter, LDKS, dan edukasi alam luar ruang' },
  { name: 'Outbound Wisata', slug: 'wisata-adventure', description: 'Kombinasi outbound terpadu dengan arung jeram rafting, offroad jeep 4x4, camping, dan wisata alam' },
];

export const PACKAGES: PackageItem[] = [
  // ================= PERUSAHAAN =================
  {
    id: 'pkg-1',
    categorySlug: 'perusahaan',
    categoryName: 'Perusahaan',
    title: 'Team Building',
    slug: 'team-building',
    excerpt: 'Penguatan kerja sama, komunikasi efektif, dan rasa saling percaya antar rekan kerja.',
    description: 'Program Team Building Provider Outbound dirancang secara metodis berbasis Experiential Learning Cycle untuk membongkar sekat birokrasi, mengikis mentalitas silo, dan mengasah sinergi antar departemen. Melalui rangkaian simulasi problem-solving di hamparan rumput pegunungan Batu yang sejuk, setiap peserta ditantang berkolaborasi secara nyata, mengasah active listening, dan menyelaraskan komitmen bersama demi mencapai target korporasi.',
    imageUrl: '/images/packages/team-building.webp',
    galleryImages: [
      "/images/packages/team-building.webp",
      "/images/kebutuhan-gambar/team-building-flag.webp",
      "/images/kebutuhan-gambar/employees-balance-challenge.webp"
    ],
    activities: [
      'Ice Breaking & Energizer (Pencair Suasana & Pengelompokan Spontan)',
      'Group Dynamic & Trust Building (Membangun Rasa Percaya Antar Rekan)',
      'Effective Communication Challenge (Simulasi Komunikasi Taktis)',
      'Synergy & Problem Solving Challenge (Penyelesaian Rintangan Kompleks)',
      'Final Project & Commitment Anchor (Komitmen Target Bersama)'
    ],
    features: [
      'Master Fasilitator & Trainer Bersertifikasi BNSP',
      'Peralatan Game & Simulasi Lengkap Berstandar Safety',
      'Sound System Outdoor High-Power & Wireless Mic',
      'Air Mineral & Refreshment Buah Segar Selama Acara',
      'Standar P3K Lapangan & Asuransi Kegiatan',
      'Free Banner Spanduk Selamat Datang 3x1 Meter'
    ],
    addons: [
      'Dokumentasi Foto & Drone Video Cinematic 4K',
      'Kaos Outbound Polo / Dry-Fit Custom Bordir Logo Perusahaan',
      'Sajian Live Acoustic Band / Solo Electone',
      'Coffee Break Tradisional (Rebusan Jagung, Pisang, Ubi & Wedang Jahe)',
      'Sewa Bus Pariwisata Jetbus SHD Seat 31/50',
      'Tambahan Menu Kambing Guling & Prasmanan Spesial'
    ],
    rundown: [
      { time: '08.00 - 08.30', activity: 'Registrasi & Welcome Drink', desc: 'Peserta tiba di venue, registrasi kehadiran, dan menikmati teh hangat serta snack khas Batu.' },
      { time: '08.30 - 09.30', activity: 'Opening & Big Ice Breaking', desc: 'Sambutan pimpinan, safety briefing, pencairan suasana dinamis, dan pembagian kelompok lintas divisi.' },
      { time: '09.30 - 11.30', activity: 'Core Team Building Modules', desc: 'Simulasi problem solving: Human Ladder, Spider Web Taktis, Blind Navigation, dan Pipeline Transfer.' },
      { time: '11.30 - 13.00', activity: 'ISHOMA (Istirahat & Makan Siang)', desc: 'Makan siang prasmanan nusantara bergizi, istirahat sholat, dan relaxing santai di area teduh.' },
      { time: '13.00 - 14.30', activity: 'Final Project: Castle Synergy', desc: 'Tantangan kolosal yang menggabungkan seluruh kelompok menjadi satu kesatuan sinergi utuh korporat.' },
      { time: '14.30 - 15.30', activity: 'Debriefing & Awarding Juara', desc: 'Sesi refleksi pembelajaran dipandu Master Trainer, pembagian hadiah tim terbaik, dan komitmen aksi.' },
      { time: '15.30 - 16.00', activity: 'Closing & Photo Session Bersama', desc: 'Sesi foto bersama seluruh kontingen perusahaan dan penutupan acara.' }
    ],
    duration: '1 Hari (Full Day / Half Day)',
    priceLabel: 'Konsultasi Bujet',
    featured: true,
    sortOrder: 1,
  },
  {
    id: 'pkg-2',
    categorySlug: 'perusahaan',
    categoryName: 'Perusahaan',
    title: 'Fun Games',
    slug: 'fun-games',
    excerpt: 'Aktivitas outbound ringan dan ceria untuk penyegaran suasana tanpa tekanan fisik berat.',
    description: 'Paket Fun Games berfokus murni pada keceriaan, tawa lepas, dan pelepasan penat kerja (work burnout relief). Sangat cocok untuk rombongan yang menginginkan suasana refreshing santai, interaktif, dan penuh canda tawa tanpa menguras tenaga fisik secara berlebihan. Cocok untuk semua rentang usia staf, pimpinan, maupun keluarga karyawan.',
    imageUrl: '/images/packages/fun-games.webp',
    galleryImages: [
      "/images/packages/fun-games.webp",
      "/images/kebutuhan-gambar/sack-race-fun-games.webp",
      "/images/kebutuhan-gambar/family-giant-ball-game.webp"
    ],
    activities: [
      'Cheerful Ice Breaking (Tarian & Senam Lucu Pembangkit Mood)',
      'Fun Relay Challenges (Estafet Balon, Bakiak Raksasa & Hula Hoop Ceria)',
      'Water Splash Fun Games (Permainan Air Menyegarkan)',
      'Parade Yel-yel Kreatif & Maskot Lucu Antar Kelompok',
      'Big Balloon War & Fun Celebration'
    ],
    features: [
      'Fasilitator Ramah, Lucu, & Berenergi Tinggi',
      'Properti Permainan Kreatif & Aman',
      'Sound System Portable Lapangan',
      'Air Mineral Melimpah Selama Kegiatan',
      'Standar P3K Ringan Siaga',
      'Hadiah Hiburan untuk Kelompok Paling Heboh'
    ],
    addons: [
      'Dokumentasi Foto Kilat & Video Reels Medsos',
      'Topi Rimba / Topi Snapback Custom Logo Kantor',
      'Snack Box Tradisional & Minuman Segar Cincau Selasih',
      'Paket Doorprize Menarik untuk Peserta',
      'Transportasi Shuttle Bus Wisata Batu'
    ],
    rundown: [
      { time: '08.30 - 09.00', activity: 'Kedatangan & Senam Ceria', desc: 'Penyambutan peserta dan pemanasan ringan diiringi alunan musik ceria.' },
      { time: '09.00 - 10.00', activity: 'Ice Breaking & Grouping Kocak', desc: 'Permainan pemecah kebekuan yang mengundang gelak tawa dan penciptaan yel-yel heboh.' },
      { time: '10.00 - 11.45', activity: 'Fun Games Competition', desc: 'Serangkaian lomba ringan estafet, koordinasi konyol, dan permainan air ceria.' },
      { time: '11.45 - 12.00', activity: 'Pengumuman Juara & Pembagian Hadiah', desc: 'Pemberian apresiasi untuk tim terkompak dan paling menghibur.' },
      { time: '12.00 - 13.00', activity: 'Makan Siang Bersama & Selesai', desc: 'Menikmati sajian makan siang bersama dengan suasana akrab santai.' }
    ],
    duration: 'Setengah Hari (Half Day)',
    priceLabel: 'Konsultasi Bujet',
    featured: true,
    sortOrder: 2,
  },
  {
    id: 'pkg-3',
    categorySlug: 'perusahaan',
    categoryName: 'Perusahaan',
    title: 'Leadership Camp',
    slug: 'leadership-camp',
    excerpt: 'Program intensif pembentukan jiwa kepemimpinan strategis, adaptasi, dan ketahanan mental.',
    description: 'Leadership Camp adalah modul outbound transformasional tingkat tinggi yang didesain khusus bagi jajaran manajemen, calon suksesor (Management Trainee), dan supervisor korporasi. Memadukan simulasi survival alam bebas, ekspedisi malam (Night Journey), pengambilan keputusan saat krisis (Crisis Management), serta workshop penyusunan Action Plan strategis di bawah asuhan konsultan SDM senior.',
    imageUrl: '/images/packages/leadership-camp.webp',
    galleryImages: [
      "/images/packages/leadership-camp.webp",
      "/images/kebutuhan-gambar/team-leader-instructions.webp",
      "/images/kebutuhan-gambar/group-forest-orientation.webp"
    ],
    activities: [
      'Strategic Problem Solving & Resource Management',
      'Survival & Navigation Simulation di Hutan Pinus',
      'Night Leadership Journey & Caraka Malam Reflektif',
      'Crisis Simulation: Decision Making Under Pressure',
      'Executive Leadership Action Plan & Commitment Pact'
    ],
    features: [
      'Senior Leadership Coach & Master Trainer BNSP',
      'Akomodasi Tenda Glamping / Villa Eksklusif di Hutan Pinus Batu',
      'Modul Kepemimpinan Eksklusif & Buku Panduan Kerja',
      'Makan Lengkap 4x (Prasmanan & BBQ Night)',
      'Coffee Break 3x dengan Rebusan & Minuman Herbal Tradisional',
      'Sertifikat Kelulusan Pelatihan Kepemimpinan Eksekutif'
    ],
    addons: [
      'Assessment Profil Kepemimpinan (DISC / MBTI Test)',
      'Dokumentasi Video Dokumenter Cinematic Full Event',
      'Jaket Windbreaker / Rompi Lapangan Bordir Khusus Peserta',
      'Sesi Motivasi Eksklusif dari Guest Speaker Nasional',
      'Simulasi Tactical Paintball War Game'
    ],
    rundown: [
      { time: 'HARI 1 - 13.00 - 14.00', activity: 'Check-In & Orientasi Basecamp', desc: 'Pembagian tenda glamping, pengenalan aturan camp, dan orientasi medan alam.' },
      { time: 'HARI 1 - 14.00 - 17.30', activity: 'Modul Kepemimpinan Siang', desc: 'Simulasi kepemimpinan adaptif, pembagian peran strategis, dan rintangan hutan.' },
      { time: 'HARI 1 - 17.30 - 19.00', activity: 'Bersih Diri, ISHOMA & Makan Malam', desc: 'Makan malam santai dan persiapan agenda malam.' },
      { time: 'HARI 1 - 19.00 - 22.00', activity: 'Api Unggun & Caraka Malam', desc: 'Refleksi mendalam, penjelajahan malam terpandu, dan pembacaan komitmen kepemimpinan.' },
      { time: 'HARI 2 - 06.00 - 08.00', activity: 'Morning Breathing & Sarapan Sehat', desc: 'Senam pernapasan pagi di udara pegunungan 16°C dilanjutkan sarapan berenergi.' },
      { time: 'HARI 2 - 08.00 - 11.00', activity: 'Final Crisis Simulation & Debriefing', desc: 'Simulasi krisis terpadu, pemecahan masalah bersama, dan perumusan Action Plan.' },
      { time: 'HARI 2 - 11.00 - 12.30', activity: 'Closing Ceremony & Check-Out', desc: 'Penyerahan sertifikat, makan siang penutup, dan kepulangan.' }
    ],
    duration: '2 Hari 1 Malam',
    priceLabel: 'Konsultasi Bujet',
    featured: false,
    sortOrder: 3,
  },
  {
    id: 'pkg-4',
    categorySlug: 'perusahaan',
    categoryName: 'Perusahaan',
    title: 'Corporate Gathering',
    slug: 'corporate-gathering',
    excerpt: 'Temu tahunan perusahaan berpadu outbound seru, malam keakraban, dan hiburan panggung.',
    description: 'Solusi all-in-one terlengkap untuk agenda tahunan korporat skala 50 hingga 1.000+ peserta. Mengintegrasikan dinamika outbound energik di lapangan rumput pagi hari dengan kemegahan Gala Dinner malam keakraban di convention hall resort berbintang Kota Batu. Lengkap dengan tata panggung megah, sound lighting profesional, master of ceremony (MC), live music entertainment, dan awarding apresiasi masa bakti karyawan.',
    imageUrl: '/images/packages/corporate-gathering.webp',
    galleryImages: [
      "/images/packages/corporate-gathering.webp",
      "/images/kebutuhan-gambar/corporate-gala-dinner.webp",
      "/images/kebutuhan-gambar/employees-corporate-banner.webp"
    ],
    activities: [
      'Outdoor Sinergi Outbound & Ice Breaking Kolosal',
      'Fun Mini Games & Kompetisi Antar Divisi Berhadiah',
      'Gala Dinner Formal / Semi-Formal di Ballroom Megah',
      'Employee Awarding Night & Penganugerahan Prestasi',
      'Live Music Concert, Doorprize Draw, & Entertainment Night'
    ],
    features: [
      'Manajemen Event Organizer (EO) Profesional Lapangan & Ballroom',
      'Pilihan Venue Rekanan Resort Bintang 4-5 di Kota Batu',
      'Panggung Rigging / Indoor Stage, Sound System 10.000 Watt, & Lighting',
      'Master of Ceremony (MC) Protokoler & Komunikatif Berpengalaman',
      'Katering Buffet Gala Dinner Spesial (Menu Nusantara & Western)',
      'Dokumentasi Tim Lengkap: Multi-Camera, Drone 4K & Instant Print Photobooth'
    ],
    addons: [
      'Undangan Guest Star Artis / Stand Up Comedian Nasional',
      'Souvenir Kit Eksklusif (Jaket, Tumbler Stainless, Tas Ransel)',
      'Pesta Kembang Api Spektakuler (Fireworks Display Berizin Resmi)',
      'Layanan Tour Wisata Belanja Oleh-Oleh & Petik Apel Kota Batu',
      'Armada Bus Pariwisata VIP All-In BBM & Tol Trans Jawa'
    ],
    rundown: [
      { time: 'HARI 1 - 09.00 - 12.00', activity: 'Kedatangan di Venue & Outbound Sinergi', desc: 'Tiba di lapangan resort Batu, penyambutan welcome drink, dan sesi outbound team building.' },
      { time: 'HARI 1 - 12.00 - 14.00', activity: 'Makan Siang & Check-In Kamar Resort', desc: 'Makan siang prasmanan, pembagian kunci kamar hotel/villa, dan waktu istirahat santai.' },
      { time: 'HARI 1 - 14.00 - 17.00', activity: 'Free Time & Fasilitas Resort', desc: 'Menikmati kolam renang, panorama gunung, atau gladi resik pementasan divisi.' },
      { time: 'HARI 1 - 18.30 - 22.00', activity: 'Grand Gala Dinner & Awarding Night', desc: 'Makan malam buffet mewah, sambutan direksi, penganugerahan karyawan, live band, dan doorprize.' },
      { time: 'HARI 2 - 07.00 - 09.00', activity: 'Sarapan Pagi Buffet & Senam Sehat', desc: 'Sarapan pagi di resto hotel, jalan santai keliling area asri resort, dan packing.' },
      { time: 'HARI 2 - 09.00 - 12.00', activity: 'City Tour Kota Batu & Belanja Oleh-Oleh', desc: 'Kunjungan ke pusat oleh-oleh khas Batu dan persiapan pulang menuju kota asal.' }
    ],
    duration: '2 Hari 1 Malam / 1 Hari',
    priceLabel: 'Konsultasi Bujet',
    featured: true,
    sortOrder: 4,
  },

  // ================= FAMILY GATHERING =================
  {
    id: 'pkg-5',
    categorySlug: 'family-gathering',
    categoryName: 'Family Gathering',
    title: 'Paket Hemat',
    slug: 'paket-hemat',
    excerpt: 'Pilihan efisien dan hangat untuk gathering keluarga dengan fasilitas inti lengkap.',
    description: 'Paket Hemat Family Gathering dirancang khusus untuk paguyuban keluarga, komunitas arisan, atau divisi kantor yang ingin menyelenggarakan silaturahmi penuh keakraban dengan alokasi anggaran efisien. Kegiatan diisi dengan senam ceria, permainan kebersamaan santai yang tidak melelahkan, serta arena bermain khusus anak-anak di taman rumput sejuk Kota Batu.',
    imageUrl: '/images/packages/paket-hemat.webp',
    galleryImages: [
      "/images/packages/paket-hemat.webp",
      "/images/kebutuhan-gambar/family-picnic-gathering.webp",
      "/images/kebutuhan-gambar/family-tug-of-war.webp"
    ],
    activities: [
      'Senam Pagi Bersama Ceria untuk Seluruh Anggota Keluarga',
      'Fun Family Games (Lomba Kekompakan Pasangan Suami-Istri)',
      'Kids Games Interaktif (Lomba Kelereng Sendok, Tangkap Ikan/Bola)',
      'Sesi Foto Keluarga Berlatar Alam Pegunungan Asri',
      'Tukar Kado & Doorprize Kebersamaan'
    ],
    features: [
      'Fasilitator Ramah Keluarga & Pendamping Khusus Anak',
      'Peralatan Game Kebersamaan Standar Lengkap',
      'Sound System Portable untuk Lapangan',
      'Air Mineral Kemasan Selama Acara',
      'Kotak P3K Standar Penanganan Pertama'
    ],
    addons: [
      'Snack Box Tradisional & Teh Hangat Melati',
      'Makan Siang Bento Box Higienis Ramah Anak',
      'Spanduk Banner Foto Keluarga Custom',
      'Dokumentasi Foto Digital Kamera Mirrorless',
      'Tiket Terusan Wisata Petik Apel Mandiri'
    ],
    rundown: [
      { time: '08.30 - 09.00', activity: 'Kedatangan & Kumpul Hangat', desc: 'Keluarga berkumpul di area taman rumput, pembagian tanda peserta dan welcome drink.' },
      { time: '09.00 - 09.30', activity: 'Senam Sehat Ceria Bersama', desc: 'Peregangan tubuh santai diiringi musik gembira yang diikuti anak hingga orang tua.' },
      { time: '09.30 - 11.00', activity: 'Family Synergy Games', desc: 'Lomba-lomba lucu kebersamaan keluarga, estafet ceria, dan sesi anak-anak.' },
      { time: '11.00 - 11.45', activity: 'Tukar Kado & Pembagian Doorprize', desc: 'Momen kehangatan saling berbagi kado dan pengundian bingkisan hadiah.' },
      { time: '11.45 - 12.30', activity: 'Foto Bersama & Sayonara', desc: 'Foto bersama seluruh keluarga besar dan penutupan acara.' }
    ],
    duration: 'Half Day (Setengah Hari)',
    priceLabel: 'Konsultasi Bujet',
    featured: false,
    sortOrder: 5,
  },
  {
    id: 'pkg-6',
    categorySlug: 'family-gathering',
    categoryName: 'Family Gathering',
    title: 'Paket Standard',
    slug: 'paket-standard',
    excerpt: 'Paket favorit dengan rangkaian aktivitas beragam dan makan siang prasmanan nusantara.',
    description: 'Pilihan paling populer bagi perusahaan yang mengundang karyawan beserta anak dan pasangan. Mengkombinasikan aktivitas outdoor ceria, tenda peneduh untuk orang tua/lansia, area bermain interaktif balita, serta sajian makan siang prasmanan istimewa khas Malang yang menggugah selera di venue bernuansa asri.',
    imageUrl: '/images/packages/paket-standard.webp',
    galleryImages: [
      "/images/packages/paket-standard.webp",
      "/images/kebutuhan-gambar/family-pine-forest.webp",
      "/images/kebutuhan-gambar/family-carnival-games.webp"
    ],
    activities: [
      'Ice Breaking & Yel-yel Keluarga Ceria',
      'Lomba Estafet Kekompakan Pasangan (Fun Couple Relay)',
      'Kids Zone Berhadiah (Balap Karung Helm Mini, Mewarnai, Lempar Sasaran)',
      'Sesi Keakraban Lintas Generasi & Doorprize Meriah',
      'Foto Kontingen Keluarga Perusahaan'
    ],
    features: [
      'Tim Fasilitator Utama & Tim Khusus Pemandu Anak (Kids Care)',
      'Makan Siang Prasmanan Lengkap (Menu Dewasa & Non-Pedas Ramah Anak)',
      'Snack Rebusan Tradisional & Minuman Hangat Sambutan',
      'Sound System Wireless & Peralatan Games Komplit',
      'Spanduk Banner Backdrop Acara 4x1.5 Meter',
      'Dokumentasi Foto Liputan Sepanjang Hari'
    ],
    addons: [
      'Stan Face Painting & Balon Karakter untuk Balita',
      'Live Acoustic Music / Organ Tunggal Penghibur Lansia',
      'Stan Kudapan Khas: Bakso Malang Hangat & Es Krim Puter',
      'Kaos Family Gathering Sablon Warna-Warni Satu Keluarga',
      'Shuttle Transportasi Elf Long dari Stasiun/Kantor'
    ],
    rundown: [
      { time: '08.00 - 08.45', activity: 'Penyambutan & Welcome Snack', desc: 'Peserta tiba, menikmati pisang rebus, wedang jahe, dan registrasi doorprize.' },
      { time: '08.45 - 09.30', activity: 'Pembukaan & Ice Breaking Keluarga', desc: 'Sambutan ketua panitia, doa, serta pencairan suasana yang hangat dan inklusif.' },
      { time: '09.30 - 11.30', activity: 'Simulasi Games Paralel (Kids & Adults)', desc: 'Anak-anak bermain di Kids Corner, para orang tua mengikuti kompetisi fun games berhadiah.' },
      { time: '11.30 - 13.00', activity: 'ISHOMA Prasmanan Nusantara', desc: 'Menikmati hidangan makan siang prasmanan bersama seluruh keluarga di gazebo asri.' },
      { time: '13.00 - 14.30', activity: 'Panggung Doorprize & Atraksi Anak', desc: 'Penampilan bakat anak karyawan, kuis lucu keluarga, dan pengundian hadiah utama.' },
      { time: '14.30 - 15.00', activity: 'Sesi Foto Bersama & Penutupan', desc: 'Foto per keluarga dan seluruh peserta dengan banner kebanggaan korporasi.' }
    ],
    duration: 'Full Day (1 Hari Penuh)',
    priceLabel: 'Konsultasi Bujet',
    featured: true,
    sortOrder: 6,
  },
  {
    id: 'pkg-7',
    categorySlug: 'family-gathering',
    categoryName: 'Family Gathering',
    title: 'Paket Premium',
    slug: 'paket-premium',
    excerpt: 'Fasilitas premium dengan venue eksklusif resort Batu dan suguhan hiburan lengkap.',
    description: 'Paket mewah dan prestisius yang menghadirkan kenyamanan maksimal bagi keluarga besar korporasi. Dilaksanakan di venue resort bintang 5 Kota Batu dengan akses jalan lebar, bebas tanjakan curam, fasilitas kamar mewah/cottage kayu, katering hotel berbintang, hiburan live music, playground modern, serta souvenir eksklusif bagi setiap kepala keluarga.',
    imageUrl: '/images/packages/paket-premium.webp',
    galleryImages: [
      "/images/packages/paket-premium.webp",
      "/images/kebutuhan-gambar/family-gathering-mountain.webp",
      "/images/kebutuhan-gambar/family-gathering-lakeside.webp"
    ],
    activities: [
      'VIP Welcome Session dengan Alunan Musik Tradisional',
      'Family Amazing Race Santai di Area Taman Resort',
      'Kids Creative Workshop (Membuat Prakarya & Melukis Gerabah)',
      'Family Gala Barbeque Night di Tepi Kolam Renang',
      'Pesta Kembang Api & Panggung Hiburan Bertabur Hadiah'
    ],
    features: [
      'Akomodasi Menginap di Villa / Resort Bintang 5 Kota Batu',
      'Akses Privat Lapangan Outbound & Convention Ballroom',
      'Katering Buffet Spesial 3x Makan + 2x Coffee Break Bintang 5',
      'Tim Fasilitator, MC Kondang, & Tim Medis Berdedikasi',
      'Sound System Line Array, Tata Lampu Panggung, & Live Acoustic Band',
      'Dokumentasi Lengkap: Video Teaser, Video Drone 4K & Cetak Foto Instan'
    ],
    addons: [
      'Paket Doorprize Premium (Sepeda Listrik, Smart TV, Gadget)',
      'Paket Goodie Bag Mewah untuk Seluruh Keluarga',
      'Tour Eksklusif Safari Bromo Sunrise Khusus Keluarga Inti',
      'Penyediaan Babysitter / Nanny On-Call Selama Acara',
      'Armada Bus Pariwisata Premium Luxury Class'
    ],
    rundown: [
      { time: 'HARI 1 - 10.00 - 12.00', activity: 'Penyambutan VIP & Check-In Resort', desc: 'Welcome drink mocktail segar, proses check-in villa cepat, dan waktu istirahat.' },
      { time: 'HARI 1 - 12.00 - 13.30', activity: 'Makan Siang Buffet Mewah', desc: 'Menikmati sajian katering istimewa di ballroom / resto bernuansa pemandangan gunung.' },
      { time: 'HARI 1 - 14.00 - 16.30', activity: 'Family Fun Outbound & Kids Workshop', desc: 'Permainan keakraban santai di lapangan rumput privat dan workshop seni bagi anak.' },
      { time: 'HARI 1 - 18.30 - 21.30', activity: 'Gala Dinner & Poolside Barbeque Night', desc: 'Makan malam BBQ iga bakar, kambing guling, live music santai, dan panggung doorprize.' },
      { time: 'HARI 2 - 07.00 - 09.00', activity: 'Sarapan Buffet & Berenang Santai', desc: 'Sarapan santai bersama keluarga, berenang di heated pool, dan foto keliling taman resort.' },
      { time: 'HARI 2 - 10.00 - 12.00', activity: 'Penyerahan Kenang-Kenangan & Check-Out', desc: 'Pembagian goody bag eksklusif, ucapan terima kasih pimpinan, dan perjalanan kembali.' }
    ],
    duration: 'Full Day / Menginap (2D1N)',
    priceLabel: 'Konsultasi Bujet',
    featured: false,
    sortOrder: 7,
  },
  {
    id: 'pkg-8',
    categorySlug: 'family-gathering',
    categoryName: 'Family Gathering',
    title: 'Paket Custom',
    slug: 'paket-custom',
    excerpt: 'Disesuaikan sepenuhnya dengan rancangan kebutuhan, anggaran, dan tema keluarga Anda.',
    description: 'Fleksibilitas mutlak tanpa batasan paket kaku. Tim konsultan Provider Outbound siap merancang konsep gathering bertema khusus (misal: Jungle Adventure, Carnival Fest, atau Retro Picnic) yang disesuaikan secara presisi dengan alokasi bujet, jumlah rombongan, pemilihan akomodasi, dan preferensi kuliner Anda.',
    imageUrl: '/images/packages/paket-custom.webp',
    galleryImages: [
      "/images/packages/paket-custom.webp",
      "/images/kebutuhan-gambar/tour-group-celebration.webp",
      "/images/kebutuhan-gambar/morning-stretching-gathering.webp"
    ],
    activities: [
      'Konsep Tema Acara Menyesuaikan Permintaan Perusahaan',
      'Kombinasi Outbound dengan Wisata Petualangan / Agrowisata',
      'Pilihan Agenda Formal, Kasual, atau Pesta Taman Terbuka'
    ],
    features: [
      'Konsultasi Perencanaan Acara & Pembuatan Proposal Gratis',
      'Bebas Memilih Venue Mitra di Seluruh Malang Raya',
      'Fleksibilitas Pemilihan Menu Makanan & Susunan Acara',
      'Dukungan Penuh Legalitas, Perizinan, & Logistik Acara'
    ],
    addons: [
      'Semua fasilitas add-on dapat disesuaikan dengan kebutuhan instansi'
    ],
    rundown: [
      { time: 'Fleksibel', activity: 'Custom Itinerary', desc: 'Jadwal disusun menit demi menit bersama tim panitia internal agar selaras sempurna.' }
    ],
    duration: 'Fleksibel (1 Hari / 2 Hari / 3 Hari)',
    priceLabel: 'Konsultasi Bujet',
    featured: false,
    sortOrder: 8,
  },

  // ================= SEKOLAH =================
  {
    id: 'pkg-9',
    categorySlug: 'sekolah',
    categoryName: 'Sekolah',
    title: 'Outbound Pelajar',
    slug: 'outbound-pelajar',
    excerpt: 'Membangun keakraban kelas, sportivitas, dan kegembiraan belajar di luar ruang kelas.',
    description: 'Paket Outbound Pelajar dirancang khusus untuk siswa jenjang SD, SMP, hingga SMA/SMK dalam rangka masa orientasi siswa, jeda tengah semester (class meeting), atau pelepasan kelulusan. Menghadirkan permainan edukatif yang membangun sportivitas, kekompakan regu, saling menghargai perbedaan, serta melepas kejenuhan belajar di ruang kelas konvensional.',
    imageUrl: '/images/packages/outbound-pelajar.webp',
    galleryImages: [
      "/images/packages/outbound-pelajar.webp",
      "/images/kebutuhan-gambar/students-cheering-puzzle.webp",
      "/images/kebutuhan-gambar/students-wooden-clogs-bakiak.webp"
    ],
    activities: [
      'Yel-yel Kreatif & Formasi Regu Siswa',
      'Games Estafet Kerja Sama (Bakiak Panjang, Pipa Bocor, Halang Rintang)',
      'Water Splash Fun & Permainan Basah-Basahan Ceria',
      'Sesi Motivasi Belajar & Saling Memaafkan Antar Teman',
      'Foto Bersama Satu Angkatan / Kelas'
    ],
    features: [
      'Fasilitator Khusus Pelajar yang Sabar, Komunikatif & Ramah Anak',
      'Peralatan Permainan Aman Bebas Benda Tajam',
      'Sound System Lapangan & Megaphone Pemandu',
      'Air Mineral Isi Ulang & Snack Sehat Siswa',
      'Tim Medis Lapangan & Obat-Obatan P3K Lengkap'
    ],
    addons: [
      'Makan Siang Bento Box Higienis Ramah Kantong Pelajar',
      'Kaos Outbound Siswa Sablon Keren Satu Angkatan',
      'Dokumentasi Video Reels TikTok / Instagram Sekolah',
      'Sertifikat Partisipasi Outbound untuk Portofolio Siswa',
      'Tiket Wisata Edukasi Tambahan (Museum Tubuh / Jatim Park)'
    ],
    rundown: [
      { time: '08.00 - 08.30', activity: 'Kedatangan di Ground & Baris Berbaris', desc: 'Siswa tiba, pengelompokan regu kelas, dan penitipan tas di area terpusat.' },
      { time: '08.30 - 09.30', activity: 'Ice Breaking & Pembentukan Karakter Ceria', desc: 'Senam tawa, yel-yel penuh semangat, dan pengenalan instruktur pemandu.' },
      { time: '09.30 - 11.30', activity: 'Pos Simulasi Kerja Sama Regu', desc: 'Rotasi permainan di pos-pos tantangan kekompakan dan ketangkasan fisik.' },
      { time: '11.30 - 12.30', activity: 'Water Fun & Bersih Diri', desc: 'Permainan air penutup yang menyegarkan dilanjutkan bilas di kamar mandi.' },
      { time: '12.30 - 13.30', activity: 'Makan Siang Bersama & Penutupan', desc: 'Makan siang bersama beralas rumput dan pembagian hadiah regu terfavorit.' }
    ],
    duration: 'Half Day / Full Day',
    priceLabel: 'Konsultasi Bujet',
    featured: false,
    sortOrder: 9,
  },
  {
    id: 'pkg-10',
    categorySlug: 'sekolah',
    categoryName: 'Sekolah',
    title: 'Character Building',
    slug: 'character-building',
    excerpt: 'Menanamkan kedisiplinan, integritas pribadi, dan ketangguhan mental siswa.',
    description: 'Program Character Building fokus pada pembentukan integritas, sopan santun (attitude), kemandirian, dan ketahanan mental menghadapi tantangan zaman modern. Menggunakan pendekatan semi-militer humanis yang mendidik tanpa kekerasan fisik, melatih siswa mematuhi aturan, bertanggung jawab atas tugas kelompok, dan menghormati guru serta sesama rekan.',
    imageUrl: '/images/packages/character-building.webp',
    galleryImages: [
      "/images/packages/character-building.webp",
      "/images/kebutuhan-gambar/students-listening-trainer.webp",
      "/images/kebutuhan-gambar/young-adults-log-bridge.webp"
    ],
    activities: [
      'PBB Dasar & Pembiasaan Disiplin Waktu Ketat',
      'Simulasi Ketahanan Mental (Mental Toughness Challenge)',
      'Problem Solving Rintangan Komando Terarah',
      'Sesi Refleksi Renungan Malam & Bakti Orang Tua / Guru',
      'Penyusunan Ikrar Karakter dan Integritas Siswa'
    ],
    features: [
      'Instruktur Bersertifikasi Pelatih Karakter & Pembina Kedisiplinan',
      'Area Lapangan Terisolasi yang Aman & Kondusif di Alam Batu',
      'Buku Panduan Karakter Siswa & Lembar Evaluasi Diri',
      'Makan Teratur Menu Sehat & Suplemen Susu Segar',
      'Posko Kesehatan Siaga 24 Jam dengan Tim Medis Profesional'
    ],
    addons: [
      'Sesi Hipnoterapi Edukasi & Motivasi Ujian Nasional / Sekolah',
      'Buku Jurnal Harian Pembiasaan Karakter Pasca-Outbound',
      'Rompi Pelatihan Karakter Siswa dengan Nomor Dada',
      'Dokumentasi Video Dokumenter untuk Akreditasi Sekolah',
      'Transportasi Armada Truk Tertutup TNI / Bus Pariwisata Aman'
    ],
    rundown: [
      { time: 'HARI 1 - 08.00 - 09.30', activity: 'Apel Pembukaan & Tata Tertib', desc: 'Upacara pembukaan bersama kepala sekolah dan serah terima binaan ke instruktur.' },
      { time: 'HARI 1 - 09.30 - 12.00', activity: 'Latihan Disiplin & Sinergi Regu', desc: 'PBB dasar, penanaman budaya antri, kepatuhan instruksi, dan manajemen waktu.' },
      { time: 'HARI 1 - 12.00 - 13.30', activity: 'Makan Siang Komando & ISHOMA', desc: 'Edukasi adab makan tertib bersama tanpa menyisakan sebutir nasi pun.' },
      { time: 'HARI 1 - 13.30 - 16.30', activity: 'Rintangan Ketangguhan Mental', desc: 'Simulasi halang rintang alam yang menguji determinasi dan keberanian mengambil risiko positif.' },
      { time: 'HARI 1 - 19.00 - 21.30', activity: 'Renungan Malam: Air Mata Kasih Guru & Ortu', desc: 'Sesi kontemplasi emosional menyadari kesalahan, meminta maaf, dan berbakti kepada orang tua.' },
      { time: 'HARI 2 - 05.00 - 07.30', activity: 'Ibadah Pagi & Senam Komando', desc: 'Ibadah bersama dilanjutkan senam fisik bugar dan sarapan pagi bergizi.' },
      { time: 'HARI 2 - 08.00 - 11.00', activity: 'Ikrar Karakter & Apel Penutupan', desc: 'Pengucapan sumpah integritas siswa dan penyerahan kembali siswa kepada pihak sekolah.' }
    ],
    duration: '1 Hari Penuh / 2 Hari 1 Malam',
    priceLabel: 'Konsultasi Bujet',
    featured: true,
    sortOrder: 10,
  },
  {
    id: 'pkg-11',
    categorySlug: 'sekolah',
    categoryName: 'Sekolah',
    title: 'LDKS & Leadership',
    slug: 'ldks-leadership',
    excerpt: 'Latihan Dasar Kepemimpinan Siswa untuk pengurus OSIS, MPK, dan ekstrakurikuler.',
    description: 'Paket LDKS (Latihan Dasar Kepemimpinan Siswa) dirancang komprehensif bagi calon pengurus OSIS, MPK, Pramuka, PMR, dan ekstrakurikuler sekolah. Menggabungkan materi kepemimpinan organisasional, teknik sidang, manajemen konflik, simulasi pergerakan malam (Caraka Malam), hingga perancangan Program Kerja tahunan yang terstruktur di kawasan perkemahan sejuk Kota Batu.',
    imageUrl: '/images/packages/ldks-leadership.webp',
    galleryImages: [
      "/images/packages/ldks-leadership.webp",
      "/images/kebutuhan-gambar/student-ldks-megaphone.webp",
      "/images/kebutuhan-gambar/low-rope-team-building.webp"
    ],
    activities: [
      'Materi Dasar Kepemimpinan & Manajemen Organisasi Sekolah',
      'Teknik Persidangan, Notulensi & Dinamika Kelompok',
      'Simulasi Survival Alam Bebas & Navigasi Kompas',
      'Caraka Malam / Jurit Malam Mentalitas Pemimpin Muda',
      'Workshop Perumusan Program Kerja Unggulan OSIS/MPK'
    ],
    features: [
      'Narasumber Berpengalaman Organisasi & Master Trainer BNSP',
      'Ground Perkemahan / Villa Aman dengan Akses Terjaga',
      'Tenda Dome Bersih + Matras & Sleeping Bag Siap Pakai',
      'Konsumsi Penuh 4x Makan + Suplemen Wedang Jahe Malam',
      'Sertifikat Resmi LDKS untuk Dokumen Portofolio Pengurus',
      'Dukungan Sound System, Listrik Lapangan & P3K Standby'
    ],
    addons: [
      'Pembuatan Kemeja PDH / PDL Khusus Pengurus OSIS Bordir',
      'Pin Bros Lencana Kepemimpinan Siswa Kuningan',
      'Api Unggun Besar & Sesi Jagung Bakar Akrab Malam',
      'Dokumentasi Video Cinematic Profil Pengurus Baru',
      'Modul Cetak Administrasi & Manajemen Proposal Sekolah'
    ],
    rundown: [
      { time: 'HARI 1 - 13.00 - 14.30', activity: 'Registrasi & Pendirian Tenda', desc: 'Siswa mendirikan tenda dome bersama regu, melatih kemandirian dan pembagian tugas.' },
      { time: 'HARI 1 - 14.30 - 17.30', activity: 'Materi Kepemimpinan & Manajemen Konflik', desc: 'Pemaparan studi kasus organisasi, public speaking, dan pemecahan masalah sekolah.' },
      { time: 'HARI 1 - 19.30 - 23.00', activity: 'Caraka Malam & Uji Nyali Mentalitas', desc: 'Penjelajahan rute hutan pinus secara mandiri untuk menguji keberanian dan kejujuran amanah.' },
      { time: 'HARI 2 - 07.30 - 10.30', activity: 'Simulasi Sidang Pleno & Bedah Proker', desc: 'Praktik tata tertib persidangan dan pemaparan rencana kerja OSIS/MPK di hadapan guru pembina.' },
      { time: 'HARI 2 - 10.30 - 12.00', activity: 'Pelantikan Simbolis & Penutupan', desc: 'Penyematan tanda kepemimpinan dan apel penutupan resmi.' }
    ],
    duration: '2 Hari 1 Malam',
    priceLabel: 'Konsultasi Bujet',
    featured: false,
    sortOrder: 11,
  },
  {
    id: 'pkg-12',
    categorySlug: 'sekolah',
    categoryName: 'Sekolah',
    title: 'Edukasi & Alam',
    slug: 'edukasi-alam',
    excerpt: 'Mengenalkan kelestarian lingkungan hidup, keanekaragaman flora fauna, dan pertanian Batu.',
    description: 'Pembelajaran kontekstual luar ruang (Outdoor Learning) yang selaras dengan Kurikulum Merdeka dan Projek Penguatan Profil Pelajar Pancasila (P5). Mengajak siswa terjun langsung ke kebun apel khas Batu, mempelajari pertanian organik, konservasi sumber mata air, serta trekking alam menyusuri lembah hijau dipandu pakar pertanian lokal.',
    imageUrl: '/images/packages/edukasi-alam.webp',
    galleryImages: [
      "/images/packages/edukasi-alam.webp",
      "/images/kebutuhan-gambar/tourists-picking-apples.webp",
      "/images/kebutuhan-gambar/schoolchildren-planting-tree.webp"
    ],
    activities: [
      'Edukasi Petik Buah Apel Langsung dari Pohon di Kebun Batu',
      'Workshop Pembuatan Pupuk Kompos & Menanam Bibit Sayur Organik',
      'Trekking Alam Menyusuri Aliran Irigasi & Hutan Hijau',
      'Pengamatan Siklus Hidup Tanaman & Ekosistem Serangga',
      'Kuis Cerdas Cermat Peduli Lingkungan Hidup Berhadiah'
    ],
    features: [
      'Pemandu Ahli Pertanian & Edukator Alam Ramah Siswa',
      'Tiket Masuk Perkebunan Apel & Hak Petik Makan Sepuasnya',
      'Bibit Tanaman & Polybag untuk Dibawa Pulang Siswa',
      'Snack Sehat Buah Segar & Air Mineral',
      'Lembar Kerja Edukasi (Worksheet Siswa)'
    ],
    addons: [
      'Paket Oleh-oleh Apel Segar Petik Sendiri (1-2 Kg/Siswa)',
      'Workshop Pembuatan Olahan Keripik Apel / Jus Apel Murni',
      'Kunjungan Tambahan ke Peternakan Sapi Perah & Memerah Susu',
      'Bento Makan Siang Menu Sehat 4 Sehat 5 Sempurna',
      'Topi Petani Caping Bambu Lukis Edukatif'
    ],
    rundown: [
      { time: '08.30 - 09.00', activity: 'Tiba di Agrowisata & Sambutan Edukator', desc: 'Siswa berkumpul di pendopo perkebunan, mendengarkan pengantar ekosistem pertanian Batu.' },
      { time: '09.00 - 10.15', activity: 'Eksplorasi Kebun Apel & Petik Buah', desc: 'Praktik memilih buah apel matang, memetik dengan benar, dan makan buah segar di kebun.' },
      { time: '10.15 - 11.30', activity: 'Praktek Tanam Sayur & Pemupukan Organik', desc: 'Siswa langsung mempraktikkan pencampuran media tanam dan membawa pulang bibit tanamannya.' },
      { time: '11.30 - 12.30', activity: 'Trekking Edukasi Sungai & Cuci Tangan', desc: 'Jalan santai mengamati flora fauna lokal dan pembersihan diri di sumber air jernih.' },
      { time: '12.30 - 13.30', activity: 'Makan Siang & Evaluasi Worksheet', desc: 'Menikmati makan siang bersama dan pengisian lembar refleksi pembelajaran alam.' }
    ],
    duration: 'Half Day (Setengah Hari)',
    priceLabel: 'Konsultasi Bujet',
    featured: false,
    sortOrder: 12,
  },

  // ================= OUTBOUND WISATA =================
  {
    id: 'pkg-13',
    categorySlug: 'wisata-adventure',
    categoryName: 'Outbound Wisata',
    title: 'Outbound + Wisata',
    slug: 'outbound-wisata',
    excerpt: 'Perpaduan outbound menyenangkan dengan kunjungan ke destinasi wisata populer Batu Malang.',
    description: 'Paket kombinasi sempurna yang memadukan sesi team building energik di pagi hari dengan rekreasi santai ke destinasi wisata ikonik Kota Batu di siang dan sore hari. Sangat ideal bagi rombongan dari luar kota yang ingin mendapatkan manfaat kebersamaan tim sekaligus menikmati pesona pariwisata Batu Malang tanpa repot mengatur tiket dan transportasi terpisah.',
    imageUrl: '/images/packages/outbound-wisata.webp',
    galleryImages: [
      "/images/packages/outbound-wisata.webp",
      "/images/destinasi/coban-rondo.webp",
      "/images/destinasi/hotel-jambuluwuk-resort.webp"
    ],
    activities: [
      'Sesi Pagi: Energizing Outbound & Fun Team Building',
      'Makan Siang Prasmanan Khas Tradisional Batu Malang',
      'Kunjungan Wisata Unggulan (Jatim Park 2/3 / Museum Angkut / Flora San Terra)',
      'Wisata Belanja Pusat Oleh-Oleh Khas Kota Wisata Batu'
    ],
    features: [
      'Fasilitator Outbound Berlisensi & Tour Leader Pendamping',
      'Tiket Masuk Terusan Destinasi Wisata Pilihan Resmi',
      'Makan Siang Prasmanan / Restoran Ternama di Kota Batu',
      'Peralatan Games Outbound & Sound System Lapangan',
      'Air Mineral Melimpah & Dokumentasi Foto Digital'
    ],
    addons: [
      'Tambahan Tiket Wisata Malam (Batu Night Spectacular / Malang Night Paradise)',
      'Sajian Makan Malam Kuliner Khas di Resto Panorama Indah',
      'Sewa Bus Pariwisata Eksekutif AC Seat 30/45/59',
      'Kaos Wisata Rombongan Desain Eksklusif',
      'Paket Buah Apel Manalagi Segar untuk Buah Tangan'
    ],
    rundown: [
      { time: '08.00 - 11.30', activity: 'Sesi Outbound Team Building', desc: 'Pelaksanaan game kekompakan dan dinamika tim di lapangan hijau Coban Rondo / Coban Rais.' },
      { time: '11.30 - 13.00', activity: 'Bilas Bersih Diri & Makan Siang Khas Batu', desc: 'Istirahat sholat dan makan siang bersama dengan menu ayam kremes / rawon hangat.' },
      { time: '13.00 - 16.30', activity: 'Eksplorasi Destinasi Wisata Populer', desc: 'Rombongan menuju Museum Angkut / Jatim Park untuk menikmati wahana edukasi kelas dunia.' },
      { time: '16.30 - 18.00', activity: 'Wisata Belanja Oleh-Oleh Khas Batu', desc: 'Membeli buah apel, strudel, keripik buah, dan cinderamata sebelum perjalanan pulang.' }
    ],
    duration: '1 Hari (Full Day)',
    priceLabel: 'Konsultasi Bujet',
    featured: false,
    sortOrder: 13,
  },
  {
    id: 'pkg-14',
    categorySlug: 'wisata-adventure',
    categoryName: 'Outbound Wisata',
    title: 'Outbound + Rafting',
    slug: 'rafting',
    excerpt: 'Arung jeram seru di sungai alami dengan pemandangan tebing dan persawahan Batu - Pujon.',
    description: 'Kombinasi paket paling dicari korporasi dan komunitas petualang. Menggabungkan dinamika team building di darat dengan petualangan arung jeram (White Water Rafting) menaklukkan aliran hulu Sungai Brantas di Kaliwatu Rafting Kota Batu sepanjang 7 hingga 9 kilometer. Menguji keberanian, melatih kesiapan mental menghadapi arus deras, dan menumbuhkan kepercayaan total antar anggota perahu.',
    imageUrl: '/images/packages/rafting.webp',
    galleryImages: [
      "/images/packages/rafting.webp",
      "/images/kebutuhan-gambar/group-whitewater-rafting.webp",
      "/images/kebutuhan-gambar/rafting-team-celebrating.webp"
    ],
    activities: [
      'Outbound Team Building: Ice Breaking & Group Synergy Games',
      'Safety Briefing & Pengenalan Teknik Mendayung / Self Rescue',
      'Pengarungan Sungai Arus Deras Grade 2-3 Sepanjang 7-9 KM',
      'Menaklukkan Jeram Menantang & Tebing Alami Kaliwatu',
      'Rest Area Tengah Sungai: Kelapa Muda Segar & Gorengan Hangat'
    ],
    features: [
      'Perahu Karet Berstandar Internasional & Dayung Khusus',
      'Helm & Life Jacket (Pelampung) CE Standard Safety',
      'Skipper Guide Profesional & Tim Rescue Khusus di Tiap Jeram',
      'Shuttle Transportasi Lokal dari Basecamp ke Titik Start/Finish',
      'Fasilitas Kamar Mandi Bilas Bersih, Gazebo Tepi Sungai, & Asuransi Resmi',
      'Makan Siang Prasmanan Tradisional di Basecamp Tepi Sungai'
    ],
    addons: [
      'Sewa Action Camera GoPro Anti-Air Terpasang di Helm Perahu',
      'Dokumentasi Foto Aksi Jeram Ekstrem & Video Cinematic',
      'Wahana Ekstra Donut Boat / River Tubing Santai',
      'Simulasi Paintball Battle di Arena Tepi Sungai Kaliwatu',
      'Kaos Rafting Dry-Fit Eksklusif Cepat Kering'
    ],
    rundown: [
      { time: '08.00 - 10.00', activity: 'Sesi Outbound Team Building Darat', desc: 'Pemanasan, ice breaking, dan game sinkronisasi kekompakan di basecamp Kaliwatu.' },
      { time: '10.00 - 10.30', activity: 'Persiapan Rafting & Fitting Alat Safety', desc: 'Pemakaian pelampung, helm, pembagian regu perahu (4-5 orang), dan safety briefing.' },
      { time: '10.30 - 12.30', activity: 'Pengarungan Jeram Kaliwatu (7-9 KM)', desc: 'Mengarungi jeram-jeram seru di sungai alami, diselingi istirahat kelapa muda di tepi tebing.' },
      { time: '12.30 - 13.30', activity: 'Bilas Tubuh di Kamar Mandi Bersih & ISHOMA', desc: 'Mandi air bersih, berganti pakaian kering, dan istirahat santai.' },
      { time: '13.30 - 15.00', activity: 'Makan Siang Prasmanan Tepi Sungai & Sayonara', desc: 'Santap siang masakan ndeso hangat (sayur lodeh, ikan asin, sambal terasi) dan penutupan.' }
    ],
    duration: '±5 - 6 Jam Total Program (Pengarungan 2 Jam)',
    priceLabel: 'Konsultasi Bujet',
    featured: true,
    sortOrder: 14,
  },
  {
    id: 'pkg-15',
    categorySlug: 'wisata-adventure',
    categoryName: 'Outbound Wisata',
    title: 'Outbound + Offroad',
    slug: 'offroad-4x4',
    excerpt: 'Jelajah jalur ekstrem berlumpur dan perbukitan pinus menggunakan kendaraan Jeep 4x4.',
    description: 'Petualangan safari offroad ekstrem melintasi perbukitan pinus, kubangan lumpur menantang, dan lintasan bebatuan sungai menggunakan armada tangguh Jeep 4x4 / Land Rover klasik. Dipadukan dengan sesi outbound team building di tengah hutan pinus lereng pegunungan Kota Batu yang sejuk, memberikan sensasi adrenalin tak terlupakan bagi seluruh rombongan.',
    imageUrl: '/images/packages/offroad-4x4.webp',
    galleryImages: [
      "/images/packages/offroad-4x4.webp",
      "/images/kebutuhan-gambar/jeeps-savannah-hill.webp",
      "/images/kebutuhan-gambar/land-rovers-mud-offroad.webp"
    ],
    activities: [
      'Konvoi Armada Jeep 4x4 / Land Rover Klasik Terbuka',
      'Menembus Lintasan Lumpur Ekstrem & Kubangan Air Hutan Pinus',
      'Stop Point Spot Foto Panorama Puncak Pegunungan Batu',
      'Sesi Outbound Team Building di Lapangan Terpencil Hutan Alami',
      'Drift Lumpur & Water Splash Challenge Penutup'
    ],
    features: [
      'Armada Jeep 4x4 / Land Rover Kondisi Prima & Bersih',
      'Driver Offroad Berpengalaman & Bersertifikasi Medan Ekstrem',
      'Bahan Bakar Kendaraan & Tiket Retribusi Jalur Perhutani',
      'Fasilitator Game Outbound di Basecamp Lapangan Pinus',
      'Air Mineral, Kopi/Teh Hangat di Hutan & Snack Tradisional',
      'Asuransi Resmi Petualangan & Tim Mekanik Siaga'
    ],
    addons: [
      'Simulasi Paintball Taktis di Hutan Pinus Jalur Offroad',
      'Dokumentasi Drone 4K Membuntuti Konvoi Jeep dari Udara',
      'Paket BBQ Iga / Ayam Bakar Hutan Pinus',
      'Bandana / Slayer Offroad Eksklusif Kenang-Kenangan Peserta',
      'Rute Lanjutan Sunrise Tour Gunung Bromo Terpadu'
    ],
    rundown: [
      { time: '08.00 - 08.45', activity: 'Kumpul Basecamp & Pembagian Jeep', desc: 'Registrasi peserta, pembagian armada (3-4 orang per jeep), dan briefing rute.' },
      { time: '08.45 - 10.45', activity: 'Ekspedisi Offroad Jalur Lumpur Pinus', desc: 'Konvoi membelah jalur lumpur menantang di kawasan Coban Talun / Coban Putri.' },
      { time: '10.45 - 12.30', activity: 'Sesi Outbound Games di Tengah Hutan', desc: 'Berhenti di basecamp hutan pinus untuk melaksanakan simulasi team building.' },
      { time: '12.30 - 13.30', activity: 'Makan Siang Nasi Kotak / Prasmanan Rimba', desc: 'Menikmati hidangan makan siang di tengah kesejukan alam terbuka.' },
      { time: '13.30 - 15.00', activity: 'Jalur Ekstrem Kepulangan & Finish Basecamp', desc: 'Melintasi rute air dan jalan aspal berliku kembali ke titik awal penjemputan.' }
    ],
    duration: '±5 Jam Jelajah & Outbound',
    priceLabel: 'Konsultasi Bujet',
    featured: true,
    sortOrder: 15,
  },
  {
    id: 'pkg-16',
    categorySlug: 'wisata-adventure',
    categoryName: 'Outbound Wisata',
    title: 'Outbound + Camping',
    slug: 'camping',
    excerpt: 'Bermalam di alam bebas dengan tenda nyaman, api unggun, dan udara dingin khas Batu.',
    description: 'Pengalaman menyatu dengan alam bebas (Nature Immersion) yang seutuhnya. Peserta diajak mendirikan tenda dome bersama, mengikuti simulasi survival dan team building di ketinggian 1.200 mdpl, bercengkerama di depan hangatnya api unggun malam hari di bawah taburan bintang, serta menyambut matahari terbit (golden sunrise) dengan secangkir kopi hangat khas Malang.',
    imageUrl: '/images/packages/camping.webp',
    galleryImages: [
      "/images/packages/camping.webp",
      "/images/kebutuhan-gambar/friends-campfire-gathering.webp",
      "/images/kebutuhan-gambar/prog-glamping.webp"
    ],
    activities: [
      'Mendirikan Tenda Dome Bersama & Manajemen Camp Alam Bebas',
      'Outbound Team Building di Lapangan Rumput Pegunungan Sejuk',
      'Malam Keakraban di Depan Kobaran Api Unggun Hangat',
      'BBQ Sosis, Jagung Bakar, & Wedang Jahe Tradisional',
      'Morning Sunrise Trekking Menembus Kabut Hutan Pinus'
    ],
    features: [
      'Tenda Dome Double-Layer Kapasitas 4 Orang + Matras Spon Bersih',
      'Kayu Bakar Api Unggun Melimpah & Penerangan Area Camp',
      'Akses Toilet Bersih dengan Air Mengalir di Lokasi Perkemahan',
      'Makan Lengkap 3x (Makan Malam BBQ, Sarapan Pagi, Makan Siang)',
      'Fasilitator Outbound, Ranger Hutan, & Tim Keamanan 24 Jam',
      'Peralatan Masak Kompor Portable & Coffee/Tea Maker Siaga'
    ],
    addons: [
      'Upgrade Tenda Safari Glamping Mewah dengan Kasur Springbed',
      'Sesi Kambing Guling Utuh di Depan Api Unggun',
      'Live Acoustic Session Mengiringi Malam Api Unggun',
      'Penjelajahan Safari Jeep 4x4 di Pagi Hari ke Kebun Apel',
      'Sleeping Bag Bersih & Bantal Tiup Pribadi untuk Tiap Peserta'
    ],
    rundown: [
      { time: 'HARI 1 - 14.00 - 15.30', activity: 'Check-In Camping Ground & Setup Tenda', desc: 'Tiba di lokasi perkemahan, pembagian tenda, dan sesi setup camp bersama tim.' },
      { time: 'HARI 1 - 15.30 - 17.30', activity: 'Outbound Games Puncak Bukit', desc: 'Simulasi team building santai di lapangan rumput dengan latar sunset pegunungan.' },
      { time: 'HARI 1 - 17.30 - 19.00', activity: 'Bilas Diri, Ibadah & Persiapan Malam', desc: 'Menikmati senja pegunungan dan persiapan malam api unggun.' },
      { time: 'HARI 1 - 19.00 - 22.00', activity: 'Api Unggun, BBQ Dinner & Akustik', desc: 'Makan malam barbeque, alunan musik santai, sharing session, dan bakar jagung.' },
      { time: 'HARI 2 - 05.30 - 07.00', activity: 'Sunrise Trekking & Seduh Kopi Pagi', desc: 'Menyusuri jalan setapak menyaksikan matahari terbit dan ngopi santai di alam.' },
      { time: 'HARI 2 - 07.00 - 08.30', activity: 'Sarapan Sehat & Bersih Lingkungan (Opsih)', desc: 'Sarapan bersama dan pembiasaan etika pecinta alam Operasi Bersih Sampah.' },
      { time: 'HARI 2 - 08.30 - 10.00', activity: 'Bongkar Tenda, Sayonara & Check-Out', desc: 'Pemberesan tenda, foto penutupan, dan perjalanan pulang.' }
    ],
    duration: '2 Hari 1 Malam (2D1N)',
    priceLabel: 'Konsultasi Bujet',
    featured: false,
    sortOrder: 16,
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-act-1',
    title: 'Outbound & Team Building Dinamis',
    caption: 'Aktivitas kolaboratif pemecahan masalah dan sinergi tim di hamparan rumput pinus Kota Batu.',
    altText: 'Peserta outbound bersemangat dalam simulasi kerja sama tim',
    category: 'Perusahaan',
    imageUrl: '/images/activities/outbound-team-building.webp',
    width: 1000,
    height: 667,
  },
  {
    id: 'gal-act-2',
    title: 'Petualangan Rafting Arung Jeram',
    caption: 'Sensasi menaklukkan arus deras dan jeram sungai alami Batu - Pujon dengan standar keselamatan tinggi.',
    altText: 'Rombongan rafting mendayung melewati jeram sungai dengan pelampung dan helm',
    category: 'Wisata & Adventure',
    imageUrl: '/images/activities/rafting-arung-jeram.webp',
    width: 1000,
    height: 667,
  },
  {
    id: 'gal-act-3',
    title: 'Berkemah di Bawah Rimbun Pinus',
    caption: 'Suasana berkemah nyaman dengan api unggun, udara sejuk pegunungan, dan gemerlap bintang.',
    altText: 'Deretan tenda perkemahan di antara pepohonan pinus alami Batu',
    category: 'Wisata & Adventure',
    imageUrl: '/images/activities/berkemah-camping-ground.webp',
    width: 1000,
    height: 667,
  },
  {
    id: 'gal-act-4',
    title: 'Jelajah Jalur Offroad Jeep 4x4',
    caption: 'Pacu adrenalin menembus rute ekstrem berbatu, lumpur, dan hutan dengan armada Jeep 4x4 prima.',
    altText: 'Konvoi mobil Jeep 4x4 melintasi jalur offroad menantang',
    category: 'Wisata & Adventure',
    imageUrl: '/images/activities/offroad-jeep-4x4.webp',
    width: 1000,
    height: 667,
  },
  {
    id: 'gal-act-5',
    title: 'Pesona Keindahan Alam & Air Terjun Batu',
    caption: 'Panorama alam pegunungan yang asri dan air terjun alami penyegar jiwa dan raga peserta.',
    altText: 'Panorama air terjun alami dan pepohonan hijau asri di kawasan Batu Malang',
    category: 'Wisata & Adventure',
    imageUrl: '/images/activities/keindahan-alam-batu.webp',
    width: 1000,
    height: 667,
  },
  {
    id: 'gal-1',
    title: 'Ice Breaking Team Korporat',
    caption: 'Keseruan peserta dalam sesi ice breaking pembuka di hamparan rumput pinus Kota Batu.',
    altText: 'Peserta outbound perusahaan bergandengan tangan dalam lingkaran ice breaking',
    category: 'Perusahaan',
    imageUrl: '/images/gallery/gallery-1.webp',
    width: 800,
    height: 600,
  },
  {
    id: 'gal-2',
    title: 'Simulasi Jembatan Tali Bambu',
    caption: 'Ujian kerja sama dan koordinasi tim membangun jembatan darurat.',
    altText: 'Karyawan bekerja sama menyusun bilah bambu sebagai lintasan jembatan tali',
    category: 'Perusahaan',
    imageUrl: '/images/gallery/gallery-2.webp',
    width: 800,
    height: 600,
  },
  {
    id: 'gal-3',
    title: 'Keceriaan Family Gathering',
    caption: 'Senyum riang keluarga besar dan anak-anak saat mengikuti game balon estafet.',
    altText: 'Anak-anak dan orang tua tertawa riang bermain game balon di taman terbuka',
    category: 'Family Gathering',
    imageUrl: '/images/gallery/gallery-3.webp',
    width: 800,
    height: 600,
  },
  {
    id: 'gal-4',
    title: 'LDKS Kepemimpinan Siswa',
    caption: 'Peserta LDKS mendengarkan instruksi kedisiplinan dan kepemimpinan di alam terbuka.',
    altText: 'Siswa berseragam olahraga berbaris rapi di bumi perkemahan pegunungan',
    category: 'Sekolah',
    imageUrl: '/images/gallery/gallery-4.webp',
    width: 800,
    height: 600,
  },
  {
    id: 'gal-5',
    title: 'Arung Jeram Sungai Batu',
    caption: 'Momen seru melintasi jeram berbatu dengan pengawasan pemandu profesional.',
    altText: 'Perahu karet oranye meluncur di arus jeram sungai dengan peserta berhelm pelindung',
    category: 'Wisata & Adventure',
    imageUrl: '/images/gallery/gallery-5.webp',
    width: 800,
    height: 600,
  },
  {
    id: 'gal-6',
    title: 'Aksi Jeep Offroad 4x4',
    caption: 'Konvoi armada jeep melintasi medan berlumpur di tengah hutan pinus lereng pegunungan.',
    altText: 'Jeep 4x4 hijau melintasi genangan lumpur dengan latar belakang hutan pinus rindang',
    category: 'Wisata & Adventure',
    imageUrl: '/images/gallery/gallery-6.webp',
    width: 800,
    height: 600,
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    pageSlug: '/',
    question: 'Bagaimana alur pemesanan dan konsultasi kegiatan di Vendor Outbound?',
    answer: 'Anda dapat menghubungi tim kami melalui tombol WhatsApp resmi (+62 822-1122-1909) atau melalui formulir konsultasi di halaman Kontak. Sampaikan perkiraan jumlah peserta, jenis kegiatan yang diminati, rencana tanggal, serta kebutuhan khusus. Kami akan menyusun rancangan program dan rekomendasi venue terbaik di Batu - Malang.',
    sortOrder: 1,
  },
  {
    id: 'faq-2',
    pageSlug: '/',
    question: 'Apakah agenda kegiatan dapat disesuaikan dengan kebutuhan internal kami?',
    answer: 'Ya, seluruh program baik team building perusahaan, family gathering, maupun outbound sekolah dapat disesuaikan (customized) dengan tema internal, nilai budaya organisasi, serta alokasi durasi yang Anda inginkan.',
    sortOrder: 2,
  },
  {
    id: 'faq-3',
    pageSlug: '/',
    question: 'Bagaimana kesiapan keamanan dan penanganan cuaca di lapangan?',
    answer: 'Setiap kegiatan outbound didampingi fasilitator dan instruktur lapangan yang terlatih dalam prosedur keselamatan. Kami selalu menyiapkan opsi rencana cadangan (plan B) di area semi-indoor jika cuaca hujan turun, serta kotak P3K standar di lokasi.',
    sortOrder: 3,
  },
  {
    id: 'faq-4',
    pageSlug: '/',
    question: 'Di mana saja lokasi kegiatan outbound yang disediakan di area Batu dan Malang?',
    answer: 'Kami memiliki rekomendasi lokasi beragam di Kota Batu, Pujon, Kasembon, dan Malang Raya, mulai dari bumi perkemahan hutan pinus, resort berfasilitas outbound, hingga sungai arung jeram dan jalur offroad.',
    sortOrder: 4,
  },
  {
    id: 'faq-5',
    pageSlug: '/',
    question: 'Berapa jumlah peserta minimal untuk menyelenggarakan outbound?',
    answer: 'Secara umum kegiatan dapat diselenggarakan untuk kelompok kecil (mulai dari 20 orang) hingga kelompok besar ratusan peserta. Konsultasikan jumlah peserta Anda kepada kami untuk pemilihan program dan venue yang paling proporsional.',
    sortOrder: 5,
  }
];

export const BLOG_POSTS: BlogPostItem[] = [
  {
    id: 'post-0',
    title: 'Panduan Lengkap Mempersiapkan Corporate Gathering & Outbound di Malang Raya 2026',
    slug: 'panduan-lengkap-corporate-gathering-malang',
    excerpt: 'Panduan komprehensif persiapan corporate gathering dan outbound kantor di Malang Raya 2026. Mulai dari timeline H-60, pemilihan zona venue Batu & Bromo, desain rundown seimbang, hingga tips efisiensi anggaran.',
    category: 'PANDUAN LENGKAP • CORPORATE GATHERING 2026',
    authorName: 'Arby Ardiansyah',
    authorRole: 'LEAD OUTBOUND CONSULTANT • CERTIFIED BNSP FACILITATOR',
    authorAvatar: '/images/author-artikel/author-artikel-arby-ardiansyah.webp',
    authorBio: 'Praktisi pengembangan SDM dan perancang program experiential learning dengan pengalaman lebih dari 8 tahun memfasilitasi ratusan kegiatan outbound korporat, BUMN, dan acara kebersamaan keluarga di seluruh Jawa Timur.',
    thumbnailUrl: '/images/hero-bromo-sunrise.webp',
    imageAlt: 'Corporate Gathering dan Outbound di Malang Raya 2026',
    seoTitle: 'Panduan Lengkap Mempersiapkan Corporate Gathering & Outbound di Malang Raya 2026 | Vendor Outbound',
    seoDescription: 'Panduan komprehensif persiapan corporate gathering dan outbound kantor di Malang Raya 2026. Mulai dari timeline H-60, pemilihan zona venue Batu & Bromo, desain rundown seimbang, hingga tips efisiensi anggaran.',
    canonicalUrl: 'https://vendoroutbound.id/blog/panduan-lengkap-corporate-gathering-malang',
    publishedAt: '18 Sep 2026',
    readingTimeMinutes: 6,
    answerFirst: 'Corporate gathering di Malang Raya menawarkan kombinasi terbaik antara udara sejuk pegunungan (18°C - 24°C), ratusan pilihan resort dan lapangan outbound hijau, serta aksesibilitas cepat via Tol Trans Jawa dan Bandara Abdulrachman Saleh. Ini adalah solusi tuntas menyegarkan motivasi kerja dan mengikis sekat komunikasi antar divisi.',
    summaryPoints: [
      'Mengapa Malang Raya No. 1: Kombinasi hawa sejuk pegunungan, akses jalan tol terpadu, dan fasilitas resort kelas dunia menjadikannya magnet gathering korporat no. 1 di Jawa Timur.',
      'Timeline Eksekusi Terstruktur: Tahapan persiapan dari H-60 hingga Hari H agar panitia internal bebas stres dan program berjalan presisi.',
      'Kombinasi Modul Efektif: Memadukan team building experiential learning, fun games pemecah kejenuhan, refreshing alam, dan gala dinner awarding night.',
      'Efisiensi Anggaran & Venue: Kiat praktis negosiasi skema all-in terpadu guna memaksimalkan ROI kegiatan pengembangan SDM tanpa memangkas kualitas fasilitas.'
    ],
    faqs: [
      {
        question: 'Berapa jumlah minimum dan maksimum peserta untuk gathering di Vendor Outbound?',
        answer: 'Layanan kami fleksibel mulai dari rombongan skala kecil 20 peserta, medium 50-100 orang, hingga mega-gathering korporasi di atas 500 orang dengan manajemen logistik profesional.'
      },
      {
        question: 'Apakah paket outbound Vendor Outbound sudah mencakup transportasi dan akomodasi all-in?',
        answer: 'Ya, kami menyediakan paket lengkap All-In mulai dari bus pariwisata eksekutif, rekomendasi hotel/resort/glamping, katering prasmanan, fasilitator berlisensi BNSP, sound system, perizinan, hingga dokumentasi foto dan video drone.'
      },
      {
        question: 'Bagaimana rencana cadangan jika cuaca mendadak hujan saat sesi outdoor?',
        answer: 'Seluruh venue rekanan kami memiliki pendopo atau ballroom semi-indoor. Fasilitator kami telah tersertifikasi untuk menjalankan contingency plan berupa indoor dynamic games berenergi tinggi tanpa mengurangi esensi pembelajaran.'
      }
    ],
    body: `
<h2 id="mengapa-malang-raya">1. Mengapa Malang Raya Jadi Destinasi Pilihan Utama Corporate Gathering 2026?</h2>
<p>Memasuki tahun 2026, dinamika dunia industri bergerak semakin cepat dan menuntut ketahanan mental serta kecepatan adaptasi tinggi. Tekanan target tahunan, rutinitas kerja hibrida, serta interaksi serba digital kerap melahirkan fenomena <em>silo mentality</em> dan keletihan kerja (<em>work burnout</em>). Oleh karena itu, agenda tahunan corporate gathering bukan lagi sekadar agenda jalan-jalan biasa, melainkan investasi strategis manajemen untuk merekatkan kembali tali sinergi, menumbuhkan rasa kepemilikan (<em>sense of belonging</em>), dan menyelaraskan visi korporasi.</p>
<p>Malang Raya—yang mencakup Kota Malang, Kota Wisata Batu, dan Kabupaten Malang—terus menempati urutan teratas destinasi favorit perusahaan nasional maupun BUMN. Ketinggian wilayah yang berada di lereng Gunung Arjuno, Panderman, dan Semeru menghadirkan atmosfer sejuk alami yang secara ilmiah terbukti menurunkan hormon kortisol penyebab stres. Peserta dapat bernapas lega, melepaskan kepenatan rutinitas kota metropolitan, dan membuka diri dalam setiap sesi kebersamaan.</p>

<!-- BACA JUGA BOX 1 -->
<div class="baca-juga-box">
<div class="icon"><i class="fas fa-book-open"></i></div>
<div class="thumb">
<img src="/images/dest-batu-malang.webp" alt="10 Tips Menentukan Lokasi Outbound" loading="lazy">
</div>
<div class="content">
<div class="label">Tips HRD &amp; Panitia</div>
<h4><a href="/blog/panduan-memilih-lokasi-outbound-batu-malang">10 Tips Krusial Menentukan Lokasi Outbound yang Nyaman &amp; Aman untuk Karyawan</a></h4>
<p>Ketahui kriteria kelayakan kontur lapangan rumput, akses bus besar, dan rasio toilet sebelum mengunci lokasi acara kantor.</p>
</div>
</div>

<h2 id="timeline-persiapan-h60">2. Timeline Terstruktur Persiapan Gathering Perusahaan (H-60 Hingga Hari H)</h2>
<p>Keberhasilan gathering perusahaan berskala besar ditentukan oleh perencanaan yang matang sejak jauh hari. Sering kali panitia internal kewalahan karena menunda koordinasi vendor hingga mendekati hari pelaksanaan. Berikut adalah alur kerja profesional yang terbukti menjaga kelancaran persiapan:</p>

<div style="display:flex;flex-direction:column;gap:18px;margin:24px 0;">
<div style="background:#FFFFFF;border:1px solid #E5E7EB;border-left:5px solid var(--primary);padding:22px;border-radius:10px;box-shadow:0 4px 12px rgba(0,0,0,0.03);">
<h3 style="margin:0 0 8px 0;color:var(--text-dark);font-size:1.15rem;"><i class="fas fa-calendar-check" style="color:var(--primary);margin-right:8px;"></i> A. Fase H-60: Pembentukan Panitia &amp; Penentuan Objective Acara</h3>
<p style="margin:0 0 10px 0;color:var(--text-muted);font-size:0.94rem;">
Bentuk panitia kecil lintas departemen (Ketua, Acara, Logistik, Akomodasi, Konsumsi). Rumuskan target inti: apakah fokus pada rekonsiliasi tim (team building intensif), apresiasi kinerja (leisure &amp; rewarding), atau peluncuran target kuartal baru.
</p>
<p style="margin:0;color:var(--text-dark);font-size:0.92rem;font-weight:600;">
Output: Dokumen Project Charter dan estimasi plafon anggaran per peserta.
</p>
</div>
<div style="background:#FFFFFF;border:1px solid #E5E7EB;border-left:5px solid var(--secondary);padding:22px;border-radius:10px;box-shadow:0 4px 12px rgba(0,0,0,0.03);">
<h3 style="margin:0 0 8px 0;color:var(--text-dark);font-size:1.15rem;"><i class="fas fa-map-marked-alt" style="color:var(--secondary);margin-right:8px;"></i> B. Fase H-45: Penetapan Tanggal &amp; Survei Lokasi / Venue</h3>
<p style="margin:0 0 10px 0;color:var(--text-muted);font-size:0.94rem;">
Lakukan survei fisik atau virtual terhadap calon venue. Pastikan kapasitas ballroom sesuai jumlah audiens saat gala dinner dan lapangan outdoor memiliki drainase yang baik saat terjadi hujan mendadak.
</p>
<p style="margin:0;color:var(--text-dark);font-size:0.92rem;font-weight:600;">
Output: Rekomendasi 2 alternatif venue dan pemesanan slot tanggal (blocking date).
</p>
</div>
<div style="background:#FFFFFF;border:1px solid #E5E7EB;border-left:5px solid #059669;padding:22px;border-radius:10px;box-shadow:0 4px 12px rgba(0,0,0,0.03);">
<h3 style="margin:0 0 8px 0;color:#065F46;font-size:1.15rem;"><i class="fas fa-handshake" style="color:#059669;margin-right:8px;"></i> C. Fase H-30: Pemilihan Provider Outbound Berlisensi &amp; Finalisasi Rundown</h3>
<p style="margin:0 0 10px 0;color:var(--text-muted);font-size:0.94rem;">
Pilihlah event organizer lokal yang memiliki trainer berlisensi BNSP. Diskusikan skema simulasi game agar relevan dengan budaya kerja perusahaan Anda dan tidak bersifat kekanak-kanakan.
</p>
<p style="margin:0;color:var(--text-dark);font-size:0.92rem;font-weight:600;">
Output: Perjanjian kerja sama vendor (MOU) dan rundown kegiatan menit-demi-menit.
</p>
</div>
<div style="background:#FFFFFF;border:1px solid #E5E7EB;border-left:5px solid #2563EB;padding:22px;border-radius:10px;box-shadow:0 4px 12px rgba(0,0,0,0.03);">
<h3 style="margin:0 0 8px 0;color:#1E40AF;font-size:1.15rem;"><i class="fas fa-tshirt" style="color:#2563EB;margin-right:8px;"></i> D. Fase H-14: Konfirmasi Peserta, Pembuatan Seragam &amp; Logistik</h3>
<p style="margin:0 0 10px 0;color:var(--text-muted);font-size:0.94rem;">
Kunci daftar peserta (<em>rooming list</em> hotel, seating plan bus), produksi kaos gathering, cetak merchandise, serta siapkan data alergi makanan atau riwayat medis khusus dari karyawan.
</p>
<p style="margin:0;color:var(--text-dark);font-size:0.92rem;font-weight:600;">
Output: Data final peserta dan checklist perlengkapan medis.
</p>
</div>
<div style="background:#FFFFFF;border:1px solid #E5E7EB;border-left:5px solid #7C3AED;padding:22px;border-radius:10px;box-shadow:0 4px 12px rgba(0,0,0,0.03);">
<h3 style="margin:0 0 8px 0;color:#5B21B6;font-size:1.15rem;"><i class="fas fa-flag-checkered" style="color:#7C3AED;margin-right:8px;"></i> E. Fase H-1 s/d Hari H: Technical Meeting &amp; Eksekusi Acara</h3>
<p style="margin:0 0 10px 0;color:var(--text-muted);font-size:0.94rem;">
Briefing akhir antara panitia internal dengan tim fasilitator Vendor Outbound di lokasi. Pastikan seluruh sound system, peralatan simulasi, dan konsumsi siap tepat waktu.
</p>
<p style="margin:0;color:var(--text-dark);font-size:0.92rem;font-weight:600;">
Output: Acara berjalan mulus, panitia dapat ikut bersenang-senang tanpa terbebani teknis.
</p>
</div>
</div>

<!-- SUPPORTING IMAGE 1 -->
<figure class="article-support-image">
<img
src="/images/team-about-malang.webp"
alt="Simulasi Team Building Outbound Kolaboratif Vendor Outbound"
width="1600"
height="900"
loading="lazy"
>
<figcaption>Simulasi outbound interaktif di lapangan hijau Kota Batu yang menekankan komunikasi dua arah dan pemecahan masalah bersama.</figcaption>
</figure>

<h2 id="rekomendasi-zona-venue">3. Tiga Zona Venue Gathering Terbaik di Malang Raya</h2>
<p>Setiap zona di Malang Raya menyuguhkan karakteristik unik yang dapat disesuaikan dengan profil karyawan perusahaan Anda:</p>
<ul>
<li><strong>Zona 1: Kota Wisata Batu (The Resort &amp; Conference Hub):</strong> Cocok untuk perusahaan yang menginginkan fasilitas lengkap hotel bintang empat/lima, ballroom megah untuk rapat kerja, serta lapangan rumput private di dalam area resort. Suasana malam hari dimeriahkan oleh udara dingin dan pemandangan gemerlap lampu kota (<em>city lights</em>).</li>
<li><strong>Zona 2: Coban Rondo, Pujon &amp; Trawas (The Pure Nature &amp; Pine Forest):</strong> Sangat pas bagi perusahaan berjiwa dinamis yang menghendaki konsep menyatu dengan alam. Dikelilingi rimbunnya hutan pinus yang teduh, kawasan ini menawarkan sensasi outbound alam, fun offroad jeep, river rafting, hingga konsep camping/glamping premium.</li>
<li><strong>Zona 3: Kawasan Eksotis Bromo Tengger (The Ultimate Adventure Retreat):</strong> Dirancang bagi manajemen dan tim yang mendambakan pengalaman legendaris tak terlupakan. Menikmati fajar emas (<em>golden sunrise</em>) di atas ketinggian 2.300 mdpl, menjelajahi lautan pasir dengan konvoi jeep 4x4, dan melangsungkan sesi refleksi tim di tengah megahnya kaldera Bromo.</li>
</ul>

<h2 id="merancang-rundown-seimbang">4. Seni Merancang Rundown: Tidak Melelahkan Namun Penuh Makna</h2>
<p>Kesalahan fatal yang sering dilakukan panitia pemula adalah menyusun jadwal kegiatan yang terlalu padat tanpa jeda istirahat yang cukup. Akibatnya, pada malam hari peserta sudah kelelahan saat sesi gala dinner berlangsung. Terapkan prinsip proporsi seimbang <strong>40-30-30</strong>:</p>
<ol>
<li><strong>40% Sesi Kolaborasi &amp; Experiential Learning:</strong> Dilaksanakan di pagi hari (pukul 08.00 - 11.30) saat energi peserta berada pada titik puncak dan paparan sinar matahari pagi masih menyegarkan. Sesi ini diisi dengan ice breaking, energizer, dan simulasi tim strategis.</li>
<li><strong>30% Sesi Leisure, Relaksasi &amp; Kuliner:</strong> Memberikan waktu luang (<em>free time</em>) bagi peserta untuk menikmati fasilitas hotel, berenang, berfoto, atau sekadar beristirahat santai tanpa intervensi tugas kelompok.</li>
<li><strong>30% Sesi Apresiasi &amp; Celebration:</strong> Diselenggarakan pada malam hari melalui agenda Gala Dinner, live music akustik, pengumuman pemenang award departemen, dan refleksi komitmen bersama menuju target perusahaan berikutnya.</li>
</ol>

<!-- BACA JUGA BOX 2 -->
<div class="baca-juga-box">
<div class="icon"><i class="fas fa-book-open"></i></div>
<div class="thumb">
<img src="/images/prog-glamping.webp" alt="Glamping vs Hotel Resort" loading="lazy">
</div>
<div class="content">
<div class="label">Hospitality Trends</div>
<h4><a href="/layanan/family-gathering">Glamping vs Hotel Resort: Tren Mengakrabkan Manajemen dengan Konsep Nature Retreat</a></h4>
<p>Ketahui bagaimana konsep glamorous camping berhasil meruntuhkan sekat hierarki antara pimpinan dan staf secara alami.</p>
</div>
</div>

<h2 id="tips-efisiensi-anggaran">5. Kunci Efisiensi Anggaran Corporate Gathering Tanpa Memangkas Kualitas</h2>
<p>Mendapatkan persetujuan bujet dari bagian Finance / Direksi sering kali menjadi tantangan terbesar panitia. Terapkan strategi efisiensi berikut agar kegiatan tetap prestisius dengan biaya terkontrol:</p>
<ul>
<li><strong>Pilih Pelaksanaan di Hari Kerja (Weekday):</strong> Harga sewa ballroom resort, kamar hotel, dan armada bus pariwisata pada hari Selasa hingga Kamis umumnya lebih hemat 20% hingga 35% dibandingkan akhir pekan, sekaligus memberikan privasi venue yang jauh lebih lengang.</li>
<li><strong>Gunakan Skema Paket Terpadu (All-In):</strong> Mengontrak satu vendor lokal terpercaya seperti Vendor Outbound untuk mengelola akomodasi, katering, transportasi, perizinan, dan instruktur jauh lebih hemat dibandingkan panitia mengurus puluhan vendor terpisah yang sarat biaya tersembunyi.</li>
<li><strong>Optimasi Rasio Kapasitas Transportasi:</strong> Sesuaikan pemilihan jenis armada (Big Bus 50 seat, Medium Bus 31 seat, atau HiAce 14 seat) dengan jumlah peserta pasti guna menghindari membayar kursi kosong.</li>
<li><strong>Kombinasikan Menu Khas Nusantara:</strong> Menu prasmanan tradisional Jawa Timur yang disajikan secara higienis dan hangat sering kali lebih disukai peserta serta jauh lebih bersahabat dari segi biaya dibandingkan menu internasional.</li>
</ul>

<h2 id="checklist-panitia-gathering">6. Checklist Praktis Panitia Corporate Gathering 2026</h2>
<p>Gunakan daftar periksa cepat berikut untuk memverifikasi kesiapan operasional tim Anda:</p>
<ul style="list-style:none;padding-left:0;display:flex;flex-direction:column;gap:8px;">
<li><i class="far fa-square-check text-emerald-600 me-2"></i> Target acara &amp; batasan bujet disetujui pimpinan tertinggi.</li>
<li><i class="far fa-square-check text-emerald-600 me-2"></i> Kontrak venue utama (hotel/lapangan) terkunci dengan klausul pembatalan yang jelas.</li>
<li><i class="far fa-square-check text-emerald-600 me-2"></i> Provider outbound lokal berlisensi resmi BNSP telah dipilih.</li>
<li><i class="far fa-square-check text-emerald-600 me-2"></i> Rundown menit-demi-menit disusun dengan buffer waktu darurat (minimal 30 menit).</li>
<li><i class="far fa-square-check text-emerald-600 me-2"></i> Data rombongan kamar hotel (<em>rooming list</em>) dan denah tempat duduk bus telah selesai.</li>
<li><i class="far fa-square-check text-emerald-600 me-2"></i> Seragam acara dan <em>name tag</em> dibagikan selambat-lambatnya H-2.</li>
<li><i class="far fa-square-check text-emerald-600 me-2"></i> Tim medis, kotak P3K standar outdoor, dan kontak RS rujukan terdekat telah siap siaga.</li>
</ul>

<h2 id="kesimpulan-gathering">7. Kesimpulan: Melangkah Maju Bersama Tim yang Solid</h2>
<p>Corporate gathering dan outbound bukan sekadar tentang bersenang-senang di luar ruang kerja. Ini adalah ruang dialog yang jujur, wahana untuk merayakan pencapaian masa lalu, serta landasan untuk mengumpulkan kembali energi juang tim menuju target perusahaan yang lebih gemilang.</p>
<p>Dengan perencanaan yang terstruktur, pemilihan lokasi yang tepat, serta pemanduan profesional dari fasilitator yang berdedikasi, acara gathering kantor Anda di Malang Raya dijamin akan menjadi pengalaman berkesan yang terus dikenang sepanjang masa.</p>
`
  },
  {
    id: 'post-1',
    title: 'Panduan Memilih Lokasi Outbound di Batu dan Malang Sesuai Karakter Tim',
    slug: 'panduan-memilih-lokasi-outbound-batu-malang',
    excerpt: 'Memilih lokasi outbound yang tepat di kawasan sejuk Batu dan Malang sangat menentukan kenyamanan peserta dan keberhasilan tujuan kegiatan.',
    category: 'Panduan Outbound',
    authorName: 'Arby Ardiansyah',
    authorRole: 'LEAD OUTBOUND CONSULTANT • CERTIFIED BNSP FACILITATOR',
    authorAvatar: '/images/author-artikel/author-artikel-arby-ardiansyah.webp',
    authorBio: 'Praktisi pengembangan SDM dan perancang program experiential learning dengan pengalaman lebih dari 8 tahun memfasilitasi ratusan kegiatan outbound korporat, BUMN, dan acara kebersamaan keluarga di seluruh Jawa Timur.',
    thumbnailUrl: '/images/blog/panduan-lokasi-outbound.webp',
    imageAlt: 'Peserta kegiatan outbound berkumpul di area hijau asri pegunungan Batu',
    seoTitle: 'Panduan Memilih Lokasi Outbound di Batu Malang | Vendor Outbound',
    seoDescription: 'Simak panduan lengkap memilih venue outbound di Batu dan Malang berdasarkan karakter tim, tujuan kegiatan, dan fasilitas yang dibutuhkan.',
    canonicalUrl: 'https://vendoroutbound.id/blog/panduan-memilih-lokasi-outbound-batu-malang',
    publishedAt: '25 Oktober 2026',
    readingTimeMinutes: 5,
    answerFirst: 'Lokasi outbound terbaik di Batu Malang bergantung pada target kegiatan: pilih area hutan pinus untuk konsentrasi team building, resort berfasilitas lengkap untuk kenyamanan family gathering, atau aliran sungai dan jalur offroad untuk petualangan pemacu adrenalin.',
    body: `
## Mengapa Lokasi Sangat Berpengaruh Terhadap Keberhasilan Outbound?

Kawasan Batu dan Malang memiliki topografi pegunungan dengan variasi venue yang sangat luas. Memilih lokasi yang tepat bukan sekadar mencari tempat yang indah, melainkan menyesuaikan karakteristik fisik dan tujuan kegiatan tim Anda.

### 1. Karakteristik Kawasan Hutan Pinus
Kawasan dengan pepohonan pinus rindang memberikan keteduhan alami, suasana tenang, dan udara yang sangat sejuk. Karakter venue ini sangat ideal untuk:
- Program team building yang membutuhkan fokus dan konsentrasi tinggi.
- Kegiatan perkemahan (camping) santai dan leadership camp.
- Fun games tanpa terik matahari berlebihan di siang hari.

### 2. Kawasan Resort Outbound Berfasilitas Lengkap
Jika kegiatan melibatkan keluarga, anak-anak, atau eksekutif yang membutuhkan akses kenyamanan prima, resort dengan lapangan rumput luas menjadi pilihan tepat. Fasilitas pendukung seperti toilet bersih representatif, aula indoor untuk sesi evaluasi, dan katering siap santap membuat rangkaian acara berlangsung tertib.

### 3. Kawasan Aliran Sungai dan Jalur Adventure
Untuk kelompok kerja yang membutuhkan penyegaran ekstrem dan pelepasan stres kerja, area dengan akses sungai arung jeram (seperti Kaliwatu atau Kasembon) serta lintasan jeep 4x4 memberikan tantangan fisik yang memacu adrenalin positif.

## Checklist Persiapan Sebelum Menentukan Lokasi
Sebelum mengonfirmasi venue di Batu atau Malang, pastikan Anda telah mengecek hal-hal berikut:
1. Akses jalan dan kapasitas parkir untuk ukuran bus atau kendaraan rombongan Anda.
2. Ketersediaan ruang berteduh atau aula alternatif jika hujan tiba-tiba turun.
3. Kecukupan fasilitas sanitasi (toilet/kamar bilas) proporsional dengan jumlah peserta.
4. Suhu udara malam hari jika program mencakup agenda menginap di tenda.
`
  },
  {
    id: 'post-2',
    title: '5 Kunci Sukses Membangun Komunikasi Tim Melalui Aktivitas Luar Ruang',
    slug: 'kunci-sukses-membangun-komunikasi-tim-outbound',
    excerpt: 'Bagaimana simulasi permainan outbound dapat membongkar sekat komunikasi antar departemen di lingkungan kerja.',
    category: 'Panduan Outbound',
    authorName: 'Arby Ardiansyah',
    authorRole: 'LEAD OUTBOUND CONSULTANT • CERTIFIED BNSP FACILITATOR',
    authorAvatar: '/images/author-artikel/author-artikel-arby-ardiansyah.webp',
    authorBio: 'Praktisi pengembangan SDM dan perancang program experiential learning dengan pengalaman lebih dari 8 tahun memfasilitasi ratusan kegiatan outbound korporat, BUMN, dan acara kebersamaan keluarga di seluruh Jawa Timur.',
    thumbnailUrl: '/images/blog/kunci-sukses-komunikasi.webp',
    imageAlt: 'Tim kerja saling berdiskusi menyelesaikan tantangan outbound di alam terbuka',
    seoTitle: '5 Kunci Sukses Komunikasi Tim Lewat Outbound | Vendor Outbound',
    seoDescription: 'Pelajari bagaimana kegiatan outbound di alam terbuka efektif membongkar silo komunikasi dan memperkuat sinergi organisasi.',
    canonicalUrl: 'https://vendoroutbound.id/blog/kunci-sukses-membangun-komunikasi-tim-outbound',
    publishedAt: '25 Oktober 2026',
    readingTimeMinutes: 4,
    answerFirst: 'Kunci keberhasilan outbound dalam memperbaiki komunikasi kerja adalah menciptakan suasana setara tanpa sekat jabatan, memberikan tantangan yang menuntut koordinasi aktif, serta menyediakan sesi debrief reflektif untuk menghubungkan permainan dengan dunia kerja nyata.',
    body: `
## Membongkar Sekat Komunikasi di Tempat Kerja

Di lingkungan kantor modern, sering kali tim terkotak-kotak dalam silo departemen masing-masing. Outbound hadir sebagai jembatan yang meruntuhkan batasan formal tersebut.

### 1. Suasana Setara Tanpa Sekat Hierarki
Di lapangan outbound, semua orang memakai kaos seragam dan menghadapi rintangan yang sama. Tidak ada meja direksi atau kubikel staf. Kesetaraan ini membuka keran percakapan yang lebih jujur dan cair.

### 2. Ketergantungan Positif dalam Simulasi
Sebagian besar permainan dirancang sedemikian rupa sehingga tidak ada satu orang pun yang bisa menyelesaikannya sendirian. Dibutuhkan peran aktif setiap anggota kelompok.

### 3. Sesi Refleksi (Debrief) yang Bermakna
Permainan outbound bukanlah sekadar berbasah-basahan atau tertawa bersama. Nilai sesungguhnya didapat pada sesi debrief saat fasilitator mengajak tim merefleksikan: "Apa yang membuat kita tadi sempat gagal?", "Bagaimana cara kita mendengar masukan rekan tim tadi?".
`
  },
  {
    id: 'post-3',
    title: 'Tips Merancang Family Gathering Seru dan Ramah Segala Usia di Kota Batu',
    slug: 'tips-merancang-family-gathering-batu-malang',
    excerpt: 'Panduan menyusun rundown acara gathering yang ramah anak, nyaman untuk orang tua, dan menyenangkan bagi semua.',
    category: 'Tips Gathering',
    authorName: 'Arby Ardiansyah',
    authorRole: 'LEAD OUTBOUND CONSULTANT • CERTIFIED BNSP FACILITATOR',
    authorAvatar: '/images/author-artikel/author-artikel-arby-ardiansyah.webp',
    authorBio: 'Praktisi pengembangan SDM dan perancang program experiential learning dengan pengalaman lebih dari 8 tahun memfasilitasi ratusan kegiatan outbound korporat, BUMN, dan acara kebersamaan keluarga di seluruh Jawa Timur.',
    thumbnailUrl: '/images/blog/tips-family-gathering.webp',
    imageAlt: 'Suasana santai keluarga berkumpul di taman terbuka hijau Kota Batu',
    seoTitle: 'Tips Merancang Family Gathering di Kota Batu | Vendor Outbound',
    seoDescription: 'Simak panduan praktis menyusun agenda family gathering yang menyenangkan, ramah anak, dan bebas stres di Kota Batu.',
    canonicalUrl: 'https://vendoroutbound.id/blog/tips-merancang-family-gathering-batu-malang',
    publishedAt: '25 Oktober 2026',
    readingTimeMinutes: 4,
    answerFirst: 'Rancang family gathering yang sukses dengan membagi aktivitas secara seimbang: sediakan kids corner terpisah untuk anak-anak, permainan kebersamaan berintensitas ringan untuk orang tua, serta venue sejuk dengan akses toilet yang dekat dan mudah dijangkau.',
    body: `
## Kebersamaan Hangat Tanpa Kejenuhan

Mengumpulkan keluarga besar karyawan membutuhkan perhatian khusus karena rentang usia peserta sangat lebar, mulai dari balita hingga lansia.

### 1. Pisahkan Area Permainan Berdasarkan Kelompok Usia
Anak-anak membutuhkan permainan yang penuh warna, aman, dan eksploratif. Sementara para orang tua menyukai kompetisi ringan yang santai dan sarat tawa.

### 2. Hindari Jadwal yang Terlalu Padat
Berikan waktu luang yang cukup bagi keluarga untuk sekadar duduk bercengkerama, berfoto di spot panorama indah, dan menikmati hidangan khas Batu.

### 3. Pastikan Akses Sanitasi dan Tempat Beristirahat Nyaman
Pilihlah venue yang memiliki toilet bersih dalam jarak dekat dan area semi-indoor untuk beristirahat saat terik siang atau ketika gerimis turun.
`
  }
];


export const WHY_CHOOSE_US = [
  {
    title: 'Fokus Wilayah Batu & Malang',
    description: 'Pemahaman mendalam terhadap kondisi geografis, karakter venue, akses jalan, dan pola cuaca lokal pegunungan Jawa Timur.',
    icon: 'map-pin'
  },
  {
    title: 'Program Terarah & Fleksibel',
    description: 'Setiap skenario kegiatan disesuaikan dengan tujuan khusus instansi Anda, baik team building, rekonsiliasi, maupun rekreasi santai.',
    icon: 'target'
  },
  {
    title: 'Prioritas Standar Keselamatan',
    description: 'Fasilitator lapangan terlatih, peralatan standar keamanan tinggi, serta persiapan plan B cuaca untuk kenyamanan peserta.',
    icon: 'shield-check'
  },
  {
    title: 'Konsultasi Responsif & Transparan',
    description: 'Komunikasi langsung via WhatsApp dengan tim kami untuk perencanaan agenda yang sesuai dengan kapasitas dan anggaran Anda.',
    icon: 'message-circle'
  }
];
