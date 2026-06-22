import { Reveal } from "@/components/primitives/Reveal";
import { Eyebrow } from "@/components/primitives/Marks";
import { MapPin, Clock, Phone, MessageCircle, ArrowRight } from "@/components/primitives/Icons";
import { business } from "@/lib/data";

export function FindUs() {
  const rows = [
    { icon: MapPin, label: "The store", value: business.addressLine, note: business.area },
    { icon: Clock, label: "Open", value: business.hours, note: business.days + " · closed Sunday" },
    { icon: Phone, label: "Call", value: business.phone, note: `or ${business.phoneAlt}`, href: business.phoneHref },
    { icon: MessageCircle, label: "Messenger", value: business.messenger, href: business.messengerHref },
  ];

  return (
    <section id="find-us" className="section-y bg-[color:var(--paper-2)] border-t border-steel-line">
      <div className="container-page grid lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
        <div className="flex flex-col">
          <Reveal><Eyebrow blue rule>Find us</Eyebrow></Reveal>
          <Reveal delay={0.06}>
            <h2 className="display display-lg mt-5">Come by the store, or message first.</h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 text-[16px] leading-relaxed text-ink-soft max-w-md">
              Most people message to check stock before coming in. Walk-ins are
              welcome too — there&apos;s a real counter and real people behind it.
            </p>
          </Reveal>

          <div className="mt-8 flex flex-col gap-3">
            {rows.filter((r) => business.phone || r.label !== "Call").map((r) => {
              const inner = (
                <>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--r)] border border-steel-line text-navy shrink-0">
                    <r.icon className="h-4.5 w-4.5" strokeWidth={1.5} />
                  </span>
                  <span className="flex flex-col">
                    <span className="field-label">{r.label}</span>
                    <span className="text-[15px] font-medium text-ink">{r.value}</span>
                    {r.note && <span className="text-[13px] text-steel-dark mt-0.5">{r.note}</span>}
                  </span>
                  {r.href && <ArrowRight className="h-4 w-4 text-steel ml-auto self-center" />}
                </>
              );
              return r.href ? (
                <a key={r.label} href={r.href} target={r.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="framed framed-hover flex items-center gap-4 p-4">
                  {inner}
                </a>
              ) : (
                <div key={r.label} className="framed flex items-center gap-4 p-4">{inner}</div>
              );
            })}
          </div>
        </div>

        {/* service-area panel (not a fake map) */}
        <Reveal direction="left" delay={0.1}>
          <div className="framed framed-strong relative overflow-hidden h-full min-h-[320px] grid place-items-center">
            <div className="absolute inset-0 grid-faint opacity-100 pointer-events-none" style={{ backgroundColor: "var(--navy-deep)" }} aria-hidden />
            <div className="relative text-center px-8 py-12 text-on-navy">
              <MapPin className="h-7 w-7 mx-auto text-[color:var(--blue-bright)]" strokeWidth={1.5} />
              <p className="mono-data text-[11px] tracking-[0.18em] uppercase text-white/60 mt-4">Service area</p>
              <p className="display !text-[color:var(--on-navy)] mt-2" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>
                {business.region}
              </p>
              <p className="mono-data text-[12px] tracking-[0.16em] uppercase text-white/55 mt-3">North ⟷ South · mostly the south</p>
              <p className="text-[13.5px] text-white/65 mt-5 max-w-xs mx-auto">
                Delivery across the province (being restored) — minimum ₱20,000, scheduled by area.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
