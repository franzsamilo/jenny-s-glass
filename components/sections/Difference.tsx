import Image from "next/image";
import { differences } from "@/lib/data";
import { Reveal, Stagger, StaggerChild } from "@/components/primitives/Reveal";

export function Difference() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-[color:var(--container-low)] border-y border-hairline">
      <div className="container-arch">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-14 md:mb-20">
          <Reveal className="lg:col-span-6">
            <span className="eyebrow">A · Brand Standard</span>
            <h2 className="h-display text-[40px] md:text-[52px] mt-4">
              The Jenny&apos;s
              <br />
              <span className="italic font-medium">difference.</span>
            </h2>
            <p className="mt-6 text-[16.5px] leading-[1.65] text-ink-soft max-w-xl">
              A foundation built on uncompromising standards and material integrity.
              Four principles that have guided every order since 1992 — and
              every project still standing today.
            </p>
          </Reveal>

          <Reveal direction="left" delay={0.1} className="lg:col-span-6">
            <div className="relative aspect-[16/10] rounded-sm overflow-hidden border border-outline-variant bg-[color:var(--container)]">
              <Image
                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1600&q=80"
                alt="Aluminum framing assembly"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0 mix-blend-multiply"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0,30,64,0.35) 0%, rgba(0,30,64,0.05) 50%, rgba(0,30,64,0.45) 100%)",
                }}
              />
              <div className="absolute inset-0 flex flex-col justify-between p-5">
                <div className="flex items-center justify-between">
                  <span className="cad-label bg-[color:var(--container-lowest)]/95 px-2 py-1 rounded-sm border border-hairline">DETAIL · §A.04</span>
                  <span className="cad-label text-white/85 bg-white/10 backdrop-blur px-2 py-1 rounded-sm border border-white/15">FRAMING TYP.</span>
                </div>
                <div className="self-end">
                  <span className="cad-label bg-[color:var(--container-lowest)]/95 px-2 py-1 rounded-sm border border-hairline">SCALE 1:20</span>
                </div>
              </div>

              {(["tl", "tr", "bl", "br"] as const).map((pos) => (
                <Corner key={pos} pos={pos} />
              ))}
            </div>
          </Reveal>
        </div>

        <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-px bg-hairline border border-hairline" staggerChildren={0.1}>
          {differences.map((d, i) => {
            const Icon = d.icon;
            return (
              <StaggerChild key={d.id} index={i}>
                <div className="group relative h-full p-8 md:p-10 bg-[color:var(--container-lowest)] hover:bg-[color:var(--surface-bright)] transition-colors hover:-translate-y-0.5 duration-200">
                  <div className="flex items-start justify-between mb-5">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-sm border border-outline-variant bg-[color:var(--container-low)] text-[color:var(--primary)] transition-colors group-hover:border-[color:var(--primary)]">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </span>
                    <span className="cad-label">{d.spec}</span>
                  </div>

                  <h3
                    className="text-[22px] md:text-[26px] font-semibold tracking-tight text-ink"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {d.title}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-[1.65] text-ink-soft max-w-prose">
                    {d.body}
                  </p>

                  <span className="absolute left-8 md:left-10 right-8 md:right-10 bottom-6 h-px origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 bg-[color:var(--primary)]" />
                </div>
              </StaggerChild>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

function Corner({ pos }: { pos: "tl" | "tr" | "bl" | "br" }) {
  const c =
    pos === "tl"
      ? "top-2 left-2 border-l border-t"
      : pos === "tr"
      ? "top-2 right-2 border-r border-t"
      : pos === "bl"
      ? "bottom-2 left-2 border-l border-b"
      : "bottom-2 right-2 border-r border-b";
  return <span className={`absolute h-4 w-4 ${c} border-white/65 pointer-events-none`} aria-hidden />;
}
