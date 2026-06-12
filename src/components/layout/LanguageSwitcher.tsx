'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/lib/i18n/navigation';
import { useState } from 'react';

const languages = [
  { code: 'en', label: 'EN', full: 'English' },
  { code: 'fr-CA', label: 'FR', full: 'Français' },
  { code: 'es', label: 'ES', full: 'Español' },
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function switchLocale(newLocale: string) {
    router.replace(pathname, { locale: newLocale });
    setOpen(false);
  }

  const current = languages.find((l) => l.code === locale) ?? languages[0];

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-zinc-700 text-zinc-300 hover:border-green-400 hover:text-green-400 transition-colors text-sm font-medium"
      >
        <span>{current.label}</span>
        <svg
          className={`w-3 h-3 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute right-0 mt-2 w-36 rounded-lg border border-zinc-800 bg-zinc-900 shadow-xl z-20 overflow-hidden">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => switchLocale(lang.code)}
                className={`w-full text-left px-4 py-2.5 text-sm transition-colors flex items-center gap-2
                  ${locale === lang.code
                    ? 'text-green-400 bg-green-400/10'
                    : 'text-zinc-300 hover:bg-zinc-800 hover:text-white'
                  }`}
              >
                <span className="font-bold w-6">{lang.label}</span>
                <span className="text-zinc-500">{lang.full}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
