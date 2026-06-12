import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getForumAnswers } from '@/lib/supabase/queries';
import { createClient } from '@/lib/supabase/server';
import { formatDate } from '@/lib/utils';
import CommentForm from '@/components/forum/CommentForm';
import type { ForumQuestion, ForumAnswer } from '@/types';

// Same placeholder data as the list page — used when Supabase is not connected
const PLACEHOLDER_QUESTIONS: Record<string, ForumQuestion> = {
  '1': {
    id: '1',
    title: 'How do I find the exact position of a Hartmann line crossing in my bedroom?',
    body: 'I have been experiencing poor sleep for months and suspect geopathic stress. I bought a pair of L-rods but am not sure how to walk the grid systematically. Any tips on technique and confirming findings?\n\nI have read Volume I (Geobiology) and Volume III (Radiesthesia) but would love practical step-by-step guidance from someone who has done it.',
    user_id: 'user1', tags: ['Radiesthesia', 'Hartmann Grid', 'Sleep', 'Dowsing'],
    vote_count: 24, answer_count: 7,
    created_at: new Date(Date.now() - 3 * 86400000).toISOString(),
    user: { display_name: 'Marco V.' },
  },
  '2': {
    id: '2',
    title: 'Best copper wire gauge for an electroculture spiral antenna?',
    body: 'I have seen recommendations ranging from 1.5mm to 3mm copper wire. Does the gauge significantly affect results, or is the spiral geometry more important?\n\nCurrently testing on tomatoes in raised beds. Any field experience welcome.',
    user_id: 'user2', tags: ['Electroculture', 'DIY', 'Gardening'],
    vote_count: 18, answer_count: 5,
    created_at: new Date(Date.now() - 7 * 86400000).toISOString(),
    user: { display_name: 'Sophie L.' },
  },
  '3': {
    id: '3',
    title: 'Can geopathic stress affect children more than adults?',
    body: 'My 7-year-old has had chronic sleep problems since we moved into this house two years ago. Doctors find nothing wrong. Has anyone studied age-related differences in sensitivity to geopathic zones?\n\nI am considering moving his bed as a first experiment as suggested in Volume II (Geopathies).',
    user_id: 'user3', tags: ['Geopathies', 'Sleep', 'Children', 'EMF'],
    vote_count: 31, answer_count: 9,
    created_at: new Date(Date.now() - 14 * 86400000).toISOString(),
    user: { display_name: 'Anna K.' },
  },
  '4': {
    id: '4',
    title: 'EMF meter readings near underground water — what values indicate a problem?',
    body: 'I rented a tri-axial ELF meter. I am getting 1.8 mG at my bed head versus 0.3 mG in the hallway. Is a 1.5 mG differential enough to warrant moving the bed?\n\nLooking for practical thresholds used by geobiologists.',
    user_id: 'user4', tags: ['Geopathies', 'EMF', 'Underground Water', 'Practical'],
    vote_count: 15, answer_count: 4,
    created_at: new Date(Date.now() - 21 * 86400000).toISOString(),
    user: { display_name: 'David R.' },
  },
  '5': {
    id: '5',
    title: 'What is the Schumann Resonance reading today and how can I track it live?',
    body: 'My sleep quality seems to correlate with something environmental. Where can I find live or historical Schumann Resonance data and is there an app that tracks anomalies in real time?\n\nI have read the Geobiology volume and want to start correlating SR spikes with my HRV data.',
    user_id: 'user5', tags: ['Geobiology', 'Schumann Resonance', 'Sleep', 'Tracking'],
    vote_count: 42, answer_count: 11,
    created_at: new Date(Date.now() - 45 * 86400000).toISOString(),
    user: { display_name: 'Lucia F.' },
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string; id: string }> }): Promise<Metadata> {
  const { id, locale } = await params;
  const fallback = PLACEHOLDER_QUESTIONS[id];
  try {
    const supabase = await createClient();
    const { data } = await supabase.from('forum_questions').select('title').eq('id', id).single();
    return { title: data?.title ?? fallback?.title ?? 'Question' };
  } catch {
    return { title: fallback?.title ?? 'Question', description: `Community discussion — ${locale}` };
  }
}

export default async function QuestionDetailPage({ params }: { params: Promise<{ locale: string; id: string }> }) {
  const { locale, id } = await params;
  const t = await getTranslations({ locale, namespace: 'community' });

  if (!/^[0-9a-f-]{36}$/.test(id) && !/^\d+$/.test(id)) notFound();

  // Try Supabase first, fall back to placeholder
  let question: ForumQuestion | null = null;
  try {
    const supabase = await createClient();
    const { data } = await supabase
      .from('forum_questions')
      .select('*')
      .eq('id', id)
      .single() as { data: ForumQuestion | null };
    question = data;
  } catch { /* ignore */ }
  if (!question) question = PLACEHOLDER_QUESTIONS[id] ?? null;
  if (!question) notFound();

  let answers: ForumAnswer[] = [];
  try { answers = await getForumAnswers(id); } catch { answers = []; }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-3xl mx-auto">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-10">
          <Link href={`/${locale}`} className="hover:text-green-400 transition-colors">Home</Link>
          <span>/</span>
          <Link href={`/${locale}/community`} className="hover:text-green-400 transition-colors">{t('title')}</Link>
          <span>/</span>
          <span className="text-zinc-300 truncate max-w-[200px]">{question.title}</span>
        </nav>

        {/* Question */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mb-8">
          <div className="flex gap-4">
            {/* Votes */}
            <div className="flex flex-col items-center gap-1 min-w-[52px]">
              <button className="w-8 h-8 flex items-center justify-center rounded-lg text-zinc-400 hover:bg-green-400/10 hover:text-green-400 transition-colors text-lg">▲</button>
              <span className={`text-xl font-bold ${question.vote_count > 0 ? 'text-green-400' : 'text-zinc-500'}`}>
                {question.vote_count}
              </span>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg text-zinc-400 hover:bg-red-400/10 hover:text-red-400 transition-colors text-lg">▼</button>
              <span className="text-xs text-zinc-600 mt-1">{t('votes')}</span>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h1 className="text-2xl font-bold text-white mb-4 leading-tight">{question.title}</h1>
              <div className="space-y-3">
                {question.body.split('\n\n').map((para, i) => (
                  <p key={i} className="text-zinc-400 leading-relaxed">{para}</p>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-zinc-800">
                {question.tags?.map((tag: string) => (
                  <span key={tag} className="px-2 py-0.5 text-xs rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700">{tag}</span>
                ))}
                <span className="ml-auto text-xs text-zinc-500">
                  {question.user?.display_name && <span className="mr-2">by {question.user.display_name}</span>}
                  {formatDate(question.created_at, locale)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Comments / Answers */}
        {answers.length > 0 && (
          <>
            <h2 className="text-white font-bold text-lg mb-4">
              {answers.length} {t('answers')}
            </h2>
            <div className="flex flex-col gap-4 mb-8">
              {answers.map((answer) => (
                <div
                  key={answer.id}
                  className={`bg-zinc-900 border rounded-2xl p-6 flex gap-4 ${answer.is_accepted ? 'border-green-400/40' : 'border-zinc-800'}`}
                >
                  <div className="flex flex-col items-center gap-1 min-w-[52px]">
                    <button className="w-8 h-8 flex items-center justify-center rounded-lg text-zinc-400 hover:bg-green-400/10 hover:text-green-400 transition-colors text-lg">▲</button>
                    <span className={`text-xl font-bold ${answer.vote_count > 0 ? 'text-green-400' : 'text-zinc-500'}`}>
                      {answer.vote_count}
                    </span>
                    <button className="w-8 h-8 flex items-center justify-center rounded-lg text-zinc-400 hover:bg-red-400/10 hover:text-red-400 transition-colors text-lg">▼</button>
                    {answer.is_accepted && (
                      <span className="text-green-400 text-lg mt-1" title="Accepted answer">✓</span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    {answer.is_accepted && (
                      <span className="inline-block px-2 py-0.5 text-xs font-semibold rounded-full bg-green-400/10 text-green-400 border border-green-400/20 mb-3">
                        ✓ Accepted Answer
                      </span>
                    )}
                    <p className="text-zinc-300 leading-relaxed whitespace-pre-wrap">{answer.body}</p>
                    <p className="text-xs text-zinc-600 mt-3">{formatDate(answer.created_at, locale)}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Comment form — no auth required */}
        <CommentForm questionId={id} locale={locale} />

        {/* Back */}
        <div className="mt-10">
          <Link href={`/${locale}/community`} className="inline-flex items-center gap-2 text-zinc-400 hover:text-green-400 transition-colors text-sm">
            ← Back to Community
          </Link>
        </div>
      </div>
    </div>
  );
}
