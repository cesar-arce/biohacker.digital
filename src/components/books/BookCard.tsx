import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { buildAmazonUrl } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { Book, Locale } from '@/types';

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  const t = useTranslations('books');
  const locale = useLocale() as Locale;
  const title = book.title[locale] ?? book.title['en'];
  const description = book.description[locale] ?? book.description['en'];

  return (
    <div className="group relative bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-green-400/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-green-400/10">
      {/* Cover */}
      <div className="relative aspect-[3/4] bg-zinc-800 overflow-hidden">
        {book.cover_image_url ? (
          <Image
            src={book.cover_image_url}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-zinc-600 text-4xl">📗</span>
          </div>
        )}
        {/* Tags overlay */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1">
          {book.tags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="green" className="bg-zinc-950/80 backdrop-blur-sm">{tag}</Badge>
          ))}
        </div>
        {/* Coming Soon badge */}
        {book.coming_soon && (
          <div className="absolute inset-0 flex items-center justify-center bg-zinc-950/60 backdrop-blur-[2px]">
            <span className="px-5 py-2 rounded-full bg-green-400 text-zinc-950 font-bold text-sm tracking-widest uppercase shadow-lg">
              Coming Soon
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-bold text-white text-lg leading-tight mb-2 group-hover:text-green-400 transition-colors">
          {title}
        </h3>
        <p className="text-zinc-500 text-sm leading-relaxed line-clamp-3 mb-5">
          {description}
        </p>

        {/* Actions */}
        <div className="flex gap-2">
          {book.coming_soon ? (
            <Button className="flex-1 opacity-40 cursor-not-allowed" size="sm" disabled>
              {t('buyOnAmazon')}
            </Button>
          ) : (
            <Button asChild className="flex-1" size="sm">
              <a href={buildAmazonUrl(book.amazon_url)} target="_blank" rel="noopener noreferrer">
                {t('buyOnAmazon')}
              </a>
            </Button>
          )}
          <Button asChild variant="outline" size="sm">
            <Link href={`/${locale}/books/${book.slug}`}>{t('learnMore')}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
