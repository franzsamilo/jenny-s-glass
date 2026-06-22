import { Reveal } from "@/components/primitives/Reveal";
import { Eyebrow } from "@/components/primitives/Marks";
import { business, story } from "@/lib/data";

export function Story() {
  return (
    <section id="story" className="section-y">
      <div className="container-page grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-center">
        {/* photo slot (clearly marked for the asset top-up) */}
        <Reveal direction="right">
          <div className="framed framed-strong relative overflow-hidden">
            <div className="paper-grain relative aspect-[4/5] grid place-items-center bg-[color:var(--paper-3)]">
              <div className="flex flex-col items-center gap-3 text-center px-6">
                <svg className="h-8 w-8 text-steel" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" aria-hidden>
                  <rect x="3" y="6" width="18" height="14" rx="2" />
                  <circle cx="12" cy="13" r="3.5" />
                  <path d="M8 6l1.5-2h5L16 6" />
                </svg>
                <span className="mono-data text-[11px] tracking-[0.16em] uppercase text-steel-dark max-w-[14rem]">
                  Photo — the store, the family, or a finished job
                </span>
                <span className="mono-data text-[10px] tracking-[0.16em] uppercase text-steel">to be added</span>
              </div>
              <span className="absolute left-3 top-3 mono-data text-[10px] tracking-[0.18em] uppercase text-steel-dark">Fig. 02</span>
            </div>
            <div className="flex items-center justify-between px-4 py-3 border-t border-steel-line bg-[color:var(--paper-2)]">
              <span className="mono-data text-[11px] tracking-[0.14em] uppercase text-steel-dark">Family-run</span>
              <span className="mono-data text-[11px] tracking-[0.14em] uppercase text-brass">Since {business.founded}</span>
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
            <blockquote className="mt-8 pl-5 border-l-2 border-[color:var(--brass)]">
              <p className="display" style={{ fontSize: 22, lineHeight: 1.3 }}>{story.pullquote}</p>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
