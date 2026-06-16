import Image from "next/image";
import { ArrowUpRight, Plus } from "@/components/primitives/Icons";
import { categories } from "@/lib/data";
import { Reveal, Stagger, StaggerChild } from "@/components/primitives/Reveal";

export function Categories() {
  return (
    <section id="solutions" className="relative py-24 md:py-32 bg-[color:var(--surface)]">
      <div className="container-arch">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-14 md:mb-20">
          <Reveal className="lg:col-span-7">
            <span className="eyebrow">DIV. 08 · Openings + Glazing</span>
            <h2 className="h-display text-[40px] md:text-[52px] mt-4">
              Structural supply
              <br />
              <span className="italic font-medium text-[color:var(--blueprint)]">categories.</span>
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.1} className="lg:col-span-5">
            <p className="text-[16.5px] leading-[1.65] text-ink-soft max-w-xl">
              Our inventory is curated to meet the demands of high-end commercial and
              residential developments. Every category is engineered, tested,
              and warranty-backed. Pick a spec — we&apos;ll fabricate.
            </p>
          </Reveal>
        </div>

        <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7" staggerChildren={0.12}>
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <StaggerChild key={cat.id} index={i}>
                <article className="card-arch group h-full flex flex-col overflow-hidden">
                  <div className="relative aspect-[5/4] overflow-hidden bg-[color:var(--container-low)]">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                    />
                    <div
                      className="absolute inset-0 mix-blend-multiply"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(0,30,64,0) 60%, rgba(0,30,64,0.55) 100%)",
                      }}
                    />
                    <span className="absolute top-3 left-3 cad-label bg-[color:var(--container-lowest)]/95 px-2 py-1 rounded-sm border border-hairline">
                      {cat.spec}
                    </span>
                    <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                      <h3
                        className="text-white text-[20px] md:text-[22px] leading-tight font-medium"
                        style={{ fontFamily: "var(--font-serif)" }}
                      >
                        {cat.title}
                      </h3>
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-sm bg-white/95 text-[color:var(--primary)] transition-transform duration-300 group-hover:rotate-45">
                        <Plus className="h-4 w-4" strokeWidth={1.5} />
                      </span>
                    </div>
                  </div>

                  <div className="p-6 md:p-7 flex flex-col gap-4 flex-1">
                    <div className="flex items-center gap-2.5">
                      <Icon className="h-4 w-4 text-[color:var(--blueprint)]" strokeWidth={1.5} />
                      <span className="cad-label">Engineered Series</span>
                    </div>
                    <p className="text-[14.5px] leading-[1.6] text-ink-soft flex-1">{cat.blurb}</p>

                    <ul className="flex flex-wrap gap-1.5 pt-1">
                      {cat.bullets.map((b) => (
                        <li
                          key={b}
                          className="px-2.5 py-1 rounded-sm border border-hairline text-[11.5px] text-ink-soft bg-[color:var(--container-low)]"
                        >
                          {b}
                        </li>
                      ))}
                    </ul>

                    <a
                      href="#"
                      className="mt-2 inline-flex items-center gap-2 text-[12.5px] font-semibold uppercase tracking-[0.12em] text-[color:var(--primary)] hover:text-[color:var(--primary-hover)] transition-colors group/link"
                    >
                      View profile
                      <span className="inline-flex transition-transform duration-200 group-hover/link:translate-x-0.5">
                        <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
                      </span>
                    </a>
                  </div>
                </article>
              </StaggerChild>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
