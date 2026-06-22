/* eslint-disable @next/next/no-img-element */
import { Reveal } from "@/components/primitives/Reveal";
import { Eyebrow } from "@/components/primitives/Marks";
import { Check } from "@/components/primitives/Icons";
import { pillars, catalog } from "@/lib/data";

export function Services() {
  return (
    <section id="services" className="section-y">
      <div className="container-page">
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow rule>What we do</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="display display-lg mt-5">Supply, install, and fabricate.</h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 text-[16px] leading-relaxed text-ink-soft">
              Most of our work is supplying installers and homeowners across Antique.
              We also install what we sell, and fabricate to order from the same
              materials — so one store handles the whole job. From sliding windows and
              shower enclosures to tempered-glass basketball boards, the range is wide:
              if it&apos;s glass or aluminum, chances are we make it.
            </p>
          </Reveal>
        </div>

        {/* pillars */}
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {pillars.map((p, i) => (
            <Reveal key={p.id} delay={0.06 * i}>
              <article className="framed framed-hover h-full overflow-hidden flex flex-col">
                <div className="relative h-36 overflow-hidden">
                  <img src={p.image} alt={`${p.title} — Jennys work`} className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--navy)]/55 to-transparent" aria-hidden />
                  <span className="absolute right-3 top-3 mono-data text-[10px] tracking-[0.2em] text-white/90">{p.no}</span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-[var(--r)] border border-steel-line text-navy">
                      <p.icon className="h-4.5 w-4.5" strokeWidth={1.5} />
                    </span>
                    <h3 className="display" style={{ fontSize: 22 }}>{p.title}</h3>
                  </div>
                  <p className="mt-4 text-[14.5px] leading-relaxed text-ink-soft">{p.blurb}</p>
                  <ul className="mt-5 pt-5 border-t border-steel-line flex flex-col gap-2.5">
                    {p.items.map((it) => (
                      <li key={it} className="inline-flex items-center gap-2.5 text-[14px] text-ink">
                        <Check className="h-3.5 w-3.5 text-brass shrink-0" strokeWidth={2.5} />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* stock ledger */}
        <Reveal delay={0.1}>
          <div className="mt-12 framed overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3.5 bg-[color:var(--paper-2)] border-b border-steel-line">
              <span className="mono-data text-[11px] tracking-[0.16em] uppercase text-steel-dark">What we keep in stock</span>
              <span className="mono-data text-[11px] tracking-[0.16em] uppercase text-steel-dark hidden sm:inline">Antique · supply</span>
            </div>
            <ul>
              {catalog.map((row) => (
                <li key={row.id} className="flex items-center gap-4 px-5 py-4 border-b border-steel-line last:border-b-0">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-[var(--r)] bg-[color:var(--paper-2)] text-navy shrink-0">
                    <row.icon className="h-4.5 w-4.5" strokeWidth={1.5} />
                  </span>
                  <span className="font-medium text-[15px] text-ink w-40 shrink-0">{row.name}</span>
                  <span className="text-[14px] text-ink-soft">{row.forUse}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
