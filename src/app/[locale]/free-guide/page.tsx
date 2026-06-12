import type { Metadata } from 'next';
import Link from 'next/link';
import PrintButton from '@/components/ui/PrintButton';
import { freeGuideContent } from '@/lib/content/free-guide';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const c = freeGuideContent[locale] ?? freeGuideContent['en'];
  return { title: c.meta.title, description: c.meta.description };
}

const colorMap: Record<string, { border: string; badge: string; number: string; dot: string }> = {
  green:  { border: 'border-green-400/20',  badge: 'bg-green-400/10 text-green-400 border-green-400/20',    number: 'text-green-400',  dot: 'bg-green-400' },
  blue:   { border: 'border-blue-400/20',   badge: 'bg-blue-400/10 text-blue-400 border-blue-400/20',       number: 'text-blue-400',   dot: 'bg-blue-400' },
  purple: { border: 'border-purple-400/20', badge: 'bg-purple-400/10 text-purple-400 border-purple-400/20', number: 'text-purple-400', dot: 'bg-purple-400' },
  amber:  { border: 'border-amber-400/20',  badge: 'bg-amber-400/10 text-amber-400 border-amber-400/20',    number: 'text-amber-400',  dot: 'bg-amber-400' },
};

export default async function FreeGuidePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = freeGuideContent[locale] ?? freeGuideContent['en'];

  return (
    <div className="min-h-screen py-16 px-4 print:py-0 print:px-0">
      <style>{`
        @media print {
          nav, header, footer, .no-print { display: none !important; }
          body { background: white !important; color: black !important; }
          .print-card { break-inside: avoid; page-break-inside: avoid; }
        }
      `}</style>

      <div className="max-w-3xl mx-auto">

        {/* Cover header */}
        <div className="text-center mb-16 print:mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase rounded-full border border-green-400/40 text-green-400 bg-green-400/10 no-print">
            Free Starter Kit
          </div>
          <div className="mb-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/books/Geobiology.png" alt="" className="w-20 h-auto mx-auto rounded-xl shadow-lg mb-4 no-print" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight print:text-black">
            {c.heading}
          </h1>
          <p className="text-lg text-green-400 font-semibold mb-3 tracking-wide uppercase text-sm">
            {c.subheading}
          </p>
          <p className="text-zinc-400 max-w-xl mx-auto leading-relaxed print:text-gray-600">
            {c.intro}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8 no-print">
            <PrintButton label={c.savePdf} />
            <Link
              href={`/${locale}/books`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-zinc-700 text-zinc-200 font-bold rounded-xl hover:border-green-400 hover:text-green-400 transition-colors text-sm"
            >
              {c.exploreCollection}
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-zinc-800" />
          <span className="text-zinc-600 text-xs uppercase tracking-widest">{c.theProtocols}</span>
          <div className="h-px flex-1 bg-zinc-800" />
        </div>

        {/* Protocol cards */}
        <div className="space-y-8">
          {c.protocols.map((p) => {
            const cm = colorMap[p.color];
            return (
              <div key={p.number} className={`print-card bg-zinc-900 border ${cm.border} rounded-2xl p-6 print:bg-white print:border-gray-200`}>
                <div className="flex items-start gap-4 mb-4">
                  <span className={`text-4xl font-black ${cm.number} leading-none shrink-0 print:text-gray-800`}>
                    {p.number}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className={`px-2 py-0.5 text-xs font-bold rounded-full border ${cm.badge} uppercase tracking-wider`}>
                        {p.category}
                      </span>
                      <span className="text-zinc-600 text-xs">{p.volume}</span>
                    </div>
                    <h2 className="text-white font-bold text-lg leading-snug print:text-black">{p.title}</h2>
                  </div>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4 print:text-gray-600">{p.summary}</p>
                <div className="space-y-2 mb-4">
                  {p.protocol.map((step, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <div className={`w-5 h-5 rounded-full ${cm.dot} flex items-center justify-center text-zinc-950 text-xs font-bold shrink-0 mt-0.5`}>
                        {i + 1}
                      </div>
                      <p className="text-zinc-300 text-sm leading-relaxed print:text-gray-700">{step}</p>
                    </div>
                  ))}
                </div>
                <div className={`mt-4 px-4 py-3 rounded-xl bg-zinc-800/60 border ${cm.border} print:bg-gray-50`}>
                  <p className="text-zinc-400 text-xs leading-relaxed print:text-gray-600">
                    <span className={`font-bold ${cm.number} mr-1 print:text-gray-800`}>{c.fieldNote}</span>
                    {p.tip}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer CTA */}
        <div className="mt-16 text-center no-print">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
            <p className="text-zinc-400 text-sm mb-2">{c.wantDeeper}</p>
            <h3 className="text-white font-bold text-xl mb-4">{c.fullCollection}</h3>
            <Link
              href={`/${locale}/books`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-400 text-zinc-950 font-bold rounded-xl hover:bg-green-300 transition-colors text-sm"
            >
              {c.getBooks}
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
