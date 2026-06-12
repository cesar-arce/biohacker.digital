'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';
import AuthModal from '@/components/auth/AuthModal';
import { useRouter } from 'next/navigation';

export default function AnswerForm({ questionId, locale }: { questionId: string; locale: string }) {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [body, setBody] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }) => setIsLoggedIn(!!data.user));
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, session) => {
      setIsLoggedIn(!!session?.user);
      if (session?.user) setShowAuth(false);
    });
    return () => subscription.unsubscribe();
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!body.trim() || loading) return;
    setLoading(true);
    setError('');
    try {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { setError('Please sign in first.'); return; }

      const { error: dbError } = await supabase.from('forum_answers').insert({
        body: body.trim().slice(0, 5000),
        question_id: questionId,
        user_id: user.id,
      });

      if (dbError) { setError(dbError.message); return; }
      setBody('');
      router.refresh();
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
      <h3 className="text-white font-bold text-lg mb-4">Your Answer</h3>

      {!isLoggedIn ? (
        <div className="text-center py-4">
          <p className="text-zinc-400 mb-4">Sign in to post an answer</p>
          <button
            onClick={() => setShowAuth(true)}
            className="px-6 py-3 bg-green-400 text-zinc-950 font-bold rounded-lg hover:bg-green-300 transition-colors"
          >
            Sign In to Answer
          </button>
          {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <textarea
            required
            maxLength={5000}
            rows={6}
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Share your experience or knowledge..."
            className="w-full px-4 py-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-green-400 transition-colors resize-none"
          />
          <div className="flex items-center justify-between">
            <span className="text-zinc-600 text-xs">{body.length}/5000</span>
            {error && <p className="text-red-400 text-sm">{error}</p>}
            <button
              type="submit"
              disabled={loading || !body.trim()}
              className="px-6 py-3 bg-green-400 text-zinc-950 font-bold rounded-lg hover:bg-green-300 transition-colors disabled:opacity-60"
            >
              {loading ? 'Posting...' : 'Post Answer'}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
