/**
 * Lists every English string that has no Tamil or Hindi translation yet.
 *
 * Usage:  npm run i18n:check            (builds the site, then reports)
 *         node scripts/i18n-check.mjs --json out.json   (also write the list as JSON)
 */
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const report = path.join(os.tmpdir(), `i18n-missing-${Date.now()}.jsonl`);
execSync('npx next build', { stdio: 'inherit', env: { ...process.env, I18N_REPORT: report } });

const all = { ta: new Set(), hi: new Set() };
if (fs.existsSync(report)) {
  for (const line of fs.readFileSync(report, 'utf8').split('\n').filter(Boolean)) {
    const { l, s } = JSON.parse(line);
    all[l]?.add(s);
  }
  fs.unlinkSync(report);
}

const out = { ta: [...all.ta].sort(), hi: [...all.hi].sort() };
console.log(`\nMissing translations: Tamil ${out.ta.length}, Hindi ${out.hi.length}`);
const jsonIdx = process.argv.indexOf('--json');
if (jsonIdx !== -1) fs.writeFileSync(process.argv[jsonIdx + 1], JSON.stringify(out, null, 2));
else for (const l of ['ta', 'hi']) out[l].slice(0, 40).forEach((s) => console.log(`  [${l}] ${s}`));
if (out.ta.length || out.hi.length) process.exitCode = 1;
