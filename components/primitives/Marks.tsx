"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/** Mono uppercase eyebrow — the "annotation on a form" label. */
export function Eyebrow({
  children,
  brass = false,
  rule = false,
  className = "",
}: {
  children: ReactNode;
  brass?: boolean;
  rule?: boolean;
  className?: string;
}) {
  return (
    <span className={`eyebrow ${brass ? "eyebrow-brass" : ""} inline-flex items-center gap-2.5 ${className}`}>
      {rule && (
        <span
          className="inline-block h-px w-7"
          style={{ background: brass ? "var(--brass)" : "var(--steel)" }}
        />
      )}
      {children}
    </span>
  );
}

/** Letterhead double-rule (navy 3px over steel hairline). */
export function DocRule({ className = "" }: { className?: string }) {
  return <div className={`rule-letterhead ${className}`} aria-hidden />;
}

/**
 * The brass Seal — the credential stamp. Presses in once when scrolled
 * into view; static (no animation) under prefers-reduced-motion.
 */
export function Seal({
  top,
  main,
  bottom,
  className = "",
}: {
  top?: string;
  main: string;
  bottom?: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !ref.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setSeen(true);
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.5 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative grid place-items-center text-center select-none ${seen ? "seal-press" : ""} ${className}`}
      style={{ width: 118, height: 118, transform: "rotate(-7deg)" }}
      aria-hidden
    >
      {/* concentric rings */}
      <span className="absolute inset-0 rounded-full" style={{ border: "2px solid var(--brass)" }} />
      <span className="absolute inset-[7px] rounded-full" style={{ border: "1px solid var(--brass)", opacity: 0.55 }} />
      <span className="flex flex-col items-center gap-0.5 px-3" style={{ color: "var(--brass)" }}>
        {top && (
          <span className="mono-data" style={{ fontSize: 8, letterSpacing: "0.22em" }}>
            {top}
          </span>
        )}
        <span className="display" style={{ color: "var(--brass)", fontSize: 22, lineHeight: 1 }}>
          {main}
        </span>
        {bottom && (
          <span className="mono-data" style={{ fontSize: 8, letterSpacing: "0.22em" }}>
            {bottom}
          </span>
        )}
      </span>
    </div>
  );
}
