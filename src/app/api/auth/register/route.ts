import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { rateLimit, getIP } from '@/lib/rate-limit';

export async function POST(req: NextRequest) {
  // 5 requests per IP per 10 minutes
  if (!rateLimit(`register:${getIP(req)}`, 5, 10 * 60 * 1000)) {
    return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
  }

  try {
    const { email, name, interest, locale = 'en' } = await req.json();

    if (!email || !name) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
    }

    const supabase = await createClient();
    const { error } = await supabase
      .from('newsletter_subscribers')
      .upsert(
        { email: email.toLowerCase().trim(), name: name.trim(), interest, locale },
        { onConflict: 'email' }
      );

    if (error) {
      console.error('Register error:', error);
      return NextResponse.json({ error: 'Could not save your information' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
