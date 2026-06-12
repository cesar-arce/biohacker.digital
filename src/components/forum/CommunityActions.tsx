'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { createClient } from '@/lib/supabase/client';
import AuthModal from '@/components/auth/AuthModal';
import AskQuestionForm from './AskQuestionForm';

export default function CommunityActions() {
  const t = useTranslations('community');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [showAsk, setShowAsk] = useState(false);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }) => setIsLoggedIn(!!data.user));
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, session) => {
      setIsLoggedIn(!!session?.user);
      if (session?.user) setShowAuth(false);
    });
    return () => subscription.unsubscribe();
  }, []);

  return (
    <>
      <button
        onClick={() => isLoggedIn ? setShowAsk(true) : setShowAuth(true)}
        className="px-6 py-3 bg-green-400 text-zinc-950 font-bold rounded-lg hover:bg-green-300 transition-colors"
      >
        {isLoggedIn ? t('askQuestion') : t('signInToAsk')}
      </button>

      {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
      {showAsk && <AskQuestionForm onClose={() => setShowAsk(false)} />}
    </>
  );
}
