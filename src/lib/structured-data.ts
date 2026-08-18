/**
 * Structured data (JSON-LD) generators for Henel Engineers Pvt. Ltd.
 *
 * IMPORTANT: Only real, site-verified facts are encoded here (registered
 * office, branch office, phone numbers, email, founding date, CIN, services
 * actually listed on the site). Do not add certifications, review ratings,
 * social profiles, or locations that are not already published elsewhere
 * on this site.
 */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const COMPANY_NAME = 'Henel Engineers Pvt. Ltd.';
export const COMPANY_PHONE_1 = '+919443282312';
export const COMPANY_PHONE_2 = '+919443692711';
export const COMPANY_EMAIL = 'henelkkla@gmail.com';

/** Root Organization schema — shared across every page via the layout. */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: COMPANY_NAME,
    legalName: COMPANY_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/assets/images/henel-logo.png`,
    foundingDate: '1999-08-17',
    email: COMPANY_EMAIL,
    telephone: COMPANY_PHONE_1,
    description:
      'Henel Engineers Pvt. Ltd. supplies and installs lightning protection systems, ESE arresters, earthing solutions and surge protection, and provides windmill operation and maintenance services across Tamil Nadu and Karnataka.',
    address: [
      {
        '@type': 'PostalAddress',
        streetAddress: 'No.8, 1104 J/64, Kamaraj Nagar, Aralvaimozhi',
        addressLocality: 'Aralvaimozhi',
        addressRegion: 'Tamil Nadu',
        postalCode: '629301',
        addressCountry: 'IN',
      },
      {
        '@type': 'PostalAddress',
        streetAddress: 'Kalluthotti - Marthandam Rd, Unnamalaikadai',
        addressLocality: 'Marthandam',
        addressRegion: 'Tamil Nadu',
        postalCode: '629165',
        addressCountry: 'IN',
      },
    ],
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

/** LocalBusiness schema for the registered office — used on the Contact page. */
export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#localbusiness`,
    name: COMPANY_NAME,
    image: `${SITE_URL}/assets/images/henel-logo.png`,
    url: SITE_URL,
    telephone: COMPANY_PHONE_1,
    email: COMPANY_EMAIL,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'No.8, 1104 J/64, Kamaraj Nagar, Aralvaimozhi',
      addressLocality: 'Aralvaimozhi',
      addressRegion: 'Tamil Nadu',
      postalCode: '629301',
      addressCountry: 'IN',
    },
    areaServed: [
      { '@type': 'State', name: 'Tamil Nadu' },
      { '@type': 'State', name: 'Karnataka' },
    ],
    department: [
      {
        '@type': 'LocalBusiness',
        name: `${COMPANY_NAME} — Branch Office`,
        telephone: COMPANY_PHONE_2,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Kalluthotti - Marthandam Rd, Unnamalaikadai',
          addressLocality: 'Marthandam',
          addressRegion: 'Tamil Nadu',
          postalCode: '629165',
          addressCountry: 'IN',
        },
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
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: opts.serviceType || opts.name,
    name: opts.name,
    description: opts.description,
    provider: {
      '@type': 'Organization',
      name: COMPANY_NAME,
      telephone: COMPANY_PHONE_1,
      url: SITE_URL,
    },
    areaServed: (opts.areaServed || ['Tamil Nadu']).map((a) => ({
      '@type': 'State',
      name: a,
    })),
    url: opts.url.startsWith('http') ? opts.url : `${SITE_URL}${opts.url}`,
  };
}

export interface ProductSpecItem {
  label: string;
  value: string;
}

/** Product schema — used for TOPBAS and other physical products with published specs. */
export function productSchema(opts: {
  name: string;
  description: string;
  image?: string;
  brand?: string;
  specs?: ProductSpecItem[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: opts.name,
    description: opts.description,
    ...(opts.image ? { image: `${SITE_URL}${opts.image}` } : {}),
    ...(opts.brand ? { brand: { '@type': 'Brand', name: opts.brand } } : {}),
    ...(opts.specs
      ? {
          additionalProperty: opts.specs.map((s) => ({
            '@type': 'PropertyValue',
            name: s.label,
            value: s.value,
          })),
        }
      : {}),
    manufacturer: opts.brand ? { '@type': 'Organization', name: opts.brand } : undefined,
    // Note: no `offers` block — price and live stock availability are not
    // published on the site, so they are intentionally omitted rather than
    // asserted.
  };
}
