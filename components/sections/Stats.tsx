import { stats } from "@/lib/data";
import { Counter } from "@/components/primitives/Counter";
import { Reveal, Stagger, StaggerChild } from "@/components/primitives/Reveal";

export function Stats() {
  return (
    <section className="relative py-24 md:py-28 bg-[color:var(--surface)] overflow-hidden">
      <div className="container-arch">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-12 md:mb-16">
          <Reveal className="lg:col-span-7">
            <span className="eyebrow">E · Operational Record</span>
            <h2 className="h-display text-[36px] md:text-[44px] mt-4 max-w-xl">
              Three decades. Counted in shipped square footage, not press
              releases.
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.1} className="lg:col-span-5">
            <p className="text-[15.5px] leading-[1.65] text-ink-soft max-w-md">
              The numbers your specifier will want to verify before they trust
              their sealed envelope to anyone else.
            </p>
          </Reveal>
        </div>

        <Stagger className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-hairline border border-hairline" staggerChildren={0.08}>
          {stats.map((s, i) => (
            <StaggerChild key={s.label} index={i}>
              <div className="p-7 md:p-9 bg-[color:var(--container-lowest)] flex flex-col gap-3 h-full">
                <span className="cad-label">{String(i + 1).padStart(2, "0")}</span>
                <div className="flex items-baseline gap-1.5">
                  <span
                    className="text-[44px] md:text-[58px] leading-none font-semibold tracking-tight text-ink"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    <Counter to={s.value} decimals={s.value % 1 !== 0 ? 1 : 0} />
                  </span>
                  <span
                    className="text-[15px] md:text-[18px] font-medium text-[color:var(--blueprint)]"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {s.suffix}
                  </span>
                </div>
                <p className="text-[13px] leading-[1.5] text-ink-soft mt-1">{s.label}</p>
                {s.hint && <p className="cad-label !text-ink-soft/80">{s.hint}</p>}
              </div>
            </StaggerChild>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
