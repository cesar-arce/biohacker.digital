export interface Volume {
  label: string;
  title: string;
  tagline: string;
  body: string;
  slug: string;
}

export interface AboutContent {
  collectionIntro: string;
  aboutAuthorLabel: string;
  authorRole: string;
  bio: string[];
  quoteText: string;
  quoteAuthor: string;
  acknowledgementsLabel: string;
  ack1: string;
  ack2: string;
  ackClosing: string;
  podcastTitle: string;
  podcastDesc: string;
  collectionLabel: string;
  exploreAll: string;
  volumes: Volume[];
}

const en: AboutContent = {
  collectionIntro: 'Each volume in The Biohacker\'s Guide Collection is a step into the invisible architecture of life — where energy, frequency, and vibration converge with modern science to illuminate new paths to health, harmony, and reconnection with the Earth.',
  aboutAuthorLabel: 'About the Author',
  authorRole: 'Author · Storyteller · Pilot · Explorer',
  bio: [
    'Some lives are lived in straight lines. His has been a spiral — always descending deeper, always returning transformed.',
    'At six years old, beneath a canopy of stars in the World Organization of the Scout Movement, he learned to read what most people no longer see: the language of nature written in terrain, wind, and silence. Survival. Navigation. The invisible grammar of the wilderness. What began as a boy\'s adventure became a lifelong discipline of attention.',
    'That discipline carried him into the skies. As a military fighter pilot, he mastered celestial navigation — orienting himself by the same stars that had guided him as a child — and trained in jungle, sea, and desert survival, and elite parachuting operations. Altitude stripped away the noise of modern life. What remained, always, were the same subtle patterns and unseen forces he had first sensed in those early mountain camps.',
    'Then came the turn inward.',
    'Over three decades, he has dedicated himself to the ancient science of radiesthesia — the art of detecting what instruments cannot measure and language cannot easily name: the subtle energies that flow through the Earth, through water, through the living architecture of our homes and bodies. He has walked the corridors of initiatic traditions, esoteric schools, and philosophical lodges, studying the alchemical methods that transform scientific inquiry into something rarer — wisdom.',
    'The Biohacker\'s Guide Collection is the fruit of that long spiral. Not a collection of theories borrowed from others, but a body of lived knowledge — tested in the field, refined in solitude, and offered now to those who sense, as he always has, that the Earth is speaking.',
    'The question has always been the same: Are you listening?',
  ],
  quoteText: 'These five volumes are not separate books — like a fist, they are one force, one pulse, one awakening. The Earth is alive, and it speaks through energy. Geobiology, Geopathies, Radiesthesia, Radionics, and Electroculture are not fringe curiosities — they are ancient sciences rediscovered, revealing the patterns once dismissed as superstition. When you read them together, you hear not just theory, but a call: to stand differently, to plant differently, to live differently. This is the symphony of the invisible — and it is waiting for your hands to play it.',
  quoteAuthor: '— César Arce',
  acknowledgementsLabel: 'Acknowledgments',
  ack1: 'This work would never have seen the light of day without the encouragement, curiosity, and faith of those who walked beside me during its creation.',
  ack2: 'What began as a simple curiosity evolved, over the years, into a profound passion — fueled by countless conversations, shared questions, and sparks of inspiration. To all those who listened with genuine interest and urged me to keep exploring and writing, I owe a deep debt of gratitude.',
  ackClosing: 'Thank you for being part of this journey — because together, we are rewriting the way we connect with the Earth and ourselves.',
  podcastTitle: 'The Biohacker\'s Guide Podcast — on Spotify',
  podcastDesc: 'Join us each week — discoveries, practical biohacks, and inspiring conversations about health, energy, and the invisible forces that shape our lives.',
  collectionLabel: 'The Collection',
  exploreAll: '🛒 Explore All Books on Amazon',
  volumes: [
    {
      label: 'Volume I', title: 'Geobiology', slug: 'geobiology',
      tagline: 'The Earth Heals. All you must do is see Nature\'s signals.',
      body: 'Geobiology introduces the science of how the Earth\'s natural geomagnetic fields, Schumann resonances, and telluric currents influence health, sleep, and emotional balance. Discover how invisible geomagnetic grids — the Hartmann and Curry networks — intersect beneath your home, creating geopathic stress zones that silently erode your vitality. Learn to detect these disturbances and harmonize your environment to reclaim the coherence your body has always known.',
    },
    {
      label: 'Volume II', title: 'Geopathies', slug: 'geopathies',
      tagline: 'The Silent Saboteurs Beneath Your Feet.',
      body: 'Geopathies explores how underground water streams, geological faults, and geomagnetic anomalies silently disrupt biological rhythms. Combining forgotten European medical insights with modern biohacking tools, this volume reveals how to identify and neutralize the harmful zones that weaken immunity, disturb sleep, and erode long-term vitality — starting with the simplest and most powerful intervention: moving your bed.',
    },
    {
      label: 'Volume III', title: 'Radiesthesia', slug: 'radiesthesia',
      tagline: 'The Art and Science of Sensing Earth\'s Hidden Energies.',
      body: 'Radiesthesia bridges physics and ancient wisdom, training you to use rods, pendulums, and your own nervous system as instruments to detect geomagnetic fields. Grounded in the science of magnetosensitivity — the same capacity that guides migrating birds — this volume empowers you to map safe and unsafe zones in any space, reconnect with your natural energetic awareness, and recalibrate your biological antenna against modern electrosmog.',
    },
    {
      label: 'Volume IV', title: 'Radiesthesia & Radionics Booklet', slug: 'radiesthesia-radionics-booklet',
      tagline: 'From Theory to Hands-On Exploration.',
      body: 'This practical companion condenses the teachings of the previous volumes into clear step-by-step exercises. Learn to locate Hartmann and Curry lines in your home, apply pendulum techniques for environmental assessment, and explore the foundations of Radionics — a forgotten art used to evaluate vitality in foods, environments, and living beings. The essential field manual for anyone putting the science into practice.',
    },
    {
      label: 'Volume V', title: 'Electroculture', slug: 'electroculture',
      tagline: 'Farming with the Living Sky.',
      body: 'Electroculture revives a forgotten agricultural science that harnesses atmospheric electricity — the 400,000-volt potential between the Earth\'s surface and the ionosphere — to boost germination, enhance plant vitality, and multiply harvests without chemicals or heavy irrigation. From copper spirals and Christofleau antennas to simple DIY techniques inspired by Tesla, this volume blends physics, history, and hands-on practice, inviting you to reconnect with the hidden circuit between Earth and sky.',
    },
  ],
};

const es: AboutContent = {
  collectionIntro: 'Cada volumen de La Colección de la Guía del Biohacker es un paso hacia la arquitectura invisible de la vida — donde la energía, la frecuencia y la vibración convergen con la ciencia moderna para iluminar nuevos caminos hacia la salud, la armonía y la reconexión con la Tierra.',
  aboutAuthorLabel: 'Sobre el Autor',
  authorRole: 'Autor · Narrador · Piloto · Explorador',
  bio: [
    'Algunas vidas se viven en línea recta. La suya ha sido una espiral — siempre descendiendo más profundo, siempre regresando transformado.',
    'A los seis años, bajo un manto de estrellas en la Organización Mundial del Movimiento Scout, aprendió a leer lo que la mayoría de las personas ya no ve: el lenguaje de la naturaleza escrito en el terreno, el viento y el silencio. Supervivencia. Navegación. La gramática invisible de la naturaleza. Lo que comenzó como la aventura de un niño se convirtió en una disciplina de atención para toda la vida.',
    'Esa disciplina lo llevó hacia los cielos. Como piloto militar de combate, dominó la navegación celeste — orientándose por las mismas estrellas que lo habían guiado de niño — y se entrenó en supervivencia en jungla, mar y desierto, y operaciones de paracaidismo de élite. La altitud despojó todo el ruido de la vida moderna. Lo que quedaba, siempre, eran los mismos patrones sutiles y fuerzas invisibles que había sentido por primera vez en aquellos campamentos de montaña.',
    'Entonces llegó el giro hacia adentro.',
    'Durante tres décadas, se ha dedicado a la antigua ciencia de la radiestesia — el arte de detectar lo que los instrumentos no pueden medir y el lenguaje no puede nombrar fácilmente: las energías sutiles que fluyen a través de la Tierra, del agua, de la arquitectura viva de nuestros hogares y cuerpos. Ha recorrido los pasillos de tradiciones iniciáticas, escuelas esotéricas y logias filosóficas, estudiando los métodos alquímicos que transforman la investigación científica en algo más raro — sabiduría.',
    'La Colección de la Guía del Biohacker es el fruto de esa larga espiral. No una colección de teorías tomadas de otros, sino un cuerpo de conocimiento vivido — probado en el campo, refinado en soledad, y ofrecido ahora a quienes sienten, como él siempre ha sentido, que la Tierra está hablando.',
    'La pregunta siempre ha sido la misma: ¿La estás escuchando?',
  ],
  quoteText: 'Estos cinco volúmenes no son libros separados — como un puño, son una sola fuerza, un solo pulso, un solo despertar. La Tierra está viva y habla a través de la energía. La Geobiología, las Geopatías, la Radiestesia, la Radiónica y la Electrocultura no son curiosidades marginales — son ciencias antiguas redescubiertas que revelan los patrones alguna vez descartados como superstición. Cuando los lees juntos, no escuchas solo teoría, sino una llamada: a pararte de manera diferente, a sembrar de manera diferente, a vivir de manera diferente. Esta es la sinfonía de lo invisible — y está esperando que tus manos la toquen.',
  quoteAuthor: '— César Arce',
  acknowledgementsLabel: 'Agradecimientos',
  ack1: 'Este trabajo nunca habría visto la luz sin el aliento, la curiosidad y la fe de quienes caminaron junto a mí durante su creación.',
  ack2: 'Lo que comenzó como una simple curiosidad evolucionó, con los años, en una profunda pasión — impulsada por innumerables conversaciones, preguntas compartidas y destellos de inspiración. A todos los que escucharon con genuino interés y me animaron a seguir explorando y escribiendo, les debo una profunda deuda de gratitud.',
  ackClosing: 'Gracias por ser parte de este viaje — porque juntos estamos reescribiendo la manera en que nos conectamos con la Tierra y con nosotros mismos.',
  podcastTitle: 'El Podcast de La Guía del Biohacker — en Spotify',
  podcastDesc: 'Únete cada semana — descubrimientos, biohacks prácticos y conversaciones inspiradoras sobre salud, energía y las fuerzas invisibles que dan forma a nuestras vidas.',
  collectionLabel: 'La Colección',
  exploreAll: '🛒 Explorar Todos los Libros en Amazon',
  volumes: [
    {
      label: 'Volumen I', title: 'Geobiología', slug: 'geobiology',
      tagline: 'La Tierra Sana. Solo debes ver las señales de la Naturaleza.',
      body: 'Geobiología introduce la ciencia de cómo los campos geomagnéticos naturales de la Tierra, las resonancias Schumann y las corrientes telúricas influyen en la salud, el sueño y el equilibrio emocional. Descubre cómo las cuadrículas geomagnéticas invisibles — las redes de Hartmann y Curry — se cruzan bajo tu hogar, creando zonas de estrés geopático que silenciosamente erosionan tu vitalidad. Aprende a detectar estas perturbaciones y armonizar tu entorno para recuperar la coherencia que tu cuerpo siempre ha conocido.',
    },
    {
      label: 'Volumen II', title: 'Geopatías', slug: 'geopathies',
      tagline: 'Los Saboteadores Silenciosos Bajo tus Pies.',
      body: 'Geopatías explora cómo las corrientes de agua subterráneas, las fallas geológicas y las anomalías geomagnéticas alteran silenciosamente los ritmos biológicos. Combinando olvidadas perspectivas médicas europeas con herramientas modernas de biohacking, este volumen revela cómo identificar y neutralizar las zonas perjudiciales que debilitan la inmunidad, perturban el sueño y erosionan la vitalidad a largo plazo — comenzando con la intervención más sencilla y poderosa: mover tu cama.',
    },
    {
      label: 'Volumen III', title: 'Radiestesia', slug: 'radiesthesia',
      tagline: 'El Arte y la Ciencia de Sentir las Energías Ocultas de la Tierra.',
      body: 'Radiestesia tiende un puente entre la física y la sabiduría ancestral, entrenándote para usar varillas, péndulos y tu propio sistema nervioso como instrumentos para detectar campos geomagnéticos. Fundamentado en la ciencia de la magnetosensibilidad — la misma capacidad que guía a las aves migratorias — este volumen te empodera para mapear zonas seguras e inseguras en cualquier espacio, reconectarte con tu conciencia energética natural y recalibrar tu antena biológica frente al electrosmog moderno.',
    },
    {
      label: 'Volumen IV', title: 'Radiestesia y Radiónica — Guía Práctica', slug: 'radiesthesia-radionics-booklet',
      tagline: 'De la Teoría a la Exploración Práctica.',
      body: 'Este compañero práctico condensa las enseñanzas de los volúmenes anteriores en ejercicios claros paso a paso. Aprende a localizar líneas Hartmann y Curry en tu hogar, aplicar técnicas de péndulo para la evaluación ambiental y explorar los fundamentos de la Radiónica — un arte olvidado utilizado para evaluar la vitalidad en alimentos, entornos y seres vivos. El manual de campo esencial para quien pone la ciencia en práctica.',
    },
    {
      label: 'Volumen V', title: 'Electrocultura', slug: 'electroculture',
      tagline: 'Agricultura con el Cielo Vivo.',
      body: 'Electrocultura revive una ciencia agrícola olvidada que aprovecha la electricidad atmosférica — el potencial de 400.000 voltios entre la superficie terrestre y la ionosfera — para impulsar la germinación, mejorar la vitalidad de las plantas y multiplicar las cosechas sin químicos ni riego intensivo. Desde espirales de cobre y antenas Christofleau hasta simples técnicas DIY inspiradas en Tesla, este volumen fusiona física, historia y práctica, invitándote a reconectarte con el circuito oculto entre la Tierra y el cielo.',
    },
  ],
};

const fr: AboutContent = {
  collectionIntro: 'Chaque volume de La Collection du Guide du Biohacker est un pas vers l\'architecture invisible de la vie — là où l\'énergie, la fréquence et la vibration convergent avec la science moderne pour illuminer de nouveaux chemins vers la santé, l\'harmonie et la reconnexion avec la Terre.',
  aboutAuthorLabel: 'À propos de l\'Auteur',
  authorRole: 'Auteur · Conteur · Pilote · Explorateur',
  bio: [
    'Certaines vies se déroulent en ligne droite. La sienne a été une spirale — toujours descendant plus profond, toujours revenant transformé.',
    'À six ans, sous un dais d\'étoiles au sein de l\'Organisation Mondiale du Mouvement Scout, il a appris à lire ce que la plupart des gens ne voient plus : le langage de la nature écrit dans le terrain, le vent et le silence. Survie. Navigation. La grammaire invisible du monde sauvage. Ce qui a commencé comme l\'aventure d\'un garçon est devenu une discipline d\'attention pour toute une vie.',
    'Cette discipline l\'a porté vers les cieux. En tant que pilote militaire de chasse, il a maîtrisé la navigation céleste — s\'orientant par les mêmes étoiles qui l\'avaient guidé enfant — et s\'est formé à la survie en jungle, en mer et dans le désert, ainsi qu\'aux opérations de parachutisme d\'élite. L\'altitude effaçait le bruit de la vie moderne. Ce qui demeurait, toujours, c\'étaient les mêmes schémas subtils et forces invisibles qu\'il avait pressentis pour la première fois dans ces premiers camps de montagne.',
    'Puis vint le tournant vers l\'intérieur.',
    'Depuis trois décennies, il se consacre à l\'ancienne science de la radiesthésie — l\'art de détecter ce que les instruments ne peuvent mesurer et que le langage ne peut aisément nommer : les énergies subtiles qui circulent à travers la Terre, l\'eau, l\'architecture vivante de nos maisons et de nos corps. Il a parcouru les corridors des traditions initiatiques, des écoles ésotériques et des loges philosophiques, étudiant les méthodes alchimiques qui transforment la recherche scientifique en quelque chose de plus rare — la sagesse.',
    'La Collection du Guide du Biohacker est le fruit de cette longue spirale. Non pas une collection de théories empruntées à d\'autres, mais un corps de savoir vécu — éprouvé sur le terrain, affiné dans la solitude, et offert maintenant à ceux qui sentent, comme il l\'a toujours senti, que la Terre parle.',
    'La question a toujours été la même : L\'écoutez-vous ?',
  ],
  quoteText: 'Ces cinq volumes ne sont pas des livres séparés — comme un poing, ils sont une seule force, un seul pouls, un seul éveil. La Terre est vivante et parle à travers l\'énergie. La Géobiologie, les Géopathies, la Radiesthésie, la Radionique et l\'Électroculture ne sont pas des curiosités marginales — ce sont d\'anciennes sciences redécouvertes, révélant les schémas autrefois rejetés comme superstitions. Quand vous les lisez ensemble, vous entendez non seulement de la théorie, mais un appel : à vous tenir différemment, à planter différemment, à vivre différemment. C\'est la symphonie de l\'invisible — et elle attend que vos mains la jouent.',
  quoteAuthor: '— César Arce',
  acknowledgementsLabel: 'Remerciements',
  ack1: 'Ce travail n\'aurait jamais vu le jour sans les encouragements, la curiosité et la foi de ceux qui ont marché à mes côtés pendant sa création.',
  ack2: 'Ce qui a commencé comme une simple curiosité a évolué, au fil des années, en une profonde passion — alimentée par d\'innombrables conversations, questions partagées et étincelles d\'inspiration. À tous ceux qui ont écouté avec un véritable intérêt et m\'ont poussé à continuer d\'explorer et d\'écrire, je leur dois une profonde dette de gratitude.',
  ackClosing: 'Merci de faire partie de ce voyage — car ensemble, nous réécrivons la façon dont nous nous connectons à la Terre et à nous-mêmes.',
  podcastTitle: 'Le Podcast du Guide du Biohacker — sur Spotify',
  podcastDesc: 'Rejoignez-nous chaque semaine — découvertes, biohacks pratiques et conversations inspirantes sur la santé, l\'énergie et les forces invisibles qui façonnent nos vies.',
  collectionLabel: 'La Collection',
  exploreAll: '🛒 Explorer Tous les Livres sur Amazon',
  volumes: [
    {
      label: 'Volume I', title: 'Géobiologie', slug: 'geobiology',
      tagline: 'La Terre Guérit. Tout ce que vous devez faire, c\'est voir les signaux de la Nature.',
      body: 'Géobiologie présente la science de la façon dont les champs géomagnétiques naturels de la Terre, les résonances Schumann et les courants telluriques influencent la santé, le sommeil et l\'équilibre émotionnel. Découvrez comment les grilles géomagnétiques invisibles — les réseaux de Hartmann et Curry — se croisent sous votre maison, créant des zones de stress géopathique qui érodent silencieusement votre vitalité. Apprenez à détecter ces perturbations et à harmoniser votre environnement pour retrouver la cohérence que votre corps a toujours connue.',
    },
    {
      label: 'Volume II', title: 'Géopathies', slug: 'geopathies',
      tagline: 'Les Saboteurs Silencieux Sous vos Pieds.',
      body: 'Géopathies explore comment les cours d\'eau souterrains, les failles géologiques et les anomalies géomagnétiques perturbent silencieusement les rythmes biologiques. Combinant des connaissances médicales européennes oubliées avec des outils modernes de biohacking, ce volume révèle comment identifier et neutraliser les zones nocives qui affaiblissent l\'immunité, perturbent le sommeil et érodent la vitalité à long terme — en commençant par l\'intervention la plus simple et la plus puissante : déplacer votre lit.',
    },
    {
      label: 'Volume III', title: 'Radiesthésie', slug: 'radiesthesia',
      tagline: 'L\'Art et la Science de Ressentir les Énergies Cachées de la Terre.',
      body: 'Radiesthésie fait le pont entre la physique et la sagesse ancestrale, vous entraînant à utiliser des baguettes, des pendules et votre propre système nerveux comme instruments pour détecter les champs géomagnétiques. Ancré dans la science de la magnétosensibilité — la même capacité qui guide les oiseaux migrateurs — ce volume vous permet de cartographier les zones sûres et dangereuses dans n\'importe quel espace, de vous reconnecter à votre conscience énergétique naturelle et de recalibrer votre antenne biologique face à l\'électrosmog moderne.',
    },
    {
      label: 'Volume IV', title: 'Radiesthésie & Radionique — Guide Pratique', slug: 'radiesthesia-radionics-booklet',
      tagline: 'De la Théorie à l\'Exploration Pratique.',
      body: 'Ce compagnon pratique condense les enseignements des volumes précédents en exercices clairs étape par étape. Apprenez à localiser les lignes Hartmann et Curry dans votre maison, à appliquer des techniques de pendule pour l\'évaluation environnementale et à explorer les fondements de la Radionique — un art oublié utilisé pour évaluer la vitalité dans les aliments, les environnements et les êtres vivants. Le manuel de terrain essentiel pour quiconque met la science en pratique.',
    },
    {
      label: 'Volume V', title: 'Électroculture', slug: 'electroculture',
      tagline: 'L\'Agriculture avec le Ciel Vivant.',
      body: 'L\'Électroculture ravive une science agricole oubliée qui exploite l\'électricité atmosphérique — le potentiel de 400 000 volts entre la surface terrestre et l\'ionosphère — pour stimuler la germination, améliorer la vitalité des plantes et multiplier les récoltes sans produits chimiques ni irrigation intensive. Des spirales en cuivre et des antennes Christofleau aux simples techniques DIY inspirées de Tesla, ce volume mélange physique, histoire et pratique, vous invitant à vous reconnecter au circuit caché entre la Terre et le ciel.',
    },
  ],
};

export const aboutContent: Record<string, AboutContent> = {
  en,
  es,
  'fr-CA': fr,
};
