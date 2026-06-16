---
name: Trust & Heritage
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf2'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fb'
  on-surface: '#111c2d'
  on-surface-variant: '#43474f'
  inverse-surface: '#263143'
  inverse-on-surface: '#ecf1ff'
  outline: '#737780'
  outline-variant: '#c3c6d1'
  surface-tint: '#3a5f94'
  primary: '#001e40'
  on-primary: '#ffffff'
  primary-container: '#003366'
  on-primary-container: '#799dd6'
  inverse-primary: '#a7c8ff'
  secondary: '#505f76'
  on-secondary: '#ffffff'
  secondary-container: '#d0e1fb'
  on-secondary-container: '#54647a'
  tertiary: '#1e1e1c'
  on-tertiary: '#ffffff'
  tertiary-container: '#333331'
  on-tertiary-container: '#9d9b98'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d5e3ff'
  primary-fixed-dim: '#a7c8ff'
  on-primary-fixed: '#001b3c'
  on-primary-fixed-variant: '#1f477b'
  secondary-fixed: '#d3e4fe'
  secondary-fixed-dim: '#b7c8e1'
  on-secondary-fixed: '#0b1c30'
  on-secondary-fixed-variant: '#38485d'
  tertiary-fixed: '#e5e2df'
  tertiary-fixed-dim: '#c8c6c3'
  on-tertiary-fixed: '#1c1c1a'
  on-tertiary-fixed-variant: '#474745'
  background: '#f9f9ff'
  on-background: '#111c2d'
  surface-variant: '#d8e3fb'
typography:
  headline-lg:
    fontFamily: Source Serif 4
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Source Serif 4
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Source Serif 4
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Source Serif 4
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style

The design system is rooted in the concepts of **longevity, precision, and architectural integrity**. It targets commercial contractors, architects, and high-end residential clients who value established expertise over fleeting trends. 

The visual style is **Corporate / Modern with a Traditional tilt**, leveraging a "structured" aesthetic. It draws inspiration from blueprint clarity and the physical strength of aluminum and glass. The UI should feel grounded and expensive, avoiding excessive playfulness in favor of a poised, authoritative presence that evokes an emotional response of security and professional reliability.

## Colors

This design system utilizes a high-contrast palette to signify structural strength and clarity. 

- **Primary (Deep Navy):** Extracted from the core of the logo, this represents stability and heritage. Use this for primary actions and key structural headers.
- **Secondary (Soft Slate):** A muted metallic blue-grey that echoes aluminum framing. It provides a sophisticated bridge between the deep primary and the light backgrounds.
- **Tertiary (Warm White):** A bone-toned off-white used for backgrounds to avoid the clinical feel of pure white, adding a sense of "premium paper" quality.
- **Neutral (Midnight):** Used for body text and deep borders to ensure maximum legibility and weight.

## Typography

The typography strategy balances the **authority of a serif** with the **efficiency of a sans-serif**.

- **Headlines:** Source Serif 4 is used to imply tradition and scholarly expertise. High-level headers should utilize tighter letter-spacing to feel more like a masthead.
- **Body & UI:** Inter provides a neutral, utilitarian engine for technical data and long-form reading. 
- **Labels:** Small labels and captions should be set in Inter with increased letter spacing and uppercase styling to mimic architectural drawing annotations.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy on desktop to maintain a sense of containment and order. 

- **Grid:** A 12-column system with substantial 24px gutters. Elements should align strictly to the vertical rhythm to reinforce the concept of "built" precision.
- **Rhythm:** Use an 8px base unit. Larger sections of content should be separated by significant vertical whitespace (64px+) to allow the brand to "breathe" and appear unhurried.
- **Mobile:** Transition to a 4-column fluid layout with reduced margins, ensuring that headline sizes scale down to maintain readability without overwhelming the viewport.

## Elevation & Depth

This design system avoids flashy trends like glassmorphism. Instead, it uses **Tonal Layers** and **Precise Outlines** to create hierarchy.

- **Surface Levels:** Use subtle shifts in background color (Warm White to a slightly darker "Stone" grey) to separate sections.
- **Shadows:** Use very soft, long-offset shadows only for high-priority floating elements like modals or primary dropdowns. They should feel like "ambient light in an office," not a digital effect.
- **Borders:** Utilize 1px solid borders in Soft Slate for cards and input fields. This mimics the thin profile of aluminum extrusions.

## Shapes

The shape language is **Structural and Controlled**. 

A "Soft" roundedness (0.25rem) is the standard. This small radius takes the "edge" off the design, making it feel modern and approachable, while maintaining the overall rectangular strength associated with glass panes and window frames. Avoid fully circular buttons or pill shapes, as they conflict with the architectural narrative.

## Components

### Buttons
Primary buttons use the Deep Navy background with Warm White text. They are rectangular with a 4px corner radius. Hover states should involve a subtle shift to a slightly lighter navy, rather than a color change.

### Input Fields
Fields should have a distinct 1px border. The label should sit above the field in uppercase Inter (Label-MD). Focus states should use a 2px Deep Navy border.

### Cards
Cards are the primary container for products and services. They should feature a 1px Soft Slate border and zero shadow. Imagery within cards should be "full-bleed" to the top and sides to emphasize the material being showcased.

### Data Tables
Given the nature of supply and logistics, tables are critical. Use "Zebra" striping with the Tertiary color and clear Deep Navy headers. Column dividers should be minimal or non-existent, relying on horizontal alignment for structure.

### Icons
Use thin-stroke, geometric icons. Avoid filled icons unless used as a status indicator. The icons should feel like technical symbols from a CAD drawing.