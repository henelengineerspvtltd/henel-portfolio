/**
 * Buyer guides (rendered by src/app/guides/[slug]/page.tsx).
 *
 * Written to answer the questions customers search for before they buy, in a
 * form search engines and AI assistants can quote. Rules:
 * - Company statements only restate facts already published on this site.
 * - Engineering guidance stays general; where a standard or specification
 *   decides the answer, say so rather than giving a single universal number.
 * - No prices.
 */

import type { FaqItem } from './structured-data';

export interface GuideSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface Guide {
  slug: string;
  category: 'Lightning Protection' | 'Earthing' | 'Wind Energy';
  /** <title> (the layout template appends " | Henel Engineers"). */
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  /** Short answer-first summary shown at the top of the article. */
  keyPoints: string[];
  image: string;
  imageAlt: string;
  datePublished: string;
  dateModified: string;
  sections: GuideSection[];
  faqs: FaqItem[];
  related: { title: string; href: string }[];
}

const QUOTE =
  'Call +91 94432 82312 or +91 94436 92711, chat on WhatsApp at +91 94432 82312, email henelkkla@gmail.com, or use the contact form.';

export const guides: Guide[] = [
  // ───────────────────────── How many lightning arresters ─────────────────────────
  {
    slug: 'how-many-lightning-arresters-does-a-building-need',
    category: 'Lightning Protection',
    metaTitle: 'How Many Lightning Arresters to Install',
    metaDescription:
      'How many lightning arresters a building needs depends on protection level, arrester type, radius and roof size. A practical guide with examples.',
    h1: 'How Many Lightning Arresters Does a Building Need?',
    intro:
      'There is no single number that fits every building. The right quantity depends on the protection level your building needs, the type of lightning arrester, its protection radius and the size and shape of the roof. This guide explains how each one changes the answer.',
    keyPoints: [
      'The protection level (I to IV) comes from a lightning risk assessment. Higher protection levels mean a smaller protected radius per arrester.',
      'One ESE lightning arrester on a mast can protect a large area. The TOPBAS SIRIUS covers up to 107 m and the UMBRAECO up to 51 m (Level IV, 5 m mast).',
      'A conventional (Franklin rod) arrester protects a small area. Our copper bonded conventional arrester has a 5-metre protection radius, so larger roofs need several.',
      'Every arrester also needs down conductors and an earthing system. The quantity of arresters is only part of the design.',
    ],
    image: '/assets/images/lightning-protection/work/install-new-4.jpg',
    imageAlt: 'Technician installing a lightning arrester mast on a building rooftop',
    datePublished: '2026-11-24',
    dateModified: '2026-11-24',
    sections: [
      {
        heading: 'Start with the protection level',
        paragraphs: [
          'A lightning risk assessment looks at the building’s size, height, location, use and contents, and decides which protection level is required. Level I is the strictest and Level IV the least strict. Hospitals, buildings with many people, sites with sensitive electronics and sites storing hazardous materials usually need a higher level.',
          'The protection level matters because it changes the protected radius. The same arrester on the same mast covers a smaller area at Level I than at Level IV. That is why published radius figures always state the level and mast height they apply to.',
        ],
      },
      {
        heading: 'ESE lightning arresters: fewer units, larger coverage',
        paragraphs: [
          'An early streamer emission (ESE) lightning arrester launches an upward streamer earlier than a plain rod, so one unit on a mast protects a much larger radius. For a large factory roof, school campus or apartment block, one ESE arrester or a small number of them is often enough.',
          'The radius depends on the arrester’s advance time (ΔT), the protection level and the height of the mast above the area being protected. As published figures: the TOPBAS SIRIUS (ΔT 60 μs) covers up to 107 m and the UMBRAECO (ΔT 10 µs) up to 51 m, both at Level IV on a 5 m mast.',
        ],
      },
      {
        heading: 'Conventional lightning arresters: more rods for larger roofs',
        paragraphs: [
          'A conventional or Franklin rod arrester protects a small zone around its tip. For a small house or a single point, such as a water tank or a mast, one or two rods can be enough. For a larger roof, the designer places several rods so that their zones overlap and cover every part of the roof, and connects them with conductors.',
          'Our copper bonded conventional lightning arrester is rated at 100 kA with a 5-metre protection radius. It is a cost-effective choice for small structures, but the number of rods rises quickly as the roof gets bigger.',
        ],
      },
      {
        heading: 'An illustration',
        paragraphs: [
          'Take a flat roof of 30 m by 20 m. The farthest corners are about 18 m from the centre of the roof. An ESE arrester on a central mast would need a protected radius comfortably above that at the required protection level, so one unit can often cover it. With conventional rods of about 5 m radius, the same roof would need several rods spread across it.',
          'This is only an illustration. Roof shape, height differences, tanks, towers and nearby structures all change the design, so the final number always comes from a site-specific calculation.',
        ],
      },
      {
        heading: 'What else every lightning arrester needs',
        paragraphs: [
          'The arrester only intercepts the strike. To work safely it must be part of a complete system:',
        ],
        bullets: [
          'Down conductors that carry the current to ground along a safe route, with test joints for inspection',
          'An earthing system with low resistance, such as chemical earth electrodes in earth pits',
          'Surge protection devices at the main electrical panel, so the strike does not reach equipment through the wiring',
          'Regular inspection and earth resistance testing, especially before the monsoon',
        ],
      },
      {
        heading: 'How Henel Engineers works it out',
        paragraphs: [
          'We start with a site assessment and lightning risk assessment, then design the system to the applicable standards with zone-of-protection calculations. We recommend the arrester type, the number of units and the mast height, and supply and install the complete system, including earthing and surge protection.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How many lightning arresters does a house need?',
        answer:
          'A small house often needs one conventional arrester or one ESE arrester, with proper earthing and surge protection. Larger homes, homes on high ground and homes with rooftop solar may need more coverage. A site visit confirms the right number.',
      },
      {
        question: 'Can one ESE lightning arrester protect a whole factory?',
        answer:
          'Often yes, if the factory fits within the arrester’s protected radius at the required protection level. Very large or irregular sites may need two or more ESE arresters.',
      },
      {
        question: 'Does a taller mast increase the protected area?',
        answer:
          'Yes. For ESE arresters, the protected radius increases with the height of the mast above the area being protected, within the limits set by the standard.',
      },
      { question: 'How do I get a lightning protection design for my building?', answer: QUOTE },
    ],
    related: [
      { title: 'Lightning arrester supply & installation', href: '/lightning-arrester' },
      { title: 'ESE lightning arresters', href: '/ese-lightning-arrester' },
      { title: 'TOPBAS SIRIUS ESE lightning arrester', href: '/products/topbas-sirius-ese-lightning-arrester' },
      { title: 'Copper bonded conventional lightning arrester', href: '/products/copper-bonded-conventional-lightning-arrester' },
    ],
  },

  // ───────────────────────────── Earth pit resistance ─────────────────────────────
  {
    slug: 'earth-pit-resistance-value',
    category: 'Earthing',
    metaTitle: 'Earth Pit Resistance: What Value Is Good?',
    metaDescription:
      'What earth pit resistance value is acceptable, why readings change with the seasons, how to test an earth pit and how to lower high resistance.',
    h1: 'Earth Pit Resistance: What Value Is Good?',
    intro:
      'Earth resistance tells you how easily fault current and lightning current can flow into the ground. The lower it is, the safer the installation. The value you should aim for depends on what the earthing protects and on your project specification.',
    keyPoints: [
      'Lower is better. The target is set by the applicable standard or your project specification, not by one universal number.',
      'For lightning protection, an earth termination below 10 ohms is a widely used target.',
      'Electrical and equipment earthing is often specified lower, and substations and sensitive installations lower still.',
      'Readings rise in dry weather, so test regularly and before the monsoon. Longer or extra electrodes and earthing compound lower the resistance.',
    ],
    image: '/assets/images/lightning-protection/work/install-new-3.jpg',
    imageAlt: 'Lightning arrester mast installed on a residential building rooftop with solar panels',
    datePublished: '2026-11-24',
    dateModified: '2026-11-24',
    sections: [
      {
        heading: 'What earth resistance means',
        paragraphs: [
          'Earth resistance is the resistance between an earth electrode and the surrounding soil, measured in ohms. When a fault or a lightning strike happens, the current has to flow through this resistance into the ground. A low value keeps touch voltages down and lets protective devices operate correctly.',
        ],
      },
      {
        heading: 'What value should you aim for?',
        paragraphs: [
          'The correct target depends on what the earthing protects, and your project specification or the applicable standard decides it. As a general guide:',
        ],
        bullets: [
          'Lightning protection earth termination: below 10 ohms is a widely used target.',
          'Electrical installations and equipment earthing in commercial and industrial buildings: often specified lower than this.',
          'Substations, power plants and sensitive equipment: usually specified lower still.',
          'Always check the value in your specification, or ask your consultant or electrical inspector.',
        ],
      },
      {
        heading: 'Why the reading changes',
        paragraphs: [
          'Earth resistance depends mostly on soil resistivity, and soil resistivity depends on soil type, moisture and temperature. Rocky, sandy and dry soils have high resistivity, while moist clay is much lower. The same pit can read far higher at the end of a dry summer than after the monsoon, which is why readings should be compared season to season.',
        ],
      },
      {
        heading: 'How to lower high earth resistance',
        paragraphs: ['If a pit reads too high, these are the usual remedies:'],
        bullets: [
          'Use a longer electrode to reach deeper, moister soil. Our copper bonded and GI earth rods come in 1 m, 2 m and 3 m lengths.',
          'Add electrodes in parallel, spaced well apart so their zones do not overlap. A common rule of thumb is a spacing of at least twice the electrode length.',
          'Backfill the electrode with an earthing compound such as CARBOMAXX to improve contact with the soil.',
          'Choose copper bonded rods for corrosive or coastal soil, where they usually last longer than GI.',
          'Keep the pit, connections and cover in good condition so the reading stays stable.',
        ],
      },
      {
        heading: 'How an earth pit is tested',
        paragraphs: [
          'Earth resistance is measured with an earth resistance tester, commonly using the three-point fall-of-potential method. The electrode under test is disconnected at its test link, and the tester drives a current between it and a remote auxiliary spike while measuring the voltage at a second spike in between.',
          'Test new pits after installation, then at regular intervals and before the monsoon, and record each reading. A steady rise over time usually points to corrosion, a loose connection or drying soil.',
        ],
      },
      {
        heading: 'Earthing from Henel Engineers',
        paragraphs: [
          'We design and install chemical earthing with copper bonded or GI earth rods, CARBOMAXX earthing compound and polyplastic or FRP earth pit covers, for homes, factories, institutions, solar plants and lightning protection systems.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is 5 ohms earth resistance good?',
        answer:
          'For a lightning protection earth termination, 5 ohms is well within the widely used target of below 10 ohms. For electrical or equipment earthing, check your project specification, because some installations require a lower value.',
      },
      {
        question: 'Why is my earth pit reading high in summer?',
        answer:
          'Dry soil has much higher resistivity than moist soil, so readings usually rise in the dry season. If the reading stays high after rain, the electrode, compound or connections may need attention.',
      },
      {
        question: 'How often should an earth pit be tested?',
        answer:
          'Test after installation, then at regular intervals and before the monsoon. Keep a record of each reading so you can spot a rising trend early.',
      },
      { question: 'How do I get earthing installed or tested?', answer: QUOTE },
    ],
    related: [
      { title: 'Earthing system design & installation', href: '/earthing-system' },
      { title: 'Copper bonded earth rod', href: '/products/copper-bonded-earth-rod' },
      { title: 'GI earth rod', href: '/products/gi-earth-rod' },
      { title: 'CARBOMAXX earthing compound', href: '/products/carbomaxx-earthing-compound' },
    ],
  },

  // ──────────────────────────── Gearbox repair or replace ────────────────────────────
  {
    slug: 'wind-turbine-gearbox-repair-or-replace',
    category: 'Wind Energy',
    metaTitle: 'Wind Turbine Gearbox: Repair or Replace?',
    metaDescription:
      'Warning signs of wind turbine gearbox trouble, how faults are diagnosed, and how to choose between repair, overhaul, in-tower service or replacement.',
    h1: 'Wind Turbine Gearbox: Repair, Overhaul or Replace?',
    intro:
      'A gearbox failure is one of the most expensive events in a wind turbine’s life, both in parts and in lost generation. Catching the warning signs early, and diagnosing the fault properly, usually decides whether you need a small repair or a complete replacement.',
    keyPoints: [
      'Warning signs include unusual noise, rising vibration, rising oil temperature and metal particles in the oil.',
      'Diagnosis comes before any decision. Oil analysis, vibration checks and internal inspection show what has actually failed.',
      'Limited damage can often be repaired by replacing bearings, shafts or gears. Wider wear may need a complete overhaul, and replacement is the last option.',
      'Where the fault allows, in-tower service avoids bringing the gearbox down, which saves crane costs and downtime.',
    ],
    image: '/assets/images/windmill/gearbox-repair.jpg',
    imageAlt: 'Wind turbine gearbox and generator assembly lifted by crane during repair and overhaul',
    datePublished: '2026-11-24',
    dateModified: '2026-11-24',
    sections: [
      {
        heading: 'Warning signs of gearbox trouble',
        paragraphs: [
          'The gearbox turns the slow rotation of the rotor into the high speed the generator needs, under heavy and constantly changing loads. Most failures start small and give warning before they become breakdowns. Watch for:',
        ],
        bullets: [
          'New or louder noise from the gearbox',
          'Rising vibration levels',
          'Rising oil temperature or repeated temperature alarms',
          'Metal particles on the magnetic plug or in the oil filter',
          'Oil leaks or a change in oil colour or smell',
        ],
      },
      {
        heading: 'Diagnose before you decide',
        paragraphs: [
          'A good decision depends on knowing what has actually failed. Oil analysis shows wear metals and contamination, vibration checks help locate a damaged bearing or gear stage, and an internal inspection through the inspection covers lets the engineer see the gear teeth and bearings directly.',
          'Fault diagnosis often shows that the problem is limited to one bearing or one gear stage, which is far cheaper to put right than a whole gearbox.',
        ],
      },
      {
        heading: 'Repair, overhaul or replacement',
        paragraphs: ['The right option depends on how far the damage has spread, the age of the gearbox, the availability of parts and how much downtime you can accept.'],
        bullets: [
          'Repair: replace the damaged bearings, shafts or gears when the damage is limited.',
          'Overhaul: strip, inspect and rebuild the gearbox when wear is more widespread.',
          'Replacement: fit a complete gearbox when repair is not worthwhile or the casing itself is damaged.',
        ],
      },
      {
        heading: 'In-tower service or bringing the gearbox down',
        paragraphs: [
          'Taking a gearbox down from the nacelle needs a large crane and adds time and cost. Where the fault allows it, the work can be carried out in the tower with the gearbox still in place. When it cannot, the gearbox is removed and refitted with a crane.',
        ],
      },
      {
        heading: 'Preventing the next failure',
        paragraphs: [
          'Regular maintenance is the cheapest way to avoid a gearbox replacement. Keep to the oil and filter change intervals, sample the oil regularly, check for leaks and keep an eye on temperature and vibration trends. A maintenance contract that includes major component repair lets gearbox work be planned before it becomes an emergency.',
        ],
      },
      {
        heading: 'Gearbox services from Henel Engineers',
        paragraphs: [
          'Henel Engineers carries out wind turbine gearbox inspection and fault diagnosis, repair, complete overhaul and complete replacement, with in-tower service where the fault allows and removal and refitting with a crane arrangement when needed. We also supply gearbox spare parts and provide 24x7 breakdown support.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How do I know if my wind turbine gearbox is failing?',
        answer:
          'Common signs are unusual noise, rising vibration, rising oil temperature and metal particles in the oil. Oil analysis and an internal inspection confirm the cause.',
      },
      {
        question: 'Is it cheaper to repair or replace a wind turbine gearbox?',
        answer:
          'Repairing limited damage, such as a worn bearing, is usually much cheaper than replacement. Replacement makes sense when the damage is widespread or repair is not worthwhile.',
      },
      {
        question: 'Can a wind turbine gearbox be repaired without removing it?',
        answer:
          'Yes, where the fault allows. In-tower service is carried out with the gearbox still in the nacelle, which avoids crane costs and reduces downtime.',
      },
      { question: 'How do I request gearbox inspection or repair?', answer: QUOTE },
    ],
    related: [
      { title: 'Wind turbine gearbox repair', href: '/wind-turbine-gearbox-repair' },
      { title: 'Windmill maintenance contracts (AMC / CMC)', href: '/windmill-maintenance-contract' },
      { title: 'Windmill spare parts', href: '/windmill-spare-parts' },
      { title: 'Windmill erection & crane work', href: '/windmill-erection' },
    ],
  },

  // ─────────────────────────── Lightning protection cost ───────────────────────────
  {
    slug: 'lightning-protection-system-cost-factors',
    category: 'Lightning Protection',
    metaTitle: 'Lightning Protection System Cost Factors',
    metaDescription:
      'What decides the cost of a lightning protection system: building size, protection level, arrester type, down conductors, earthing, SPDs and access.',
    h1: 'What Affects the Cost of a Lightning Protection System?',
    intro:
      'Two buildings of the same size can need very different lightning protection systems. Knowing what drives the cost helps you compare quotations fairly and avoid a cheap system that does not actually protect the building.',
    keyPoints: [
      'The biggest factors are the size and height of the building, the protection level required and the type and number of arresters.',
      'Down conductors, the earthing system and surge protection devices are a large part of the cost, not extras.',
      'Soil conditions, roof access, working height and site location also change the price.',
      'Compare quotations on the same design: same protection level, same components, and the same testing and documentation.',
    ],
    image: '/assets/images/lightning-protection/work/install-1.jpg',
    imageAlt: 'Lightning arrester installed on a rooftop mast above a temple building',
    datePublished: '2026-11-24',
    dateModified: '2026-11-24',
    sections: [
      {
        heading: 'Building size, height and shape',
        paragraphs: [
          'A larger roof needs more coverage, and a taller building needs longer down conductors. Irregular roofs, multiple levels, rooftop tanks and towers all add design work and material.',
        ],
      },
      {
        heading: 'Protection level',
        paragraphs: [
          'The lightning risk assessment sets the protection level. A stricter level reduces the protected radius of each arrester, so it can mean more arresters, taller masts or more down conductors.',
        ],
      },
      {
        heading: 'Type and number of arresters',
        paragraphs: [
          'An ESE lightning arrester costs more per unit than a conventional rod but covers a much larger radius from one mast, so for a large roof it can reduce the total number of air terminals and conductors. For a small house or a single point, a conventional arrester is usually the economical choice. Mast height and mounting also affect the price.',
        ],
      },
      {
        heading: 'Down conductors and earthing',
        paragraphs: [
          'Down conductors, clamps and test joints carry the strike to ground, and the earthing system dissipates it. Their cost depends on the length of the route, the conductor material and the number of earth pits. Rocky or dry soil may need longer rods, more electrodes or more earthing compound to reach a low resistance.',
        ],
      },
      {
        heading: 'Surge protection',
        paragraphs: [
          'A Type 1 + 2 surge protection device at the main incomer stops lightning and switching surges from reaching equipment through the wiring. Buildings with sensitive electronics may need SPDs at further distribution boards as well.',
        ],
      },
      {
        heading: 'Site access and location',
        paragraphs: [
          'Work at height, scaffolding or lifting equipment, restricted roof access and the distance to the site all affect labour and logistics.',
        ],
      },
      {
        heading: 'How to get an accurate quotation',
        paragraphs: ['Share as much of this as you can when you ask for a quote:'],
        bullets: [
          'Location of the site and the type of building',
          'Roof plan or drawings, with building height',
          'Photographs of the roof and any tanks, towers or solar panels',
          'Details of any existing lightning protection or earthing',
          'Any protection level or standard named in your project specification',
        ],
      },
      {
        heading: 'Quotations from Henel Engineers',
        paragraphs: [
          'We start with a site assessment and risk assessment, design the system with zone-of-protection calculations, and quote for the complete system: arrester, mast, down conductors, test joints, earthing and surge protection.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Why do lightning protection quotations differ so much?',
        answer:
          'Quotations often differ in protection level, arrester type, the number of down conductors and earth pits, and whether surge protection and testing are included. Compare them on the same design.',
      },
      {
        question: 'Is an ESE lightning arrester more expensive than a conventional one?',
        answer:
          'Per unit, yes. For large roofs, one ESE arrester can replace many conventional rods and conductors, so the complete system can work out more economical.',
      },
      {
        question: 'Is earthing included in the cost of a lightning arrester?',
        answer:
          'It should be. A lightning arrester only works with down conductors and a low-resistance earthing system, so a complete quotation includes them.',
      },
      { question: 'How do I get a lightning protection quotation?', answer: QUOTE },
    ],
    related: [
      { title: 'Lightning arrester supply & installation', href: '/lightning-arrester' },
      { title: 'ESE lightning arresters', href: '/ese-lightning-arrester' },
      { title: 'Earthing systems', href: '/earthing-system' },
      { title: 'Surge protection devices', href: '/surge-protection-device' },
    ],
  },
];

export function getGuide(slug: string) {
  return guides.find((g) => g.slug === slug);
}

export const guideHref = (slug: string) => `/guides/${slug}`;
