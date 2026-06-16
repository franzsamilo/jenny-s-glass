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

export function Reveal({
  children,
  direction = "up",
  distance = 22,
  delay = 0,
  duration = 0.7,
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
    transition: `opacity ${duration}s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform ${duration}s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
    willChange: "opacity, transform",
  };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}

export function Stagger({
  children,
  className = "",
  delayChildren = 0.05,
  staggerChildren = 0.08,
  amount = 0.18,
}: {
  children: ReactNode;
  className?: string;
  delayChildren?: number;
  staggerChildren?: number;
  amount?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const reduce = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { setShow(true); return; }
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

  return (
    <div
      ref={ref}
      className={className}
      data-stagger={show ? "in" : "out"}
      style={{ "--stagger-delay": `${delayChildren}s`, "--stagger-step": `${staggerChildren}s` } as CSSProperties}
    >
      {children}
    </div>
  );
}

export function StaggerChild({
  children,
  className = "",
  direction = "up",
  distance = 18,
  duration = 0.6,
  index = 0,
}: {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  distance?: number;
  duration?: number;
  index?: number;
}) {
  const initialTransform = transformFor(direction, distance);
  return (
    <div
      className={`stagger-child ${className}`}
      style={
        {
          "--initial-transform": initialTransform,
          "--stagger-duration": `${duration}s`,
          "--stagger-index": index,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}
