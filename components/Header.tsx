"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Menu, X, MessageCircle } from "@/components/primitives/Icons";
import { Logo } from "./Logo";
import { primaryNav, business } from "@/lib/data";

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
      className={`sticky top-0 z-50 transition-[background,border-color] duration-300 ${
        scrolled
          ? "bg-[color:var(--paper)]/90 backdrop-blur border-b border-steel-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-page flex h-[68px] items-center justify-between gap-6">
        <Logo />

        <nav className="hidden md:flex items-center gap-1">
          {primaryNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative px-3 py-2 text-[13.5px] font-medium text-ink-soft hover:text-navy transition-colors group"
            >
              <span className="relative z-10">{item.label}</span>
              <span className="pointer-events-none absolute inset-x-3 -bottom-0.5 h-0.5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 bg-[color:var(--brass)]" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="#quote" className="hidden sm:inline-flex btn btn-primary !py-2.5 !px-4 !text-[11px]">
            Get a quote <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-[var(--r)] border border-steel-line text-navy hover:bg-[color:var(--paper-2)] transition-colors"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* scroll-progress hairline (brass) */}
      <span
        className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-[color:var(--brass)] transition-transform duration-150"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden
      />

      {/* mobile drawer */}
      <div
        className={`md:hidden overflow-hidden bg-[color:var(--paper)] transition-[max-height,opacity] duration-300 ${
          open ? "max-h-[460px] opacity-100 border-b border-steel-line" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container-page py-4 flex flex-col gap-1">
          {primaryNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between py-3 border-b border-steel-line last:border-b-0 text-[15px] font-medium text-ink"
            >
              {item.label}
              <ArrowRight className="h-4 w-4 text-steel" />
            </a>
          ))}
          <div className="grid grid-cols-2 gap-2 mt-4">
            <a href={business.messengerHref} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="btn btn-secondary justify-center">
              <MessageCircle className="h-4 w-4" /> Message
            </a>
            <a href="#quote" onClick={() => setOpen(false)} className="btn btn-primary justify-center">
              Get a quote
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
