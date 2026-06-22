/* eslint-disable @next/next/no-img-element */
import { Reveal } from "@/components/primitives/Reveal";
import { Eyebrow, Seal } from "@/components/primitives/Marks";
import { ArrowRight, MessageCircle, Check } from "@/components/primitives/Icons";
import { business, credentials } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative overflow-hidden glow-blue">
      <div className="absolute inset-x-0 top-0 h-px bg-[color:var(--steel-line)]" aria-hidden />
      <div className="container-page relative grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center pt-16 pb-20 lg:pt-24 lg:pb-28">
        {/* — copy — */}
        <div className="flex flex-col">
          <Reveal>
            <Eyebrow blue rule>
              {business.region} · Est. {business.estYear}
            </Eyebrow>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="display display-xl mt-6">
              A real store
              <br />
              behind the glass.
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-6 text-[17px] leading-relaxed text-ink-soft max-w-xl">
              Jennys supplies, fabricates, and installs glass, aluminum, and
              roll-up across the {business.region} — licensed, documented, and here to
              answer for the work long after it&apos;s done.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#quote" className="btn btn-primary">
                Get a quote <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </a>
              <a href={business.messengerHref} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                <MessageCircle className="h-4 w-4" /> Message us
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
              {["Licensed business", "Official receipts", `${business.years} years in Antique`].map((c) => (
                <li key={c} className="inline-flex items-center gap-2 text-[13px] text-ink-soft">
                  <Check className="h-3.5 w-3.5 text-blue" strokeWidth={2.5} />
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* — framed-pane composition (real work) — */}
        <Reveal direction="left" delay={0.1} className="relative">
          <div className="relative">
            <div className="framed framed-strong relative aspect-[5/4] lg:aspect-[4/5] overflow-hidden">
              <img
                src="/balcony-glass-railing.jpg"
                alt="Stainless-and-glass balustrade installed on a terrace in Antique"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <span className="absolute left-3 top-3 mono-data text-[10px] tracking-[0.18em] uppercase text-white bg-[color:var(--navy)]/75 px-2 py-1 rounded-[var(--r-sm)]">
                Glass railing · Antique
              </span>
              <Corner className="left-2 top-2 text-white/80" />
              <Corner className="right-2 top-2 rotate-90 text-white/80" />
              <Corner className="right-2 bottom-2 rotate-180 text-white/80" />
              <Corner className="left-2 bottom-2 -rotate-90 text-white/80" />
            </div>

            {/* the seal, overlapping */}
            <div className="absolute -left-4 -bottom-6 sm:-left-7 z-10">
              <div className="grid place-items-center rounded-full bg-[color:var(--paper)] shadow-[var(--shadow-overlay)]" style={{ width: 132, height: 132 }}>
                <Seal top="Licensed · Antique" main={`Est. ${business.estYear}`} bottom="Official Receipts" />
              </div>
            </div>

            {/* small work tiles */}
            <div className="absolute -right-3 top-6 hidden sm:flex flex-col gap-2 z-10">
              {[
                { src: "/basketball-board.jpg", l: "Backboards" },
                { src: "/kitchen-cabinet.jpg", l: "Cabinets" },
              ].map((t) => (
                <div key={t.l} className="framed w-28 overflow-hidden bg-[color:var(--paper)]">
                  <img src={t.src} alt={t.l} className="h-14 w-full object-cover" />
                  <div className="px-2 py-1.5 mono-data text-[9px] tracking-[0.16em] uppercase text-steel-dark">{t.l}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {/* credential ticker rule */}
      <div className="border-y border-steel-line bg-[color:var(--paper-2)]">
        <div className="container-page flex flex-wrap items-center justify-center gap-x-8 gap-y-2 py-3.5">
          {credentials.map((c, i) => (
            <span key={c} className="inline-flex items-center gap-8">
              <span className="mono-data text-[11px] tracking-[0.14em] uppercase text-steel-dark">{c}</span>
              {i < credentials.length - 1 && <span className="hidden sm:inline-block h-1 w-1 rounded-full bg-blue" />}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Corner({ className = "" }: { className?: string }) {
  return (
    <svg className={`absolute h-4 w-4 ${className}`} viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M1 6 V1 H6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
