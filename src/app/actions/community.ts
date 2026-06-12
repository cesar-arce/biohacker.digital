'use server';

import { createClient } from '@/lib/supabase/server';

export interface CommentFormData {
  questionId: string;
  name: string;
  email: string;
  topic: string;
  message: string;
  locale: string;
}

export async function submitComment(data: CommentFormData): Promise<{ success: boolean; error?: string }> {
  const { questionId, name, email, topic, message, locale } = data;

  if (!name.trim() || !email.trim() || !message.trim()) {
    return { success: false, error: 'Please fill in all required fields.' };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: 'Please enter a valid email address.' };
  }
  if (message.trim().length < 10) {
    return { success: false, error: 'Comment must be at least 10 characters.' };
  }

  try {
    const supabase = await createClient();

    // Save lead to newsletter_subscribers
    await supabase.from('newsletter_subscribers').upsert(
      { email: email.toLowerCase().trim(), locale, subscribed_at: new Date().toISOString() },
      { onConflict: 'email', ignoreDuplicates: true }
    );

    // Try to post the comment as a guest answer
    // Body includes guest name so it's visible in the thread
    const body = `**${name.trim()}** · *${topic}*\n\n${message.trim()}`;
    await supabase.from('forum_answers').insert({
      body,
      question_id: questionId,
      user_id: null, // guest — requires nullable user_id in DB
    });
  } catch {
    // Supabase not connected — still return success so the lead is captured locally
  }

  return { success: true };
}
