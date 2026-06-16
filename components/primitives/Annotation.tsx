import type { ReactNode } from "react";

/**
 * CAD-style annotation overlay. Uses CSS animations for entry.
 */
export function Annotation({
  children,
  position = "tl",
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  position?: "tl" | "tr" | "bl" | "br";
  delay?: number;
  className?: string;
}) {
  const positionClass = {
    tl: "top-3 left-3 items-start",
    tr: "top-3 right-3 items-end",
    bl: "bottom-3 left-3 items-start",
    br: "bottom-3 right-3 items-end",
  }[position];

  return (
    <div
      className={`absolute z-10 flex flex-col gap-1.5 anim-fade-up ${positionClass} ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex items-center gap-2">
        <span className="cad-label whitespace-nowrap bg-[color:var(--container-lowest)]/95 px-1.5 py-0.5 rounded-sm border border-hairline">
          {children}
        </span>
      </div>
      <span
        className="block h-3 w-px"
        style={{ background: "var(--blueprint)", opacity: 0.5 }}
      />
    </div>
  );
}

export function DimLabel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span className={`cad-label inline-flex items-center gap-2 ${className}`}>
      <span className="inline-block h-px w-3 bg-[color:var(--blueprint)] opacity-60" />
      {children}
      <span className="inline-block h-px w-3 bg-[color:var(--blueprint)] opacity-60" />
    </span>
  );
}
