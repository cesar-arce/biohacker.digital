import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import { aboutContent } from '@/lib/content/about';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });
  return { title: t('title'), description: t('subtitle') };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });
  const c = aboutContent[locale] ?? aboutContent['en'];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Collection intro */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase rounded-full border border-green-400/40 text-green-400 bg-green-400/10">
            About
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">{t('title')}</h1>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl mx-auto">{c.collectionIntro}</p>
        </div>

        {/* Author section */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-zinc-800" />
            <span className="text-green-400 text-xs font-bold tracking-widest uppercase">{c.aboutAuthorLabel}</span>
            <div className="h-px flex-1 bg-zinc-800" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
            {/* Author photo */}
            <div className="md:col-span-1 flex flex-col items-center md:items-start">
              <div className="w-48 h-48 md:w-full md:h-auto md:aspect-square rounded-2xl overflow-hidden border border-zinc-800 shadow-xl shadow-black/40 mb-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/books/Picture_Author.png" alt="César Arce — Author" className="w-full h-full object-cover object-top" />
              </div>
              <p className="text-white font-bold text-lg">César Arce</p>
              <p className="text-zinc-500 text-sm">{c.authorRole}</p>
              <div className="mt-5 space-y-2 w-full">
                <a href="mailto:cesararceauthor@gmail.com" className="flex items-center gap-2 text-sm text-zinc-400 hover:text-green-400 transition-colors">
                  <span>✉</span> cesararceauthor@gmail.com
                </a>
                <a href="https://linktr.ee/cesararceauthor" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-zinc-400 hover:text-green-400 transition-colors">
                  <span>🔗</span> linktr.ee/cesararceauthor
                </a>
                <a href="https://www.amazon.com/author/cesararce" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-zinc-400 hover:text-green-400 transition-colors">
                  <span>📚</span> amazon.com/author/cesararce
                </a>
              </div>
            </div>

            {/* Bio */}
            <div className="md:col-span-2 space-y-5 text-zinc-400 leading-relaxed">
              {c.bio.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Closing quote */}
        <div className="my-16 px-8 py-10 bg-zinc-900 border border-zinc-800 rounded-2xl text-center">
          <p className="text-zinc-300 text-lg leading-relaxed italic mb-4">
            &ldquo;{c.quoteText}&rdquo;
          </p>
          <p className="text-green-400 font-semibold">{c.quoteAuthor}</p>
        </div>

        {/* Acknowledgments */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-zinc-800" />
            <span className="text-green-400 text-xs font-bold tracking-widest uppercase">{c.acknowledgementsLabel}</span>
            <div className="h-px flex-1 bg-zinc-800" />
          </div>
          <div className="space-y-5 text-zinc-400 leading-relaxed">
            <p>{c.ack1}</p>
            <p>{c.ack2}</p>
            <p className="text-zinc-300 italic">{c.ackClosing}</p>
          </div>

          {/* Podcast CTA */}
          <a
            href="https://open.spotify.com/show/3yjeOceJndIMNIQQN6IR9s"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 p-5 bg-zinc-900 border border-zinc-800 rounded-xl flex flex-col sm:flex-row items-start sm:items-center gap-4 hover:border-green-400/40 transition-all duration-200 hover:shadow-lg hover:shadow-green-400/5 group"
          >
            <div className="text-3xl">🎙</div>
            <div className="flex-1">
              <p className="text-white font-semibold text-sm mb-0.5 group-hover:text-green-400 transition-colors">{c.podcastTitle}</p>
              <p className="text-zinc-500 text-sm">{c.podcastDesc}</p>
            </div>
            <span className="text-zinc-600 group-hover:text-green-400 transition-colors text-lg shrink-0">→</span>
          </a>
        </section>

        {/* Collection volumes */}
        <section>
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-zinc-800" />
            <span className="text-green-400 text-xs font-bold tracking-widest uppercase">{c.collectionLabel}</span>
            <div className="h-px flex-1 bg-zinc-800" />
          </div>
          <div className="space-y-4">
            {c.volumes.map((vol) => (
              <Link
                key={vol.slug}
                href={`/${locale}/books/${vol.slug}`}
                className="group block bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:border-green-400/40 transition-all duration-200 hover:shadow-lg hover:shadow-green-400/5"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 px-2.5 py-1 rounded-lg bg-green-400/10 border border-green-400/20 text-green-400 text-xs font-bold uppercase tracking-wider">
                    {vol.label}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-semibold group-hover:text-green-400 transition-colors mb-1">{vol.title}</p>
                    <p className="text-zinc-500 text-sm italic mb-2">{vol.tagline}</p>
                    <p className="text-zinc-500 text-sm leading-relaxed line-clamp-2">{vol.body}</p>
                  </div>
                  <span className="text-zinc-600 group-hover:text-green-400 transition-colors shrink-0 mt-1">→</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href={`/${locale}/books`} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-400 text-zinc-950 font-bold text-sm hover:bg-green-300 transition-colors">
              {c.exploreAll}
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
