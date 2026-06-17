'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useState } from 'react';

const courses = [
  {
    key: 'course1',
    icon: '🏠',
    color: 'from-green-900/40 to-zinc-900',
    accent: 'border-green-500/30',
    badge: 'Mini-Course',
    badgeColor: 'bg-green-400/10 text-green-400 border border-green-400/20',
  },
  {
    key: 'course2',
    icon: '🔮',
    color: 'from-purple-900/40 to-zinc-900',
    accent: 'border-purple-500/30',
    badge: 'Mini-Course',
    badgeColor: 'bg-purple-400/10 text-purple-400 border border-purple-400/20',
  },
  {
    key: 'course3',
    icon: '⚡',
    color: 'from-amber-900/40 to-zinc-900',
    accent: 'border-amber-500/30',
    badge: 'Mini-Course',
    badgeColor: 'bg-amber-400/10 text-amber-400 border border-amber-400/20',
  },
  {
    key: 'workshop',
    icon: '🛏️',
    color: 'from-blue-900/40 to-zinc-900',
    accent: 'border-blue-500/30',
    badge: 'Workshop',
    badgeColor: 'bg-blue-400/10 text-blue-400 border border-blue-400/20',
  },
];

export default function CoursesPage() {
  const t = useTranslations('courses');
  const locale = useLocale();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleNotify(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, locale, source: 'courses' }),
      });
      if (res.ok) setSubmitted(true);
    } catch {
      // silent
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-zinc-950 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-green-400/10 text-green-400 border border-green-400/20 rounded-full mb-4">
            {t('badge')}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('title')}
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Course grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {courses.map((course) => (
            <div
              key={course.key}
              className={`relative rounded-2xl border ${course.accent} bg-gradient-to-b ${course.color} overflow-hidden flex flex-col`}
            >
              {/* Coming Soon banner */}
              <div className="absolute top-4 right-0 bg-zinc-950/90 text-green-400 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-l-full border-l border-t border-b border-green-400/30">
                Coming Soon
              </div>

              {/* Card content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="text-4xl mb-4">{course.icon}</div>
                <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full mb-3 w-fit ${course.badgeColor}`}>
                  {course.badge}
                </span>
                <h2 className="text-lg font-bold text-white mb-3 leading-snug">
                  {t(`${course.key}.title`)}
                </h2>
                <p className="text-sm text-zinc-400 leading-relaxed flex-1">
                  {t(`${course.key}.description`)}
                </p>
                <div className="mt-5 pt-4 border-t border-zinc-800 flex flex-wrap gap-2">
                  {(t.raw(`${course.key}.tags`) as string[]).map((tag: string) => (
                    <span key={tag} className="text-xs text-zinc-500 bg-zinc-800 px-2 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Notify me section */}
        <div className="max-w-xl mx-auto text-center bg-zinc-900 border border-zinc-800 rounded-2xl px-8 py-10">
          <div className="text-3xl mb-3">🔔</div>
          <h3 className="text-xl font-bold text-white mb-2">{t('notify.title')}</h3>
          <p className="text-sm text-zinc-400 mb-6">{t('notify.subtitle')}</p>

          {submitted ? (
            <p className="text-green-400 font-medium">{t('notify.success')}</p>
          ) : (
            <form onSubmit={handleNotify} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('notify.placeholder')}
                className="flex-1 bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-green-400 transition-colors"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-green-400 hover:bg-green-300 text-zinc-950 font-bold text-sm px-5 py-2.5 rounded-lg transition-colors disabled:opacity-50 whitespace-nowrap"
              >
                {loading ? '...' : t('notify.cta')}
              </button>
            </form>
          )}
          <p className="text-xs text-zinc-600 mt-3">{t('notify.disclaimer')}</p>
        </div>

      </div>
    </main>
  );
}
