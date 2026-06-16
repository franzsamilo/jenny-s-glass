export function Logo({ className = "", invert = false }: { className?: string; invert?: boolean }) {
  const ink = invert ? "var(--on-primary)" : "var(--primary)";
  const accent = invert ? "var(--inverse-primary)" : "var(--blueprint)";
  return (
    <a href="#top" className={`group inline-flex items-center gap-2.5 ${className}`} aria-label="Jenny's Supply, return to top">
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden>
        <rect x="0.5" y="0.5" width="33" height="33" rx="3" stroke={ink} />
        <path d="M6 6 L6 28 M28 6 L28 28 M6 6 L28 6 M6 28 L28 28" stroke={ink} strokeWidth="1.25" />
        <path d="M11 6 L11 28 M17 6 L17 28 M23 6 L23 28" stroke={ink} strokeWidth="0.6" opacity="0.55" />
        <path d="M6 17 L28 17" stroke={accent} strokeWidth="0.6" opacity="0.7" />
        <path
          d="M14 11.5 L14 19 C14 20.7 12.7 22 11 22"
          stroke={ink}
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className="text-[15px] font-semibold tracking-tight"
          style={{ fontFamily: "var(--font-serif)", color: ink }}
        >
          Jenny&apos;s Supply
        </span>
        <span className="cad-label mt-0.5" style={{ color: accent, fontSize: 9 }}>
          Glass · Aluminum · est. 1992
        </span>
      </span>
    </a>
  );
}
