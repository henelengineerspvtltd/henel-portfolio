/**
 * Plain-text site summaries for AI search engines and LLM assistants
 * (the /llms.txt convention — https://llmstxt.org). Built only from facts
 * already published on this site.
 */

import { SITE_URL, COMPANY_CIN } from './structured-data';
import { faqCategories } from './faqs';

const u = (path: string) => `${SITE_URL}${path}`;

export function llmsSummary() {
  return `# Henel Engineers Pvt. Ltd.

> Henel Engineers Pvt. Ltd. (est. 17 August 1999, Aralvaimozhi, Kanyakumari District, Tamil Nadu, India) is an engineering company with two divisions: (1) Lightning Protection — supply, design and installation of ESE lightning arresters, conventional lightning arresters, earthing systems and surge protection devices across Tamil Nadu; authorised supplier of TOPBAS lightning protection products imported from Turkey. (2) Wind Energy — windmill / wind turbine (WTG) operation & maintenance, gearbox repair, blade repair, generator & transformer rewinding, hydraulic and PCB servicing, erection, spare parts and 24x7 breakdown support across Tamil Nadu and Karnataka.

Key facts:
- Legal name: Henel Engineers Pvt. Ltd. (CIN ${COMPANY_CIN}, RoC-Chennai)
- Founded: 17 August 1999 — 25+ years of experience
- Directors: R. Rojore Rajesh, Rajadhas
- Registered office: No.8, 1104 J/64, Kamaraj Nagar, Aralvaimozhi, Kanyakumari District, Tamil Nadu 629 301, India
- Branch office: Kalluthotti - Marthandam Rd, Unnamalaikadai, Marthandam, Tamil Nadu 629 165, India
- Phone: +91 94432 82312, +91 94436 92711
- WhatsApp: +91 94432 82312
- Email: henelkkla@gmail.com
- Lightning protection service area: Tamil Nadu
- Windmill maintenance service area: Tamil Nadu and Karnataka
- Wind energy: 30+ active Comprehensive Maintenance Contracts (CMC), 7+ WTG makes supported, 24x7 breakdown support

## Pages

- [Home](${u('/')}): Company overview, both divisions, product and service list
- [Lightning Protection](${u('/lightning-protection')}): ESE lightning arresters (TOPBAS SIRIUS, UMBRAECO), surge protection devices, copper bonded and GI earth rods, CARBOMAXX earthing compound, conventional lightning arrester, earth pit covers — with full technical specifications
- [Windmill Maintenance](${u('/windmill')}): Wind turbine operation & maintenance, gearbox repair, blade patching, generator rewinding, hydraulic servicing, PCB repair, erection, spare parts, security, 24x7 breakdown support
- [FAQ](${u('/faq')}): Answers about the company, lightning protection, earthing, surge protection and windmill maintenance
- [Contact](${u('/contact')}): Phone, WhatsApp, email, office addresses, directors and quote request form

## Products (Lightning Protection & Earthing)

- TOPBAS SIRIUS ESE Lightning Arrester: non-electronic ESE, ΔT 60 μs, 304L stainless steel, protection radius up to 107 m (5 m mast, Level IV), 200 kA tested (10/350 μs), NF C 17-102 · UNE 21186 · TS EN 62561
- UMBRAECO ESE Lightning Arrester: non-electronic ESE, NF C 17-102 (2011), CE certified, ΔT 10 µs, protection radius up to 51 m (Level IV), no battery or external power required
- TOPBAS Surge Protection Device TB7K320T12L: Type 1 + 2 (Class B + C), three phase, 3 pole + N, Uc 320 VAC, Up 1.6 kV, Iimp 7 kA, In 30 kA, IP20
- Copper Bonded Earth Rod: 17.2 mm diameter, 1 m / 2 m / 3 m lengths
- GI Earth Rod: Class B GI pipe, 48 mm diameter, 3 mm wall, 1 m / 2 m / 3 m lengths
- CARBOMAXX Earthing Compound (TOPBAS): powder, 10 kg and 25 kg bags, made in India
- Copper Bonded Conventional Lightning Arrester: copper, 100 kA, 5 m protection radius, made in India
- Earth Pit Cover: 6-inch black polyplastic; FRP Earth Pit Cover: 10-inch, corrosion resistant

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
  return `${llmsSummary()}\n---\n\n# Frequently Asked Questions — Henel Engineers Pvt. Ltd.\n\n${faqText}`;
}
