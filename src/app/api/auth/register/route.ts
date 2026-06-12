import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function POST(req: NextRequest) {
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
