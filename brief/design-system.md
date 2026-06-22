# Grounded Trade Authority (synthesized)
### applied to — Jennys Glass & Aluminum

> A one-off archetype synthesized via `archetype-synthesizer` because the brief fit
> none of the three built poles cleanly. It is a **grounded, vernacular variant of
> the reserved "Institutional Authority" slot** — trust-via-credentials for a
> family-run local trade supplier, not the museum/finance flavor. If it recurs on
> another trade/supplier brief, graduate it into the catalog (see end).
>
> This file is both the archetype spec **and** the applied design system (Step 3
> bindings are bound to Jennys actual tokens). It supersedes `brief/DESIGN.md`
> (the prior "Trust & Heritage" system, built on the generic brief).

---

## Brief it serves
- **Axes:** Warm 4 · Serious 7 · Dense 4 · Indie 4 · Analog 3 · Quiet 6
- **Trust:** high, **via legitimacy / credentials / accountability**
- **Keywords:** accountable · legitimate · established · family-run · grounded
- **NOT:** cold corporate gloss · salesy/discount · faceless big-box · stiff/clinical ·
  slick-futuristic · (must not state the permit-sharing mechanism)
- **Off-screen anchor:** the store counter — framed business permit on the wall,
  official receipts, a real person who knows the stock.

## References reverse-engineered
1. **An official stamped receipt / business permit** — the literal trust artifact.
   DNA: ruled/boxed forms, monospace numerals, a seal/stamp, document framing,
   numbers that matter (OR numbers, dates, "Est. 2017").
2. **A long-standing builders' / glass-&-aluminum merchant counter** — DNA:
   aluminum-extrusion hairline *frames*, labeled material bins, signage letterforms,
   a navy + steel + glass palette, clarity over decoration.
3. **A trusted family doctor's / established local institution's shingle** — DNA: a
   calm, confident wordmark, a serious-but-approachable face, muted trustworthy
   color, "been here for years" solidity.

**Shared DNA → the spine:** authority that comes from *being real and documented* —
the framed permit, the stamped receipt, the metal frame around the glass — rendered
warm because it's family-run, grounded and serious because it's a working trade.
Commit to one direction: **document + frame + stamp.** Not luxury polish, not corporate gloss.

---

## Typography — anchored to Serious 7 · Indie 4 · keywords (legitimate, established)
Three voices. No handwriting (would undercut authority); no editorial italic serif
(too precious); no pure cold grotesk (the NOT: cold).

| Role | Face | Why |
|---|---|---|
| **Display** (headers, the wordmark voice) | **Zilla Slab** (700/600) | Sturdy slab = stamped/official heading, "established," warm-but-serious. Rejected: condensed grotesk (too loud), italic serif (too lifestyle). |
| **Body** (reading, UI) | **IBM Plex Sans** (400/500/600) | Humanist sans = credible + warm + legible for Dense-4 content. Engineered, not corporate-cold. |
| **Credential data** (the legitimacy voice) | **IBM Plex Mono** (400/500) | Receipt/spec-sheet voice: "Est. 2017", OR-style labels, item codes, dimensions, PHP, eyebrows. Carries *legitimate/accountable* directly. Pairs by design with Plex Sans. |

- Display tightens slightly (letter-spacing −0.01em) for a masthead feel.
- Eyebrows/labels: IBM Plex Mono, uppercase, +0.08em tracking — the "annotation on a
  drawing / line on a form" device.
- All three are on Google Fonts → load via `next/font/google`.

## Color — anchored to trust-institutional (→ navy) · Warm 4 · Analog 3 · brand guardrail
Logic: **warm paper ground + navy authority + steel structure + one brass "stamp"
accent.** Monochrome discipline with a single warm accent kept rare (Quiet 6).

- **Paper** ground (not pure white — premium-document warmth): `#F5F1E8`, alt band `#ECE6D7`
- **Ink** (warm near-black, not pure black): `#211E1A`
- **Navy** (authority / primary — *from logo, VERIFY against logo file*): `#13294B`, hover `#1B3A66`
- **Steel** (aluminum neutral / structure): line `#C7CCD3` · mid `#8A93A0` · dark `#5A6470` (muted text)
- **Brass / Stamp** (the seal accent — rare, warm, "official/approved"): `#B5772E`
- **Alert** (reserved, sparing): `#A8301F`
- Glass nod: a faint cool top-edge highlight on framed cards — `rgba(255,255,255,.55)` — subtle, **not glassmorphism**.

Primary action = **navy fill**. Brass is accent only (eyebrows, the Est. seal, hover
underlines, the stamp moment) — never large fills, or it goes loud.

## Surfaces — anchored to Dense 4 · Indie 4 · Quiet 6 · the frame/document DNA
- **Radii:** `3px` default, `2px` small (inputs/badges), `0` for full-bleed material bands & ledger tables. **No pills** (conflict with the frame/pane language).
- **Borders = the signature primitive:** `1.5px` solid steel-line for the **Framed Pane** card; `1.5px` navy for emphasized/credential frames. **Letterhead rule** under section headers = a 1px steel line stacked over a 3px navy line.
- **Shadows:** near-absent. Hierarchy comes from the frame + tonal paper layers. One soft ambient navy shadow `0 8px 30px -12px rgba(19,41,75,.12)` **only** for true overlays (mobile nav, modal).
- **Density:** section padding `72–96px` desktop / `48px` mobile (denser than airy). Structural 12-col alignment. **Ledger tables** (ruled rows, mono tabular numerals, right-aligned PHP) for the material/service range and the buying-terms block.
- **Texture:** faint paper grain (~3–5% noise) optional; a recurring **framed-document / stamp** motif on proof blocks; the letterhead double-rule.

## Motion — Level 1 (calm end) · character "settled / weighted" (via `motion-system`)
- **Easing** `--ease-settle: cubic-bezier(.2,.7,.2,1)` (no overshoot, with weight); **durations** 220–320ms; functional transitions 160–200ms.
- Section reveals: fade + 12px rise, subtle stagger, fire fast from a visible-enough state (IntersectionObserver).
- Count-up on the proof stat ("8 years" / "Est. 2017") — purposeful, reinforces legitimacy.
- Framed-Pane hover: weighted lift `translateY(-2px)` + border steel→navy, 200ms. No bounce.
- **Signature moment:** the credential block's brass **seal presses in once** on enter (scale 1.06→1 + opacity, ~180ms firm ease) — the single flourish, justified by the legitimacy spine.
- **Floor (non-negotiable):** `prefers-reduced-motion: reduce` disables all decorative motion (static stamped end-state); animate only `transform`/`opacity`; nothing blocks the "Get a quote" CTA. No parallax-heavy, no scroll-jacking, no WebGL.

## Imagery — anchored to "what this is NOT"
Documentary, natural-light photography of the **real** store/yard, materials (glass
edges, aluminum profiles, roll-up slats), hands at work, finished installs, the
framed permit / official receipt. **Hands + product + place over corporate faces.**
Material close-ups double as section dividers / full-bleed bands.
**Fallback when photos are missing** (they're TBD from discovery): the graphic
language — stamp/seal, letterhead rules, spec-sheet tables, material swatches, mono
labels. **Never** stock office-smiles, abstract flat illustration, or glossy 3D renders.

## Voice — anchored to the audience emotional state (wary of accountability → reassured)
Plain, declarative, grounded, specific, quietly confident. **Proof-first** — years,
permits, receipts, "someone real to call." No hype, no exclamation, no salesy
adjectives; numbers do the talking. Warm in the family/people moments, matter-of-fact
in the terms. Local Filipino register, Messenger-friendly.
- Opener: *"Glass & aluminum for Antique — supplied, fabricated, and installed by a real, licensed store since 2017."*
- Accountability: *"When the job's done, you'll still have a real store to call. Fully permitted. Official receipts. Eight years at the same counter."*
- Terms: *"50% to start, balance within a week. Cash. Subject to approval."*
- CTA: *"Get a quote — call or message us."*

---

## CSS API (target tokens — the rebuild updates `app/globals.css` to these)
```css
:root {
  /* color */
  --paper: #F5F1E8;        --paper-2: #ECE6D7;
  --ink: #211E1A;
  --navy: #13294B;         --navy-hover: #1B3A66;   --on-navy: #F5F1E8;
  --steel-line: #C7CCD3;   --steel: #8A93A0;        --steel-dark: #5A6470;
  --brass: #B5772E;
  --alert: #A8301F;

  /* type */
  --font-display: "Zilla Slab", Georgia, serif;
  --font-body: "IBM Plex Sans", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;

  /* shape + depth */
  --r: 3px; --r-sm: 2px;
  --border: 1.5px solid var(--steel-line);
  --border-strong: 1.5px solid var(--navy);
  --shadow-overlay: 0 8px 30px -12px rgba(19,41,75,.12);

  /* motion */
  --ease-settle: cubic-bezier(.2,.7,.2,1);
  --dur: 260ms; --dur-fast: 180ms;

  /* rhythm */
  --section-y: 88px; --gutter: 24px; --container: 1200px;
}
@media (max-width: 768px) { :root { --section-y: 48px; } }
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation: none !important; transition: none !important; }
}
```

## Component primitives (names the rebuild will use)
- **Framed Pane** — the aluminum-frame card: `--border`, `--r`, paper surface, no shadow, faint glass top-highlight; hover lifts 2px + border→navy.
- **Document Header** — slab display title + mono uppercase eyebrow + letterhead double-rule.
- **Credential Seal** — the brass stamp ("Est. 2017", "Licensed", "Official Receipts") with the press-in motion; the proof device.
- **Ledger Table** — ruled rows, mono tabular numerals, right-aligned PHP; for the range + buying terms.
- **Buttons** — primary: navy fill / paper text / `--r` / weighted hover to `--navy-hover` (no color change); secondary: 1.5px navy outline on paper; link: brass underline on hover. Rectangular, small radius, no pills.
- **Inputs** — 1.5px steel border, mono uppercase label above, focus = 2px navy ring (receipt/form-field feel).
- **Material Band** — full-bleed (radius 0) photo/color band between major sections, mono label.

---

## Maps to the section plan → what to rebuild
The existing sections were built for the old brief/order. Remap (don't reuse as-is):

| Section plan (new) | Existing component | Action |
|---|---|---|
| 1 Opener — accountable established yard | `Hero` | **Rewrite** copy+style: accountability + "licensed since 2017" + call/message CTA |
| (proof strip) | `TrustBar` | **Restyle** as Credential Seals (licensed · receipts · 8 yrs · whole province) |
| 2 What we do — supply/fabricate/install | `Categories` + `Specs` | **Merge** → Framed-Pane grid + a materials Ledger |
| 3 Someone to answer for the work | `Difference` | **Rewrite** as THE accountability block (legal framing) |
| 4 Built by a family, still here | — | **New** section (origin + resilience, tasteful) |
| 5 How buying works | `Process` | **Rebuild** as a Ledger (terms · cash · delivery days · hours) |
| (proof number) | `Stats` | **Keep**, restyle count-up (Est. 2017 / 8 yrs) |
| 6 Get a quote | `QuoteForm` | **Keep**, restyle as receipt/form-fields; the spine |
| (quote band) | `CTABand` | **Keep**, "Get a quote — call or message" |
| 7 Find us | `Footer` (+ maybe new) | **Restyle**; store/hours/area/Messenger prominent |
| Proof / recent work | `Projects`, `Testimonial` | **Defer** — no photos/testimonials on hand (asset top-up) |

Also: `Header`/`Logo`/`Footer` restyle to new tokens; **Messenger link prominent**;
PHP currency; mobile-first. `primitives/BlueprintGrid`, `Parallax`, `Marquee` → audit
for the "not slick-futuristic" cap (likely drop Parallax/Marquee; keep Reveal/Counter/Annotation).

## Graduation
First synthesis → lives in the project. If a second trade/supplier brief reaches for
it, clean this into a `grounded-trade-authority-typography` + `-surfaces` pair in
`~/.claude/skills/`, add a catalog row to `app-context-to-design-system`, and promote
the reserved **Institutional Authority** slot with this grounded variant noted.
