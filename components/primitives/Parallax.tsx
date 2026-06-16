"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

/**
 * Lightweight parallax wrapper. Translates Y based on element's position in viewport.
 * intensity 0.2 ≈ subtle, 0.4 ≈ noticeable.
 */
export function Parallax({
  children,
  intensity = 0.2,
  className = "",
}: {
  children: ReactNode;
  intensity?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    let raf = 0;
    const update = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // Progress 0..1 as element passes through viewport
      const progress = 1 - (rect.top + rect.height / 2) / (vh + rect.height);
      const px = (progress - 0.5) * 100 * intensity;
      setOffset(px);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [intensity]);

  const style: CSSProperties = {
    transform: `translateY(${offset}px)`,
    transition: "transform 80ms linear",
    willChange: "transform",
  };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
