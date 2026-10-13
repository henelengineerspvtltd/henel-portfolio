/**
 * Submit every URL in the live sitemap to IndexNow (Bing, Yandex, Seznam, Naver...).
 * Bing's index powers ChatGPT search and Microsoft Copilot.
 *
 * Usage (after the site is deployed):  npm run indexnow
 * Optional: SITE_URL=https://www.henelengineers.com npm run indexnow
 */
const SITE = (process.env.SITE_URL || 'https://www.henelengineers.com').replace(/\/$/, '');
const KEY = 'bd550ca0e99f6e1f25226d38a37204f8'; // must match public/bd550ca0e99f6e1f25226d38a37204f8.txt

const xml = await (await fetch(`${SITE}/sitemap.xml`)).text();
const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (!urls.length) throw new Error('No URLs found in sitemap');

const keyCheck = await fetch(`${SITE}/${KEY}.txt`);
if (!keyCheck.ok || (await keyCheck.text()).trim() !== KEY) {
  throw new Error('Key file is not live yet — deploy first, then re-run.');
}

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: new URL(SITE).host, key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList: urls }),
});
console.log(`IndexNow: submitted ${urls.length} URLs → HTTP ${res.status} ${res.statusText}`);
if (res.status >= 400) console.log(await res.text());
