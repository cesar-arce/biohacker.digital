import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import BookCard from '@/components/books/BookCard';
import { getBooks } from '@/lib/supabase/queries';
import type { Book } from '@/types';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'books' });
  return { title: t('title'), description: t('subtitle') };
}

const PLACEHOLDER_BOOKS: Book[] = [
  {
    id: '1', slug: 'geobiology',
    title: { en: "Geobiology: The Biohacker's Guide", 'fr-CA': 'Géobiologie : Le Guide du Biohacker', es: 'Geobiología: La Guía del Biohacker' },
    description: {
      en: "Geobiology is the rediscovery of a forgotten science — revealing how telluric currents, underground water streams, and geomagnetic grids quietly influence your nervous system, sleep, and vitality. Detect geopathic zones and reclaim the natural coherence your body has always known.",
      'fr-CA': "La géobiologie redécouvre comment les courants telluriques et les grilles géomagnétiques influencent votre système nerveux et votre sommeil. Détectez les zones géopathiques et retrouvez la cohérence naturelle de votre corps.",
      es: "La geobiología redescubre cómo las corrientes telúricas y las redes geomagnéticas influyen en tu sistema nervioso y sueño. Detecta las zonas geopáticas y recupera la coherencia natural de tu cuerpo.",
    },
    amazon_url: 'https://www.amazon.com/dp/B0FJNL59YC',
    cover_image_url: '/images/books/Geobiology.png',
    tags: ['Geobiology', 'Geopathic Stress', 'Earth Energy', 'Home Energy', 'Biohacking'],
    published_at: '2024-01-01',
  },
  {
    id: '2', slug: 'geopathies',
    title: { en: "Geopathies: The Biohacker's Guide", 'fr-CA': 'Géopathies : Le Guide du Biohacker', es: 'Geopatías: La Guía del Biohacker' },
    description: {
      en: "Imagine your bed resting over a geopathic stress point — what should be deep rest becomes exhausting nights. Geopathies reveals how disturbed geomagnetic fields and underground water veins silently erode vitality, and guides you to detect, neutralize, and transform harmful zones.",
      'fr-CA': "Imaginez votre lit sur un point de stress géopathique — le repos devient des nuits épuisantes. Géopathies révèle comment les champs géomagnétiques perturbés et les veines d'eau souterraines érodent la vitalité, et vous guide pour les neutraliser.",
      es: "Imagina tu cama sobre un punto de estrés geopático — el descanso se convierte en noches agotadoras. Geopatías revela cómo los campos geomagnéticos perturbados erosionan la vitalidad y te guía para detectarlos y neutralizarlos.",
    },
    amazon_url: 'https://www.amazon.com/dp/B0FPCY2JZQ',
    cover_image_url: '/images/books/Geopathies.jpg',
    tags: ['Geopathies', 'Geopathic Stress', 'Hidden Radiation', 'Environmental Energy', 'Energy Health'],
    published_at: '2024-02-01',
  },
  {
    id: '3', slug: 'radiesthesia',
    title: { en: "Radiesthesia: The Biohacker's Guide", 'fr-CA': 'Radiesthésie : Le Guide du Biohacker', es: 'Radiestesia: La Guía del Biohacker' },
    description: {
      en: "Radiesthesia is your nervous system acting as a biological antenna — tuning into variations in the Earth's geomagnetic field. A purely scientific approach bridging ancient dowsing practices with modern electromagnetic research, geopathic detection, and practical health optimization.",
      'fr-CA': "La radiesthésie, c'est votre système nerveux comme antenne biologique — capturant les variations du champ géomagnétique terrestre. Une approche scientifique reliant la radiesthésie ancienne aux recherches électromagnétiques modernes.",
      es: "La radiestesia es tu sistema nervioso actuando como antena biológica — sintonizando las variaciones del campo geomagnético terrestre. Un enfoque puramente científico que une la radiestesia ancestral con la investigación electromagnética moderna.",
    },
    amazon_url: 'https://www.amazon.com/dp/B0FQPMLT9T',
    cover_image_url: '/images/books/Radiesthesia.png',
    tags: ['Radiesthesia', 'Dowsing', 'Pendulum Guide', 'Energy Work', 'Intuitive Detection'],
    published_at: '2024-03-01',
  },
  {
    id: '4', slug: 'radiesthesia-radionics-booklet',
    title: { en: 'Radiesthesia & Radionics: Practical Booklet', 'fr-CA': 'Radiesthésie & Radionique : Livret Pratique', es: 'Radiestesia y Radiónica: Cuaderno Práctico' },
    description: {
      en: "Your practical gateway into Radiesthesia and Radionics — sensing subtle Earth energies and transmitting corrective frequencies to restore balance. Step-by-step manual combining rods, pendulums, EMF technology, radionics symbols, and pendulum machines for beginners and advanced practitioners.",
      'fr-CA': "Votre passerelle pratique vers la Radiesthésie et la Radionique — percevoir les énergies subtiles et transmettre des fréquences correctives. Manuel pas à pas combinant baguettes, pendules, EMF, symboles radioniques et machines à pendule.",
      es: "Tu puerta práctica a la Radiestesia y la Radiónica — percibir energías sutiles y transmitir frecuencias correctivas. Manual paso a paso que combina varillas, péndulos, tecnología EMF, símbolos radónicos y máquinas de péndulo.",
    },
    amazon_url: 'https://www.amazon.com/dp/B0FRMSLJCK',
    cover_image_url: '/images/books/Radiesthesia_Booklet.png',
    tags: ['Radionics', 'Dowsing Tools', 'Manifestation', 'Energy Symbols', 'Practical Radiesthesia'],
    published_at: '2024-04-01',
  },
  {
    id: '5', slug: 'electroculture',
    title: { en: "Electroculture: The Biohacker's Guide", 'fr-CA': 'Électroculture : Le Guide du Biohacker', es: 'Electrocultura: La Guía del Biohacker' },
    description: {
      en: "Between Earth's surface and the ionosphere exists a 400,000-volt living current. Electroculture shows you how to harness this atmospheric electricity with copper spirals and antennas to supercharge plant growth and soil health — no chemicals, no cost, just rediscovered science.",
      'fr-CA': "Entre la Terre et l'ionosphère existe un courant vivant de 400 000 volts. L'électroculture vous montre comment exploiter cette électricité atmosphérique avec des spirales en cuivre pour stimuler la croissance des plantes — sans produits chimiques.",
      es: "Entre la Tierra y la ionósfera existe una corriente viva de 400,000 voltios. La electrocultura te muestra cómo aprovechar esta electricidad atmosférica con espirales de cobre para potenciar el crecimiento de plantas — sin químicos.",
    },
    amazon_url: 'https://www.amazon.com/dp/B0FRSJYRY1',
    cover_image_url: '/images/books/Electroculture.png',
    tags: ['Electroculture', 'Plant Growth', 'Copper Antenna', 'Atmospheric Energy', 'Regenerative Agriculture'],
    published_at: '2024-05-01',
  },
  {
    id: '6', slug: 'biomagnetism',
    title: { en: "Biomagnetism: The Biohacker's Guide", 'fr-CA': 'Biomagnétisme : Le Guide du Biohacker', es: 'Biomagnetismo: La Guía del Biohacker' },
    description: {
      en: "Biomagnetism explores how the body's own magnetic fields regulate health at the cellular level. Drawing on the pioneering work of Dr. Isaac Goiz and decades of clinical research, this volume introduces biomagnetic pair therapy — using magnets to neutralize pathogens, restore pH balance, and activate the body's self-healing intelligence.",
      'fr-CA': "Le Biomagnétisme explore comment les champs magnétiques du corps régulent la santé au niveau cellulaire. S'appuyant sur les travaux pionniers du Dr Isaac Goiz, ce volume introduit la thérapie par paires biomagnétiques — utiliser des aimants pour neutraliser les agents pathogènes et restaurer l'équilibre du pH.",
      es: "El Biomagnetismo explora cómo los campos magnéticos del cuerpo regulan la salud a nivel celular. Basándose en el trabajo pionero del Dr. Isaac Goiz, este volumen introduce la terapia de par biomagnético — usar imanes para neutralizar patógenos, restaurar el equilibrio del pH y activar la inteligencia autocurativa del cuerpo.",
    },
    amazon_url: '',
    cover_image_url: '/images/books/Biomagnetism.png',
    tags: ['Biomagnetism', 'Magnetic Therapy', 'pH Balance', 'Energy Health', 'Self-Healing'],
    published_at: '2025-12-01',
    coming_soon: true,
  },
];

const ADVENTURE_BOOK_AMAZON = 'https://www.amazon.com/dp/B0FV8QQLTY';
const ADVENTURE_BOOK_COVER = "/images/books/The Lost Secret of Inca's Stones.png";
const ADVENTURE_BOOK_TAGS = ['Historical Thriller', 'Adventure', 'Ancient Mysteries', 'Indiana Jones Style'];

export default async function BooksPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'books' });

  // Fetch from Supabase — falls back to placeholders if DB not connected yet
  let books: Book[] = [];
  try {
    books = await getBooks();
  } catch {
    books = [];
  }
  if (books.length === 0) books = PLACEHOLDER_BOOKS;

  // Always include Biomagnetism (coming soon) if not returned by Supabase
  const BIOMAGNETISM = PLACEHOLDER_BOOKS.find((b) => b.slug === 'biomagnetism')!;
  if (!books.find((b) => b.slug === 'biomagnetism')) books = [...books, BIOMAGNETISM];

  // Enforce canonical display order
  const SLUG_ORDER = ['geobiology', 'geopathies', 'radiesthesia', 'radiesthesia-radionics-booklet', 'electroculture', 'biomagnetism'];
  books = [
    ...SLUG_ORDER.map((slug) => books.find((b) => b.slug === slug)).filter(Boolean) as Book[],
    ...books.filter((b) => !SLUG_ORDER.includes(b.slug)),
  ];

  // Spanish edition overrides — different covers and Amazon.ca links
  const ES_OVERRIDES: Record<string, { cover_image_url: string; amazon_url: string }> = {
    'geobiology':                  { cover_image_url: '/images/books/Geobiologia.png',       amazon_url: 'https://www.amazon.ca/dp/B0DMVJFTVY?tag=biohackerdi0b-20' },
    'geopathies':                  { cover_image_url: '/images/books/Geopatias.png',          amazon_url: 'https://www.amazon.ca/dp/1069107816?tag=biohackerdi0b-20' },
    'radiesthesia':                { cover_image_url: '/images/books/Radiestesia.png',        amazon_url: 'https://www.amazon.ca/dp/B0DPMYF2WF?tag=biohackerdi0b-20' },
    'radiesthesia-radionics-booklet': { cover_image_url: '/images/books/CartillaRadiestesia.png', amazon_url: 'https://www.amazon.ca/dp/B0DPST5LKX?tag=biohackerdi0b-20' },
  };

  if (locale === 'es') {
    books = books.map((book) =>
      ES_OVERRIDES[book.slug] ? { ...book, ...ES_OVERRIDES[book.slug] } : book
    );
  }

  const filterKeys = ['filterAll', 'filterGeobiology', 'filterGeopathies', 'filterRadiesthesia', 'filterElectroculture', 'filterPractical'] as const;

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* ── Section 1: Biohacker's Guide Collection ── */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase rounded-full border border-green-400/40 text-green-400 bg-green-400/10">
            Collection
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{t('title')}</h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">{t('subtitle')}</p>
          {locale === 'fr-CA' && (
            <p className="mt-4 inline-block px-4 py-2 text-sm text-amber-400/90 bg-amber-400/10 border border-amber-400/20 rounded-full">
              {t('languageNote')}
            </p>
          )}
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filterKeys.map((key, i) => (
            <button key={key} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border
              ${i === 0 ? 'bg-green-400 text-zinc-950 border-green-400' : 'border-zinc-700 text-zinc-400 hover:border-green-400 hover:text-green-400'}`}>
              {t(key)}
            </button>
          ))}
        </div>

        {/* Biohacker books grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>

        {/* ── Divider ── */}
        <div className="my-24 flex items-center gap-6">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
          <span className="text-zinc-600 text-xs tracking-widest uppercase">{t('alsoBy')}</span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
        </div>

        {/* ── Section 2: The Adventures of Caesar Maple ── */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase rounded-full border border-amber-400/40 text-amber-400 bg-amber-400/10">
            {t('adventureSeries')}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">{t('adventureSeriesTitle')}</h2>
          <p className="text-zinc-400 text-base max-w-xl mx-auto">{t('adventureSeriesSubtitle')}</p>
        </div>

        {/* Adventure book — featured wide card */}
        <div className="group bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-amber-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-400/5 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5">

            {/* Cover */}
            <div className="md:col-span-2 relative aspect-[3/4] md:aspect-auto bg-zinc-800 min-h-[320px] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={ADVENTURE_BOOK_COVER}
                alt={t('adventureBook1Title')}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-amber-400 text-zinc-950">Book 1</span>
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-3 p-8 flex flex-col justify-between">
              <div>
                <p className="text-amber-400 text-xs font-semibold tracking-widest uppercase mb-2">{t('adventureBook1Series')}</p>
                <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-1 group-hover:text-amber-400 transition-colors">
                  {t('adventureBook1Title')}
                </h3>
                <p className="text-zinc-500 text-sm mb-4">by César Arce</p>

                <p className="text-zinc-400 leading-relaxed text-sm mb-5">
                  {t('adventureBook1Desc')}
                </p>

                <ul className="space-y-1.5 mb-6">
                  {(['adventureBook1H1', 'adventureBook1H2', 'adventureBook1H3', 'adventureBook1H4'] as const).map((key) => (
                    <li key={key} className="flex items-start gap-2 text-sm text-zinc-400">
                      <span className="text-amber-400 mt-0.5 shrink-0">✦</span>
                      <span>{t(key)}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {ADVENTURE_BOOK_TAGS.map((tag) => (
                    <span key={tag} className="px-2.5 py-0.5 text-xs rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={`${ADVENTURE_BOOK_AMAZON}?tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG ?? ''}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-amber-400 text-zinc-950 font-bold text-sm hover:bg-amber-300 transition-colors self-start"
              >
                🛒 {t('buyOnAmazon')}
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
