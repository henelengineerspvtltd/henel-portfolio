import 'server-only';
import type { Metadata } from 'next';
import type { Locale } from './config';
import { t } from './translate';

type Topic = 'lightning' | 'earthing' | 'surge' | 'wind' | 'solar' | 'general';

/**
 * Everyday search words in Tamil and Hindi for each topic. Tamil speakers mostly say
 * இடிதாங்கி for a lightning arrester and Hindi speakers तड़ित चालक or the English term
 * written in Devanagari, so both forms are listed.
 */
const NATIVE: Record<Exclude<Locale, 'en'>, Record<Topic, string[]>> = {
  ta: {
    lightning: ['இடிதாங்கி', 'இடி தாங்கி', 'மின்னல் தடுப்பான்', 'மின்னல் பாதுகாப்பு', 'இடிதாங்கி விலை', 'இடிதாங்கி பொருத்துதல்', 'ESE இடிதாங்கி', 'வீட்டுக்கு இடிதாங்கி'],
    earthing: ['எர்த்திங்', 'கெமிக்கல் எர்த்திங்', 'எர்த் பிட்', 'எர்த் கம்பி', 'எர்த்திங் காம்பவுண்ட்', 'எர்த் மின்தடை'],
    surge: ['சர்ஜ் பாதுகாப்பு', 'சர்ஜ் பாதுகாப்புச் சாதனம்', 'SPD', 'மின் அலை பாதுகாப்பு'],
    wind: ['காற்றாலை', 'காற்றாலை பராமரிப்பு', 'காற்றாலை பழுதுநீக்கம்', 'காற்றாலை கியர்பாக்ஸ்', 'காற்றாலை சர்வீஸ்', 'விண்ட் மில்'],
    solar: ['சோலார் பேனல்', 'சோலார் பேனல் பொருத்துதல்', 'கூரை சோலார்', 'சோலார் மின்சாரம்', 'சோலார் பேனல் விலை', 'சோலார் பேனல் சுத்தம்'],
    general: ['ஹெனல் இன்ஜினியர்ஸ்', 'இடிதாங்கி', 'எர்த்திங்', 'காற்றாலை பராமரிப்பு', 'சோலார் பேனல்', 'ஆரல்வாய்மொழி', 'கன்னியாகுமரி', 'தமிழ்நாடு'],
  },
  hi: {
    lightning: ['तड़ित चालक', 'लाइटनिंग अरेस्टर', 'आकाशीय बिजली से सुरक्षा', 'बिजली गिरने से बचाव', 'लाइटनिंग अरेस्टर की कीमत', 'ESE लाइटनिंग अरेस्टर', 'घर के लिए लाइटनिंग अरेस्टर'],
    earthing: ['अर्थिंग', 'केमिकल अर्थिंग', 'अर्थ पिट', 'अर्थिंग रॉड', 'अर्थिंग कंपाउंड', 'अर्थ प्रतिरोध'],
    surge: ['सर्ज प्रोटेक्शन डिवाइस', 'सर्ज प्रोटेक्टर', 'SPD'],
    wind: ['पवनचक्की', 'पवन चक्की रखरखाव', 'पवन टर्बाइन मरम्मत', 'विंड टर्बाइन मेंटेनेंस', 'विंडमिल', 'पवन टर्बाइन गियरबॉक्स'],
    solar: ['सोलर पैनल', 'सोलर पैनल इंस्टॉलेशन', 'रूफटॉप सोलर', 'सोलर पैनल की कीमत', 'सोलर पैनल सफ़ाई', 'सौर ऊर्जा'],
    general: ['हेनेल इंजीनियर्स', 'तड़ित चालक', 'अर्थिंग', 'पवनचक्की रखरखाव', 'सोलर पैनल', 'तमिलनाडु', 'भारत'],
  },
};

function topicsFor(path: string): Topic[] {
  const p = path.toLowerCase();
  const out: Topic[] = [];
  if (/lightning|arrester|sirius|umbraeco|copper-spike|guides\/how-many|cost/.test(p)) out.push('lightning');
  if (/earth|carbomaxx|gi-rod|pit/.test(p)) out.push('earthing');
  if (/surge|spd/.test(p)) out.push('surge');
  if (/wind|gearbox|blade|generator|hydraulic|erection|spare|renewable/.test(p)) out.push('wind');
  if (/solar/.test(p)) out.push('solar');
  if (!out.length) out.push('general');
  return out;
}

const asList = (k: Metadata['keywords']): string[] => (Array.isArray(k) ? k : typeof k === 'string' ? k.split(',') : []);

/**
 * Adds Tamil or Hindi search words for the page's topics in front of its English keywords.
 * English stays because many people search in English (or mix the two). On town pages, pass
 * `place` so local phrases such as "மதுரை இடிதாங்கி" are included.
 */
export function withNativeKeywords(meta: Metadata, path: string, locale: Locale, place?: string): Metadata {
  if (locale === 'en') return meta;
  const words = NATIVE[locale];
  const topics = place ? (['lightning', 'earthing', 'wind', 'solar'] as Topic[]) : topicsFor(path);
  const native = topics.flatMap((tp) => words[tp]);
  const local = place ? [words.lightning[0], words.earthing[0], words.wind[0], words.solar[0]].map((w) => `${t(locale, place)} ${w}`) : [];
  const all = [...local, ...native, ...asList(meta.keywords)];
  return { ...meta, keywords: [...new Set(all.map((s) => s.trim()).filter(Boolean))].slice(0, 30) };
}
