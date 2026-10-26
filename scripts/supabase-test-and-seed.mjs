// ============================================================================
// Script: supabase-test-and-seed.mjs
// Deskripsi: Skrip otomasi untuk memverifikasi koneksi, memeriksa tabel, dan
// menguji integrasi backend Supabase untuk Vendor Outbound (vendoroutbound.id).
// ============================================================================

import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

// 1. Baca konfigurasi dari .env atau .env.example
function loadEnv() {
  const envPath = path.resolve(process.cwd(), '.env');
  const examplePath = path.resolve(process.cwd(), '.env.example');

  let content = '';
  if (fs.existsSync(envPath)) {
    console.log('✓ File .env ditemukan.');
    content = fs.readFileSync(envPath, 'utf8');
  } else if (fs.existsSync(examplePath)) {
    console.log('ℹ File .env belum dibuat. Membaca template dari .env.example...');
    content = fs.readFileSync(examplePath, 'utf8');
  } else {
    console.error('✗ File .env maupun .env.example tidak ditemukan!');
    return {};
  }

  const env = {};
  content.split('\n').forEach(line => {
    line = line.trim();
    if (!line || line.startsWith('#')) return;
    const idx = line.indexOf('=');
    if (idx !== -1) {
      const key = line.slice(0, idx).trim();
      let val = line.slice(idx + 1).trim();
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1);
      }
      env[key] = val;
    }
  });

  return env;
}

const env = loadEnv();
const supabaseUrl = env.PUBLIC_SUPABASE_URL || env.SUPABASE_URL || process.env.PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || '';
const supabaseKey = env.SUPABASE_SERVICE_ROLE_KEY || env.PUBLIC_SUPABASE_ANON_KEY || env.SUPABASE_ANON_KEY || process.env.PUBLIC_SUPABASE_ANON_KEY || '';

console.log('\n======================================================');
console.log('  UJI KONEKSI & DIAGNOSTIK BACKEND SUPABASE');
console.log('  Project: Vendor Outbound (vendoroutbound.id)');
console.log('======================================================\n');

console.log(`URL Supabase     : ${supabaseUrl || '(Belum disetel)'}`);
console.log(`API Key Digunakan: ${supabaseKey ? supabaseKey.slice(0, 15) + '...' : '(Belum disetel)'}\n`);

// 2. Validasi format URL dan Key
if (!supabaseUrl || !supabaseKey || supabaseUrl.includes('your-project-id')) {
  console.log('⚠️  STATUS: SUPABASE BELUM TERHUBUNG');
  console.log('------------------------------------------------------');
  console.log('Langkah untuk menghubungkan:');
  console.log('1. Buat project baru di https://supabase.com');
  console.log('2. Buka Project Settings > API');
  console.log('3. Salin Project URL dan anon / public key ke file .env di root project:');
  console.log('   PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxx.supabase.co');
  console.log('   PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOi...');
  console.log('4. Jalankan script ini kembali: node scripts/supabase-test-and-seed.mjs\n');
  process.exit(0);
}

// 3. Inisialisasi Supabase Client
const supabase = createClient(supabaseUrl, supabaseKey);

const EXPECTED_TABLES = [
  'site_settings',
  'services',
  'package_categories',
  'packages',
  'gallery_items',
  'authors',
  'blog_categories',
  'blog_posts',
  'faq_items',
  'testimonials',
  'leads'
];

async function testConnection() {
  console.log('Memeriksa koneksi ke server Supabase...');
  
  let successCount = 0;
  let missingTables = [];

  for (const table of EXPECTED_TABLES) {
    try {
      const { data, error, count } = await supabase
        .from(table)
        .select('*', { count: 'exact', head: true });

      if (error) {
        if (error.code === '42P01' || error.message.includes('does not exist')) {
          missingTables.push(table);
          console.log(`  ✗ Tabel [${table}]: Belum dibuat`);
        } else {
          console.log(`  ⚠️  Tabel [${table}]: ${error.message} (Code: ${error.code})`);
        }
      } else {
        successCount++;
        console.log(`  ✓ Tabel [${table}]: Siap (Total data: ${count ?? 0} baris)`);
      }
    } catch (err) {
      console.log(`  ✗ Tabel [${table}]: Gagal koneksi (${err.message})`);
    }
  }

  console.log('\n------------------------------------------------------');
  if (missingTables.length > 0) {
    console.log(`⚠️  Ditemukan ${missingTables.length} tabel yang belum dibuat di Supabase.`);
    console.log('\nLangkah Membuat Tabel & Mengisi Data:');
    console.log('1. Masuk ke dashboard Supabase Anda: https://supabase.com/dashboard');
    console.log('2. Pilih project Anda, lalu klik menu "SQL Editor" di panel kiri.');
    console.log('3. Klik "New Query", salin seluruh isi file:');
    console.log('   supabase/migrations/20261025_init_vendor_outbound.sql');
    console.log('   lalu klik "Run" untuk membuat seluruh tabel dan aturan keamanan (RLS).');
    console.log('4. Buat Query baru lagi, salin seluruh isi file:');
    console.log('   supabase/seed.sql');
    console.log('   lalu klik "Run" untuk memasukkan data awal.');
  } else if (successCount === EXPECTED_TABLES.length) {
    console.log('🎉 SEMUA TABEL SUPABASE TERHUBUNG & LENGKAP!');
    
    // Uji coba kirim lead (simulasi formulir kontak website)
    console.log('\nMenguji pengiriman leads via form kontak (RLS Public Insert)...');
    const testLead = {
      name: 'Uji Koneksi Sistem',
      organization: 'Vendor Outbound Tester',
      whatsapp: '082211221909',
      service_type: 'Outbound Perusahaan',
      message: 'Uji integrasi otomatis Supabase dari skrip diagnostik.',
      privacy_consent: true,
      status: 'Baru'
    };

    const { data: leadData, error: leadErr } = await supabase
      .from('leads')
      .insert([testLead])
      .select();

    if (leadErr) {
      console.log(`⚠️  Peringatan insert lead: ${leadErr.message}`);
    } else {
      console.log('✓ Uji simpan leads ke Supabase berhasil! ID:', leadData[0]?.id);
      // Hapus data uji agar tidak mengotori tabel
      await supabase.from('leads').delete().eq('id', leadData[0]?.id);
      console.log('✓ Data uji coba berhasil dibersihkan.');
    }
  }
  console.log('======================================================\n');
}

testConnection();
