'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/toast';

export default function NewsletterFloat() {
  const t = useTranslations('newsletter');
  const locale = useLocale();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const { show: showToast, ToastComponent } = useToast();

  // Auto-open after 8 seconds, only once per session
  useEffect(() => {
    const alreadyShown = sessionStorage.getItem('newsletter_shown');
    if (alreadyShown) return;
    const timer = setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem('newsletter_shown', 'true');
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || loading) return;
    setLoading(true);
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, locale }),
      });
      if (res.ok) {
        setSubmitted(true);
        showToast(t('success'), 'success');
        setTimeout(() => { setOpen(false); setDismissed(true); }, 3000);
      } else {
        showToast('Something went wrong. Please try again.', 'error');
      }
    } finally {
      setLoading(false);
    }
  }

  if (dismissed || pathname.includes('/free-guide')) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {ToastComponent}
      {/* Panel */}
      {open && (
        <div className="w-80 bg-zinc-900 border border-zinc-700 rounded-2xl shadow-2xl shadow-black/60 overflow-hidden animate-in slide-in-from-bottom-4 fade-in duration-300">
          {/* Header */}
          <div className="relative bg-gradient-to-br from-green-400/20 to-green-400/5 border-b border-zinc-800 p-5">
            <button
              onClick={() => { setOpen(false); setDismissed(true); }}
              className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center rounded-full text-zinc-500 hover:text-white hover:bg-zinc-700 transition-colors text-sm"
              aria-label="Close"
            >
              ✕
            </button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-green-400/20 border border-green-400/30 flex items-center justify-center text-lg flex-shrink-0">
                🧬
              </div>
              <div>
                <p className="text-white font-bold text-sm leading-tight">{t('title')}</p>
                <p className="text-zinc-400 text-xs mt-0.5 leading-snug">{t('subtitle')}</p>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="p-5">
            {submitted ? (
              <div className="text-center py-3">
                <div className="text-3xl mb-2">✅</div>
                <p className="text-green-400 font-semibold text-sm">{t('success')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('placeholder')}
                  className="w-full px-4 py-2.5 rounded-lg bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-green-400 transition-colors"
                />
                <Button type="submit" disabled={loading} className="w-full" size="sm">
                  {loading ? '...' : t('cta')}
                </Button>
                <p className="text-zinc-600 text-xs text-center">{t('disclaimer')}</p>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Toggle button — always visible */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className={`group flex items-center gap-2 px-4 py-3 rounded-full shadow-lg shadow-black/40 font-bold text-sm transition-all duration-300
          ${open
            ? 'bg-zinc-800 border border-zinc-700 text-zinc-300 hover:border-zinc-600'
            : 'bg-green-400 text-zinc-950 hover:bg-green-300 hover:scale-105'
          }`}
        aria-label="Newsletter"
      >
        <span className="text-base">{open ? '✕' : '🧬'}</span>
        <span>{open ? 'Close' : 'Free Starter Kit'}</span>
      </button>
    </div>
  );
}
