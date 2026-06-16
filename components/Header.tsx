"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "@/components/primitives/Icons";
import { Logo } from "./Logo";
import { primaryNav } from "@/lib/data";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 16);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, Math.max(0, y / max)) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      id="top"
      className={`sticky top-0 z-50 transition-[background,border-color,backdrop-filter] duration-300 ${
        scrolled
          ? "bg-[color:var(--surface)]/85 backdrop-blur border-b border-hairline"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-arch flex h-[68px] items-center justify-between gap-6">
        <Logo />

        <nav className="hidden md:flex items-center gap-1">
          {primaryNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative px-3 py-2 text-[13px] font-medium text-ink-soft hover:text-ink transition-colors group"
            >
              <span className="relative z-10">{item.label}</span>
              <span className="pointer-events-none absolute inset-x-3 -bottom-0.5 h-px origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 bg-[color:var(--primary)]" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#quote"
            className="hidden sm:inline-flex items-center gap-1.5 btn-primary !py-2.5 !px-4 !text-[11.5px]"
          >
            Get Quote <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded border border-line-soft text-ink hover:bg-container-low transition-colors"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Scroll-progress hairline */}
      <span
        className="absolute inset-x-0 bottom-0 h-px origin-left bg-[color:var(--primary)] transition-transform duration-150"
        style={{ transform: `scaleX(${progress})` }}
      />

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden bg-[color:var(--surface)] border-b transition-[max-height,opacity] duration-300 ${
          open ? "max-h-[420px] opacity-100 border-hairline" : "max-h-0 opacity-0 border-transparent"
        }`}
      >
        <div className="container-arch py-4 flex flex-col gap-1">
          {primaryNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between py-3 border-b border-hairline last:border-b-0 text-[15px] font-medium text-ink"
            >
              {item.label}
              <ArrowUpRight className="h-4 w-4 text-ink-soft" />
            </a>
          ))}
          <a
            href="#quote"
            onClick={() => setOpen(false)}
            className="btn-primary w-full justify-center mt-4"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </header>
  );
}
