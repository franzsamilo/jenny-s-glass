/* eslint-disable @next/next/no-img-element */
import { Reveal } from "@/components/primitives/Reveal";
import { Eyebrow } from "@/components/primitives/Marks";
import { business, story } from "@/lib/data";

export function Story() {
  return (
    <section id="story" className="section-y">
      <div className="container-page grid lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-16 items-center">
        {/* real photo */}
        <Reveal direction="right">
          <div className="framed framed-strong relative overflow-hidden">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src="/building-exterior.jpg"
                alt="Glass and aluminum work on a home in the Province of Antique"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <span className="absolute left-3 top-3 mono-data text-[10px] tracking-[0.18em] uppercase text-white bg-[color:var(--navy)]/70 px-2 py-1 rounded-[var(--r-sm)]">
                Fig. 02 — Antique
              </span>
            </div>
            <div className="flex items-center justify-between px-4 py-3 border-t border-steel-line bg-[color:var(--paper-2)]">
              <span className="mono-data text-[11px] tracking-[0.14em] uppercase text-steel-dark">Family-run</span>
              <span className="mono-data text-[11px] tracking-[0.14em] uppercase text-blue">Since {business.founded}</span>
            </div>
          </div>
        </Reveal>

        {/* the story */}
        <div>
          <Reveal>
            <Eyebrow rule>Our story</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="display display-lg mt-5">Built by a family. Still here.</h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 text-[18px] leading-relaxed text-ink">{story.lead}</p>
          </Reveal>
          {story.body.map((para, i) => (
            <Reveal key={i} delay={0.16 + i * 0.05}>
              <p className="mt-4 text-[15.5px] leading-relaxed text-ink-soft">{para}</p>
            </Reveal>
          ))}
          <Reveal delay={0.3}>
            <blockquote className="mt-8 pl-5 border-l-2 border-[color:var(--blue)]">
              <p className="display" style={{ fontSize: 22, lineHeight: 1.3 }}>{story.pullquote}</p>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
