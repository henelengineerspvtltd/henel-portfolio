/**
 * Structured data (JSON-LD) generators for Henel Engineers Pvt. Ltd.
 *
 * IMPORTANT: Only real, site-verified facts are encoded here (registered
 * office, branch office, phone numbers, email, founding date, CIN, directors,
 * services actually listed on the site). Do not add certifications, review
 * ratings, social profiles, or locations that are not already published
 * elsewhere on this site.
 */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const COMPANY_NAME = 'Henel Engineers Pvt. Ltd.';
export const COMPANY_PHONE_1 = '+919443282312';
export const COMPANY_PHONE_2 = '+919443692711';
export const COMPANY_EMAIL = 'henelkkla@gmail.com';
export const COMPANY_WHATSAPP = 'https://wa.me/919443282312';
export const COMPANY_CIN = 'U45207TN1999PTC043025';
export const COMPANY_SLOGAN = 'Engineering Solutions in Lightning Protection & Wind Energy';

export const ORG_ID = `${SITE_URL}/#organization`;
export const LOCAL_BUSINESS_ID = `${SITE_URL}/#localbusiness`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

/** Builds an absolute URL from a site-relative path. */
export function absoluteUrl(path = '/') {
  if (path.startsWith('http')) return path;
  return `${SITE_URL}${path === '/' ? '' : path}`;
}

const REGISTERED_OFFICE = {
  '@type': 'PostalAddress',
  streetAddress: 'No.8, 1104 J/64, Kamaraj Nagar, Aralvaimozhi',
  addressLocality: 'Aralvaimozhi',
  addressRegion: 'Tamil Nadu',
  postalCode: '629301',
  addressCountry: 'IN',
};

const BRANCH_OFFICE = {
  '@type': 'PostalAddress',
  streetAddress: 'Kalluthotti - Marthandam Rd, Unnamalaikadai',
  addressLocality: 'Marthandam',
  addressRegion: 'Tamil Nadu',
  postalCode: '629165',
  addressCountry: 'IN',
};

/** Topics the company works in — helps search engines and AI assistants understand expertise. */
const KNOWS_ABOUT = [
  'Lightning protection system',
  'Early Streamer Emission (ESE) lightning arrester',
  'Conventional lightning arrester',
  'Earthing system',
  'Copper bonded earth rod',
  'GI earth rod',
  'Earthing compound',
  'Earth pit chamber',
  'Surge protection device (SPD)',
  'NF C 17-102',
  'Wind turbine operation and maintenance',
  'Windmill gearbox repair',
  'Wind turbine blade repair',
  'Generator and transformer rewinding',
  'Wind turbine hydraulic servicing',
  'Wind turbine PCB repair',
  'Windmill erection and installation',
  'Windmill spare parts',
];

export const LIGHTNING_SERVICE_OFFERS = [
  'ESE Lightning Arresters / Air Terminals',
  'Surge Protection Devices (SPD)',
  'Earthing Solutions',
  'LPS Design & Engineering',
  'Lightning Protection Supply & Installation',
  'Industrial & Building Lightning Protection',
];

export const WINDMILL_SERVICE_OFFERS = [
  'Gearbox Repair & Overhaul',
  'Blade Patching & Repair Works',
  'Transformer & Generator Rewinding & Bearing Replacement',
  'Sleeve Ring Replacement',
  'Hydraulic Unit Servicing',
  'PCB Servicing & Repair',
  'Windmill Erection & Installation Works',
  'Supply of All Types of Windmill Spare Parts',
  'Windmill Security Services',
  '24x7 Breakdown Support',
];

function offerCatalog(name: string, services: string[], url: string) {
  return {
    '@type': 'OfferCatalog',
    name,
    url: absoluteUrl(url),
    itemListElement: services.map((s) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: s },
    })),
  };
}

const AREA_SERVED = [
  { '@type': 'State', name: 'Tamil Nadu', containedInPlace: { '@type': 'Country', name: 'India' } },
  { '@type': 'State', name: 'Karnataka', containedInPlace: { '@type': 'Country', name: 'India' } },
];

/** Root Organization schema — shared across every page via the layout. */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: COMPANY_NAME,
    legalName: COMPANY_NAME,
    alternateName: ['Henel Engineers', 'HENEL ENGINEERS PVT. LTD.', 'Henel Engineers Private Limited'],
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/assets/images/henel-logo.png`,
      width: 449,
      height: 183,
    },
    image: `${SITE_URL}/assets/images/henel-logo.png`,
    slogan: COMPANY_SLOGAN,
    foundingDate: '1999-08-17',
    foundingLocation: {
      '@type': 'Place',
      name: 'Aralvaimozhi, Kanyakumari District, Tamil Nadu, India',
    },
    identifier: {
      '@type': 'PropertyValue',
      propertyID: 'CIN',
      name: 'Corporate Identification Number (RoC-Chennai)',
      value: COMPANY_CIN,
    },
    email: COMPANY_EMAIL,
    telephone: COMPANY_PHONE_1,
    description:
      'Henel Engineers Pvt. Ltd. supplies and installs lightning protection systems, ESE arresters, earthing solutions and surge protection, and provides windmill operation and maintenance services across Tamil Nadu and Karnataka.',
    address: [REGISTERED_OFFICE, BRANCH_OFFICE],
    areaServed: AREA_SERVED,
    knowsAbout: KNOWS_ABOUT,
    employee: [
      {
        '@type': 'Person',
        name: 'R. Rojore Rajesh',
        jobTitle: 'Director',
        image: `${SITE_URL}/assets/images/director-rajesh.jpg`,
      },
      {
        '@type': 'Person',
        name: 'Rajadhas',
        jobTitle: 'Director',
        image: `${SITE_URL}/assets/images/director-raajadhas.jpg`,
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Henel Engineers Products & Services',
      itemListElement: [
        offerCatalog('Lightning Protection & Earthing', LIGHTNING_SERVICE_OFFERS, '/lightning-protection'),
        offerCatalog('Windmill Operation & Maintenance', WINDMILL_SERVICE_OFFERS, '/windmill'),
      ],
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: COMPANY_PHONE_1,
        contactType: 'sales',
        areaServed: ['IN'],
        availableLanguage: ['en', 'ta'],
      },
      {
        '@type': 'ContactPoint',
        telephone: COMPANY_PHONE_2,
        contactType: 'customer service',
        areaServed: ['IN'],
        availableLanguage: ['en', 'ta'],
      },
    ],
  };
}

/** WebSite schema — shared across every page via the layout. */
export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: COMPANY_NAME,
    alternateName: 'Henel Engineers',
    url: SITE_URL,
    inLanguage: 'en-IN',
    publisher: { '@id': ORG_ID },
  };
}

/** LocalBusiness schema for the registered office — used on the Home and Contact pages. */
export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': LOCAL_BUSINESS_ID,
    name: COMPANY_NAME,
    alternateName: 'Henel Engineers',
    description:
      'Lightning protection systems, ESE lightning arresters, earthing, surge protection and windmill operation & maintenance services in Tamil Nadu and Karnataka. Est. 1999.',
    image: `${SITE_URL}/assets/images/henel-logo.png`,
    logo: `${SITE_URL}/assets/images/henel-logo.png`,
    url: SITE_URL,
    parentOrganization: { '@id': ORG_ID },
    foundingDate: '1999-08-17',
    telephone: COMPANY_PHONE_1,
    email: COMPANY_EMAIL,
    priceRange: '$$',
    hasMap: 'https://maps.app.goo.gl/eG8yo7BKjg6gK9xe8',
    address: REGISTERED_OFFICE,
    areaServed: AREA_SERVED,
    knowsAbout: KNOWS_ABOUT,
    department: [
      {
        '@type': 'LocalBusiness',
        name: `${COMPANY_NAME} — Branch Office`,
        telephone: COMPANY_PHONE_2,
        hasMap: 'https://maps.app.goo.gl/2whf2eEDufEqSfZw9',
        address: BRANCH_OFFICE,
      },
    ],
  };
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export interface FaqItem {
  question: string;
  answer: string;
}

export function faqPageSchema(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

/** Service schema — used for the two main service divisions. */
export function serviceSchema(opts: {
  name: string;
  description: string;
  areaServed?: string[];
  serviceType?: string;
  url: string;
  /** Individual services offered under this division (all must already be listed on the page). */
  offers?: string[];
  image?: string;
}) {
  const url = absoluteUrl(opts.url);
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    serviceType: opts.serviceType || opts.name,
    name: opts.name,
    description: opts.description,
    provider: {
      '@type': 'Organization',
      '@id': ORG_ID,
      name: COMPANY_NAME,
      telephone: COMPANY_PHONE_1,
      url: SITE_URL,
    },
    areaServed: (opts.areaServed || ['Tamil Nadu']).map((a) => ({
      '@type': 'State',
      name: a,
      containedInPlace: { '@type': 'Country', name: 'India' },
    })),
    ...(opts.image ? { image: absoluteUrl(opts.image) } : {}),
    ...(opts.offers ? { hasOfferCatalog: offerCatalog(opts.name, opts.offers, opts.url) } : {}),
    url,
  };
}

/**
 * WebPage schema with `speakable` — tells search engines, voice assistants
 * and AI answer engines which parts of the page best summarise it.
 */
export function webPageSchema(opts: {
  path: string;
  name: string;
  description: string;
  type?: 'WebPage' | 'ContactPage' | 'AboutPage' | 'CollectionPage';
  image?: string;
  about?: string[];
}) {
  const url = absoluteUrl(opts.path);
  return {
    '@context': 'https://schema.org',
    '@type': opts.type || 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: opts.name,
    description: opts.description,
    inLanguage: 'en-IN',
    isPartOf: { '@id': WEBSITE_ID },
    publisher: { '@id': ORG_ID },
    ...(opts.image
      ? { primaryImageOfPage: { '@type': 'ImageObject', url: absoluteUrl(opts.image) } }
      : {}),
    ...(opts.about ? { about: opts.about.map((a) => ({ '@type': 'Thing', name: a })) } : {}),
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '#faq summary', '#faq details p'],
    },
  };
}
