import { Reveal } from "@/components/primitives/Reveal";
import { Eyebrow } from "@/components/primitives/Marks";
import { buyingSteps, terms } from "@/lib/data";

export function Buying() {
  return (
    <section id="buying" className="section-y">
      <div className="container-page">
        <div className="max-w-2xl">
          <Reveal><Eyebrow rule>How buying works</Eyebrow></Reveal>
          <Reveal delay={0.06}>
            <h2 className="display display-lg mt-5">Simple, and on the record.</h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 text-[16px] leading-relaxed text-ink-soft">
              No accounts to open, no runaround. Check stock, get a quotation, reserve
              with a downpayment, then pick up or have it delivered.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-start">
          {/* steps */}
          <ol className="relative">
            {buyingSteps.map((s, i) => (
              <Reveal key={s.num} delay={0.05 * i}>
                <li className="relative flex gap-5 pb-8 last:pb-0">
                  {/* connector */}
                  {i < buyingSteps.length - 1 && (
                    <span className="absolute left-[27px] top-14 bottom-2 w-px bg-steel-line" aria-hidden />
                  )}
                  <div className="relative shrink-0">
                    <span className="grid place-items-center h-14 w-14 rounded-[var(--r)] framed bg-[color:var(--paper)] text-navy">
                      <s.icon className="h-5 w-5" strokeWidth={1.5} />
                    </span>
                    <span className="absolute -right-1.5 -top-1.5 mono-data text-[10px] font-medium h-5 w-5 grid place-items-center rounded-full bg-[color:var(--navy)] text-[color:var(--on-navy)]">
                      {s.num}
                    </span>
                  </div>
                  <div className="pt-1.5">
                    <h3 className="display" style={{ fontSize: 19 }}>{s.title}</h3>
                    <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft max-w-md">{s.body}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>

          {/* terms ledger */}
          <Reveal direction="left" delay={0.1}>
            <div className="framed framed-strong overflow-hidden lg:sticky lg:top-24">
              <div className="flex items-center justify-between px-5 py-3.5 bg-[color:var(--navy)] text-on-navy">
                <span className="mono-data text-[11px] tracking-[0.16em] uppercase">Terms at a glance</span>
                <span className="mono-data text-[11px] tracking-[0.16em] uppercase text-[color:var(--brass-bright)]">PHP</span>
              </div>
              <dl>
                {terms.map((t) => (
                  <div key={t.label} className="flex items-baseline justify-between gap-4 px-5 py-3.5 border-b border-steel-line last:border-b-0">
                    <dt className="text-[14px] text-ink-soft shrink-0">{t.label}</dt>
                    <dd className="text-right">
                      <span className="mono-data font-medium text-[15px] text-navy">{t.value}</span>
                      {t.note && <span className="block text-[11.5px] text-steel-dark mt-0.5">{t.note}</span>}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
