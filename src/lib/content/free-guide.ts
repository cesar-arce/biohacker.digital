export interface Protocol {
  number: string;
  category: string;
  title: string;
  summary: string;
  protocol: string[];
  tip: string;
  volume: string;
  color: string;
}

export interface FreeGuideContent {
  meta: { title: string; description: string };
  heading: string;
  subheading: string;
  intro: string;
  savePdf: string;
  exploreCollection: string;
  theProtocols: string;
  wantDeeper: string;
  fullCollection: string;
  getBooks: string;
  fieldNote: string;
  protocols: Protocol[];
}

const en: FreeGuideContent = {
  meta: {
    title: "Free Guide — Top 10 Biohacking Protocols | The Biohacker's Guide",
    description: "10 essential protocols from The Biohacker's Guide Collection — geobiology, geopathies, radiesthesia, electroculture, and more.",
  },
  heading: 'Top 10 Biohacking Protocols',
  subheading: "From The Biohacker's Guide Collection",
  intro: 'Ten field-tested protocols drawn from Geobiology, Geopathies, Radiesthesia, Radionics, and Electroculture. Each one is designed for immediate, practical application — no equipment, laboratory, or prior knowledge required.',
  savePdf: '⬇ Save as PDF',
  exploreCollection: '📚 Explore the Full Collection',
  theProtocols: 'The Protocols',
  wantDeeper: 'Want to go deeper?',
  fullCollection: 'Explore the full 5-volume collection',
  getBooks: '🛒 Get the Books on Amazon',
  fieldNote: 'Field Note:',
  protocols: [
    {
      number: '01', category: 'Geobiology', color: 'green', volume: 'Volumes I & III',
      title: 'Map the Invisible Grid of Your Home',
      summary: 'The Hartmann and Curry geomagnetic grids cover the entire planet in a lattice of electromagnetic lines. Where two lines cross, biological stress accumulates. Most chronic fatigue, insomnia, and immune dysfunction begin here.',
      protocol: [
        'Choose a quiet morning when you are rested and unhurried.',
        'Hold a pair of L-rods loosely — one in each hand, elbows at 90°.',
        'Walk north-to-south in straight parallel lines, 50 cm apart, through each room.',
        'Mark every point where both rods cross inward simultaneously.',
        'Repeat east-to-west. Where two marks coincide, you have a crossing node.',
        'Move any bed, desk chair, or sofa that sits on a node — even 30 cm can be enough.',
      ],
      tip: 'The Hartmann grid lines run approximately every 2.5 m (N–S) and 2.0 m (E–W). The Curry grid runs diagonally at ~3.5 m intervals.',
    },
    {
      number: '02', category: 'Geopathies', color: 'blue', volume: 'Volume II',
      title: 'The 21-Day Bed Move Test',
      summary: 'Underground water streams create sustained electromagnetic disturbances that penetrate walls and floors. Sleeping above one for years silently depletes the immune system, disrupts cortisol rhythms, and accelerates oxidative stress.',
      protocol: [
        'Move your bed at least 1 meter from its current position — even shifting the headboard toward a different wall counts.',
        'If possible, move to a completely different room for 21 days.',
        'Keep a sleep journal: record time to fall asleep, nocturnal awakenings, and morning energy (1–10 scale).',
        'Note any changes in dream quality, morning mood, or chronic pain from day 1.',
        'After 21 days, compare your journal entries with the baseline week before the move.',
        'A 20% improvement in any metric is a strong signal of a geopathic zone in the original position.',
      ],
      tip: 'Children and animals are often more sensitive than adults. If a pet avoids a specific spot or a child refuses to stay in a room, trust that instinct.',
    },
    {
      number: '03', category: 'Radiesthesia', color: 'purple', volume: 'Volume III',
      title: 'Calibrate Your Biological Antenna',
      summary: 'The human nervous system is a magnetosensitive instrument — the same mechanism that guides migrating birds. Radiesthesia training restores your ability to detect geomagnetic anomalies directly, without instruments.',
      protocol: [
        'Practice 10 minutes daily in bare feet on natural ground (grass, earth, sand).',
        'Stand still. Close your eyes. Focus on the sensation in the soles of your feet and the palms of your hands.',
        'Begin L-rod practice only after one week of grounding sessions.',
        'Ask a clear, binary question before each scan: "Is there underground water here?" Wait for the rods to respond before moving.',
        'Validate findings with a tri-axial ELF meter (target: < 0.5 mG at sleeping positions).',
        'Keep a practice log. Accuracy improves measurably after 30 sessions.',
      ],
      tip: 'Dehydration and electromagnetic overload (heavy screen use) temporarily suppress magnetosensitivity. Hydrate well and limit screen time for 2 hours before practice.',
    },
    {
      number: '04', category: 'Radiesthesia', color: 'amber', volume: 'Volume IV',
      title: 'Pendulum Assessment for Food & Water',
      summary: 'Radionics uses subtle energy fields — not yet fully explained by conventional physics — to assess the vitality and resonance of substances. A pendulum is the simplest instrument for this work.',
      protocol: [
        'Use a pendulum of 15–20 g, suspended on a 20 cm cord. Copper or crystal are ideal.',
        'Establish your personal "yes" (clockwise rotation) and "no" (counter-clockwise or lateral) by testing known substances.',
        'Hold the pendulum 5 cm above a glass of water or food item. Allow 30–60 seconds for stabilization.',
        'Ask: "Does this substance support my health and vitality?" Observe the rotation.',
        'Test tap water vs. spring water, processed food vs. whole food to build reference patterns.',
        'Record results and cross-reference with how you feel 2 hours after consuming each item.',
      ],
      tip: 'The pendulum amplifies micro-muscular movements driven by the autonomic nervous system — it is not magic, it is biofeedback.',
    },
    {
      number: '05', category: 'Geobiology', color: 'green', volume: 'Volume I',
      title: 'Schumann Resonance Sleep Alignment',
      summary: 'The Earth resonates at 7.83 Hz — almost exactly matching human theta brainwaves at the boundary of sleep onset. Disruption of this resonance (by artificial EMF) directly impairs sleep architecture and immune repair.',
      protocol: [
        'Check live Schumann Resonance data each evening (SpaceWeatherLive, NOAA, or the HeartMath app).',
        'On nights with SR amplitude > 40 pT or unusual spike activity, expect lighter or more vivid sleep.',
        'Eliminate all Wi-Fi, mobile data, and smart devices from the bedroom before sleep.',
        'Use a wired alarm clock. Route power cables away from the bed head.',
        'Sleep with the body aligned north-south, head pointing north, to align with geomagnetic field lines.',
        'Record HRV (Heart Rate Variability) on waking. Correlate with SR data over 30 days.',
      ],
      tip: 'The 7.83 Hz frequency is also associated with alpha/theta meditation states. Ten minutes of grounding before bed can reinforce the connection.',
    },
    {
      number: '06', category: 'Geopathies', color: 'blue', volume: 'Volume II',
      title: 'EMF Audit of Your Living Space',
      summary: 'Exposure to man-made electromagnetic fields above biological thresholds suppresses melatonin production, impairs DNA repair, and chronically activates the sympathetic nervous system. The bedroom is the most critical zone.',
      protocol: [
        'Rent or purchase a tri-axial ELF gaussmeter. Target: < 0.5 mG (milligauss) at all sleeping positions.',
        'Measure at the pillow position, mid-mattress, and foot of bed — with all appliances in normal operation.',
        'Map every wall socket, circuit breaker panel, and smart meter location relative to bedrooms.',
        'Move the bed away from any wall shared with electrical panels or meters.',
        'Replace cordless DECT phone bases (they emit 24/7 even when not in use). Use wired phones.',
        'Turn off the Wi-Fi router at night. Use a simple mechanical timer plug for automatic shut-off.',
      ],
      tip: 'Smart meters emit RF bursts every 15–60 seconds, 24 hours a day. If your meter is on a bedroom wall, request a non-wireless ("opt-out") model from your utility.',
    },
    {
      number: '07', category: 'Electroculture', color: 'amber', volume: 'Volume V',
      title: 'Build a Copper Spiral Antenna',
      summary: 'Plants exposed to atmospheric electricity grow faster, produce more, and require less water. The Christofleau antenna — a copper spiral on a wooden stake — captures the vertical atmospheric potential gradient and channels it to the root zone.',
      protocol: [
        'Use 99.9% pure copper wire, 2 mm gauge, 3–5 m length.',
        'Wrap the wire around a wooden dowel (2–3 cm diameter) in a tight clockwise spiral — 7 or 9 turns.',
        'Leave 30 cm of straight wire at the bottom to insert into soil.',
        'Position one antenna per 4–6 m² of growing area, at the center of the bed.',
        'Orient the tip of the spiral upward, pointing toward the sky.',
        'Plant within 24 hours of installation. Compare germination rate and growth rate vs. a control row without the antenna.',
      ],
      tip: 'Ancient farmers used copper tools deliberately. Modern electroculture research by INRA (France) documents yield increases of 30–80% in some crops. The geometry matters — always wind clockwise.',
    },
    {
      number: '08', category: 'Electroculture', color: 'green', volume: 'Volume V',
      title: 'Atmospheric Water Charging',
      summary: 'Water exposed to the atmospheric electromagnetic field before irrigation absorbs a measurable energetic charge. Plants irrigated with "charged" water show increased germination speed, stronger root development, and greater drought resistance.',
      protocol: [
        'Fill an open clay or ceramic container (not plastic) with rainwater or spring water.',
        'Place it outdoors, uncovered, for 24 hours — ideally during a clear night under open sky.',
        'For enhanced charging, place a copper disc or coil at the bottom of the container.',
        'Use this water for seed soaking (12–24 hours before planting) and seedling irrigation.',
        'Compare germination rates and leaf color vs. a control group using tap water.',
        'Repeat the charging process after each rainfall to maintain supply.',
      ],
      tip: 'Ancient civilizations used clay amphorae and copper-lined cisterns for storage. These were not decorative choices — they were energetic technologies.',
    },
    {
      number: '09', category: 'Geobiology', color: 'purple', volume: 'Volumes I & III',
      title: 'Sacred Geometry Space Harmonization',
      summary: 'Traditional builders placed temples, altars, and healing centers on geomagnetic nodes where multiple ley lines converge — recognizing that these intersections amplify life-force energy rather than deplete it.',
      protocol: [
        'After mapping your home\'s grid (Protocol 01), identify any positive nodes — single-line crossings without underground water interference.',
        'These are your optimal zones for meditation, creative work, and rest.',
        'Place natural materials at key points: raw crystals, copper plates, natural wood, or salt lamps.',
        'Remove all synthetic materials and electronic devices from these zones.',
        'Spend at least 20 minutes daily in your strongest positive node — reading, meditating, or simply being still.',
        'Use a compass to orient your workspace or meditation corner to magnetic north.',
      ],
      tip: 'The original purpose of standing stone circles (Stonehenge, Carnac, Avebury) was to mark and amplify natural geomagnetic power points. Your home has them too.',
    },
    {
      number: '10', category: 'Biohacking', color: 'green', volume: 'Full Collection',
      title: 'The Daily Earth Reconnection Protocol',
      summary: 'Physical contact between bare skin and the Earth\'s surface allows free electrons to flow into the body, neutralizing free radicals and reducing systemic inflammation. This may be the simplest and most overlooked biohack available to anyone.',
      protocol: [
        'Commit to 20 minutes of daily barefoot contact with natural ground — grass, soil, sand, or stone.',
        'Morning is ideal: combine with 10 minutes of sunlight exposure to the face and forearms.',
        'If outdoor grounding is not possible, use a grounding mat connected to a properly earthed socket.',
        'During grounding, practice diaphragmatic breathing: 4 counts in, 6 counts out.',
        'After grounding, avoid synthetic footwear for at least 30 additional minutes.',
        'Track HRV, morning resting heart rate, and subjective energy (1–10) over 30 days.',
      ],
      tip: 'Research published in the Journal of Environmental and Public Health documents that grounding reduces cortisol asymmetry, improves sleep, and normalizes blood viscosity — within days, not months.',
    },
  ],
};

const es: FreeGuideContent = {
  meta: {
    title: "Guía Gratuita — Top 10 Protocolos de Biohacking | La Guía del Biohacker",
    description: "10 protocolos esenciales de La Colección de la Guía del Biohacker — geobiología, geopatías, radiestesia, electrocultura y más.",
  },
  heading: 'Top 10 Protocolos de Biohacking',
  subheading: 'De La Colección de la Guía del Biohacker',
  intro: 'Diez protocolos probados en campo, extraídos de Geobiología, Geopatías, Radiestesia, Radiónica y Electrocultura. Cada uno está diseñado para aplicación práctica e inmediata — sin equipos, laboratorio ni conocimiento previo.',
  savePdf: '⬇ Guardar como PDF',
  exploreCollection: '📚 Explorar la Colección Completa',
  theProtocols: 'Los Protocolos',
  wantDeeper: '¿Quieres profundizar?',
  fullCollection: 'Explora la colección completa de 5 volúmenes',
  getBooks: '🛒 Obtener los Libros en Amazon',
  fieldNote: 'Nota de Campo:',
  protocols: [
    {
      number: '01', category: 'Geobiología', color: 'green', volume: 'Volúmenes I y III',
      title: 'Mapea la Cuadrícula Invisible de tu Hogar',
      summary: 'Las cuadrículas geomagnéticas de Hartmann y Curry cubren todo el planeta en una red de líneas electromagnéticas. Donde se cruzan dos líneas, se acumula estrés biológico. La mayoría de los casos de fatiga crónica, insomnio y disfunción inmune comienzan aquí.',
      protocol: [
        'Elige una mañana tranquila cuando estés descansado y sin prisas.',
        'Sostén un par de varillas en L suavemente — una en cada mano, codos a 90°.',
        'Camina de norte a sur en líneas paralelas rectas, a 50 cm de distancia, por cada habitación.',
        'Marca cada punto donde ambas varillas se crucen hacia adentro simultáneamente.',
        'Repite de este a oeste. Donde coincidan dos marcas, tienes un nodo de cruce.',
        'Mueve cualquier cama, silla de escritorio o sofá que esté sobre un nodo — incluso 30 cm puede ser suficiente.',
      ],
      tip: 'Las líneas de la cuadrícula de Hartmann discurren aproximadamente cada 2,5 m (N–S) y 2,0 m (E–O). La cuadrícula de Curry discurre diagonalmente con intervalos de ~3,5 m.',
    },
    {
      number: '02', category: 'Geopatías', color: 'blue', volume: 'Volumen II',
      title: 'La Prueba de 21 Días Moviendo la Cama',
      summary: 'Las corrientes de agua subterráneas crean perturbaciones electromagnéticas sostenidas que atraviesan paredes y suelos. Dormir sobre una de ellas durante años agota silenciosamente el sistema inmunitario, altera los ritmos del cortisol y acelera el estrés oxidativo.',
      protocol: [
        'Mueve tu cama al menos 1 metro de su posición actual — incluso desplazar el cabecero hacia otra pared cuenta.',
        'Si es posible, muévete a una habitación completamente diferente durante 21 días.',
        'Lleva un diario de sueño: anota el tiempo para dormirte, los despertares nocturnos y la energía matutina (escala 1–10).',
        'Observa cualquier cambio en la calidad de los sueños, el humor matutino o el dolor crónico desde el día 1.',
        'Después de 21 días, compara las anotaciones del diario con la semana base anterior al cambio.',
        'Una mejora del 20% en cualquier métrica es una señal clara de zona geopática en la posición original.',
      ],
      tip: 'Los niños y los animales suelen ser más sensibles que los adultos. Si una mascota evita un lugar específico o un niño se niega a quedarse en una habitación, confía en ese instinto.',
    },
    {
      number: '03', category: 'Radiestesia', color: 'purple', volume: 'Volumen III',
      title: 'Calibra tu Antena Biológica',
      summary: 'El sistema nervioso humano es un instrumento magnetosensible — el mismo mecanismo que guía a las aves migratorias. El entrenamiento en radiestesia restaura tu capacidad de detectar anomalías geomagnéticas directamente, sin instrumentos.',
      protocol: [
        'Practica 10 minutos diarios descalzo sobre suelo natural (hierba, tierra, arena).',
        'Quédate quieto. Cierra los ojos. Enfócate en la sensación en las plantas de los pies y las palmas de las manos.',
        'Comienza la práctica con varillas L solo después de una semana de sesiones de earthing.',
        'Formula una pregunta binaria clara antes de cada exploración: "¿Hay agua subterránea aquí?" Espera la respuesta de las varillas antes de moverte.',
        'Valida los hallazgos con un gaussímetro ELF triaxial (objetivo: < 0,5 mG en las posiciones de descanso).',
        'Lleva un registro de práctica. La precisión mejora notablemente después de 30 sesiones.',
      ],
      tip: 'La deshidratación y la sobrecarga electromagnética (uso intensivo de pantallas) suprimen temporalmente la magnetosensibilidad. Hidrátate bien y limita el tiempo de pantalla 2 horas antes de practicar.',
    },
    {
      number: '04', category: 'Radiestesia', color: 'amber', volume: 'Volumen IV',
      title: 'Evaluación con Péndulo para Alimentos y Agua',
      summary: 'La Radiónica utiliza campos de energía sutil — aún no explicados completamente por la física convencional — para evaluar la vitalidad y la resonancia de las sustancias. El péndulo es el instrumento más sencillo para este trabajo.',
      protocol: [
        'Usa un péndulo de 15–20 g, suspendido en un cordón de 20 cm. El cobre o el cristal son ideales.',
        'Establece tu "sí" personal (rotación en sentido horario) y tu "no" (en sentido antihorario o lateral) usando sustancias conocidas.',
        'Sostén el péndulo a 5 cm sobre un vaso de agua o un alimento. Permite 30–60 segundos de estabilización.',
        'Pregunta: "¿Esta sustancia favorece mi salud y vitalidad?" Observa la rotación.',
        'Compara agua del grifo vs. agua de manantial, alimentos procesados vs. alimentos integrales para crear patrones de referencia.',
        'Anota los resultados y compáralos con cómo te sientes 2 horas después de consumir cada alimento.',
      ],
      tip: 'El péndulo amplifica movimientos musculares microscópicos impulsados por el sistema nervioso autónomo — no es magia, es biofeedback.',
    },
    {
      number: '05', category: 'Geobiología', color: 'green', volume: 'Volumen I',
      title: 'Alineación del Sueño con la Resonancia Schumann',
      summary: 'La Tierra resuena a 7,83 Hz — casi exactamente igual que las ondas cerebrales theta en el umbral del inicio del sueño. La alteración de esta resonancia (por CEM artificiales) deteriora directamente la arquitectura del sueño y la reparación inmunitaria.',
      protocol: [
        'Consulta datos en directo de la Resonancia Schumann cada noche (SpaceWeatherLive, NOAA o la app de HeartMath).',
        'En noches con amplitud SR > 40 pT o actividad de picos inusuales, espera un sueño más ligero o vívido.',
        'Elimina todo el Wi-Fi, los datos móviles y los dispositivos inteligentes del dormitorio antes de dormir.',
        'Usa un despertador con cable. Aleja los cables de alimentación de la cabecera de la cama.',
        'Duerme con el cuerpo alineado de norte a sur, con la cabeza apuntando al norte, para alinearte con las líneas del campo geomagnético.',
        'Registra la VFC (Variabilidad de la Frecuencia Cardíaca) al despertar. Correla con los datos de SR durante 30 días.',
      ],
      tip: 'La frecuencia de 7,83 Hz también se asocia con estados de meditación alfa/theta. Diez minutos de earthing antes de dormir pueden reforzar la conexión.',
    },
    {
      number: '06', category: 'Geopatías', color: 'blue', volume: 'Volumen II',
      title: 'Auditoría CEM de tu Espacio Vital',
      summary: 'La exposición a campos electromagnéticos artificiales por encima de los umbrales biológicos suprime la producción de melatonina, deteriora la reparación del ADN y activa crónicamente el sistema nervioso simpático. El dormitorio es la zona más crítica.',
      protocol: [
        'Alquila o compra un gaussímetro ELF triaxial. Objetivo: < 0,5 mG (miligauss) en todas las posiciones de descanso.',
        'Mide en la posición de la almohada, el centro del colchón y los pies de la cama — con todos los aparatos en funcionamiento normal.',
        'Mapea cada enchufe, cuadro eléctrico y contador inteligente en relación con los dormitorios.',
        'Aleja la cama de cualquier pared compartida con paneles eléctricos o contadores.',
        'Reemplaza las bases de teléfonos inalámbricos DECT (emiten 24/7 aunque no estén en uso). Usa teléfonos con cable.',
        'Apaga el router Wi-Fi por la noche. Usa un temporizador mecánico para el apagado automático.',
      ],
      tip: 'Los contadores inteligentes emiten pulsos de radiofrecuencia cada 15–60 segundos, 24 horas al día. Si tu contador está en una pared del dormitorio, solicita un modelo sin conexión inalámbrica a tu compañía eléctrica.',
    },
    {
      number: '07', category: 'Electrocultura', color: 'amber', volume: 'Volumen V',
      title: 'Construye una Antena Espiral de Cobre',
      summary: 'Las plantas expuestas a la electricidad atmosférica crecen más rápido, producen más y necesitan menos agua. La antena Christofleau — una espiral de cobre en una estaca de madera — capta el gradiente de potencial atmosférico y lo canaliza hacia la zona radicular.',
      protocol: [
        'Usa hilo de cobre puro al 99,9%, calibre 2 mm, longitud 3–5 m.',
        'Enrolla el hilo alrededor de una varilla de madera (2–3 cm de diámetro) en una espiral apretada en sentido horario — 7 o 9 vueltas.',
        'Deja 30 cm de hilo recto en la parte inferior para insertar en el suelo.',
        'Coloca una antena por cada 4–6 m² de área de cultivo, en el centro del bancal.',
        'Orienta la punta de la espiral hacia arriba, apuntando al cielo.',
        'Planta en las 24 horas siguientes a la instalación. Compara la tasa de germinación y el crecimiento con una fila de control sin antena.',
      ],
      tip: 'Los agricultores antiguos usaban herramientas de cobre deliberadamente. La investigación moderna en electrocultura del INRA (Francia) documenta aumentos de rendimiento del 30–80% en algunos cultivos. La geometría importa — enrolla siempre en sentido horario.',
    },
    {
      number: '08', category: 'Electrocultura', color: 'green', volume: 'Volumen V',
      title: 'Carga Atmosférica del Agua de Riego',
      summary: 'El agua expuesta al campo electromagnético atmosférico antes del riego absorbe una carga energética medible. Las plantas regadas con agua "cargada" muestran mayor velocidad de germinación, desarrollo radicular más robusto y mayor resistencia a la sequía.',
      protocol: [
        'Llena un recipiente abierto de barro o cerámica (no plástico) con agua de lluvia o agua de manantial.',
        'Colócalo al aire libre, sin tapar, durante 24 horas — idealmente una noche clara bajo el cielo abierto.',
        'Para potenciar la carga, coloca un disco o bobina de cobre en el fondo del recipiente.',
        'Usa esta agua para remojar semillas (12–24 horas antes de plantar) y regar plántulas.',
        'Compara las tasas de germinación y el color de las hojas con un grupo de control regado con agua del grifo.',
        'Repite el proceso de carga después de cada lluvia para mantener el suministro.',
      ],
      tip: 'Las civilizaciones antiguas usaban ánforas de barro y cisternas revestidas de cobre para almacenar agua. No era una elección decorativa — eran tecnologías energéticas.',
    },
    {
      number: '09', category: 'Geobiología', color: 'purple', volume: 'Volúmenes I y III',
      title: 'Armonización del Espacio con Geometría Sagrada',
      summary: 'Los constructores tradicionales emplazaban templos, altares y centros de sanación en nodos geomagnéticos donde convergen múltiples líneas ley — reconociendo que estas intersecciones amplifican la energía vital en lugar de agotarla.',
      protocol: [
        'Después de mapear la cuadrícula de tu hogar (Protocolo 01), identifica los nodos positivos — cruces de línea simple sin interferencia de agua subterránea.',
        'Estas son tus zonas óptimas para la meditación, el trabajo creativo y el descanso.',
        'Coloca materiales naturales en puntos clave: cristales en bruto, placas de cobre, madera natural o lámparas de sal.',
        'Elimina todos los materiales sintéticos y dispositivos electrónicos de estas zonas.',
        'Pasa al menos 20 minutos al día en tu nodo positivo más potente — leyendo, meditando o simplemente en quietud.',
        'Usa una brújula para orientar tu espacio de trabajo o rincón de meditación hacia el norte magnético.',
      ],
      tip: 'El propósito original de los círculos de piedra en pie (Stonehenge, Carnac, Avebury) era marcar y amplificar los puntos de poder geomagnético naturales. Tu hogar también los tiene.',
    },
    {
      number: '10', category: 'Biohacking', color: 'green', volume: 'Colección Completa',
      title: 'El Protocolo Diario de Reconexión con la Tierra',
      summary: 'El contacto físico entre la piel desnuda y la superficie de la Tierra permite que los electrones libres fluyan hacia el cuerpo, neutralizando los radicales libres y reduciendo la inflamación sistémica. Este puede ser el biohack más sencillo y más ignorado al alcance de cualquier persona.',
      protocol: [
        'Comprométete a 20 minutos diarios de contacto descalzo con suelo natural — hierba, tierra, arena o piedra.',
        'La mañana es ideal: combínalo con 10 minutos de exposición solar en la cara y los antebrazos.',
        'Si el earthing al aire libre no es posible, usa una alfombrilla de earthing conectada a una toma de tierra adecuada.',
        'Durante el earthing, practica respiración diafragmática: 4 tiempos al inhalar, 6 al exhalar.',
        'Después del earthing, evita el calzado sintético durante al menos 30 minutos adicionales.',
        'Registra la VFC, la frecuencia cardíaca en reposo matutina y la energía subjetiva (1–10) durante 30 días.',
      ],
      tip: 'Investigaciones publicadas en el Journal of Environmental and Public Health documentan que el earthing reduce la asimetría del cortisol, mejora el sueño y normaliza la viscosidad sanguínea — en días, no meses.',
    },
  ],
};

const fr: FreeGuideContent = {
  meta: {
    title: "Guide Gratuit — Top 10 Protocoles de Biohacking | Le Guide du Biohacker",
    description: "10 protocoles essentiels de La Collection du Guide du Biohacker — géobiologie, géopathies, radiesthésie, électroculture et plus.",
  },
  heading: 'Top 10 Protocoles de Biohacking',
  subheading: 'De La Collection du Guide du Biohacker',
  intro: 'Dix protocoles éprouvés sur le terrain, tirés de la Géobiologie, des Géopathies, de la Radiesthésie, de la Radionique et de l\'Électroculture. Chacun est conçu pour une application pratique et immédiate — sans équipement, laboratoire ni connaissances préalables.',
  savePdf: '⬇ Enregistrer en PDF',
  exploreCollection: '📚 Explorer la Collection Complète',
  theProtocols: 'Les Protocoles',
  wantDeeper: 'Vous voulez aller plus loin ?',
  fullCollection: 'Explorez la collection complète en 5 volumes',
  getBooks: '🛒 Obtenir les Livres sur Amazon',
  fieldNote: 'Note de Terrain :',
  protocols: [
    {
      number: '01', category: 'Géobiologie', color: 'green', volume: 'Volumes I et III',
      title: 'Cartographier la Grille Invisible de votre Maison',
      summary: 'Les grilles géomagnétiques de Hartmann et Curry couvrent toute la planète d\'un réseau de lignes électromagnétiques. Là où deux lignes se croisent, le stress biologique s\'accumule. La plupart des cas de fatigue chronique, d\'insomnie et de dysfonction immunitaire commencent ici.',
      protocol: [
        'Choisissez un matin calme où vous êtes reposé et sans hâte.',
        'Tenez une paire de baguettes en L délicatement — une dans chaque main, coudes à 90°.',
        'Marchez du nord au sud en lignes parallèles droites, à 50 cm d\'intervalle, dans chaque pièce.',
        'Marquez chaque point où les deux baguettes se croisent simultanément vers l\'intérieur.',
        'Répétez d\'est en ouest. Là où deux marques coïncident, vous avez un nœud de croisement.',
        'Déplacez tout lit, chaise de bureau ou canapé situé sur un nœud — même 30 cm peuvent suffire.',
      ],
      tip: 'Les lignes de la grille de Hartmann courent environ tous les 2,5 m (N–S) et 2,0 m (E–O). La grille de Curry court en diagonale à des intervalles de ~3,5 m.',
    },
    {
      number: '02', category: 'Géopathies', color: 'blue', volume: 'Volume II',
      title: 'Le Test des 21 Jours : Déplacer le Lit',
      summary: 'Les cours d\'eau souterrains créent des perturbations électromagnétiques soutenues qui traversent murs et planchers. Dormir au-dessus pendant des années épuise silencieusement le système immunitaire, perturbe les rythmes du cortisol et accélère le stress oxydatif.',
      protocol: [
        'Déplacez votre lit d\'au moins 1 mètre de sa position actuelle — même déplacer la tête de lit vers un autre mur compte.',
        'Si possible, déménagez dans une pièce complètement différente pendant 21 jours.',
        'Tenez un journal du sommeil : notez le temps d\'endormissement, les éveils nocturnes et l\'énergie matinale (échelle 1–10).',
        'Notez tout changement dans la qualité des rêves, l\'humeur matinale ou les douleurs chroniques dès le jour 1.',
        'Après 21 jours, comparez les entrées du journal avec la semaine de référence avant le déplacement.',
        'Une amélioration de 20 % dans n\'importe quelle métrique est un signal fort de zone géopathique à la position originale.',
      ],
      tip: 'Les enfants et les animaux sont souvent plus sensibles que les adultes. Si un animal de compagnie évite un endroit précis ou qu\'un enfant refuse de rester dans une pièce, faites confiance à cet instinct.',
    },
    {
      number: '03', category: 'Radiesthésie', color: 'purple', volume: 'Volume III',
      title: 'Calibrer votre Antenne Biologique',
      summary: 'Le système nervieux humain est un instrument magnétosensible — le même mécanisme qui guide les oiseaux migrateurs. L\'entraînement à la radiesthésie restaure votre capacité à détecter directement les anomalies géomagnétiques, sans instruments.',
      protocol: [
        'Pratiquez 10 minutes par jour pieds nus sur un sol naturel (herbe, terre, sable).',
        'Restez immobile. Fermez les yeux. Concentrez-vous sur la sensation dans la plante des pieds et la paume des mains.',
        'Commencez la pratique des baguettes en L seulement après une semaine de sessions d\'ancrage.',
        'Posez une question binaire claire avant chaque exploration : "Y a-t-il de l\'eau souterraine ici ?" Attendez la réponse des baguettes avant de bouger.',
        'Validez les résultats avec un gaussmètre ELF triaxial (objectif : < 0,5 mG aux positions de sommeil).',
        'Tenez un journal de pratique. La précision s\'améliore notablement après 30 sessions.',
      ],
      tip: 'La déshydratation et la surcharge électromagnétique (utilisation intensive des écrans) suppriment temporairement la magnétosensibilité. Hydratez-vous bien et limitez le temps d\'écran 2 heures avant la pratique.',
    },
    {
      number: '04', category: 'Radiesthésie', color: 'amber', volume: 'Volume IV',
      title: 'Évaluation au Pendule pour Aliments et Eau',
      summary: 'La Radionique utilise des champs d\'énergie subtile — pas encore entièrement expliqués par la physique conventionnelle — pour évaluer la vitalité et la résonance des substances. Le pendule est l\'instrument le plus simple pour ce travail.',
      protocol: [
        'Utilisez un pendule de 15–20 g, suspendu à un cordon de 20 cm. Le cuivre ou le cristal sont idéaux.',
        'Établissez votre "oui" personnel (rotation horaire) et votre "non" (anti-horaire ou latéral) en testant des substances connues.',
        'Tenez le pendule à 5 cm au-dessus d\'un verre d\'eau ou d\'un aliment. Accordez 30–60 secondes de stabilisation.',
        'Demandez : "Cette substance soutient-elle ma santé et ma vitalité ?" Observez la rotation.',
        'Testez eau du robinet vs. eau de source, aliments transformés vs. aliments complets pour construire des modèles de référence.',
        'Notez les résultats et comparez avec ce que vous ressentez 2 heures après avoir consommé chaque aliment.',
      ],
      tip: 'Le pendule amplifie les micro-mouvements musculaires entraînés par le système nerveux autonome — ce n\'est pas de la magie, c\'est du biofeedback.',
    },
    {
      number: '05', category: 'Géobiologie', color: 'green', volume: 'Volume I',
      title: 'Alignement du Sommeil sur la Résonance Schumann',
      summary: 'La Terre résonne à 7,83 Hz — presque exactement comme les ondes cérébrales thêta à la frontière de l\'endormissement. La perturbation de cette résonance (par des CEM artificiels) détériore directement l\'architecture du sommeil et la réparation immunitaire.',
      protocol: [
        'Consultez les données en direct de la Résonance Schumann chaque soir (SpaceWeatherLive, NOAA ou l\'app HeartMath).',
        'Les nuits avec une amplitude SR > 40 pT ou une activité de pics inhabituelle, attendez-vous à un sommeil plus léger ou plus vivace.',
        'Éliminez tout le Wi-Fi, les données mobiles et les appareils intelligents de la chambre avant de dormir.',
        'Utilisez un réveil filaire. Éloignez les câbles d\'alimentation de la tête de lit.',
        'Dormez avec le corps aligné nord-sud, tête pointant vers le nord, pour vous aligner avec les lignes du champ géomagnétique.',
        'Enregistrez la VRC (Variabilité de la Fréquence Cardiaque) au réveil. Corrélez avec les données SR sur 30 jours.',
      ],
      tip: 'La fréquence de 7,83 Hz est également associée aux états de méditation alpha/thêta. Dix minutes d\'ancrage avant le coucher peuvent renforcer la connexion.',
    },
    {
      number: '06', category: 'Géopathies', color: 'blue', volume: 'Volume II',
      title: 'Audit CEM de votre Espace de Vie',
      summary: 'L\'exposition à des champs électromagnétiques artificiels au-dessus des seuils biologiques supprime la production de mélatonine, altère la réparation de l\'ADN et active chroniquement le système nerveux sympathique. La chambre à coucher est la zone la plus critique.',
      protocol: [
        'Louez ou achetez un gaussmètre ELF triaxial. Objectif : < 0,5 mG (milligauss) à toutes les positions de sommeil.',
        'Mesurez à la position de l\'oreiller, au milieu du matelas et au pied du lit — avec tous les appareils en fonctionnement normal.',
        'Cartographiez chaque prise murale, tableau électrique et compteur intelligent par rapport aux chambres.',
        'Éloignez le lit de tout mur partagé avec des tableaux électriques ou des compteurs.',
        'Remplacez les bases de téléphones sans fil DECT (elles émettent 24h/24 même inutilisées). Utilisez des téléphones filaires.',
        'Éteignez le routeur Wi-Fi la nuit. Utilisez une prise minuterie mécanique pour l\'extinction automatique.',
      ],
      tip: 'Les compteurs intelligents émettent des impulsions RF toutes les 15–60 secondes, 24 heures sur 24. Si votre compteur est sur un mur de chambre, demandez un modèle sans fil ("opt-out") à votre fournisseur d\'énergie.',
    },
    {
      number: '07', category: 'Électroculture', color: 'amber', volume: 'Volume V',
      title: 'Construire une Antenne Spirale en Cuivre',
      summary: 'Les plantes exposées à l\'électricité atmosphérique poussent plus vite, produisent davantage et nécessitent moins d\'eau. L\'antenne Christofleau — une spirale de cuivre sur un tuteur en bois — capte le gradient de potentiel atmosphérique et le canalise vers la zone racinaire.',
      protocol: [
        'Utilisez du fil de cuivre pur à 99,9 %, calibre 2 mm, longueur 3–5 m.',
        'Enroulez le fil autour d\'un goujon en bois (2–3 cm de diamètre) en une spirale serrée dans le sens horaire — 7 ou 9 tours.',
        'Laissez 30 cm de fil droit au bas pour l\'insérer dans le sol.',
        'Positionnez une antenne pour 4–6 m² de surface de culture, au centre du carré.',
        'Orientez la pointe de la spirale vers le haut, pointant vers le ciel.',
        'Plantez dans les 24 heures suivant l\'installation. Comparez le taux de germination et la croissance avec un rang témoin sans antenne.',
      ],
      tip: 'Les agriculteurs anciens utilisaient des outils en cuivre délibérément. La recherche moderne en électroculture de l\'INRA (France) documente des augmentations de rendement de 30–80 % pour certaines cultures. La géométrie compte — enroulez toujours dans le sens horaire.',
    },
    {
      number: '08', category: 'Électroculture', color: 'green', volume: 'Volume V',
      title: 'Charge Atmosphérique de l\'Eau d\'Irrigation',
      summary: 'L\'eau exposée au champ électromagnétique atmosphérique avant l\'irrigation absorbe une charge énergétique mesurable. Les plantes irriguées avec de l\'eau "chargée" montrent une vitesse de germination accrue, un développement racinaire plus solide et une plus grande résistance à la sécheresse.',
      protocol: [
        'Remplissez un récipient ouvert en argile ou céramique (pas en plastique) avec de l\'eau de pluie ou de source.',
        'Placez-le à l\'extérieur, à découvert, pendant 24 heures — idéalement une nuit claire sous un ciel ouvert.',
        'Pour une charge renforcée, placez un disque ou une bobine de cuivre au fond du récipient.',
        'Utilisez cette eau pour le trempage des graines (12–24 heures avant la plantation) et l\'irrigation des semis.',
        'Comparez les taux de germination et la couleur des feuilles avec un groupe témoin utilisant l\'eau du robinet.',
        'Répétez le processus de charge après chaque pluie pour maintenir l\'approvisionnement.',
      ],
      tip: 'Les civilisations antiques utilisaient des amphores en argile et des citernes doublées de cuivre pour le stockage. Ce n\'était pas un choix décoratif — c\'étaient des technologies énergétiques.',
    },
    {
      number: '09', category: 'Géobiologie', color: 'purple', volume: 'Volumes I et III',
      title: 'Harmonisation de l\'Espace par Géométrie Sacrée',
      summary: 'Les bâtisseurs traditionnels plaçaient temples, autels et centres de guérison sur des nœuds géomagnétiques où convergent plusieurs lignes ley — reconnaissant que ces intersections amplifient l\'énergie vitale plutôt qu\'elles ne l\'épuisent.',
      protocol: [
        'Après avoir cartographié la grille de votre maison (Protocole 01), identifiez les nœuds positifs — croisements de lignes simples sans interférence d\'eau souterraine.',
        'Ce sont vos zones optimales pour la méditation, le travail créatif et le repos.',
        'Placez des matériaux naturels aux points clés : cristaux bruts, plaques de cuivre, bois naturel ou lampes de sel.',
        'Retirez tous les matériaux synthétiques et appareils électroniques de ces zones.',
        'Passez au moins 20 minutes par jour dans votre nœud positif le plus puissant — à lire, méditer ou simplement être présent.',
        'Utilisez une boussole pour orienter votre espace de travail ou coin méditation vers le nord magnétique.',
      ],
      tip: 'Le but originel des cercles de pierres levées (Stonehenge, Carnac, Avebury) était de marquer et d\'amplifier les points de puissance géomagnétique naturels. Votre maison en possède aussi.',
    },
    {
      number: '10', category: 'Biohacking', color: 'green', volume: 'Collection Complète',
      title: 'Le Protocole Quotidien de Reconnexion à la Terre',
      summary: 'Le contact physique entre la peau nue et la surface de la Terre permet aux électrons libres de pénétrer dans le corps, neutralisant les radicaux libres et réduisant l\'inflammation systémique. C\'est peut-être le biohack le plus simple et le plus négligé accessible à tous.',
      protocol: [
        'Engagez-vous à 20 minutes de contact quotidien pieds nus sur un sol naturel — herbe, terre, sable ou pierre.',
        'Le matin est idéal : combinez avec 10 minutes d\'exposition solaire sur le visage et les avant-bras.',
        'Si l\'ancrage en plein air n\'est pas possible, utilisez un tapis de mise à la terre connecté à une prise correctement mise à la terre.',
        'Pendant l\'ancrage, pratiquez la respiration diaphragmatique : 4 temps à l\'inspiration, 6 à l\'expiration.',
        'Après l\'ancrage, évitez les chaussures synthétiques pendant au moins 30 minutes supplémentaires.',
        'Suivez la VRC, la fréquence cardiaque au repos le matin et l\'énergie subjective (1–10) sur 30 jours.',
      ],
      tip: 'Des recherches publiées dans le Journal of Environmental and Public Health documentent que l\'ancrage réduit l\'asymétrie du cortisol, améliore le sommeil et normalise la viscosité sanguine — en jours, pas en mois.',
    },
  ],
};

export const freeGuideContent: Record<string, FreeGuideContent> = {
  en,
  es,
  'fr-CA': fr,
};
