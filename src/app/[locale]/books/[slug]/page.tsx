import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getBookBySlug, getBooks } from '@/lib/supabase/queries';
import { buildAmazonUrl } from '@/lib/utils';
import type { Book, Locale } from '@/types';

// ── Per-book "What you'll learn" bullets ──────────────────────────────────────
const KEY_LEARNINGS: Record<string, string[]> = {
  geobiology: [
    "The science behind the Earth's magnetic field and its interaction with your biology",
    'How Schumann resonance and geomagnetic fluctuations affect your sleep and immunity',
    'Why ancient cultures built sacred sites on telluric nodes — and what modern architects have forgotten',
    'Practical methods to detect Hartmann and Curry lines, underground water veins, and energetic disturbances',
    'Step-by-step guidance to restore balance, vitality, and harmony in your home or workplace',
  ],
  geopathies: [
    'The physics of how geopathic zones disrupt biological rhythms and why your nervous system responds first',
    'How to locate Hartmann and Curry grid intersections, underground water streams, and fault-line emissions',
    'How to use radiesthesia tools, magnetometers, and EMF meters to map energetic safety zones',
    'The forgotten art of ancient site-planning — why temples and pyramids were built where they were',
    'Modern strategies to harmonize your environment using ancestral remedies and electromagnetic shielding',
  ],
  radiesthesia: [
    'The origins of radiesthesia, from rhabdomancy to modern electromagnetic science',
    'How rods and pendulums work as extensions of your nervous system — measurable, not mystical',
    'The links between geomagnetic anomalies and sleep quality, vitality, and immune resilience',
    'Ancient wisdom: why temples and sacred sites were aligned with ley lines',
    'Practical exercises to detect and neutralize harmful energetic zones — without electronic devices',
  ],
  'radiesthesia-radionics-booklet': [
    'How to use rods and pendulums to detect Hartmann and Curry grids in your home or workspace',
    'The fundamentals of Radionics — how symbols, diagrams, and focused intention can shift energy fields',
    'Step-by-step guidance to build and use radionics paper devices and pendulum machines',
    'Practical exercises to enhance intuition and electromagnetic sensitivity',
    'How to merge ancestral wisdom with modern EMF technology to create healthier, more coherent spaces',
  ],
  electroculture: [
    "How the Earth–ionosphere capacitor sustains the planet's magnetic pulse — and how to tap into it",
    'The triboelectric effect and why electrostatic principles govern both aircraft and soil health',
    'How to build copper spirals and antennas to harness atmospheric electricity for plant growth',
    "Nikola Tesla's forgotten vision of sky energy — and how to apply it in your own garden today",
    'Practical experiments to observe, measure, and amplify electroculture effects without chemicals',
  ],
};

const DEFAULT_LEARNINGS = [
  'Science-backed protocols grounded in decades of research and field experimentation',
  'How to detect, measure, and neutralize invisible energetic disturbances in your environment',
  'The bridge between ancient wisdom and modern biohacking — where intuition meets instrumentation',
  'Practical step-by-step techniques you can apply immediately at home or in the workplace',
];

// ── Fallback data (used when Supabase is unavailable) ─────────────────────────
const FALLBACK: Record<string, Book> = {
  geobiology: {
    id: '1', slug: 'geobiology',
    title: {
      en: "Geobiology: The Biohacker's Guide Collection",
      'fr-CA': "Géobiologie : La Collection du Guide du Biohacker",
      es: "Geobiología: La Colección de la Guía del Biohacker",
    },
    description: {
      en: "Geobiology is the rediscovery of a forgotten science — one that reveals how the Earth's invisible forces shape every breath you take, every night of sleep, and every cell of your body.\n\nFor thousands of years, healers and builders understood that life thrives where the Earth's energy flows in harmony. They placed temples, altars, and homes on precise magnetic nodes — aligning human life with planetary rhythms. Modern science now confirms what ancient wisdom always knew: electromagnetic balance is essential to health.\n\nIn this groundbreaking volume, César Arce bridges physics, biohacking, and ancestral knowledge to uncover how telluric currents, underground water streams, and geomagnetic grids quietly influence your nervous system, your brain waves, and your emotional state. From chronic fatigue and insomnia to anxiety and inflammation, subtle environmental distortions — known as geopathic zones — can drain vitality without your awareness. But once you learn to detect and harmonize them, you reclaim the natural coherence your body has always known.\n\nAs a pilot, César Arce also reveals a hidden drama unfolding above and below us — the shifting magnetic poles. Today, magnetic north moves so unpredictably that the World Magnetic Model (WMM), used by aircraft, GPS satellites, and smartphones, requires constant recalibration. The poles are moving. Our systems are adapting. The magnetic future is already here.\n\nMore than a study of invisible energies, Geobiology is an invitation — to listen again to the ground beneath your feet, to understand that your body is not separate from the planet, but an extension of it. You are not standing on the Earth — you are standing within it.",
      'fr-CA': "La géobiologie est la redécouverte d'une science oubliée — qui révèle comment les forces invisibles de la Terre façonnent chaque nuit de sommeil et chaque cellule de votre corps. César Arce unit physique, biohacking et sagesse ancestrale pour montrer comment les courants telluriques et les grilles géomagnétiques influencent silencieusement votre système nerveux. En apprenant à détecter et harmoniser les zones géopathiques, vous retrouvez la cohérence naturelle que votre corps a toujours connue.",
      es: "La geobiología es el redescubrimiento de una ciencia olvidada que revela cómo las fuerzas invisibles de la Tierra moldean cada noche de sueño y cada célula de tu cuerpo. César Arce une física, biohacking y conocimiento ancestral para mostrar cómo las corrientes telúricas y las redes geomagnéticas influyen silenciosamente en tu sistema nervioso. Al aprender a detectar y armonizar las zonas geopáticas, recuperas la coherencia natural que tu cuerpo siempre ha conocido.",
    },
    amazon_url: 'https://www.amazon.com/dp/B0FJNL59YC',
    cover_image_url: '/images/books/Geobiology.png',
    tags: ['Geobiology', 'Geopathic Stress', 'Earth Energy', 'Home Energy', 'Biohacking'],
    published_at: '2024-01-01',
  },
  geopathies: {
    id: '2', slug: 'geopathies',
    title: {
      en: "Geopathies: The Biohacker's Guide Collection",
      'fr-CA': "Géopathies : La Collection du Guide du Biohacker",
      es: "Geopatías: La Colección de la Guía del Biohacker",
    },
    description: {
      en: "Geopathies unveils the silent yet powerful ways in which the Earth's disturbed geomagnetic fields, underground water veins, and geological faults can erode human vitality.\n\nThis work is the result of decades of research and an exhaustive compilation of medical and bioenergetic treatments once widely practiced — from Roman thermal practices to the electromagnetic healing methods of the early 20th century — many of which have been forgotten, replaced by a purely pharmacological model. Yet the Earth itself remains our greatest teacher. Its fields still pulse, its currents still breathe — and those who learn to read this invisible language can rediscover what modern medicine has overlooked: the geometry of health.\n\nImagine your bed resting over a geopathic stress point — what should be a night of deep rest becomes hours of tossing and turning. You wake up exhausted, blaming the mattress or the pillows. But what if the problem isn't on your bed… it's beneath it? A hidden disturbance in the Earth's magnetic field can drain your vitality night after night. Yet when you travel, you often sleep perfectly. Was it the hotel? Or simply the absence of that invisible stress line crossing your bedroom at home?\n\nFrom ancient wisdom to cutting-edge measurement tools, Geopathies bridges science and intuition, guiding you step by step in detecting, neutralizing, and transforming harmful energetic zones into spaces that nourish life.\n\nYour health doesn't just depend on what you eat or think. It depends on where you stand — and what lies beneath your feet.",
      'fr-CA': "Géopathies dévoile comment les champs géomagnétiques perturbés de la Terre, les veines d'eau souterraines et les failles géologiques peuvent éroder la vitalité humaine. Imaginez votre lit posé sur un point de stress géopathique — ce qui devrait être un sommeil profond devient des nuits épuisantes. Ce volume unit science et intuition pour vous guider dans la détection et la neutralisation des zones énergétiques néfastes.",
      es: "Geopatías revela cómo los campos geomagnéticos perturbados de la Tierra, las venas de agua subterráneas y las fallas geológicas pueden erosionar la vitalidad humana. Imagina tu cama sobre un punto de estrés geopático — lo que debería ser descanso profundo se convierte en noches agotadoras. Este volumen une ciencia e intuición para guiarte en la detección y neutralización de zonas energéticas dañinas.",
    },
    amazon_url: 'https://www.amazon.com/dp/B0FPCY2JZQ',
    cover_image_url: '/images/books/Geopathies.jpg',
    tags: ['Geopathies', 'Geopathic Stress', 'Hidden Radiation', 'Environmental Energy', 'Energy Health'],
    published_at: '2024-02-01',
  },
  radiesthesia: {
    id: '3', slug: 'radiesthesia',
    title: {
      en: "Radiesthesia: The Biohacker's Guide Collection",
      'fr-CA': "Radiesthésie : La Collection du Guide du Biohacker",
      es: "Radiestesia: La Colección de la Guía del Biohacker",
    },
    description: {
      en: "Radiesthesia — the art of sensing radiation — is the bridge between geobiology, geopathic stress, and the hidden forces that shape our daily lives.\n\nIn this third volume, César Arce unites science, history, and practical techniques to reveal how pendulums, rods, and human intuition can detect the Earth's geomagnetic networks — and how harmonizing with them can restore balance to body and mind. This work approaches radiesthesia as a purely scientific discipline, free from superstition, divination, or spiritualism.\n\nRadiesthesia is a natural human ability — the innate capacity of our nervous system to act as a biological antenna, tuning into variations in the Earth's geomagnetic field such as Hartmann and Curry grid crossings, underground currents, or the subtle frequencies emitted by objects and living beings. Certain individuals exhibit greater electromagnetic sensitivity — a scientifically recognized phenomenon known as magnetosensitivity. This does not belong to the realm of belief, but to measurable physics.\n\nThis book opens your eyes to the real science behind it — showing how magnetic and electromagnetic fields affect your health, sleep quality, and emotional balance in today's world saturated with electrosmog. From the ancient practice of dowsing to modern theories of electromagnetic interaction, Radiesthesia unveils the subtle dialogue between environment and biology.\n\nThe invisible is not empty — it is alive. And it has always been waiting for you to discover it.",
      'fr-CA': "La radiesthésie — l'art de détecter les rayonnements — est le pont entre la géobiologie, le stress géopathique et les forces cachées qui façonnent notre quotidien. César Arce l'aborde comme une discipline purement scientifique : la capacité innée de notre système nerveux à agir comme une antenne biologique. Ce volume unit science, histoire et techniques pratiques pour révéler comment pendules et baguettes peuvent détecter les réseaux géomagnétiques de la Terre.",
      es: "La radiestesia — el arte de detectar radiaciones — es el puente entre la geobiología, el estrés geopático y las fuerzas ocultas que moldean nuestra vida cotidiana. César Arce la aborda como una disciplina puramente científica: la capacidad innata de nuestro sistema nervioso para actuar como una antena biológica. Este volumen une ciencia, historia y técnicas prácticas para revelar cómo péndulos y varillas pueden detectar las redes geomagnéticas de la Tierra.",
    },
    amazon_url: 'https://www.amazon.com/dp/B0FQPMLT9T',
    cover_image_url: '/images/books/Radiesthesia.png',
    tags: ['Radiesthesia', 'Dowsing', 'Pendulum Guide', 'Energy Work', 'Intuitive Detection'],
    published_at: '2024-03-01',
  },
  'radiesthesia-radionics-booklet': {
    id: '4', slug: 'radiesthesia-radionics-booklet',
    title: {
      en: "Radiesthesia & Radionics Booklet: The Biohacker's Guide Collection",
      'fr-CA': "Radiesthésie & Radionique : La Collection du Guide du Biohacker",
      es: "Radiestesia y Radiónica: La Colección de la Guía del Biohacker",
    },
    description: {
      en: "This booklet is your practical gateway into the twin sciences of Radiesthesia and Radionics — the art of sensing subtle Earth energies and the science of transmitting corrective frequencies to restore balance.\n\nAuthor César Arce distills years of research and experimentation into a clear, step-by-step manual designed for both beginners and advanced explorers. Using rods, pendulums, and modern EMF technology, you'll learn how to detect geomagnetic grids, locate geopathic stress zones, and apply energetic corrections that harmonize both spaces and people.\n\nImagine your bed resting over a geopathic stress point — what should be deep rest becomes hours of tossing and turning. You wake exhausted, blaming the mattress. But what if the problem isn't on your bed… it's beneath it? A hidden disturbance in the Earth's magnetic field can drain your vitality night after night. This is where Radiesthesia and Radionics meet modern science — combining traditional instruments with cutting-edge EMF meters to detect magnetic anomalies and energetic disturbances that influence your well-being.\n\nYour body is an antenna. Your home is a resonator. When you learn to detect, decode, and harmonize the magnetic fields around you, every night becomes restorative — and every space becomes an ally in your health.\n\nBecause energy is not just detected — it can be directed.",
      'fr-CA': "Ce carnet pratique est votre passerelle vers les sciences jumelles de la Radiesthésie et de la Radionique — l'art de percevoir les énergies subtiles de la Terre et la science de transmettre des fréquences correctives pour restaurer l'équilibre. César Arce distille des années de recherche en un manuel clair pour débutants et explorateurs avancés, combinant baguettes, pendules et technologie EMF moderne.",
      es: "Este cuaderno práctico es tu puerta de entrada a las ciencias gemelas de la Radiestesia y la Radiónica — el arte de percibir las energías sutiles de la Tierra y la ciencia de transmitir frecuencias correctivas para restaurar el equilibrio. César Arce destila años de investigación en un manual claro que combina varillas, péndulos y tecnología EMF moderna.",
    },
    amazon_url: 'https://www.amazon.com/dp/B0FRMSLJCK',
    cover_image_url: '/images/books/Radiesthesia_Booklet.png',
    tags: ['Radionics', 'Dowsing Tools', 'Manifestation', 'Energy Symbols', 'Practical Radiesthesia'],
    published_at: '2024-04-01',
  },
  electroculture: {
    id: '5', slug: 'electroculture',
    title: {
      en: "Electroculture: The Biohacker's Guide Collection",
      'fr-CA': "Électroculture : La Collection du Guide du Biohacker",
      es: "Electrocultura: La Colección de la Guía del Biohacker",
    },
    description: {
      en: "Electroculture — Farming with the Living Sky is the culmination of nearly thirty years of scientific research and hands-on experimentation. This volume unveils how atmospheric electricity — the endless dialogue between heaven and Earth — can be harnessed to transform soil, plants, and even human vitality.\n\nBetween the surface of the Earth and the ionosphere — fifty to a hundred kilometers above — exists a vast electric potential of nearly 400,000 volts. Together they form what physicist Richard Feynman described as a giant spherical capacitor, silently humming with charge. Thunderstorms, solar winds, and cosmic rays keep this natural circuit alive, creating a continuous flow of electrons between sky and soil. When we place a copper spiral in the ground, we are not inventing a system — we are joining an existing one.\n\nDrawing from his experience as a pilot, César Arce observed how aircraft accumulate electrostatic charges through friction with air molecules — the triboelectric effect. These same principles govern the natural circuit between the Earth and the ionosphere, reminding us that every movement through the sky obeys the same laws that sustain life in the soil.\n\nThis book is both a scientific guide and a philosophical awakening — a call to remember that farming, health, and life itself are electrical at their core. May it awaken your curiosity, your wonder, and your hands. For the sky is alive, the soil listens, and together, they are still teaching us how to grow.\n\nReclaim the ancient knowledge. Rediscover the science behind it. Grow with the living sky.",
      'fr-CA': "L'Électroculture — Cultiver avec le Ciel Vivant est le fruit de près de trente ans de recherche scientifique révélant comment l'électricité atmosphérique peut transformer le sol, les plantes et la vitalité humaine. Entre la surface de la Terre et l'ionosphère existe un potentiel électrique de 400 000 volts — un courant vivant qui soutient le pouls magnétique de la planète. À travers de simples spirales et antennes en cuivre, César Arce vous montre comment rejoindre ce circuit ancestral.",
      es: "Electrocultura — Cultivando con el Cielo Vivo es la culminación de casi treinta años de investigación científica que revela cómo la electricidad atmosférica puede transformar el suelo, las plantas y la vitalidad humana. Entre la superficie de la Tierra y la ionósfera existe un potencial eléctrico de 400,000 voltios — una corriente viva que sostiene el pulso magnético del planeta. A través de simples espirales y antenas de cobre, César Arce muestra cómo unirse a este circuito ancestral.",
    },
    amazon_url: 'https://www.amazon.com/dp/B0FRSJYRY1',
    cover_image_url: '/images/books/Electroculture.png',
    tags: ['Electroculture', 'Plant Growth', 'Copper Antenna', 'Atmospheric Energy', 'Regenerative Agriculture'],
    published_at: '2024-05-01',
  },
  biomagnetism: {
    id: '6', slug: 'biomagnetism',
    title: {
      en: "Biomagnetism: The Biohacker's Guide Collection",
      'fr-CA': "Biomagnétisme : La Collection du Guide du Biohacker",
      es: "Biomagnetismo: La Colección de la Guía del Biohacker",
    },
    description: {
      en: "Biomagnetism explores how the body's own magnetic fields regulate health at the cellular level. Drawing on the pioneering work of Dr. Isaac Goiz and decades of clinical research, this volume introduces biomagnetic pair therapy — using magnets to neutralize pathogens, restore pH balance, and activate the body's self-healing intelligence. A paradigm-shifting guide for anyone ready to explore the magnetic dimension of human health.",
      'fr-CA': "Le Biomagnétisme explore comment les champs magnétiques du corps régulent la santé au niveau cellulaire. S'appuyant sur les travaux pionniers du Dr Isaac Goiz, ce volume introduit la thérapie par paires biomagnétiques — utiliser des aimants pour neutraliser les agents pathogènes, restaurer l'équilibre du pH et activer l'intelligence autocurante du corps.",
      es: "El Biomagnetismo explora cómo los campos magnéticos del cuerpo regulan la salud a nivel celular. Basándose en el trabajo pionero del Dr. Isaac Goiz, este volumen introduce la terapia de par biomagnético — usar imanes para neutralizar patógenos, restaurar el equilibrio del pH y activar la inteligencia autocurativa del cuerpo. Una guía que cambia paradigmas para quienes están listos para explorar la dimensión magnética de la salud humana.",
    },
    amazon_url: '',
    cover_image_url: '/images/books/Biomagnetism.png',
    tags: ['Biomagnetism', 'Magnetic Therapy', 'pH Balance', 'Energy Health', 'Self-Healing'],
    published_at: '2025-12-01',
    coming_soon: true,
  },
};

// ── Static params ──────────────────────────────────────────────────────────────
export async function generateStaticParams() {
  try {
    const books = await getBooks();
    return books.map((b) => ({ slug: b.slug }));
  } catch {
    return Object.keys(FALLBACK).map((slug) => ({ slug }));
  }
}

// ── Metadata ───────────────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  let book: Book | null = FALLBACK[slug] ?? null;
  if (!book) {
    try { book = await getBookBySlug(slug); } catch { /* ignore */ }
  }
  if (!book) return { title: 'Book Not Found' };
  const title = book.title[locale as Locale] ?? book.title['en'];
  const description = book.description[locale as Locale] ?? book.description['en'];
  return {
    title,
    description,
    openGraph: { title, description, images: book.cover_image_url ? [book.cover_image_url] : [] },
  };
}

// ── Page ───────────────────────────────────────────────────────────────────────
export default async function BookDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'books' });
  const tNav = await getTranslations({ locale, namespace: 'nav' });

  // Prioritize FALLBACK for known slugs — Supabase only supplements unknown ones
  let book: Book | null = FALLBACK[slug] ?? null;
  if (!book) {
    try { book = await getBookBySlug(slug); } catch { /* ignore */ }
  }
  if (!book) notFound();

  const title = book.title[locale as Locale] ?? book.title['en'];
  const description = book.description[locale as Locale] ?? book.description['en'];
  const learnings = KEY_LEARNINGS[slug] ?? DEFAULT_LEARNINGS;

  // Derive volume label from slug position
  const volumeOrder = ['geobiology', 'geopathies', 'radiesthesia', 'radiesthesia-radionics-booklet', 'electroculture'];
  const volumeIndex = volumeOrder.indexOf(slug);
  const volumeLabel = volumeIndex >= 0
    ? volumeIndex === 3
      ? t('practicalEdition')
      : `Volume ${['I', 'II', 'III', 'IV', 'V'][volumeIndex]}`
    : t('collectionBadge');

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-10">
          <Link href={`/${locale}`} className="hover:text-green-400 transition-colors">{tNav('home')}</Link>
          <span>/</span>
          <Link href={`/${locale}/books`} className="hover:text-green-400 transition-colors">{t('title')}</Link>
          <span>/</span>
          <span className="text-zinc-300 truncate">{title}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Cover */}
          <div className="sticky top-24">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-zinc-800 shadow-2xl shadow-black/60 border border-zinc-700">
              {book.cover_image_url ? (
                <Image src={book.cover_image_url} alt={title} fill className="object-cover" />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-zinc-800 to-zinc-900">
                  <div className="w-20 h-20 rounded-2xl bg-green-400/10 border border-green-400/20 flex items-center justify-center text-5xl">
                    📗
                  </div>
                  <p className="text-zinc-500 text-sm">Cover coming soon</p>
                </div>
              )}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {book.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 text-xs rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700">
                  {tag}
                </span>
              ))}
            </div>

            {/* Author */}
            <p className="mt-4 text-zinc-500 text-sm text-center">
              by <span className="text-zinc-300 font-medium">César Arce</span>
            </p>
          </div>

          {/* Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full border border-green-400/40 text-green-400 bg-green-400/10">
                {t('collectionBadge')}
              </span>
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full border border-zinc-700 text-zinc-500">
                {volumeLabel}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {title}
            </h1>

            <div className="space-y-4 mb-8">
              {description.split('\n\n').map((para, i) => (
                <p key={i} className="text-zinc-400 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* CTA */}
            <a
              href={buildAmazonUrl(book.amazon_url)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-green-400 text-zinc-950 font-bold rounded-xl hover:bg-green-300 transition-colors text-lg mb-4 w-full justify-center"
            >
              <span>🛒</span>
              {t('buyOnAmazon')}
            </a>

            <p className="text-zinc-600 text-xs text-center mb-10">
              {t('affiliateNote')}
            </p>

            {/* What you'll learn */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h2 className="text-white font-bold text-lg mb-4">🧭 {t('insideDiscover')}</h2>
              <ul className="space-y-3">
                {learnings.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-zinc-400 text-sm">
                    <span className="text-green-400 mt-0.5 flex-shrink-0">✅</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Every reference verified note */}
            <p className="mt-6 text-zinc-600 text-xs italic text-center">
              {t('referencesNote')}
            </p>
          </div>
        </div>

        {/* Back link */}
        <div className="mt-16 pt-8 border-t border-zinc-800">
          <Link
            href={`/${locale}/books`}
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-green-400 transition-colors"
          >
            ← {t('title')}
          </Link>
        </div>
      </div>
    </div>
  );
}
