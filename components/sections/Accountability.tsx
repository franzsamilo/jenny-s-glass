import { Reveal } from "@/components/primitives/Reveal";
import { Eyebrow, Seal } from "@/components/primitives/Marks";
import { accountability } from "@/lib/data";

export function Accountability() {
  return (
    <section id="accountability" className="section-y bg-[color:var(--paper-2)] border-y border-steel-line">
      <div className="container-page grid lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-14 items-start">
        {/* statement panel (navy authority) */}
        <Reveal>
          <div className="framed relative overflow-hidden bg-[color:var(--navy)] text-on-navy p-8 md:p-10 lg:sticky lg:top-24">
            <div className="absolute inset-0 grid-faint opacity-60 pointer-events-none" aria-hidden />
            <div className="relative">
              <Eyebrow brass rule>Why Jennys</Eyebrow>
              <h2 className="display display-lg !text-[color:var(--on-navy)] mt-5">
                When the job&apos;s done, you&apos;ll still have a real store to call.
              </h2>
              <p className="mt-5 text-[15.5px] leading-relaxed text-white/75 max-w-md">
                Plenty of work in this trade is done by people who disappear once
                they&apos;re paid. Jennys is a licensed store with a counter,
                receipts, and a name to protect — so the customer always has someone
                real to hold to the work.
              </p>

              <div className="mt-9 flex items-center gap-5">
                <div className="grid place-items-center rounded-full bg-[color:var(--navy-deep)]" style={{ width: 128, height: 128 }}>
                  <Seal top="We answer for" main="the work" bottom={`Est. 2017`} />
                </div>
                <p className="text-[13.5px] leading-relaxed text-white/60 max-w-[14rem]">
                  It&apos;s the reason our regulars keep coming back — not the cheapest
                  yard, the one that stands behind what it sells.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* the four points */}
        <div className="grid sm:grid-cols-2 gap-4">
          {accountability.map((a, i) => (
            <Reveal key={a.id} delay={0.06 * i}>
              <article className="framed framed-hover h-full p-6">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--r)] border border-steel-line text-navy">
                  <a.icon className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <h3 className="display mt-4" style={{ fontSize: 19, lineHeight: 1.2 }}>{a.title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">{a.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
