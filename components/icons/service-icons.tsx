import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const defaultProps: IconProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 64 64",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Abbruch und Entrümpelung – Hammer smashing with debris */
export function HammerIcon({ className, ...props }: IconProps) {
  return (
    <svg {...defaultProps} className={className} {...props}>
      {/* Hammer handle */}
      <line x1="22" y1="42" x2="36" y2="20" />
      {/* Hammer head */}
      <path d="M30 22 L32 16 L44 20 L42 26 Z" />
      {/* Impact surface / rubble base */}
      <path d="M10 50 L30 50 L28 44 L12 44 Z" />
      {/* Debris pieces */}
      <rect x="14" y="36" width="5" height="5" transform="rotate(12 16 38)" />
      <rect x="24" y="34" width="4" height="4" transform="rotate(-15 26 36)" />
      <line x1="10" y1="40" x2="13" y2="37" />
      <line x1="30" y1="38" x2="33" y2="35" />
    </svg>
  );
}

/** Trockenbau – Drywall panel with metal stud frame */
export function DrywallIcon({ className, ...props }: IconProps) {
  return (
    <svg {...defaultProps} className={className} {...props}>
      {/* Main panel */}
      <rect x="8" y="8" width="48" height="48" rx="1" />
      {/* Vertical stud */}
      <line x1="32" y1="8" x2="32" y2="56" />
      {/* Horizontal rails */}
      <line x1="8" y1="20" x2="32" y2="20" />
      <line x1="32" y1="38" x2="56" y2="38" />
      {/* Screw points */}
      <circle cx="20" cy="14" r="1.2" />
      <circle cx="20" cy="38" r="1.2" />
      <circle cx="44" cy="26" r="1.2" />
      <circle cx="44" cy="48" r="1.2" />
      {/* Crack / joint detail */}
      <path d="M8 38 L18 38 L22 42 L28 34 L32 38" strokeDasharray="2 2" strokeWidth="1.2" />
    </svg>
  );
}

/** Küchenmontage – Kitchen cabinets with stove */
export function KitchenIcon({ className, ...props }: IconProps) {
  return (
    <svg {...defaultProps} className={className} {...props}>
      {/* Upper cabinets */}
      <rect x="6" y="6" width="16" height="18" rx="1" />
      <rect x="24" y="6" width="16" height="18" rx="1" />
      <rect x="42" y="6" width="16" height="18" rx="1" />
      {/* Upper cabinet handles */}
      <line x1="14" y1="13" x2="14" y2="17" />
      <line x1="32" y1="13" x2="32" y2="17" />
      <line x1="50" y1="13" x2="50" y2="17" />
      {/* Countertop */}
      <rect x="4" y="28" width="56" height="3" rx="0.5" />
      {/* Lower cabinets */}
      <rect x="6" y="31" width="22" height="22" rx="1" />
      <rect x="30" y="31" width="28" height="22" rx="1" />
      {/* Lower cabinet handle / drawer */}
      <line x1="17" y1="40" x2="17" y2="44" />
      {/* Stove burners */}
      <circle cx="38" cy="40" r="3" />
      <circle cx="50" cy="40" r="3" />
      <circle cx="38" cy="48" r="2" />
      <circle cx="50" cy="48" r="2" />
    </svg>
  );
}

/** Möbelmontage & Einbauschränke – Wardrobe/closet */
export function WardrobeIcon({ className, ...props }: IconProps) {
  return (
    <svg {...defaultProps} className={className} {...props}>
      {/* Outer frame */}
      <rect x="10" y="6" width="44" height="50" rx="1.5" />
      {/* Center divider */}
      <line x1="32" y1="6" x2="32" y2="56" />
      {/* Left door handle */}
      <line x1="28" y1="28" x2="28" y2="34" />
      {/* Right door handle */}
      <line x1="36" y1="28" x2="36" y2="34" />
      {/* Top shelf */}
      <line x1="10" y1="16" x2="32" y2="16" />
      <line x1="32" y1="16" x2="54" y2="16" />
      {/* Feet */}
      <line x1="14" y1="56" x2="14" y2="60" />
      <line x1="50" y1="56" x2="50" y2="60" />
    </svg>
  );
}

/** Innentürmontage – Interior door with frame */
export function DoorIcon({ className, ...props }: IconProps) {
  return (
    <svg {...defaultProps} className={className} {...props}>
      {/* Door frame */}
      <path d="M10 6 L10 58 L54 58 L54 6" />
      {/* Door */}
      <rect x="14" y="8" width="36" height="48" rx="1" />
      {/* Upper panel */}
      <rect x="18" y="12" width="28" height="16" rx="1" strokeWidth="1.2" />
      {/* Lower panel */}
      <rect x="18" y="34" width="28" height="18" rx="1" strokeWidth="1.2" />
      {/* Door handle */}
      <circle cx="42" cy="36" r="2" />
      {/* Threshold */}
      <line x1="6" y1="58" x2="58" y2="58" strokeWidth="2.2" />
    </svg>
  );
}

/** Bodenverlegung – Herringbone / fishbone parquet pattern */
export function FloorIcon({ className, ...props }: IconProps) {
  return (
    <svg {...defaultProps} className={className} {...props}>
      {/* Row 1 */}
      <path d="M8 12 L20 8 L24 20 L12 24 Z" />
      <path d="M24 20 L36 16 L40 28 L28 32 Z" />
      <path d="M40 28 L52 24 L56 36 L44 40 Z" />
      {/* Row 2 - offset */}
      <path d="M12 24 L24 20 L28 32 L16 36 Z" />
      <path d="M28 32 L40 28 L44 40 L32 44 Z" />
      <path d="M44 40 L56 36 L60 48 L48 52 Z" />
      {/* Row 3 */}
      <path d="M4 36 L16 32 L20 44 L8 48 Z" />
      <path d="M16 36 L28 32 L32 44 L20 48 Z" />
      <path d="M32 44 L44 40 L48 52 L36 56 Z" />
    </svg>
  );
}

/** Silikon- und Verfugungsarbeiten – Caulk cartridge with applicator */
export function CaulkIcon({ className, ...props }: IconProps) {
  return (
    <svg {...defaultProps} className={className} {...props}>
      {/* Caulk cartridge body */}
      <path d="M10 18 L10 52 L24 52 L24 18 Z" />
      {/* Cartridge top / nozzle area */}
      <path d="M14 18 L14 10 L20 10 L20 18" />
      {/* Nozzle tip */}
      <path d="M15 10 L17 4 L19 10" />
      {/* Plunger handle */}
      <line x1="10" y1="48" x2="24" y2="48" />
      {/* Roller tool */}
      <path d="M38 14 L38 28" strokeWidth="2" />
      {/* Roller cylinder */}
      <rect x="32" y="28" width="12" height="20" rx="6" />
      {/* Roller handle */}
      <line x1="38" y1="8" x2="46" y2="8" />
      <line x1="46" y1="8" x2="46" y2="14" />
      <line x1="46" y1="14" x2="38" y2="14" />
      {/* Grout line */}
      <path d="M30 56 L58 56" strokeDasharray="4 3" strokeWidth="1.4" />
      <path d="M30 60 L58 60" strokeDasharray="4 3" strokeWidth="1.4" />
    </svg>
  );
}

/** Terrassenbau – Wooden deck planks from above */
export function DeckIcon({ className, ...props }: IconProps) {
  return (
    <svg {...defaultProps} className={className} {...props}>
      {/* Deck planks – horizontal boards */}
      <rect x="6" y="10" width="52" height="7" rx="1" />
      <rect x="6" y="19" width="52" height="7" rx="1" />
      <rect x="6" y="28" width="52" height="7" rx="1" />
      <rect x="6" y="37" width="52" height="7" rx="1" />
      <rect x="6" y="46" width="52" height="7" rx="1" />
      {/* Wood grain lines */}
      <path d="M14 12 Q18 13 14 15" strokeWidth="0.8" />
      <path d="M40 21 Q44 22 40 24" strokeWidth="0.8" />
      <path d="M25 30 Q29 31 25 33" strokeWidth="0.8" />
      <path d="M48 39 Q52 40 48 42" strokeWidth="0.8" />
      <path d="M18 48 Q22 49 18 51" strokeWidth="0.8" />
      {/* Support beam indicators (screws/nails) */}
      <circle cx="16" cy="13" r="0.8" fill="currentColor" />
      <circle cx="48" cy="13" r="0.8" fill="currentColor" />
      <circle cx="16" cy="22" r="0.8" fill="currentColor" />
      <circle cx="48" cy="22" r="0.8" fill="currentColor" />
    </svg>
  );
}

/** Wand- und Deckenaufbereitung – Paint roller and bucket */
export function PaintIcon({ className, ...props }: IconProps) {
  return (
    <svg {...defaultProps} className={className} {...props}>
      {/* Paint roller handle */}
      <line x1="14" y1="10" x2="14" y2="28" />
      {/* Roller arm */}
      <line x1="14" y1="10" x2="26" y2="10" />
      {/* Roller cylinder */}
      <rect x="22" y="4" width="22" height="12" rx="4" />
      {/* Paint bucket */}
      <path d="M10 36 L8 56 L36 56 L34 36 Z" />
      {/* Bucket handle */}
      <path d="M12 36 Q22 28 32 36" fill="none" />
      {/* Bucket rim */}
      <line x1="8" y1="36" x2="36" y2="36" strokeWidth="2.2" />
      {/* Paint drip */}
      <path d="M36 40 Q40 40 38 46" strokeWidth="1.4" />
      {/* Paint level in bucket */}
      <line x1="12" y1="44" x2="32" y2="44" strokeWidth="1" strokeDasharray="3 2" />
      {/* Small brush leaning on bucket */}
      <line x1="42" y1="32" x2="48" y2="56" strokeWidth="2" />
      <rect x="40" y="28" width="6" height="6" rx="1" />
    </svg>
  );
}

/** Putz- und Ausbesserungsarbeiten – Plastering trowel */
export function TrowelIcon({ className, ...props }: IconProps) {
  return (
    <svg {...defaultProps} className={className} {...props}>
      {/* Trowel blade */}
      <path d="M6 28 L36 18 L40 30 L10 40 Z" />
      {/* Blade edge highlight */}
      <line x1="6" y1="28" x2="10" y2="40" strokeWidth="2.2" />
      {/* Neck */}
      <path d="M36 24 L42 22 L44 28 L38 30" />
      {/* Handle */}
      <path d="M42 20 L56 14 L58 20 L44 26 Z" />
      {/* Handle grip detail */}
      <line x1="46" y1="18" x2="54" y2="16" strokeWidth="1" />
      <line x1="47" y1="21" x2="55" y2="19" strokeWidth="1" />
      {/* Plaster texture on wall */}
      <path d="M8 48 L56 48" strokeDasharray="6 3" strokeWidth="1.2" />
      <path d="M8 52 L56 52" strokeDasharray="4 4" strokeWidth="1.2" />
      <path d="M8 56 L56 56" strokeDasharray="8 2" strokeWidth="1.2" />
    </svg>
  );
}

/** Map service icon string names to components */
export const serviceIconMap: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  HammerIcon,
  DrywallIcon,
  KitchenIcon,
  WardrobeIcon,
  DoorIcon,
  FloorIcon,
  CaulkIcon,
  DeckIcon,
  PaintIcon,
  TrowelIcon,
};
