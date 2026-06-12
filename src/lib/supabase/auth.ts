// Client-side only — safe to import from Client Components
import { createClient as createBrowserClient } from './client';

export function signInWithGoogle(locale: string) {
  const supabase = createBrowserClient();
  return supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${window.location.origin}/api/auth/callback?next=/${locale}/community`,
    },
  });
}

export async function signInWithEmail(email: string, locale: string) {
  const supabase = createBrowserClient();
  return supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: `${window.location.origin}/api/auth/callback?next=/${locale}/community`,
      shouldCreateUser: true,
    },
  });
}

export async function signOut() {
  const supabase = createBrowserClient();
  return supabase.auth.signOut();
}
