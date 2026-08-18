import React from 'react';
import Image from 'next/image';

interface HenelLogoProps {
  size?: number;
  className?: string;
}

export default function HenelLogo({ size = 44, className = '' }: HenelLogoProps) {
  return (
    <Image
      src="/assets/images/henel-logo.png"
      alt="Henel Engineers Pvt. Ltd. official logo"
      width={Math.round(size * 2.45)}
      height={size}
      className={`object-contain ${className}`}
      priority
    />
  );
}