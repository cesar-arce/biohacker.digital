'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

type Step = 'email' | 'register' | 'welcome-back' | 'done';

interface AuthModalProps {
  onClose: () => void;
}

const INTERESTS = [
  { value: 'geobiology',    en: 'Geobiology',          es: 'Geobiología',       fr: 'Géobiologie' },
  { value: 'geopathies',   en: 'Geopathies',           es: 'Geopatías',         fr: 'Géopathies' },
  { value: 'radiesthesia', en: 'Radiesthesia',         es: 'Radiestesia',       fr: 'Radiesthésie' },
  { value: 'electroculture',en: 'Electroculture',      es: 'Electrocultura',    fr: 'Électroculture' },
  { value: 'emf',          en: 'EMF & Electrosmog',    es: 'EMF & Electrosmog', fr: 'CEM & Électrosmog' },
  { value: 'all',          en: 'All topics',           es: 'Todos los temas',   fr: 'Tous les sujets' },
];

const COPY = {
  en: {
    title: 'Join the Community',
    subtitle: 'Enter your email to continue',
    emailLabel: 'Email address',
    emailPlaceholder: 'you@example.com',
    continueBtn: 'Continue',
    backBtn: '← Back',
    welcomeBackTitle: '👋 Welcome back!',
    welcomeBackSub: 'Great to see you again. Enjoy the site!',
    registerTitle: '👋 Welcome!',
    registerSub: 'One quick step to join our community.',
    nameLabel: 'Your name',
    namePlaceholder: 'César',
    interestLabel: 'Main topic of interest',
    interestDefault: 'Select a topic…',
    joinBtn: 'Join the Community',
    doneTitle: '🌿 You\'re in!',
    doneSub: 'Welcome to the Biohacker community. Enjoy exploring!',
    closeBtn: 'Start exploring',
  },
  es: {
    title: 'Únete a la Comunidad',
    subtitle: 'Ingresa tu correo para continuar',
    emailLabel: 'Correo electrónico',
    emailPlaceholder: 'tu@correo.com',
    continueBtn: 'Continuar',
    backBtn: '← Volver',
    welcomeBackTitle: '👋 ¡Bienvenido de vuelta!',
    welcomeBackSub: '¡Qué bueno verte de nuevo! Disfruta el sitio.',
    registerTitle: '👋 ¡Bienvenido!',
    registerSub: 'Un paso rápido para unirte a nuestra comunidad.',
    nameLabel: 'Tu nombre',
    namePlaceholder: 'César',
    interestLabel: 'Tema de interés principal',
    interestDefault: 'Selecciona un tema…',
    joinBtn: 'Unirme a la Comunidad',
    doneTitle: '🌿 ¡Ya eres parte!',
    doneSub: 'Bienvenido a la comunidad Biohacker. ¡Disfruta explorando!',
    closeBtn: 'Comenzar a explorar',
  },
  'fr-CA': {
    title: 'Rejoindre la Communauté',
    subtitle: 'Entrez votre courriel pour continuer',
    emailLabel: 'Adresse courriel',
    emailPlaceholder: 'vous@courriel.com',
    continueBtn: 'Continuer',
    backBtn: '← Retour',
    welcomeBackTitle: '👋 Bon retour !',
    welcomeBackSub: 'Ravi de vous revoir. Bonne visite !',
    registerTitle: '👋 Bienvenue !',
    registerSub: 'Une étape rapide pour rejoindre notre communauté.',
    nameLabel: 'Votre prénom',
    namePlaceholder: 'César',
    interestLabel: 'Sujet d\'intérêt principal',
    interestDefault: 'Choisissez un sujet…',
    joinBtn: 'Rejoindre la Communauté',
    doneTitle: '🌿 Vous êtes des nôtres !',
    doneSub: 'Bienvenue dans la communauté Biohacker. Bonne exploration !',
    closeBtn: 'Commencer à explorer',
  },
};

export default function AuthModal({ onClose }: AuthModalProps) {
  const locale = useLocale();
  const c = COPY[locale as keyof typeof COPY] ?? COPY.en;

  const [step, setStep] = useState<Step>('email');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [interest, setInterest] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || loading) return;
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/auth/check-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.exists) {
        setStep('welcome-back');
        setTimeout(() => onClose(), 2500);
      } else {
        setStep('register');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    if (!name || loading) return;
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name, interest, locale }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? 'Something went wrong.');
        return;
      }
      setStep('done');
    } catch {
      setError('Something went wrong. Please try again.');
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
              <DialogTitle>{c.title}</DialogTitle>
              <DialogDescription>{c.subtitle}</DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="p-6">

          {/* ── Step 1: Email ── */}
          {step === 'email' && (
            <form onSubmit={handleEmailSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-zinc-400 text-sm font-medium mb-1.5">{c.emailLabel}</label>
                <input
                  type="email"
                  required
                  autoFocus
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={c.emailPlaceholder}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-green-400 transition-colors"
                />
              </div>
              {error && <p className="text-red-400 text-sm">{error}</p>}
              <Button type="submit" disabled={loading} size="lg" className="w-full">
                {loading ? '...' : c.continueBtn}
              </Button>
            </form>
          )}

          {/* ── Step 2: Register (new user) ── */}
          {step === 'register' && (
            <form onSubmit={handleRegister} className="flex flex-col gap-4">
              <div className="text-center mb-2">
                <p className="text-white font-bold text-lg">{c.registerTitle}</p>
                <p className="text-zinc-500 text-sm">{c.registerSub}</p>
              </div>

              <div>
                <label className="block text-zinc-400 text-sm font-medium mb-1.5">{c.nameLabel}</label>
                <input
                  type="text"
                  required
                  autoFocus
                  maxLength={80}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={c.namePlaceholder}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-green-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-zinc-400 text-sm font-medium mb-1.5">{c.interestLabel}</label>
                <select
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white focus:outline-none focus:border-green-400 transition-colors appearance-none"
                >
                  <option value="">{c.interestDefault}</option>
                  {INTERESTS.map((item) => (
                    <option key={item.value} value={item.value}>
                      {locale === 'es' ? item.es : locale === 'fr-CA' ? item.fr : item.en}
                    </option>
                  ))}
                </select>
              </div>

              {error && <p className="text-red-400 text-sm">{error}</p>}

              <Button type="submit" disabled={loading || !name.trim()} size="lg" className="w-full">
                {loading ? '...' : c.joinBtn}
              </Button>

              <button
                type="button"
                onClick={() => { setStep('email'); setError(''); }}
                className="text-zinc-500 text-xs hover:text-zinc-300 transition-colors text-center"
              >
                {c.backBtn}
              </button>
            </form>
          )}

          {/* ── Step 3a: Welcome back (existing user) ── */}
          {step === 'welcome-back' && (
            <div className="text-center py-6">
              <div className="text-5xl mb-4">👋</div>
              <p className="text-white font-bold text-xl mb-2">{c.welcomeBackTitle}</p>
              <p className="text-zinc-400 text-sm">{c.welcomeBackSub}</p>
              <div className="mt-4 flex justify-center">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-ping" />
              </div>
            </div>
          )}

          {/* ── Step 3b: Done (new user registered) ── */}
          {step === 'done' && (
            <div className="text-center py-6">
              <div className="text-5xl mb-4">🌿</div>
              <p className="text-white font-bold text-xl mb-2">{c.doneTitle}</p>
              <p className="text-zinc-400 text-sm mb-6">{c.doneSub}</p>
              <Button onClick={onClose} size="lg" className="w-full">
                {c.closeBtn}
              </Button>
            </div>
          )}

        </div>
      </DialogContent>
    </Dialog>
  );
}
