export interface PrivacyContent {
  pageTitle: string;
  effectiveDate: string;
  lastUpdated: string;
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

const en: PrivacyContent = {
  pageTitle: 'Privacy Policy',
  effectiveDate: EFFECTIVE_DATE_EN,
  lastUpdated: EFFECTIVE_DATE_EN,
  contactName: CONTACT_NAME,
  contactEmail: CONTACT_EMAIL,
  sections: [
    {
      title: 'Purpose of This Policy',
      content: 'This Privacy Policy informs users of biohacker.digital about the personal data we collect, how we use it, who has access to it, your rights as a user, and our cookie practices. This policy applies to all visitors and users of our website, regardless of their location.',
    },
    {
      title: 'Applicable Laws',
      content: [
        'Quebec — Law 25 (Act to modernize legislative provisions as regards the protection of personal information): As biohacker.digital may collect data from Quebec residents, we comply with Law 25, which imposes strict obligations regarding consent, transparency, data subject rights (access, rectification, deletion), breach notification to the Commission d\'accès à l\'information (CAI), and privacy impact assessments for cross-border transfers.',
        'Canada — PIPEDA (Personal Information Protection and Electronic Documents Act): We comply with Canada\'s federal privacy law governing the collection, use, and disclosure of personal information in the course of commercial activities.',
        'European Union — GDPR (General Data Protection Regulation): For users in EU/EEA countries, GDPR applies. Where there is any inconsistency between this policy and GDPR, GDPR shall prevail.',
        'United States — California CCPA (California Consumer Privacy Act): For California residents, we aim to comply with CCPA. Where inconsistencies exist, California law shall prevail.',
      ],
    },
    {
      title: 'Consent',
      content: [
        'By using our site, you consent to: (1) the terms of this Privacy Policy; and (2) the collection, use, and storage of the data listed herein.',
        'Quebec residents: Consent is obtained expressly before collecting sensitive data. Consent for minors under 14 requires parental or guardian authorization.',
        'You may withdraw your consent at any time by contacting us at the address below.',
      ],
    },
    {
      title: 'Personal Data We Collect',
      content: [
        'Automatically collected data: IP address, approximate location (country/region), pages visited, content viewed, session duration, browser type and version, device type.',
        'Data collected through forms and interactions: First and last name, email address, preferred language (locale), community forum messages and questions, newsletter subscription preferences.',
        'We collect only the data necessary to fulfill the purposes stated in this policy. We will not collect additional data without prior notice.',
      ],
    },
    {
      title: 'How We Use Personal Data',
      content: [
        'Automatically collected data is used for: anonymous traffic statistics, site performance optimization, and content improvement.',
        'Data collected through forms is used for: sending requested magic-link sign-in emails, delivering our newsletter, enabling community forum participation, and responding to user inquiries.',
        'We do not use your data for purposes beyond those disclosed here.',
      ],
    },
    {
      title: 'Who Has Access to Your Data',
      content: [
        'Internal access: Only the site owner and authorized personnel have access to user data, limited to what is necessary for the stated purposes.',
        'Third-party service providers: We use the following sub-processors who may handle your data on our behalf — Supabase (database and authentication, servers in the United States), Vercel (website hosting, servers in the United States and other regions), Resend (transactional email delivery), Google Analytics (anonymous analytics, United States), Meta Pixel (anonymous advertising analytics, United States).',
        'Third parties are contractually bound to use your data only for the specific purpose for which it was shared.',
        'We do not sell your personal data. We may disclose your data only if required by law, for legal proceedings, or to protect our legal rights.',
      ],
    },
    {
      title: 'International Data Transfers',
      content: [
        'Your data may be processed or stored in the following countries: Canada, United States, France (EU).',
        'For Quebec residents: Any transfer of personal information outside Quebec is subject to a privacy impact assessment (PIA) as required by Law 25, and is only permitted when the data receives equivalent protection.',
        'For EU/EEA residents: International transfers are conducted using appropriate safeguards (Standard Contractual Clauses) as required by GDPR.',
      ],
    },
    {
      title: 'Data Retention',
      content: 'We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, or as required by applicable law. Newsletter subscriber data is retained until you unsubscribe. Forum content may be retained for the life of the community unless you request deletion. Analytics data is retained in anonymized, aggregated form.',
    },
    {
      title: 'How We Protect Your Data',
      content: [
        'HTTPS/TLS encryption on all data in transit.',
        'Row-level security (RLS) on our Supabase database — no unauthorized access between users.',
        'Magic-link authentication — no passwords stored.',
        'Periodic security updates to platform dependencies.',
        'Restricted access controls — only authorized personnel can access raw user data.',
        'While we take all reasonable precautions, no Internet-based system can guarantee absolute security. We cannot guarantee the security of data beyond what is reasonably practicable.',
      ],
    },
    {
      title: 'Minors',
      content: 'Our website is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13. For Quebec residents: in accordance with Law 25, the consent of a parent or legal guardian is required to collect data from persons under 14 years of age. If you believe we have inadvertently collected such data, please contact us immediately so we can delete it.',
    },
    {
      title: 'Your Rights as a User',
      content: [
        'Right of access: You may request a copy of all personal data we hold about you.',
        'Right of rectification: You may request correction of inaccurate or incomplete data.',
        'Right of erasure ("right to be forgotten"): You may request deletion of your personal data, subject to legal retention obligations.',
        'Right to data portability: You may request your data in a structured, machine-readable format.',
        'Right to withdraw consent: You may withdraw consent for data processing at any time.',
        'Right to object: You may object to certain types of processing, including direct marketing.',
        'Right to file a complaint: Quebec residents may file a complaint with the Commission d\'accès à l\'information (CAI) at www.cai.gouv.qc.ca. Canadian residents may contact the Office of the Privacy Commissioner of Canada at www.priv.gc.ca. EU residents may contact their national Data Protection Authority.',
        'To exercise any of these rights, please contact our Privacy Officer listed at the bottom of this policy.',
      ],
    },
    {
      title: 'Security Breach Notification',
      content: 'In the event of a data breach that poses a risk of serious harm to users, we will notify affected users and the applicable regulatory authority (Quebec CAI, or the Office of the Privacy Commissioner of Canada) as soon as possible and within the timeframes required by applicable law.',
    },
    {
      title: 'Cookie Policy',
      content: [
        'A cookie is a small file stored on your device by our website. We use the following types of cookies:',
        'Functional cookies: Remember your language preference and session state so you don\'t need to re-select them on each visit.',
        'Analytical cookies: Google Analytics — used to collect anonymous statistics about site usage to improve content and performance.',
        'Targeting cookies: Meta Pixel — used to measure the effectiveness of advertising campaigns and improve targeting. These cookies are only loaded after you consent.',
        'You can browse in private/incognito mode to prevent cookies from persisting. You may also disable cookies entirely in your browser settings, though this may reduce your experience on our site.',
        'We do not use cookies to collect personally identifiable information without your consent.',
      ],
    },
    {
      title: 'Affiliate Links',
      content: 'Our website contains Amazon affiliate links. When you click an affiliate link and make a purchase on Amazon, we may earn a small commission at no additional cost to you. Amazon collects data through its own systems when you visit their site; please refer to Amazon\'s Privacy Policy for details.',
    },
    {
      title: 'Changes to This Policy',
      content: 'We may update this Privacy Policy from time to time to remain compliant with applicable law or to reflect changes in our data practices. We will notify users by email when significant changes are made. We recommend reviewing this policy periodically.',
    },
    {
      title: 'Contact — Privacy Officer',
      content: `For any questions, requests to access, modify, or delete your data, or to file a complaint, please contact our Privacy Officer:\n\n${CONTACT_NAME}\n${CONTACT_EMAIL}`,
    },
  ],
};

const es: PrivacyContent = {
  pageTitle: 'Política de Privacidad',
  effectiveDate: EFFECTIVE_DATE_ES,
  lastUpdated: EFFECTIVE_DATE_ES,
  contactName: CONTACT_NAME,
  contactEmail: CONTACT_EMAIL,
  sections: [
    {
      title: 'Propósito de Esta Política',
      content: 'Esta Política de Privacidad informa a los usuarios de biohacker.digital sobre los datos personales que recopilamos, cómo los utilizamos, quién tiene acceso a ellos, sus derechos como usuario y nuestras prácticas de cookies. Esta política aplica a todos los visitantes y usuarios del sitio, independientemente de su ubicación.',
    },
    {
      title: 'Leyes Aplicables',
      content: [
        'Quebec — Ley 25 (Ley de modernización de las disposiciones legislativas en materia de protección de información personal): Como biohacker.digital puede recopilar datos de residentes de Quebec, cumplimos con la Ley 25, que impone obligaciones estrictas sobre consentimiento, transparencia, derechos de los interesados (acceso, rectificación, eliminación), notificación de brechas a la Commission d\'accès à l\'information (CAI) y evaluaciones de impacto sobre privacidad para transferencias transfronterizas.',
        'Canadá — LPRPDE (Ley de Protección de Información Personal y Documentos Electrónicos): Cumplimos con la ley federal de privacidad de Canadá que rige la recopilación, uso y divulgación de información personal en el comercio.',
        'Unión Europea — RGPD (Reglamento General de Protección de Datos): Para usuarios en países de la UE/EEE, aplica el RGPD. En caso de inconsistencia entre esta política y el RGPD, prevalecerá el RGPD.',
        'Estados Unidos — CCPA de California: Para residentes de California, buscamos cumplir con la CCPA. En caso de inconsistencias, prevalece la legislación del estado de California.',
      ],
    },
    {
      title: 'Consentimiento',
      content: [
        'Al utilizar nuestro sitio, usted consiente: (1) los términos de esta Política de Privacidad; y (2) la recopilación, uso y almacenamiento de los datos enumerados en ella.',
        'Residentes de Quebec: El consentimiento se obtiene de forma expresa antes de recopilar datos sensibles. El consentimiento para menores de 14 años requiere autorización de los padres o tutores legales.',
        'Puede retirar su consentimiento en cualquier momento contactándonos en la dirección indicada al final de esta política.',
      ],
    },
    {
      title: 'Datos Personales que Recopilamos',
      content: [
        'Datos recopilados automáticamente: Dirección IP, ubicación aproximada (país/región), páginas visitadas, contenido consultado, duración de la sesión, tipo y versión del navegador, tipo de dispositivo.',
        'Datos recopilados mediante formularios e interacciones: Nombre y apellidos, dirección de correo electrónico, idioma preferido (configuración regional), mensajes y preguntas del foro comunitario, preferencias de suscripción al boletín.',
        'Solo recopilamos los datos necesarios para cumplir los fines indicados en esta política. No recopilaremos datos adicionales sin notificarlo previamente.',
      ],
    },
    {
      title: 'Cómo Utilizamos los Datos Personales',
      content: [
        'Los datos recopilados automáticamente se utilizan para: estadísticas de tráfico anónimas, optimización del rendimiento del sitio y mejora del contenido.',
        'Los datos recopilados mediante formularios se utilizan para: enviar los correos de acceso mediante enlace mágico, entregar nuestro boletín, permitir la participación en el foro comunitario y responder a consultas de usuarios.',
        'No utilizamos sus datos para fines más allá de los divulgados aquí.',
      ],
    },
    {
      title: 'Quién Tiene Acceso a sus Datos',
      content: [
        'Acceso interno: Solo el propietario del sitio y el personal autorizado tienen acceso a los datos de los usuarios, limitado a lo necesario para los fines indicados.',
        'Proveedores de servicios terceros: Utilizamos los siguientes subprocesadores que pueden manejar sus datos en nuestro nombre — Supabase (base de datos y autenticación, servidores en Estados Unidos), Vercel (alojamiento del sitio web, servidores en Estados Unidos y otras regiones), Resend (entrega de correos transaccionales), Google Analytics (analíticas anónimas, Estados Unidos), Meta Pixel (analíticas de publicidad anónimas, Estados Unidos).',
        'Los terceros están contractualmente obligados a utilizar sus datos solo para el fin específico para el que fueron compartidos.',
        'No vendemos sus datos personales. Solo podemos divulgarlos si la ley lo requiere, por procedimientos legales o para proteger nuestros derechos legales.',
      ],
    },
    {
      title: 'Transferencias Internacionales de Datos',
      content: [
        'Sus datos pueden ser procesados o almacenados en los siguientes países: Canadá, Estados Unidos, Francia (UE).',
        'Para residentes de Quebec: Cualquier transferencia de información personal fuera de Quebec está sujeta a una evaluación de impacto sobre privacidad (PIA) según lo exige la Ley 25, y solo se permite cuando los datos reciben protección equivalente.',
        'Para residentes de la UE/EEE: Las transferencias internacionales se realizan utilizando garantías adecuadas (Cláusulas Contractuales Estándar) según lo exige el RGPD.',
      ],
    },
    {
      title: 'Retención de Datos',
      content: 'Conservamos los datos personales solo durante el tiempo necesario para cumplir los fines para los que fueron recopilados, o según lo exija la ley aplicable. Los datos de suscriptores del boletín se conservan hasta que cancele la suscripción. El contenido del foro puede conservarse durante la vida de la comunidad, a menos que solicite su eliminación. Los datos de analíticas se conservan en forma anonimizada y agregada.',
    },
    {
      title: 'Cómo Protegemos sus Datos',
      content: [
        'Cifrado HTTPS/TLS en todos los datos en tránsito.',
        'Seguridad a nivel de fila (RLS) en nuestra base de datos Supabase — sin acceso no autorizado entre usuarios.',
        'Autenticación mediante enlace mágico — no se almacenan contraseñas.',
        'Actualizaciones periódicas de seguridad de las dependencias de la plataforma.',
        'Controles de acceso restringido — solo el personal autorizado puede acceder a datos brutos de usuarios.',
        'Si bien tomamos todas las precauciones razonables, ningún sistema basado en Internet puede garantizar seguridad absoluta.',
      ],
    },
    {
      title: 'Menores de Edad',
      content: 'Nuestro sitio no está dirigido a menores de 13 años. No recopilamos conscientemente información personal de menores de 13 años. Para residentes de Quebec: de conformidad con la Ley 25, se requiere el consentimiento de un padre o tutor legal para recopilar datos de personas menores de 14 años. Si cree que hemos recopilado inadvertidamente dichos datos, contáctenos de inmediato para eliminarlos.',
    },
    {
      title: 'Sus Derechos como Usuario',
      content: [
        'Derecho de acceso: Puede solicitar una copia de todos los datos personales que tenemos sobre usted.',
        'Derecho de rectificación: Puede solicitar la corrección de datos inexactos o incompletos.',
        'Derecho de supresión ("derecho al olvido"): Puede solicitar la eliminación de sus datos personales, sujeto a obligaciones legales de retención.',
        'Derecho a la portabilidad de datos: Puede solicitar sus datos en un formato estructurado y legible por máquina.',
        'Derecho a retirar el consentimiento: Puede retirar su consentimiento para el procesamiento de datos en cualquier momento.',
        'Derecho de oposición: Puede oponerse a ciertos tipos de procesamiento, incluido el marketing directo.',
        'Derecho a presentar una queja: Los residentes de Quebec pueden presentar una queja ante la Commission d\'accès à l\'information (CAI) en www.cai.gouv.qc.ca. Los residentes canadienses pueden contactar al Comisionado de Privacidad de Canadá en www.priv.gc.ca.',
        'Para ejercer cualquiera de estos derechos, contacte a nuestro Responsable de Privacidad indicado al final de esta política.',
      ],
    },
    {
      title: 'Notificación de Brechas de Seguridad',
      content: 'En caso de una brecha de datos que represente un riesgo de daño grave para los usuarios, notificaremos a los usuarios afectados y a la autoridad regulatoria correspondiente (CAI de Quebec, o el Comisionado de Privacidad de Canadá) lo antes posible y dentro de los plazos exigidos por la ley aplicable.',
    },
    {
      title: 'Política de Cookies',
      content: [
        'Una cookie es un pequeño archivo almacenado en su dispositivo por nuestro sitio web. Utilizamos los siguientes tipos de cookies:',
        'Cookies funcionales: Recuerdan su preferencia de idioma y el estado de la sesión para que no necesite volver a seleccionarlos en cada visita.',
        'Cookies analíticas: Google Analytics — se utilizan para recopilar estadísticas anónimas sobre el uso del sitio para mejorar el contenido y el rendimiento.',
        'Cookies de segmentación: Meta Pixel — se utilizan para medir la efectividad de las campañas publicitarias y mejorar la segmentación. Estas cookies solo se cargan después de que usted dé su consentimiento.',
        'Puede navegar en modo privado/incógnito para evitar que las cookies persistan. También puede desactivar las cookies en la configuración de su navegador, aunque esto puede reducir su experiencia en nuestro sitio.',
      ],
    },
    {
      title: 'Enlaces de Afiliados',
      content: 'Nuestro sitio contiene enlaces de afiliados de Amazon. Cuando hace clic en un enlace de afiliado y realiza una compra en Amazon, podemos ganar una pequeña comisión sin costo adicional para usted. Amazon recopila datos a través de sus propios sistemas cuando visita su sitio; consulte la Política de Privacidad de Amazon para más detalles.',
    },
    {
      title: 'Modificaciones a Esta Política',
      content: 'Podemos actualizar esta Política de Privacidad de vez en cuando para cumplir con la ley aplicable o para reflejar cambios en nuestras prácticas de datos. Notificaremos a los usuarios por correo electrónico cuando se realicen cambios significativos. Recomendamos revisar esta política periódicamente.',
    },
    {
      title: 'Contacto — Responsable de Privacidad',
      content: `Para cualquier pregunta, solicitud de acceso, modificación o eliminación de sus datos, o para presentar una queja, contacte a nuestro Responsable de Privacidad:\n\n${CONTACT_NAME}\n${CONTACT_EMAIL}`,
    },
  ],
};

const fr: PrivacyContent = {
  pageTitle: 'Politique de Confidentialité',
  effectiveDate: EFFECTIVE_DATE_FR,
  lastUpdated: EFFECTIVE_DATE_FR,
  contactName: CONTACT_NAME,
  contactEmail: CONTACT_EMAIL,
  sections: [
    {
      title: 'Objectif de Cette Politique',
      content: 'Cette politique de confidentialité a pour but d\'informer les utilisateurs de biohacker.digital des données personnelles que nous recueillons, de leur utilisation, des personnes y ayant accès, de vos droits en tant qu\'utilisateur, et de nos pratiques en matière de cookies. Cette politique s\'applique à tous les visiteurs et utilisateurs du site, quel que soit leur emplacement.',
    },
    {
      title: 'Lois Applicables',
      content: [
        'Québec — Loi 25 (Loi modernisant des dispositions législatives en matière de protection des renseignements personnels) : Comme biohacker.digital peut collecter des données de résidents du Québec, nous nous conformons à la Loi 25, qui impose des obligations strictes en matière de consentement, de transparence, de droits des personnes concernées (accès, rectification, suppression), de notification des incidents à la Commission d\'accès à l\'information (CAI), et d\'évaluations des facteurs relatifs à la vie privée pour les transferts transfrontaliers.',
        'Canada — LPRPDE (Loi sur la protection des renseignements personnels et les documents électroniques) : Nous nous conformons à la loi fédérale canadienne sur la protection de la vie privée régissant la collecte, l\'utilisation et la divulgation des renseignements personnels dans le cadre d\'activités commerciales.',
        'Union européenne — RGPD (Règlement général sur la protection des données) : Pour les utilisateurs dans les pays de l\'UE/EEE, le RGPD s\'applique. En cas d\'incohérence entre cette politique et le RGPD, le RGPD prévaudra.',
        'États-Unis — CCPA de Californie : Pour les résidents de Californie, nous visons à nous conformer à la CCPA. En cas d\'incohérences, la loi californienne prévaudra.',
      ],
    },
    {
      title: 'Consentement',
      content: [
        'En utilisant notre site, vous consentez à : (1) les termes de cette politique de confidentialité ; et (2) la collecte, l\'utilisation et la conservation des données qui y sont énumérées.',
        'Résidents du Québec : Le consentement est obtenu de manière expresse avant la collecte de données sensibles. Le consentement pour les mineurs de moins de 14 ans nécessite l\'autorisation des parents ou du tuteur légal.',
        'Vous pouvez retirer votre consentement à tout moment en nous contactant à l\'adresse indiquée au bas de cette politique.',
      ],
    },
    {
      title: 'Données Personnelles que Nous Collectons',
      content: [
        'Données collectées automatiquement : Adresse IP, localisation approximative (pays/région), pages visitées, contenu consulté, durée de la session, type et version du navigateur, type d\'appareil.',
        'Données collectées via formulaires et interactions : Prénom et nom, adresse courriel, langue préférée (paramètre régional), messages et questions du forum communautaire, préférences d\'abonnement à l\'infolettre.',
        'Nous ne collectons que les données nécessaires pour atteindre les objectifs énoncés dans cette politique. Nous ne recueillerons pas de données supplémentaires sans vous en informer au préalable.',
      ],
    },
    {
      title: 'Comment Nous Utilisons les Données Personnelles',
      content: [
        'Les données collectées automatiquement sont utilisées pour : des statistiques de trafic anonymes, l\'optimisation des performances du site et l\'amélioration du contenu.',
        'Les données collectées via les formulaires sont utilisées pour : envoyer les courriels de connexion par lien magique, livrer notre infolettre, permettre la participation au forum communautaire, et répondre aux demandes des utilisateurs.',
        'Nous n\'utilisons pas vos données à des fins autres que celles divulguées ici.',
      ],
    },
    {
      title: 'Qui a Accès à vos Données',
      content: [
        'Accès interne : Seuls le propriétaire du site et le personnel autorisé ont accès aux données des utilisateurs, limité à ce qui est nécessaire aux fins déclarées.',
        'Fournisseurs de services tiers : Nous utilisons les sous-traitants suivants qui peuvent traiter vos données en notre nom — Supabase (base de données et authentification, serveurs aux États-Unis), Vercel (hébergement du site Web, serveurs aux États-Unis et dans d\'autres régions), Resend (livraison de courriels transactionnels), Google Analytics (analyses anonymes, États-Unis), Meta Pixel (analyses publicitaires anonymes, États-Unis).',
        'Les tiers sont contractuellement tenus de n\'utiliser vos données qu\'aux fins spécifiques pour lesquelles elles ont été partagées.',
        'Nous ne vendons pas vos données personnelles. Nous pouvons les divulguer uniquement si la loi l\'exige, pour des procédures judiciaires, ou pour protéger nos droits légaux.',
      ],
    },
    {
      title: 'Transferts Internationaux de Données',
      content: [
        'Vos données peuvent être traitées ou stockées dans les pays suivants : Canada, États-Unis, France (UE).',
        'Pour les résidents du Québec : Tout transfert de renseignements personnels hors du Québec est soumis à une évaluation des facteurs relatifs à la vie privée (EFVP) conformément à la Loi 25, et n\'est autorisé que lorsque les données bénéficient d\'une protection équivalente.',
        'Pour les résidents de l\'UE/EEE : Les transferts internationaux sont effectués au moyen de garanties appropriées (Clauses contractuelles types) conformément au RGPD.',
      ],
    },
    {
      title: 'Conservation des Données',
      content: 'Nous ne conservons les données personnelles que le temps nécessaire pour atteindre les fins pour lesquelles elles ont été collectées, ou tel que requis par la loi applicable. Les données des abonnés à l\'infolettre sont conservées jusqu\'à leur désabonnement. Le contenu du forum peut être conservé pendant la durée de vie de la communauté, à moins que vous ne demandiez sa suppression. Les données d\'analyse sont conservées sous forme anonymisée et agrégée.',
    },
    {
      title: 'Comment Nous Protégeons vos Données',
      content: [
        'Chiffrement HTTPS/TLS sur toutes les données en transit.',
        'Sécurité au niveau des lignes (RLS) sur notre base de données Supabase — aucun accès non autorisé entre utilisateurs.',
        'Authentification par lien magique — aucun mot de passe stocké.',
        'Mises à jour de sécurité périodiques des dépendances de la plateforme.',
        'Contrôles d\'accès restreints — seul le personnel autorisé peut accéder aux données brutes des utilisateurs.',
        'Bien que nous prenions toutes les précautions raisonnables, aucun système basé sur Internet ne peut garantir une sécurité absolue.',
      ],
    },
    {
      title: 'Mineurs',
      content: 'Notre site ne s\'adresse pas aux enfants de moins de 13 ans. Nous ne collectons pas sciemment d\'informations personnelles d\'enfants de moins de 13 ans. Pour les résidents du Québec : conformément à la Loi 25, le consentement d\'un parent ou d\'un tuteur légal est requis pour collecter des données de personnes de moins de 14 ans. Si vous pensez que nous avons collecté par inadvertance de telles données, veuillez nous contacter immédiatement afin que nous puissions les supprimer.',
    },
    {
      title: 'Vos Droits en Tant qu\'Utilisateur',
      content: [
        'Droit d\'accès : Vous pouvez demander une copie de toutes les données personnelles que nous détenons à votre sujet.',
        'Droit de rectification : Vous pouvez demander la correction de données inexactes ou incomplètes.',
        'Droit à l\'effacement (« droit à l\'oubli ») : Vous pouvez demander la suppression de vos données personnelles, sous réserve des obligations légales de conservation.',
        'Droit à la portabilité des données : Vous pouvez demander vos données dans un format structuré et lisible par machine.',
        'Droit de retirer votre consentement : Vous pouvez retirer votre consentement au traitement des données à tout moment.',
        'Droit d\'opposition : Vous pouvez vous opposer à certains types de traitement, y compris le marketing direct.',
        'Droit de déposer une plainte : Les résidents du Québec peuvent déposer une plainte auprès de la Commission d\'accès à l\'information (CAI) à www.cai.gouv.qc.ca. Les résidents canadiens peuvent contacter le Commissariat à la protection de la vie privée du Canada à www.priv.gc.ca.',
        'Pour exercer l\'un de ces droits, veuillez contacter notre responsable de la protection de la vie privée indiqué au bas de cette politique.',
      ],
    },
    {
      title: 'Notification des Incidents de Sécurité',
      content: 'En cas d\'incident impliquant des données personnelles et présentant un risque de préjudice grave pour les utilisateurs, nous informerons les utilisateurs concernés et l\'autorité réglementaire compétente (la CAI du Québec, ou le Commissariat à la protection de la vie privée du Canada) dans les meilleurs délais et dans les délais requis par la loi applicable.',
    },
    {
      title: 'Politique sur les Cookies',
      content: [
        'Un cookie est un petit fichier stocké sur votre appareil par notre site Web. Nous utilisons les types de cookies suivants :',
        'Cookies fonctionnels : Mémorisent vos préférences linguistiques et l\'état de votre session afin que vous n\'ayez pas à les resélectionner à chaque visite.',
        'Cookies analytiques : Google Analytics — utilisés pour collecter des statistiques anonymes sur l\'utilisation du site afin d\'améliorer le contenu et les performances.',
        'Cookies de ciblage : Meta Pixel — utilisés pour mesurer l\'efficacité des campagnes publicitaires et améliorer le ciblage. Ces cookies ne sont chargés qu\'après votre consentement.',
        'Vous pouvez naviguer en mode privé/incognito pour empêcher la persistance des cookies. Vous pouvez également désactiver les cookies dans les paramètres de votre navigateur, bien que cela puisse réduire votre expérience sur notre site.',
      ],
    },
    {
      title: 'Liens d\'Affiliation',
      content: 'Notre site contient des liens d\'affiliation Amazon. Lorsque vous cliquez sur un lien d\'affiliation et effectuez un achat sur Amazon, nous pouvons recevoir une petite commission sans frais supplémentaires pour vous. Amazon collecte des données via ses propres systèmes lorsque vous visitez son site ; veuillez consulter la Politique de confidentialité d\'Amazon pour plus de détails.',
    },
    {
      title: 'Modifications de Cette Politique',
      content: 'Nous pouvons mettre à jour cette politique de confidentialité de temps à autre pour rester en conformité avec la loi applicable ou pour tenir compte des changements apportés à nos pratiques de données. Nous informerons les utilisateurs par courriel lorsque des modifications importantes seront apportées. Nous recommandons de consulter régulièrement cette politique.',
    },
    {
      title: 'Contact — Responsable de la Protection de la Vie Privée',
      content: `Pour toute question, demande d'accès, de modification ou de suppression de vos données, ou pour déposer une plainte, veuillez contacter notre responsable de la protection de la vie privée :\n\n${CONTACT_NAME}\n${CONTACT_EMAIL}`,
    },
  ],
};

export const privacyContent: Record<string, PrivacyContent> = {
  en,
  es,
  'fr-CA': fr,
};
