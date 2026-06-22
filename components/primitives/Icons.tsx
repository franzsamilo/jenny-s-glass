/**
 * Hairline geometric icons — drafted in the style of CAD symbols.
 * Stroke 1.5 default, optimized for the architectural design system.
 * Inline SVGs (no lucide-react dependency).
 */

type IconProps = {
  className?: string;
  strokeWidth?: number;
  size?: number;
};

const base = (size = 16, sw = 1.5) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: sw,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
});

export const ArrowRight = ({ className = "", strokeWidth = 1.75, size = 16 }: IconProps) => (
  <svg {...base(size, strokeWidth)} className={className}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const ArrowLeft = ({ className = "", strokeWidth = 1.75, size = 16 }: IconProps) => (
  <svg {...base(size, strokeWidth)} className={className}>
    <path d="M19 12H5M11 6l-6 6 6 6" />
  </svg>
);

export const ArrowUpRight = ({ className = "", strokeWidth = 1.75, size = 16 }: IconProps) => (
  <svg {...base(size, strokeWidth)} className={className}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

export const Menu = ({ className = "", strokeWidth = 1.75, size = 20 }: IconProps) => (
  <svg {...base(size, strokeWidth)} className={className}>
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

export const X = ({ className = "", strokeWidth = 1.75, size = 20 }: IconProps) => (
  <svg {...base(size, strokeWidth)} className={className}>
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

export const Check = ({ className = "", strokeWidth = 2, size = 14 }: IconProps) => (
  <svg {...base(size, strokeWidth)} className={className}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const ChevronDown = ({ className = "", strokeWidth = 1.5, size = 16 }: IconProps) => (
  <svg {...base(size, strokeWidth)} className={className}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const Plus = ({ className = "", strokeWidth = 1.5, size = 16 }: IconProps) => (
  <svg {...base(size, strokeWidth)} className={className}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const Mail = ({ className = "", strokeWidth = 1.5, size = 16 }: IconProps) => (
  <svg {...base(size, strokeWidth)} className={className}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

export const Phone = ({ className = "", strokeWidth = 1.5, size = 16 }: IconProps) => (
  <svg {...base(size, strokeWidth)} className={className}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export const MapPin = ({ className = "", strokeWidth = 1.5, size = 16 }: IconProps) => (
  <svg {...base(size, strokeWidth)} className={className}>
    <path d="M20 10c0 7-8 13-8 13s-8-6-8-13a8 8 0 0 1 16 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const FileText = ({ className = "", strokeWidth = 1.5, size = 14 }: IconProps) => (
  <svg {...base(size, strokeWidth)} className={className}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
  </svg>
);

export const ShieldCheck = ({ className = "", strokeWidth = 1.5, size = 16 }: IconProps) => (
  <svg {...base(size, strokeWidth)} className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const Calendar = ({ className = "", strokeWidth = 1.5, size = 14 }: IconProps) => (
  <svg {...base(size, strokeWidth)} className={className}>
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);

export const Maximize2 = ({ className = "", strokeWidth = 1.5, size = 14 }: IconProps) => (
  <svg {...base(size, strokeWidth)} className={className}>
    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
  </svg>
);

export const Quote = ({ className = "", strokeWidth = 1, size = 40 }: IconProps) => (
  <svg {...base(size, strokeWidth)} className={className}>
    <path d="M3 21c3 0 7-1 7-8V5c0-1-1-2-2-2H4c-1 0-2 1-2 2v6c0 1 1 2 2 2h3c0 4-2 5-4 5v3zm14 0c3 0 7-1 7-8V5c0-1-1-2-2-2h-4c-1 0-2 1-2 2v6c0 1 1 2 2 2h3c0 4-2 5-4 5v3z" />
  </svg>
);

/* Decorative icons used in data.ts */
export const Layers = ({ className = "", strokeWidth = 1.5, size = 16 }: IconProps) => (
  <svg {...base(size, strokeWidth)} className={className}>
    <path d="m12 2 10 5-10 5L2 7l10-5z" />
    <path d="m2 17 10 5 10-5M2 12l10 5 10-5" />
  </svg>
);

export const Frame = ({ className = "", strokeWidth = 1.5, size = 16 }: IconProps) => (
  <svg {...base(size, strokeWidth)} className={className}>
    <path d="M22 6 2 6M22 18 2 18M6 2v20M18 2v20" />
  </svg>
);

export const Hammer = ({ className = "", strokeWidth = 1.5, size = 16 }: IconProps) => (
  <svg {...base(size, strokeWidth)} className={className}>
    <path d="m15 12-8.5 8.5a2.12 2.12 0 0 1-3-3L12 9" />
    <path d="m17.6 6.4-3-3a1 1 0 0 0-1.4 0L9 7.6a1 1 0 0 0 0 1.4l3 3a1 1 0 0 0 1.4 0l4.2-4.2a1 1 0 0 0 0-1.4z" />
    <path d="m18 7 4-4" />
  </svg>
);

export const Ruler = ({ className = "", strokeWidth = 1.5, size = 16 }: IconProps) => (
  <svg {...base(size, strokeWidth)} className={className}>
    <path d="M21.3 8.7 8.7 21.3a1 1 0 0 1-1.4 0L2.7 16.7a1 1 0 0 1 0-1.4L15.3 2.7a1 1 0 0 1 1.4 0l4.6 4.6a1 1 0 0 1 0 1.4z" />
    <path d="m7.5 10.5 2 2M10.5 7.5l2 2M13.5 4.5l2 2M4.5 13.5l2 2" />
  </svg>
);

export const Award = ({ className = "", strokeWidth = 1.5, size = 16 }: IconProps) => (
  <svg {...base(size, strokeWidth)} className={className}>
    <circle cx="12" cy="8" r="6" />
    <path d="m8.21 13.89-1.21 8.11 5-3 5 3-1.21-8.11" />
  </svg>
);

export const Truck = ({ className = "", strokeWidth = 1.5, size = 16 }: IconProps) => (
  <svg {...base(size, strokeWidth)} className={className}>
    <path d="M14 18V6a2 2 0 0 0-2-2H2v13M14 9h6l3 3v6M14 18h7M10 18H6" />
    <circle cx="7" cy="18" r="2" />
    <circle cx="17" cy="18" r="2" />
  </svg>
);

export const Building2 = ({ className = "", strokeWidth = 1.5, size = 16 }: IconProps) => (
  <svg {...base(size, strokeWidth)} className={className}>
    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2M10 6h4M10 10h4M10 14h4M10 18h4" />
  </svg>
);

export const Sparkles = ({ className = "", strokeWidth = 1.5, size = 16 }: IconProps) => (
  <svg {...base(size, strokeWidth)} className={className}>
    <path d="m12 3-1.5 4.5L6 9l4.5 1.5L12 15l1.5-4.5L18 9l-4.5-1.5L12 3zM5 17l-1 2-2 1 2 1 1 2 1-2 2-1-2-1-1-2zM19 14l-1 2-2 1 2 1 1 2 1-2 2-1-2-1-1-2z" />
  </svg>
);

export const Wrench = ({ className = "", strokeWidth = 1.5, size = 16 }: IconProps) => (
  <svg {...base(size, strokeWidth)} className={className}>
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);

export const Compass = ({ className = "", strokeWidth = 1.5, size = 16 }: IconProps) => (
  <svg {...base(size, strokeWidth)} className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z" />
  </svg>
);

export const Cog = ({ className = "", strokeWidth = 1.5, size = 16 }: IconProps) => (
  <svg {...base(size, strokeWidth)} className={className}>
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    <circle cx="12" cy="12" r="4" />
  </svg>
);

/* — Trade-specific icons (Jennys) — */
export const MessageCircle = ({ className = "", strokeWidth = 1.5, size = 16 }: IconProps) => (
  <svg {...base(size, strokeWidth)} className={className}>
    <path d="M21 11.5a8.5 8.5 0 0 1-12.3 7.6L3 21l1.9-5.7A8.5 8.5 0 1 1 21 11.5z" />
  </svg>
);

export const Store = ({ className = "", strokeWidth = 1.5, size = 16 }: IconProps) => (
  <svg {...base(size, strokeWidth)} className={className}>
    <path d="M2 9l2-5h16l2 5a3 3 0 0 1-6 0 3 3 0 0 1-6 0 3 3 0 0 1-6 0z" />
    <path d="M4 9v11h16V9M9 20v-5h6v5" />
  </svg>
);

export const Receipt = ({ className = "", strokeWidth = 1.5, size = 16 }: IconProps) => (
  <svg {...base(size, strokeWidth)} className={className}>
    <path d="M6 2h12v20l-3-2-3 2-3-2-3 2z" />
    <path d="M9 8h6M9 12h6M9 16h4" />
  </svg>
);

export const LifeBuoy = ({ className = "", strokeWidth = 1.5, size = 16 }: IconProps) => (
  <svg {...base(size, strokeWidth)} className={className}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="3.5" />
    <path d="m5 5 4.5 4.5M14.5 14.5 19 19M19 5l-4.5 4.5M9.5 14.5 5 19" />
  </svg>
);

export const Cash = ({ className = "", strokeWidth = 1.5, size = 16 }: IconProps) => (
  <svg {...base(size, strokeWidth)} className={className}>
    <rect x="2" y="6" width="20" height="12" rx="2" />
    <circle cx="12" cy="12" r="2.5" />
    <path d="M6 10v4M18 10v4" />
  </svg>
);

export const Rollup = ({ className = "", strokeWidth = 1.5, size = 16 }: IconProps) => (
  <svg {...base(size, strokeWidth)} className={className}>
    <rect x="3" y="3" width="18" height="18" rx="1" />
    <path d="M3 7.5h18M5 10.5h14M5 13.5h14M5 16.5h14M5 19h14" />
  </svg>
);

export const Bolt = ({ className = "", strokeWidth = 1.5, size = 16 }: IconProps) => (
  <svg {...base(size, strokeWidth)} className={className}>
    <path d="M12 3l7 4v8l-7 4-7-4V7z" />
    <circle cx="12" cy="11" r="3" />
  </svg>
);

export const Clock = ({ className = "", strokeWidth = 1.5, size = 16 }: IconProps) => (
  <svg {...base(size, strokeWidth)} className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const ChevronRight = ({ className = "", strokeWidth = 1.5, size = 16 }: IconProps) => (
  <svg {...base(size, strokeWidth)} className={className}>
    <path d="m9 6 6 6-6 6" />
  </svg>
);
