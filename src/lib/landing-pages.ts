/**
 * Keyword-focused service pages (rendered by src/app/[slug]/page.tsx).
 *
 * Each page targets one cluster of related searches (e.g. "ESE lightning
 * arrester", "solar earthing", "wind turbine gearbox repair") so Google and
 * AI search engines have a dedicated, in-depth answer for that topic.
 *
 * IMPORTANT: Company-specific statements must only restate facts already
 * published on this site (services, products, specs, regions, experience).
 * General technical explanations must stay accurate and conservative.
 */

import type { FaqItem } from './structured-data';

export type Division = 'lightning' | 'wind' | 'solar' | 'renewable';

export interface ContentSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface Highlight {
  value: string;
  label: string;
}

export interface LandingPage {
  slug: string;
  division: Division;
  /** Short name used in navigation, breadcrumbs and related-page cards. */
  navLabel: string;
  /** <title> (the site name is appended by the layout template). */
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  eyebrow: string;
  h1: string;
  intro: string;
  heroImage: string;
  heroAlt: string;
  /** Optional product photo shown in the sidebar (white-background product shots). */
  productImage?: { src: string; alt: string };
  highlights: Highlight[];
  /** Services / products offered under this topic (also used for Service JSON-LD). */
  offers: string[];
  sections: ContentSection[];
  faqs: FaqItem[];
  related: string[];
  areaServed: string[];
  serviceType: string;
}

const LP_AREAS = ['Tamil Nadu'];
const WIND_AREAS = ['Tamil Nadu', 'Karnataka'];
const SOLAR_AREAS = ['Tamil Nadu'];

/** Free-licence Unsplash stock photos used until Henel's own solar project photos are available. */
const unsplash = (id: string) => `https://images.unsplash.com/photo-${id}`;
export const SOLAR_IMAGES = {
  field: unsplash('1509391366360-2e959784a276'),
  installer: unsplash('1624397640148-949b1732bb0a'),
  technician: unsplash('1668097613572-40b7c11c8727'),
  hardHat: unsplash('1648135327756-b606e2eb8caa'),
  house: unsplash('1655300256335-beef51a914fe'),
  industrialRoof: unsplash('1745187946672-2c1d8cf26a2b'),
  closeUp: unsplash('1707247111552-aaf74241058b'),
  wiring: unsplash('1559302504-64aae6ca6b6d'),
};

const QUOTE_ANSWER =
  'Call +91 94432 82312 or +91 94436 92711, chat on WhatsApp at +91 94432 82312, email henelkkla@gmail.com, or use the quote request form on the contact page.';

export const landingPages: LandingPage[] = [
  // ───────────────────────────── Lightning protection ─────────────────────────────
  {
    slug: 'lightning-arrester',
    division: 'lightning',
    navLabel: 'Lightning Arrester',
    metaTitle: 'Lightning Arrester Supply & Installation, Tamil Nadu',
    metaDescription:
      'Lightning arrester supply and installation for homes, industries, commercial buildings, temples, churches and towers across Tamil Nadu. ESE and copper conventional lightning arresters with earthing and surge protection. Est. 1999. Call +91 94432 82312.',
    keywords: [
      'lightning arrester',
      'lightning arrester installation',
      'lightning arrester for home',
      'lightning arrester for building',
      'lightning arrester for house',
      'lightning conductor',
      'lightning rod installation',
      'copper lightning arrester',
      'lightning arrester dealers in Tamil Nadu',
      'lightning arrester supplier India',
      'lightning arrester Kanyakumari',
      'lightning arrester Nagercoil',
      'lightning arrester company',
      'lightning protection for temple',
      'lightning arrester near me',
    ],
    eyebrow: 'Lightning Protection',
    h1: 'Lightning Arrester Supply & Installation in Tamil Nadu',
    intro:
      'Henel Engineers Pvt. Ltd. supplies and installs lightning arresters for homes, factories, warehouses, commercial buildings, temples, churches, communication towers and infrastructure across Tamil Nadu — both ESE (Early Streamer Emission) and copper conventional lightning arresters, complete with down conductors, earthing and surge protection.',
    heroImage: '/assets/images/lightning-protection/work/install-new-4.jpg',
    heroAlt: 'Technician installing a lightning arrester mast on a building rooftop',
    productImage: {
      src: '/assets/images/copper-spike-lightning-arrester.webp',
      alt: 'Copper bonded conventional lightning arrester with mounting base',
    },
    highlights: [
      { value: 'Up to 107 m', label: 'ESE protection radius (TOPBAS SIRIUS, Level IV)' },
      { value: '100 kA', label: 'Copper conventional arrester rating' },
      { value: 'Since 1999', label: 'Engineering experience' },
      { value: 'TOPBAS', label: 'Authorised supplier' },
    ],
    offers: [
      'ESE lightning arrester supply & installation',
      'Copper bonded conventional lightning arrester',
      'Lightning protection system (LPS) design',
      'Down conductors, clamps & test joints',
      'Earthing system & earth pits',
      'Surge protection devices (SPD)',
    ],
    sections: [
      {
        heading: 'What is a lightning arrester?',
        paragraphs: [
          'A lightning arrester — also called a lightning conductor, lightning rod or air terminal — is the top part of an external lightning protection system. It intercepts a lightning strike and carries the current safely through down conductors into the earthing system, so the strike does not pass through the building structure, its wiring or the people inside.',
          'A lightning arrester only works as part of a complete system: the air terminal, the down conductors, a low-resistance earthing system and surge protection devices for the electrical installation. Henel Engineers supplies and installs every part of that system.',
        ],
      },
      {
        heading: 'Types of lightning arrester we supply',
        paragraphs: [
          'We supply and install two families of lightning arrester. The right choice depends on the size of the structure, the area to be protected and the protection level required by the risk assessment.',
        ],
        bullets: [
          'TOPBAS SIRIUS ESE lightning arrester — non-electronic, ΔT 60 μs, protection radius up to 107 m (5 m mast, Level IV), 304L stainless steel, tested at 200 kA (10/350 μs).',
          'UMBRAECO ESE lightning arrester — non-electronic, ΔT 10 µs, protection radius up to 51 m (Level IV), CE certified, no battery or external power required.',
          'Copper bonded conventional lightning arrester — copper, 100 kA rating, 5-metre protection radius, made in India.',
        ],
      },
      {
        heading: 'ESE or conventional — which lightning arrester do you need?',
        paragraphs: [
          'A conventional (Franklin rod) lightning arrester protects a small area around its tip, so larger roofs need several rods and more conductors. An ESE lightning arrester launches an upward streamer earlier and protects a much larger radius from a single mast — up to 107 m for the TOPBAS SIRIUS at Level IV — which makes it practical for factories, campuses, warehouses and tall buildings.',
          'For small structures or a single point, a conventional arrester can be enough. We recommend the type and number of arresters after a site-specific risk assessment and zone-of-protection calculation.',
        ],
      },
      {
        heading: 'How we install a lightning arrester',
        paragraphs: [
          'Every project follows the same end-to-end process, from initial site assessment through supply, installation and ongoing maintenance.',
        ],
        bullets: [
          'Site assessment and lightning risk assessment',
          'System design to the applicable standards, including zone-of-protection calculations',
          'Supply of the arrester, mast, conductors, clamps, test joints and accessories',
          'Installation of the air terminal and down conductors',
          'Earthing system with earth electrodes and earth pits',
          'Surge protection devices at electrical panels',
        ],
      },
    ],
    faqs: [
      {
        question: 'How does a lightning arrester work?',
        answer:
          'A lightning arrester is positioned at the highest point of a structure to intercept a lightning strike. The current is carried through down conductors into the earthing system, where it dissipates safely into the ground instead of passing through the building, its wiring or occupants.',
      },
      {
        question: 'Does my house need a lightning arrester?',
        answer:
          'Buildings that are tall, isolated, on high ground, or that contain sensitive electronics or many people benefit most from lightning protection. A lightning risk assessment decides whether protection is required and which level is needed. Henel Engineers installs lightning arresters on residential buildings as well as industrial and commercial sites across Tamil Nadu.',
      },
      {
        question: 'What is the difference between a lightning arrester and a surge protection device?',
        answer:
          'A lightning arrester (air terminal) protects the structure from a direct strike, while a surge protection device (SPD) protects the electrical installation and equipment inside from overvoltages that travel along power and data lines. A complete lightning protection system uses both.',
      },
      {
        question: 'How many lightning arresters does a building need?',
        answer:
          'It depends on the area to be protected and the protection radius of the arrester. A conventional copper arrester covers about a 5-metre radius, so large roofs need several. A single ESE lightning arrester such as the TOPBAS SIRIUS can cover a radius of up to 107 m (5 m mast, Level IV). Henel Engineers calculates the exact layout during design.',
      },
      {
        question: 'Can a lightning arrester be installed on a temple or church?',
        answer:
          'Yes. Henel Engineers’ field installations include lightning arresters on a temple building and on a church steeple, as well as on residential rooftops and buildings under construction.',
      },
      { question: 'How do I get a lightning arrester quote?', answer: QUOTE_ANSWER },
    ],
    related: ['ese-lightning-arrester', 'earthing-system', 'surge-protection-device', 'solar-lightning-protection-earthing'],
    areaServed: LP_AREAS,
    serviceType: 'Lightning Arrester Installation',
  },
  {
    slug: 'ese-lightning-arrester',
    division: 'lightning',
    navLabel: 'ESE Lightning Arrester',
    metaTitle: 'ESE Lightning Arrester Supplier — TOPBAS SIRIUS',
    metaDescription:
      'Authorised TOPBAS supplier of ESE (Early Streamer Emission) lightning arresters — TOPBAS SIRIUS (up to 107 m radius, ΔT 60 μs) and UMBRAECO (up to 51 m). NF C 17-102. Supply, design and installation across Tamil Nadu. Call +91 94432 82312.',
    keywords: [
      'ESE lightning arrester',
      'early streamer emission lightning arrester',
      'ESE lightning arrester supplier India',
      'ESE lightning arrester dealer Tamil Nadu',
      'ESE lightning arrester installation',
      'TOPBAS ESE lightning arrester',
      'TOPBAS SIRIUS',
      'UMBRAECO ESE lightning arrester',
      'NF C 17-102 lightning arrester',
      'ESE lightning arrester protection radius',
      'ESE air terminal',
      'non-electronic ESE lightning arrester',
      'ESE lightning conductor',
      'ESE lightning arrester for industry',
    ],
    eyebrow: 'Authorised TOPBAS Supplier',
    h1: 'ESE Lightning Arrester Supplier & Installer',
    intro:
      'Henel Engineers Pvt. Ltd. is an authorised supplier of TOPBAS ESE (Early Streamer Emission) lightning arresters, imported from Turkey. We supply, design and install ESE lightning protection for industrial, commercial and infrastructure projects across Tamil Nadu.',
    heroImage: '/assets/images/lightning-protection/work/install-1.jpg',
    heroAlt: 'Lightning arrester installed on a rooftop mast above a temple building',
    productImage: {
      src: '/assets/images/sirius-ese-lightning-arrester.webp',
      alt: 'TOPBAS SIRIUS ESE lightning arrester, stainless steel early streamer emission air terminal',
    },
    highlights: [
      { value: '107 m', label: 'Max. protection radius — SIRIUS (5 m mast, Level IV)' },
      { value: '60 μs', label: 'Advance time ΔT — SIRIUS' },
      { value: '200 kA', label: 'Tested impulse current (10/350 μs)' },
      { value: 'No battery', label: 'Non-electronic design' },
    ],
    offers: [
      'TOPBAS SIRIUS ESE lightning arrester',
      'UMBRAECO ESE lightning arrester',
      'ESE lightning protection design & risk assessment',
      'Mast, down conductor & test joint installation',
      'Earthing system for ESE installations',
      'Surge protection devices (SPD)',
    ],
    sections: [
      {
        heading: 'How an ESE lightning arrester works',
        paragraphs: [
          'An Early Streamer Emission (ESE) lightning arrester is an air terminal designed to launch its upward streamer earlier than a simple rod under the same storm conditions. That time advance — called ΔT and measured in microseconds — lets it intercept lightning over a much larger area, so one ESE mast can protect a zone that would otherwise need many conventional rods.',
          'The TOPBAS SIRIUS and UMBRAECO arresters supplied by Henel Engineers are non-electronic: they need no battery or external power source, which keeps maintenance simple.',
        ],
      },
      {
        heading: 'Protection radius and protection levels',
        paragraphs: [
          'Standards such as NF C 17-102 define four protection levels, from Level I (most stringent, smallest radius) to Level IV (least stringent, largest radius). The protection radius of an ESE arrester depends on the protection level, the height of the arrester above the structure and its ΔT.',
          'The level is chosen from a lightning risk assessment of the structure, which is why we design every ESE installation for the specific site rather than quoting a radius in isolation.',
        ],
      },
      {
        heading: 'ESE lightning arresters we supply',
        paragraphs: [],
        bullets: [
          'TOPBAS SIRIUS — non-electronic ESE · ΔT 60 μs · 304L stainless steel · protection radius up to 107 m (5 m mast, Level IV) · 200 kA tested (10/350 μs) · NF C 17-102, UNE 21186, TS EN 62561.',
          'UMBRAECO — non-electronic ESE · ΔT 10 µs · protection radius up to 51 m (Level IV) · designed and tested to NF C 17-102 (2011) · CE certified · no battery or external power.',
        ],
      },
      {
        heading: 'Where ESE lightning arresters are used',
        paragraphs: [
          'ESE lightning protection suits structures where a large area must be covered from a single point: factories, warehouses, commercial buildings, communication towers, campuses and infrastructure facilities. Our field installations also include temples, church steeples, buildings under construction and residential rooftops with solar panels.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What is an ESE lightning arrester?',
        answer:
          'An Early Streamer Emission (ESE) lightning arrester is a non-electronic air terminal designed to trigger an earlier upward streamer than a conventional lightning rod, giving it a wider zone of protection. Henel Engineers supplies and installs ESE lightning arresters, including the TOPBAS SIRIUS and UMBRAECO models.',
      },
      {
        question: 'What is the protection radius of an ESE lightning arrester?',
        answer:
          'It depends on the model, mast height and protection level. The TOPBAS SIRIUS offers up to 107 m (5 m mast, Level IV) and the UMBRAECO up to 51 m (Level IV). Higher protection levels (Level I–III) give smaller radii.',
      },
      {
        question: 'Which standard do ESE lightning arresters follow?',
        answer:
          'The TOPBAS SIRIUS is designed to NF C 17-102, UNE 21186 and TS EN 62561. The UMBRAECO is designed and tested to NF C 17-102 (2011) and is CE certified.',
      },
      {
        question: 'Does an ESE lightning arrester need earthing?',
        answer:
          'Yes. An ESE lightning arrester must be connected by down conductors to a low-resistance earthing system so the lightning current can dissipate safely. Henel Engineers designs and installs the earthing along with the arrester.',
      },
      {
        question: 'Is Henel Engineers an authorised TOPBAS supplier?',
        answer:
          'Yes. Henel Engineers is an authorised supplier of TOPBAS lightning protection products, which are imported from Turkey, including ESE lightning arresters, surge protection devices and earthing accessories.',
      },
      { question: 'How do I get an ESE lightning arrester quote?', answer: QUOTE_ANSWER },
    ],
    related: ['lightning-arrester', 'earthing-system', 'surge-protection-device', 'solar-lightning-protection-earthing'],
    areaServed: LP_AREAS,
    serviceType: 'ESE Lightning Arrester Supply and Installation',
  },
  {
    slug: 'earthing-system',
    division: 'lightning',
    navLabel: 'Earthing System',
    metaTitle: 'Earthing Contractor & Chemical Earthing, Tamil Nadu',
    metaDescription:
      'Earthing system design and installation in Tamil Nadu: chemical earth electrodes, copper bonded and GI earth rods, CARBOMAXX earthing compound and polyplastic / FRP earth pit covers. Supply and installation by Henel Engineers, est. 1999.',
    keywords: [
      'earthing contractor Tamil Nadu',
      'earthing system installation',
      'chemical earthing',
      'earthing for home',
      'industrial earthing',
      'copper bonded earth rod',
      'copper earthing electrode',
      'GI earth rod',
      'GI pipe earthing',
      'earthing compound',
      'CARBOMAXX earthing compound',
      'earth pit',
      'earth pit cover',
      'FRP earth pit cover',
      'earthing materials supplier',
      'grounding system',
    ],
    eyebrow: 'Earthing Solutions',
    h1: 'Earthing System Installation & Earthing Materials',
    intro:
      'Henel Engineers Pvt. Ltd. designs and installs earthing systems — including chemical earth electrodes and earth pits — that safely dissipate fault and lightning currents, and supplies earthing materials: copper bonded and GI earth rods, earthing compound and earth pit covers.',
    heroImage: '/assets/images/lightning-protection/work/install-5.jpg',
    heroAlt: 'Lightning arrester mast installed on a building under construction',
    productImage: {
      src: '/assets/images/copper-earth-rod.webp',
      alt: 'Copper bonded earth rod for earthing and grounding installations',
    },
    highlights: [
      { value: '17.2 mm', label: 'Copper bonded earth rod diameter' },
      { value: '48 mm', label: 'Class B GI pipe earth rod' },
      { value: '10 / 25 kg', label: 'CARBOMAXX compound bags' },
      { value: '1–3 m', label: 'Earth rod lengths' },
    ],
    offers: [
      'Earthing system design & installation',
      'Chemical earth electrodes & earth pits',
      'Copper bonded earth rods',
      'GI earth rods',
      'CARBOMAXX earthing compound',
      'Polyplastic & FRP earth pit covers',
    ],
    sections: [
      {
        heading: 'Why a good earthing system matters',
        paragraphs: [
          'Earthing (grounding) gives fault currents and lightning currents a low-resistance path into the ground. It protects people from electric shock, helps protective devices operate correctly, and is the foundation of every lightning protection system — even the best lightning arrester cannot protect a structure without good earthing.',
        ],
      },
      {
        heading: 'Chemical earthing and earth pits',
        paragraphs: [
          'In chemical earthing, the earth electrode is surrounded by a conductive backfill compound that helps achieve and maintain a low earth resistance, even in difficult soil. Each electrode sits in an earth pit with a cover, so the connection can be inspected and tested over the life of the installation.',
        ],
      },
      {
        heading: 'Earthing materials we supply',
        paragraphs: [],
        bullets: [
          'Copper bonded earth rod — 17.2 mm diameter, 1 m, 2 m and 3 m lengths, minimum order 1 piece.',
          'GI earth rod — Class B GI pipe, 48 mm diameter, 3 mm wall thickness, 1 m, 2 m and 3 m lengths.',
          'CARBOMAXX earthing compound (TOPBAS) — powder backfill in 10 kg and 25 kg bags, made in India.',
          'Earth pit cover — 6-inch black polyplastic (top 155 mm, bottom 210 mm, height 240 mm).',
          'FRP earth pit cover — 10-inch, corrosion resistant (top 254 mm, bottom 210 mm, height 240 mm).',
        ],
      },
      {
        heading: 'Copper bonded vs GI earth rods',
        paragraphs: [
          'A copper bonded earth rod has a copper layer bonded to a steel core, combining good conductivity with corrosion resistance for a long service life. A GI (galvanised iron) pipe earth rod is a widely used, economical electrode. The right choice depends on soil conditions, the earth resistance required and the project budget — we recommend the electrode during design.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What is chemical earthing?',
        answer:
          'Chemical earthing is an earthing method where the earth electrode is surrounded by a conductive backfill compound — such as CARBOMAXX earthing compound — to help achieve and maintain a low, stable earth resistance. Henel Engineers designs and installs chemical earth electrodes and earth pits.',
      },
      {
        question: 'Which is better: copper bonded or GI earth rod?',
        answer:
          'Copper bonded earth rods offer good conductivity and corrosion resistance for a long service life, while GI earth rods are an economical, widely used option. The best choice depends on soil conditions, required earth resistance and budget.',
      },
      {
        question: 'Why is an earth pit cover needed?',
        answer:
          'An earth pit cover protects the top of the earth electrode and its connections, and gives easy access for periodic inspection and earth resistance testing. Henel Engineers supplies 6-inch polyplastic and 10-inch corrosion-resistant FRP earth pit covers.',
      },
      {
        question: 'Can I buy earthing materials without installation?',
        answer:
          'Henel Engineers supplies earthing materials including copper bonded earth rods (minimum order 1 piece), GI earth rods, CARBOMAXX earthing compound and earth pit covers. Contact us with your quantities for a quote.',
      },
      { question: 'How do I get an earthing quote?', answer: QUOTE_ANSWER },
    ],
    related: ['lightning-arrester', 'ese-lightning-arrester', 'surge-protection-device', 'solar-lightning-protection-earthing'],
    areaServed: LP_AREAS,
    serviceType: 'Earthing System Installation',
  },
  {
    slug: 'surge-protection-device',
    division: 'lightning',
    navLabel: 'Surge Protection Device (SPD)',
    metaTitle: 'Surge Protection Device (SPD) — Type 1 + 2 Supplier',
    metaDescription:
      'Type 1 + 2 (Class B + C) three-phase surge protection devices for electrical panels, data systems and sensitive equipment. TOPBAS TB7K320T12L: Uc 320 VAC, Iimp 7 kA, In 30 kA, Up 1.6 kV. Supply and installation by Henel Engineers, Tamil Nadu.',
    keywords: [
      'surge protection device',
      'SPD',
      'Type 1 + 2 SPD',
      'Type 1 SPD',
      'Type 2 SPD',
      'three phase SPD',
      'Class B + C surge protection',
      'surge arrester for electrical panel',
      'lightning surge protection',
      'TOPBAS SPD',
      'surge protector for industry',
      'SPD supplier Tamil Nadu',
    ],
    eyebrow: 'Surge Protection',
    h1: 'Surge Protection Devices (SPD) — Supply & Installation',
    intro:
      'Henel Engineers Pvt. Ltd. supplies and installs surge protection devices (SPDs) for electrical panels, data systems and sensitive equipment, preventing damage from transient overvoltages caused by lightning and switching.',
    heroImage: '/assets/images/lightning-protection/hero-storm.jpg',
    heroAlt: 'Lightning storm over a city with a lightning arrester installed on a rooftop',
    productImage: {
      src: '/assets/images/type-1-2-spd.webp',
      alt: 'Type 1 + 2 three-phase surge protection device for electrical panels',
    },
    highlights: [
      { value: 'Type 1 + 2', label: 'Class B + C combined protection' },
      { value: '7 kA', label: 'Impulse current (Iimp)' },
      { value: '30 kA', label: 'Nominal discharge current (In)' },
      { value: '1.6 kV', label: 'Voltage protection level (Up)' },
    ],
    offers: [
      'Type 1 + 2 three-phase SPD supply',
      'SPD installation at main incoming panels',
      'Surge protection for data systems',
      'Surge protection as part of complete LPS',
    ],
    sections: [
      {
        heading: 'What a surge protection device does',
        paragraphs: [
          'A surge protection device limits transient overvoltages and diverts the excess current safely to earth before it reaches connected equipment. Surges can come from a nearby or direct lightning strike, or from switching operations on the power network, and can damage drives, controllers, computers and communication equipment in an instant.',
        ],
      },
      {
        heading: 'Type 1, Type 2 and Type 1 + 2 SPDs',
        paragraphs: [
          'Type 1 SPDs are designed for partial lightning currents and are typically installed where the supply enters a building that has external lightning protection. Type 2 SPDs protect against induced surges and are installed at distribution boards. A combined Type 1 + 2 (Class B + C) device provides both in a single unit at the main incoming panel.',
        ],
      },
      {
        heading: 'TOPBAS TB7K320T12L specifications',
        paragraphs: [],
        bullets: [
          'Protection type: Type 1 + 2 (Class B + C)',
          'Phase: three phase · Poles: 3 pole + N',
          'Rated voltage (Uc): 320 VAC',
          'Voltage protection level (Up): 1.6 kV',
          'Impulse current (Iimp): 7 kA · Nominal discharge current (In): 30 kA',
          'IP rating: IP20',
        ],
      },
      {
        heading: 'Why SPDs belong in every lightning protection system',
        paragraphs: [
          'A lightning arrester protects the structure from a direct strike, but surges can still travel through power and data cables into the building. That is why a complete lightning protection system from Henel Engineers includes surge protection for the electrical installation.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What is a surge protection device (SPD)?',
        answer:
          'A surge protection device (SPD) protects electrical panels, data systems and sensitive equipment from transient overvoltages caused by lightning or switching. It limits the surge voltage and diverts the excess current safely to earth.',
      },
      {
        question: 'What is the difference between Type 1 and Type 2 SPD?',
        answer:
          'A Type 1 SPD handles partial lightning currents and is installed at the service entrance of buildings with external lightning protection. A Type 2 SPD protects against induced surges at distribution boards. A Type 1 + 2 SPD combines both functions in one device.',
      },
      {
        question: 'Where should an SPD be installed?',
        answer:
          'A Type 1 + 2 SPD is typically installed at the main incoming electrical panel, with further protection closer to sensitive equipment where needed. The exact arrangement is decided during the lightning protection design.',
      },
      {
        question: 'Do I need an SPD if my building has a lightning arrester?',
        answer:
          'Yes. A lightning arrester protects the structure from a direct strike, but surges can still enter through power and data lines and damage equipment inside. SPDs protect the internal installation.',
      },
      { question: 'How do I get an SPD quote?', answer: QUOTE_ANSWER },
    ],
    related: ['lightning-arrester', 'ese-lightning-arrester', 'earthing-system', 'solar-lightning-protection-earthing'],
    areaServed: LP_AREAS,
    serviceType: 'Surge Protection Device Supply and Installation',
  },
  {
    slug: 'solar-lightning-protection-earthing',
    division: 'solar',
    navLabel: 'Solar Lightning Protection & Earthing',
    metaTitle: 'Solar Earthing & Lightning Arrester for Solar Panels',
    metaDescription:
      'Lightning arresters, earthing and surge protection for rooftop solar panels and solar power installations in Tamil Nadu. ESE and conventional lightning arresters, earth rods, earthing compound and SPDs from Henel Engineers.',
    keywords: [
      'solar earthing',
      'solar panel earthing',
      'solar plant earthing',
      'solar rooftop earthing',
      'lightning arrester for solar panel',
      'lightning arrester for solar plant',
      'solar lightning protection',
      'solar rooftop lightning protection',
      'solar surge protection',
      'solar structure earthing',
      'earthing for solar inverter',
      'solar earthing Tamil Nadu',
    ],
    eyebrow: 'Renewable Energy Protection',
    h1: 'Lightning Protection & Earthing for Solar Panels',
    intro:
      'Rooftop solar panels sit in the most exposed part of a building and are wired to inverters and sensitive electronics. Henel Engineers Pvt. Ltd. supplies and installs the lightning arresters, earthing and surge protection that keep solar installations — and the buildings beneath them — protected.',
    heroImage: '/assets/images/lightning-protection/work/install-new-3.jpg',
    heroAlt: 'Lightning arrester mast installed on a residential building rooftop with solar panels',
    highlights: [
      { value: 'Up to 107 m', label: 'ESE protection radius from one mast' },
      { value: 'Type 1 + 2', label: 'Surge protection available' },
      { value: 'Copper & GI', label: 'Earth rods in 1–3 m lengths' },
      { value: 'Since 1999', label: 'Lightning protection experience' },
    ],
    offers: [
      'Lightning arresters for solar rooftops',
      'Earthing for solar structures & equipment',
      'Earth rods, earthing compound & earth pits',
      'Surge protection devices',
      'Lightning protection design & risk assessment',
    ],
    sections: [
      {
        heading: 'Why solar installations need lightning protection',
        paragraphs: [
          'Solar arrays are mounted on rooftops and open ground, often the highest and most exposed point of a site. A direct strike can damage panels and structures, while surges induced by nearby lightning can travel along cables and destroy inverters and monitoring electronics.',
          'Protection works in three layers: air terminals that intercept strikes, an earthing system that dissipates the current, and surge protection devices that protect the electrical equipment.',
        ],
      },
      {
        heading: 'Lightning arresters for solar rooftops',
        paragraphs: [
          'Air terminals are positioned so that the solar array lies inside the zone of protection. Because an ESE lightning arrester covers a large radius from a single mast, it can protect a whole rooftop array without a forest of rods across the roof. Henel Engineers has installed lightning arrester masts on residential rooftops with solar panels.',
        ],
      },
      {
        heading: 'Solar earthing',
        paragraphs: [
          'Module mounting structures, equipment and the lightning protection system all need reliable earthing. We supply and install earth electrodes, earth pits and earthing materials — copper bonded and GI earth rods, CARBOMAXX earthing compound and polyplastic or FRP earth pit covers.',
        ],
      },
      {
        heading: 'Surge protection for solar systems',
        paragraphs: [
          'Surge protection devices protect the electrical installation from transient overvoltages. Every SPD must be selected for where it is installed — the AC side of an inverter and the DC side of a solar array have different requirements — so SPD selection is part of the design.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do solar panels need a lightning arrester?',
        answer:
          'Solar panels are usually the most exposed part of a building, so lightning protection is strongly recommended where a risk assessment shows a strike risk. An air terminal places the array inside a zone of protection, with earthing and surge protection completing the system.',
      },
      {
        question: 'Will a lightning arrester shade my solar panels?',
        answer:
          'A lightning arrester mast is slim and is positioned during design to protect the array while keeping shading to a minimum. Because one ESE arrester covers a large radius, fewer masts are needed than with conventional rods.',
      },
      {
        question: 'What is solar earthing?',
        answer:
          'Solar earthing connects the solar mounting structures and electrical equipment to a low-resistance earth electrode, protecting people and equipment from fault and lightning currents. Henel Engineers supplies and installs earth rods, earthing compound and earth pits.',
      },
      {
        question: 'Has Henel Engineers installed lightning protection on solar rooftops?',
        answer:
          'Yes. Henel Engineers’ field installations include a lightning arrester mast on a residential building rooftop with solar panels.',
      },
      { question: 'How do I get a quote for solar lightning protection?', answer: QUOTE_ANSWER },
    ],
    related: ['rooftop-solar-installation', 'solar-panel-maintenance', 'ese-lightning-arrester', 'earthing-system'],
    areaServed: LP_AREAS,
    serviceType: 'Solar Lightning Protection and Earthing',
  },
  {
    slug: 'renewable-energy-services',
    division: 'renewable',
    navLabel: 'Renewable Energy Services',
    metaTitle: 'Renewable Energy Services — Wind O&M & Solar Protection',
    metaDescription:
      'Renewable energy engineering from Kanyakumari District, Tamil Nadu: wind turbine operation & maintenance across Tamil Nadu and Karnataka, plus lightning protection and earthing for solar installations. 25+ years, 30+ active CMCs.',
    keywords: [
      'renewable energy services Tamil Nadu',
      'renewable energy company Tamil Nadu',
      'renewable energy company Kanyakumari',
      'wind energy services',
      'wind energy company Tamil Nadu',
      'wind power maintenance',
      'green energy engineering services',
      'wind and solar services',
      'renewable energy maintenance',
      'wind farm services Tamil Nadu',
    ],
    eyebrow: 'Renewable Energy',
    h1: 'Renewable Energy Engineering Services',
    intro:
      'From its base in Kanyakumari District — home to some of India’s most active wind energy infrastructure — Henel Engineers Pvt. Ltd. keeps renewable energy assets productive and protected: wind turbine operation & maintenance across Tamil Nadu and Karnataka, and solar panel installation, maintenance, lightning protection and earthing.',
    heroImage: '/assets/images/windmill/hero-green-hills.jpg',
    heroAlt: 'Wind turbines on green rolling hills under a blue sky',
    highlights: [
      { value: '25+', label: 'Years in wind energy' },
      { value: '30+', label: 'Active wind CMC contracts' },
      { value: '7+', label: 'WTG makes supported' },
      { value: '24x7', label: 'Breakdown support' },
    ],
    offers: [
      'Wind turbine operation & maintenance',
      'Comprehensive Maintenance Contracts (CMC)',
      'Gearbox, blade, generator & hydraulic repairs',
      'Windmill erection & spare parts',
      'Rooftop & commercial solar installation',
      'Solar panel maintenance & service',
      'Solar lightning protection & earthing',
    ],
    sections: [
      {
        heading: 'Wind energy: operation & maintenance',
        paragraphs: [
          'Henel Engineers is an experienced wind energy service provider specialising in Wind Turbine Generator (WTG) operation, maintenance, breakdown services and technical support. With more than 25 years in the industry, we manage 30+ active Comprehensive Maintenance Contracts and support 7+ WTG makes across Tamil Nadu and Karnataka.',
        ],
        bullets: [
          'Gearbox repair & overhaul',
          'Blade patching, lightning damage repair & restoration',
          'Generator & transformer rewinding and bearing replacement',
          'Hydraulic unit and PCB servicing',
          'Windmill erection, installation & commissioning support',
          'Spare parts supply, site security and 24x7 breakdown support',
        ],
      },
      {
        heading: 'Solar: installation, maintenance & protection',
        paragraphs: [
          'Henel Engineers installs and services rooftop and commercial solar panel systems across Tamil Nadu. Our lightning protection division protects solar installations with ESE and conventional lightning arresters, earthing systems and surge protection devices — the same engineering we have delivered for industrial and commercial buildings across Tamil Nadu since 1999.',
        ],
      },
      {
        heading: 'One partner for protection and performance',
        paragraphs: [
          'Lightning is one of the biggest risks to renewable assets — from damaged turbine blades to failed inverters. Combining wind O&M experience with a dedicated lightning protection division lets Henel Engineers address both the performance and the protection of your renewable energy investment.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What renewable energy services does Henel Engineers provide?',
        answer:
          'Henel Engineers provides wind turbine (WTG) operation & maintenance, repairs, erection, spare parts and 24x7 breakdown support across Tamil Nadu and Karnataka, and lightning protection, earthing and surge protection for solar installations in Tamil Nadu.',
      },
      {
        question: 'Where is Henel Engineers based?',
        answer:
          'Henel Engineers is based in Aralvaimozhi, Kanyakumari District, Tamil Nadu, with a branch office in Marthandam. Kanyakumari District is home to some of India’s most active wind energy infrastructure.',
      },
      {
        question: 'How experienced is Henel Engineers in wind energy?',
        answer:
          'Henel Engineers has more than 25 years of experience in the wind energy sector, manages 30+ active Comprehensive Maintenance Contracts (CMC) and supports 7+ WTG makes.',
      },
      { question: 'How do I contact Henel Engineers?', answer: QUOTE_ANSWER },
    ],
    related: ['rooftop-solar-installation', 'windmill-maintenance-contract', 'commercial-solar-power-plant', 'solar-panel-maintenance'],
    areaServed: WIND_AREAS,
    serviceType: 'Renewable Energy Engineering Services',
  },

  // ───────────────────────────── Wind energy ─────────────────────────────
  {
    slug: 'windmill-maintenance-contract',
    division: 'wind',
    navLabel: 'Windmill AMC / CMC',
    metaTitle: 'Windmill Maintenance Contract (CMC / AMC)',
    metaDescription:
      'Comprehensive Maintenance Contracts (CMC) for windmills and wind turbines across Tamil Nadu and Karnataka. Scheduled and corrective maintenance, 24x7 breakdown support, 7+ WTG makes. 30+ active CMCs, 25+ years. Call +91 94432 82312.',
    keywords: [
      'windmill maintenance contract',
      'windmill AMC',
      'windmill CMC',
      'wind turbine annual maintenance contract',
      'wind turbine O&M contract',
      'windmill maintenance company',
      'windmill service provider Tamil Nadu',
      'windmill maintenance Karnataka',
      'wind turbine maintenance services India',
      'WTG O&M services',
      'windmill operation and maintenance',
      'windmill service near me',
    ],
    eyebrow: 'Wind Energy Division',
    h1: 'Windmill Maintenance Contracts (CMC / AMC)',
    intro:
      'Henel Engineers Pvt. Ltd. manages 30+ active Comprehensive Maintenance Contracts (CMC) for wind turbines across Tamil Nadu and Karnataka, keeping windmills generating with scheduled and corrective maintenance, 24x7 breakdown support and a multi-disciplinary team under one roof.',
    heroImage: '/assets/images/windmill/tower-technician.jpg',
    heroAlt: 'Technician on a wind turbine tower carrying out maintenance against a cloudy sky',
    highlights: [
      { value: '30+', label: 'Active CMC contracts' },
      { value: '25+', label: 'Years of experience' },
      { value: '7+', label: 'WTG makes supported' },
      { value: '24x7', label: 'Breakdown support' },
    ],
    offers: [
      'Scheduled (preventive) maintenance',
      'Corrective maintenance & fault diagnosis',
      '24x7 breakdown support',
      'Major component repair',
      'Spare parts supply',
      'Performance monitoring & reporting',
    ],
    sections: [
      {
        heading: 'What a windmill maintenance contract covers',
        paragraphs: [
          'A Comprehensive Maintenance Contract (CMC) — often searched for as a windmill AMC — puts the ongoing operation and maintenance of your wind turbine in the hands of one experienced provider. Henel Engineers combines scheduled and corrective maintenance with on-site technical assessment, fault diagnosis and performance reporting, so issues are found early and machines return to generation quickly.',
        ],
      },
      {
        heading: 'Why wind turbine owners choose Henel Engineers',
        paragraphs: [],
        bullets: [
          '25+ years of hands-on experience in the wind energy sector',
          '30+ active Comprehensive Maintenance Contracts',
          'Mechanical, electrical and technical experts under one roof',
          'Skilled technicians and adequate vehicles for field operations',
          '24x7 breakdown support for critical failures',
          'A to Z windmill services — from routine maintenance to major repairs',
        ],
      },
      {
        heading: 'Coverage across Tamil Nadu and Karnataka',
        paragraphs: [
          'We provide WTG maintenance and breakdown services across Tamil Nadu and Karnataka, supported by experienced technical personnel and the resources required to respond quickly and minimise machine downtime.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What is a windmill CMC?',
        answer:
          'A Comprehensive Maintenance Contract (CMC) is an ongoing agreement under which a service provider takes care of a wind turbine’s operation and maintenance. Henel Engineers currently manages 30+ active CMCs across Tamil Nadu and Karnataka.',
      },
      {
        question: 'Is a windmill AMC the same as a CMC?',
        answer:
          'Both are ongoing maintenance agreements for a wind turbine. A comprehensive contract (CMC) typically covers a broader scope of maintenance and support. Contact Henel Engineers to discuss the scope that suits your machine.',
      },
      {
        question: 'Which wind turbine makes does Henel Engineers maintain?',
        answer:
          'Henel Engineers supports 7+ wind turbine generator (WTG) makes, and its field work includes erection of Vestas RRB wind turbines.',
      },
      {
        question: 'Does the contract include breakdown support?',
        answer:
          'Henel Engineers provides 24x7 breakdown support — field teams are available round the clock to respond to windmill breakdowns and restore machines as quickly as possible.',
      },
      { question: 'How do I request a windmill maintenance contract?', answer: QUOTE_ANSWER },
    ],
    related: ['wind-turbine-gearbox-repair', 'wind-turbine-blade-repair', 'windmill-generator-rewinding', 'windmill-spare-parts'],
    areaServed: WIND_AREAS,
    serviceType: 'Wind Turbine Operation and Maintenance Contract',
  },
  {
    slug: 'wind-turbine-gearbox-repair',
    division: 'wind',
    navLabel: 'Gearbox Repair',
    metaTitle: 'Wind Turbine Gearbox Repair & Overhaul',
    metaDescription:
      'Windmill gearbox repair and overhaul with quick turnaround: replacement of bearings, shafts and gears for a range of WTG makes using hydraulic installation methods. Henel Engineers, Tamil Nadu & Karnataka. Call +91 94432 82312.',
    keywords: [
      'wind turbine gearbox repair',
      'windmill gearbox repair',
      'wind turbine gearbox overhaul',
      'WTG gearbox repair',
      'gearbox bearing replacement wind turbine',
      'windmill gearbox service Tamil Nadu',
      'wind turbine gearbox repair Karnataka',
      'windmill gearbox overhauling',
    ],
    eyebrow: 'Wind Energy Division',
    h1: 'Wind Turbine Gearbox Repair & Overhaul',
    intro:
      'Henel Engineers Pvt. Ltd. repairs and overhauls wind turbine gearboxes with quick turnaround time — including replacement of bearings, shafts and gears for a range of WTG makes — to reduce downtime and improve reliability.',
    heroImage: '/assets/images/windmill/gearbox-repair.jpg',
    heroAlt: 'Wind turbine gearbox and generator assembly lifted by crane during repair and overhaul',
    highlights: [
      { value: 'Quick', label: 'Turnaround time' },
      { value: '7+', label: 'WTG makes supported' },
      { value: 'Hydraulic', label: 'Installation methods' },
      { value: '24x7', label: 'Breakdown support' },
    ],
    offers: [
      'Gearbox inspection & fault diagnosis',
      'Bearing replacement',
      'Shaft & gear replacement',
      'Complete gearbox overhaul',
      'Gearbox removal & refitting with crane arrangement',
    ],
    sections: [
      {
        heading: 'Why wind turbine gearboxes need specialist repair',
        paragraphs: [
          'The gearbox converts the slow rotation of the rotor into the high speed the generator needs, and it carries heavy, constantly changing loads. Worn bearings, damaged gear teeth and lubrication problems are common causes of gearbox failures — and a stopped gearbox means a turbine that is not generating.',
        ],
      },
      {
        heading: 'Our gearbox repair process',
        paragraphs: [
          'Henel Engineers carries out complete gearbox inspection, repair and overhaul. We replace bearings, shafts and gears as required and use hydraulic methods for accurate installation, so the gearbox goes back into service reliably and quickly.',
        ],
        bullets: [
          'Replacement of bearings, shafts and gears',
          'Hydraulic methods for accurate installation',
          'Reduced downtime and improved reliability',
        ],
      },
      {
        heading: 'Part of complete windmill maintenance',
        paragraphs: [
          'Gearbox work is often combined with generator, hydraulic and electrical servicing. Our multi-disciplinary team and heavy-duty crane arrangement let us handle the whole job, and we can source gearbox spare parts when replacement is needed.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can Henel Engineers repair a wind turbine gearbox?',
        answer:
          'Yes. Henel Engineers repairs and overhauls wind turbine gearboxes with quick turnaround time, including replacement of bearings, shafts and gears for a range of WTG makes, using hydraulic methods for accurate installation.',
      },
      {
        question: 'What causes wind turbine gearbox failure?',
        answer:
          'Common causes include bearing wear, gear tooth damage and lubrication problems, made worse by the heavy, variable loads a wind turbine gearbox carries. Regular inspection helps catch problems before they cause a breakdown.',
      },
      {
        question: 'Do you supply gearbox spare parts?',
        answer:
          'Yes. Henel Engineers sources and supplies all types of windmill spare parts, including gearbox components.',
      },
      { question: 'How do I request gearbox repair?', answer: QUOTE_ANSWER },
    ],
    related: ['windmill-maintenance-contract', 'windmill-generator-rewinding', 'windmill-spare-parts', 'windmill-erection'],
    areaServed: WIND_AREAS,
    serviceType: 'Wind Turbine Gearbox Repair',
  },
  {
    slug: 'wind-turbine-blade-repair',
    division: 'wind',
    navLabel: 'Blade Repair',
    metaTitle: 'Wind Turbine Blade Repair & Lightning Damage Repair',
    metaDescription:
      'Windmill blade patching, lightning damage repair and on-site blade restoration across Tamil Nadu and Karnataka. Keep wind turbine rotors running safely with Henel Engineers. Call +91 94432 82312.',
    keywords: [
      'wind turbine blade repair',
      'windmill blade repair',
      'blade patching',
      'wind turbine blade lightning damage repair',
      'rotor blade repair',
      'on-site blade restoration',
      'windmill blade repair Tamil Nadu',
      'wind turbine blade maintenance',
    ],
    eyebrow: 'Wind Energy Division',
    h1: 'Wind Turbine Blade Repair & Patching',
    intro:
      'Henel Engineers Pvt. Ltd. undertakes wind turbine blade patching, lightning damage repair and on-site blade restoration to keep rotors running safely across Tamil Nadu and Karnataka.',
    heroImage: '/assets/images/windmill/blade-patching.jpg',
    heroAlt: 'Technician working inside a wind turbine hub during blade patching and repair work',
    highlights: [
      { value: 'On-site', label: 'Blade restoration' },
      { value: 'Lightning', label: 'Damage repair' },
      { value: '25+', label: 'Years in wind energy' },
      { value: '24x7', label: 'Breakdown support' },
    ],
    offers: ['Blade patching & repair', 'Lightning damage repair', 'On-site blade restoration', 'Blade installation support'],
    sections: [
      {
        heading: 'Why blade damage matters',
        paragraphs: [
          'Wind turbine blades are exposed to rain, dust, heat and lightning throughout their life. Cracks, erosion and lightning damage reduce aerodynamic performance and, if left unrepaired, can grow into serious structural problems. Timely patching and repair protect both output and safety.',
        ],
      },
      {
        heading: 'Lightning damage repair — from lightning specialists',
        paragraphs: [
          'Blades are the most likely part of a turbine to be struck by lightning. As a company with a dedicated lightning protection division, Henel Engineers understands lightning damage and repairs it as part of our blade services.',
        ],
      },
      {
        heading: 'Our blade services',
        paragraphs: [],
        bullets: ['Blade patching & repair', 'Lightning damage repair', 'On-site blade restoration'],
      },
    ],
    faqs: [
      {
        question: 'Does Henel Engineers repair lightning damage on wind turbine blades?',
        answer:
          'Yes. Henel Engineers undertakes blade patching, lightning damage repair and on-site blade restoration to keep wind turbine rotors running safely.',
      },
      {
        question: 'Can wind turbine blades be repaired on site?',
        answer:
          'Yes. Henel Engineers provides on-site blade restoration, reducing the time and cost of bringing a turbine back into service.',
      },
      {
        question: 'Why repair blade damage early?',
        answer:
          'Small cracks and erosion reduce aerodynamic efficiency and can grow into larger structural damage. Early patching keeps the rotor running safely and avoids bigger repairs later.',
      },
      { question: 'How do I request blade repair?', answer: QUOTE_ANSWER },
    ],
    related: ['windmill-maintenance-contract', 'wind-turbine-gearbox-repair', 'windmill-erection', 'renewable-energy-services'],
    areaServed: WIND_AREAS,
    serviceType: 'Wind Turbine Blade Repair',
  },
  {
    slug: 'windmill-generator-rewinding',
    division: 'wind',
    navLabel: 'Generator Rewinding',
    metaTitle: 'Windmill Generator Rewinding & Bearing Replacement',
    metaDescription:
      'Windmill generator and transformer rewinding, bearing replacement and sleeve ring replacement — carried out without dismantling the generator from the nacelle wherever possible. Henel Engineers, Tamil Nadu & Karnataka.',
    keywords: [
      'wind turbine generator rewinding',
      'windmill generator repair',
      'windmill generator rewinding',
      'generator bearing replacement wind turbine',
      'transformer rewinding',
      'sleeve ring replacement',
      'WTG generator repair Tamil Nadu',
      'wind turbine generator service',
    ],
    eyebrow: 'Wind Energy Division',
    h1: 'Generator & Transformer Rewinding',
    intro:
      'Henel Engineers Pvt. Ltd. carries out wind turbine generator and transformer rewinding, bearing replacement and sleeve ring replacement — without dismantling the generator from the nacelle wherever possible.',
    heroImage: '/assets/images/windmill/generator-rewinding.jpg',
    heroAlt: 'Wind turbine generator being serviced on site during rewinding work',
    highlights: [
      { value: 'In-nacelle', label: 'Work wherever possible' },
      { value: 'Rewinding', label: 'Generator & transformer' },
      { value: 'Bearings', label: 'Replacement' },
      { value: '24x7', label: 'Breakdown support' },
    ],
    offers: [
      'Generator rewinding',
      'Transformer rewinding',
      'Generator bearing replacement',
      'Sleeve ring replacement',
      'Electrical fault diagnosis',
    ],
    sections: [
      {
        heading: 'Less downtime by working in the nacelle',
        paragraphs: [
          'Removing a generator from the nacelle needs a large crane and adds days to a repair. Wherever possible, Henel Engineers carries out rewinding and bearing replacement without dismantling the generator from the nacelle, which helps reduce downtime and crane costs.',
        ],
      },
      {
        heading: 'Our generator and transformer services',
        paragraphs: [],
        bullets: [
          'Generator & transformer rewinding',
          'Bearing replacement',
          'Sleeve ring replacement',
          'On-site technical assessment and fault diagnosis',
        ],
      },
      {
        heading: 'Electrical expertise under one roof',
        paragraphs: [
          'Our team brings together mechanical, electrical and technical professionals, supported by dedicated field manpower and service vehicles — so generator work can be combined with gearbox, hydraulic and control-system servicing in a single visit.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can a wind turbine generator be rewound without removing it from the nacelle?',
        answer:
          'Henel Engineers carries out generator and transformer rewinding and bearing replacement without dismantling the generator from the nacelle wherever possible, which helps reduce downtime and crane costs.',
      },
      {
        question: 'Do you replace generator bearings?',
        answer: 'Yes. Henel Engineers replaces generator bearings as part of its generator and transformer services.',
      },
      {
        question: 'Do you carry out sleeve ring replacement?',
        answer: 'Yes. Sleeve ring replacement is carried out as part of Henel Engineers’ windmill maintenance services.',
      },
      { question: 'How do I request generator rewinding?', answer: QUOTE_ANSWER },
    ],
    related: ['windmill-maintenance-contract', 'wind-turbine-gearbox-repair', 'wind-turbine-hydraulic-pcb-repair', 'windmill-spare-parts'],
    areaServed: WIND_AREAS,
    serviceType: 'Wind Turbine Generator Rewinding',
  },
  {
    slug: 'wind-turbine-hydraulic-pcb-repair',
    division: 'wind',
    navLabel: 'Hydraulic & PCB Repair',
    metaTitle: 'Wind Turbine Hydraulic Servicing & PCB Repair',
    metaDescription:
      'Windmill hydraulic unit, pump, pitch cylinder and brake servicing, plus wind turbine control PCB repair with a standby PCB to cut downtime. Henel Engineers, Tamil Nadu & Karnataka. Call +91 94432 82312.',
    keywords: [
      'wind turbine hydraulic repair',
      'windmill hydraulic unit service',
      'pitch cylinder repair',
      'wind turbine brake servicing',
      'hydraulic pump repair windmill',
      'wind turbine PCB repair',
      'windmill PCB repair',
      'windmill control card repair',
      'WTG PCB servicing',
    ],
    eyebrow: 'Wind Energy Division',
    h1: 'Hydraulic Servicing & PCB Repair for Wind Turbines',
    intro:
      'Henel Engineers Pvt. Ltd. services wind turbine hydraulic units, pumps, pitch cylinders and brakes, and repairs the printed circuit boards (PCBs) used in turbine control systems — with a standby PCB provided to reduce windmill downtime.',
    heroImage: '/assets/images/windmill/hydraulic-servicing.jpg',
    heroAlt: 'Wind turbine hydraulic unit and related components laid out for servicing',
    highlights: [
      { value: 'Standby', label: 'PCB provided during repair' },
      { value: 'Pitch', label: 'Cylinder repair' },
      { value: 'Brakes', label: 'Hydraulic servicing' },
      { value: '24x7', label: 'Breakdown support' },
    ],
    offers: [
      'Hydraulic unit & brake servicing',
      'Hydraulic pump & pitch cylinder repair',
      'Grease pump & oil seal replacement',
      'PCB diagnosis & repair',
      'Standby PCB during repair',
    ],
    sections: [
      {
        heading: 'Hydraulic unit servicing',
        paragraphs: [
          'Hydraulic systems drive critical turbine functions such as braking and blade pitch. We provide hydraulic system services to ensure safe and efficient turbine operation.',
        ],
        bullets: [
          'Hydraulic unit & brake servicing',
          'Hydraulic pump & pitch cylinder repair',
          'Grease pump & oil seal replacement',
        ],
      },
      {
        heading: 'PCB servicing & repair — with a standby PCB',
        paragraphs: [
          'A faulty control board can stop a healthy turbine. Henel Engineers diagnoses and repairs the printed circuit boards used in wind turbine control systems, and provides a standby PCB so the machine can keep running while the original board is repaired.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How does Henel Engineers reduce downtime during PCB failures?',
        answer:
          'Henel Engineers diagnoses and repairs printed circuit boards used in wind turbine control systems, and provides a standby PCB to reduce windmill downtime while the original board is being repaired.',
      },
      {
        question: 'What hydraulic services do you provide for wind turbines?',
        answer:
          'Henel Engineers provides hydraulic unit and brake servicing, hydraulic pump and pitch cylinder repair, and grease pump and oil seal replacement.',
      },
      { question: 'How do I request hydraulic or PCB repair?', answer: QUOTE_ANSWER },
    ],
    related: ['windmill-maintenance-contract', 'windmill-generator-rewinding', 'windmill-spare-parts', 'wind-turbine-gearbox-repair'],
    areaServed: WIND_AREAS,
    serviceType: 'Wind Turbine Hydraulic and PCB Repair',
  },
  {
    slug: 'windmill-spare-parts',
    division: 'wind',
    navLabel: 'Windmill Spare Parts',
    metaTitle: 'Windmill Spare Parts Supplier — Tamil Nadu',
    metaDescription:
      'Sourcing and supply of all types of windmill spare parts — gearbox, generator, hydraulic and electrical system components — for wind turbines across Tamil Nadu and Karnataka. Henel Engineers. Call +91 94432 82312.',
    keywords: [
      'windmill spare parts',
      'wind turbine spare parts supplier',
      'windmill spares Tamil Nadu',
      'WTG spare parts',
      'windmill gearbox spare parts',
      'wind turbine generator spare parts',
      'windmill hydraulic spare parts',
      'windmill electrical spare parts',
    ],
    eyebrow: 'Wind Energy Division',
    h1: 'Windmill Spare Parts Supply',
    intro:
      'Henel Engineers Pvt. Ltd. sources and supplies all types of windmill spare parts — including gearbox, generator, hydraulic and electrical system components — for wind turbines across Tamil Nadu and Karnataka.',
    heroImage: '/assets/images/windmill/nacelle-components.jpg',
    heroAlt: 'Wind turbine nacelle components laid out for maintenance',
    highlights: [
      { value: 'All types', label: 'Of windmill spare parts' },
      { value: '7+', label: 'WTG makes supported' },
      { value: 'Standby', label: 'PCB service' },
      { value: '24x7', label: 'Breakdown support' },
    ],
    offers: [
      'Gearbox spare parts',
      'Generator spare parts',
      'Hydraulic system spare parts',
      'Electrical system spare parts',
      'Installation by our field teams',
    ],
    sections: [
      {
        heading: 'Spare parts backed by service',
        paragraphs: [
          'Getting the right part quickly is often what decides how long a turbine stays down. As an O&M provider supporting 7+ WTG makes, Henel Engineers sources the spare parts your machine needs and our field teams can install them — so supply and repair come from one partner.',
        ],
        bullets: ['Gearbox components', 'Generator components', 'Hydraulic system components', 'Electrical system components'],
      },
    ],
    faqs: [
      {
        question: 'Does Henel Engineers supply windmill spare parts?',
        answer:
          'Yes. Henel Engineers sources and supplies all types of windmill spare parts, including gearbox, generator, hydraulic and electrical system components.',
      },
      {
        question: 'Can you install the spare parts you supply?',
        answer:
          'Yes. Henel Engineers’ field teams carry out repairs and component replacement as part of its windmill maintenance services across Tamil Nadu and Karnataka.',
      },
      { question: 'How do I request windmill spare parts?', answer: QUOTE_ANSWER },
    ],
    related: ['windmill-maintenance-contract', 'wind-turbine-gearbox-repair', 'wind-turbine-hydraulic-pcb-repair', 'windmill-generator-rewinding'],
    areaServed: WIND_AREAS,
    serviceType: 'Windmill Spare Parts Supply',
  },
  {
    slug: 'windmill-erection',
    division: 'wind',
    navLabel: 'Windmill Erection',
    metaTitle: 'Windmill Erection & Wind Turbine Installation',
    metaDescription:
      'End-to-end windmill erection and installation: tower erection, nacelle, hub and component installation, start-up and commissioning support, heavy-duty crane arrangement. Henel Engineers, Tamil Nadu & Karnataka.',
    keywords: [
      'windmill erection',
      'wind turbine installation',
      'wind turbine erection services',
      'nacelle erection',
      'WTG erection',
      'windmill installation Tamil Nadu',
      'crane for windmill erection',
      'wind turbine commissioning',
      'Vestas RRB erection',
    ],
    eyebrow: 'Wind Energy Division',
    h1: 'Windmill Erection & Installation',
    intro:
      'From tower erection to commissioning, Henel Engineers Pvt. Ltd. provides end-to-end windmill erection and installation services — nacelle, hub and component installation, start-up and commissioning support, and heavy-duty crane arrangement.',
    heroImage: '/assets/images/windmill/nacelle-erection-1.jpg',
    heroAlt: 'Crane erecting a wind turbine tower and rotor during installation',
    highlights: [
      { value: 'End-to-end', label: 'Tower to commissioning' },
      { value: 'Heavy-duty', label: 'Crane arrangement' },
      { value: 'Vestas RRB', label: 'Erection experience' },
      { value: '25+', label: 'Years in wind energy' },
    ],
    offers: [
      'Tower erection',
      'Nacelle, hub & component installation',
      'Start-up & commissioning support',
      'Heavy-duty crane arrangement',
      'Component lifting for major repairs',
    ],
    sections: [
      {
        heading: 'End-to-end erection services',
        paragraphs: [
          'Erecting a wind turbine needs careful planning, heavy lifting and experienced rigging. Henel Engineers handles the complete job — tower erection, nacelle, hub and component installation — through to start-up and commissioning support, with heavy-duty crane arrangement.',
        ],
        bullets: [
          'Nacelle, hub & component installation',
          'Start-up & commissioning support',
          'Heavy-duty crane arrangement',
        ],
      },
      {
        heading: 'Experience in the field',
        paragraphs: [
          'Our field work includes erection of Vestas RRB wind turbines, nacelle lifts, rotor installation and blade rigging. The same lifting capability supports major component replacement such as gearbox and generator exchanges.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Does Henel Engineers handle windmill erection and installation?',
        answer:
          'Yes. Henel Engineers provides end-to-end windmill erection and installation — tower erection, nacelle, hub and component installation, start-up and commissioning support, and heavy-duty crane arrangement.',
      },
      {
        question: 'Do you arrange cranes for windmill erection?',
        answer:
          'Yes. Heavy-duty crane arrangement is part of Henel Engineers’ windmill erection and installation services.',
      },
      {
        question: 'Which turbines have you erected?',
        answer:
          'Henel Engineers’ field work includes erection of Vestas RRB wind turbines, and the company supports 7+ WTG makes.',
      },
      { question: 'How do I request windmill erection services?', answer: QUOTE_ANSWER },
    ],
    related: ['windmill-maintenance-contract', 'wind-turbine-blade-repair', 'wind-turbine-gearbox-repair', 'windmill-spare-parts'],
    areaServed: WIND_AREAS,
    serviceType: 'Wind Turbine Erection and Installation',
  },
  // ───────────────────────────── Solar energy ─────────────────────────────
  {
    slug: 'rooftop-solar-installation',
    division: 'solar',
    navLabel: 'Rooftop Solar Installation',
    metaTitle: 'Rooftop Solar Panel Installation for Homes & Businesses',
    metaDescription:
      'Rooftop solar panel installation for homes, shops, offices and factories in Tamil Nadu — site survey, system design, installation and commissioning, with lightning protection and earthing from an engineering company established in 1999. Call +91 94432 82312.',
    keywords: [
      'rooftop solar installation',
      'solar panel installation for home',
      'home solar system',
      'solar power system for home',
      'residential solar installation',
      'rooftop solar Tamil Nadu',
      'solar panel installation Kanyakumari',
      'solar panel installation Nagercoil',
      'solar installers near me',
      'solar panel fitting',
      'rooftop solar company',
      'PM Surya Ghar rooftop solar',
    ],
    eyebrow: 'Solar Energy Division',
    h1: 'Rooftop Solar Panel Installation',
    intro:
      'Henel Engineers Pvt. Ltd. installs rooftop solar panel systems for homes, shops, offices and factories across Tamil Nadu — from site survey and system design to installation and commissioning — backed by more than 25 years of engineering experience in power, lightning protection and earthing.',
    heroImage: SOLAR_IMAGES.installer,
    heroAlt: 'Installer placing a solar panel on a house roof under a clear blue sky (representative image)',
    highlights: [
      { value: 'Since 1999', label: 'Engineering experience' },
      { value: 'Survey → Commission', label: 'End-to-end installation' },
      { value: 'Built-in', label: 'Lightning protection & earthing' },
      { value: 'After-sales', label: 'Maintenance & servicing' },
    ],
    offers: [
      'Site survey & shadow assessment',
      'System sizing & design',
      'Panel mounting structure installation',
      'Solar panel & inverter installation',
      'Earthing & lightning protection',
      'Commissioning & handover',
      'Maintenance & servicing',
    ],
    sections: [
      {
        heading: 'Why go solar on your rooftop?',
        paragraphs: [
          'A rooftop solar system turns unused roof space into a source of electricity for your home or business. Tamil Nadu receives abundant sunshine for much of the year, which makes rooftop solar a practical way to reduce electricity bills and dependence on the grid while producing clean, renewable energy.',
        ],
      },
      {
        heading: 'How we install your rooftop solar system',
        paragraphs: ['Every installation follows a clear, engineered process:'],
        bullets: [
          'Site survey — roof condition, orientation, available area and shading',
          'System design — sizing the system to your electricity use and roof space',
          'Mounting structure — secure installation on RCC, sheet or tiled roofs',
          'Panel and inverter installation with safe, neat cabling',
          'Earthing and lightning protection for the array and equipment',
          'Testing, commissioning and handover, with guidance on monitoring',
        ],
      },
      {
        heading: 'Choosing the right type of solar system',
        paragraphs: [
          'An on-grid (grid-tied) system feeds the grid and is the most common choice where supply is reliable. An off-grid system works with batteries and suits locations without a dependable grid connection. A hybrid system combines grid connection with battery backup. We assess your site and needs and recommend the configuration that fits.',
        ],
      },
      {
        heading: 'Protection built in — from lightning protection specialists',
        paragraphs: [
          'Solar panels are usually the most exposed part of a building. Unlike many installers, Henel Engineers has a dedicated lightning protection division and is an authorised TOPBAS supplier, so every rooftop system can be designed with proper earthing, lightning protection and surge protection from day one.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Does Henel Engineers install solar panels?',
        answer:
          'Yes. Henel Engineers installs rooftop solar panel systems for homes, shops, offices and factories in Tamil Nadu, from site survey and design through installation, commissioning and ongoing servicing.',
      },
      {
        question: 'How much roof space does a solar system need?',
        answer:
          'It depends on the system size and the panels used. During the site survey we measure the shade-free roof area and size the system to fit your roof and electricity use.',
      },
      {
        question: 'Is there a government subsidy for rooftop solar in India?',
        answer:
          'Central government schemes such as PM Surya Ghar: Muft Bijli Yojana provide financial assistance for eligible residential rooftop solar systems. Eligibility and amounts can change, so check the official scheme portal for current details.',
      },
      {
        question: 'Do solar panels need lightning protection?',
        answer:
          'Rooftop solar panels are often the most exposed part of a building, so lightning protection, earthing and surge protection are strongly recommended. Henel Engineers designs these into its solar installations.',
      },
      { question: 'How do I get a rooftop solar quote?', answer: QUOTE_ANSWER },
    ],
    related: ['solar-panel-maintenance', 'commercial-solar-power-plant', 'solar-lightning-protection-earthing', 'renewable-energy-services'],
    areaServed: SOLAR_AREAS,
    serviceType: 'Rooftop Solar Panel Installation',
  },
  {
    slug: 'commercial-solar-power-plant',
    division: 'solar',
    navLabel: 'Commercial & Industrial Solar',
    metaTitle: 'Commercial & Industrial Solar Power Plant Installation',
    metaDescription:
      'Solar power plant installation for factories, warehouses, commercial buildings and open land in Tamil Nadu — design, structures, panels, inverters, earthing and lightning protection by Henel Engineers, est. 1999. Call +91 94432 82312.',
    keywords: [
      'commercial solar installation',
      'industrial solar installation',
      'solar power plant installation',
      'solar plant for factory',
      'ground mounted solar plant',
      'commercial rooftop solar',
      'solar EPC Tamil Nadu',
      'solar power plant Tamil Nadu',
      'solar installation company',
      'solar for warehouse',
    ],
    eyebrow: 'Solar Energy Division',
    h1: 'Commercial & Industrial Solar Installation',
    intro:
      'Henel Engineers Pvt. Ltd. installs solar power systems for factories, warehouses, commercial buildings and open land across Tamil Nadu — engineered for high output, safe operation and long life, with earthing and lightning protection designed in.',
    heroImage: SOLAR_IMAGES.industrialRoof,
    heroAlt: 'Rows of solar panels installed on a large industrial sheet roof (representative image)',
    highlights: [
      { value: 'Rooftop & ground', label: 'Mounted solar systems' },
      { value: 'Since 1999', label: 'Industrial engineering' },
      { value: 'TOPBAS', label: 'Authorised lightning protection' },
      { value: '30+', label: 'Active O&M contracts (wind)' },
    ],
    offers: [
      'Feasibility & site assessment',
      'Plant design & layout',
      'Rooftop and ground-mounted structures',
      'Panel, inverter & cabling installation',
      'Plant earthing & lightning protection',
      'Surge protection',
      'Operation & maintenance',
    ],
    sections: [
      {
        heading: 'Solar for businesses and industry',
        paragraphs: [
          'Factories, warehouses and commercial buildings often have large roofs and high daytime power use — an excellent match for solar. A well-designed solar plant can reduce operating costs and help businesses meet sustainability goals.',
        ],
      },
      {
        heading: 'Engineering that comes from industrial experience',
        paragraphs: [
          'Henel Engineers has worked with industrial and commercial clients since 1999, and our wind energy division manages 30+ active Comprehensive Maintenance Contracts for power-generating assets. We bring the same discipline — careful design, safe installation and responsive maintenance — to commercial and industrial solar.',
        ],
        bullets: [
          'Rooftop systems on RCC and metal sheet roofs',
          'Ground-mounted solar on open land',
          'Plant-level earthing, lightning protection and surge protection',
          'Operation & maintenance after commissioning',
        ],
      },
      {
        heading: 'Protecting a large solar investment',
        paragraphs: [
          'Large solar plants cover a wide area and connect to sensitive inverters and electronics. Our lightning protection division designs air terminals, earthing and surge protection for the whole plant, so a single storm does not undo years of savings.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Does Henel Engineers install commercial and industrial solar plants?',
        answer:
          'Yes. Henel Engineers installs rooftop and ground-mounted solar power systems for factories, warehouses, commercial buildings and open land in Tamil Nadu.',
      },
      {
        question: 'Can solar be installed on a metal sheet roof?',
        answer:
          'Yes. Solar panels can be mounted on metal sheet roofs with suitable mounting structures. We assess the roof condition and structure during the site survey.',
      },
      {
        question: 'Do you provide maintenance after installation?',
        answer:
          'Yes. Henel Engineers provides solar panel maintenance and servicing, including cleaning, inspection and troubleshooting, to keep the plant performing.',
      },
      { question: 'How do I get a commercial solar quote?', answer: QUOTE_ANSWER },
    ],
    related: ['rooftop-solar-installation', 'solar-panel-maintenance', 'solar-lightning-protection-earthing', 'surge-protection-device'],
    areaServed: SOLAR_AREAS,
    serviceType: 'Commercial and Industrial Solar Installation',
  },
  {
    slug: 'solar-panel-maintenance',
    division: 'solar',
    navLabel: 'Solar Panel Maintenance & Service',
    metaTitle: 'Solar Panel Maintenance, Cleaning & Service',
    metaDescription:
      'Solar panel cleaning, inspection, maintenance, troubleshooting and repair for home, commercial and industrial solar systems in Tamil Nadu. Keep your solar plant at peak output with Henel Engineers. Call +91 94432 82312.',
    keywords: [
      'solar panel maintenance',
      'solar panel cleaning',
      'solar panel service',
      'solar panel repair',
      'solar O&M services',
      'solar plant maintenance',
      'solar system troubleshooting',
      'solar panel cleaning near me',
      'solar AMC',
      'solar panel service Tamil Nadu',
    ],
    eyebrow: 'Solar Energy Division',
    h1: 'Solar Panel Maintenance & Service',
    intro:
      'Dust, bird droppings, loose connections and weather all reduce what a solar system produces. Henel Engineers Pvt. Ltd. keeps home, commercial and industrial solar systems in Tamil Nadu performing with cleaning, inspection, maintenance and troubleshooting.',
    heroImage: SOLAR_IMAGES.hardHat,
    heroAlt: 'White safety helmet resting on blue solar panels during maintenance (representative image)',
    highlights: [
      { value: 'Cleaning', label: 'Restore lost output' },
      { value: 'Inspection', label: 'Panels, cabling & structures' },
      { value: 'Earthing', label: 'Testing & upkeep' },
      { value: '25+ yrs', label: 'O&M experience in energy' },
    ],
    offers: [
      'Solar panel cleaning',
      'Visual & electrical inspection',
      'Cable, connector & junction checks',
      'Mounting structure inspection',
      'Earthing & lightning protection checks',
      'Troubleshooting & repair',
      'Maintenance contracts',
    ],
    sections: [
      {
        heading: 'Why solar panels need regular maintenance',
        paragraphs: [
          'Solar panels have no moving parts, but they are not maintenance-free. Dust and dirt block sunlight and cut generation, especially in dry, dusty conditions. Loose or corroded connections, damaged cables and faulty earthing can reduce output or create safety risks. Regular maintenance protects both performance and your investment.',
        ],
      },
      {
        heading: 'What our solar maintenance includes',
        paragraphs: [],
        bullets: [
          'Panel cleaning to restore generation',
          'Visual inspection for cracks, hot spots and damage',
          'Checks on cables, connectors and junction boxes',
          'Mounting structure and fastener inspection',
          'Earthing, lightning protection and surge protection checks',
          'Troubleshooting when generation drops',
        ],
      },
      {
        heading: 'Maintenance experience from the energy sector',
        paragraphs: [
          'Henel Engineers has more than 25 years of operation and maintenance experience in the wind energy sector, with 30+ active maintenance contracts. We bring the same preventive approach to solar: find problems early, fix them quickly and keep the system generating.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How often should solar panels be cleaned?',
        answer:
          'It depends on local dust, pollution and rainfall. In dusty conditions panels may need cleaning frequently; after rain, less often. A drop in generation is a common sign that cleaning is due.',
      },
      {
        question: 'Why has my solar generation dropped?',
        answer:
          'Common causes include dirty panels, new shading, loose or damaged connections, and equipment faults. Henel Engineers inspects and troubleshoots solar systems to find and fix the cause.',
      },
      {
        question: 'Do you service solar systems installed by other companies?',
        answer:
          'Contact Henel Engineers with details of your system and we will advise on inspection and maintenance.',
      },
      { question: 'How do I book solar panel maintenance?', answer: QUOTE_ANSWER },
    ],
    related: ['rooftop-solar-installation', 'commercial-solar-power-plant', 'solar-lightning-protection-earthing', 'earthing-system'],
    areaServed: SOLAR_AREAS,
    serviceType: 'Solar Panel Maintenance and Service',
  },
];

export function getLandingPage(slug: string) {
  return landingPages.find((p) => p.slug === slug);
}

export const lightningLandingPages = landingPages.filter((p) => p.division === 'lightning');
export const windLandingPages = landingPages.filter((p) => p.division === 'wind');
const SOLAR_ORDER = ['rooftop-solar-installation', 'commercial-solar-power-plant', 'solar-panel-maintenance', 'solar-lightning-protection-earthing'];
export const solarLandingPages = SOLAR_ORDER.map((slug) => landingPages.find((p) => p.slug === slug)!).filter(Boolean);
export const renewableLandingPages = landingPages.filter((p) => p.division === 'renewable');
