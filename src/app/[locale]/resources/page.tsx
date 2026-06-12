import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'resources' });
  return { title: t('title'), description: t('subtitle') };
}

const PROMO_IMAGES = [
  {
    src: "/images/resources/Publicidad Biohacker's Guide 2025.png",
    alt: "The Biohacker's Guide Collection — 2025",
    caption: "The Biohacker's Guide Collection",
    subcaption: "Geobiology · Geopathies · Radiesthesia · Electroculture · Biomagnetism",
  },
  {
    src: "/images/resources/Publicidad Inca's Stones 2025.png",
    alt: "The Adventures of Caesar Maple — The Lost Secret of Inca's Stones 2025",
    caption: "The Adventures of Caesar Maple",
    subcaption: "The Lost Secret of Inca's Stones — Book One",
  },
];

export default async function ResourcesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'resources' });

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase rounded-full border border-green-400/40 text-green-400 bg-green-400/10">
            Resources
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{t('title')}</h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">{t('subtitle')}</p>
        </div>

        {/* Promo images */}
        <div className="flex flex-col items-center gap-16">
          {PROMO_IMAGES.map((img) => (
            <div key={img.src} className="w-full flex flex-col items-center">
              <div className="w-full max-w-3xl rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl shadow-black/50">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="mt-4 text-center">
                <p className="text-white font-semibold text-lg">{img.caption}</p>
                <p className="text-zinc-500 text-sm mt-1">{img.subcaption}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
