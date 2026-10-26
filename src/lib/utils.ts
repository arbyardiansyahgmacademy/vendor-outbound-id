import { SITE_INFO } from '../data/defaultContent';

export function getWhatsAppUrl(customMessage?: string): string {
  const number = SITE_INFO.whatsappNumber.replace(/[^0-9]/g, '');
  const message = customMessage || SITE_INFO.defaultWaMessage;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
}

export function calculateReadingTime(text: string): number {
  const wordsPerMinute = 200;
  const wordCount = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
}
