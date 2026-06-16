"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, MapPin, Maximize2, Calendar } from "@/components/primitives/Icons";
import { projects } from "@/lib/data";
import { Reveal } from "@/components/primitives/Reveal";

export function Projects() {
  const railRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollTo = (dir: -1 | 1) => {
    const el = railRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const w = card ? card.offsetWidth + 24 : el.offsetWidth * 0.8;
    el.scrollBy({ left: dir * w, behavior: "smooth" });
  };

  return (
    <section id="projects" className="relative py-24 md:py-32 bg-[color:var(--surface)] overflow-hidden">
      <div className="container-arch">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-12 md:mb-16">
          <Reveal className="lg:col-span-7">
            <span className="eyebrow">C · Field Reference</span>
            <h2 className="h-display text-[40px] md:text-[52px] mt-4">
              Projects in <br />
              <span className="italic font-medium text-[color:var(--blueprint)]">service.</span>
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.1} className="lg:col-span-5 flex flex-col gap-5">
            <p className="text-[16px] leading-[1.65] text-ink-soft max-w-md">
              A small selection of recently completed work. Every installation
              still under warranty — most under PE-stamped engineering review.
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={() => scrollTo(-1)}
                aria-label="Previous project"
                className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-outline-variant text-ink hover:border-[color:var(--primary)] hover:text-[color:var(--primary)] transition-colors"
              >
                <ArrowLeft className="h-4 w-4" strokeWidth={2} />
              </button>
              <button
                onClick={() => scrollTo(1)}
                aria-label="Next project"
                className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-outline-variant text-ink hover:border-[color:var(--primary)] hover:text-[color:var(--primary)] transition-colors"
              >
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </button>
              <span className="cad-label ml-2">
                {String(active + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
              </span>
            </div>
          </Reveal>
        </div>
      </div>

      <div
        ref={railRef}
        className="container-arch flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-px-5 md:scroll-px-16 pb-6"
        style={{ scrollbarWidth: "thin" }}
        onScroll={(e) => {
          const el = e.currentTarget;
          const card = el.querySelector<HTMLElement>("[data-card]");
          const w = card ? card.offsetWidth + 24 : 1;
          setActive(Math.min(projects.length - 1, Math.round(el.scrollLeft / w)));
        }}
      >
        {projects.map((p, i) => (
          <Reveal
            key={p.id}
            direction="up"
            delay={i * 0.05}
            className="snap-start shrink-0 w-[88vw] sm:w-[60vw] lg:w-[680px]"
          >
            <article data-card className="card-arch overflow-hidden flex flex-col h-full">
              <div className="relative aspect-[16/10] overflow-hidden bg-[color:var(--container-low)]">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(min-width: 1024px) 680px, 90vw"
                  className="object-cover transition-transform duration-[1500ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.04]"
                />
                <div
                  className="absolute inset-0 mix-blend-multiply"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0,30,64,0) 50%, rgba(0,30,64,0.55) 100%)",
                  }}
                />
                {(["tl", "tr", "bl", "br"] as const).map((pos) => (
                  <span
                    key={pos}
                    className={`absolute h-5 w-5 border-white/70 pointer-events-none ${
                      pos === "tl"
                        ? "top-3 left-3 border-l border-t"
                        : pos === "tr"
                        ? "top-3 right-3 border-r border-t"
                        : pos === "bl"
                        ? "bottom-3 left-3 border-l border-b"
                        : "bottom-3 right-3 border-r border-b"
                    }`}
                  />
                ))}

                <div className="absolute top-4 left-4">
                  <span className="cad-label bg-[color:var(--container-lowest)]/95 px-2 py-1 rounded-sm border border-hairline">
                    Project · {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="cad-label text-white/90">{p.client}</span>
                  <h3 className="text-white text-[24px] md:text-[28px] mt-1 font-medium" style={{ fontFamily: "var(--font-serif)" }}>
                    {p.title}
                  </h3>
                </div>
              </div>
              <div className="p-7 flex flex-col gap-5 flex-1">
                <div className="grid grid-cols-3 gap-4 pb-5 border-b border-hairline">
                  <Meta icon={MapPin} label="Location" value={p.location} />
                  <Meta icon={Calendar} label="Completed" value={p.year} />
                  <Meta icon={Maximize2} label="Size" value={p.size} />
                </div>
                <p className="text-[14.5px] leading-[1.6] text-ink-soft">{p.scope}</p>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-sm border border-hairline text-[11.5px] text-ink-soft bg-[color:var(--container-low)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}

        <div className="shrink-0 w-5 md:w-16" aria-hidden />
      </div>
    </section>
  );
}

function Meta({
  icon: Icon,
  label,
  value,
}: {
  icon: (props: { className?: string; strokeWidth?: number }) => React.ReactElement;
  label: string;
  value: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center gap-1.5">
        <Icon className="h-3.5 w-3.5 text-[color:var(--blueprint)]" strokeWidth={1.5} />
        <span className="cad-label">{label}</span>
      </div>
      <span className="text-[13.5px] text-ink leading-tight" style={{ fontFamily: "var(--font-serif)" }}>
        {value}
      </span>
    </div>
  );
}
