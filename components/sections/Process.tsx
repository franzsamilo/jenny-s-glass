import { process } from "@/lib/data";
import { Reveal, Stagger, StaggerChild } from "@/components/primitives/Reveal";

export function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32 bg-[color:var(--container-low)] border-y border-hairline overflow-hidden">
      <div className="container-arch">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-14 md:mb-20">
          <Reveal className="lg:col-span-6">
            <span className="eyebrow">D · Engagement Sequence</span>
            <h2 className="h-display text-[40px] md:text-[52px] mt-4">
              From specification
              <br />
              <span className="italic font-medium">to service.</span>
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.1} className="lg:col-span-6">
            <p className="text-[16px] leading-[1.65] text-ink-soft max-w-xl">
              A four-step engagement we&apos;ve refined over three decades.
              No surprises. Every step accountable. Every deliverable on the
              critical path.
            </p>
          </Reveal>
        </div>

        <Stagger
          className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-hairline border border-hairline"
          staggerChildren={0.15}
        >
          {process.map((s, i) => {
            const Icon = s.icon;
            return (
              <StaggerChild key={s.num} index={i}>
                <div className="relative h-full p-7 md:p-8 bg-[color:var(--container-lowest)] group hover:bg-[color:var(--surface-bright)] transition-colors">
                  <span
                    className="block text-[64px] md:text-[72px] font-light leading-none tracking-tight text-[color:var(--blueprint)]/15 select-none"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {s.num}
                  </span>

                  <div className="flex items-center justify-between mt-3 mb-4">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-outline-variant text-[color:var(--primary)] group-hover:border-[color:var(--primary)] transition-colors">
                      <Icon className="h-4 w-4" strokeWidth={1.5} />
                    </span>
                    <span className="cad-label">STEP · {s.num}</span>
                  </div>

                  <h3
                    className="text-[19px] md:text-[20px] font-semibold tracking-tight text-ink mb-2.5"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-[13.5px] leading-[1.6] text-ink-soft">{s.body}</p>

                  <span className="absolute right-3 bottom-3 cad-label opacity-0 group-hover:opacity-70 transition-opacity">
                    →
                  </span>
                </div>
              </StaggerChild>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
