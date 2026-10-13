'use client';

import React from 'react';
// Import only the icons the site uses. `import * as HeroIcons` pulled the
// entire outline + solid libraries (~600 icons) into every page's JavaScript.
import {
  ArchiveBoxIcon,
  ArrowDownCircleIcon,
  ArrowLeftIcon,
  ArrowPathIcon,
  ArrowRightIcon,
  ArrowUpCircleIcon,
  Bars3Icon,
  BeakerIcon,
  BoltIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  ChartBarIcon,
  CheckCircleIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CircleStackIcon,
  ClipboardDocumentCheckIcon,
  ClockIcon,
  CogIcon,
  CpuChipIcon,
  DocumentCheckIcon,
  DocumentTextIcon,
  EnvelopeIcon,
  HomeIcon,
  HomeModernIcon,
  IdentificationIcon,
  MapPinIcon,
  PaintBrushIcon,
  PaperAirplaneIcon,
  PhoneIcon,
  QuestionMarkCircleIcon,
  ShieldCheckIcon,
  ShieldExclamationIcon,
  SparklesIcon,
  SunIcon,
  UserGroupIcon,
  UsersIcon,
  WrenchScrewdriverIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import {
  ArchiveBoxIcon as ArchiveBoxSolid,
  ArrowRightIcon as ArrowRightSolid,
  BoltIcon as BoltSolid,
  CalendarIcon as CalendarSolid,
  CheckCircleIcon as CheckCircleSolid,
  CheckIcon as CheckSolid,
  ClockIcon as ClockSolid,
  EnvelopeIcon as EnvelopeSolid,
  MapPinIcon as MapPinSolid,
  PaperAirplaneIcon as PaperAirplaneSolid,
  PhoneIcon as PhoneSolid,
  ShieldCheckIcon as ShieldCheckSolid,
  SunIcon as SunSolid,
} from '@heroicons/react/24/solid';

type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

const OUTLINE: Record<string, IconComponent> = {
  ArchiveBoxIcon,
  ArrowDownCircleIcon,
  ArrowLeftIcon,
  ArrowPathIcon,
  ArrowRightIcon,
  ArrowUpCircleIcon,
  Bars3Icon,
  BeakerIcon,
  BoltIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  ChartBarIcon,
  CheckCircleIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CircleStackIcon,
  ClipboardDocumentCheckIcon,
  ClockIcon,
  CogIcon,
  CpuChipIcon,
  DocumentCheckIcon,
  DocumentTextIcon,
  EnvelopeIcon,
  HomeIcon,
  HomeModernIcon,
  IdentificationIcon,
  MapPinIcon,
  PaintBrushIcon,
  PaperAirplaneIcon,
  PhoneIcon,
  ShieldCheckIcon,
  ShieldExclamationIcon,
  SparklesIcon,
  SunIcon,
  UserGroupIcon,
  UsersIcon,
  WrenchScrewdriverIcon,
  XMarkIcon,
};

const SOLID: Record<string, IconComponent> = {
  ArchiveBoxIcon: ArchiveBoxSolid,
  ArrowRightIcon: ArrowRightSolid,
  BoltIcon: BoltSolid,
  CalendarIcon: CalendarSolid,
  CheckCircleIcon: CheckCircleSolid,
  CheckIcon: CheckSolid,
  ClockIcon: ClockSolid,
  EnvelopeIcon: EnvelopeSolid,
  MapPinIcon: MapPinSolid,
  PaperAirplaneIcon: PaperAirplaneSolid,
  PhoneIcon: PhoneSolid,
  ShieldCheckIcon: ShieldCheckSolid,
  SunIcon: SunSolid,
};

type IconVariant = 'outline' | 'solid';

interface IconProps {
  name: string;
  variant?: IconVariant;
  size?: number;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  [key: string]: any;
}

function Icon({
  name,
  variant = 'outline',
  size = 24,
  className = '',
  onClick,
  disabled = false,
  ...props
}: IconProps) {
  // A solid icon that isn't registered falls back to its outline version.
  const IconComponent = (variant === 'solid' ? SOLID[name] : undefined) || OUTLINE[name];

  if (!IconComponent) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(`AppIcon: "${name}" is not registered in src/components/ui/AppIcon.tsx`);
    }
    return (
      <QuestionMarkCircleIcon
        width={size}
        height={size}
        className={`text-gray-400 ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
        onClick={disabled ? undefined : onClick}
        {...props}
      />
    );
  }

  return (
    <IconComponent
      width={size}
      height={size}
      className={`${disabled ? 'opacity-50 cursor-not-allowed' : onClick ? 'cursor-pointer hover:opacity-80' : ''} ${className}`}
      onClick={disabled ? undefined : onClick}
      {...props}
    />
  );
}

export default Icon;
