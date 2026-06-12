-- Books
CREATE TABLE IF NOT EXISTS books (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  title JSONB NOT NULL,         -- { "en": "...", "fr-CA": "...", "es": "..." }
  description JSONB NOT NULL,
  amazon_url TEXT NOT NULL,
  cover_image_url TEXT,
  tags TEXT[] DEFAULT '{}',
  published_at TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Blog posts
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT NOT NULL,
  locale TEXT NOT NULL CHECK (locale IN ('en', 'fr-CA', 'es')),
  title TEXT NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  tags TEXT[] DEFAULT '{}',
  author_id UUID REFERENCES auth.users(id),
  read_time_minutes INT DEFAULT 5,
  og_image_url TEXT,
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(slug, locale)
);

-- Forum questions
CREATE TABLE IF NOT EXISTS forum_questions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  body TEXT NOT NULL,
  user_id UUID REFERENCES auth.users(id) NOT NULL,
  tags TEXT[] DEFAULT '{}',
  vote_count INT DEFAULT 0,
  answer_count INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Forum answers
CREATE TABLE IF NOT EXISTS forum_answers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  body TEXT NOT NULL,
  question_id UUID REFERENCES forum_questions(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) NOT NULL,
  vote_count INT DEFAULT 0,
  is_accepted BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Newsletter
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  locale TEXT NOT NULL DEFAULT 'en',
  subscribed_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS
ALTER TABLE books ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE forum_questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE forum_answers ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read books" ON books FOR SELECT USING (true);
CREATE POLICY "Public read published posts" ON blog_posts FOR SELECT USING (published_at IS NOT NULL AND published_at <= NOW());
CREATE POLICY "Public read questions" ON forum_questions FOR SELECT USING (true);
CREATE POLICY "Public read answers" ON forum_answers FOR SELECT USING (true);
CREATE POLICY "Auth post questions" ON forum_questions FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Auth post answers" ON forum_answers FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Auth update own questions" ON forum_questions FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Anyone can subscribe" ON newsletter_subscribers FOR INSERT WITH CHECK (true);
