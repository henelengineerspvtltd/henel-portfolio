import React from 'react';
import RootShell, { rootMetadata, rootViewport } from '@/components/RootShell';

export const metadata = rootMetadata('hi');
export const viewport = rootViewport;

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootShell locale="hi">{children}</RootShell>;
}
