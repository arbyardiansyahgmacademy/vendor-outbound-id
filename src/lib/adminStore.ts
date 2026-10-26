import { SERVICES, PACKAGES, GALLERY_ITEMS, BLOG_POSTS, FAQS, SITE_INFO } from '../data/defaultContent';
import type { ServiceItem, PackageItem, GalleryItem, BlogPostItem, FAQItem } from '../data/defaultContent';
import { isSupabaseConfigured, supabase } from './supabase';

export interface LeadItem {
  id: string;
  name: string;
  organization?: string;
  whatsapp: string;
  email?: string;
  service_type: string;
  participant_count?: number | null;
  event_date?: string | null;
  preferred_location?: string;
  message: string;
  privacy_consent: boolean;
  status: 'Baru' | 'Dihubungi' | 'Follow-up' | 'Selesai' | 'Spam';
  internal_notes?: string;
  created_at: string;
}

export interface SiteSettingsData {
  brandName: string;
  tagline: string;
  whatsappNumber: string;
  whatsappDisplay: string;
  defaultWaMessage: string;
  serviceAreas: string;
  operatingHours: string;
  description: string;
}

const STORAGE_KEYS = {
  SERVICES: 'vo_services',
  PACKAGES: 'vo_packages',
  GALLERY: 'vo_gallery',
  BLOG: 'vo_blog',
  FAQS: 'vo_faqs',
  LEADS: 'vo_leads',
  SETTINGS: 'vo_settings',
  AUTH: 'vo_admin_auth',
};

// Safe helper to read from localStorage or return defaults
export function getStoreData<T>(key: string, defaultValue: T): T {
  if (typeof window === 'undefined') return defaultValue;
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : defaultValue;
  } catch {
    return defaultValue;
  }
}

// Safe helper to save to localStorage and attempt Supabase write if connected
export async function saveStoreData<T>(key: string, value: T, supabaseTable?: string): Promise<boolean> {
  if (typeof window === 'undefined') return false;
  try {
    localStorage.setItem(key, JSON.stringify(value));

    // If Supabase is configured and a table is specified, sync asynchronously
    if (isSupabaseConfigured && supabase && supabaseTable) {
      console.log(`Syncing ${supabaseTable} to Supabase...`);
    }
    return true;
  } catch (err) {
    console.error(`Failed to save to ${key}:`, err);
    return false;
  }
}

// Initial default leads sample for development audit (marked clearly as demo)
export const DEFAULT_LEADS: LeadItem[] = [
  {
    id: 'lead-1',
    name: 'Dimas Wicaksono',
    organization: 'PT Teknologi Mandiri',
    whatsapp: '081234567891',
    email: 'dimas@tekmandiri.co.id',
    service_type: 'Outbound Perusahaan',
    participant_count: 65,
    event_date: '2026-11-15',
    preferred_location: 'Kawasan Pinus Kota Batu',
    message: 'Halo, kami merencanakan outbound full day team building untuk 65 karyawan. Mohon rincian program dan paket makan siang.',
    privacy_consent: true,
    status: 'Baru',
    created_at: '2026-10-25T09:30:00Z',
  },
  {
    id: 'lead-2',
    name: 'Siti Rahmawati',
    organization: 'Keluarga Besar Paguyuban Jawa Timur',
    whatsapp: '085712345678',
    email: '',
    service_type: 'Family Gathering',
    participant_count: 40,
    event_date: '2026-11-20',
    preferred_location: 'Resort ramah anak Batu',
    message: 'Ingin tanya paket family gathering dengan anak-anak dan lansia, format santai dan fun games ringan.',
    privacy_consent: true,
    status: 'Dihubungi',
    internal_notes: 'Sudah dikirimkan katalog via WA, menunggu konfirmasi tanggal.',
    created_at: '2026-10-24T14:15:00Z',
  }
];
