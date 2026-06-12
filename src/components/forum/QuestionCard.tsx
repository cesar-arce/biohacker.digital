'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { formatDate } from '@/lib/utils';
import type { ForumQuestion } from '@/types';

interface QuestionCardProps {
  question: ForumQuestion;
}

export default function QuestionCard({ question }: QuestionCardProps) {
  const t = useTranslations('community');
  const locale = useLocale();

  return (
    <div className="group bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:border-green-400/40 transition-all">
      <div className="flex gap-4">
        {/* Vote count */}
        <div className="flex flex-col items-center gap-1 min-w-[48px]">
          <div className={`text-xl font-bold ${question.vote_count > 0 ? 'text-green-400' : 'text-zinc-500'}`}>
            {question.vote_count}
          </div>
          <div className="text-xs text-zinc-600">{t('votes')}</div>
        </div>

        {/* Answers count */}
        <div className="flex flex-col items-center gap-1 min-w-[48px]">
          <div className={`text-xl font-bold ${question.answer_count > 0 ? 'text-white' : 'text-zinc-600'}`}>
            {question.answer_count}
          </div>
          <div className="text-xs text-zinc-600">{t('answers')}</div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <Link
            href={`/${locale}/community/${question.id}`}
            className="font-semibold text-white hover:text-green-400 transition-colors line-clamp-2 text-lg leading-snug"
          >
            {question.title}
          </Link>
          <p className="text-zinc-500 text-sm mt-1 line-clamp-2">{question.body}</p>

          <div className="flex flex-wrap items-center gap-2 mt-3">
            {question.tags.map((tag) => (
              <span key={tag} className="px-2 py-0.5 text-xs rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700">
                {tag}
              </span>
            ))}
            <span className="ml-auto text-xs text-zinc-600">
              {formatDate(question.created_at, locale)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
