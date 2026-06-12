export interface TermsContent {
  pageTitle: string;
  effectiveDate: string;
  intro: string;
  sections: {
    title: string;
    content: string | string[];
  }[];
  contactName: string;
  contactEmail: string;
}

const EFFECTIVE_DATE_EN = 'June 12, 2026';
const EFFECTIVE_DATE_ES = '12 de junio de 2026';
const EFFECTIVE_DATE_FR = '12 juin 2026';
const CONTACT_NAME = 'César Arce';
const CONTACT_EMAIL = 'cesararceauthor@gmail.com';
const SITE_URL = 'https://biohacker.digital';

const en: TermsContent = {
  pageTitle: 'Terms of Service',
  effectiveDate: EFFECTIVE_DATE_EN,
  contactName: CONTACT_NAME,
  contactEmail: CONTACT_EMAIL,
  intro: `Welcome to ${SITE_URL}. By accessing or using this website, you agree to the following Terms of Service. Please read them carefully. If you do not agree with any part of these terms, we kindly ask that you refrain from using the site.`,
  sections: [
    {
      title: 'About This Website',
      content: [
        `${SITE_URL} is a platform created by César Arce — author, pilot, and explorer — dedicated to sharing knowledge, perspectives, and research in the fields of geobiology, geopathies, radiesthesia, radionics, electroculture, and holistic biohacking.`,
        'Our mission is to promote and disseminate books, courses, workshops, and educational content with the goal of empowering individuals to make informed decisions about their health, environment, and well-being.',
        'This site may also offer products for sale directly or through third-party platforms such as Amazon. All commercial interactions are governed by these Terms alongside applicable consumer protection laws.',
      ],
    },
    {
      title: 'Nature of the Content — Educational and Informational Purposes',
      content: [
        'All content published on this website — including books, blog articles, community forum posts, courses, workshops, videos, and downloadable resources — is provided for educational, informational, and personal development purposes only.',
        'The information presented reflects the personal research, experiences, and points of view of the author. It does not constitute medical, legal, financial, or professional advice of any kind.',
        'We warmly welcome diverse opinions and perspectives. The existence of content on this site does not imply that we endorse any single interpretation, methodology, or outcome. Readers are encouraged to approach all content with curiosity, critical thinking, and personal discernment.',
        'Always consult a qualified professional (physician, agronomist, engineer, legal advisor, etc.) before making decisions that may affect your health, property, or legal situation.',
      ],
    },
    {
      title: 'Books and Publications',
      content: [
        'The Biohacker\'s Guide Collection — including Geobiology, Geopathies, Radiesthesia, Radiesthesia & Radionics Booklet, and Electroculture — and The Adventures of Caesar Maple series are original works authored by César Arce.',
        'Books are sold primarily through Amazon and other authorized retailers. Purchases made through Amazon affiliate links on this site are subject to Amazon\'s own terms and conditions.',
        'Digital and physical book content is protected by copyright. Reproduction, distribution, or modification of any part of these works without written permission from the author is prohibited.',
      ],
    },
    {
      title: 'Courses, Workshops, and Digital Products',
      content: [
        'We may offer courses, workshops, webinars, and other digital or in-person educational products through this platform or affiliated systems.',
        'Access to paid content is granted upon successful payment and is personal and non-transferable unless otherwise specified.',
        'Refund policies for digital products and courses will be clearly stated at the point of purchase. As a general rule, digital downloads that have been accessed are non-refundable. We will always assess reasonable refund requests on a case-by-case basis.',
        'We reserve the right to update, modify, or discontinue any course or workshop content as our knowledge evolves, without prior notice.',
      ],
    },
    {
      title: 'Community Forum and User-Generated Content',
      content: [
        'Our community forum is a space for respectful, open, and constructive exchange of ideas and experiences. All users are expected to engage with courtesy and goodwill.',
        'By posting content in the community forum, you grant biohacker.digital a non-exclusive, royalty-free license to display and moderate that content on the platform.',
        'You are solely responsible for the content you post. Content that is defamatory, harassing, discriminatory, illegal, or irrelevant to the community\'s topics may be removed at our discretion.',
        'We reserve the right to suspend or remove accounts that repeatedly violate these community standards.',
        'The views expressed by community members are their own and do not represent the views of biohacker.digital or its author.',
      ],
    },
    {
      title: 'Amazon Affiliate Links',
      content: [
        'This site participates in the Amazon Associates Program, an affiliate advertising program that allows us to earn commissions by linking to Amazon.com and affiliated sites.',
        'When you click an Amazon affiliate link on our site and make a purchase, we may receive a small commission at no additional cost to you.',
        'We only link to books and products we genuinely recommend. Affiliate links are clearly identified where required by law.',
      ],
    },
    {
      title: 'Intellectual Property',
      content: [
        'All original content on this website — including text, images, book covers, logos, course materials, and design elements — is the property of César Arce or licensed to biohacker.digital, and is protected by applicable copyright and intellectual property laws.',
        'You are welcome to share links to our content and quote brief excerpts (up to 150 words) for non-commercial purposes, provided you credit the author and include a link to the original page.',
        'Any reproduction, redistribution, or commercial use of our content without written authorization is strictly prohibited.',
      ],
    },
    {
      title: 'Third-Party Services and External Links',
      content: [
        'Our website uses third-party services including Supabase (database), Vercel (hosting), Resend (email), Google Analytics, and Meta Pixel. Use of these services is governed by their respective terms and privacy policies.',
        'Links to external websites (including Amazon, Spotify, and social media platforms) are provided for your convenience. We are not responsible for the content, accuracy, or privacy practices of any external site.',
        'Following a link to an external site does not constitute an endorsement of that site or its content.',
      ],
    },
    {
      title: 'Newsletter and Communications',
      content: [
        'By subscribing to our newsletter or signing in via magic link, you agree to receive periodic communications from biohacker.digital, including educational content, updates, and promotional information.',
        'You may unsubscribe at any time by clicking the unsubscribe link in any email, or by contacting us directly.',
        'We will never sell or share your email address with third parties for marketing purposes.',
      ],
    },
    {
      title: 'Limitation of Liability',
      content: [
        'biohacker.digital and its author make no warranties, express or implied, regarding the accuracy, completeness, or suitability of any content for any particular purpose.',
        'To the fullest extent permitted by applicable law, we shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of this website, its content, or any products or services offered through it.',
        'The techniques, practices, and approaches described in our content (including radiesthesia, geobiology, and electroculture) are shared as personal research and exploration. Results may vary significantly. We make no guarantees of specific outcomes.',
      ],
    },
    {
      title: 'Governing Law and Jurisdiction',
      content: [
        'These Terms of Service are governed by the laws of Canada and the Province of Quebec, without regard to conflict of law principles.',
        'Any dispute arising from the use of this website shall first be addressed through good-faith communication with our team. If unresolved, disputes shall be subject to the jurisdiction of the competent courts of the Province of Quebec, Canada.',
        'Users accessing this site from other jurisdictions are responsible for compliance with local laws to the extent they are applicable.',
      ],
    },
    {
      title: 'Modifications to These Terms',
      content: 'We reserve the right to update these Terms of Service at any time to reflect changes in our offerings, legal requirements, or business practices. Updated terms will be posted on this page with a revised effective date. We recommend reviewing these terms periodically. Continued use of the site after changes are posted constitutes acceptance of the updated terms.',
    },
    {
      title: 'Contact Us',
      content: `We value open communication and are happy to answer any questions about these Terms of Service, our content, or your experience on biohacker.digital.\n\n${CONTACT_NAME}\n${CONTACT_EMAIL}`,
    },
  ],
};

const es: TermsContent = {
  pageTitle: 'Términos de Servicio',
  effectiveDate: EFFECTIVE_DATE_ES,
  contactName: CONTACT_NAME,
  contactEmail: CONTACT_EMAIL,
  intro: `Bienvenido a ${SITE_URL}. Al acceder o utilizar este sitio web, acepta los siguientes Términos de Servicio. Le pedimos que los lea con atención. Si no está de acuerdo con alguna parte de estos términos, le solicitamos amablemente que se abstenga de utilizar el sitio.`,
  sections: [
    {
      title: 'Acerca de Este Sitio Web',
      content: [
        `${SITE_URL} es una plataforma creada por César Arce — autor, piloto y explorador — dedicada a compartir conocimientos, perspectivas e investigaciones en los campos de la geobiología, las geopatías, la radiestesia, la radiónica, la electrocultura y el biohacking holístico.`,
        'Nuestra misión es promover y difundir libros, cursos, talleres y contenido educativo con el objetivo de empoderar a las personas para que tomen decisiones informadas sobre su salud, su entorno y su bienestar.',
        'Este sitio también puede ofrecer productos a la venta directamente o a través de plataformas de terceros como Amazon. Todas las interacciones comerciales se rigen por estos Términos junto con las leyes de protección al consumidor aplicables.',
      ],
    },
    {
      title: 'Naturaleza del Contenido — Fines Educativos e Informativos',
      content: [
        'Todo el contenido publicado en este sitio web — incluyendo libros, artículos del blog, publicaciones del foro comunitario, cursos, talleres, videos y recursos descargables — se proporciona únicamente con fines educativos, informativos y de desarrollo personal.',
        'La información presentada refleja la investigación personal, las experiencias y los puntos de vista del autor. No constituye asesoramiento médico, legal, financiero ni profesional de ningún tipo.',
        'Acogemos con agrado las opiniones y perspectivas diversas. La existencia de contenido en este sitio no implica que respaldemos una interpretación, metodología o resultado en particular. Invitamos a los lectores a abordar todo el contenido con curiosidad, pensamiento crítico y discernimiento personal.',
        'Consulte siempre a un profesional calificado (médico, agrónomo, ingeniero, asesor legal, etc.) antes de tomar decisiones que puedan afectar su salud, propiedad o situación legal.',
      ],
    },
    {
      title: 'Libros y Publicaciones',
      content: [
        'La Colección de la Guía del Biohacker — incluyendo Geobiología, Geopatías, Radiestesia, Guía Práctica de Radiestesia y Radiónica, y Electrocultura — y la serie Las Aventuras de César Maple son obras originales de autoría de César Arce.',
        'Los libros se venden principalmente a través de Amazon y otros minoristas autorizados. Las compras realizadas a través de los enlaces de afiliados de Amazon en este sitio están sujetas a los términos y condiciones propios de Amazon.',
        'El contenido digital y físico de los libros está protegido por derechos de autor. La reproducción, distribución o modificación de cualquier parte de estas obras sin autorización escrita del autor está prohibida.',
      ],
    },
    {
      title: 'Cursos, Talleres y Productos Digitales',
      content: [
        'Podemos ofrecer cursos, talleres, seminarios web y otros productos educativos digitales o presenciales a través de esta plataforma o sistemas afiliados.',
        'El acceso al contenido de pago se otorga tras el pago exitoso y es personal e intransferible, salvo que se indique lo contrario.',
        'Las políticas de reembolso para productos digitales y cursos se indicarán claramente en el momento de la compra. Como regla general, las descargas digitales a las que ya se ha accedido no son reembolsables. Siempre evaluaremos las solicitudes de reembolso razonables caso por caso.',
        'Nos reservamos el derecho de actualizar, modificar o discontinuar cualquier contenido de curso o taller a medida que nuestro conocimiento evoluciona, sin previo aviso.',
      ],
    },
    {
      title: 'Foro Comunitario y Contenido Generado por Usuarios',
      content: [
        'Nuestro foro comunitario es un espacio para el intercambio respetuoso, abierto y constructivo de ideas y experiencias. Se espera que todos los usuarios participen con cortesía y buena voluntad.',
        'Al publicar contenido en el foro comunitario, otorga a biohacker.digital una licencia no exclusiva y libre de regalías para mostrar y moderar ese contenido en la plataforma.',
        'Usted es el único responsable del contenido que publica. El contenido difamatorio, acosador, discriminatorio, ilegal o irrelevante para los temas de la comunidad puede ser eliminado a nuestra discreción.',
        'Nos reservamos el derecho de suspender o eliminar cuentas que infrinjan reiteradamente estas normas comunitarias.',
        'Las opiniones expresadas por los miembros de la comunidad son propias y no representan los puntos de vista de biohacker.digital ni de su autor.',
      ],
    },
    {
      title: 'Enlaces de Afiliados de Amazon',
      content: [
        'Este sitio participa en el Programa de Asociados de Amazon, un programa de publicidad de afiliados que nos permite ganar comisiones al enlazar a Amazon.com y sitios afiliados.',
        'Cuando hace clic en un enlace de afiliado de Amazon en nuestro sitio y realiza una compra, podemos recibir una pequeña comisión sin costo adicional para usted.',
        'Solo enlazamos a libros y productos que recomendamos genuinamente. Los enlaces de afiliados están claramente identificados donde lo exige la ley.',
      ],
    },
    {
      title: 'Propiedad Intelectual',
      content: [
        'Todo el contenido original de este sitio web — incluyendo textos, imágenes, portadas de libros, logotipos, materiales de cursos y elementos de diseño — es propiedad de César Arce o está licenciado a biohacker.digital, y está protegido por las leyes de derechos de autor y propiedad intelectual aplicables.',
        'Le invitamos a compartir enlaces a nuestro contenido y a citar breves extractos (hasta 150 palabras) para fines no comerciales, siempre que cite al autor e incluya un enlace a la página original.',
        'Cualquier reproducción, redistribución o uso comercial de nuestro contenido sin autorización escrita está estrictamente prohibida.',
      ],
    },
    {
      title: 'Servicios de Terceros y Enlaces Externos',
      content: [
        'Nuestro sitio utiliza servicios de terceros, incluyendo Supabase (base de datos), Vercel (alojamiento), Resend (correo electrónico), Google Analytics y Meta Pixel. El uso de estos servicios se rige por sus respectivos términos y políticas de privacidad.',
        'Los enlaces a sitios web externos (incluidos Amazon, Spotify y plataformas de redes sociales) se proporcionan para su comodidad. No somos responsables del contenido, la precisión o las prácticas de privacidad de ningún sitio externo.',
        'Seguir un enlace a un sitio externo no constituye un respaldo de ese sitio ni de su contenido.',
      ],
    },
    {
      title: 'Boletín y Comunicaciones',
      content: [
        'Al suscribirse a nuestro boletín o iniciar sesión mediante enlace mágico, acepta recibir comunicaciones periódicas de biohacker.digital, incluyendo contenido educativo, actualizaciones e información promocional.',
        'Puede cancelar su suscripción en cualquier momento haciendo clic en el enlace de cancelación de suscripción en cualquier correo electrónico, o contactándonos directamente.',
        'Nunca venderemos ni compartiremos su dirección de correo electrónico con terceros con fines de marketing.',
      ],
    },
    {
      title: 'Limitación de Responsabilidad',
      content: [
        'biohacker.digital y su autor no ofrecen garantías, expresas o implícitas, sobre la exactitud, integridad o idoneidad de ningún contenido para ningún fin particular.',
        'En la máxima medida permitida por la ley aplicable, no seremos responsables de ningún daño directo, indirecto, incidental o consecuente que surja del uso de este sitio web, su contenido, o cualquier producto o servicio ofrecido a través de él.',
        'Las técnicas, prácticas y enfoques descritos en nuestro contenido (incluyendo la radiestesia, la geobiología y la electrocultura) se comparten como investigación y exploración personal. Los resultados pueden variar significativamente. No garantizamos resultados específicos.',
      ],
    },
    {
      title: 'Ley Aplicable y Jurisdicción',
      content: [
        'Estos Términos de Servicio se rigen por las leyes de Canadá y la provincia de Quebec, sin tener en cuenta los principios de conflicto de leyes.',
        'Cualquier disputa derivada del uso de este sitio web se abordará primero mediante comunicación de buena fe con nuestro equipo. Si no se resuelve, las disputas estarán sujetas a la jurisdicción de los tribunales competentes de la provincia de Quebec, Canadá.',
        'Los usuarios que accedan a este sitio desde otras jurisdicciones son responsables del cumplimiento de las leyes locales en la medida en que sean aplicables.',
      ],
    },
    {
      title: 'Modificaciones a Estos Términos',
      content: 'Nos reservamos el derecho de actualizar estos Términos de Servicio en cualquier momento para reflejar cambios en nuestra oferta, requisitos legales o prácticas comerciales. Los términos actualizados se publicarán en esta página con una nueva fecha de entrada en vigor. Recomendamos revisar estos términos periódicamente. El uso continuado del sitio después de que se publiquen los cambios constituye la aceptación de los términos actualizados.',
    },
    {
      title: 'Contáctenos',
      content: `Valoramos la comunicación abierta y estamos encantados de responder cualquier pregunta sobre estos Términos de Servicio, nuestro contenido o su experiencia en biohacker.digital.\n\n${CONTACT_NAME}\n${CONTACT_EMAIL}`,
    },
  ],
};

const fr: TermsContent = {
  pageTitle: 'Conditions d\'Utilisation',
  effectiveDate: EFFECTIVE_DATE_FR,
  contactName: CONTACT_NAME,
  contactEmail: CONTACT_EMAIL,
  intro: `Bienvenue sur ${SITE_URL}. En accédant à ce site ou en l'utilisant, vous acceptez les présentes Conditions d'utilisation. Nous vous invitons à les lire attentivement. Si vous n'êtes pas d'accord avec l'une ou l'autre de ces conditions, nous vous demandons cordialement de ne pas utiliser le site.`,
  sections: [
    {
      title: 'À Propos de Ce Site',
      content: [
        `${SITE_URL} est une plateforme créée par César Arce — auteur, pilote et explorateur — dédiée au partage de connaissances, de perspectives et de recherches dans les domaines de la géobiologie, des géopathies, de la radiesthésie, de la radionique, de l'électroculture et du biohacking holistique.`,
        'Notre mission est de promouvoir et de diffuser des livres, des cours, des ateliers et du contenu éducatif dans le but d\'habiliter les individus à prendre des décisions éclairées concernant leur santé, leur environnement et leur bien-être.',
        'Ce site peut également proposer des produits à la vente directement ou via des plateformes tierces telles qu\'Amazon. Toutes les interactions commerciales sont régies par ces Conditions ainsi que par les lois applicables en matière de protection des consommateurs.',
      ],
    },
    {
      title: 'Nature du Contenu — À Des Fins Éducatives et Informatives',
      content: [
        'Tout le contenu publié sur ce site web — y compris les livres, les articles de blogue, les publications du forum communautaire, les cours, les ateliers, les vidéos et les ressources téléchargeables — est fourni à des fins éducatives, informatives et de développement personnel uniquement.',
        'Les informations présentées reflètent les recherches personnelles, les expériences et les points de vue de l\'auteur. Elles ne constituent en aucun cas un avis médical, juridique, financier ou professionnel.',
        'Nous accueillons chaleureusement les opinions et perspectives diverses. La présence de contenu sur ce site n\'implique pas que nous endossons une interprétation, une méthodologie ou un résultat particulier. Nous encourageons les lecteurs à aborder tout contenu avec curiosité, esprit critique et discernement personnel.',
        'Consultez toujours un professionnel qualifié (médecin, agronome, ingénieur, conseiller juridique, etc.) avant de prendre des décisions susceptibles d\'affecter votre santé, votre propriété ou votre situation légale.',
      ],
    },
    {
      title: 'Livres et Publications',
      content: [
        'La Collection du Guide du Biohacker — incluant Géobiologie, Géopathies, Radiesthésie, Guide Pratique de Radiesthésie & Radionique, et Électroculture — ainsi que la série Les Aventures de César Maple sont des œuvres originales rédigées par César Arce.',
        'Les livres sont vendus principalement via Amazon et d\'autres revendeurs autorisés. Les achats effectués via les liens d\'affiliation Amazon sur ce site sont soumis aux propres conditions générales d\'Amazon.',
        'Le contenu numérique et physique des livres est protégé par le droit d\'auteur. Toute reproduction, distribution ou modification d\'une partie de ces œuvres sans autorisation écrite de l\'auteur est interdite.',
      ],
    },
    {
      title: 'Cours, Ateliers et Produits Numériques',
      content: [
        'Nous pouvons proposer des cours, des ateliers, des webinaires et d\'autres produits éducatifs numériques ou en présentiel via cette plateforme ou des systèmes affiliés.',
        'L\'accès au contenu payant est accordé après paiement réussi et est personnel et non transférable, sauf indication contraire.',
        'Les politiques de remboursement pour les produits numériques et les cours seront clairement indiquées au moment de l\'achat. En règle générale, les téléchargements numériques auxquels vous avez déjà accédé ne sont pas remboursables. Nous évaluerons toujours les demandes de remboursement raisonnables au cas par cas.',
        'Nous nous réservons le droit de mettre à jour, modifier ou cesser tout contenu de cours ou d\'atelier à mesure que nos connaissances évoluent, sans préavis.',
      ],
    },
    {
      title: 'Forum Communautaire et Contenu Généré par les Utilisateurs',
      content: [
        'Notre forum communautaire est un espace d\'échange respectueux, ouvert et constructif d\'idées et d\'expériences. Tous les utilisateurs sont invités à participer avec courtoisie et bonne foi.',
        'En publiant du contenu sur le forum communautaire, vous accordez à biohacker.digital une licence non exclusive et libre de redevances pour afficher et modérer ce contenu sur la plateforme.',
        'Vous êtes seul responsable du contenu que vous publiez. Le contenu diffamatoire, harcelant, discriminatoire, illégal ou sans rapport avec les sujets de la communauté pourra être supprimé à notre discrétion.',
        'Nous nous réservons le droit de suspendre ou de supprimer les comptes qui enfreignent à plusieurs reprises ces normes communautaires.',
        'Les opinions exprimées par les membres de la communauté leur appartiennent et ne représentent pas les points de vue de biohacker.digital ni de son auteur.',
      ],
    },
    {
      title: 'Liens d\'Affiliation Amazon',
      content: [
        'Ce site participe au Programme Partenaires d\'Amazon, un programme de publicité par affiliation qui nous permet de percevoir des commissions en proposant des liens vers Amazon.com et les sites affiliés.',
        'Lorsque vous cliquez sur un lien d\'affiliation Amazon sur notre site et effectuez un achat, nous pouvons recevoir une petite commission sans frais supplémentaires pour vous.',
        'Nous ne proposons des liens que vers des livres et produits que nous recommandons sincèrement. Les liens d\'affiliation sont clairement identifiés là où la loi l\'exige.',
      ],
    },
    {
      title: 'Propriété Intellectuelle',
      content: [
        'Tout le contenu original de ce site web — y compris les textes, les images, les couvertures de livres, les logos, les supports de cours et les éléments de design — est la propriété de César Arce ou est sous licence accordée à biohacker.digital, et est protégé par les lois applicables en matière de droit d\'auteur et de propriété intellectuelle.',
        'Vous êtes les bienvenus pour partager des liens vers notre contenu et citer de brefs extraits (jusqu\'à 150 mots) à des fins non commerciales, à condition de créditer l\'auteur et d\'inclure un lien vers la page originale.',
        'Toute reproduction, redistribution ou utilisation commerciale de notre contenu sans autorisation écrite est strictement interdite.',
      ],
    },
    {
      title: 'Services Tiers et Liens Externes',
      content: [
        'Notre site utilise des services tiers, notamment Supabase (base de données), Vercel (hébergement), Resend (courriel), Google Analytics et Meta Pixel. L\'utilisation de ces services est régie par leurs propres conditions et politiques de confidentialité.',
        'Les liens vers des sites web externes (notamment Amazon, Spotify et les plateformes de médias sociaux) sont fournis pour votre commodité. Nous ne sommes pas responsables du contenu, de l\'exactitude ou des pratiques de confidentialité de tout site externe.',
        'Suivre un lien vers un site externe ne constitue pas un cautionnement de ce site ni de son contenu.',
      ],
    },
    {
      title: 'Infolettre et Communications',
      content: [
        'En vous abonnant à notre infolettre ou en vous connectant par lien magique, vous acceptez de recevoir des communications périodiques de biohacker.digital, incluant du contenu éducatif, des mises à jour et des informations promotionnelles.',
        'Vous pouvez vous désabonner à tout moment en cliquant sur le lien de désabonnement dans n\'importe quel courriel, ou en nous contactant directement.',
        'Nous ne vendrons ni ne partagerons jamais votre adresse courriel avec des tiers à des fins de marketing.',
      ],
    },
    {
      title: 'Limitation de Responsabilité',
      content: [
        'biohacker.digital et son auteur ne font aucune garantie, expresse ou implicite, quant à l\'exactitude, l\'exhaustivité ou la pertinence de tout contenu pour un usage particulier.',
        'Dans toute la mesure permise par la loi applicable, nous ne serons pas responsables des dommages directs, indirects, accessoires ou consécutifs découlant de l\'utilisation de ce site web, de son contenu, ou de tout produit ou service proposé par son intermédiaire.',
        'Les techniques, pratiques et approches décrites dans notre contenu (notamment la radiesthésie, la géobiologie et l\'électroculture) sont partagées à titre de recherche et d\'exploration personnelles. Les résultats peuvent varier considérablement. Nous ne garantissons aucun résultat spécifique.',
      ],
    },
    {
      title: 'Loi Applicable et Juridiction',
      content: [
        'Les présentes Conditions d\'utilisation sont régies par les lois du Canada et de la province de Québec, sans égard aux principes de conflits de lois.',
        'Tout litige découlant de l\'utilisation de ce site sera d\'abord traité par voie de communication de bonne foi avec notre équipe. À défaut de résolution, les litiges seront soumis à la juridiction des tribunaux compétents de la province de Québec, Canada.',
        'Les utilisateurs accédant à ce site depuis d\'autres territoires sont responsables du respect des lois locales dans la mesure où elles s\'appliquent.',
      ],
    },
    {
      title: 'Modifications des Présentes Conditions',
      content: 'Nous nous réservons le droit de mettre à jour ces Conditions d\'utilisation à tout moment pour refléter des changements dans notre offre, les exigences légales ou nos pratiques commerciales. Les conditions mises à jour seront publiées sur cette page avec une nouvelle date d\'entrée en vigueur. Nous vous recommandons de consulter régulièrement ces conditions. La poursuite de l\'utilisation du site après la publication des modifications constitue une acceptation des conditions mises à jour.',
    },
    {
      title: 'Nous Contacter',
      content: `Nous valorisons la communication ouverte et nous sommes heureux de répondre à toute question concernant ces Conditions d'utilisation, notre contenu ou votre expérience sur biohacker.digital.\n\n${CONTACT_NAME}\n${CONTACT_EMAIL}`,
    },
  ],
};

export const termsContent: Record<string, TermsContent> = {
  en,
  es,
  'fr-CA': fr,
};
