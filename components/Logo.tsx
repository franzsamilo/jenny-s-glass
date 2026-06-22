import { business } from "@/lib/data";

export function Logo({ className = "", invert = false }: { className?: string; invert?: boolean }) {
  const ink = invert ? "var(--on-navy)" : "var(--navy)";
  const glass = invert ? "rgba(245,241,232,0.5)" : "var(--steel)";
  const brass = invert ? "var(--brass-bright)" : "var(--brass)";
  return (
    <a href="#top" className={`group inline-flex items-center gap-2.5 ${className}`} aria-label={`${business.name}, return to top`}>
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden>
        {/* aluminum frame */}
        <rect x="1.25" y="1.25" width="31.5" height="31.5" rx="2.5" stroke={ink} strokeWidth="1.5" />
        {/* mullions */}
        <path d="M17 2.5 L17 31.5 M2.5 17 L31.5 17" stroke={ink} strokeWidth="0.9" opacity="0.45" />
        {/* glass highlight */}
        <path d="M4 13 L13 4 M4 21 L21 4" stroke={glass} strokeWidth="0.9" opacity="0.8" />
        {/* brass stamp dot */}
        <circle cx="24.5" cy="9.5" r="2.4" fill={brass} />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="display" style={{ fontSize: 17, fontWeight: 700, color: ink, letterSpacing: "-0.01em" }}>
          {business.short}
        </span>
        <span className="mono-data mt-1" style={{ color: brass, fontSize: 8.5, letterSpacing: "0.18em", textTransform: "uppercase" }}>
          Glass &amp; Aluminum · Est. {business.estYear}
        </span>
      </span>
    </a>
  );
}
