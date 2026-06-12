export type Locale = 'en' | 'fr-CA' | 'es';

export interface Book {
  id: string;
  slug: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  amazon_url: string;
  cover_image_url: string;
  tags: string[];
  published_at: string;
  coming_soon?: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  locale: Locale;
  published_at: string;
  tags: string[];
  author_id: string;
  read_time_minutes: number;
  og_image_url?: string;
}

export interface ForumQuestion {
  id: string;
  title: string;
  body: string;
  user_id: string;
  tags: string[];
  vote_count: number;
  answer_count: number;
  created_at: string;
  user?: { display_name: string; avatar_url?: string };
}

export interface ForumAnswer {
  id: string;
  body: string;
  question_id: string;
  user_id: string;
  vote_count: number;
  is_accepted: boolean;
  created_at: string;
  user?: { display_name: string; avatar_url?: string };
}
