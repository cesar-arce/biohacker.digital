import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { Resend } from 'resend';
import { rateLimit, getIP } from '@/lib/rate-limit';

export async function POST(req: NextRequest) {
  // 5 requests per IP per 10 minutes
  if (!rateLimit(`newsletter:${getIP(req)}`, 5, 10 * 60 * 1000)) {
    return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
  }

  try {
    const { email, locale = 'en' } = await req.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    // Save to Supabase
    const supabase = await createClient();
    const { error: dbError } = await supabase
      .from('newsletter_subscribers')
      .upsert({ email, locale }, { onConflict: 'email', ignoreDuplicates: true });

    if (dbError) {
      console.error('Newsletter DB error:', dbError);
      // Continue anyway — don't block email send on DB failure
    }

    // Send welcome email
    const resend = new Resend(process.env.RESEND_API_KEY);
    const subjects: Record<string, string> = {
      en: "Your Free Biohacking Starter Kit is ready 🧬",
      'fr-CA': "Votre Kit de Démarrage Biohacking est prêt 🧬",
      es: "Tu Kit de Inicio de Biohacking está listo 🧬",
    };
    await resend.emails.send({
      from: "Biohacker.digital <noreply@biohacker.digital>",
      to: email,
      subject: subjects[locale] ?? subjects['en'],
      html: buildWelcomeEmail(locale),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Newsletter route error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

const PROTOCOLS = [
  ['01', 'Map the Invisible Grid of Your Home'],
  ['02', 'The 21-Day Bed Move Test'],
  ['03', 'Calibrate Your Biological Antenna'],
  ['04', 'Pendulum Assessment for Food & Water'],
  ['05', 'Schumann Resonance Sleep Alignment'],
  ['06', 'EMF Audit of Your Living Space'],
  ['07', 'Build a Copper Spiral Antenna'],
  ['08', 'Atmospheric Water Charging'],
  ['09', 'Sacred Geometry Space Harmonization'],
  ['10', 'The Daily Earth Reconnection Protocol'],
];

function buildWelcomeEmail(locale: string): string {
  const c = {
    en: {
      heading: "Your Free Biohacking Starter Kit is ready",
      sub: "Top 10 Protocols from The Biohacker's Guide Collection",
      intro: "Welcome! You now have access to 10 field-tested protocols drawn from Geobiology, Geopathies, Radiesthesia, Radionics, and Electroculture — each designed for immediate, practical application.",
      badge: "FREE GUIDE",
      guideCta: "Read the Top 10 Protocols →",
      guideDesc: "Map Hartmann grids · Move your bed · Build copper antennas · Track Schumann Resonance",
      inside: "What's inside",
      booksCta: "📚 Explore the Full Collection on Amazon",
      footer: "You're receiving this because you subscribed at biohacker.digital. No spam — unsubscribe anytime.",
    },
    'fr-CA': {
      heading: "Votre Kit de Démarrage Biohacking est prêt",
      sub: "Top 10 Protocoles de La Collection du Guide du Biohacker",
      intro: "Bienvenue! Vous avez maintenant accès à 10 protocoles éprouvés tirés de la Géobiologie, Géopathies, Radiesthésie et Électroculture.",
      badge: "GUIDE GRATUIT",
      guideCta: "Lire les 10 Protocoles →",
      guideDesc: "Cartographier les grilles Hartmann · Déplacer votre lit · Construire des antennes en cuivre",
      inside: "Contenu",
      booksCta: "📚 Explorer la Collection sur Amazon",
      footer: "Vous recevez ceci parce que vous vous êtes abonné sur biohacker.digital.",
    },
    es: {
      heading: "Tu Kit de Inicio de Biohacking está listo",
      sub: "Top 10 Protocolos de La Colección de la Guía del Biohacker",
      intro: "¡Bienvenido! Ahora tienes acceso a 10 protocolos probados en campo de Geobiología, Geopatías, Radiestesia, Radiónica y Electrocultura.",
      badge: "GUÍA GRATUITA",
      guideCta: "Leer los 10 Protocolos →",
      guideDesc: "Mapear cuadrículas Hartmann · Mover tu cama · Construir antenas de cobre",
      inside: "Qué incluye",
      booksCta: "📚 Explorar la Colección en Amazon",
      footer: "Recibes esto porque te suscribiste en biohacker.digital. Sin spam — cancela cuando quieras.",
    },
  }[locale] ?? {
    heading: "Your Free Biohacking Starter Kit is ready",
    sub: "Top 10 Protocols from The Biohacker's Guide Collection",
    intro: "Welcome! 10 field-tested biohacking protocols — ready to apply today.",
    badge: "FREE GUIDE",
    guideCta: "Read the Top 10 Protocols →",
    guideDesc: "Map Hartmann grids · Move your bed · Build copper antennas",
    inside: "What's inside",
    booksCta: "📚 Explore the Full Collection on Amazon",
    footer: "You subscribed at biohacker.digital.",
  };

  const baseUrl = 'https://biohacker.digital';
  const guideUrl = `${baseUrl}/${locale}/free-guide`;
  const booksUrl = `${baseUrl}/${locale}/books`;

  const protocolRows = PROTOCOLS.map(([num, title]) =>
    `<div style="display:flex;align-items:center;gap:12px;padding:8px 0;border-bottom:1px solid #27272a;">
      <span style="color:#00ff87;font-weight:800;font-size:13px;min-width:26px;">${num}</span>
      <span style="color:#d4d4d8;font-size:13px;">${title}</span>
    </div>`
  ).join('');

  return `<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#09090b;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <div style="max-width:580px;margin:40px auto;padding:0 16px;">

    <div style="background:linear-gradient(135deg,#052e16 0%,#09090b 100%);border:1px solid #14532d;border-radius:16px 16px 0 0;padding:32px;text-align:center;">
      <span style="display:inline-block;background:#00ff87;color:#09090b;font-weight:900;padding:8px 16px;border-radius:8px;font-size:18px;letter-spacing:1px;">BH</span>
      <p style="color:#00ff87;margin:12px 0 0;font-size:11px;letter-spacing:4px;text-transform:uppercase;">biohacker.digital</p>
    </div>

    <div style="background:#18181b;border:1px solid #27272a;border-top:none;padding:36px;">
      <h1 style="color:#fafafa;font-size:24px;font-weight:800;margin:0 0 6px;line-height:1.3;">${c.heading} 🧬</h1>
      <p style="color:#00ff87;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin:0 0 20px;">${c.sub}</p>
      <p style="color:#a1a1aa;line-height:1.75;font-size:15px;margin:0 0 28px;">${c.intro}</p>

      <div style="background:#052e16;border:2px solid #00ff87;border-radius:12px;padding:24px;margin-bottom:24px;text-align:center;">
        <span style="display:inline-block;background:#00ff87;color:#09090b;font-size:10px;font-weight:800;letter-spacing:3px;padding:4px 12px;border-radius:20px;text-transform:uppercase;margin-bottom:16px;">${c.badge}</span>
        <br>
        <a href="${guideUrl}" style="display:inline-block;background:#00ff87;color:#09090b;font-weight:800;font-size:16px;padding:14px 32px;border-radius:10px;text-decoration:none;margin-bottom:12px;">${c.guideCta}</a>
        <p style="color:#4ade80;font-size:13px;margin:10px 0 0;line-height:1.6;">${c.guideDesc}</p>
      </div>

      <div style="border:1px solid #27272a;border-radius:12px;padding:20px;margin-bottom:28px;">
        <p style="color:#71717a;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin:0 0 12px;">${c.inside}</p>
        ${protocolRows}
      </div>

      <div style="text-align:center;">
        <a href="${booksUrl}" style="display:inline-block;border:2px solid #27272a;color:#a1a1aa;font-weight:600;font-size:14px;padding:12px 24px;border-radius:10px;text-decoration:none;">${c.booksCta}</a>
      </div>
    </div>

    <div style="background:#09090b;border:1px solid #27272a;border-top:none;border-radius:0 0 16px 16px;padding:16px 24px;">
      <p style="color:#52525b;font-size:12px;margin:0;line-height:1.6;text-align:center;">${c.footer}</p>
    </div>

  </div>
</body>
</html>`;
}
