import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import type { Metadata } from 'next';
import ArticleCard from '@/components/blog/ArticleCard';
import { getBlogPosts } from '@/lib/supabase/queries';
import { formatDate } from '@/lib/utils';
import type { BlogPost } from '@/types';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'blog' });
  return { title: t('title'), description: t('subtitle') };
}

const PLACEHOLDER_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'geobiology-earths-magnetic-field-sleep-health',
    locale: 'en',
    title: "The Invisible Blueprint: How Earth's Magnetic Field Shapes Your Sleep and Health",
    excerpt: "What if the chronic fatigue, insomnia, and anxiety so many people normalize are not simply lifestyle issues — but symptoms of electromagnetic disharmony with the planet beneath your feet? Geobiology reveals the hidden blueprint of health.",
    content: '',
    tags: ['Geobiology', 'Geopathic Stress', 'Sleep', 'Biohacking'],
    author_id: '1', read_time_minutes: 11, published_at: '2025-10-15', og_image_url: '/images/blog/blog-geobiology.jpg',
  },
  {
    id: '2',
    slug: 'geopathic-stress-bedroom-sleep-health',
    locale: 'en',
    title: "Is Your Bedroom Making You Sick? The Hidden Truth About Geopathic Stress",
    excerpt: "Imagine your bed resting over a geopathic stress point. What should be deep, restorative sleep becomes hours of tossing, turning, and waking exhausted. You blame the mattress. But what if the problem is beneath it?",
    content: '',
    tags: ['Geopathies', 'Geopathic Stress', 'Sleep Health', 'EMF'],
    author_id: '1', read_time_minutes: 13, published_at: '2025-10-22', og_image_url: '/images/blog/blog-geopathies.jpg',
  },
  {
    id: '3',
    slug: 'radiesthesia-body-biological-antenna',
    locale: 'en',
    title: "Your Body Is an Antenna: The Science of Radiesthesia",
    excerpt: "Radiesthesia is not about magic or divination. It is about the measurable capacity of the human nervous system to detect variations in the Earth's geomagnetic field — a scientifically recognized phenomenon known as magnetosensitivity.",
    content: '',
    tags: ['Radiesthesia', 'Dowsing', 'Magnetosensitivity', 'Biohacking'],
    author_id: '1', read_time_minutes: 12, published_at: '2025-11-01', og_image_url: '/images/blog/blog-radiesthesia.jpg',
  },
  {
    id: '4',
    slug: 'map-home-energy-rods-pendulums-practical-guide',
    locale: 'en',
    title: "How to Map Your Home's Hidden Energy Fields with Rods and Pendulums",
    excerpt: "Your home has an electromagnetic landscape you cannot see — but can learn to detect. This step-by-step guide shows you how to use L-rods, pendulums, and EMF meters to map the invisible energy grid of any space.",
    content: '',
    tags: ['Radionics', 'Radiesthesia', 'Dowsing', 'Practical Guide'],
    author_id: '1', read_time_minutes: 10, published_at: '2025-11-10', og_image_url: '/images/blog/blog-radionics.jpg',
  },
  {
    id: '5',
    slug: 'electroculture-atmospheric-electricity-plant-growth',
    locale: 'en',
    title: "Tesla's Forgotten Science: Growing Plants with Atmospheric Electricity",
    excerpt: "Between Earth's surface and the ionosphere sits a 400,000-volt electric ocean. Every lightning bolt is a transaction in a planetary energy system that has always nourished life. With a simple copper spiral you can join that circuit.",
    content: '',
    tags: ['Electroculture', 'Atmospheric Electricity', 'Tesla', 'Plant Growth'],
    author_id: '1', read_time_minutes: 14, published_at: '2025-11-20', og_image_url: '/images/blog/blog-electroculture.jpg',
  },
];

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'blog' });

  let posts: BlogPost[] = [];
  try { posts = await getBlogPosts(locale); } catch { posts = []; }
  if (posts.length === 0) posts = PLACEHOLDER_POSTS;

  const [featured, ...rest] = posts;

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase rounded-full border border-green-400/40 text-green-400 bg-green-400/10">
            Blog
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{t('title')}</h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">{t('subtitle')}</p>
        </div>

        {/* Featured article */}
        {featured && (
          <article className="group mb-12 bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-green-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-400/5">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Image */}
              <div className="relative bg-gradient-to-br from-zinc-800 to-zinc-900 min-h-[240px] overflow-hidden">
                {featured.og_image_url ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={featured.og_image_url} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 absolute inset-0" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-green-400/10 border border-green-400/20 flex items-center justify-center">
                      <span className="text-green-400 text-4xl">✦</span>
                    </div>
                  </div>
                )}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-bold rounded-full bg-green-400 text-zinc-950">Featured</span>
                </div>
                <div className="absolute top-4 right-4 flex flex-wrap gap-1 justify-end max-w-[60%]">
                  {featured.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="px-2 py-0.5 text-xs rounded-full bg-zinc-950/80 text-green-400 border border-green-400/30 backdrop-blur-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 text-xs text-zinc-600 mb-4">
                  <span>{formatDate(featured.published_at, locale)}</span>
                  <span>·</span>
                  <span>{featured.read_time_minutes} {t('minRead')}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-4 group-hover:text-green-400 transition-colors">
                  {featured.title}
                </h2>
                <p className="text-zinc-400 leading-relaxed mb-6 line-clamp-3">{featured.excerpt}</p>
                <Link
                  href={`/${locale}/blog/${featured.slug}`}
                  className="inline-flex items-center gap-1.5 text-green-400 font-medium hover:gap-3 transition-all self-start"
                >
                  {t('readMore')} →
                </Link>
              </div>
            </div>
          </article>
        )}

        {/* Articles grid */}
        {rest.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <ArticleCard key={post.id} post={post} />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
