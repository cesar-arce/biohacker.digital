'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

type Step = 'options' | 'email' | 'sent';

interface AuthModalProps {
  onClose: () => void;
}

export default function AuthModal({ onClose }: AuthModalProps) {
  const t = useTranslations('auth');
  const locale = useLocale();
  const [step, setStep] = useState<Step>('options');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [fromGoogle, setFromGoogle] = useState(false);

  async function handleEmail(e: React.FormEvent) {
    e.preventDefault();
    if (!email || loading) return;
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/auth/magic-link', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, locale }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? 'Something went wrong. Please try again.');
        return;
      }
      setStep('sent');
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog open onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-green-400 flex items-center justify-center flex-shrink-0">
              <span className="text-zinc-950 font-black text-sm">BH</span>
            </div>
            <div>
              <DialogTitle>{t('signIn')}</DialogTitle>
              <DialogDescription>Join the biohacking community</DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="p-6">

          {/* ── Step 1: Options ── */}
          {step === 'options' && (
            <div className="flex flex-col gap-3">
              {/* Google button */}
              <button
                onClick={() => { setFromGoogle(true); setStep('email'); }}
                className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl border border-zinc-700 text-white hover:border-zinc-500 hover:bg-zinc-800 transition-all text-sm font-medium"
              >
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                {t('withGoogle')}
              </button>

              {/* Divider */}
              <div className="flex items-center gap-3 my-1">
                <div className="flex-1 h-px bg-zinc-800" />
                <span className="text-zinc-600 text-xs uppercase tracking-widest">or</span>
                <div className="flex-1 h-px bg-zinc-800" />
              </div>

              {/* Email button */}
              <button
                onClick={() => { setFromGoogle(false); setStep('email'); }}
                className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl bg-green-400 text-zinc-950 font-bold hover:bg-green-300 transition-colors text-sm"
              >
                ✉ {t('withEmail')}
              </button>

              <p className="text-zinc-600 text-xs text-center mt-2">
                No password needed. We&apos;ll send a secure sign-in link.
              </p>
            </div>
          )}

          {/* ── Step 2: Email form ── */}
          {step === 'email' && (
            <>
              {fromGoogle && (
                <div className="flex items-start gap-3 p-3 mb-4 rounded-xl bg-zinc-800 border border-zinc-700">
                  <span className="text-lg">💡</span>
                  <p className="text-zinc-300 text-sm leading-snug">
                    Google sign-in is coming soon. Enter your email and we&apos;ll send you a secure magic link instead.
                  </p>
                </div>
              )}
              <form onSubmit={handleEmail} className="flex flex-col gap-3">
                <label className="text-zinc-400 text-sm font-medium">{t('emailLabel')}</label>
                <input
                  type="email"
                  required
                  autoFocus
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-green-400 transition-colors"
                />
                {error && <p className="text-red-400 text-sm">{error}</p>}
                <Button type="submit" disabled={loading} size="lg" className="w-full">
                  {loading ? '...' : t('withEmail')}
                </Button>
              </form>
              <button
                onClick={() => { setStep('options'); setError(''); }}
                className="mt-3 w-full text-zinc-500 text-xs hover:text-zinc-300 transition-colors text-center"
              >
                ← Back
              </button>
            </>
          )}

          {/* ── Step 3: Email sent ── */}
          {step === 'sent' && (
            <div className="text-center py-4">
              <div className="text-4xl mb-3">📬</div>
              <p className="text-white font-semibold mb-2">{t('checkEmail')}</p>
              <p className="text-zinc-500 text-sm">{email}</p>
              <p className="text-amber-400/80 text-xs mt-3 bg-amber-400/10 border border-amber-400/20 rounded-lg px-3 py-2">
                📁 {locale === 'es' ? 'Revise su carpeta de Spam si no recibe el correo.' : locale === 'fr-CA' ? 'Vérifiez votre dossier Spam si vous ne recevez pas le courriel.' : 'Please check your Spam folder if you don\'t receive the email.'}
              </p>
              <button
                onClick={() => { setStep('email'); setError(''); }}
                className="mt-4 text-green-400 text-sm hover:underline"
              >
                {locale === 'es' ? 'Usar un correo diferente' : locale === 'fr-CA' ? 'Utiliser un autre courriel' : 'Use a different email'}
              </button>
            </div>
          )}

        </div>
      </DialogContent>
    </Dialog>
  );
}
