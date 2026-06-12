import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import QuestionCard from '@/components/forum/QuestionCard';
import CommunityActions from '@/components/forum/CommunityActions';
import { getForumQuestions } from '@/lib/supabase/queries';
import type { ForumQuestion } from '@/types';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'community' });
  return { title: t('title'), description: t('subtitle') };
}

const PLACEHOLDER_QUESTIONS: ForumQuestion[] = [
  {
    id: '1',
    title: 'How do I find the exact position of a Hartmann line crossing in my bedroom?',
    body: 'I have been experiencing poor sleep for months and suspect geopathic stress. I bought a pair of L-rods but am not sure how to walk the grid systematically. Any tips on technique and confirming findings?',
    user_id: 'user1', tags: ['Radiesthesia', 'Hartmann Grid', 'Sleep', 'Dowsing'],
    vote_count: 24, answer_count: 7,
    created_at: new Date(Date.now() - 3 * 86400000).toISOString(),
    user: { display_name: 'Marco V.' },
  },
  {
    id: '2',
    title: 'Best copper wire gauge for an electroculture spiral antenna?',
    body: 'I have seen recommendations from 1.5mm to 3mm. Does gauge significantly affect results, or is the spiral geometry more important? Testing on tomatoes.',
    user_id: 'user2', tags: ['Electroculture', 'DIY', 'Gardening'],
    vote_count: 18, answer_count: 5,
    created_at: new Date(Date.now() - 7 * 86400000).toISOString(),
    user: { display_name: 'Sophie L.' },
  },
  {
    id: '3',
    title: 'Can geopathic stress affect children more than adults?',
    body: 'My 7-year-old has had chronic sleep problems since we moved into this house two years ago. Doctors find nothing wrong. Has anyone studied age-related differences in sensitivity to geopathic zones?',
    user_id: 'user3', tags: ['Geopathies', 'Sleep', 'Children', 'EMF'],
    vote_count: 31, answer_count: 9,
    created_at: new Date(Date.now() - 14 * 86400000).toISOString(),
    user: { display_name: 'Anna K.' },
  },
  {
    id: '4',
    title: 'EMF meter readings near underground water — what values indicate a problem?',
    body: 'I rented a tri-axial ELF meter. Getting 1.8 mG at my bed head vs 0.3 mG in the hallway. Is a 1.5 mG difference enough to warrant moving the bed?',
    user_id: 'user4', tags: ['Geopathies', 'EMF', 'Underground Water', 'Practical'],
    vote_count: 15, answer_count: 4,
    created_at: new Date(Date.now() - 21 * 86400000).toISOString(),
    user: { display_name: 'David R.' },
  },
  {
    id: '5',
    title: 'What is the Schumann Resonance reading today and how can I track it live?',
    body: 'My sleep quality seems to correlate with something environmental. Where can I find live or historical Schumann Resonance data and is there an app that tracks anomalies?',
    user_id: 'user5', tags: ['Geobiology', 'Schumann Resonance', 'Sleep', 'Tracking'],
    vote_count: 42, answer_count: 11,
    created_at: new Date(Date.now() - 45 * 86400000).toISOString(),
    user: { display_name: 'Lucia F.' },
  },
];

export default async function CommunityPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'community' });

  let questions: ForumQuestion[] = [];
  try {
    questions = await getForumQuestions();
  } catch {
    questions = [];
  }
  if (questions.length === 0) questions = PLACEHOLDER_QUESTIONS;

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase rounded-full border border-green-400/40 text-green-400 bg-green-400/10">
            Community
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('title')}</h1>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto mb-8">{t('subtitle')}</p>
          <CommunityActions />
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          {[
            { value: '1,240', label: 'Questions' },
            { value: '4,800', label: 'Answers' },
            { value: '890', label: 'Members' },
          ].map((stat) => (
            <div key={stat.label} className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-green-400">{stat.value}</div>
              <div className="text-xs text-zinc-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Questions list */}
        <div className="flex flex-col gap-4">
          {questions.map((q) => (
            <QuestionCard key={q.id} question={q} />
          ))}
        </div>
      </div>
    </div>
  );
}
