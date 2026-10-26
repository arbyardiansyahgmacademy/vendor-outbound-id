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

export function formatSEOTitle(title: string): string {
  if (title.includes(SITE_INFO.brandName)) {
    return title;
  }
  return `${title} | ${SITE_INFO.brandName} Batu - Malang`;
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_INFO.brandName,
    url: SITE_INFO.domain,
    description: SITE_INFO.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_INFO.domain}/blog?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
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
        url: `${SITE_INFO.domain}/images/logo/logo-fix.webp`,
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
