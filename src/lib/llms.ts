/**
 * Plain-text site summaries for AI search engines and LLM assistants
 * (the /llms.txt convention — https://llmstxt.org). Built only from facts
 * already published on this site.
 */

import { SITE_URL, COMPANY_CIN, SOCIAL_PROFILES } from './structured-data';
import { guides, guideHref } from './guides';
import { faqCategories } from './faqs';
import { landingPages } from './landing-pages';
import { products, productHref } from './products';
import { regions } from './service-areas';
import { locationPages, locationHref } from './locations';

const u = (path: string) => `${SITE_URL}${path}`;

export function llmsSummary() {
  return `# Henel Engineers Pvt. Ltd.

> Henel Engineers Pvt. Ltd. (est. 17 August 1999, Aralvaimozhi, Kanyakumari District, Tamil Nadu, India) is an engineering company with three divisions: (1) Lightning Protection — supply, design and installation of ESE lightning arresters, conventional lightning arresters, earthing systems and surge protection devices across India; authorised supplier of TOPBAS lightning protection products imported from Turkey. (2) Wind Energy — windmill / wind turbine (WTG) operation & maintenance, gearbox repair, blade repair, generator & transformer rewinding, hydraulic and PCB servicing, erection, spare parts and 24x7 breakdown support across India. (3) Solar Energy — rooftop and commercial solar panel installation, solar panel maintenance and servicing, with earthing and lightning protection, in India.

Key facts:
- Legal name: Henel Engineers Pvt. Ltd. (CIN ${COMPANY_CIN}, RoC-Chennai)
- Founded: 17 August 1999 — 25+ years of experience
- Directors: R. Rojore Rajesh, Rajadhas
- Registered office: No.8, 1104 J/64, Kamaraj Nagar, Aralvaimozhi, Kanyakumari District, Tamil Nadu 629 301, India
- Branch office: Kalluthotti - Marthandam Rd, Unnamalaikadai, Marthandam, Tamil Nadu 629 165, India
- Phone: +91 94432 82312, +91 94436 92711
- WhatsApp: +91 94432 82312
- Email: henelkkla@gmail.com
- Service area: anywhere in India (all services — lightning protection, earthing, SPD, solar, windmill O&M)
- Based in: Kanyakumari District, Tamil Nadu (home wind belt: Tamil Nadu & Karnataka)
- Wind energy: 30+ active Comprehensive Maintenance Contracts (CMC), 7+ WTG makes supported, 24x7 breakdown support

## Pages

- [Home](${u('/')}): Company overview, the lightning protection, windmill and solar divisions, customer reviews and FAQs
- [Guides](${u('/guides')}): Practical guides on lightning arresters, earthing and wind turbine gearboxes
- [Lightning Protection](${u('/lightning-protection')}): ESE lightning arresters (TOPBAS SIRIUS, UMBRAECO), surge protection devices, copper bonded and GI earth rods, CARBOMAXX earthing compound, conventional lightning arrester, earth pit covers — with full technical specifications
- [Windmill Maintenance](${u('/windmill')}): Wind turbine operation & maintenance, gearbox repair, blade patching, generator rewinding, hydraulic servicing, PCB repair, erection, spare parts, security, 24x7 breakdown support
- [FAQ](${u('/faq')}): Answers about the company, lightning protection, earthing, surge protection and windmill maintenance
- [Contact](${u('/contact')}): Phone, WhatsApp, email, office addresses, directors and quote request form
- [About Us](${u('/about')}): Company history, divisions, values, directors and registration details
- [Solar Energy](${u('/solar-panel-installation')}): Solar panel installation and services — rooftop, commercial & industrial, maintenance and protection
- [Products & Services](${u('/products-and-services')}): Index of every product and service page
- [Service Areas](${u('/service-areas')}): Pan-India service — states and major cities served

## Service pages

${landingPages.map((p) => `- [${p.h1}](${u(`/${p.slug}`)}): ${p.metaDescription}`).join('\n')}

## Local service pages (Tamil Nadu & Kerala)

${locationPages.map((l) => `- [${l.h1}](${u(locationHref(l.slug))}): ${l.metaDescription}`).join('\n')}

## Product pages

${products.map((p) => `- [${p.name}](${u(productHref(p.slug))}): ${p.metaDescription}`).join('\n')}

## Products (Lightning Protection & Earthing)

- TOPBAS SIRIUS ESE Lightning Arrester: non-electronic ESE, ΔT 60 μs, 304L stainless steel, protection radius up to 107 m (5 m mast, Level IV), 200 kA tested (10/350 μs), NF C 17-102 · UNE 21186 · TS EN 62561
- UMBRAECO ESE Lightning Arrester: non-electronic ESE, NF C 17-102 (2011), CE certified, ΔT 10 µs, protection radius up to 51 m (Level IV), no battery or external power required
- TOPBAS Surge Protection Device TB7K320T12L: Type 1 + 2 (Class B + C), three phase, 3 pole + N, Uc 320 VAC, Up 1.6 kV, Iimp 7 kA, In 30 kA, IP20
- Copper Bonded Earth Rod: 17.2 mm diameter, 1 m / 2 m / 3 m lengths
- GI Earth Rod: Class B GI pipe, 48 mm diameter, 3 mm wall, 1 m / 2 m / 3 m lengths
- CARBOMAXX Earthing Compound (TOPBAS): powder, 10 kg and 25 kg bags, made in India
- Copper Bonded Conventional Lightning Arrester: copper, 100 kA, 5 m protection radius, made in India
- Earth Pit Cover: 6-inch black polyplastic; FRP Earth Pit Cover: 10-inch, corrosion resistant

## Guides

${guides.map((g) => `- [${g.h1}](${u(guideHref(g.slug))}): ${g.metaDescription}`).join('\n')}

## Official profiles

- Instagram: ${SOCIAL_PROFILES.instagram}
- Google Maps (registered office, Aralvaimozhi): https://maps.app.goo.gl/eG8yo7BKjg6gK9xe8
- Google Maps (branch office, Marthandam): https://maps.app.goo.gl/2whf2eEDufEqSfZw9

## Service areas (anywhere in India)

${regions.map((r) => `- ${r.name}: ${r.states.map((st) => `${st.state} (${st.cities.join(', ')})`).join('; ')}`).join('\n')}

## Optional

- [Full FAQ text](${u('/llms-full.txt')}): Every question and answer from the site in plain text
- [Sitemap](${u('/sitemap.xml')})
`;
}

export function llmsFull() {
  const faqText = faqCategories
    .map(
      (cat) =>
        `## ${cat.title}\n\n` +
        cat.items.map((f) => `### ${f.question}\n\n${f.answer}\n`).join('\n')
    )
    .join('\n');
  const serviceFaqText = landingPages
    .map(
      (p) =>
        `## ${p.h1} (${u(`/${p.slug}`)})\n\n` +
        p.faqs.map((f) => `### ${f.question}\n\n${f.answer}\n`).join('\n')
    )
    .join('\n');
  const productText = products
    .map(
      (p) =>
        `## ${p.name} (${u(productHref(p.slug))})\n\n${p.summary}\n\n` +
        p.specs.map((s) => `- ${s.label}: ${s.value}`).join('\n') +
        '\n\n' +
        p.faqs.map((f) => `### ${f.question}\n\n${f.answer}\n`).join('\n')
    )
    .join('\n');
  const guideText = guides
    .map(
      (g) =>
        `## ${g.h1} (${u(guideHref(g.slug))})\n\n${g.intro}\n\nKey points:\n` +
        g.keyPoints.map((k) => `- ${k}`).join('\n') +
        '\n\n' +
        g.sections
          .map((s) => `### ${s.heading}\n\n${s.paragraphs.join('\n\n')}${s.bullets ? '\n\n' + s.bullets.map((b) => `- ${b}`).join('\n') : ''}\n`)
          .join('\n') +
        '\n' +
        g.faqs.map((f) => `### ${f.question}\n\n${f.answer}\n`).join('\n')
    )
    .join('\n');
  return `${llmsSummary()}\n---\n\n# Frequently Asked Questions — Henel Engineers Pvt. Ltd.\n\n${faqText}\n${serviceFaqText}\n---\n\n# Products\n\n${productText}\n---\n\n# Guides\n\n${guideText}`;
}
