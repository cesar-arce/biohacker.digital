'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';

const AFFILIATE_TAG = 'biohackerdigi-20';

const PRODUCTS = [
  {
    id: 1, category: 'Dowsing',
    name: 'Copper Dowsing Rods – L Rods for Radiesthesia & Water Finding',
    description: 'A sensitive tool that responds to magnetic field variations and subtle energies. Ideal for detecting Hartmann and Curry grid lines, underground water, and geopathic zones.',
    url: `https://www.amazon.ca/dp/B08R6XRYVD?tag=${AFFILIATE_TAG}`,
    image: '/images/products/CopperDowsingRods.jpg',
  },
  {
    id: 2, category: 'Dowsing',
    name: 'Retractable Brass Dowsing Rods – Ghost Hunting & Water Divining',
    description: 'Steel-core retractable rods with freely rotating handles. Adjustable length for field use — designed to detect underground veins, lost objects, and energetic anomalies.',
    url: `https://www.amazon.ca/dp/B09VKTJQD6?tag=${AFFILIATE_TAG}`,
    image: '/images/products/RetractilDowsingRods.jpg',
  },
  {
    id: 3, category: 'Dowsing',
    name: 'Deluxe Solid Copper & Brass Dowsing Rods – Chi & Spiritual Energy',
    description: 'Two 13.5" rods crafted from highly conductive copper and brass. Free-gliding handles maximize sensitivity for detecting geomagnetic variations and subtle earth energies.',
    url: `https://www.amazon.ca/dp/B08L36KW7F?tag=${AFFILIATE_TAG}`,
    image: '/images/products/DeluxDowingRods.jpg',
  },
  {
    id: 4, category: 'Dowsing',
    name: 'Copper Pendulum – Spiritual Divination & Chakra Healing',
    description: 'Bronze metal copper pendulum for divination, chakra assessment, and dowsing. Acts as an extension of the nervous system\'s electromagnetic sensitivity.',
    url: `https://www.amazon.ca/dp/B085VN1MW8?tag=${AFFILIATE_TAG}`,
    image: '/images/products/CopperPendulum.jpg',
  },
  {
    id: 5, category: 'Dowsing',
    name: 'Copper Dowsing Rod + Pendulum Kit – 16" Energy Detection Set',
    description: 'Complete radiesthesia kit: telescopic L-rod and pendulum pendant. L-shaped design for comfortable grip; flexible central axis adjusts to any detection angle.',
    url: `https://www.amazon.ca/dp/B0C5936W2Q?tag=${AFFILIATE_TAG}`,
    image: '/images/products/DowsingRods+Pendulum.jpg',
  },
  {
    id: 6, category: 'Dowsing',
    name: 'Complete Dowsing Set – 99.9% Copper Rods, Pendulum & Mat',
    description: 'Professional exploration set: 2 telescopic 99.9% pure copper rods, wooden pendulum pad, and pendant. Everything needed to begin geopathic stress detection immediately.',
    url: `https://www.amazon.ca/dp/B0GMQZVCBL?tag=${AFFILIATE_TAG}`,
    image: '/images/products/CompleteDownsingSet.jpg',
  },
  {
    id: 7, category: 'Frequency',
    name: 'Schumann Resonance Generator – 7.83 Hz Frequency Device',
    description: 'Adjustable frequency generator (0.1 Hz–100,000 Hz) with default 7.83 Hz Schumann resonance output. Uses low-drift crystal and high-precision chip for stable sine wave generation.',
    url: `https://www.amazon.ca/dp/B0DPMNTNVF?tag=${AFFILIATE_TAG}`,
    image: '/images/products/FrequencyGenerator.jpg',
  },
  {
    id: 8, category: 'Frequency',
    name: 'Orgonite Pyramid – EMF Protection with Natural Crystal & Copper Coil',
    description: 'Natural crystal orgone pyramid with healing copper coil. Used for EMF harmonization and negative energy neutralization in living and working spaces.',
    url: `https://www.amazon.ca/dp/B08J4317GN?tag=${AFFILIATE_TAG}`,
    image: '/images/products/PiramidOrgonite.jpg',
  },
  {
    id: 9, category: 'Grounding',
    name: 'GAYA Grounding Mat for Feet – 24"×16" Earthing Pad',
    description: 'Professional earthing mat for desk or bed use. 3-layer construction: skin-friendly PU top, conductive carbon center, non-slip base. Built-in 100K ohm safety resistor.',
    url: `https://www.amazon.ca/dp/B0D846VMP2?tag=${AFFILIATE_TAG}`,
    image: '/images/products/GroundingMatforFeet.jpg',
  },
  {
    id: 10, category: 'Grounding',
    name: 'Cotton EMF Grounding Mat – 5% Silver Fiber, 34"×50"',
    description: 'Quilted grounding mat with 5% silver fiber woven into organic cotton. Soft, skin-friendly, and versatile — use on bed, floor, or sofa. Includes 15ft grounding cord.',
    url: `https://www.amazon.ca/dp/B0DGG9SY5Y?tag=${AFFILIATE_TAG}`,
    image: '/images/products/GroundingMatCottonEMF.jpg',
  },
  {
    id: 11, category: 'Grounding',
    name: 'Hooga Grounding Mat – 24"×16" Conductive Carbon Pad',
    description: 'Reconnect with the Earth\'s natural energy using this conductive carbon grounding mat. Promotes improved sleep, reduced inflammation, increased energy, and faster recovery.',
    url: `https://www.amazon.ca/dp/B07VSRK68V?tag=${AFFILIATE_TAG}`,
    image: '/images/products/HoogaGroundingMat.jpg',
  },
  {
    id: 12, category: 'Grounding',
    name: 'Grounding Mat for Bed – All Sizes (King/Queen/Full/Twin)',
    description: 'Soft breathable earthing mat for all bed sizes. Use under fitted sheet or on top. Customers report falling asleep faster and waking without muscle soreness.',
    url: `https://www.amazon.ca/dp/B0DH79WW6X?tag=${AFFILIATE_TAG}`,
    image: '/images/products/GroundingMatforBed(King_Queen_Full_Twin).jpg',
  },
  {
    id: 13, category: 'Grounding',
    name: 'GAYA Grounding Bed Sheets – 95% Organic Cotton, 5% Pure Silver',
    description: 'Ultra-soft earthing sheets with pure silver threads for deep grounding during sleep. Promotes sleep quality, stress reduction, and improved circulation. Queen & King sizes.',
    url: `https://www.amazon.ca/dp/B0DS57S2J1?tag=${AFFILIATE_TAG}`,
    image: '/images/products/GroundingBedSheets.jpg',
  },
  {
    id: 14, category: 'Grounding',
    name: 'Grounding Fitted Sheets King – 12% Silver Fiber, Organic Cotton',
    description: 'High-conductivity grounding sheets with 12% silver fiber woven into organic cotton. Interlaced silver fibers maximize skin contact area for effective earthing during sleep.',
    url: `https://www.amazon.ca/dp/B0H26WGM34?tag=${AFFILIATE_TAG}`,
    image: '/images/products/GroundingSheetsKingSize.jpg',
  },
  {
    id: 15, category: 'Grounding',
    name: 'Theora Pro Barefoot Shoes – Zero Drop, Wide Toe Box (Unisex)',
    description: 'Ergonomic zero-drop barefoot shoes that strengthen foot and leg muscles with every step. Wide toe box allows natural splay. Reduces plantar fasciitis and body aches.',
    url: `https://www.amazon.ca/dp/B0DG363GG1?tag=${AFFILIATE_TAG}`,
    image: '/images/products/GroundingShoes.jpg',
  },
  {
    id: 16, category: 'Grounding',
    name: 'Comforto Max Barefoot Shoes – Ultra-Stretching, Zero-Drop Sole',
    description: 'Minimalist zero-drop shoes with ultra-wide toe box for natural splay. Aligns spine and distributes pressure evenly — relieves tension in knees, hips, and lower back.',
    url: `https://www.amazon.ca/dp/B0G2H2WDG4?tag=${AFFILIATE_TAG}`,
    image: '/images/products/GroundingShoes2.jpg',
  },
  {
    id: 17, category: 'Grounding',
    name: 'Copper Grounding Shoes – Waterproof Barefoot Hike Shoes',
    description: 'Waterproof grounding shoes with copper conductivity and enlarged toe box. Quick-drying drainage design for streams, beaches, and rainy-day walks. True amphibious experience.',
    url: `https://www.amazon.ca/dp/B0GRW9PFQH?tag=${AFFILIATE_TAG}`,
    image: '/images/products/GroundingShoes3.jpg',
  },
  {
    id: 18, category: 'Radon',
    name: 'HOUND-1011 Portable Radon Detector – 45-Day Monitoring',
    description: 'Compact continuous radon monitor (0.09–1,000 pCi/L). Supports pCi/L and Bq/m³ units. Lightweight and easy to use for basement, bedroom, and office monitoring.',
    url: `https://www.amazon.ca/dp/B0F99C4X2G?tag=${AFFILIATE_TAG}`,
    image: '/images/products/HOUND-1011_PortableRadonDetector.jpg',
  },
  {
    id: 19, category: 'Radon',
    name: 'Airthings Wave Radon – Smart Detector with Humidity & Temperature',
    description: 'Battery-operated smart radon detector with continuous monitoring and free app. Radon is the #1 cause of lung cancer in non-smokers — daily tracking is essential.',
    url: `https://www.amazon.ca/dp/B07WWV7K3K?tag=${AFFILIATE_TAG}`,
    image: '/images/products/AirthingsWaveRadon-SmartRadonDetector.jpg',
  },
  {
    id: 20, category: 'Radon',
    name: 'Airthings 325 Corentium Home 2 – Bluetooth Radon Detector',
    description: 'Updated version of the best-selling Corentium radon detector. Now with Bluetooth connectivity plus temperature and humidity sensors for complete indoor air quality monitoring.',
    url: `https://www.amazon.ca/dp/B0F84C4ZZM?tag=${AFFILIATE_TAG}`,
    image: '/images/products/Airthings325SmartDigitalRadonDetector.jpg',
  },
  {
    id: 21, category: 'Radon',
    name: 'Airthings View Radon 2989 – WiFi Monitor with Calm Tech Display',
    description: 'Advanced radon monitor with WiFi, calm-tech display, and new-generation sensor technology. Also measures humidity and temperature for complete environmental awareness.',
    url: `https://www.amazon.ca/dp/B09SQ64K7Q?tag=${AFFILIATE_TAG}`,
    image: '/images/products/AirthingsViewRadon2989-RadonMonitor.jpg',
  },
  {
    id: 22, category: 'EMF',
    name: 'ERICKHILL EMF Meter – Rechargeable LCD Electromagnetic Detector',
    description: 'Rechargeable handheld EMF detector with built-in sensor and clear LCD display. Measures magnetic field (mG/µT) and electric field (V/m). Ideal for home inspections and geopathic mapping.',
    url: `https://www.amazon.ca/dp/B08BLJM28J?tag=${AFFILIATE_TAG}`,
    image: '/images/products/ERICKHILL_EMF_Meter.jpg',
  },
  {
    id: 23, category: 'EMF',
    name: 'TriField EMF Meter TF2 – Magnetic, Electric & RF Detection',
    description: 'Professional 3-in-1 EMF meter detecting magnetic fields, electric fields, and RF (20 MHz–6 GHz including most 5G). Monitors cell towers, WiFi, Bluetooth, smart meters, and power lines.',
    url: `https://www.amazon.ca/dp/B078T2R64C?tag=${AFFILIATE_TAG}`,
    image: '/images/products/TriFieldEMF_TF2.jpg',
  },
  {
    id: 24, category: 'EMF',
    name: '3-in-1 Rechargeable EMF Meter – Electric, Magnetic & Temperature',
    description: 'Portable 3-in-1 EMF detector measuring electric fields, magnetic fields, and ambient temperature. Compact 2" LCD display with precise microchip processing for accurate readings.',
    url: `https://www.amazon.ca/dp/B0D9N6KP72?tag=${AFFILIATE_TAG}`,
    image: '/images/products/RechargeableEMFMeter.jpg',
  },
  {
    id: 25, category: 'Outlet Tester',
    name: 'Gardner Bender GRT-3500 – Standard Outlet Wiring Tester',
    description: 'Compact outlet tester with neon lamps indicating 6 common wiring conditions. Tests standard 3-prong outlets and extension cords. Essential for electrical safety audits.',
    url: `https://www.amazon.ca/dp/B000NBDTQI?tag=${AFFILIATE_TAG}`,
    image: '/images/products/OutletTester.jpg',
  },
];

const CATEGORIES = ['All', 'Dowsing', 'Grounding', 'EMF', 'Radon', 'Frequency', 'Outlet Tester'];
const PAGE_SIZE = 12;

const COPY = {
  en: {
    title: 'Biohacking Tools & Instruments',
    subtitle: 'Curated instruments for geobiological detection, grounding, EMF measurement, and environmental health.',
    buyBtn: 'Buy on Amazon',
    page: 'Page',
    of: 'of',
    affiliate: 'Amazon affiliate links — commissions support this site at no extra cost to you.',
  },
  es: {
    title: 'Herramientas & Instrumentos de Biohacking',
    subtitle: 'Instrumentos seleccionados para detección geobiológica, earthing, medición EMF y salud ambiental.',
    buyBtn: 'Comprar en Amazon',
    page: 'Página',
    of: 'de',
    affiliate: 'Links de afiliado Amazon — las comisiones apoyan este sitio sin costo adicional para ti.',
  },
  'fr-CA': {
    title: 'Outils & Instruments de Biohacking',
    subtitle: 'Instruments sélectionnés pour la détection géobiologique, la mise à la terre, la mesure CEM et la santé environnementale.',
    buyBtn: 'Acheter sur Amazon',
    page: 'Page',
    of: 'sur',
    affiliate: 'Liens affiliés Amazon — les commissions soutiennent ce site sans frais supplémentaires.',
  },
};

const CATEGORY_COLORS: Record<string, string> = {
  Dowsing:          'bg-emerald-400/10 text-emerald-400 border-emerald-400/30',
  Grounding:        'bg-amber-400/10 text-amber-400 border-amber-400/30',
  EMF:              'bg-red-400/10 text-red-400 border-red-400/30',
  Radon:            'bg-purple-400/10 text-purple-400 border-purple-400/30',
  Frequency:        'bg-blue-400/10 text-blue-400 border-blue-400/30',
  'Outlet Tester':  'bg-zinc-400/10 text-zinc-400 border-zinc-400/30',
};

export default function ProductsPage() {
  const locale = useLocale() as keyof typeof COPY;
  const c = COPY[locale] ?? COPY.en;

  const [activeCategory, setActiveCategory] = useState('All');
  const [page, setPage] = useState(1);

  const filtered = activeCategory === 'All'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function handleCategory(cat: string) {
    setActiveCategory(cat);
    setPage(1);
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase rounded-full border border-green-400/40 text-green-400 bg-green-400/10">
            Products
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{c.title}</h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">{c.subtitle}</p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                activeCategory === cat
                  ? 'bg-green-400 text-zinc-950 border-green-400'
                  : 'border-zinc-700 text-zinc-400 hover:border-green-400 hover:text-green-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product count */}
        <p className="text-zinc-600 text-sm text-center mb-8">
          {filtered.length} products · {c.page} {page} {c.of} {totalPages}
        </p>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {paginated.map((product) => (
            <div
              key={product.id}
              className="group bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-green-400/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-green-400/5 flex flex-col"
            >
              {/* Image */}
              <div className="relative aspect-square bg-zinc-800 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className={`px-2 py-0.5 text-xs font-semibold rounded-full border ${CATEGORY_COLORS[product.category] ?? 'bg-zinc-700 text-zinc-300 border-zinc-600'}`}>
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-white font-semibold text-sm leading-snug mb-2 line-clamp-2 group-hover:text-green-400 transition-colors">
                  {product.name}
                </h3>
                <p className="text-zinc-500 text-xs leading-relaxed line-clamp-3 mb-4 flex-1">
                  {product.description}
                </p>
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 bg-green-400 text-zinc-950 font-bold text-sm rounded-xl hover:bg-green-300 transition-colors"
                >
                  🛒 {c.buyBtn}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-3 mb-10">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => { setPage(p); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className={`w-10 h-10 rounded-full font-bold text-sm transition-colors border ${
                  page === p
                    ? 'bg-green-400 text-zinc-950 border-green-400'
                    : 'border-zinc-700 text-zinc-400 hover:border-green-400 hover:text-green-400'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        )}

        {/* Affiliate disclaimer */}
        <p className="text-center text-zinc-600 text-xs">{c.affiliate}</p>

      </div>
    </div>
  );
}
