'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';

const TAGS = ['Geobiology', 'Geopathies', 'Radiesthesia', 'Electroculture', 'Dowsing', 'EMF', 'Sleep', 'Schumann Resonance', 'DIY', 'Gardening', 'Practical'];

export default function AskQuestionForm({ onClose }: { onClose: () => void }) {
  const t = useTranslations('community');
  const locale = useLocale();
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  function toggleTag(tag: string) {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : prev.length < 5 ? [...prev, tag] : prev
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim() || !body.trim()) return;
    setLoading(true);
    setError('');

    try {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { setError('Please sign in first.'); return; }

      const { error: dbError } = await supabase.from('forum_questions').insert({
        title: title.trim().slice(0, 300),
        body: body.trim().slice(0, 5000),
        user_id: user.id,
        tags: selectedTags,
      });

      if (dbError) { setError(dbError.message); return; }

      router.refresh();
      onClose();
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50" onClick={onClose} />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div className="w-full max-w-2xl bg-zinc-900 border border-zinc-700 rounded-2xl shadow-2xl pointer-events-auto overflow-hidden max-h-[90vh] overflow-y-auto">

          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-zinc-800">
            <h2 className="text-white font-bold text-xl">{t('askQuestion')}</h2>
            <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-full text-zinc-500 hover:text-white hover:bg-zinc-700 transition-colors">✕</button>
          </div>

          <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-5">
            {/* Title */}
            <div>
              <label className="block text-zinc-300 text-sm font-medium mb-2">
                Question title <span className="text-zinc-600">({title.length}/300)</span>
              </label>
              <input
                type="text"
                required
                maxLength={300}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="What is the optimal protocol for..."
                className="w-full px-4 py-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-green-400 transition-colors"
              />
            </div>

            {/* Body */}
            <div>
              <label className="block text-zinc-300 text-sm font-medium mb-2">
                Details <span className="text-zinc-600">({body.length}/5000)</span>
              </label>
              <textarea
                required
                maxLength={5000}
                rows={6}
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="Provide context, what you've already tried, and what specifically you're looking for..."
                className="w-full px-4 py-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-green-400 transition-colors resize-none"
              />
            </div>

            {/* Tags */}
            <div>
              <label className="block text-zinc-300 text-sm font-medium mb-2">
                Tags <span className="text-zinc-600">(select up to 5)</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {TAGS.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => toggleTag(tag)}
                    className={`px-3 py-1.5 text-sm rounded-full border transition-colors ${
                      selectedTags.includes(tag)
                        ? 'bg-green-400 text-zinc-950 border-green-400 font-semibold'
                        : 'border-zinc-700 text-zinc-400 hover:border-green-400 hover:text-green-400'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {error && <p className="text-red-400 text-sm">{error}</p>}

            <div className="flex gap-3 pt-2">
              <button type="button" onClick={onClose} className="flex-1 py-3 border border-zinc-700 text-zinc-300 font-medium rounded-xl hover:bg-zinc-800 transition-colors">
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading || !title.trim() || !body.trim()}
                className="flex-1 py-3 bg-green-400 text-zinc-950 font-bold rounded-xl hover:bg-green-300 transition-colors disabled:opacity-60"
              >
                {loading ? 'Posting...' : 'Post Question'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
