import { createClient } from './server';
import type { Book, BlogPost, ForumQuestion, ForumAnswer } from '@/types';

// ── Input sanitization ─────────────────────────────────────────────────────
const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const LOCALE_RE = /^(en|fr-CA|es)$/;

function assertSlug(slug: string) {
  if (!SLUG_RE.test(slug)) throw new Error(`Invalid slug: ${slug}`);
}
function assertLocale(locale: string) {
  if (!LOCALE_RE.test(locale)) throw new Error(`Invalid locale: ${locale}`);
}

// ── BOOKS ──────────────────────────────────────────────────────────────────
export async function getBooks(): Promise<Book[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('books')
    .select('*')
    .order('published_at', { ascending: false });
  if (error) { console.error('getBooks error:', error); return []; }
  return data as Book[];
}

export async function getBookBySlug(slug: string): Promise<Book | null> {
  assertSlug(slug);
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('books')
    .select('*')
    .eq('slug', slug)
    .single();
  if (error) return null;
  return data as Book;
}

// ── BLOG ───────────────────────────────────────────────────────────────────
export async function getBlogPosts(locale: string): Promise<BlogPost[]> {
  assertLocale(locale);
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('locale', locale)
    .not('published_at', 'is', null)
    .lte('published_at', new Date().toISOString())
    .order('published_at', { ascending: false });
  if (error) { console.error('getBlogPosts error:', error); return []; }
  return data as BlogPost[];
}

export async function getBlogPostBySlug(slug: string, locale: string): Promise<BlogPost | null> {
  assertSlug(slug);
  assertLocale(locale);
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('locale', locale)
    .single();
  if (error) return null;
  return data as BlogPost;
}

// ── FORUM ──────────────────────────────────────────────────────────────────
export async function getForumQuestions(limit = 20): Promise<ForumQuestion[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('forum_questions')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(limit);
  if (error) { console.error('getForumQuestions error:', error); return []; }
  return data as ForumQuestion[];
}

export async function getForumAnswers(questionId: string): Promise<ForumAnswer[]> {
  // UUID format validation
  if (!/^[0-9a-f-]{36}$/.test(questionId)) throw new Error('Invalid question ID');
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('forum_answers')
    .select('*')
    .eq('question_id', questionId)
    .order('vote_count', { ascending: false });
  if (error) return [];
  return data as ForumAnswer[];
}
