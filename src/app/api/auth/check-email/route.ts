import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function POST(req: NextRequest) {
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
