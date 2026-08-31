---
name: Septembral Sovereign
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1b1b1b'
  on-surface-variant: '#4c4546'
  inverse-surface: '#303030'
  inverse-on-surface: '#f1f1f1'
  outline: '#7e7576'
  outline-variant: '#cfc4c5'
  surface-tint: '#5e5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1b1b'
  on-primary-container: '#848484'
  inverse-primary: '#c6c6c6'
  secondary: '#5d5f5f'
  on-secondary: '#ffffff'
  secondary-container: '#dfe0e0'
  on-secondary-container: '#616363'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1b1b1b'
  on-tertiary-container: '#848484'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c6'
  on-primary-fixed: '#1b1b1b'
  on-primary-fixed-variant: '#474747'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c6'
  on-tertiary-fixed: '#1b1b1b'
  on-tertiary-fixed-variant: '#474747'
  background: '#f9f9f9'
  on-background: '#1b1b1b'
  surface-variant: '#e2e2e2'
typography:
  display-lg:
    fontFamily: IBM Plex Sans Arabic
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 60px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: IBM Plex Sans Arabic
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg:
    fontFamily: IBM Plex Sans Arabic
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: IBM Plex Sans Arabic
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: IBM Plex Sans Arabic
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: IBM Plex Sans Arabic
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: IBM Plex Sans Arabic
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  caption:
    fontFamily: IBM Plex Sans Arabic
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
spacing:
  base: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style
The design system embodies prestige, authority, and modern governance. It is built on a foundation of absolute clarity and high-contrast minimalism, reflecting a state-level commitment to transparency and strength. The aesthetic draws from **Modern Minimalism** with a focus on archival quality and timelessness.

The user experience should feel formal but efficient. By removing the distraction of color, the design system forces focus onto the message "عزنا بسبتمبر" and the structural integrity of the information. It targets a citizenry looking for reliability, using generous whitespace to signify importance and breathing room in official communications.

## Colors
The palette is strictly achromatic to maintain a sense of formal prestige.

- **Primary Black (#000000):** Used for primary text, structural borders, and high-impact call-to-actions. It represents authority.
- **Pure White (#FFFFFF):** The primary background color, providing a clean and "unblemished" canvas for official content.
- **Surface Grey (#F5F5F5):** Used for subtle section nesting, disabled states, or secondary container backgrounds to provide depth without introducing color.
- **Elevated Black (#121212):** Used for dark-mode-like surfaces or heavy footers where a slight softening of absolute black is required for legibility.

## Typography
This design system utilizes **IBM Plex Sans Arabic** for its systematic, professional, and balanced characteristics. It bridges the gap between traditional Arabic calligraphy and modern engineering.

- **Headlines:** Should be set with tight leading and slight negative letter spacing to feel impactful and authoritative. 
- **Alignment:** All text must be Right-to-Left (RTL) aligned.
- **Hierarchy:** Use font weight (Bold/SemiBold) rather than color to distinguish hierarchy. Ensure that the "عزنا بسبتمبر" slogan is always rendered in the `display-lg` or `headline-lg` tier.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy for desktop to maintain the "official document" feel, transitioning to a fluid model for mobile devices.

- **Grid:** A 12-column grid for desktop with wide 64px margins to emphasize the content's importance.
- **Rhythm:** Use an 8px baseline grid. All vertical spacing between components should be increments of 8px (16, 24, 32, 48, 64).
- **Whitespace:** Use "generous" padding (minimum 48px) between major sections to prevent the UI from feeling crowded or bureaucratic.

## Elevation & Depth
Depth in this design system is achieved through **Tonal Layers** and **Low-Contrast Outlines** rather than traditional shadows.

- **Stacking:** Use `#F5F5F5` (Grey) for backdrops and `#FFFFFF` (White) for foreground cards to create a subtle lift.
- **Borders:** Define containers with 1px solid `#000000` for high importance or 1px solid `#E0E0E0` (light grey) for secondary information.
- **Shadows:** If shadows are absolutely necessary for functional overlays (like modals), use a 0-blur, "hard" shadow (e.g., 4px 4px 0px #000000) to maintain the brutalist/modernist aesthetic.

## Shapes
The shape language is **Strictly Sharp (0px)**. 

Every UI element—from buttons to input fields to containers—must have square corners. This architectural choice communicates stability, precision, and the "unbending" nature of formal governmental institutions. Avoid any rounded corners or circular elements unless they are specifically functional (like a radio button).

## Components
- **Buttons:** Primary buttons are solid `#000000` with `#FFFFFF` text. Secondary buttons are `#FFFFFF` with a 1px `#000000` border. No gradients.
- **Input Fields:** 1px black border, sharp corners. Labels should be placed above the field in `label-md` weight.
- **Chips/Tags:** Use a light grey `#F5F5F5` background with black text for secondary categories, or solid black for active filters.
- **Lists:** Separated by thin 1px horizontal lines (`#E0E0E0`). Use ample vertical padding (16px+) for each list item.
- **Cards:** White background with a 1px black border. For "featured" content, use a solid black header bar.
- **Official Seal:** Any governmental seals or the "عزنا بسبتمبر" logo should be rendered in high-fidelity vector format, strictly in black or white.