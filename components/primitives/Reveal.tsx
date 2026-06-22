"use client";

import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

const transformFor = (dir: Direction, distance: number) => {
  switch (dir) {
    case "up": return `translateY(${distance}px)`;
    case "down": return `translateY(-${distance}px)`;
    case "left": return `translateX(${distance}px)`;
    case "right": return `translateX(-${distance}px)`;
    case "none": return "none";
  }
};

/**
 * Scroll-in reveal — fade + small settle. Self-contained (no global CSS),
 * respects prefers-reduced-motion by rendering the end-state immediately.
 * Stagger by passing incremental `delay` to siblings.
 */
export function Reveal({
  children,
  direction = "up",
  distance = 14,
  delay = 0,
  duration = 0.6,
  className = "",
  amount = 0.18,
}: {
  children: ReactNode;
  direction?: Direction;
  distance?: number;
  delay?: number;
  duration?: number;
  className?: string;
  amount?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const reduce = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setShow(true);
      return;
    }
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShow(true);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: amount },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [amount]);

  const style: CSSProperties = {
    opacity: show ? 1 : 0,
    transform: show ? "none" : transformFor(direction, distance),
    transition: `opacity ${duration}s cubic-bezier(0.2,0.7,0.2,1) ${delay}s, transform ${duration}s cubic-bezier(0.2,0.7,0.2,1) ${delay}s`,
    willChange: "opacity, transform",
  };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
