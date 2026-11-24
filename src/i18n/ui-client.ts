import type { Locale } from './config';

/**
 * Small dictionary for client components (header, contact form). Kept separate
 * from the server-only phrasebooks so only these few strings reach the browser.
 */
const en = {
  nav: {
    home: 'Home',
    lightning: 'Lightning Protection',
    wind: 'Wind Energy',
    solar: 'Solar Energy',
    about: 'About Us',
    products: 'Products & Services',
    contact: 'Contact',
  },
  requestQuote: 'Request a Quote',
  requestQuoteAria: 'Request a quote from Henel Engineers',
  openMenu: 'Open navigation menu',
  closeMenu: 'Close navigation menu',
  close: 'Close menu',
  menu: 'Navigation menu',
  mainNav: 'Main navigation',
  mobileNav: 'Mobile navigation',
  language: 'Language',
};

export type UiStrings = typeof en;

const ta: UiStrings = {
  nav: {
    home: 'முகப்பு',
    lightning: 'இடிதாங்கி',
    wind: 'காற்றாலை',
    solar: 'சோலார்',
    about: 'எங்களைப் பற்றி',
    products: 'தயாரிப்புகள்',
    contact: 'தொடர்பு',
  },
  requestQuote: 'விலை கேட்க',
  requestQuoteAria: 'ஹெனல் இன்ஜினியர்ஸிடம் விலைப்புள்ளி கேட்க',
  openMenu: 'வழிசெலுத்தல் பட்டியைத் திற',
  closeMenu: 'வழிசெலுத்தல் பட்டியை மூடு',
  close: 'பட்டியை மூடு',
  menu: 'வழிசெலுத்தல் பட்டி',
  mainNav: 'முதன்மை வழிசெலுத்தல்',
  mobileNav: 'மொபைல் வழிசெலுத்தல்',
  language: 'மொழி',
};

const hi: UiStrings = {
  nav: {
    home: 'होम',
    lightning: 'लाइटनिंग प्रोटेक्शन',
    wind: 'पवन ऊर्जा',
    solar: 'सौर ऊर्जा',
    about: 'हमारे बारे में',
    products: 'उत्पाद और सेवाएँ',
    contact: 'संपर्क',
  },
  requestQuote: 'कोटेशन माँगें',
  requestQuoteAria: 'हेनेल इंजीनियर्स से कोटेशन माँगें',
  openMenu: 'नेविगेशन मेनू खोलें',
  closeMenu: 'नेविगेशन मेनू बंद करें',
  close: 'मेनू बंद करें',
  menu: 'नेविगेशन मेनू',
  mainNav: 'मुख्य नेविगेशन',
  mobileNav: 'मोबाइल नेविगेशन',
  language: 'भाषा',
};

export const UI: Record<Locale, UiStrings> = { en, ta, hi };
