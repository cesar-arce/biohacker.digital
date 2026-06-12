import { getTranslations, setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = {
    en: 'Products',
    es: 'Productos',
    'fr-CA': 'Produits',
  };
  return { title: titles[locale] ?? titles.en };
}

interface Product {
  id: string;
  name: Record<string, string>;
  description: Record<string, string>;
  tags: string[];
  image: string | null;
}

const PRODUCTS: Product[] = [
  {
    id: 'pendulum',
    name: { en: 'Professional Dowsing Pendulum', es: 'Péndulo de Radiestesia Profesional', 'fr-CA': 'Pendule de Radiesthésie Professionnel' },
    description: {
      en: 'Handcrafted pendulums in copper, brass, and crystal — calibrated for geopathic detection and energy field assessment. Perfect for practitioners of radiesthesia and geobiology.',
      es: 'Péndulos artesanales en cobre, latón y cristal — calibrados para detección geopática y evaluación de campos energéticos. Ideales para practicantes de radiestesia y geobiología.',
      'fr-CA': 'Pendules artisanaux en cuivre, laiton et cristal — calibrés pour la détection géopathique et l\'évaluation des champs énergétiques. Idéaux pour les praticiens de radiesthésie.',
    },
    tags: ['Radiesthesia', 'Dowsing', 'Copper'],
    image: null,
  },
  {
    id: 'l-rods',
    name: { en: 'L-Rods & Y-Rods Set', es: 'Set de Varillas en L y Y', 'fr-CA': 'Set Baguettes en L et Y' },
    description: {
      en: 'Precision-balanced L-rods and Y-rods in copper and stainless steel for field detection, geopathic mapping, and water source location. Includes carrying case and guide.',
      es: 'Varillas en L y Y de precisión en cobre y acero inoxidable para detección de campo, cartografía geopática y localización de fuentes de agua. Incluye estuche y guía.',
      'fr-CA': 'Baguettes en L et Y équilibrées avec précision en cuivre et acier inoxydable pour la détection de terrain, la cartographie géopathique et la localisation de sources d\'eau.',
    },
    tags: ['Dowsing Rods', 'Geopathies', 'Copper'],
    image: null,
  },
  {
    id: 'electroculture-spiral',
    name: { en: 'Electroculture Copper Spiral', es: 'Espiral de Cobre para Electrocultura', 'fr-CA': 'Spirale de Cuivre Électroculture' },
    description: {
      en: 'Hand-wound copper spirals designed to harness atmospheric electricity and stimulate plant growth — based on the Christofleau method. Available in multiple sizes for garden and field use.',
      es: 'Espirales de cobre enrolladas a mano para aprovechar la electricidad atmosférica y estimular el crecimiento vegetal — basadas en el método Christofleau. Disponibles en varios tamaños.',
      'fr-CA': 'Spirales de cuivre enroulées à la main pour capter l\'électricité atmosphérique et stimuler la croissance des plantes — méthode Christofleau. Disponibles en plusieurs tailles.',
    },
    tags: ['Electroculture', 'Copper Spiral', 'Garden'],
    image: null,
  },
  {
    id: 'emf-sensor',
    name: { en: 'Portable EMF Meter', es: 'Sensor EMF Portátil', 'fr-CA': 'Capteur EMF Portable' },
    description: {
      en: 'Compact tri-field meter for measuring electric, magnetic, and radio/microwave fields in your home or workplace. Identify electrosmog hotspots and protect your living environment.',
      es: 'Medidor trifield compacto para medir campos eléctricos, magnéticos y de radio/microondas en tu hogar o lugar de trabajo. Identifica puntos de electrosmog y protege tu entorno.',
      'fr-CA': 'Appareil trifield compact pour mesurer les champs électriques, magnétiques et radio/micro-ondes chez vous ou au travail. Identifiez les zones d\'électrosmog et protégez votre environnement.',
    },
    tags: ['EMF', 'Electrosmog', 'Health'],
    image: null,
  },
  {
    id: 'christofleau-antenna',
    name: { en: 'Christofleau Antenna', es: 'Antena Christofleau', 'fr-CA': 'Antenne Christofleau' },
    description: {
      en: 'A faithful reproduction of the Christofleau atmospheric antenna — designed to collect and channel telluric and atmospheric energy toward crops. For serious electroculture practitioners.',
      es: 'Reproducción fiel de la antena atmosférica Christofleau — diseñada para captar y canalizar energía telúrica y atmosférica hacia los cultivos. Para practicantes serios de electrocultura.',
      'fr-CA': 'Reproduction fidèle de l\'antenne atmosphérique Christofleau — conçue pour capter et canaliser l\'énergie tellurique et atmosphérique vers les cultures. Pour praticiens sérieux.',
    },
    tags: ['Electroculture', 'Antenna', 'Agriculture'],
    image: null,
  },
  {
    id: 'biohacker-kit',
    name: { en: 'Biohacker Starter Kit', es: 'Kit Inicial del Biohacker', 'fr-CA': 'Kit de Départ Biohacker' },
    description: {
      en: 'The complete beginner set: one copper pendulum, one pair of L-rods, one electroculture spiral, and access to our online workshop. Everything you need to start your exploration.',
      es: 'El set completo para principiantes: un péndulo de cobre, un par de varillas en L, una espiral de electrocultura y acceso a nuestro taller en línea. Todo para comenzar tu exploración.',
      'fr-CA': 'Le kit complet pour débutants : un pendule en cuivre, une paire de baguettes en L, une spirale d\'électroculture et accès à notre atelier en ligne. Tout pour commencer votre exploration.',
    },
    tags: ['Starter Kit', 'Bundle', 'Beginner'],
    image: null,
  },
];

// Gradient backgrounds per product (used when no image is available)
const GRADIENTS = [
  'from-amber-900/40 to-zinc-900',
  'from-zinc-700/40 to-zinc-900',
  'from-orange-900/30 to-zinc-900',
  'from-blue-900/30 to-zinc-900',
  'from-yellow-900/30 to-zinc-900',
  'from-green-900/30 to-zinc-900',
];

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'books' });

  const heading: Record<string, string> = {
    en: 'Our Store',
    es: 'Nuestra Tienda',
    'fr-CA': 'Notre Boutique',
  };
  const sub: Record<string, string> = {
    en: 'Professional tools for practitioners of radiesthesia, geobiology & electroculture.',
    es: 'Herramientas profesionales para practicantes de radiestesia, geobiología y electrocultura.',
    'fr-CA': 'Outils professionnels pour les praticiens de radiesthésie, géobiologie et électroculture.',
  };
  const comingSoon: Record<string, string> = {
    en: 'Coming Soon',
    es: 'Próximamente',
    'fr-CA': 'Bientôt disponible',
  };
  const buyLabel: Record<string, string> = {
    en: 'Buy Now',
    es: 'Comprar',
    'fr-CA': 'Acheter',
  };
  const detailsLabel: Record<string, string> = {
    en: 'Details',
    es: 'Detalles',
    'fr-CA': 'Détails',
  };

  const cs = comingSoon[locale] ?? comingSoon.en;
  const buy = buyLabel[locale] ?? buyLabel.en;
  const details = detailsLabel[locale] ?? detailsLabel.en;

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Header */}
      <div className="border-b border-zinc-800 bg-zinc-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-400/30 bg-green-400/10 mb-5">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-400 text-xs font-bold uppercase tracking-widest">{cs}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            {heading[locale] ?? heading.en}
          </h1>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            {sub[locale] ?? sub.en}
          </p>
        </div>
      </div>

      {/* Product grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product, i) => {
            const name = product.name[locale] ?? product.name.en;
            const description = product.description[locale] ?? product.description.en;
            const gradient = GRADIENTS[i % GRADIENTS.length];

            return (
              <div
                key={product.id}
                className="group relative bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-green-400/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-green-400/10"
              >
                {/* Cover / placeholder */}
                <div className={`relative aspect-[3/4] bg-gradient-to-b ${gradient} overflow-hidden`}>
                  {product.image ? (
                    <Image src={product.image} alt={name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6">
                      {/* Icon per category */}
                      <span className="text-6xl select-none opacity-30">
                        {i === 0 ? '⊙' : i === 1 ? '⟋' : i === 2 ? '⌀' : i === 3 ? '⚡' : i === 4 ? '📡' : '🎒'}
                      </span>
                      <span className="text-zinc-500 text-xs text-center font-medium tracking-wide uppercase">
                        {product.tags[0]}
                      </span>
                    </div>
                  )}

                  {/* Tags */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                    {product.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="green" className="bg-zinc-950/80 backdrop-blur-sm text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Coming Soon banner */}
                  <div className="absolute inset-0 flex items-center justify-center bg-zinc-950/55 backdrop-blur-[2px]">
                    <span className="px-5 py-2 rounded-full bg-green-400 text-zinc-950 font-bold text-sm tracking-widest uppercase shadow-lg">
                      {cs}
                    </span>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-5">
                  <h3 className="font-bold text-white text-lg leading-tight mb-2 group-hover:text-green-400 transition-colors">
                    {name}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed line-clamp-3 mb-5">
                    {description}
                  </p>

                  {/* Actions — both disabled */}
                  <div className="flex gap-2">
                    <Button className="flex-1 opacity-40 cursor-not-allowed" size="sm" disabled>
                      {buy}
                    </Button>
                    <Button variant="outline" size="sm" className="opacity-40 cursor-not-allowed" disabled>
                      {details}
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
