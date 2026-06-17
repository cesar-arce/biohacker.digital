import { getTranslations } from 'next-intl/server';
import NewsletterForm from '@/components/newsletter/NewsletterForm';
import type { Metadata } from 'next';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'hero' });
  return { title: "The Biohacker's Guide", description: t('subtitle') };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'hero' });
  const tNewsletter = await getTranslations({ locale, namespace: 'newsletter' });

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4 text-center overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-400/5 rounded-full blur-3xl" />
          <div className="absolute top-2/3 left-1/4 w-[300px] h-[300px] bg-green-400/3 rounded-full blur-3xl" />
        </div>

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 -z-10 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(#00ff87 1px, transparent 1px), linear-gradient(90deg, #00ff87 1px, transparent 1px)', backgroundSize: '60px 60px' }}
        />

        <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase rounded-full border border-green-400/40 text-green-400 bg-green-400/10">
          {t('badge')}
        </span>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 tracking-tight">
          {t('title')}
          <br />
          <span className="text-green-400">{t('titleAccent')}</span>
        </h1>

        <p className="max-w-2xl text-lg md:text-xl text-zinc-400 mb-4 leading-relaxed">
          {t('subtitle')}
        </p>
        <p className="max-w-2xl text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed">
          {t('subtitle2')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-20">
          <Link
            href={`/${locale}/books`}
            className="px-8 py-4 bg-green-400 text-zinc-950 font-bold rounded-lg hover:bg-green-300 transition-colors text-lg"
          >
            {t('ctaBooks')}
          </Link>
          <Link
            href={`/${locale}/blog`}
            className="px-8 py-4 border border-zinc-700 text-zinc-200 font-bold rounded-lg hover:border-green-400 hover:text-green-400 transition-colors text-lg"
          >
            {t('ctaBlog')}
          </Link>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-10 md:gap-16">
          {[
            { value: '10K+', label: t('statsReaders') },
            { value: '8', label: t('statsBooks') },
            { value: '40+', label: t('statsCountries') },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold text-green-400">{stat.value}</div>
              <div className="text-sm text-zinc-500 mt-1 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-24 px-4 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '📚', title: 'The Collection', desc: 'Science-backed books on sleep, nutrition, performance, mind, and longevity.', href: `/${locale}/books` },
              { icon: '🧠', title: 'Expert Blog', desc: 'AI-assisted articles distilling the latest biohacking research directly from the books.', href: `/${locale}/blog` },
              { icon: '💬', title: 'Community Forum', desc: 'Ask questions, share protocols, and learn from thousands of fellow biohackers.', href: `/${locale}/community` },
            ].map((f) => (
              <Link
                key={f.title}
                href={f.href}
                className="group p-8 bg-zinc-900 border border-zinc-800 rounded-2xl hover:border-green-400/50 transition-all hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">{f.title}</h3>
                <p className="text-zinc-500 leading-relaxed">{f.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section className="py-24 px-4 border-t border-zinc-800">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-green-400/10 border border-green-400/20 mb-6">
            <span className="text-2xl">🧬</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{tNewsletter('title')}</h2>
          <p className="text-zinc-400 mb-8">{tNewsletter('subtitle')}</p>
          <NewsletterForm />
          <p className="text-zinc-600 text-xs mt-4">{tNewsletter('disclaimer')}</p>
        </div>
      </section>

      {/* ── PODCAST ── */}
      <section className="py-10 px-4 border-t border-zinc-800">
        <div className="max-w-2xl mx-auto">
          <a
            href="https://open.spotify.com/show/3yjeOceJndIMNIQQN6IR9s"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 bg-zinc-900 border border-zinc-800 rounded-xl flex flex-col sm:flex-row items-start sm:items-center gap-4 hover:border-green-400/40 transition-all duration-200 hover:shadow-lg hover:shadow-green-400/5 group"
          >
            <div className="text-3xl">🎙</div>
            <div className="flex-1">
              <p className="text-white font-semibold text-sm mb-0.5 group-hover:text-green-400 transition-colors">The Biohacker&apos;s Guide Podcast — on Spotify</p>
              <p className="text-zinc-500 text-sm">Join us each week — discoveries, practical biohacks, and inspiring conversations about health, energy, and the invisible forces that shape our lives.</p>
            </div>
            <span className="text-zinc-600 group-hover:text-green-400 transition-colors text-lg shrink-0">→</span>
          </a>
        </div>
      </section>
    </>
  );
}
