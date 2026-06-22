import { business } from "@/lib/data";

export function Logo({ className = "", invert = false }: { className?: string; invert?: boolean }) {
  const ink = invert ? "var(--on-navy)" : "var(--navy)";
  const blue = invert ? "var(--blue-bright)" : "var(--blue)";
  const ring = invert ? "rgba(255,255,255,0.22)" : "var(--steel-line)";
  return (
    <a href="#top" className={`group inline-flex items-center gap-2.5 ${className}`} aria-label={`${business.name}, return to top`}>
      <span className="relative inline-flex shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5" style={{ width: 38, height: 38 }}>
        <svg width="38" height="38" viewBox="0 0 40 40" fill="none" aria-hidden>
          <defs>
            <linearGradient id="jgTile" x1="0" y1="0" x2="0" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="#14294d" />
              <stop offset="1" stopColor="#081628" />
            </linearGradient>
          </defs>
          <rect x="1" y="1" width="38" height="38" rx="9" fill="url(#jgTile)" stroke={ring} strokeWidth="1" />
          {/* blue glass panes */}
          <rect x="9" y="11.5" width="8" height="17" rx="1.2" fill="#3b82f6" opacity="0.92" />
          <rect x="23" y="11.5" width="8" height="17" rx="1.2" fill="#1f5fe0" opacity="0.92" />
          {/* aluminum rails + mullion */}
          <rect x="9" y="9" width="22" height="2" rx="1" fill="#cbd5e3" />
          <rect x="9" y="28.5" width="22" height="2" rx="1" fill="#cbd5e3" />
          <rect x="18.4" y="9" width="3.2" height="21.5" rx="1" fill="#cbd5e3" />
          <rect x="19" y="9" width="0.8" height="21.5" fill="#ffffff" opacity="0.55" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="display" style={{ fontSize: 18, fontWeight: 800, color: ink, letterSpacing: "-0.02em" }}>
          {business.short}
        </span>
        <span className="mono-data mt-1" style={{ color: blue, fontSize: 8.5, letterSpacing: "0.17em", textTransform: "uppercase" }}>
          Glass · Aluminum · Construction
        </span>
      </span>
    </a>
  );
}
