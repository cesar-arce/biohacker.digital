import { setRequestLocale } from 'next-intl/server';
import { termsContent } from '@/lib/content/terms';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = {
    en: 'Terms of Service',
    es: 'Términos de Servicio',
    'fr-CA': 'Conditions d\'Utilisation',
  };
  return { title: titles[locale] ?? titles.en };
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const content = termsContent[locale] ?? termsContent.en;

  const effectiveLabel: Record<string, string> = {
    en: 'Effective date',
    es: 'Fecha de entrada en vigor',
    'fr-CA': 'Date d\'entrée en vigueur',
  };

  const contactLabel: Record<string, string> = {
    en: 'Contact',
    es: 'Contacto',
    'fr-CA': 'Contact',
  };

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Header */}
      <div className="border-b border-zinc-800 bg-zinc-900/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-green-400 border border-green-400/30 px-3 py-1 rounded-full">
              Legal
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-3">{content.pageTitle}</h1>
          <p className="text-zinc-500 text-sm">
            {effectiveLabel[locale] ?? effectiveLabel.en}
            {': '}
            <span className="text-zinc-400">{content.effectiveDate}</span>
          </p>
          <p className="text-zinc-600 text-sm mt-1">
            biohacker.digital &mdash; César Arce
          </p>
        </div>
      </div>

      {/* Intro */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <p className="text-zinc-400 text-sm leading-relaxed border-l-2 border-green-400/40 pl-4">
          {content.intro}
        </p>
      </div>

      {/* Sections */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        {content.sections.map((section, i) => (
          <section key={i} className="scroll-mt-20">
            <h2 className="text-lg font-bold text-white mb-4 pb-2 border-b border-zinc-800 flex items-start gap-2">
              <span className="text-green-400 font-black text-sm mt-0.5 shrink-0 tabular-nums">
                {String(i + 1).padStart(2, '0')}.
              </span>
              {section.title}
            </h2>

            {Array.isArray(section.content) ? (
              <ul className="space-y-3">
                {section.content.map((item, j) => (
                  <li key={j} className="flex gap-3 text-zinc-400 text-sm leading-relaxed">
                    <span className="text-green-400 mt-1.5 shrink-0">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-zinc-400 text-sm leading-relaxed whitespace-pre-line">
                {section.content}
              </div>
            )}
          </section>
        ))}

        {/* Contact box */}
        <div className="mt-12 p-6 rounded-2xl border border-green-400/20 bg-green-400/5">
          <p className="text-green-400 font-bold text-sm mb-2 uppercase tracking-widest">
            {contactLabel[locale] ?? contactLabel.en}
          </p>
          <p className="text-white font-semibold">{content.contactName}</p>
          <a
            href={`mailto:${content.contactEmail}`}
            className="text-green-400 hover:text-green-300 text-sm transition-colors"
          >
            {content.contactEmail}
          </a>
        </div>
      </div>
    </div>
  );
}
