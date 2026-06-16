"use client";

import Image from "next/image";
import { ArrowRight, ArrowUpRight, ShieldCheck } from "@/components/primitives/Icons";
import { BlueprintGrid } from "@/components/primitives/BlueprintGrid";
import { Annotation, DimLabel } from "@/components/primitives/Annotation";
import { Parallax } from "@/components/primitives/Parallax";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-12 md:pt-20 pb-24 md:pb-32 bg-[color:var(--surface)]">
      <div className="absolute inset-0 -z-10 blueprint-grid-dense opacity-[0.55]" aria-hidden />
      <div className="absolute inset-0 -z-10 paper-tex opacity-60" aria-hidden />
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(70% 60% at 88% 0%, rgba(0,30,64,0.10) 0%, rgba(0,30,64,0) 60%)",
        }}
      />

      <div className="container-arch relative">
        {/* Eyebrow row */}
        <div className="flex items-center justify-between mb-8 md:mb-12 anim-float-down">
          <div className="flex items-center gap-3">
            <span className="cad-label">A.01 · Sheet 01 / 04</span>
            <span className="hidden sm:inline-block h-px w-12 bg-[color:var(--blueprint)]/40" />
            <span className="hidden sm:inline-flex cad-label">Premium Glass &amp; Aluminum</span>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <DimLabel>EST. 1992</DimLabel>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-7 relative">
            <h1
              className="h-display text-[44px] sm:text-[58px] lg:text-[72px] xl:text-[84px] anim-fade-up"
              style={{ animationDelay: "0.15s" }}
            >
              Premium glass
              <br />
              <span className="text-[color:var(--blueprint)]">&amp; aluminum</span>
              <br />
              <span className="italic font-medium">
                for modern <br className="hidden sm:block" />
                architecture.
              </span>
            </h1>

            <div className="mt-7 md:mt-9 flex items-center gap-3 anim-fade-in" style={{ animationDelay: "0.6s" }}>
              <span className="block h-[2px] w-12 bg-[color:var(--primary)] grow-x" />
              <span className="cad-label">Section 1.1</span>
            </div>

            <p
              className="mt-7 max-w-xl text-[17px] md:text-[18.5px] leading-[1.6] text-ink-soft anim-fade-up"
              style={{ animationDelay: "0.45s" }}
            >
              Engineered presence for commercial contractors and architects.
              We supply the structural integrity your projects demand —
              backed by three decades of established expertise across
              curtain walls, custom fabrication, and high-performance glazing.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3 anim-fade-up" style={{ animationDelay: "0.6s" }}>
              <a href="#solutions" className="btn-primary">
                Explore Solutions
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
              </a>
              <a href="#projects" className="btn-secondary">
                View Projects
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
              </a>
            </div>

            <div
              className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-[12px] text-ink-soft anim-fade-in"
              style={{ animationDelay: "0.85s" }}
            >
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[color:var(--primary)]" strokeWidth={1.5} />
                AAMA · GANA · AISC certified
              </span>
              <span className="hidden sm:inline-flex w-px h-4 bg-hairline" />
              <span className="cad-label">20-yr warranty</span>
              <span className="hidden sm:inline-flex w-px h-4 bg-hairline" />
              <span className="cad-label">PE-stamped drawings</span>
            </div>
          </div>

          {/* Right: image with blueprint overlay + parallax */}
          <div className="lg:col-span-5 relative">
            <div
              className="relative aspect-[4/5] lg:aspect-[3/4] rounded-sm overflow-hidden border border-outline-variant bg-[color:var(--container-low)] anim-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <Parallax intensity={0.18} className="absolute inset-0">
                <div className="absolute inset-0 scale-110">
                  <Image
                    src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=80"
                    alt="Modern glass façade with aluminum mullions"
                    fill
                    priority
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </Parallax>

              <div
                className="absolute inset-0 mix-blend-multiply pointer-events-none"
                style={{
                  background:
                    "linear-gradient(155deg, rgba(0,30,64,0.18) 0%, rgba(0,30,64,0) 50%)",
                }}
              />

              <Annotation position="tl" delay={0.9}>TYPE: IGU · LOW-E²</Annotation>
              <Annotation position="tr" delay={1.05}>U-VALUE 0.22</Annotation>
              <Annotation position="bl" delay={1.2}>ASTM E1300 · §2406</Annotation>

              <div className="absolute bottom-3 right-3 z-10">
                <span className="cad-label inline-flex items-center gap-1 bg-[color:var(--container-lowest)]/95 px-1.5 py-0.5 rounded-sm border border-hairline">
                  32′-0″
                  <span className="block h-px w-6 bg-[color:var(--blueprint)]" />
                  EL.
                </span>
              </div>
            </div>

            <div className="absolute -bottom-10 -right-8 w-44 h-44 opacity-70 hidden md:block pointer-events-none" aria-hidden>
              <BlueprintGrid className="w-full h-full" />
            </div>

            <div className="absolute -left-4 top-10 hidden md:flex anim-slide-right" style={{ animationDelay: "1.1s" }}>
              <div className="rotate-[-90deg] origin-top-left translate-y-24">
                <span className="cad-label flex items-center gap-2">
                  <span className="inline-block h-px w-6 bg-[color:var(--blueprint)]" />
                  Project ref: MERIDIAN-T38 · 2024
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-arch mt-16 md:mt-24">
        <div className="flex items-center gap-4 anim-fade-in" style={{ animationDelay: "1.4s" }}>
          <span className="cad-label">01</span>
          <span className="flex-1 h-px relative" style={{ background: "var(--hairline)" }}>
            <span className="absolute left-0 top-1/2 -translate-y-1/2 h-2 w-px" style={{ background: "var(--blueprint)", opacity: 0.6 }} />
            <span className="absolute right-0 top-1/2 -translate-y-1/2 h-2 w-px" style={{ background: "var(--blueprint)", opacity: 0.6 }} />
          </span>
          <span className="cad-label hidden sm:inline">Scroll to spec ↓</span>
        </div>
      </div>
    </section>
  );
}
