/**
 * Local service pages for Henel Engineers' home region (rendered by
 * src/app/service-areas/[city]/page.tsx).
 *
 * Each page targets "<service> in <place>" searches for a district Henel can
 * reach easily from its Aralvaimozhi and Marthandam offices.
 *
 * IMPORTANT: Company-specific statements must only restate facts already
 * published on this site (services, products, offices, experience). Do not
 * add project names, client names, response times or reviews unless they are
 * real and published. Local context (geography, wind belts, industry, climate)
 * must stay general and accurate.
 */

import type { FaqItem } from './structured-data';
import type { ContentSection, Highlight } from './landing-pages';

export interface LocationPage {
  slug: string;
  /** Short place name used in headings, cards and breadcrumbs. */
  name: string;
  /** District / city name used in schema areaServed. */
  district: string;
  state: 'Tamil Nadu' | 'Kerala';
  /** <title> (the layout template appends " | Henel Engineers"). */
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  h1: string;
  intro: string;
  heroImage: string;
  heroAlt: string;
  highlights: Highlight[];
  /** Towns and localities covered by this page. */
  localities: string[];
  /** Service page slugs (from landing-pages.ts) most relevant here, in priority order. */
  services: string[];
  sections: ContentSection[];
  faqs: FaqItem[];
  /** Slugs of nearby location pages. */
  nearby: string[];
}

const QUOTE = (place: string) =>
  `Call +91 94432 82312 or +91 94436 92711, chat on WhatsApp at +91 94432 82312, email henelkkla@gmail.com, or use the contact form and mention that your site is in ${place}.`;

const OFFICES =
  'Henel Engineers Pvt. Ltd. was incorporated on 17 August 1999 in Aralvaimozhi, Kanyakumari District, and operates from a registered office in Aralvaimozhi and a branch office in Marthandam.';

export const locationPages: LocationPage[] = [
  // ─────────────────────────────── Kanyakumari / Nagercoil ───────────────────────────────
  {
    slug: 'kanyakumari',
    name: 'Kanyakumari & Nagercoil',
    district: 'Kanyakumari',
    state: 'Tamil Nadu',
    metaTitle: 'Lightning Arrester & Windmill Service, Nagercoil',
    metaDescription:
      'Lightning arresters, earthing, surge protection, solar installation and windmill maintenance in Kanyakumari District — Nagercoil, Aralvaimozhi, Muppandal, Marthandam. Local offices since 1999.',
    keywords: [
      'lightning arrester Nagercoil',
      'lightning arrester Kanyakumari',
      'earthing contractor Nagercoil',
      'chemical earthing Kanyakumari',
      'windmill maintenance Muppandal',
      'Aralvaimozhi windmill service',
      'wind turbine service Kanyakumari',
      'solar panel installation Nagercoil',
      'rooftop solar Kanyakumari',
      'lightning protection Marthandam',
    ],
    h1: 'Lightning Protection, Earthing, Solar & Windmill Services in Kanyakumari District',
    intro:
      'Kanyakumari District is home. Henel Engineers was founded in Aralvaimozhi in 1999, next to the Muppandal wind belt, and has a branch office in Marthandam — so sites across Nagercoil, Thuckalay, Kuzhithurai, Colachel and Kanyakumari town are close to our teams.',
    heroImage: '/assets/images/windmill/hero-green-hills.jpg',
    heroAlt: 'Wind turbines on green hills, typical of the Aralvaimozhi and Muppandal wind belt',
    highlights: [
      { value: '1999', label: 'Founded in Aralvaimozhi' },
      { value: '2', label: 'Offices in the district' },
      { value: '24x7', label: 'Windmill breakdown support' },
      { value: '7+', label: 'WTG makes supported' },
    ],
    localities: [
      'Nagercoil',
      'Aralvaimozhi',
      'Muppandal',
      'Marthandam',
      'Thuckalay',
      'Kuzhithurai',
      'Colachel',
      'Kanyakumari',
      'Kulasekharam',
      'Thovalai',
      'Boothapandi',
      'Karungal',
    ],
    services: [
      'windmill-maintenance-contract',
      'lightning-arrester',
      'earthing-system',
      'rooftop-solar-installation',
      'wind-turbine-gearbox-repair',
      'surge-protection-device',
    ],
    sections: [
      {
        heading: 'Windmill operation & maintenance in the Muppandal wind belt',
        paragraphs: [
          'The Aralvaimozhi pass is a gap in the Western Ghats that funnels strong, steady wind onto the plains around Muppandal, which made it one of the earliest and largest wind energy clusters in India. Our registered office is in Aralvaimozhi, inside this belt.',
          'We provide windmill operation and maintenance, Comprehensive Maintenance Contracts (CMC / AMC), gearbox repair and overhaul, blade patching, generator and transformer rewinding, hydraulic and PCB servicing, erection works, spare parts and 24x7 breakdown support for turbine owners in the district.',
        ],
      },
      {
        heading: 'Lightning protection for a coastal, two-monsoon district',
        paragraphs: [
          'Kanyakumari District receives rain from both the south-west and north-east monsoons, and thunderstorms are common before and during both seasons. Tall buildings, churches and temples, hospitals, schools, factories and telecom towers here all benefit from a properly designed lightning protection system.',
          'We supply and install ESE lightning arresters (TOPBAS SIRIUS and UMBRAECO), copper bonded conventional lightning arresters, earthing systems and Type 1 + 2 surge protection devices, and design the complete system for the building.',
        ],
      },
      {
        heading: 'Earthing in coastal and laterite soils',
        paragraphs: [
          'Near the coast at Colachel, Kanyakumari town and the fishing villages in between, salt-laden air and moist soil speed up corrosion of earth electrodes and connections; inland, laterite and rocky ground can make low earth resistance hard to achieve. We choose the electrode (copper bonded or GI), backfill compound and pit design to suit the soil at your site.',
        ],
        bullets: [
          'Chemical earth electrodes and earth pits with polyplastic or FRP covers',
          'Copper bonded earth rods — 17.2 mm, 1 m / 2 m / 3 m',
          'Class B GI pipe earth rods — 48 mm, 1 m / 2 m / 3 m',
          'CARBOMAXX earthing compound in 10 kg and 25 kg bags',
        ],
      },
      {
        heading: 'Solar installation and maintenance',
        paragraphs: [
          'We install rooftop solar for homes and businesses and commercial solar systems across Nagercoil and the district, and maintain and clean existing plants. Every solar installation we design includes proper earthing and lightning protection for the array.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Where are your offices in Kanyakumari District?',
        answer:
          'Our registered office is at No.8, 1104 J/64, Kamaraj Nagar, Aralvaimozhi — 629 301, and our branch office is on Kalluthotti - Marthandam Road, Unnamalaikadai, Marthandam — 629 165.',
      },
      {
        question: 'Do you maintain windmills in Muppandal and Aralvaimozhi?',
        answer:
          'Yes. Henel Engineers is based in Aralvaimozhi and provides windmill operation & maintenance, CMC / AMC contracts, gearbox, blade and generator repairs, erection works, spare parts and 24x7 breakdown support for wind turbine owners in the Muppandal–Aralvaimozhi wind belt.',
      },
      {
        question: 'Do you install lightning arresters in Nagercoil?',
        answer:
          'Yes. We supply and install ESE and conventional lightning arresters, earthing systems and surge protection devices for homes, commercial buildings, institutions and industries in Nagercoil and across Kanyakumari District.',
      },
      {
        question: 'Which earth rod is best near the coast?',
        answer:
          'Salt air and moist coastal soil corrode earthing faster, so copper bonded earth rods with a good backfill compound and a corrosion-resistant FRP earth pit cover are usually preferred. We recommend the electrode after checking your site and soil.',
      },
      { question: 'How do I get a quote in Kanyakumari District?', answer: QUOTE('Kanyakumari District') },
    ],
    nearby: ['tirunelveli', 'thiruvananthapuram', 'thoothukudi'],
  },

  // ─────────────────────────────────────── Tirunelveli ───────────────────────────────────────
  {
    slug: 'tirunelveli',
    name: 'Tirunelveli',
    district: 'Tirunelveli',
    state: 'Tamil Nadu',
    metaTitle: 'Lightning Arrester & Windmill Service, Tirunelveli',
    metaDescription:
      'Lightning arrester installation, earthing, SPD, solar and windmill maintenance in Tirunelveli — Palayamkottai, Radhapuram, Panagudi, Valliyoor, Gangaikondan. From our Aralvaimozhi office, est. 1999.',
    keywords: [
      'lightning arrester Tirunelveli',
      'earthing contractor Tirunelveli',
      'chemical earthing Tirunelveli',
      'windmill maintenance Tirunelveli',
      'windmill service Radhapuram',
      'wind turbine repair Panagudi',
      'solar panel installation Tirunelveli',
      'surge protection device Tirunelveli',
      'lightning protection Palayamkottai',
    ],
    h1: 'Lightning Protection, Earthing, Solar & Windmill Services in Tirunelveli',
    intro:
      'Tirunelveli is our nearest major city — the Aralvaimozhi pass and our registered office sit at the southern edge of the district’s wind country. We serve Tirunelveli city, Palayamkottai, the Radhapuram–Panagudi–Valliyoor wind belt and industries at SIPCOT Gangaikondan.',
    heroImage: '/assets/images/windmill/tower-technician.jpg',
    heroAlt: 'Technician on a wind turbine tower carrying out maintenance',
    highlights: [
      { value: '~60 km', label: 'From our Aralvaimozhi office' },
      { value: '25+', label: 'Years of experience' },
      { value: '24x7', label: 'Windmill breakdown support' },
      { value: '30+', label: 'Active windmill CMCs' },
    ],
    localities: [
      'Tirunelveli',
      'Palayamkottai',
      'Radhapuram',
      'Panagudi',
      'Valliyoor',
      'Nanguneri',
      'Ambasamudram',
      'Cheranmahadevi',
      'Gangaikondan',
      'Kalakad',
      'Tisaiyanvilai',
    ],
    services: [
      'windmill-maintenance-contract',
      'lightning-arrester',
      'earthing-system',
      'wind-turbine-blade-repair',
      'commercial-solar-power-plant',
      'surge-protection-device',
    ],
    sections: [
      {
        heading: 'Windmill maintenance across Radhapuram, Panagudi and Valliyoor',
        paragraphs: [
          'The southern taluks of Tirunelveli District — Radhapuram, Nanguneri and the area around Panagudi and Valliyoor — catch the same wind that flows through the Aralvaimozhi pass and hold a large number of wind turbines. These sites are a short drive from our Aralvaimozhi office along NH 44.',
          'For turbine owners here we provide operation & maintenance, CMC / AMC contracts, gearbox repair, blade patching and lightning damage repair, generator rewinding and bearing replacement, hydraulic and PCB servicing, spare parts and 24x7 breakdown support.',
        ],
      },
      {
        heading: 'Lightning protection for Tirunelveli buildings and industries',
        paragraphs: [
          'Hospitals, colleges, temples, commercial complexes and factories in Tirunelveli and Palayamkottai, and plants at SIPCOT Gangaikondan, need lightning protection designed for the structure — not just a rod on the roof. We design the system, supply ESE or conventional air terminals, down conductors and earthing, and add surge protection devices at the main panel.',
        ],
        bullets: [
          'TOPBAS SIRIUS ESE lightning arrester — protection radius up to 107 m',
          'UMBRAECO ESE lightning arrester — protection radius up to 51 m',
          'Copper bonded conventional lightning arrester — 100 kA',
          'TOPBAS Type 1 + 2 three-phase SPD (TB7K320T12L)',
        ],
      },
      {
        heading: 'Earthing in dry, rocky ground',
        paragraphs: [
          'Much of Tirunelveli District has hard, dry or rocky soil, where a plain electrode often cannot reach a low earth resistance. Chemical earthing — an electrode surrounded by conductive backfill such as CARBOMAXX compound, inside an inspectable earth pit — helps achieve and hold a low, stable resistance through the dry months.',
        ],
      },
      {
        heading: 'Solar for homes, businesses and wind-farm owners',
        paragraphs: [
          'We install rooftop and commercial solar systems in Tirunelveli and maintain existing plants. Solar arrays sit on rooftops and open ground where they are exposed to lightning, so every installation includes array earthing and surge protection.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How far is Henel Engineers from Tirunelveli?',
        answer:
          'Our registered office in Aralvaimozhi is roughly 60 km from Tirunelveli city along NH 44, and closer still to the Panagudi, Valliyoor and Radhapuram wind sites.',
      },
      {
        question: 'Do you provide windmill CMC in Tirunelveli District?',
        answer:
          'Yes. We offer Comprehensive Maintenance Contracts (CMC / AMC) and on-call repairs for wind turbines in Tirunelveli District, including gearbox, blade, generator, hydraulic and PCB work, with 24x7 breakdown support.',
      },
      {
        question: 'Do you install lightning arresters for factories at SIPCOT Gangaikondan?',
        answer:
          'Yes. We design and install lightning protection, earthing and surge protection for industrial plants, including sites in SIPCOT Gangaikondan and other industrial areas of Tirunelveli District.',
      },
      {
        question: 'What earthing works best in Tirunelveli’s dry soil?',
        answer:
          'In dry or rocky soil, chemical earthing with a conductive backfill compound usually gives a lower and more stable earth resistance than a plain electrode. We check the site and recommend the electrode, compound and number of pits.',
      },
      { question: 'How do I get a quote in Tirunelveli?', answer: QUOTE('Tirunelveli') },
    ],
    nearby: ['kanyakumari', 'thoothukudi', 'madurai'],
  },

  // ─────────────────────────────────────── Thoothukudi ───────────────────────────────────────
  {
    slug: 'thoothukudi',
    name: 'Thoothukudi',
    district: 'Thoothukudi',
    state: 'Tamil Nadu',
    metaTitle: 'Lightning Arrester & Windmill Service, Thoothukudi',
    metaDescription:
      'Lightning protection, corrosion-resistant earthing, SPD, solar and windmill maintenance in Thoothukudi (Tuticorin) — Kayathar, Ottapidaram, Ettayapuram, Kovilpatti and port-area industries.',
    keywords: [
      'lightning arrester Thoothukudi',
      'lightning arrester Tuticorin',
      'earthing contractor Thoothukudi',
      'chemical earthing Tuticorin',
      'windmill maintenance Kayathar',
      'wind turbine service Thoothukudi',
      'windmill repair Ottapidaram',
      'solar panel installation Thoothukudi',
      'surge protection Tuticorin',
    ],
    h1: 'Lightning Protection, Earthing, Solar & Windmill Services in Thoothukudi',
    intro:
      'Thoothukudi (Tuticorin) combines a major wind belt around Kayathar, Ottapidaram and Ettayapuram with port-side industry, thermal power and salt pans along the coast. Henel Engineers serves wind farms and industries across the district from our Aralvaimozhi office.',
    heroImage: '/assets/images/windmill/nacelle-erection-1.jpg',
    heroAlt: 'Crane erecting a wind turbine tower and rotor during installation',
    highlights: [
      { value: '~110 km', label: 'From our Aralvaimozhi office' },
      { value: '25+', label: 'Years of experience' },
      { value: '24x7', label: 'Windmill breakdown support' },
      { value: '7+', label: 'WTG makes supported' },
    ],
    localities: [
      'Thoothukudi',
      'Kayathar',
      'Ottapidaram',
      'Ettayapuram',
      'Kovilpatti',
      'Vilathikulam',
      'Tiruchendur',
      'Srivaikuntam',
      'Sathankulam',
      'Pudukottai (Thoothukudi)',
    ],
    services: [
      'windmill-maintenance-contract',
      'windmill-erection',
      'earthing-system',
      'lightning-arrester',
      'surge-protection-device',
      'solar-lightning-protection-earthing',
    ],
    sections: [
      {
        heading: 'Windmill O&M around Kayathar, Ottapidaram and Ettayapuram',
        paragraphs: [
          'The interior of Thoothukudi District, around Kayathar, Ottapidaram, Ettayapuram and Kovilpatti, is one of Tamil Nadu’s busiest wind energy areas. We provide operation & maintenance and CMC / AMC contracts for turbine owners here, along with gearbox repair, blade patching, generator and transformer rewinding, sleeve ring replacement, hydraulic and PCB servicing, erection works and spare parts.',
          'Our 24x7 breakdown support helps keep downtime short during the high-wind season, when every lost day of generation costs the most.',
        ],
      },
      {
        heading: 'Earthing that survives salt air',
        paragraphs: [
          'Near the port, the salt pans and the coast from Thoothukudi to Tiruchendur, salt-laden air and saline soil corrode GI electrodes, clamps and pit covers much faster than inland. For these sites we usually recommend copper bonded earth rods, a conductive backfill compound such as CARBOMAXX, and corrosion-resistant FRP earth pit covers, with periodic earth resistance testing.',
        ],
      },
      {
        heading: 'Lightning and surge protection for industry',
        paragraphs: [
          'Port facilities, warehouses, chemical and process plants, and tall structures across Thoothukudi need lightning protection and surge protection designed to the risk. We design the system and supply and install ESE lightning arresters, down conductors, earthing and Type 1 + 2 surge protection devices.',
        ],
      },
      {
        heading: 'Solar plant protection and maintenance',
        paragraphs: [
          'Open-ground and rooftop solar plants in the district are exposed to lightning and coastal corrosion. We install solar systems and provide solar earthing, lightning protection, cleaning and maintenance for existing plants.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do you service windmills in Kayathar and Ottapidaram?',
        answer:
          'Yes. Henel Engineers provides windmill operation & maintenance, CMC / AMC contracts, repairs, erection works, spare parts and 24x7 breakdown support for wind turbines across Thoothukudi District, including Kayathar, Ottapidaram, Ettayapuram and Kovilpatti.',
      },
      {
        question: 'Which earthing is suitable near the Thoothukudi coast?',
        answer:
          'Coastal salt air and saline soil corrode earthing quickly. Copper bonded earth rods with conductive backfill compound and corrosion-resistant FRP earth pit covers usually last much longer than plain GI electrodes in these conditions.',
      },
      {
        question: 'Do you install lightning protection for industries in Thoothukudi?',
        answer:
          'Yes. We design and install lightning protection systems, earthing and surge protection devices for industrial plants, warehouses and commercial buildings in Thoothukudi.',
      },
      {
        question: 'How far is Henel Engineers from Thoothukudi?',
        answer:
          'Our registered office in Aralvaimozhi, Kanyakumari District, is roughly 110 km from Thoothukudi city by road via Tirunelveli.',
      },
      { question: 'How do I get a quote in Thoothukudi?', answer: QUOTE('Thoothukudi District') },
    ],
    nearby: ['tirunelveli', 'kanyakumari', 'madurai'],
  },

  // ───────────────────────────────────────── Madurai ─────────────────────────────────────────
  {
    slug: 'madurai',
    name: 'Madurai',
    district: 'Madurai',
    state: 'Tamil Nadu',
    metaTitle: 'Lightning Arrester & Earthing Contractor, Madurai',
    metaDescription:
      'Lightning arrester supply and installation, chemical earthing, surge protection, solar installation and windmill services in Madurai and nearby Theni, Dindigul and Virudhunagar. Henel Engineers, est. 1999.',
    keywords: [
      'lightning arrester Madurai',
      'ESE lightning arrester Madurai',
      'earthing contractor Madurai',
      'chemical earthing Madurai',
      'surge protection device Madurai',
      'solar panel installation Madurai',
      'rooftop solar Madurai',
      'windmill maintenance Theni',
      'lightning protection Virudhunagar',
    ],
    h1: 'Lightning Arrester, Earthing, Solar & Windmill Services in Madurai',
    intro:
      'Madurai is southern Tamil Nadu’s largest city, with hospitals, colleges, temples, high-rise buildings and industrial estates such as Kappalur that all need sound lightning protection and earthing. Henel Engineers serves Madurai and the surrounding Theni, Dindigul and Virudhunagar districts.',
    heroImage: '/assets/images/lightning-protection/work/install-1.jpg',
    heroAlt: 'Lightning arrester installed on a rooftop mast above a temple building',
    highlights: [
      { value: 'Since 1999', label: 'Engineering experience' },
      { value: '107 m', label: 'Max. ESE protection radius' },
      { value: '1–3 m', label: 'Earth rod lengths' },
      { value: '24x7', label: 'Windmill breakdown support' },
    ],
    localities: [
      'Madurai',
      'Thirumangalam',
      'Melur',
      'Usilampatti',
      'Kappalur',
      'Theni',
      'Cumbum',
      'Dindigul',
      'Virudhunagar',
      'Sivakasi',
    ],
    services: [
      'lightning-arrester',
      'ese-lightning-arrester',
      'earthing-system',
      'surge-protection-device',
      'rooftop-solar-installation',
      'windmill-maintenance-contract',
    ],
    sections: [
      {
        heading: 'Lightning protection for Madurai’s tall buildings and institutions',
        paragraphs: [
          'Temples and gopurams, hospitals, colleges, apartment blocks and commercial complexes in Madurai are among the tallest structures in their neighbourhoods, which makes them the most likely to be struck. We design lightning protection for the whole structure — air terminal, down conductors and earthing — rather than a single rod.',
          'For large roofs and campuses, an ESE lightning arrester can cover a wide radius from a single mast: the TOPBAS SIRIUS covers up to 107 m and the UMBRAECO up to 51 m (Level IV, 5 m mast). For smaller buildings, copper bonded conventional arresters remain a cost-effective option.',
        ],
      },
      {
        heading: 'Earthing and surge protection for industry',
        paragraphs: [
          'Factories at Kappalur and the industrial belts towards Virudhunagar and Sivakasi run motors, drives and control electronics that are easily damaged by surges. We install chemical earthing with copper bonded or GI electrodes and Type 1 + 2 surge protection devices at the main incomer, so both lightning and switching surges are safely diverted.',
        ],
        bullets: [
          'Chemical earth electrodes and earth pits',
          'Copper bonded and Class B GI earth rods',
          'CARBOMAXX earthing compound',
          'Type 1 + 2 three-phase SPD — Uc 320 VAC, Iimp 7 kA, In 30 kA',
        ],
      },
      {
        heading: 'Rooftop and commercial solar',
        paragraphs: [
          'Madurai’s strong sunshine suits rooftop solar for homes, hospitals, schools and businesses. We install, maintain and clean solar systems and include array earthing and lightning protection in every design.',
        ],
      },
      {
        heading: 'Wind sites in Theni and Dindigul',
        paragraphs: [
          'West of Madurai, the Cumbum valley in Theni District and parts of Dindigul District have wind turbine sites. We provide operation & maintenance, repairs, spare parts and 24x7 breakdown support for turbine owners there.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do you install lightning arresters in Madurai?',
        answer:
          'Yes. Henel Engineers supplies and installs ESE and conventional lightning arresters, with complete earthing and surge protection, for homes, temples, hospitals, institutions, commercial buildings and factories in Madurai.',
      },
      {
        question: 'Which lightning arrester is best for a temple or tall building?',
        answer:
          'Tall, valuable structures are usually best protected by an ESE lightning arrester on a mast above the highest point, connected through dedicated down conductors to a low-resistance earthing system. We check the structure and recommend the arrester model and mast height.',
      },
      {
        question: 'Do you provide earthing for factories in Kappalur?',
        answer:
          'Yes. We design and install chemical earthing, earth pits and surge protection for industrial units in Kappalur and other industrial areas around Madurai.',
      },
      {
        question: 'Do you maintain windmills in Theni District?',
        answer:
          'Yes. We provide windmill operation & maintenance, repairs, spare parts and 24x7 breakdown support for wind turbines in Theni, Dindigul and other districts around Madurai.',
      },
      { question: 'How do I get a quote in Madurai?', answer: QUOTE('Madurai') },
    ],
    nearby: ['tirunelveli', 'thoothukudi', 'coimbatore'],
  },

  // ─────────────────────────────────────── Coimbatore ───────────────────────────────────────
  {
    slug: 'coimbatore',
    name: 'Coimbatore',
    district: 'Coimbatore',
    state: 'Tamil Nadu',
    metaTitle: 'Lightning Arrester & Windmill Service, Coimbatore',
    metaDescription:
      'Windmill maintenance in the Palakkad Gap wind belt, plus lightning arresters, chemical earthing, surge protection and solar for Coimbatore industries — Pollachi, Kinathukadavu, Mettupalayam. Est. 1999.',
    keywords: [
      'lightning arrester Coimbatore',
      'earthing contractor Coimbatore',
      'chemical earthing Coimbatore',
      'surge protection device Coimbatore',
      'windmill maintenance Coimbatore',
      'windmill service Pollachi',
      'wind turbine gearbox repair Coimbatore',
      'solar panel installation Coimbatore',
      'industrial earthing Coimbatore',
    ],
    h1: 'Lightning Protection, Earthing, Solar & Windmill Services in Coimbatore',
    intro:
      'Coimbatore sits at the mouth of the Palakkad Gap, the break in the Western Ghats that drives one of India’s strongest wind belts, and is one of South India’s biggest engineering and manufacturing hubs. Henel Engineers serves wind farms around Pollachi and Kinathukadavu and industries across the city.',
    heroImage: '/assets/images/windmill/gearbox-repair.jpg',
    heroAlt: 'Wind turbine gearbox and generator assembly lifted by crane during repair',
    highlights: [
      { value: '25+', label: 'Years in wind energy' },
      { value: '7+', label: 'WTG makes supported' },
      { value: '30+', label: 'Active windmill CMCs' },
      { value: '24x7', label: 'Breakdown support' },
    ],
    localities: [
      'Coimbatore',
      'Pollachi',
      'Kinathukadavu',
      'Sulur',
      'Mettupalayam',
      'Annur',
      'Karamadai',
      'Valparai',
      'Sultanpet',
      'Negamam',
    ],
    services: [
      'windmill-maintenance-contract',
      'wind-turbine-gearbox-repair',
      'windmill-generator-rewinding',
      'earthing-system',
      'surge-protection-device',
      'commercial-solar-power-plant',
    ],
    sections: [
      {
        heading: 'Windmill maintenance in the Palakkad Gap wind belt',
        paragraphs: [
          'Wind accelerates through the Palakkad Gap during the south-west monsoon and spreads across the plains south and east of Coimbatore, around Pollachi, Kinathukadavu, Negamam and Sultanpet and on towards Palladam and Udumalpet. Many textile and engineering companies own captive wind turbines here.',
          'We provide operation & maintenance and CMC / AMC contracts, gearbox repair and overhaul, blade patching, generator and transformer rewinding with bearing replacement, hydraulic and PCB servicing, spare parts and 24x7 breakdown support — supporting 7+ WTG makes.',
        ],
      },
      {
        heading: 'Earthing and surge protection for Coimbatore industry',
        paragraphs: [
          'Coimbatore’s pump, motor, foundry, textile and precision-engineering units depend on CNC machines, drives and PLCs that are sensitive to surges and poor earthing. We design and install chemical earthing systems and Type 1 + 2 surge protection devices so fault and lightning currents are safely diverted away from equipment.',
        ],
        bullets: [
          'Earthing system design, installation and earth pits',
          'Copper bonded and GI earth rods, CARBOMAXX compound',
          'TOPBAS Type 1 + 2 three-phase SPD',
          'ESE and conventional lightning arresters',
        ],
      },
      {
        heading: 'Lightning protection for factories, campuses and high-rises',
        paragraphs: [
          'Thunderstorms are common around Coimbatore before and during the monsoons, and factory sheds, educational campuses, hospitals and new high-rise buildings all need structure-wide lightning protection. We design the system and install ESE or conventional air terminals, down conductors and earthing.',
        ],
      },
      {
        heading: 'Commercial and rooftop solar',
        paragraphs: [
          'Industrial roofs across Coimbatore are well suited to commercial solar. We install and maintain rooftop and commercial solar plants with proper array earthing and lightning protection.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do you provide windmill maintenance around Pollachi and Coimbatore?',
        answer:
          'Yes. Henel Engineers provides windmill operation & maintenance, CMC / AMC contracts, gearbox and generator repairs, blade patching, spare parts and 24x7 breakdown support for wind turbines in the Coimbatore and Pollachi area.',
      },
      {
        question: 'Can you repair a wind turbine gearbox in Coimbatore?',
        answer:
          'Yes. We repair and overhaul wind turbine gearboxes, including replacement of bearings, shafts and gears, for a range of WTG makes.',
      },
      {
        question: 'Do you install earthing and surge protection for factories in Coimbatore?',
        answer:
          'Yes. We design and install chemical earthing, earth pits and Type 1 + 2 surge protection devices for industrial units in Coimbatore to protect machines, drives and control systems.',
      },
      {
        question: 'Do you supply earthing materials in Coimbatore?',
        answer:
          'Yes. We supply copper bonded earth rods, GI earth rods, CARBOMAXX earthing compound and polyplastic or FRP earth pit covers, with or without installation.',
      },
      { question: 'How do I get a quote in Coimbatore?', answer: QUOTE('Coimbatore') },
    ],
    nearby: ['tiruppur', 'madurai', 'thiruvananthapuram'],
  },

  // ──────────────────────────────────────── Tiruppur ────────────────────────────────────────
  {
    slug: 'tiruppur',
    name: 'Tiruppur',
    district: 'Tiruppur',
    state: 'Tamil Nadu',
    metaTitle: 'Windmill Maintenance & Lightning Arrester, Tiruppur',
    metaDescription:
      'Windmill operation & maintenance, CMC, gearbox and blade repair for wind turbines in Palladam, Udumalpet, Dharapuram and Kangeyam, plus lightning protection, earthing and solar for Tiruppur mills.',
    keywords: [
      'windmill maintenance Tiruppur',
      'windmill service Palladam',
      'windmill maintenance Udumalpet',
      'wind turbine repair Dharapuram',
      'windmill CMC Tiruppur',
      'lightning arrester Tiruppur',
      'earthing contractor Tiruppur',
      'solar panel installation Tiruppur',
      'textile mill lightning protection',
    ],
    h1: 'Windmill Maintenance, Lightning Protection & Solar Services in Tiruppur',
    intro:
      'Tiruppur District holds one of the densest concentrations of wind turbines in India — around Palladam, Udumalpet, Dharapuram and Kangeyam — many of them owned by textile and knitwear mills for captive power. Henel Engineers keeps those turbines running and protects the mills they power.',
    heroImage: '/assets/images/windmill/blade-patching.jpg',
    heroAlt: 'Technician working inside a wind turbine hub during blade patching and repair',
    highlights: [
      { value: '30+', label: 'Active windmill CMCs' },
      { value: '7+', label: 'WTG makes supported' },
      { value: '25+', label: 'Years in wind energy' },
      { value: '24x7', label: 'Breakdown support' },
    ],
    localities: [
      'Tiruppur',
      'Palladam',
      'Udumalpet',
      'Dharapuram',
      'Kangeyam',
      'Avinashi',
      'Madathukulam',
      'Kundadam',
      'Gudimangalam',
      'Vellakoil',
    ],
    services: [
      'windmill-maintenance-contract',
      'wind-turbine-gearbox-repair',
      'wind-turbine-blade-repair',
      'wind-turbine-hydraulic-pcb-repair',
      'windmill-spare-parts',
      'lightning-arrester',
    ],
    sections: [
      {
        heading: 'Windmill O&M for captive power owners',
        paragraphs: [
          'Wind from the Palakkad Gap sweeps across Palladam, Udumalpet, Madathukulam, Dharapuram and Kangeyam, and textile mills, spinning units and other businesses in the region have invested heavily in wind turbines to cut their power costs. When a turbine stops, the owner loses generation they were counting on.',
          'We provide operation & maintenance and Comprehensive Maintenance Contracts (CMC / AMC), gearbox repair and overhaul, blade patching and lightning damage repair, generator and transformer rewinding, sleeve ring replacement, hydraulic and PCB servicing, windmill security services, spare parts and 24x7 breakdown support.',
        ],
      },
      {
        heading: 'Lightning damage on wind turbines',
        paragraphs: [
          'As the tallest objects for kilometres, wind turbines are frequently struck by lightning. Strikes can damage blade tips, bearings and the turbine’s control electronics. We repair lightning-damaged blades and PCBs and check the turbine’s earthing so that future strikes are carried safely to ground.',
        ],
      },
      {
        heading: 'Lightning protection and earthing for mills',
        paragraphs: [
          'Spinning mills, knitting and dyeing units and warehouses hold valuable machinery and highly combustible stock. We design and install lightning protection, earthing and surge protection for mill buildings so a strike or surge does not become a fire or a long shutdown.',
        ],
        bullets: [
          'ESE lightning arresters — TOPBAS SIRIUS and UMBRAECO',
          'Chemical earthing and earth pits',
          'Type 1 + 2 surge protection devices at the main incomer',
        ],
      },
      {
        heading: 'Rooftop solar for mills and factories',
        paragraphs: [
          'Large mill roofs in Tiruppur suit commercial solar. We install and maintain rooftop and commercial solar plants with array earthing and lightning protection included.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do you maintain windmills in Palladam and Udumalpet?',
        answer:
          'Yes. Henel Engineers provides windmill operation & maintenance, CMC / AMC contracts, repairs, spare parts and 24x7 breakdown support for wind turbines across Tiruppur District, including Palladam, Udumalpet, Dharapuram and Kangeyam.',
      },
      {
        question: 'Can you repair a wind turbine blade damaged by lightning?',
        answer:
          'Yes. We carry out blade patching and lightning damage repair, and can check the turbine’s earthing and electronics after a strike.',
      },
      {
        question: 'Do you take over windmill maintenance contracts from other service providers?',
        answer:
          'Yes. Turbine owners can move their maintenance to Henel Engineers under a CMC / AMC contract. Share your turbine make, model and location and we will plan an inspection.',
      },
      {
        question: 'Do you install lightning protection for textile mills?',
        answer:
          'Yes. We design and install lightning arresters, earthing systems and surge protection devices for spinning mills, knitting and dyeing units and warehouses in Tiruppur.',
      },
      { question: 'How do I get a quote in Tiruppur?', answer: QUOTE('Tiruppur District') },
    ],
    nearby: ['coimbatore', 'madurai', 'tirunelveli'],
  },

  // ──────────────────────────────────── Thiruvananthapuram ────────────────────────────────────
  {
    slug: 'thiruvananthapuram',
    name: 'Thiruvananthapuram',
    district: 'Thiruvananthapuram',
    state: 'Kerala',
    metaTitle: 'Lightning Arrester & Earthing, Thiruvananthapuram',
    metaDescription:
      'Lightning arrester installation, chemical earthing, surge protection and rooftop solar in Thiruvananthapuram (Trivandrum), Neyyattinkara, Kazhakkoottam and Vizhinjam — about 45 km from our Marthandam branch.',
    keywords: [
      'lightning arrester Thiruvananthapuram',
      'lightning arrester Trivandrum',
      'lightning protection Kerala',
      'earthing contractor Trivandrum',
      'chemical earthing Thiruvananthapuram',
      'surge protection device Trivandrum',
      'rooftop solar Thiruvananthapuram',
      'solar panel installation Trivandrum',
      'ESE lightning arrester Kerala',
    ],
    h1: 'Lightning Arrester, Earthing, Surge Protection & Solar in Thiruvananthapuram',
    intro:
      'Kerala sees some of the most intense lightning in India, especially in the pre-monsoon months and the October–November thunderstorm season. Our Marthandam branch is about 45 km from Thiruvananthapuram, so Henel Engineers can reach sites across Trivandrum, Neyyattinkara, Kazhakkoottam and Vizhinjam easily.',
    heroImage: '/assets/images/lightning-protection/hero-storm.jpg',
    heroAlt: 'Lightning storm over a city with a lightning arrester installed on a rooftop',
    highlights: [
      { value: '~45 km', label: 'From our Marthandam branch' },
      { value: '107 m', label: 'Max. ESE protection radius' },
      { value: 'Type 1+2', label: 'Surge protection devices' },
      { value: 'Since 1999', label: 'Engineering experience' },
    ],
    localities: [
      'Thiruvananthapuram',
      'Neyyattinkara',
      'Parassala',
      'Kazhakkoottam',
      'Technopark',
      'Vizhinjam',
      'Kovalam',
      'Nedumangad',
      'Attingal',
      'Balaramapuram',
    ],
    services: [
      'lightning-arrester',
      'ese-lightning-arrester',
      'surge-protection-device',
      'earthing-system',
      'rooftop-solar-installation',
      'solar-lightning-protection-earthing',
    ],
    sections: [
      {
        heading: 'Why lightning protection matters in Kerala',
        paragraphs: [
          'Kerala experiences frequent and severe thunderstorms, particularly from March to May and during the north-east monsoon (thulavarsham) in October and November. Homes on high ground, apartment towers, churches, temples, hospitals, schools and IT campuses are all exposed.',
          'We design complete lightning protection systems — ESE or conventional air terminal, dedicated down conductors and low-resistance earthing — and add surge protection so electronics and appliances are protected from induced surges as well as direct strikes.',
        ],
      },
      {
        heading: 'Surge protection for homes, offices and IT campuses',
        paragraphs: [
          'Most lightning damage in a city is caused not by direct strikes but by surges entering through power and data lines. Offices and IT campuses around Kazhakkoottam and Technopark, hospitals and homes with inverters and solar systems all benefit from a Type 1 + 2 SPD at the main distribution board, backed by good earthing.',
        ],
      },
      {
        heading: 'Earthing in laterite and high-rainfall soil',
        paragraphs: [
          'Thiruvananthapuram’s laterite hills and heavy rainfall change soil moisture sharply between seasons, so earth resistance can drift. Chemical earth electrodes with conductive backfill, inside an inspectable earth pit, help keep resistance low and stable all year. Near the coast at Vizhinjam and Kovalam, we prefer copper bonded rods and FRP pit covers to resist corrosion.',
        ],
      },
      {
        heading: 'Rooftop solar with proper protection',
        paragraphs: [
          'Rooftop solar is growing fast across Kerala. We install rooftop solar for homes and businesses and make sure the array, inverter and wiring are properly earthed and protected against lightning and surges.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do you install lightning arresters in Thiruvananthapuram?',
        answer:
          'Yes. Henel Engineers supplies and installs ESE and conventional lightning arresters, earthing systems and surge protection devices for homes, apartments, institutions, offices and industries in Thiruvananthapuram District.',
      },
      {
        question: 'How far is your office from Trivandrum?',
        answer:
          'Our branch office on Kalluthotti - Marthandam Road, Marthandam, Tamil Nadu, is about 45 km from Thiruvananthapuram city along the NH 66 corridor, close to Parassala and Neyyattinkara.',
      },
      {
        question: 'Does my house in Kerala need a lightning arrester?',
        answer:
          'Houses on high ground, tall or isolated homes and homes with rooftop solar are at higher risk. A lightning arrester with proper earthing, plus a surge protection device at the main board, protects both the structure and the appliances. We can assess your house and recommend the right system.',
      },
      {
        question: 'Do you install surge protection for offices and IT companies?',
        answer:
          'Yes. We install Type 1 + 2 surge protection devices and earthing for offices, IT campuses, hospitals and commercial buildings in Thiruvananthapuram.',
      },
      { question: 'How do I get a quote in Thiruvananthapuram?', answer: QUOTE('Thiruvananthapuram') },
    ],
    nearby: ['kanyakumari', 'tirunelveli', 'coimbatore'],
  },
];

export function getLocationPage(slug: string) {
  return locationPages.find((p) => p.slug === slug);
}

export const locationHref = (slug: string) => `/service-areas/${slug}`;
