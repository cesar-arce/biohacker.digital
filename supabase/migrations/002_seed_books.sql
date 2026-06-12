-- Seed: The Biohacker's Guide Collection
-- Run this in Supabase SQL Editor after 001_initial_schema.sql

INSERT INTO books (slug, title, description, amazon_url, cover_image_url, tags) VALUES

(
  'geobiology',
  '{
    "en": "Geobiology: The Biohacker''s Guide Collection",
    "fr-CA": "Géobiologie : La Collection du Guide du Biohacker",
    "es": "Geobiología: La Colección de la Guía del Biohacker"
  }',
  '{
    "en": "Geobiology is the rediscovery of a forgotten science — revealing how telluric currents, underground water streams, and geomagnetic grids quietly influence your nervous system, sleep, and vitality. César Arce bridges physics, biohacking, and ancestral knowledge to show how chronic fatigue, insomnia, and inflammation can be traced to geopathic zones. Detect Hartmann and Curry lines, understand the shifting magnetic poles, and reclaim the natural coherence your body has always known.",
    "fr-CA": "La géobiologie redécouvre comment les courants telluriques et les grilles géomagnétiques influencent votre système nerveux, votre sommeil et votre vitalité. César Arce unit physique, biohacking et sagesse ancestrale pour montrer comment fatigue chronique et insomnie peuvent être liées aux zones géopathiques. Détectez les lignes de Hartmann et de Curry et retrouvez la cohérence naturelle de votre corps.",
    "es": "La geobiología redescubre cómo las corrientes telúricas y las redes geomagnéticas influyen silenciosamente en tu sistema nervioso, sueño y vitalidad. César Arce une física, biohacking y conocimiento ancestral para mostrar cómo la fatiga crónica e insomnio pueden rastrearse hasta zonas geopáticas. Detecta las líneas de Hartmann y Curry y recupera la coherencia natural de tu cuerpo."
  }',
  'https://www.amazon.com/dp/B0FJNL59YC',
  '',
  ARRAY['Geobiology', 'Geopathic Stress', 'Earth Energy', 'Home Energy', 'Biohacking']
),

(
  'geopathies',
  '{
    "en": "Geopathies: The Biohacker''s Guide Collection",
    "fr-CA": "Géopathies : La Collection du Guide du Biohacker",
    "es": "Geopatías: La Colección de la Guía del Biohacker"
  }',
  '{
    "en": "Imagine your bed resting over a geopathic stress point — what should be deep rest becomes exhausting nights. Geopathies reveals how disturbed geomagnetic fields, underground water veins, and geological faults silently erode human vitality. Combining radiesthesia with modern EMF meters, this volume guides you step by step in detecting, neutralizing, and transforming harmful energetic zones into spaces that nourish life.",
    "fr-CA": "Imaginez votre lit posé sur un point de stress géopathique — le repos devient des nuits épuisantes. Géopathies révèle comment les champs géomagnétiques perturbés, les veines d''eau souterraines et les failles géologiques érodent silencieusement la vitalité. En combinant radiesthésie et mesureurs EMF modernes, ce volume vous guide pour détecter, neutraliser et transformer les zones énergétiques néfastes.",
    "es": "Imagina tu cama sobre un punto de estrés geopático — el descanso se convierte en noches agotadoras. Geopatías revela cómo los campos geomagnéticos perturbados, las venas de agua subterráneas y las fallas geológicas erosionan silenciosamente la vitalidad. Combinando radiestesia con medidores EMF modernos, este volumen te guía para detectar, neutralizar y transformar zonas energéticas dañinas."
  }',
  'https://www.amazon.com/dp/B0FPCY2JZQ',
  '',
  ARRAY['Geopathies', 'Geopathic Stress', 'Hidden Radiation', 'Environmental Energy', 'Energy Health']
),

(
  'radiesthesia',
  '{
    "en": "Radiesthesia: The Biohacker''s Guide Collection",
    "fr-CA": "Radiesthésie : La Collection du Guide du Biohacker",
    "es": "Radiestesia: La Colección de la Guía del Biohacker"
  }',
  '{
    "en": "Radiesthesia — the art of sensing radiation — is the bridge between geobiology, geopathic stress, and the hidden forces shaping our daily lives. César Arce approaches it as a purely scientific discipline: the innate capacity of the nervous system to act as a biological antenna, tuning into variations in the Earth''s geomagnetic field. This volume unites science, history, and practical techniques to reveal how pendulums and rods can detect Earth''s geomagnetic networks and restore balance to body and mind.",
    "fr-CA": "La radiesthésie — l''art de détecter les rayonnements — est le pont entre la géobiologie, le stress géopathique et les forces cachées. César Arce l''aborde comme une discipline purement scientifique : la capacité innée du système nerveux à agir comme une antenne biologique. Ce volume unit science, histoire et techniques pratiques pour révéler comment pendules et baguettes détectent les réseaux géomagnétiques de la Terre.",
    "es": "La radiestesia — el arte de detectar radiaciones — es el puente entre la geobiología, el estrés geopático y las fuerzas ocultas. César Arce la aborda como disciplina puramente científica: la capacidad innata del sistema nervioso para actuar como antena biológica. Este volumen une ciencia, historia y técnicas prácticas para revelar cómo péndulos y varillas detectan las redes geomagnéticas de la Tierra."
  }',
  'https://www.amazon.com/dp/B0FPCY2JZQ',
  '',
  ARRAY['Radiesthesia', 'Dowsing', 'Pendulum Guide', 'Energy Work', 'Intuitive Detection']
),

(
  'radiesthesia-radionics-booklet',
  '{
    "en": "Radiesthesia & Radionics Booklet: The Biohacker''s Guide Collection",
    "fr-CA": "Radiesthésie & Radionique : La Collection du Guide du Biohacker",
    "es": "Radiestesia y Radiónica: La Colección de la Guía del Biohacker"
  }',
  '{
    "en": "This practical booklet is your step-by-step gateway into the twin sciences of Radiesthesia and Radionics — the art of sensing subtle Earth energies and the science of transmitting corrective frequencies to restore balance. César Arce distills years of research into a clear manual for beginners and advanced explorers, combining rods, pendulums, modern EMF technology, radionics symbols, and pendulum machines.",
    "fr-CA": "Ce carnet pratique est votre passerelle pas à pas vers les sciences jumelles de la Radiesthésie et de la Radionique. César Arce distille des années de recherche en un manuel clair combinant baguettes, pendules, technologie EMF moderne, symboles radioniques et machines à pendule — pour débutants et praticiens avancés.",
    "es": "Este cuaderno práctico es tu pasarela paso a paso hacia las ciencias gemelas de la Radiestesia y la Radiónica. César Arce destila años de investigación en un manual claro que combina varillas, péndulos, tecnología EMF moderna, símbolos radónicos y máquinas de péndulo — para principiantes y practicantes avanzados."
  }',
  'https://www.amazon.com/dp/B0FRMSLJCK',
  '',
  ARRAY['Radionics', 'Dowsing Tools', 'Manifestation', 'Energy Symbols', 'Practical Radiesthesia']
),

(
  'electroculture',
  '{
    "en": "Electroculture: The Biohacker''s Guide Collection",
    "fr-CA": "Électroculture : La Collection du Guide du Biohacker",
    "es": "Electrocultura: La Colección de la Guía del Biohacker"
  }',
  '{
    "en": "Between Earth''s surface and the ionosphere exists a 400,000-volt living current — the same circuit Nikola Tesla dreamed of harnessing. Electroculture: Farming with the Living Sky is the culmination of nearly thirty years of scientific research showing how atmospheric electricity, copper spirals, and simple antennas can transform soil, supercharge plant growth, and restore vitality — without chemicals, without cost, just rediscovered science.",
    "fr-CA": "Entre la surface de la Terre et l''ionosphère existe un courant vivant de 400 000 volts — le circuit que Nikola Tesla rêvait d''exploiter. L''Électroculture : Cultiver avec le Ciel Vivant est le fruit de trente ans de recherche montrant comment l''électricité atmosphérique, les spirales en cuivre et les antennes simples peuvent transformer le sol et stimuler la croissance des plantes — sans produits chimiques.",
    "es": "Entre la superficie de la Tierra y la ionósfera existe una corriente viva de 400,000 voltios — el circuito que Nikola Tesla soñaba con aprovechar. Electrocultura: Cultivando con el Cielo Vivo es el fruto de treinta años de investigación que muestra cómo la electricidad atmosférica, las espirales de cobre y las antenas simples pueden transformar el suelo y potenciar el crecimiento de plantas — sin químicos."
  }',
  'https://www.amazon.com/dp/B0FRSJYRY1',
  '',
  ARRAY['Electroculture', 'Plant Growth', 'Copper Antenna', 'Atmospheric Energy', 'Regenerative Agriculture']
)

ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  amazon_url = EXCLUDED.amazon_url,
  tags = EXCLUDED.tags;
