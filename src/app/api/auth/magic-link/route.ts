import { NextRequest, NextResponse } from 'next/server';
import { createClient as createServerClient } from '@/lib/supabase/server';
import { createClient as createAdminClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

const SUBJECTS: Record<string, string> = {
  en: 'Your sign-in link for Biohacker.digital',
  es: 'Tu enlace de acceso a Biohacker.digital',
  'fr-CA': 'Votre lien de connexion à Biohacker.digital',
};

const INTROS: Record<string, string> = {
  en: 'Click the button below to sign in. This link expires in 1 hour.',
  es: 'Haz clic en el botón para iniciar sesión. Este enlace expira en 1 hora.',
  'fr-CA': 'Cliquez sur le bouton ci-dessous pour vous connecter. Ce lien expire dans 1 heure.',
};

const CTAS: Record<string, string> = {
  en: 'Sign In to Biohacker.digital',
  es: 'Iniciar Sesión en Biohacker.digital',
  'fr-CA': 'Se connecter à Biohacker.digital',
};

const IGNORES: Record<string, string> = {
  en: 'If you did not request this, you can safely ignore this email.',
  es: 'Si no solicitaste esto, puedes ignorar este correo.',
  'fr-CA': "Si vous n'avez pas demandé ceci, vous pouvez ignorer ce courriel.",
};

export async function POST(req: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { email, locale = 'en', redirectTo } = await req.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    // Save to newsletter_subscribers
    const supabase = await createServerClient();
    await supabase
      .from('newsletter_subscribers')
      .upsert({ email, locale }, { onConflict: 'email' });

    // Generate magic link using admin client (service role)
    const admin = createAdminClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!,
      { auth: { autoRefreshToken: false, persistSession: false } }
    );

    const { data, error: linkError } = await admin.auth.admin.generateLink({
      type: 'magiclink',
      email,
      options: { redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://biohacker.digital'}/${locale}/blog` },
    });

    if (linkError || !data?.properties?.action_link) {
      console.error('Magic link generation error:', linkError);
      return NextResponse.json({ error: 'Failed to generate sign-in link' }, { status: 500 });
    }

    const magicLink = data.properties.action_link;
    const subject = SUBJECTS[locale] ?? SUBJECTS.en;
    const intro = INTROS[locale] ?? INTROS.en;
    const cta = CTAS[locale] ?? CTAS.en;
    const ignore = IGNORES[locale] ?? IGNORES.en;

    const html = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#09090b;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#09090b;padding:40px 20px;">
    <tr><td align="center">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;background:#18181b;border:1px solid #27272a;border-radius:16px;overflow:hidden;">
        <!-- Header -->
        <tr>
          <td style="background:#00ff87;padding:20px 32px;text-align:center;">
            <span style="font-size:22px;font-weight:900;color:#09090b;letter-spacing:-0.5px;">BH Biohacker.digital</span>
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="padding:36px 32px;">
            <p style="margin:0 0 8px;font-size:20px;font-weight:700;color:#ffffff;">${subject}</p>
            <p style="margin:0 0 28px;font-size:15px;color:#a1a1aa;line-height:1.6;">${intro}</p>
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td align="center">
                  <a href="${magicLink}" style="display:inline-block;padding:14px 32px;background:#00ff87;color:#09090b;font-weight:700;font-size:15px;text-decoration:none;border-radius:10px;">${cta}</a>
                </td>
              </tr>
            </table>
            <p style="margin:28px 0 0;font-size:12px;color:#52525b;text-align:center;">${ignore}</p>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="padding:16px 32px;border-top:1px solid #27272a;text-align:center;">
            <p style="margin:0;font-size:11px;color:#3f3f46;">© ${new Date().getFullYear()} Biohacker.digital · César Arce</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

    const { error: sendError } = await resend.emails.send({
      from: 'Biohacker.digital <noreply@biohacker.digital>',
      to: email,
      subject,
      html,
    });

    if (sendError) {
      console.error('Resend error:', JSON.stringify(sendError, null, 2));
      const msg = (sendError as { message?: string }).message ?? 'Failed to send email';
      return NextResponse.json({ error: msg }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('magic-link route error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
