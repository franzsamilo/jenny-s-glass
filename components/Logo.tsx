/* eslint-disable @next/next/no-img-element */
import { business } from "@/lib/data";

export function Logo({ className = "", invert = false }: { className?: string; invert?: boolean }) {
  const ink = invert ? "var(--on-navy)" : "var(--navy)";
  const brass = invert ? "var(--brass-bright)" : "var(--brass)";
  return (
    <a href="#top" className={`group inline-flex items-center gap-2.5 ${className}`} aria-label={`${business.name}, return to top`}>
      <span
        className="relative inline-flex shrink-0 overflow-hidden rounded-full transition-transform duration-[var(--dur)] group-hover:-translate-y-0.5"
        style={{ width: 38, height: 38, boxShadow: `0 0 0 1px ${invert ? "rgba(245,241,232,0.18)" : "var(--steel-line)"}` }}
      >
        <img src="/logo-mark.png" alt="" className="h-full w-full object-cover" />
      </span>
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
