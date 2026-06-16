/**
 * Decorative SVG: blueprint linework. CSS-animated strokes draw themselves in.
 * Server-renderable — no JS required.
 */
export function BlueprintGrid({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 600 600"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      aria-hidden
    >
      <defs>
        <pattern id="bp-fine" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0 L0 0 0 20" stroke="rgba(31,71,123,0.10)" strokeWidth="0.5" />
        </pattern>
        <pattern id="bp-coarse" width="100" height="100" patternUnits="userSpaceOnUse">
          <path d="M100 0 L0 0 0 100" stroke="rgba(31,71,123,0.18)" strokeWidth="0.65" />
        </pattern>
      </defs>

      <rect width="600" height="600" fill="url(#bp-fine)" />
      <rect width="600" height="600" fill="url(#bp-coarse)" />

      {/* Title block frame — animated draw */}
      <rect
        x="40" y="40" width="520" height="520"
        stroke="var(--blueprint)" strokeOpacity="0.45" strokeWidth="1"
        className="draw-line"
        style={{ strokeDasharray: 2080, strokeDashoffset: 2080, animationDuration: "1.6s" }}
      />
      <rect
        x="50" y="50" width="500" height="500"
        stroke="var(--blueprint)" strokeOpacity="0.22" strokeWidth="0.5"
        className="draw-line"
        style={{ strokeDasharray: 2000, strokeDashoffset: 2000, animationDelay: "0.15s", animationDuration: "1.6s" }}
      />

      {/* Cross dimension lines */}
      <line x1="40" y1="300" x2="560" y2="300"
        stroke="var(--blueprint)" strokeOpacity="0.5" strokeWidth="0.65"
        className="draw-line"
        style={{ strokeDasharray: 520, strokeDashoffset: 520, animationDelay: "0.4s" }}
      />
      <line x1="300" y1="40" x2="300" y2="560"
        stroke="var(--blueprint)" strokeOpacity="0.5" strokeWidth="0.65"
        className="draw-line"
        style={{ strokeDasharray: 520, strokeDashoffset: 520, animationDelay: "0.55s" }}
      />

      {/* Center circle — column-section motif */}
      <circle cx="300" cy="300" r="68"
        stroke="var(--blueprint)" strokeOpacity="0.4" strokeWidth="0.8"
        className="draw-line"
        style={{ strokeDasharray: 430, strokeDashoffset: 430, animationDelay: "0.7s" }}
      />
      <circle cx="300" cy="300" r="48"
        stroke="var(--blueprint)" strokeOpacity="0.3" strokeWidth="0.6" strokeDasharray="3 3"
        className="anim-fade-in"
        style={{ animationDelay: "1.0s" }}
      />

      {/* Tick marks — top + left */}
      {Array.from({ length: 11 }).map((_, i) => {
        const x = 50 + i * 50;
        return (
          <line key={`t-${i}`} x1={x} y1="40" x2={x} y2="50"
            stroke="var(--blueprint)" strokeOpacity="0.5" strokeWidth="0.5"
            className="anim-fade-in"
            style={{ animationDelay: `${0.9 + i * 0.03}s` }}
          />
        );
      })}
      {Array.from({ length: 11 }).map((_, i) => {
        const y = 50 + i * 50;
        return (
          <line key={`l-${i}`} x1="40" y1={y} x2="50" y2={y}
            stroke="var(--blueprint)" strokeOpacity="0.5" strokeWidth="0.5"
            className="anim-fade-in"
            style={{ animationDelay: `${1.2 + i * 0.03}s` }}
          />
        );
      })}

      {/* Diagonal hatch — material indicator */}
      <g className="anim-fade-in" style={{ animationDelay: "1.5s" }}>
        {Array.from({ length: 14 }).map((_, i) => (
          <line key={`h-${i}`}
            x1={140 + i * 22} y1={460}
            x2={180 + i * 22} y2={420}
            stroke="var(--blueprint)" strokeOpacity="0.28" strokeWidth="0.6"
          />
        ))}
      </g>

      {/* Title-block text */}
      <text x="56" y="58" fill="var(--blueprint)" fontSize="9" fontFamily="JetBrains Mono, monospace"
        letterSpacing="0.18em" className="anim-fade-in" style={{ animationDelay: "1.6s", fillOpacity: 0.85 }}
      >
        SHEET A.01 · STRUCTURAL ELEVATION
      </text>
      <text x="544" y="58" fill="var(--blueprint)" fontSize="9" fontFamily="JetBrains Mono, monospace"
        letterSpacing="0.18em" textAnchor="end" className="anim-fade-in" style={{ animationDelay: "1.7s", fillOpacity: 0.85 }}
      >
        SCALE 1:50
      </text>
      <text x="56" y="552" fill="var(--blueprint)" fontSize="9" fontFamily="JetBrains Mono, monospace"
        letterSpacing="0.18em" className="anim-fade-in" style={{ animationDelay: "1.8s", fillOpacity: 0.7 }}
      >
        REV 03 · 2026.04
      </text>
      <text x="544" y="552" fill="var(--blueprint)" fontSize="9" fontFamily="JetBrains Mono, monospace"
        letterSpacing="0.18em" textAnchor="end" className="anim-fade-in" style={{ animationDelay: "1.9s", fillOpacity: 0.7 }}
      >
        JENNY&apos;S SUPPLY CO.
      </text>
    </svg>
  );
}
