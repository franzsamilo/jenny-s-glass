import Image from "next/image";
import { Quote } from "@/components/primitives/Icons";
import { Reveal } from "@/components/primitives/Reveal";

export function Testimonial() {
  return (
    <section className="relative py-24 md:py-32 bg-[color:var(--inverse-surface)] text-on-inverse overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-25 pointer-events-none" aria-hidden />
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(50% 60% at 90% 20%, rgba(167,200,255,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="container-arch relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-7">
            <span className="eyebrow !text-[color:var(--inverse-primary)]">F · Architect of Record</span>

            <div className="mt-8 flex items-start gap-5">
              <Quote className="h-10 w-10 md:h-12 md:w-12 shrink-0 text-[color:var(--inverse-primary)]" strokeWidth={1} />
              <blockquote
                className="text-[24px] md:text-[34px] leading-[1.25] font-medium text-white"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                <span className="italic">
                  We&apos;ve specified Jenny&apos;s on four towers and not one
                  curtain-wall change order on any of them.
                </span>
                <span className="text-white/80 not-italic">
                  {" "}
                  When the AOR sees their shop drawings, the room relaxes. That&apos;s the
                  reputation, distilled.
                </span>
              </blockquote>
            </div>

            <div className="mt-10 flex items-center gap-5 pl-15 md:pl-17">
              <div className="relative h-14 w-14 rounded-full overflow-hidden border border-white/15 shrink-0">
                <Image
                  src="https://images.unsplash.com/photo-1573497019418-b400bb3ab074?auto=format&fit=crop&w=200&q=80"
                  alt=""
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[16px] font-medium text-white leading-tight" style={{ fontFamily: "var(--font-serif)" }}>
                  Marisol Vance, AIA
                </span>
                <span className="cad-label !text-white/55">
                  Principal · Foreman &amp; Vance Architects
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.15} className="lg:col-span-5">
            <div className="rounded-sm border border-white/12 bg-white/[0.03] p-7 md:p-8 backdrop-blur-sm">
              <span className="cad-label !text-[color:var(--inverse-primary)]">
                Foreman &amp; Vance · since 2014
              </span>
              <div className="grid grid-cols-2 gap-6 mt-7">
                {[
                  { v: "4", l: "Towers delivered" },
                  { v: "0", l: "Curtain-wall change orders" },
                  { v: "92K", l: "Sq ft of unitised façade" },
                  { v: "11 yr", l: "Active partnership" },
                ].map((m) => (
                  <div key={m.l} className="flex flex-col gap-1.5">
                    <span
                      className="text-[34px] leading-none font-semibold text-white tracking-tight"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      {m.v}
                    </span>
                    <span className="text-[12px] text-white/65">{m.l}</span>
                  </div>
                ))}
              </div>
              <div className="mt-7 pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="cad-label !text-white/55">Reference available on request</span>
                <span className="cad-label !text-[color:var(--inverse-primary)]">→ +44 contacts</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
