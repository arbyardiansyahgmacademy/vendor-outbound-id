import { SITE_INFO } from '../data/defaultContent';
import type { BlogPostItem, ServiceItem, FAQItem } from '../data/defaultContent';

export interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  authorName?: string;
  noindex?: boolean;
}

export const OFFICIAL_LOGO_URL = `${SITE_INFO.domain}/images/logo/logo-provider-outbound.webp`;

export function formatSEOTitle(title: string): string {
  if (title.includes(SITE_INFO.brandName)) {
    return title;
  }
  return `${title} | ${SITE_INFO.brandName} Batu - Malang`;
}

// GEO & AEO Local Business & Organization Schema
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'TouristInformationCenter', 'SportsActivityLocation'],
    '@id': `${SITE_INFO.domain}/#localbusiness`,
    name: SITE_INFO.brandName,
    legalName: 'Provider Outbound Indonesia',
    url: SITE_INFO.domain,
    logo: OFFICIAL_LOGO_URL,
    image: `${SITE_INFO.domain}/images/hero/hero-outbound.webp`,
    description: SITE_INFO.description,
    telephone: SITE_INFO.whatsappDisplay,
    email: 'info@provideroutbound.web.id',
    priceRange: 'Rp 85.000 - Rp 450.000',
    currenciesAccepted: 'IDR',
    paymentAccepted: 'Cash, Bank Transfer',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday'
        ],
        opens: '08:00',
        closes: '21:00'
      }
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Kawasan Wisata Songgoriti & Coban Rondo, Kec. Batu',
      addressLocality: 'Kota Batu',
      addressRegion: 'Jawa Timur',
      postalCode: '65314',
      addressCountry: 'ID'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -7.8712,
      longitude: 112.5270
    },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Kota Batu, Jawa Timur' },
      { '@type': 'AdministrativeArea', name: 'Kota Malang, Jawa Timur' },
      { '@type': 'AdministrativeArea', name: 'Kabupaten Malang, Jawa Timur' },
      { '@type': 'AdministrativeArea', name: 'Jawa Timur, Indonesia' }
    ],
    hasMap: 'https://maps.google.com/?q=Kota+Batu+Malang',
    knowsAbout: [
      'Outbound Training Batu Malang',
      'Team Building Perusahaan',
      'Corporate Family Gathering Malang',
      'LDKS Outbound Sekolah',
      'Rafting Kasembon & Kaliwatu',
      'Fun Offroad Jeep Batu 4x4',
      'Experiential Learning Indonesia'
    ],
    slogan: SITE_INFO.tagline
  };
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_INFO.domain}/#website`,
    name: SITE_INFO.brandName,
    url: SITE_INFO.domain,
    description: SITE_INFO.description,
    publisher: {
      '@type': 'Organization',
      name: SITE_INFO.brandName,
      url: SITE_INFO.domain,
      logo: OFFICIAL_LOGO_URL
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_INFO.domain}/blog?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
    inLanguage: 'id-ID'
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_INFO.domain}${item.url}`,
    })),
  };
}

export function generateServiceSchema(service: ServiceItem) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.title,
    provider: {
      '@type': 'LocalBusiness',
      name: SITE_INFO.brandName,
      telephone: SITE_INFO.whatsappDisplay,
      image: OFFICIAL_LOGO_URL,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Batu',
        addressRegion: 'Jawa Timur',
        addressCountry: 'ID'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -7.8712,
        longitude: 112.5270
      },
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Kota Batu, Jawa Timur' },
        { '@type': 'AdministrativeArea', name: 'Kabupaten & Kota Malang, Jawa Timur' },
      ],
      url: SITE_INFO.domain,
    },
    description: service.excerpt,
    areaServed: 'Batu dan Malang, Jawa Timur',
    url: `${SITE_INFO.domain}/layanan/${service.slug}`,
  };
}

export function generateArticleSchema(article: BlogPostItem) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.canonicalUrl || `${SITE_INFO.domain}/blog/${article.slug}`,
    },
    headline: article.title,
    description: article.seoDescription || article.excerpt,
    image: article.thumbnailUrl.startsWith('http') ? article.thumbnailUrl : `${SITE_INFO.domain}${article.thumbnailUrl}`,
    datePublished: '2026-10-25T00:00:00+07:00',
    dateModified: '2026-10-25T00:00:00+07:00',
    author: {
      '@type': 'Person',
      name: article.authorName || 'Arby Ardiansyah',
      jobTitle: article.authorRole || 'Outbound & Event Specialist',
      url: `${SITE_INFO.domain}/tentang-kami`,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_INFO.brandName,
      url: SITE_INFO.domain,
      logo: {
        '@type': 'ImageObject',
        url: OFFICIAL_LOGO_URL,
      },
    },
  };
}

export function generateFAQSchema(faqs: FAQItem[]) {
  if (!faqs || faqs.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
