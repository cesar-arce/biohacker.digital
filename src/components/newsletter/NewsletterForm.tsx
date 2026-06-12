'use client';

import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';

export default function NewsletterForm() {
  const t = useTranslations('newsletter');
  const locale = useLocale();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || loading) return;
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, locale }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  const spamNote = locale === 'es'
    ? 'Revisa tu carpeta de Spam si no lo recibes en los próximos minutos.'
    : locale === 'fr-CA'
    ? 'Vérifiez votre dossier Spam si vous ne le recevez pas dans les prochaines minutes.'
    : 'Check your Spam folder if you don\'t see it within a few minutes.';

  if (submitted) {
    return (
      <div className="max-w-md mx-auto text-center py-4">
        <div className="text-3xl mb-3">✅</div>
        <p className="text-green-400 font-semibold text-lg mb-1">{t('success')}</p>
        <p className="text-zinc-500 text-sm mb-3">
          {locale === 'es' ? 'Tu guía gratuita está en camino.' : locale === 'fr-CA' ? 'Votre guide gratuit est en route.' : 'Your free guide is on its way.'}
        </p>
        <p className="text-amber-400/80 text-xs bg-amber-400/10 border border-amber-400/20 rounded-lg px-4 py-2">
          📁 {spamNote}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={t('placeholder')}
        className="flex-1 px-5 py-3 rounded-lg bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-green-400 transition-colors"
      />
      <button
        type="submit"
        disabled={loading}
        className="px-6 py-3 bg-green-400 text-zinc-950 font-bold rounded-lg hover:bg-green-300 transition-colors whitespace-nowrap disabled:opacity-60"
      >
        {loading ? '...' : t('cta')}
      </button>
      {error && <p className="text-red-400 text-sm w-full text-center">{error}</p>}
    </form>
  );
}
