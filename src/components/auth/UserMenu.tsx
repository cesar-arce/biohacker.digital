'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { createClient } from '@/lib/supabase/client';
import { signOut } from '@/lib/supabase/auth';
import type { User } from '@supabase/supabase-js';
import AuthModal from './AuthModal';

export default function UserMenu() {
  const t = useTranslations('auth');
  const locale = useLocale();
  const [user, setUser] = useState<User | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }) => setUser(data.user));

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) setShowModal(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  async function handleSignOut() {
    await signOut();
    setUser(null);
    setMenuOpen(false);
  }

  if (!user) {
    return (
      <>
        <button
          onClick={() => setShowModal(true)}
          className="px-4 py-1.5 bg-green-400 text-zinc-950 font-bold text-sm rounded-lg hover:bg-green-300 transition-colors"
        >
          {t('signIn')}
        </button>
        {showModal && <AuthModal onClose={() => setShowModal(false)} />}
      </>
    );
  }

  const initials = user.email?.slice(0, 2).toUpperCase() ?? 'BH';
  const displayName = user.user_metadata?.full_name ?? user.email?.split('@')[0] ?? 'User';

  return (
    <div className="relative">
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="flex items-center gap-2 group"
      >
        {user.user_metadata?.avatar_url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={user.user_metadata.avatar_url}
            alt={displayName}
            className="w-8 h-8 rounded-full border-2 border-zinc-700 group-hover:border-green-400 transition-colors"
          />
        ) : (
          <div className="w-8 h-8 rounded-full bg-green-400/20 border-2 border-green-400/40 flex items-center justify-center text-xs font-bold text-green-400">
            {initials}
          </div>
        )}
      </button>

      {menuOpen && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setMenuOpen(false)} />
          <div className="absolute right-0 mt-2 w-48 rounded-xl border border-zinc-800 bg-zinc-900 shadow-xl z-20 overflow-hidden">
            <div className="px-4 py-3 border-b border-zinc-800">
              <p className="text-white font-medium text-sm truncate">{displayName}</p>
              <p className="text-zinc-500 text-xs truncate">{user.email}</p>
            </div>
            <a
              href={`/${locale}/community`}
              className="block px-4 py-2.5 text-sm text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              My Questions
            </a>
            <button
              onClick={handleSignOut}
              className="w-full text-left px-4 py-2.5 text-sm text-red-400 hover:bg-zinc-800 transition-colors"
            >
              {t('signOut')}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
