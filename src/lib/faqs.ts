/**
 * Central FAQ content for Henel Engineers Pvt. Ltd.
 *
 * Used by the on-page FAQ sections, the /faq page, FAQPage JSON-LD and the
 * /llms.txt files for AI search engines. Keep answers self-contained (each one
 * names the company and the topic) so they read correctly when quoted on their
 * own by a search engine or AI assistant.
 *
 * IMPORTANT: Company-specific answers must only restate facts already
 * published on this site (services, products, specs, regions, contact
 * details). General technical explanations must stay accurate and
 * conservative.
 */

import type { FaqItem } from './structured-data';

export interface FaqCategory {
  id: string;
  title: string;
  description: string;
  items: FaqItem[];
}

export const companyFaqs: FaqItem[] = [
  {
    question: 'What does Henel Engineers Pvt. Ltd. do?',
    answer:
      'Henel Engineers Pvt. Ltd. is an engineering company with two divisions: lightning protection (supply and installation of ESE lightning arresters, earthing systems and surge protection devices) and wind energy (windmill operation & maintenance, gearbox repair, blade repair, generator rewinding, erection and 24x7 breakdown support).',
  },
  {
    question: 'When and where was Henel Engineers founded?',
    answer:
      'Henel Engineers Pvt. Ltd. was incorporated on 17 August 1999 in Aralvaimozhi, Kanyakumari District, Tamil Nadu, India — giving the company more than 25 years of engineering experience.',
  },
  {
    question: 'Is Henel Engineers a registered company?',
    answer:
      'Yes. Henel Engineers Pvt. Ltd. is a private limited company registered with the Registrar of Companies, Chennai, under CIN U45207TN1999PTC043025.',
  },
  {
    question: 'Where are Henel Engineers’ offices located?',
    answer:
      'The registered office is at No.8, 1104 J/64, Kamaraj Nagar, Aralvaimozhi, Kanyakumari District, Tamil Nadu 629 301. The branch office is on Kalluthotti - Marthandam Rd, Unnamalaikadai, Marthandam, Tamil Nadu 629 165.',
  },
  {
    question: 'Which regions does Henel Engineers serve?',
    answer:
      'Henel Engineers supplies and installs lightning protection systems across Tamil Nadu, and provides windmill (WTG) operation, maintenance and breakdown services across Tamil Nadu and Karnataka.',
  },
  {
    question: 'Who are the directors of Henel Engineers?',
    answer: 'The directors of Henel Engineers Pvt. Ltd. are R. Rojore Rajesh and Rajadhas.',
  },
  {
    question: 'How can I contact Henel Engineers?',
    answer:
      'Call +91 94432 82312 or +91 94436 92711, chat on WhatsApp at +91 94432 82312, email henelkkla@gmail.com, or use the quote request form on the contact page.',
  },
];

export const lightningFaqs: FaqItem[] = [
  {
    question: 'What is an ESE lightning arrester?',
    answer:
      'An Early Streamer Emission (ESE) lightning arrester is a non-electronic air terminal designed to trigger an earlier upward streamer than a conventional lightning rod, giving it a wider zone of protection. Henel Engineers supplies and installs ESE lightning arresters, including the TOPBAS SIRIUS and UMBRAECO models.',
  },
  {
    question: 'Is Henel Engineers an authorised TOPBAS supplier?',
    answer:
      'Yes. Henel Engineers is an authorised supplier of TOPBAS lightning protection products, which are imported from Turkey, including ESE lightning arresters, surge protection devices and earthing accessories.',
  },
  {
    question: 'What does a complete lightning protection system include?',
    answer:
      'A complete lightning protection system typically includes an ESE air terminal or lightning rod, down conductors, an earthing system, surge protection devices, and test joints and accessories — designed to the applicable standards with site-specific risk assessment and zone-of-protection calculations.',
  },
  {
    question: 'What is the difference between an ESE lightning arrester and a conventional lightning arrester?',
    answer:
      'A conventional (Franklin rod) lightning arrester protects a relatively small area around its tip, while an ESE lightning arrester emits an upward streamer earlier and therefore covers a much larger radius from a single mast. For example, the copper bonded conventional arrester supplied by Henel Engineers has a 5-metre protection radius, whereas the TOPBAS SIRIUS ESE arrester offers a protection radius of up to 107 m (5 m mast, Level IV).',
  },
  {
    question: 'What is the protection radius of the TOPBAS SIRIUS ESE lightning arrester?',
    answer:
      'The TOPBAS SIRIUS ESE lightning arrester has a protection radius of up to 107 m (5 m mast, Level IV), an advance time (ΔT) of 60 μs, a 304L stainless steel body, and has been tested at 200 kA (10/350 μs). It is designed to NF C 17-102, UNE 21186 and TS EN 62561.',
  },
  {
    question: 'What is the protection radius of the UMBRAECO ESE lightning arrester?',
    answer:
      'The UMBRAECO non-electronic ESE lightning arrester offers a protection radius of up to 51 metres (Level IV) with a triggering time advance (ΔT) of 10 µs. It is CE certified, designed and tested to NF C 17-102 (2011), and needs no battery or external power source.',
  },
  {
    question: 'What does "Level IV" mean for a lightning arrester protection radius?',
    answer:
      'Standards such as NF C 17-102 define four protection levels, from Level I (the most stringent, with the smallest protection radius) to Level IV (the least stringent, with the largest radius). The required level is chosen from a lightning risk assessment of the structure, so the actual radius used in a design depends on the level, mast height and the arrester’s ΔT.',
  },
  {
    question: 'What is ΔT (advance time) in an ESE lightning arrester?',
    answer:
      'ΔT, or triggering time advance, is the time (in microseconds) by which an ESE air terminal launches its upward streamer earlier than a simple rod under the same conditions. A larger ΔT generally gives a larger protection radius. The TOPBAS SIRIUS has a ΔT of 60 μs and the UMBRAECO has a ΔT of 10 µs.',
  },
  {
    question: 'Does a non-electronic ESE lightning arrester need a battery or power supply?',
    answer:
      'No. Non-electronic ESE lightning arresters such as the TOPBAS SIRIUS and UMBRAECO work without a battery or any external power source, which keeps maintenance simple.',
  },
  {
    question: 'What types of buildings need a lightning protection system?',
    answer:
      'Henel Engineers provides lightning protection for factories, warehouses, commercial buildings, communication towers and infrastructure facilities. Our field installations also include temples, church steeples, buildings under construction and residential rooftops with solar panels.',
  },
  {
    question: 'Which areas does Henel Engineers serve for lightning protection?',
    answer:
      'Henel Engineers supplies and installs lightning protection systems for industrial, commercial and infrastructure projects across Tamil Nadu.',
  },
  {
    question: 'How do I get a quote for a lightning protection system?',
    answer:
      'Call +91 94432 82312 or +91 94436 92711, message us on WhatsApp, or use the contact form to share your requirement and request a quote.',
  },
];

export const earthingFaqs: FaqItem[] = [
  {
    question: 'Why is earthing important in a lightning protection system?',
    answer:
      'Earthing gives lightning and fault currents a low-resistance path to dissipate safely into the ground. Without a good earthing system, even a well-placed lightning arrester cannot protect a structure effectively. Henel Engineers designs and installs earthing systems, including chemical earth electrodes and earth pits.',
  },
  {
    question: 'What earth rods does Henel Engineers supply?',
    answer:
      'Henel Engineers supplies copper bonded earth rods (17.2 mm diameter, in 1 m, 2 m and 3 m lengths, minimum order 1 piece) and GI earth rods made from Class B GI pipe (48 mm diameter, 3 mm wall thickness, in 1 m, 2 m and 3 m lengths).',
  },
  {
    question: 'What is the difference between a copper bonded earth rod and a GI earth rod?',
    answer:
      'A copper bonded earth rod has a copper layer bonded to a steel core, giving good conductivity and corrosion resistance for a long service life. A GI (galvanised iron) earth rod is a zinc-coated steel pipe that is a widely used, economical earthing electrode. The right choice depends on soil conditions, the required earth resistance and the project budget.',
  },
  {
    question: 'What is CARBOMAXX earthing compound used for?',
    answer:
      'CARBOMAXX is a powdered earthing compound by TOPBAS used as a backfill around earth electrodes in earthing pits to help achieve and maintain low earth resistance. Henel Engineers supplies it in 10 kg and 25 kg bags; it is made in India.',
  },
  {
    question: 'What is an earth pit cover and which types are available?',
    answer:
      'An earth pit cover (earth pit chamber) protects the top of the earth electrode and allows easy inspection and testing. Henel Engineers supplies a 6-inch black polyplastic earth pit cover (top 155 mm, bottom 210 mm, height 240 mm) and a 10-inch corrosion-resistant FRP earth pit cover (top 254 mm, bottom 210 mm, height 240 mm).',
  },
  {
    question: 'What is a surge protection device (SPD)?',
    answer:
      'A surge protection device (SPD) protects electrical panels, data systems and sensitive equipment from transient overvoltages caused by lightning or switching. It limits the surge voltage and diverts the excess current safely to earth.',
  },
  {
    question: 'What is a Type 1 + 2 surge protection device?',
    answer:
      'A Type 1 + 2 (Class B + C) SPD combines protection against partial lightning currents (Type 1) and induced surges (Type 2) in a single device, typically installed at the main incoming electrical panel. The TOPBAS TB7K320T12L supplied by Henel Engineers is a three-phase, 3 pole + N, Type 1 + 2 SPD rated 320 VAC (Uc), with 7 kA impulse current (Iimp), 30 kA nominal discharge current (In), a 1.6 kV voltage protection level (Up) and IP20 rating.',
  },
  {
    question: 'If a building has a lightning arrester, does it still need surge protection?',
    answer:
      'Yes. A lightning arrester (external lightning protection) protects the structure from a direct strike, but surges can still travel through power and data lines and damage equipment inside. Surge protection devices protect the internal electrical installation, which is why a complete lightning protection system includes both.',
  },
];

export const windmillFaqs: FaqItem[] = [
  {
    question: 'What windmill maintenance services does Henel Engineers provide?',
    answer:
      'Henel Engineers offers gearbox repair & overhaul, blade patching & repair, generator & transformer rewinding, hydraulic unit servicing, PCB servicing & repair, windmill erection & installation, supply of windmill spare parts, and 24x7 breakdown support.',
  },
  {
    question: 'Which regions does Henel Engineers cover for wind turbine maintenance?',
    answer:
      'Henel Engineers provides WTG operation, maintenance and breakdown services across Tamil Nadu and Karnataka.',
  },
  {
    question: 'Does Henel Engineers offer 24x7 breakdown support for wind turbines?',
    answer:
      'Yes. Our field teams are available round the clock to respond to windmill breakdowns and restore machines as quickly as possible.',
  },
  {
    question: 'How much experience does Henel Engineers have in wind energy?',
    answer:
      'Henel Engineers has more than 25 years of experience in the wind energy sector and currently manages 30+ active Comprehensive Maintenance Contracts (CMC) across Tamil Nadu and Karnataka.',
  },
  {
    question: 'What is a Comprehensive Maintenance Contract (CMC) for a windmill?',
    answer:
      'A Comprehensive Maintenance Contract (CMC) is an ongoing agreement under which a service provider takes care of a wind turbine’s operation and maintenance. Henel Engineers currently manages 30+ active CMCs, supporting reliable wind turbine operation and timely maintenance.',
  },
  {
    question: 'How many wind turbine (WTG) makes does Henel Engineers support?',
    answer:
      'Henel Engineers supports 7+ wind turbine generator (WTG) makes, and its field work includes erection of Vestas RRB wind turbines.',
  },
  {
    question: 'Can Henel Engineers repair a wind turbine gearbox?',
    answer:
      'Yes. Henel Engineers repairs and overhauls wind turbine gearboxes with quick turnaround time, including replacement of bearings, shafts and gears for a range of WTG makes, using hydraulic methods for accurate installation to reduce downtime and improve reliability.',
  },
  {
    question: 'Can a wind turbine generator be rewound without removing it from the nacelle?',
    answer:
      'Henel Engineers carries out generator and transformer rewinding and bearing replacement without dismantling the generator from the nacelle wherever possible, which helps reduce downtime and crane costs.',
  },
  {
    question: 'Does Henel Engineers repair lightning damage on wind turbine blades?',
    answer:
      'Yes. Henel Engineers undertakes blade patching, lightning damage repair and on-site blade restoration to keep wind turbine rotors running safely.',
  },
  {
    question: 'How does Henel Engineers reduce downtime during PCB failures?',
    answer:
      'Henel Engineers diagnoses and repairs printed circuit boards used in wind turbine control systems, and provides a standby PCB to reduce windmill downtime while the original board is being repaired.',
  },
  {
    question: 'Does Henel Engineers supply windmill spare parts?',
    answer:
      'Yes. Henel Engineers sources and supplies all types of windmill spare parts, including gearbox, generator, hydraulic and electrical system components.',
  },
  {
    question: 'Does Henel Engineers handle windmill erection and installation?',
    answer:
      'Yes. Henel Engineers provides end-to-end windmill erection and installation — tower erection, nacelle, hub and component installation, start-up and commissioning support, and heavy-duty crane arrangement.',
  },
  {
    question: 'Does Henel Engineers provide security services for windmill sites?',
    answer:
      'Yes. Henel Engineers provides windmill security services to protect wind turbine sites and equipment.',
  },
  {
    question: 'How do I request windmill maintenance services?',
    answer:
      'Call +91 94432 82312 or +91 94436 92711, message us on WhatsApp, or use the contact form to discuss your WTG maintenance requirement.',
  },
];

export const faqCategories: FaqCategory[] = [
  {
    id: 'company',
    title: 'About Henel Engineers',
    description: 'Company background, locations, service regions and how to reach us.',
    items: companyFaqs,
  },
  {
    id: 'lightning-protection',
    title: 'Lightning Protection & ESE Lightning Arresters',
    description: 'ESE vs conventional arresters, protection radius, ΔT, standards and TOPBAS products.',
    items: lightningFaqs,
  },
  {
    id: 'earthing-surge-protection',
    title: 'Earthing & Surge Protection',
    description: 'Earth rods, earthing compound, earth pit covers and surge protection devices (SPD).',
    items: earthingFaqs,
  },
  {
    id: 'windmill-maintenance',
    title: 'Windmill & Wind Turbine Maintenance',
    description: 'WTG operation & maintenance, repairs, spare parts, erection and breakdown support.',
    items: windmillFaqs,
  },
];

/** Short FAQ set shown on the home page. */
export const homeFaqs: FaqItem[] = [
  companyFaqs[0],
  companyFaqs[1],
  companyFaqs[4],
  lightningFaqs[0],
  lightningFaqs[3],
  lightningFaqs[1],
  windmillFaqs[0],
  windmillFaqs[2],
];

/** FAQ set shown on the lightning protection page. */
export const lightningPageFaqs: FaqItem[] = [
  ...lightningFaqs.slice(0, 3),
  lightningFaqs[3],
  lightningFaqs[6],
  lightningFaqs[8],
  lightningFaqs[9],
  earthingFaqs[0],
  earthingFaqs[7],
  earthingFaqs[6],
  ...lightningFaqs.slice(10),
];

/** FAQ set shown on the windmill page. */
export const windmillPageFaqs: FaqItem[] = windmillFaqs;

/** FAQ set shown on the contact page. */
export const contactFaqs: FaqItem[] = [
  companyFaqs[6],
  companyFaqs[3],
  companyFaqs[4],
  companyFaqs[2],
];
