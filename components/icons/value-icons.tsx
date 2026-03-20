import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base: IconProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Leidenschaft fürs Handwerk – Hands holding a heart */
export function PassionIcon({ className, ...props }: IconProps) {
  return (
    <svg {...base} className={className} {...props}>
      {/* Heart */}
      <path
        d="M24 38 C16 30 8 24 8 17 A7 7 0 0 1 24 14 A7 7 0 0 1 40 17 C40 24 32 30 24 38Z"
        strokeWidth="1.8"
      />
      {/* Heartbeat line inside */}
      <path d="M16 22 L20 22 L22 18 L24 26 L26 20 L28 22 L32 22" strokeWidth="1.4" />
    </svg>
  );
}

/** Zuverlässigkeit – Shield with checkmark */
export function ReliabilityIcon({ className, ...props }: IconProps) {
  return (
    <svg {...base} className={className} {...props}>
      {/* Shield */}
      <path
        d="M24 4 L40 10 C40 26 34 38 24 44 C14 38 8 26 8 10 Z"
        strokeWidth="1.8"
      />
      {/* Checkmark */}
      <path d="M16 22 L22 28 L33 17" strokeWidth="2" />
    </svg>
  );
}

/** Saubere Ausführung – Diamond / gem (quality & precision) */
export function QualityIcon({ className, ...props }: IconProps) {
  return (
    <svg {...base} className={className} {...props}>
      {/* Diamond top */}
      <path d="M8 18 L16 8 L32 8 L40 18 L24 40 Z" strokeWidth="1.8" />
      {/* Facet lines */}
      <line x1="16" y1="8" x2="20" y2="18" />
      <line x1="32" y1="8" x2="28" y2="18" />
      <line x1="8" y1="18" x2="40" y2="18" />
      <line x1="20" y1="18" x2="24" y2="40" />
      <line x1="28" y1="18" x2="24" y2="40" />
    </svg>
  );
}

/** Flexible Unterstützung – Puzzle piece (adaptability) */
export function FlexibilityIcon({ className, ...props }: IconProps) {
  return (
    <svg {...base} className={className} {...props}>
      <path
        d="M10 14 L18 14
           C18 14 18 10 21 10 C24 10 24 14 24 14
           L32 14 L32 22
           C32 22 36 22 36 25 C36 28 32 28 32 28
           L32 36 L24 36
           C24 36 24 32 21 32 C18 32 18 36 18 36
           L10 36 L10 28
           C10 28 6 28 6 25 C6 22 10 22 10 22 Z"
        strokeWidth="1.8"
      />
      {/* Inner connection dot */}
      <circle cx="21" cy="25" r="2" strokeWidth="1.2" />
    </svg>
  );
}

/** Transparente Kommunikation – Speech bubbles */
export function TransparencyIcon({ className, ...props }: IconProps) {
  return (
    <svg {...base} className={className} {...props}>
      {/* Main bubble */}
      <path
        d="M6 10 L30 10 C32 10 34 12 34 14 L34 24 C34 26 32 28 30 28 L16 28 L10 34 L10 28 L8 28 C6 28 6 26 6 24 Z"
        strokeWidth="1.8"
      />
      {/* Secondary bubble behind */}
      <path
        d="M38 16 L38 20 C38 22 40 24 42 24 L42 30 L38 26 L36 26"
        strokeWidth="1.4"
      />
      <path d="M36 16 L40 16 C42 16 42 16 42 18" strokeWidth="1.4" />
      {/* Dot lines in main bubble (conversation) */}
      <circle cx="14" cy="19" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="20" cy="19" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="26" cy="19" r="1.3" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Regionale Hilfe – Map pin with house */
export function LocalIcon({ className, ...props }: IconProps) {
  return (
    <svg {...base} className={className} {...props}>
      {/* Map pin outline */}
      <path
        d="M24 44 C24 44 40 28 40 18 A16 16 0 0 0 8 18 C8 28 24 44 24 44Z"
        strokeWidth="1.8"
      />
      {/* House inside pin */}
      <path d="M16 22 L24 14 L32 22" strokeWidth="1.6" />
      <rect x="18" y="22" width="12" height="8" rx="0.5" strokeWidth="1.4" />
      {/* Door */}
      <rect x="22" y="25" width="4" height="5" rx="0.5" strokeWidth="1.2" />
    </svg>
  );
}

/** Map value icon string names to components */
export const valueIconMap: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  Heart: PassionIcon,
  Clock: ReliabilityIcon,
  Sparkles: QualityIcon,
  Wrench: FlexibilityIcon,
  MessageCircle: TransparencyIcon,
  MapPin: LocalIcon,
};
