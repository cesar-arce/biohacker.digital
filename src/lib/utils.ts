import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function buildAmazonUrl(baseUrl: string): string {
  const tag = process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG;
  if (!tag) return baseUrl;
  const sep = baseUrl.includes('?') ? '&' : '?';
  return `${baseUrl}${sep}tag=${tag}`;
}

export function formatDate(dateString: string, locale: string): string {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(dateString));
}
