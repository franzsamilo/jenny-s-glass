import { ArrowRight, Phone, MessageCircle } from "@/components/primitives/Icons";
import { Reveal } from "@/components/primitives/Reveal";
import { Eyebrow } from "@/components/primitives/Marks";
import { business } from "@/lib/data";

export function CTABand() {
  return (
    <section className="relative section-y bg-[color:var(--navy)] text-on-navy overflow-hidden">
      <div className="absolute inset-0 grid-faint opacity-70 pointer-events-none" aria-hidden />
      {/* faint stamp ring */}
      <div className="absolute -right-16 top-1/2 -translate-y-1/2 pointer-events-none opacity-[0.12] hidden md:block" aria-hidden>
        <div className="rounded-full border-2 border-[color:var(--brass-bright)]" style={{ width: 360, height: 360 }} />
        <div className="absolute inset-6 rounded-full border border-[color:var(--brass-bright)]" />
      </div>

      <div className="container-page relative grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
        <Reveal>
          <Eyebrow brass rule>Ready when you are</Eyebrow>
          <h2 className="display display-lg !text-[color:var(--on-navy)] mt-5">
            Get a quote — and
            <br />
            someone to call after.
          </h2>
        </Reveal>
        <Reveal direction="up" delay={0.1}>
          <p className="text-[16px] leading-relaxed text-white/75 max-w-md mb-7">
            Tell us what you need and we&apos;ll send a quotation. Buy from a real,
            licensed store in {business.region} — and keep someone accountable long
            after the job is done.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#quote" className="btn btn-brass">
              Get a quote <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </a>
            <a href={business.phoneHref} className="btn btn-ghost-light">
              <Phone className="h-4 w-4" strokeWidth={1.75} /> Call
            </a>
            <a href={business.messengerHref} target="_blank" rel="noopener noreferrer" className="btn btn-ghost-light">
              <MessageCircle className="h-4 w-4" strokeWidth={1.75} /> Message
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
