/* eslint-disable @next/next/no-img-element */
import { Reveal } from "@/components/primitives/Reveal";
import { Eyebrow } from "@/components/primitives/Marks";
import { ArrowRight } from "@/components/primitives/Icons";
import { work } from "@/lib/data";

export function Work() {
  return (
    <section id="work" className="section-y bg-[color:var(--paper-2)] border-y border-steel-line">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6 max-w-3xl">
          <div>
            <Reveal>
              <Eyebrow rule>Recent work</Eyebrow>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="display display-lg mt-5">Real jobs, around Antique.</h2>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <p className="text-[15px] leading-relaxed text-ink-soft max-w-sm">
              A few we&apos;ve supplied, fabricated, and installed — from glass railings
              and partitions to roll-up doors and tempered-glass basketball boards.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {work.map((w, i) => (
            <Reveal key={w.src} delay={0.04 * (i % 4)}>
              <figure className="framed framed-hover overflow-hidden h-full">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={w.src} alt={w.alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--navy)]/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" aria-hidden />
                </div>
                <figcaption className="flex items-center justify-between gap-2 px-3.5 py-3 border-t border-steel-line">
                  <span className="mono-data text-[10.5px] tracking-[0.14em] uppercase text-steel-dark">{w.tag}</span>
                  <span className="mono-data text-[10px] text-steel">{String(i + 1).padStart(2, "0")}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8 text-[14.5px] text-ink-soft inline-flex items-center gap-2">
            See more on our Facebook page
            <a href="https://www.facebook.com/glass.aluminum.319" target="_blank" rel="noopener noreferrer" className="link-brass inline-flex items-center gap-1">
              @glass.aluminum.319 <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
