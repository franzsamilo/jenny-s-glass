import { Reveal } from "@/components/primitives/Reveal";
import { Counter } from "@/components/primitives/Counter";
import { Check } from "@/components/primitives/Icons";
import { business, proofPoints } from "@/lib/data";

export function Proof() {
  return (
    <section className="pb-4">
      <div className="container-page">
        <Reveal>
          <div className="framed framed-strong overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-steel-line">
              <Stat value={`Est. ${business.estYear}`} label="Founded in the Province of Antique" />
              <Stat
                value={<><Counter to={business.years} duration={1.4} /></>}
                suffix="years"
                label="Serving north to south — mostly the south"
              />
              <Stat value="Cash + OR" label="Official receipt on every order" />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2 px-5 py-4 border-t border-steel-line bg-[color:var(--paper-2)]">
              {proofPoints.map((p) => (
                <span key={p} className="inline-flex items-center gap-2 text-[13px] text-ink-soft">
                  <Check className="h-3.5 w-3.5 text-blue" strokeWidth={2.5} />
                  {p}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Stat({ value, suffix, label }: { value: React.ReactNode; suffix?: string; label: string }) {
  return (
    <div className="px-6 py-8 text-center flex flex-col items-center gap-2">
      <div className="display flex items-baseline gap-2" style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", color: "var(--navy)" }}>
        {value}
        {suffix && <span className="mono-data text-blue" style={{ fontSize: 14, letterSpacing: "0.08em" }}>{suffix}</span>}
      </div>
      <p className="text-[13.5px] text-ink-soft max-w-[15rem]">{label}</p>
    </div>
  );
}
