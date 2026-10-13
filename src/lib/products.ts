/**
 * Lightning protection & earthing products — single source of truth for the
 * spec tables on /lightning-protection and the product pages at /products/[slug].
 *
 * IMPORTANT: Specs are copied from published product information. Do not add
 * prices, ratings or certifications that are not published on the site.
 */

import type { FaqItem } from './structured-data';

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  slug: string;
  name: string;
  /** Short category label, e.g. "ESE Lightning Arrester". */
  category: string;
  brand?: string;
  image: string;
  imageAlt: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  summary: string;
  specsTitle: string;
  specs: ProductSpec[];
  note?: string;
  uses: string[];
  faqs: FaqItem[];
  /** Related service page slug (see landing-pages.ts). */
  servicePage: string;
  related: string[];
}

const QUOTE =
  'Call +91 94432 82312 or +91 94436 92711, chat on WhatsApp at +91 94432 82312, email henelkkla@gmail.com, or use the quote request form on the contact page.';

export const siriusSpecs: ProductSpec[] = [
  { label: 'Technology', value: 'Non-electronic Early Streamer Emission (ESE)' },
  { label: 'Advance Time (ΔT)', value: '60 μs' },
  { label: 'Material', value: '304L Stainless Steel' },
  { label: 'Protection Radius', value: 'Up to 107 m (5 m mast, Level IV)' },
  { label: 'Lightning Impulse Current', value: '200 kA tested (10/350 μs)' },
  { label: 'Standards', value: 'NF C 17-102 · UNE 21186 · TS EN 62561' },
];

export const umbraEcoSpecs: ProductSpec[] = [
  { label: 'Type', value: 'Non-Electronic ESE' },
  { label: 'Standard', value: 'NF C 17-102 (2011)' },
  { label: 'Certification', value: 'CE Certified' },
  { label: 'Delta T (ΔT)', value: '10 µSec (Triggering Time Advance)' },
  { label: 'Protection Radius', value: 'Up to 51 meters (Level IV)' },
  { label: 'Power Source', value: 'No battery or external power source required' },
];

export const spdSpecs: ProductSpec[] = [
  { label: 'Model', value: 'TB7K320T12L' },
  { label: 'Protection Type', value: 'Type 1 + 2 (Class B + C)' },
  { label: 'Phase', value: 'Three Phase' },
  { label: 'Rated Voltage (Uc)', value: '320 VAC' },
  { label: 'Voltage Protection Level (Up)', value: '1.6 kV' },
  { label: 'Impulse Current (Iimp)', value: '7 kA' },
  { label: 'Nominal Discharge Current (In)', value: '30 kA' },
  { label: 'IP Rating', value: 'IP20' },
  { label: 'Poles Number', value: '3 Pole + N' },
];

export const copperEarthRodSpecs: ProductSpec[] = [
  { label: 'Minimum Order Quantity', value: '1 Piece' },
  { label: 'Usage/Application', value: 'Earthing' },
  { label: 'Length', value: '1 meter, 2 meter and 3 meter' },
  { label: 'Diameter', value: '17.2 mm' },
];

export const giEarthRodSpecs: ProductSpec[] = [
  { label: 'Length', value: '1 m, 2 m, 3 m' },
  { label: 'Diameter', value: '48 mm' },
  { label: 'Wall Thickness', value: '3 mm' },
  { label: 'Material', value: 'Class B GI Pipe' },
];

export const carbomaxxSpecs: ProductSpec[] = [
  { label: 'Physical State', value: 'Powder' },
  { label: 'Brand', value: 'TOPBAS' },
  { label: 'Packaging Type', value: 'Bag' },
  { label: 'Packaging Size', value: '10 kgs, 25 kgs' },
  { label: 'Country of Origin', value: 'Made in India' },
];

export const conventionalArresterSpecs: ProductSpec[] = [
  { label: 'Lightning Protection Material', value: 'Copper' },
  { label: 'Current Rating', value: '100 kA' },
  { label: 'Phase', value: 'Single Phase' },
  { label: 'No. of Poles', value: 'External' },
  { label: 'Type', value: 'External' },
  { label: 'Highest Voltage Protection', value: 'External' },
  { label: 'Protection Radius', value: '5 meters' },
  { label: 'Country of Origin', value: 'Made in India' },
];

export const earthPitCoverSpecs: ProductSpec[] = [
  { label: 'Size', value: '6 Inch' },
  { label: 'Material', value: 'Polyplastic' },
  { label: 'Finishing', value: 'Polished' },
  { label: 'Color', value: 'Black' },
  { label: 'Equipment Type', value: 'Earthing Pit Cover' },
  { label: 'Country of Origin', value: 'Made in India' },
  { label: 'Dimension', value: 'Top (Dia) 155 mm x Bottom (Dia) 210 mm x Height 240 mm' },
];

export const frpEarthPitCoverSpecs: ProductSpec[] = [
  { label: 'Size', value: '10 Inch' },
  { label: 'Material', value: 'FRP' },
  { label: 'Color', value: 'Black' },
  { label: 'Dimensions', value: 'Top (Dia) 254 mm x Bottom (Dia) 210 mm x Height 240 mm' },
  { label: 'Features', value: 'Corrosion Resistant' },
  { label: 'Equipment Type', value: 'Earthing Pit Cover' },
  { label: 'Country of Origin', value: 'Made in India' },
];

export const products: Product[] = [
  {
    slug: 'topbas-sirius-ese-lightning-arrester',
    name: 'TOPBAS SIRIUS ESE Lightning Arrester',
    category: 'ESE Lightning Arrester',
    brand: 'TOPBAS',
    image: '/assets/images/sirius-ese-lightning-arrester.webp',
    imageAlt: 'TOPBAS SIRIUS ESE lightning arrester, stainless steel early streamer emission air terminal',
    metaTitle: 'TOPBAS SIRIUS ESE Lightning Arrester — 107 m Radius',
    metaDescription:
      'TOPBAS SIRIUS non-electronic ESE lightning arrester: ΔT 60 μs, 304L stainless steel, protection radius up to 107 m (5 m mast, Level IV), 200 kA tested, NF C 17-102. Imported from Turkey. Supplied and installed by Henel Engineers across India.',
    keywords: [
      'TOPBAS SIRIUS',
      'TOPBAS SIRIUS ESE lightning arrester',
      'SIRIUS ESE lightning arrester',
      'TOPBAS lightning arrester India',
      'ESE lightning arrester 107 m radius',
      'TOPBAS dealer Tamil Nadu',
    ],
    summary:
      'The TOPBAS SIRIUS is a non-electronic Early Streamer Emission (ESE) lightning arrester imported from Turkey. With an advance time of 60 μs it offers a protection radius of up to 107 m (5 m mast, Level IV), so a single mast can protect a large industrial or commercial site. Henel Engineers is an authorised TOPBAS supplier.',
    specsTitle: 'Technical Specifications',
    specs: siriusSpecs,
    note:
      'Specifications are sourced from TOPBAS product documentation. Consult the official TOPBAS datasheet and a qualified engineer for project-specific design decisions. Henel Engineers does not independently certify these specifications.',
    uses: ['Factories and warehouses', 'Commercial buildings and campuses', 'Communication towers', 'Infrastructure facilities', 'Temples, churches and tall structures'],
    faqs: [
      {
        question: 'What is the protection radius of the TOPBAS SIRIUS?',
        answer: 'The TOPBAS SIRIUS ESE lightning arrester has a protection radius of up to 107 m with a 5 m mast at protection Level IV.',
      },
      {
        question: 'Does the TOPBAS SIRIUS need a battery?',
        answer: 'No. The TOPBAS SIRIUS is a non-electronic ESE lightning arrester and needs no battery or external power source.',
      },
      {
        question: 'Which standards does the TOPBAS SIRIUS follow?',
        answer: 'The TOPBAS SIRIUS is designed to NF C 17-102, UNE 21186 and TS EN 62561.',
      },
      { question: 'How do I buy the TOPBAS SIRIUS?', answer: `Henel Engineers is an authorised TOPBAS supplier. ${QUOTE}` },
    ],
    servicePage: 'ese-lightning-arrester',
    related: ['umbraeco-ese-lightning-arrester', 'type-1-2-surge-protection-device', 'copper-bonded-earth-rod'],
  },
  {
    slug: 'umbraeco-ese-lightning-arrester',
    name: 'UMBRAECO ESE Lightning Arrester',
    category: 'ESE Lightning Arrester',
    image: '/assets/images/lyra-ese-lightning-arrester.webp',
    imageAlt: 'UMBRAECO ESE lightning arrester device, non-electronic early streamer emission type for lightning protection',
    metaTitle: 'UMBRAECO ESE Lightning Arrester — 51 m Radius, NF C 17-102',
    metaDescription:
      'UMBRAECO non-electronic ESE lightning arrester: ΔT 10 µs, protection radius up to 51 m (Level IV), designed and tested to NF C 17-102 (2011), CE certified, no battery required. Supplied and installed by Henel Engineers across India.',
    keywords: [
      'UMBRAECO ESE lightning arrester',
      'UMBRAECO lightning arrester',
      'non-electronic ESE lightning arrester',
      'ESE lightning arrester 51 m radius',
      'CE certified ESE lightning arrester',
    ],
    summary:
      'The UMBRAECO is a non-electronic Early Streamer Emission (ESE) lightning arrester designed and tested to NF C 17-102 (2011). It is CE certified, offers a protection radius of up to 51 m (Level IV) and needs no battery or external power source.',
    specsTitle: 'Features',
    specs: umbraEcoSpecs,
    note: 'Designed and tested as per NF C 17-102 (2011) Standard. Consult a qualified engineer for project-specific design decisions.',
    uses: ['Commercial buildings', 'Residential and institutional buildings', 'Industrial structures', 'Rooftops with solar panels'],
    faqs: [
      {
        question: 'What is the protection radius of the UMBRAECO ESE lightning arrester?',
        answer: 'The UMBRAECO offers a protection radius of up to 51 metres at protection Level IV.',
      },
      {
        question: 'Is the UMBRAECO certified?',
        answer: 'Yes. The UMBRAECO is CE certified and designed and tested to NF C 17-102 (2011).',
      },
      {
        question: 'Does the UMBRAECO need a power supply?',
        answer: 'No. It is a non-electronic ESE lightning arrester that needs no battery or external power source.',
      },
      { question: 'How do I buy the UMBRAECO?', answer: QUOTE },
    ],
    servicePage: 'ese-lightning-arrester',
    related: ['topbas-sirius-ese-lightning-arrester', 'copper-bonded-conventional-lightning-arrester', 'type-1-2-surge-protection-device'],
  },
  {
    slug: 'type-1-2-surge-protection-device',
    name: 'TOPBAS Type 1 + 2 Surge Protection Device (TB7K320T12L)',
    category: 'Surge Protection Device (SPD)',
    brand: 'TOPBAS',
    image: '/assets/images/type-1-2-spd.webp',
    imageAlt: 'Type 1 + 2 three-phase surge protection device for electrical panels',
    metaTitle: 'Type 1 + 2 Three Phase SPD — TOPBAS TB7K320T12L',
    metaDescription:
      'TOPBAS TB7K320T12L Type 1 + 2 (Class B + C) three-phase surge protection device: 3 pole + N, Uc 320 VAC, Up 1.6 kV, Iimp 7 kA, In 30 kA, IP20. Supplied and installed by Henel Engineers across India.',
    keywords: [
      'TB7K320T12L',
      'TOPBAS SPD',
      'Type 1 + 2 SPD',
      'three phase SPD',
      'Class B + C surge protection device',
      'surge protection device 320 VAC',
    ],
    summary:
      'The TOPBAS TB7K320T12L is a Type 1 + 2 (Class B + C) three-phase surge protection device, 3 pole + N, that protects electrical panels and sensitive equipment from partial lightning currents and induced surges in a single unit.',
    specsTitle: 'Technical Specifications',
    specs: spdSpecs,
    note: 'Consult a qualified engineer for project-specific design decisions.',
    uses: ['Main incoming electrical panels', 'Industrial and commercial installations', 'Buildings with external lightning protection', 'Sensitive equipment and data systems'],
    faqs: [
      {
        question: 'What type of SPD is the TB7K320T12L?',
        answer: 'It is a Type 1 + 2 (Class B + C) three-phase surge protection device with 3 pole + N configuration.',
      },
      {
        question: 'What are the ratings of the TB7K320T12L?',
        answer: 'Rated voltage (Uc) 320 VAC, voltage protection level (Up) 1.6 kV, impulse current (Iimp) 7 kA, nominal discharge current (In) 30 kA, IP20.',
      },
      {
        question: 'Where is a Type 1 + 2 SPD installed?',
        answer: 'A Type 1 + 2 SPD is typically installed at the main incoming electrical panel, especially in buildings with external lightning protection.',
      },
      { question: 'How do I buy this SPD?', answer: QUOTE },
    ],
    servicePage: 'surge-protection-device',
    related: ['topbas-sirius-ese-lightning-arrester', 'copper-bonded-earth-rod', 'carbomaxx-earthing-compound'],
  },
  {
    slug: 'copper-bonded-earth-rod',
    name: 'Copper Bonded Earth Rod',
    category: 'Earth Rod',
    image: '/assets/images/copper-earth-rod.webp',
    imageAlt: 'Copper bonded earth rod for earthing and grounding installations',
    metaTitle: 'Copper Bonded Earth Rod — 17.2 mm, 1 m / 2 m / 3 m',
    metaDescription:
      'Copper bonded earth rod for earthing: 17.2 mm diameter, available in 1 m, 2 m and 3 m lengths, minimum order 1 piece. Supplied and installed by Henel Engineers across India.',
    keywords: [
      'copper bonded earth rod',
      'copper earth rod',
      'copper bonded earthing electrode',
      'earth rod 17.2 mm',
      'copper earth rod supplier Tamil Nadu',
    ],
    summary:
      'A copper bonded earth rod is an earthing electrode with a copper layer bonded to a steel core, combining good conductivity with corrosion resistance. Henel Engineers supplies 17.2 mm copper bonded earth rods in 1 m, 2 m and 3 m lengths, with a minimum order of 1 piece.',
    specsTitle: 'Product Details',
    specs: copperEarthRodSpecs,
    uses: ['Lightning protection earthing', 'Electrical installation earthing', 'Chemical earthing with earthing compound', 'Industrial, commercial and residential sites'],
    faqs: [
      {
        question: 'What sizes of copper bonded earth rod are available?',
        answer: 'Henel Engineers supplies copper bonded earth rods with 17.2 mm diameter in 1 m, 2 m and 3 m lengths.',
      },
      {
        question: 'What is the minimum order for copper bonded earth rods?',
        answer: 'The minimum order quantity is 1 piece.',
      },
      {
        question: 'Copper bonded or GI earth rod — which is better?',
        answer:
          'Copper bonded rods offer good conductivity and corrosion resistance for a long service life; GI rods are an economical, widely used option. The right choice depends on soil conditions, required earth resistance and budget.',
      },
      { question: 'How do I buy copper bonded earth rods?', answer: QUOTE },
    ],
    servicePage: 'earthing-system',
    related: ['gi-earth-rod', 'carbomaxx-earthing-compound', 'earth-pit-cover'],
  },
  {
    slug: 'gi-earth-rod',
    name: 'GI Earth Rod',
    category: 'Earth Rod',
    image: '/assets/images/gi-earth-rod.webp',
    imageAlt: 'GI earth rod, galvanised iron earthing rod for grounding installations',
    metaTitle: 'GI Earth Rod — Class B GI Pipe, 48 mm, 1 m / 2 m / 3 m',
    metaDescription:
      'GI earth rod made from Class B GI pipe: 48 mm diameter, 3 mm wall thickness, available in 1 m, 2 m and 3 m lengths. Supplied and installed by Henel Engineers across India.',
    keywords: ['GI earth rod', 'GI pipe earthing', 'GI earthing electrode', 'Class B GI pipe earth rod', 'GI earth rod supplier Tamil Nadu'],
    summary:
      'A GI (galvanised iron) earth rod is a zinc-coated steel pipe electrode widely used for economical earthing. Henel Engineers supplies GI earth rods made from Class B GI pipe — 48 mm diameter, 3 mm wall thickness — in 1 m, 2 m and 3 m lengths.',
    specsTitle: 'Product Details',
    specs: giEarthRodSpecs,
    uses: ['Electrical installation earthing', 'Pipe earthing in earth pits', 'Industrial and commercial sites', 'Residential earthing'],
    faqs: [
      {
        question: 'What sizes of GI earth rod are available?',
        answer: 'Henel Engineers supplies GI earth rods of 48 mm diameter and 3 mm wall thickness in 1 m, 2 m and 3 m lengths.',
      },
      {
        question: 'What material is the GI earth rod made from?',
        answer: 'It is made from Class B GI (galvanised iron) pipe.',
      },
      { question: 'How do I buy GI earth rods?', answer: QUOTE },
    ],
    servicePage: 'earthing-system',
    related: ['copper-bonded-earth-rod', 'carbomaxx-earthing-compound', 'frp-earth-pit-cover'],
  },
  {
    slug: 'carbomaxx-earthing-compound',
    name: 'CARBOMAXX Earthing Compound',
    category: 'Earthing Compound',
    brand: 'TOPBAS',
    image: '/assets/images/carbomaxx-earthing-compound.webp',
    imageAlt: 'CARBOMAXX earthing compound bag, backfill compound for earthing pits',
    metaTitle: 'CARBOMAXX Earthing Compound — 10 kg & 25 kg Bags',
    metaDescription:
      'CARBOMAXX earthing compound by TOPBAS: powder backfill for earthing pits, supplied in 10 kg and 25 kg bags, made in India. Available from Henel Engineers across India.',
    keywords: ['CARBOMAXX earthing compound', 'earthing compound', 'earthing backfill compound', 'chemical earthing compound', 'TOPBAS earthing compound'],
    summary:
      'CARBOMAXX is a powdered earthing compound by TOPBAS, used as a backfill around earth electrodes in earthing pits to help achieve and maintain low earth resistance. Henel Engineers supplies it in 10 kg and 25 kg bags; it is made in India.',
    specsTitle: 'Product Details',
    specs: carbomaxxSpecs,
    uses: ['Chemical earthing', 'Backfill around earth rods and electrodes', 'Lightning protection earthing', 'Sites with high soil resistivity'],
    faqs: [
      {
        question: 'What is CARBOMAXX earthing compound used for?',
        answer:
          'It is used as a backfill around earth electrodes in earthing pits to help achieve and maintain low earth resistance.',
      },
      {
        question: 'What pack sizes are available?',
        answer: 'CARBOMAXX earthing compound is supplied in 10 kg and 25 kg bags.',
      },
      { question: 'How do I buy CARBOMAXX earthing compound?', answer: QUOTE },
    ],
    servicePage: 'earthing-system',
    related: ['copper-bonded-earth-rod', 'gi-earth-rod', 'earth-pit-cover'],
  },
  {
    slug: 'copper-bonded-conventional-lightning-arrester',
    name: 'Copper Bonded Conventional Lightning Arrester',
    category: 'Conventional Lightning Arrester',
    image: '/assets/images/copper-spike-lightning-arrester.webp',
    imageAlt: 'Copper bonded conventional lightning arrester with mounting base',
    metaTitle: 'Copper Conventional Lightning Arrester — 100 kA',
    metaDescription:
      'Copper bonded conventional lightning arrester: copper, 100 kA current rating, 5-metre protection radius, made in India. Supplied and installed by Henel Engineers across India.',
    keywords: [
      'copper lightning arrester',
      'conventional lightning arrester',
      'copper bonded lightning arrester',
      'lightning arrester 100 kA',
      'Franklin rod lightning arrester',
      'lightning arrester for house',
    ],
    summary:
      'A copper bonded conventional (Franklin rod) lightning arrester for external lightning protection. It is made of copper, rated at 100 kA, and protects a 5-metre radius — well suited to smaller structures or single points.',
    specsTitle: 'Product Details',
    specs: conventionalArresterSpecs,
    uses: ['Houses and small buildings', 'Single points on larger roofs', 'Masts and small structures'],
    faqs: [
      {
        question: 'What is the protection radius of the copper conventional lightning arrester?',
        answer: 'The copper bonded conventional lightning arrester has a 5-metre protection radius.',
      },
      {
        question: 'What is the current rating?',
        answer: 'It is rated at 100 kA.',
      },
      {
        question: 'Should I choose a conventional or ESE lightning arrester?',
        answer:
          'Conventional arresters suit small structures or single points. For large areas, an ESE arrester such as the TOPBAS SIRIUS covers up to 107 m (5 m mast, Level IV) from one mast. The choice is made from a risk assessment.',
      },
      { question: 'How do I buy this lightning arrester?', answer: QUOTE },
    ],
    servicePage: 'lightning-arrester',
    related: ['topbas-sirius-ese-lightning-arrester', 'umbraeco-ese-lightning-arrester', 'copper-bonded-earth-rod'],
  },
  {
    slug: 'earth-pit-cover',
    name: 'Earth Pit Chamber Cover (6 Inch, Polyplastic)',
    category: 'Earth Pit Chamber',
    image: '/assets/images/earth-pit-cover.webp',
    imageAlt: 'Earth pit cover chamber, polyplastic earthing pit cover with lid',
    metaTitle: 'Earth Pit Cover — 6 Inch Polyplastic Earthing Chamber',
    metaDescription:
      '6-inch black polyplastic earth pit chamber cover, polished finish: top 155 mm, bottom 210 mm, height 240 mm, made in India. Supplied by Henel Engineers across India.',
    keywords: ['earth pit cover', 'earth pit chamber', 'earthing pit cover', 'polyplastic earth pit cover', '6 inch earth pit cover'],
    summary:
      'A 6-inch black polyplastic earth pit chamber cover with a polished finish. It protects the top of the earth electrode and its connections, and gives easy access for inspection and testing.',
    specsTitle: 'Product Details',
    specs: earthPitCoverSpecs,
    uses: ['Earthing pits for electrical installations', 'Lightning protection earth pits', 'Inspection and testing access'],
    faqs: [
      {
        question: 'What are the dimensions of the 6-inch earth pit cover?',
        answer: 'Top diameter 155 mm, bottom diameter 210 mm, height 240 mm.',
      },
      {
        question: 'Why use an earth pit cover?',
        answer: 'It protects the earth electrode connection and gives easy access for periodic inspection and earth resistance testing.',
      },
      { question: 'How do I buy earth pit covers?', answer: QUOTE },
    ],
    servicePage: 'earthing-system',
    related: ['frp-earth-pit-cover', 'copper-bonded-earth-rod', 'carbomaxx-earthing-compound'],
  },
  {
    slug: 'frp-earth-pit-cover',
    name: 'FRP Earth Pit Cover (10 Inch)',
    category: 'Earth Pit Chamber',
    image: '/assets/images/frp-earth-pit-cover.webp',
    imageAlt: 'FRP earth pit cover chamber, corrosion resistant earthing pit cover with green lid',
    metaTitle: 'FRP Earth Pit Cover — 10 Inch, Corrosion Resistant',
    metaDescription:
      '10-inch FRP earth pit cover, corrosion resistant: top 254 mm, bottom 210 mm, height 240 mm, made in India. Supplied by Henel Engineers across India.',
    keywords: ['FRP earth pit cover', 'FRP earthing chamber', '10 inch earth pit cover', 'corrosion resistant earth pit cover', 'earth pit cover supplier'],
    summary:
      'A 10-inch earth pit cover made from FRP (fibre reinforced plastic) for corrosion resistance. It protects the earth electrode connection and allows easy inspection and testing.',
    specsTitle: 'Product Details',
    specs: frpEarthPitCoverSpecs,
    uses: ['Earthing pits in corrosive or coastal environments', 'Lightning protection earth pits', 'Industrial earthing installations'],
    faqs: [
      {
        question: 'What are the dimensions of the FRP earth pit cover?',
        answer: 'Top diameter 254 mm, bottom diameter 210 mm, height 240 mm.',
      },
      {
        question: 'Why choose an FRP earth pit cover?',
        answer: 'FRP is corrosion resistant, making it a durable choice for earthing pits.',
      },
      { question: 'How do I buy FRP earth pit covers?', answer: QUOTE },
    ],
    servicePage: 'earthing-system',
    related: ['earth-pit-cover', 'gi-earth-rod', 'carbomaxx-earthing-compound'],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export const productHref = (slug: string) => `/products/${slug}`;
