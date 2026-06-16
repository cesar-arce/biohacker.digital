import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

// Handles the OAuth redirect from Google and the magic link click from email
// Only allow redirects to internal paths on our own domain
function safeRedirectPath(next: string | null): string {
  if (!next) return '/en/blog';
  // Must start with / and not contain // (prevents //evil.com or protocol-relative URLs)
  if (next.startsWith('/') && !next.startsWith('//') && !next.includes('://')) {
    return next;
  }
  return '/en/blog';
}

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get('code');
  const next = safeRedirectPath(searchParams.get('next'));

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      return NextResponse.redirect(`${origin}${next}`);
    }
  }

  // Auth failed — redirect to login with error
  return NextResponse.redirect(`${origin}/en/auth?error=auth_failed`);
}
