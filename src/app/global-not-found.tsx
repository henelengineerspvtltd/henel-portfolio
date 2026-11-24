import React from 'react';
import type { Metadata } from 'next';
import RootShell from '@/components/RootShell';
import NotFoundContent from '@/components/NotFoundContent';

export const metadata: Metadata = {
  title: 'Page Not Found | Henel Engineers',
  robots: { index: false, follow: true },
};

/** Shown for any address that matches no page. The content picks its language from the URL. */
export default function GlobalNotFound() {
  return (
    <RootShell locale="en">
      <NotFoundContent />
    </RootShell>
  );
}
