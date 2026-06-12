'use client';

import { useState } from 'react';
import { submitComment } from '@/app/actions/community';

const TOPICS = [
  'Geobiology',
  'Geopathies',
  'Radiesthesia & Radionics',
  'Electroculture',
  'EMF & Electrosmog',
  'Sleep & Recovery',
  'Biohacking & Health',
  'Gardening & Farming',
  'Other',
];

interface LocalComment {
  name: string;
  topic: string;
  message: string;
  time: string;
}

export default function CommentForm({ questionId, locale }: { questionId: string; locale: string }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [localComments, setLocalComments] = useState<LocalComment[]>([]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setError('');

    const result = await submitComment({ questionId, name, email, topic: topic || 'General', message, locale });

    setLoading(false);
    if (!result.success) {
      setError(result.error ?? 'Something went wrong. Please try again.');
      return;
    }

    // Optimistically show the comment in the thread
    setLocalComments((prev) => [
      ...prev,
      { name: name.trim(), topic: topic || 'General', message: message.trim(), time: 'just now' },
    ]);
    setName('');
    setEmail('');
    setTopic('');
    setMessage('');
    setSubmitted(true);
  }

  return (
    <div className="mt-8 space-y-6">
      {/* Local optimistic comments */}
      {localComments.map((c, i) => (
        <div key={i} className="bg-zinc-900 border border-green-400/20 rounded-2xl p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-full bg-green-400/20 flex items-center justify-center text-green-400 font-bold text-sm">
              {c.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <p className="text-white font-semibold text-sm">{c.name}</p>
              <p className="text-zinc-500 text-xs">{c.topic} · {c.time}</p>
            </div>
            <span className="ml-auto text-xs px-2 py-0.5 rounded-full bg-green-400/10 text-green-400 border border-green-400/20">New</span>
          </div>
          <p className="text-zinc-300 leading-relaxed text-sm">{c.message}</p>
        </div>
      ))}

      {/* Comment form */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
        <h3 className="text-white font-bold text-lg mb-1">Join the Conversation</h3>
        <p className="text-zinc-500 text-sm mb-6">
          Share your experience or question. You&apos;ll also receive our free Biohacking Starter Kit by email.
        </p>

        {submitted && localComments.length > 0 && (
          <div className="mb-5 p-4 bg-green-400/10 border border-green-400/20 rounded-xl text-green-400 text-sm font-medium">
            ✓ Your comment was posted! Check your inbox for the free Starter Kit.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name + Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1.5">
                Name <span className="text-green-400">*</span>
              </label>
              <input
                required
                type="text"
                maxLength={80}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-green-400 transition-colors text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1.5">
                Email <span className="text-green-400">*</span>
              </label>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-green-400 transition-colors text-sm"
              />
            </div>
          </div>

          {/* Topic of interest */}
          <div>
            <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1.5">
              Topic of Interest
            </label>
            <select
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white focus:outline-none focus:border-green-400 transition-colors text-sm appearance-none"
            >
              <option value="">Select your main interest…</option>
              {TOPICS.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1.5">
              Your Comment <span className="text-green-400">*</span>
            </label>
            <textarea
              required
              minLength={10}
              maxLength={3000}
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Share your experience, findings, or question…"
              className="w-full px-4 py-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-green-400 transition-colors resize-none text-sm"
            />
            <p className="text-zinc-600 text-xs mt-1 text-right">{message.length}/3000</p>
          </div>

          {error && (
            <p className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-2">{error}</p>
          )}

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-1">
            <button
              type="submit"
              disabled={loading || !name.trim() || !email.trim() || !message.trim()}
              className="px-6 py-3 bg-green-400 text-zinc-950 font-bold rounded-xl hover:bg-green-300 transition-colors disabled:opacity-60 disabled:cursor-not-allowed text-sm"
            >
              {loading ? 'Posting…' : 'Post Comment & Get Free Kit'}
            </button>
            <p className="text-zinc-600 text-xs">
              No spam · Unsubscribe anytime · Your email is never shared
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
