import { ArrowRight, Phone, FileText } from "@/components/primitives/Icons";
import { Reveal } from "@/components/primitives/Reveal";

export function CTABand() {
  return (
    <section className="relative py-20 md:py-24 bg-[color:var(--primary)] text-on-primary overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-25 pointer-events-none" aria-hidden />
      <div className="absolute inset-y-0 right-[-10%] w-[55%] pointer-events-none opacity-40" aria-hidden>
        <svg viewBox="0 0 600 400" fill="none" className="w-full h-full">
          <circle cx="300" cy="200" r="160" stroke="rgba(167,200,255,0.4)" strokeWidth="0.8" />
          <circle cx="300" cy="200" r="120" stroke="rgba(167,200,255,0.35)" strokeWidth="0.6" strokeDasharray="3 3" />
          <circle cx="300" cy="200" r="80" stroke="rgba(167,200,255,0.3)" strokeWidth="0.6" />
          <line x1="100" y1="200" x2="500" y2="200" stroke="rgba(167,200,255,0.3)" strokeWidth="0.5" />
          <line x1="300" y1="40" x2="300" y2="360" stroke="rgba(167,200,255,0.3)" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="container-arch relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <Reveal className="lg:col-span-7">
            <span className="cad-label !text-[color:var(--inverse-primary)]">
              For specifying architects &amp; contractors
            </span>
            <h2 className="h-display !text-on-primary text-[40px] md:text-[58px] mt-4">
              Spec us in.
              <br />
              <span className="italic font-medium !text-[color:var(--inverse-primary)]">
                We&apos;ll build the rest.
              </span>
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.1} className="lg:col-span-5">
            <p className="text-[15.5px] leading-[1.65] text-white/80 max-w-md mb-7">
              Three decades of established expertise. PE-stamped engineering on
              every commercial assembly. The supplier your reputation can sit on.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#quote"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-sm bg-white text-[color:var(--primary)] text-[12.5px] font-semibold uppercase tracking-[0.08em] hover:bg-[color:var(--container-low)] transition-colors"
              >
                Submit specs <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
              </a>
              <a
                href="tel:+18005436679"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-sm border border-white/30 text-white text-[12.5px] font-semibold uppercase tracking-[0.08em] hover:bg-white/10 transition-colors"
              >
                <Phone className="h-3.5 w-3.5" strokeWidth={1.75} /> Call our spec desk
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-sm border border-white/15 text-white/85 text-[12.5px] font-semibold uppercase tracking-[0.08em] hover:bg-white/5 transition-colors"
              >
                <FileText className="h-3.5 w-3.5" strokeWidth={1.75} /> Capabilities PDF
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
