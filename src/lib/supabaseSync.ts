import { isSupabaseConfigured, supabase } from './supabase';

export function getSupabaseClient() {
  return isSupabaseConfigured ? supabase : null;
}
export { supabase, isSupabaseConfigured };

/**
 * Helper sinkronisasi dua arah (Hybrid Sync) antara Browser (localStorage) dan Database Supabase.
 * Setiap kali Admin melakukan CRUD, data otomatis dikirim ke Supabase dan disiarkan ke Front-end.
 */

// 1. SERVICES SYNC
export async function syncServiceToSupabase(service: any) {
  if (!isSupabaseConfigured || !supabase) return false;
  try {
    const payload = {
      title: service.title,
      slug: service.slug,
      excerpt: service.excerpt || service.description || service.title || 'Layanan Outbound Batu Malang',
      content: typeof service.content === 'object' ? service.content : { overview: service.description || service.excerpt || '' },
      image_url: service.imageUrl || service.image_url || '/images/services/outbound-perusahaan.webp',
      target_audience: service.targetAudience || service.target_audience || 'Perusahaan & Instansi',
      benefits: Array.isArray(service.benefits) ? service.benefits : [],
      activities: Array.isArray(service.activities) ? service.activities : [],
      status: service.status || 'published',
      featured: service.featured !== false,
      updated_at: new Date().toISOString()
    };

    const { error } = await supabase
      .from('services')
      .upsert(payload, { onConflict: 'slug' });

    if (error) {
      console.warn('Supabase syncService error:', error.message);
      return false;
    }
    console.log('✓ Service tersimpan di Supabase:', service.slug);
    return true;
  } catch (e) {
    console.warn('syncServiceToSupabase exception:', e);
    return false;
  }
}

export async function deleteServiceFromSupabase(slug: string) {
  if (!isSupabaseConfigured || !supabase || !slug) return false;
  try {
    const { error } = await supabase.from('services').delete().eq('slug', slug);
    if (error) console.warn('Supabase deleteService error:', error.message);
    else console.log('✓ Service dihapus dari Supabase:', slug);
    return !error;
  } catch (e) {
    return false;
  }
}

// 2. PACKAGES SYNC
export async function syncPackageToSupabase(pkg: any) {
  if (!isSupabaseConfigured || !supabase) return false;
  try {
    const payload = {
      title: pkg.title,
      slug: pkg.slug,
      excerpt: pkg.excerpt || (pkg.description ? pkg.description.slice(0, 150) : pkg.title) || 'Paket Outbound Batu Malang',
      image_url: pkg.imageUrl || pkg.image_url || '/images/packages/team-building.webp',
      activities: Array.isArray(pkg.activities) ? pkg.activities : [],
      features: Array.isArray(pkg.features) ? pkg.features : [],
      duration: pkg.duration || '1 Hari',
      price_label: pkg.priceLabel || pkg.price_label || 'Konsultasi Bujet',
      featured: pkg.featured === true,
      status: pkg.status || 'published',
      updated_at: new Date().toISOString()
    };

    const { error } = await supabase
      .from('packages')
      .upsert(payload, { onConflict: 'slug' });

    if (error) {
      console.warn('Supabase syncPackage error:', error.message);
      return false;
    }
    console.log('✓ Package tersimpan di Supabase:', pkg.slug);
    return true;
  } catch (e) {
    return false;
  }
}

export async function deletePackageFromSupabase(slug: string) {
  if (!isSupabaseConfigured || !supabase || !slug) return false;
  try {
    const { error } = await supabase.from('packages').delete().eq('slug', slug);
    if (error) console.warn('Supabase deletePackage error:', error.message);
    else console.log('✓ Package dihapus dari Supabase:', slug);
    return !error;
  } catch (e) {
    return false;
  }
}

// 3. GALLERY ITEMS SYNC
export async function syncGalleryItemToSupabase(item: any) {
  if (!isSupabaseConfigured || !supabase) return false;
  try {
    const payload = {
      title: item.title || item.altText || 'Dokumentasi Outbound',
      caption: item.caption || item.title || '',
      alt_text: item.altText || item.alt_text || item.title || 'Foto Outbound Batu Malang',
      public_url: item.imageUrl || item.publicUrl || item.public_url || item.url || '',
      category: item.category || 'Umum',
      width: item.width || 800,
      height: item.height || 600,
      status: item.status || 'published'
    };

    if (!payload.public_url) return false;

    // Check if exists
    const { data: existing } = await supabase
      .from('gallery_items')
      .select('id')
      .eq('public_url', payload.public_url)
      .limit(1);

    let error;
    if (existing && existing.length > 0) {
      const res = await supabase
        .from('gallery_items')
        .update(payload)
        .eq('id', existing[0].id);
      error = res.error;
    } else {
      const res = await supabase
        .from('gallery_items')
        .insert([payload]);
      error = res.error;
    }

    if (error) console.warn('Supabase syncGallery error:', error.message);
    else console.log('✓ Galeri tersimpan di Supabase:', payload.public_url);
    return !error;
  } catch (e) {
    return false;
  }
}

export async function deleteGalleryItemFromSupabase(url: string) {
  if (!isSupabaseConfigured || !supabase || !url) return false;
  try {
    const { error } = await supabase.from('gallery_items').delete().eq('public_url', url);
    if (error) console.warn('Supabase deleteGallery error:', error.message);
    else console.log('✓ Galeri dihapus dari Supabase:', url);
    return !error;
  } catch (e) {
    return false;
  }
}

// 4. TESTIMONIALS SYNC
export async function syncTestimonialToSupabase(testi: any) {
  if (!isSupabaseConfigured || !supabase) return false;
  try {
    const payload = {
      display_name: testi.name || testi.display_name || 'Klien Outbound',
      organization: testi.company || testi.organization || '',
      role: testi.role || '',
      quote: testi.review || testi.quote || 'Program outbound sangat memuaskan dan berkesan.',
      avatar_url: testi.avatar || testi.avatar_url || '/images/author-artikel/author-artikel-arby-ardiansyah.webp',
      rating: Number(testi.rating) || 5,
      permission_confirmed: testi.permission_confirmed !== false,
      status: testi.status || 'published'
    };

    const { data: existing } = await supabase
      .from('testimonials')
      .select('id')
      .eq('display_name', payload.display_name)
      .limit(1);

    let error;
    if (existing && existing.length > 0) {
      const res = await supabase.from('testimonials').update(payload).eq('id', existing[0].id);
      error = res.error;
    } else {
      const res = await supabase.from('testimonials').insert([payload]);
      error = res.error;
    }

    if (error) console.warn('Supabase syncTestimonial error:', error.message);
    else console.log('✓ Testimoni tersimpan di Supabase:', payload.display_name);
    return !error;
  } catch (e) {
    return false;
  }
}

export async function deleteTestimonialFromSupabase(displayName: string) {
  if (!isSupabaseConfigured || !supabase || !displayName) return false;
  try {
    const { error } = await supabase.from('testimonials').delete().eq('display_name', displayName);
    if (error) console.warn('Supabase deleteTestimonial error:', error.message);
    else console.log('✓ Testimoni dihapus dari Supabase:', displayName);
    return !error;
  } catch (e) {
    return false;
  }
}

// 5. FAQ SYNC
export async function syncFaqToSupabase(faq: any) {
  if (!isSupabaseConfigured || !supabase) return false;
  try {
    const payload = {
      question: faq.question,
      answer: faq.answer,
      category: faq.category || 'Umum',
      status: faq.status || 'published'
    };

    if (!payload.question) return false;

    const { data: existing } = await supabase
      .from('faq_items')
      .select('id')
      .eq('question', payload.question)
      .limit(1);

    let error;
    if (existing && existing.length > 0) {
      const res = await supabase.from('faq_items').update(payload).eq('id', existing[0].id);
      error = res.error;
    } else {
      const res = await supabase.from('faq_items').insert([payload]);
      error = res.error;
    }

    if (error) console.warn('Supabase syncFaq error:', error.message);
    else console.log('✓ FAQ tersimpan di Supabase:', payload.question);
    return !error;
  } catch (e) {
    return false;
  }
}

export async function deleteFaqFromSupabase(question: string) {
  if (!isSupabaseConfigured || !supabase || !question) return false;
  try {
    const { error } = await supabase.from('faq_items').delete().eq('question', question);
    if (error) console.warn('Supabase deleteFaq error:', error.message);
    else console.log('✓ FAQ dihapus dari Supabase:', question);
    return !error;
  } catch (e) {
    return false;
  }
}

// 6. BLOG POSTS SYNC
export async function syncBlogPostToSupabase(post: any) {
  if (!isSupabaseConfigured || !supabase) return false;
  try {
    const payload = {
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt || (post.body ? post.body.slice(0, 150) : post.title) || 'Artikel Outbound',
      body: post.body || '',
      answer_first: post.answerFirst || post.answer_first || '',
      thumbnail_url: post.thumbnailUrl || post.thumbnail_url || '/images/blog/panduan-lengkap-corporate-gathering-malang.webp',
      image_alt: post.imageAlt || post.image_alt || post.title || 'Artikel Outbound',
      status: post.status || 'published',
      reading_time_minutes: Number(post.readingTimeMinutes) || 5,
      seo_title: post.seoTitle || post.title,
      seo_description: post.seoDescription || post.excerpt,
      canonical_url: post.canonicalUrl || `https://provideroutbound.web.id/blog/${post.slug}`,
      updated_at: new Date().toISOString()
    };

    const { error } = await supabase
      .from('blog_posts')
      .upsert(payload, { onConflict: 'slug' });

    if (error) console.warn('Supabase syncBlogPost error:', error.message);
    else console.log('✓ Blog post tersimpan di Supabase:', post.slug);
    return !error;
  } catch (e) {
    return false;
  }
}

export async function deleteBlogPostFromSupabase(slug: string) {
  if (!isSupabaseConfigured || !supabase || !slug) return false;
  try {
    const { error } = await supabase.from('blog_posts').delete().eq('slug', slug);
    if (error) console.warn('Supabase deleteBlogPost error:', error.message);
    else console.log('✓ Blog post dihapus dari Supabase:', slug);
    return !error;
  } catch (e) {
    return false;
  }
}

// 7. SITE SETTINGS & TATA LETAK SYNC (HEAD, NAVBAR, FOOTER, GENERAL)
export async function syncSiteSettingsToSupabase(key: string, value: any) {
  if (!isSupabaseConfigured || !supabase || !key) return false;
  try {
    const { error } = await supabase
      .from('site_settings')
      .upsert({
        key,
        value,
        updated_at: new Date().toISOString()
      }, { onConflict: 'key' });

    if (error) console.warn(`Supabase syncSiteSettings (${key}) error:`, error.message);
    else console.log(`✓ Site settings (${key}) tersimpan di Supabase`);
    return !error;
  } catch (e) {
    return false;
  }
}

export async function syncNavbarToSupabase(navbarData: any) {
  return await syncSiteSettingsToSupabase('navbar', navbarData);
}

export async function syncFooterToSupabase(footerData: any) {
  return await syncSiteSettingsToSupabase('footer', footerData);
}

export async function syncHeadToSupabase(headData: any) {
  return await syncSiteSettingsToSupabase('head', headData);
}

export async function syncSectionToSupabase(pageSlug: string, sectionKey: string, sectionData: any) {
  const compositeKey = `section_${pageSlug.replace(/[^a-zA-Z0-9]/g, '_')}_${sectionKey}`;
  return await syncSiteSettingsToSupabase(compositeKey, sectionData);
}

// 8. PAGES SYNC (SECTION-TO-SECTION & SEO)
export async function syncPageToSupabase(
  slug: string,
  title: string,
  content: any,
  pageType: string = 'landing',
  seo: any = {}
) {
  if (!isSupabaseConfigured || !supabase || !slug) return false;
  try {
    const payload: any = {
      slug,
      title,
      page_type: pageType || 'landing',
      content,
      status: 'published',
      updated_at: new Date().toISOString()
    };

    if (seo?.seoTitle || content?.seoTitle) payload.seo_title = seo?.seoTitle || content?.seoTitle;
    if (seo?.seoDesc || content?.seoDesc) payload.seo_description = seo?.seoDesc || content?.seoDesc;
    if (seo?.canonicalUrl || content?.canonicalUrl) payload.canonical_url = seo?.canonicalUrl || content?.canonicalUrl;
    if (seo?.ogImage || content?.ogImage) payload.og_image_url = seo?.ogImage || content?.ogImage;

    const { error } = await supabase
      .from('pages')
      .upsert(payload, { onConflict: 'slug' });

    if (error) console.warn(`Supabase syncPage (${slug}) error:`, error.message);
    else console.log(`✓ Page (${slug}) tersimpan di Supabase`);

    // Dual redundancy: also save page content in site_settings so pages load instantly everywhere
    const cleanKey = `page_${slug.replace(/[^a-zA-Z0-9]/g, '_').replace(/^_+|_+$/g, '') || 'home'}`;
    await syncSiteSettingsToSupabase(cleanKey, content);

    return !error;
  } catch (e) {
    return false;
  }
}

export async function deletePageFromSupabase(slug: string) {
  if (!isSupabaseConfigured || !supabase || !slug) return false;
  try {
    const { error } = await supabase.from('pages').delete().eq('slug', slug);
    if (error) console.warn(`Supabase deletePage (${slug}) error:`, error.message);
    else console.log(`✓ Page (${slug}) dihapus dari Supabase:`, slug);
    return !error;
  } catch (e) {
    return false;
  }
}

// 9. MASTER PULL FROM SUPABASE (Sinkronisasi Data Dua Arah ke Browser)
export async function pullLatestFromSupabase() {
  if (!isSupabaseConfigured || !supabase) return false;
  try {
    console.log('🔄 Memeriksa & menarik data terbaru dari Supabase...');

    // Pull services
    const { data: dbServices } = await supabase.from('services').select('*').order('sort_order');
    if (dbServices && dbServices.length > 0) {
      const formatted = dbServices.map(s => ({
        id: s.slug,
        slug: s.slug,
        title: s.title,
        excerpt: s.excerpt,
        description: s.content?.overview || s.excerpt,
        imageUrl: s.image_url,
        targetAudience: s.target_audience,
        benefits: s.benefits || [],
        activities: s.activities || [],
        featured: s.featured,
        status: s.status
      }));
      localStorage.setItem('vo_services', JSON.stringify(formatted));
    }

    // Pull packages
    const { data: dbPackages } = await supabase.from('packages').select('*').order('sort_order');
    if (dbPackages && dbPackages.length > 0) {
      const formatted = dbPackages.map(p => ({
        id: p.slug,
        slug: p.slug,
        title: p.title,
        excerpt: p.excerpt,
        imageUrl: p.image_url,
        duration: p.duration,
        priceLabel: p.price_label,
        activities: p.activities || [],
        features: p.features || [],
        featured: p.featured,
        status: p.status
      }));
      localStorage.setItem('vo_packages', JSON.stringify(formatted));
    }

    // Pull gallery
    const { data: dbGallery } = await supabase.from('gallery_items').select('*').order('sort_order');
    if (dbGallery && dbGallery.length > 0) {
      const formatted = dbGallery.map(g => ({
        id: g.id,
        title: g.title,
        caption: g.caption,
        altText: g.alt_text,
        publicUrl: g.public_url,
        imageUrl: g.public_url,
        category: g.category,
        width: g.width || 800,
        height: g.height || 600,
        status: g.status
      }));
      localStorage.setItem('vo_gallery', JSON.stringify(formatted));
    }

    // Pull testimonials
    const { data: dbTestis } = await supabase.from('testimonials').select('*').order('sort_order');
    if (dbTestis && dbTestis.length > 0) {
      const formatted = dbTestis.map(t => ({
        id: t.id,
        name: t.display_name,
        display_name: t.display_name,
        role: t.role || '',
        company: t.organization || '',
        organization: t.organization || '',
        quote: t.quote,
        review: t.quote,
        avatar: t.avatar_url || '/images/testimonials/client-1.webp',
        rating: t.rating || 5,
        permission_confirmed: t.permission_confirmed,
        status: t.status,
        date: t.event_date ? new Date(t.event_date).toLocaleDateString('id-ID', { month: 'long', year: 'numeric' }) : 'Terverifikasi'
      }));
      localStorage.setItem('vo_testimonials', JSON.stringify(formatted));
    }

    // Pull FAQs
    const { data: dbFaqs } = await supabase.from('faq_items').select('*').order('sort_order');
    if (dbFaqs && dbFaqs.length > 0) {
      const formatted = dbFaqs.map(f => ({
        id: f.id,
        question: f.question,
        answer: f.answer,
        category: f.category || 'Umum',
        status: f.status
      }));
      localStorage.setItem('vo_faqs', JSON.stringify(formatted));
    }

    // Pull Blog Posts
    const { data: dbBlog } = await supabase.from('blog_posts').select('*').order('created_at', { ascending: false });
    if (dbBlog && dbBlog.length > 0) {
      const formatted = dbBlog.map(b => ({
        id: b.id,
        title: b.title,
        slug: b.slug,
        excerpt: b.excerpt,
        body: b.body,
        answerFirst: b.answer_first,
        thumbnailUrl: b.thumbnail_url,
        imageAlt: b.image_alt,
        status: b.status,
        readingTimeMinutes: b.reading_time_minutes || 5,
        seoTitle: b.seo_title,
        seoDescription: b.seo_description,
        canonicalUrl: b.canonical_url,
        publishedAt: b.published_at ? new Date(b.published_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }) : 'Terbaru 2026',
        authorName: 'Arby Ardiansyah',
        authorAvatar: '/images/author-artikel/author-artikel-arby-ardiansyah.webp'
      }));
      localStorage.setItem('vo_blog', JSON.stringify(formatted));
      localStorage.setItem('vo_blogs', JSON.stringify(formatted));
    }

    // Pull site_settings (general, navbar, footer, head, sections)
    const { data: dbSettings } = await supabase.from('site_settings').select('*');
    if (dbSettings && dbSettings.length > 0) {
      for (const item of dbSettings) {
        if (item.key === 'general' || item.key === 'settings') {
          localStorage.setItem('vo_settings', JSON.stringify(item.value));
        } else if (item.key === 'navbar') {
          localStorage.setItem('vo_navbar', JSON.stringify(item.value));
        } else if (item.key === 'footer') {
          localStorage.setItem('vo_footer', JSON.stringify(item.value));
        } else if (item.key === 'head') {
          localStorage.setItem('vo_head', JSON.stringify(item.value));
        } else if (item.key.startsWith('page_')) {
          localStorage.setItem(`vo_${item.key}`, JSON.stringify(item.value));
        } else {
          localStorage.setItem(`vo_setting_${item.key}`, JSON.stringify(item.value));
        }
      }
    }

    // Pull pages
    const { data: dbPages } = await supabase.from('pages').select('*');
    if (dbPages && dbPages.length > 0) {
      for (const p of dbPages) {
        if (p.slug === '/' || p.slug === 'beranda') {
          localStorage.setItem('vo_page_beranda', JSON.stringify(p.content));
          localStorage.setItem('vo_page_content', JSON.stringify(p.content));
        } else if (p.slug === '/tentang-kami' || p.slug === 'tentang-kami') {
          localStorage.setItem('vo_page_tentang_kami', JSON.stringify(p.content));
        } else if (p.slug === '/kontak' || p.slug === 'kontak') {
          localStorage.setItem('vo_page_kontak', JSON.stringify(p.content));
        } else if (p.slug === '/legal' || p.slug === 'legal') {
          localStorage.setItem('vo_page_legal', JSON.stringify(p.content));
        }
      }
      localStorage.setItem('vo_supabase_pages', JSON.stringify(dbPages));
    }

    // Dispatch sync events to refresh UI across tabs
    window.dispatchEvent(new CustomEvent('vo_content_updated', { detail: { key: 'supabase_pull_complete' } }));
    window.dispatchEvent(new Event('storage'));
    try {
      const bc = new BroadcastChannel('vo_sync_channel');
      bc.postMessage({ type: 'VO_UPDATED', key: 'supabase_pull_complete' });
    } catch (e) {}

    console.log('✓ Seluruh data dari Supabase berhasil disinkronkan ke cache lokal.');
    return true;
  } catch (err) {
    console.warn('Gagal menarik data dari Supabase:', err);
    return false;
  }
}
