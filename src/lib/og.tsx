import React from 'react';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

/** Reads the company logo from /public and returns it as a data URI for next/og. */
export async function logoDataUri() {
  const buf = await readFile(join(process.cwd(), 'public/assets/images/henel-logo.png'));
  return `data:image/png;base64,${buf.toString('base64')}`;
}

export const OG_SIZE = { width: 1200, height: 630 };

/** Branded 1200x630 social share card (WhatsApp, LinkedIn, Facebook, X, Slack previews). */
export async function ogCard(opts: {
  eyebrow: string;
  title: string;
  subtitle: string;
  accent?: string;
}) {
  const logo = await logoDataUri();
  const accent = opts.accent || '#CC0000';
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#0A1628',
        padding: '56px 64px',
        fontFamily: 'sans-serif',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div
          style={{
            display: 'flex',
            backgroundColor: '#FFFFFF',
            borderRadius: 16,
            padding: '14px 22px',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logo} width={220} height={90} alt="" />
        </div>
        <div style={{ display: 'flex', color: 'rgba(255,255,255,0.6)', fontSize: 24, fontWeight: 700 }}>
          Est. 1999 · India
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            display: 'flex',
            color: accent,
            fontSize: 26,
            fontWeight: 800,
            letterSpacing: 4,
            textTransform: 'uppercase',
            marginBottom: 18,
          }}
        >
          {opts.eyebrow}
        </div>
        <div style={{ display: 'flex', color: '#FFFFFF', fontSize: 62, fontWeight: 800, lineHeight: 1.1 }}>
          {opts.title}
        </div>
        <div
          style={{
            display: 'flex',
            color: 'rgba(255,255,255,0.72)',
            fontSize: 30,
            marginTop: 22,
            lineHeight: 1.35,
          }}
        >
          {opts.subtitle}
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', gap: 12 }}>
          <div style={{ display: 'flex', width: 90, height: 8, backgroundColor: '#CC0000', borderRadius: 4 }} />
          <div style={{ display: 'flex', width: 90, height: 8, backgroundColor: '#2D7A2D', borderRadius: 4 }} />
        </div>
        <div style={{ display: 'flex', color: '#FFFFFF', fontSize: 28, fontWeight: 700 }}>
          +91 94432 82312 · henelkkla@gmail.com
        </div>
      </div>
    </div>
  );
}

/** Square brand icon (logo on white) for app/PWA icons. */
export async function squareIcon(size: number) {
  const logo = await logoDataUri();
  const w = Math.round(size * 0.86);
  const h = Math.round((w * 183) / 449);
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={logo} width={w} height={h} alt="" />
    </div>
  );
}
