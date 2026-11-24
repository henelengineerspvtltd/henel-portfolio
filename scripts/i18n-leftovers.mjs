/**
 * Finds English text left on built Tamil and Hindi pages (text that never went
 * through the phrasebook, so `i18n:check` cannot see it).
 *
 * Usage (after `next build`):  node scripts/i18n-leftovers.mjs [--json out.json]
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = '.next/server/app';
// Brand, product and technical names that stay in English on purpose.
const ALLOW = /^(Henel|HENEL|ENGINEERS|PVT\.?|LTD\.?|TOPBAS|SIRIUS|UMBRAECO|CARBOMAXX|ESE|SPD|SPDs|WTG|WTGs|CMC|AMC|O&M|LPS|FRP|GI|RCC|PCB|AC|DC|IP20|NF|UNE|TS|EN|CE|Vestas|RRB|Google|WhatsApp|Instagram|Facebook|Class|Type|Level|Uc|Up|Iimp|In|kA|kV|VAC|mm|m|kg|kgs|µSec|μs|ΔT|Turkey|India|solar|panel)$/i;

const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(d, e.name)) : e.name.endsWith('.html') ? [path.join(d, e.name)] : []));
const found = {};
for (const locale of ['ta', 'hi']) {
  const dir = path.join(ROOT, locale);
  const files = [path.join(ROOT, `${locale}.html`), ...(fs.existsSync(dir) ? walk(dir) : [])].filter((f) => fs.existsSync(f));
  for (const f of files) {
    const html = fs.readFileSync(f, 'utf8')
      .replace(/<script[\s\S]*?<\/script>/g, '')
      .replace(/<style[\s\S]*?<\/style>/g, '')
      .replace(/<head>[\s\S]*?<\/head>/, '')
      // Customer reviews are shown word for word in their original language.
      .replace(/<(\w+)[^>]*\slang="en"[^>]*>[\s\S]*?<\/\1>/g, '');
    const visible = html.replace(/<[^>]+>/g, '\n').split('\n');
    const attrs = [...html.matchAll(/\s(?:alt|aria-label|title|placeholder)="([^"]*)"/g)].map((m) => m[1]);
    for (const raw of [...visible, ...attrs]) {
      const s = raw.replace(/&[a-z#0-9]+;/gi, ' ').trim();
      if (/\S+@\S+\.\S+|https?:\/\//.test(s)) continue;
      const words = s.match(/[A-Za-z][A-Za-z'’-]*/g) || [];
      const english = words.filter((w) => !ALLOW.test(w) && w.length > 1);
      // Three or more English words with no Tamil/Devanagari around them = untranslated.
      if (english.length >= 3 && !/[஀-௿ऀ-ॿ]/.test(s)) {
        (found[locale] ||= new Map()).set(s, path.relative(ROOT, f));
      }
    }
  }
}
const out = Object.fromEntries(Object.entries(found).map(([l, m]) => [l, [...m].map(([text, page]) => ({ text, page }))]));
const n = (l) => (out[l] || []).length;
console.log(`English left on built pages: Tamil ${n('ta')}, Hindi ${n('hi')}`);
const i = process.argv.indexOf('--json');
if (i !== -1) fs.writeFileSync(process.argv[i + 1], JSON.stringify(out, null, 2));
else for (const l of ['ta', 'hi']) (out[l] || []).slice(0, 60).forEach((x) => console.log(`  [${l}] ${x.page}: ${x.text}`));
if (n('ta') || n('hi')) process.exitCode = 1;
