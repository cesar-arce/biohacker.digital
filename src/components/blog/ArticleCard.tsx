import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { formatDate } from '@/lib/utils';
import type { BlogPost } from '@/types';

interface ArticleCardProps {
  post: BlogPost;
}

export default function ArticleCard({ post }: ArticleCardProps) {
  const t = useTranslations('blog');
  const locale = useLocale();

  return (
    <article className="group bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-green-400/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-green-400/5">
      {/* OG Image placeholder */}
      <div className="aspect-video bg-gradient-to-br from-zinc-800 to-zinc-900 relative overflow-hidden">
        {post.og_image_url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={post.og_image_url} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-green-400/10 border border-green-400/20 flex items-center justify-center">
              <span className="text-green-400 text-2xl">✦</span>
            </div>
          </div>
        )}
        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1">
          {post.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="px-2 py-0.5 text-xs rounded-full bg-zinc-950/80 text-green-400 border border-green-400/30 backdrop-blur-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="p-5">
        {/* Meta */}
        <div className="flex items-center gap-3 text-xs text-zinc-600 mb-3">
          <span>{formatDate(post.published_at, locale)}</span>
          <span>·</span>
          <span>{post.read_time_minutes} {t('minRead')}</span>
        </div>

        <h2 className="font-bold text-white text-lg leading-tight mb-2 group-hover:text-green-400 transition-colors line-clamp-2">
          {post.title}
        </h2>
        <p className="text-zinc-500 text-sm leading-relaxed line-clamp-3 mb-5">
          {post.excerpt}
        </p>

        <Link
          href={`/${locale}/blog/${post.slug}`}
          className="inline-flex items-center gap-1.5 text-green-400 text-sm font-medium hover:gap-3 transition-all"
        >
          {t('readMore')}
          <span>→</span>
        </Link>
      </div>
    </article>
  );
}
