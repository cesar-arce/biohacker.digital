import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { rateLimit, getIP } from '@/lib/rate-limit';

export async function POST(req: NextRequest) {
  // 10 requests per IP per minute — prevents email enumeration
  if (!rateLimit(`check-email:${getIP(req)}`, 10, 60 * 1000)) {
    return NextResponse.json({ exists: false }, { status: 429 });
  }

  try {
    const { email } = await req.json();
    if (!email) return NextResponse.json({ exists: false });

    const supabase = await createClient();
    const { data } = await supabase
      .from('newsletter_subscribers')
      .select('id, name')
      .eq('email', email.toLowerCase().trim())
      .maybeSingle();

    return NextResponse.json({ exists: !!data, name: data?.name ?? null });
  } catch {
    return NextResponse.json({ exists: false });
  }
}
