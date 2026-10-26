-- Migration: 20261025_init_vendor_outbound.sql
-- Inisialisasi skema database lengkap untuk Vendor Outbound (vendoroutbound.id)
-- Sesuai dengan spesifikasi PRD Section 12

-- Ekstensi pgcrypto untuk UUID
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ==========================================
-- 1. Tabel site_settings
-- ==========================================
CREATE TABLE IF NOT EXISTS site_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  key TEXT UNIQUE NOT NULL,
  value JSONB NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT now(),
  updated_by UUID NULL
);

-- ==========================================
-- 2. Tabel pages
-- ==========================================
CREATE TABLE IF NOT EXISTS pages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  page_type TEXT NOT NULL,
  content JSONB NOT NULL,
  seo_title TEXT,
  seo_description TEXT,
  canonical_url TEXT,
  og_image_url TEXT,
  status TEXT DEFAULT 'published' CHECK (status IN ('draft', 'published', 'archived')),
  updated_at TIMESTAMPTZ DEFAULT now(),
  published_at TIMESTAMPTZ DEFAULT now()
);

-- ==========================================
-- 3. Tabel services
-- ==========================================
CREATE TABLE IF NOT EXISTS services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT NOT NULL,
  content JSONB NOT NULL,
  image_url TEXT NOT NULL,
  target_audience TEXT,
  benefits JSONB DEFAULT '[]'::jsonb,
  activities JSONB DEFAULT '[]'::jsonb,
  seo_title TEXT,
  seo_description TEXT,
  status TEXT DEFAULT 'published' CHECK (status IN ('draft', 'published', 'archived')),
  featured BOOLEAN DEFAULT false,
  sort_order INTEGER DEFAULT 0,
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- ==========================================
-- 4. Tabel package_categories
-- ==========================================
CREATE TABLE IF NOT EXISTS package_categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  sort_order INTEGER DEFAULT 0,
  status TEXT DEFAULT 'active'
);

-- ==========================================
-- 5. Tabel packages
-- ==========================================
CREATE TABLE IF NOT EXISTS packages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id UUID REFERENCES package_categories(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT NOT NULL,
  content JSONB,
  image_url TEXT NOT NULL,
  activities JSONB DEFAULT '[]'::jsonb,
  features JSONB DEFAULT '[]'::jsonb,
  duration TEXT,
  price_label TEXT DEFAULT 'Konsultasikan kebutuhan paket',
  price_amount NUMERIC NULL,
  featured BOOLEAN DEFAULT false,
  status TEXT DEFAULT 'published' CHECK (status IN ('draft', 'published', 'archived')),
  sort_order INTEGER DEFAULT 0,
  seo_title TEXT,
  seo_description TEXT,
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- ==========================================
-- 6. Tabel gallery_items
-- ==========================================
CREATE TABLE IF NOT EXISTS gallery_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT,
  caption TEXT,
  alt_text TEXT NOT NULL,
  storage_path TEXT,
  public_url TEXT NOT NULL,
  category TEXT,
  width INTEGER,
  height INTEGER,
  file_size_bytes INTEGER,
  status TEXT DEFAULT 'published',
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ==========================================
-- 7. Tabel authors
-- ==========================================
CREATE TABLE IF NOT EXISTS authors (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  display_name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  bio TEXT,
  avatar_url TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ==========================================
-- 8. Tabel blog_categories
-- ==========================================
CREATE TABLE IF NOT EXISTS blog_categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  status TEXT DEFAULT 'active',
  sort_order INTEGER DEFAULT 0
);

-- ==========================================
-- 9. Tabel blog_posts
-- ==========================================
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT NOT NULL,
  body TEXT NOT NULL,
  category_id UUID REFERENCES blog_categories(id) ON DELETE SET NULL,
  author_id UUID REFERENCES authors(id) ON DELETE SET NULL,
  thumbnail_url TEXT NOT NULL,
  image_alt TEXT NOT NULL,
  seo_title TEXT,
  seo_description TEXT,
  canonical_url TEXT,
  og_image_url TEXT,
  status TEXT DEFAULT 'published' CHECK (status IN ('draft', 'published', 'archived')),
  is_featured BOOLEAN DEFAULT false,
  reading_time_minutes INTEGER DEFAULT 5,
  related_post_ids JSONB DEFAULT '[]'::jsonb,
  answer_first TEXT,
  published_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- ==========================================
-- 10. Tabel faq_items
-- ==========================================
CREATE TABLE IF NOT EXISTS faq_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  page_slug TEXT,
  blog_post_id UUID REFERENCES blog_posts(id) ON DELETE CASCADE,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  sort_order INTEGER DEFAULT 0,
  status TEXT DEFAULT 'published',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ==========================================
-- 11. Tabel testimonials
-- ==========================================
CREATE TABLE IF NOT EXISTS testimonials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  display_name TEXT NOT NULL,
  organization TEXT,
  quote TEXT NOT NULL,
  avatar_url TEXT,
  event_date DATE,
  permission_confirmed BOOLEAN DEFAULT true,
  status TEXT DEFAULT 'published',
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ==========================================
-- 12. Tabel leads (Formulir konsultasi)
-- ==========================================
CREATE TABLE IF NOT EXISTS leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  organization TEXT,
  whatsapp TEXT NOT NULL,
  email TEXT,
  service_type TEXT NOT NULL,
  participant_count INTEGER,
  event_date DATE,
  preferred_location TEXT,
  message TEXT NOT NULL,
  privacy_consent BOOLEAN NOT NULL DEFAULT true,
  status TEXT DEFAULT 'Baru' CHECK (status IN ('Baru', 'Dihubungi', 'Follow-up', 'Selesai', 'Spam')),
  internal_notes TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- ==========================================
-- 13. Tabel redirects
-- ==========================================
CREATE TABLE IF NOT EXISTS redirects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  source_path TEXT UNIQUE NOT NULL,
  destination_path TEXT NOT NULL,
  status_code INTEGER DEFAULT 301,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ==========================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ==========================================

-- Aktifkan RLS di setiap tabel
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE package_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE authors ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE faq_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE redirects ENABLE ROW LEVEL SECURITY;

-- 1. site_settings: Publik boleh membaca pengaturan publik, admin bebas mutasi
CREATE POLICY "Public read site_settings" ON site_settings FOR SELECT USING (true);
CREATE POLICY "Admin manage site_settings" ON site_settings FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- 2. pages: Publik hanya boleh membaca yang published
CREATE POLICY "Public read published pages" ON pages FOR SELECT USING (status = 'published');
CREATE POLICY "Admin manage pages" ON pages FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- 3. services: Publik membaca published
CREATE POLICY "Public read published services" ON services FOR SELECT USING (status = 'published');
CREATE POLICY "Admin manage services" ON services FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- 4. package_categories: Publik membaca active
CREATE POLICY "Public read active package_categories" ON package_categories FOR SELECT USING (status = 'active');
CREATE POLICY "Admin manage package_categories" ON package_categories FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- 5. packages: Publik membaca published
CREATE POLICY "Public read published packages" ON packages FOR SELECT USING (status = 'published');
CREATE POLICY "Admin manage packages" ON packages FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- 6. gallery_items: Publik membaca published
CREATE POLICY "Public read published gallery_items" ON gallery_items FOR SELECT USING (status = 'published');
CREATE POLICY "Admin manage gallery_items" ON gallery_items FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- 7. authors: Publik membaca active
CREATE POLICY "Public read active authors" ON authors FOR SELECT USING (is_active = true);
CREATE POLICY "Admin manage authors" ON authors FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- 8. blog_categories: Publik membaca active
CREATE POLICY "Public read active blog_categories" ON blog_categories FOR SELECT USING (status = 'active');
CREATE POLICY "Admin manage blog_categories" ON blog_categories FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- 9. blog_posts: Publik hanya membaca published
CREATE POLICY "Public read published blog_posts" ON blog_posts FOR SELECT USING (status = 'published');
CREATE POLICY "Admin manage blog_posts" ON blog_posts FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- 10. faq_items: Publik membaca published
CREATE POLICY "Public read published faq_items" ON faq_items FOR SELECT USING (status = 'published');
CREATE POLICY "Admin manage faq_items" ON faq_items FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- 11. testimonials: Publik hanya membaca published yang sudah confirm permission
CREATE POLICY "Public read published testimonials" ON testimonials FOR SELECT USING (status = 'published' AND permission_confirmed = true);
CREATE POLICY "Admin manage testimonials" ON testimonials FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- 12. leads: Publik HANYA boleh INSERT leads baru; TIDAK BISA SELECT ATAU UPDATE!
CREATE POLICY "Public insert leads" ON leads FOR INSERT WITH CHECK (true);
CREATE POLICY "Admin manage leads" ON leads FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- 13. redirects: Publik boleh baca untuk penanganan link lama
CREATE POLICY "Public read redirects" ON redirects FOR SELECT USING (true);
CREATE POLICY "Admin manage redirects" ON redirects FOR ALL TO authenticated USING (true) WITH CHECK (true);
