---
name: Midnight Sovereign
colors:
  surface: '#121413'
  surface-dim: '#121413'
  surface-bright: '#383a38'
  surface-container-lowest: '#0c0f0e'
  surface-container-low: '#1a1c1b'
  surface-container: '#1e201f'
  surface-container-high: '#282a29'
  surface-container-highest: '#333534'
  on-surface: '#e2e3e1'
  on-surface-variant: '#c4c6d2'
  inverse-surface: '#e2e3e1'
  inverse-on-surface: '#2f3130'
  outline: '#8e909c'
  outline-variant: '#444651'
  surface-tint: '#b2c5ff'
  primary: '#b2c5ff'
  on-primary: '#042c71'
  primary-container: '#082e73'
  on-primary-container: '#7d99e3'
  inverse-primary: '#3f5ca2'
  secondary: '#e9c349'
  on-secondary: '#3c2f00'
  secondary-container: '#af8d11'
  on-secondary-container: '#342800'
  tertiary: '#b2c5ff'
  on-tertiary: '#192e5e'
  tertiary-container: '#1b3060'
  on-tertiary-container: '#8699d0'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dae2ff'
  primary-fixed-dim: '#b2c5ff'
  on-primary-fixed: '#001848'
  on-primary-fixed-variant: '#254388'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#dae2ff'
  tertiary-fixed-dim: '#b2c5ff'
  on-tertiary-fixed: '#001847'
  on-tertiary-fixed-variant: '#314576'
  background: '#121413'
  on-background: '#e2e3e1'
  surface-variant: '#333534'
typography:
  display-lg:
    fontFamily: Libre Caslon Text
    fontSize: 64px
    fontWeight: '400'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Libre Caslon Text
    fontSize: 40px
    fontWeight: '400'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
  headline-md:
    fontFamily: Libre Caslon Text
    fontSize: 24px
    fontWeight: '400'
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

This design system embodies an editorial, high-end aesthetic tailored for luxury, finance, or premium publishing. The personality is authoritative, sophisticated, and intentionally exclusive. 

The style utilizes a **Modern-Minimalist** approach with **Glassmorphism** accents. It relies on deep tonal layering rather than traditional shadows to create depth. By pairing high-contrast serif typography with a rich, dark navy foundation, the interface evokes the feeling of a digital prestige magazine. The emotional response should be one of calm confidence, precision, and timelessness.

## Colors

The palette is anchored by **Primary Navy**, used for primary surfaces and containers to establish a deep, immersive environment. **Royal Gold** serves as the singular accent color, reserved strictly for highlights, call-to-actions, and essential interactive states to maintain its premium impact.

**Soft Ivory** is the universal text color, ensuring high legibility against the dark backgrounds. **Deep Navy** is used for structural elements and nested containers to create subtle hierarchy through tonal shifts rather than high-contrast borders.

## Typography

Typography follows an editorial hierarchy. **Libre Caslon Text** provides an authoritative, literary feel for all headings and display text. Its high-contrast strokes pair elegantly with the dark background.

**Inter** is utilized for body copy and UI labels to ensure maximum utility and readability. For labels and small UI elements, use increased letter spacing and uppercase styling to maintain the sophisticated "brand-mark" feel. All text defaults to **Soft Ivory**, with **Royal Gold** used sparingly for emphasized links or key data points.

## Layout & Spacing

The layout utilizes a **Fixed Grid** system for desktop (12 columns) and a fluid 4-column grid for mobile. Wide margins and generous gutters are essential to create a sense of "whitespace" and luxury, even in a dark interface.

Spacing follows an 8px rhythmic scale. Components should prioritize internal padding over external borders to allow the deep navy surfaces to breathe. On mobile, margins reduce significantly, but vertical stack spacing remains generous to avoid visual clutter.

## Elevation & Depth

This design system eschews traditional drop shadows in favor of **Tonal Layering** and **Subtle Outlines**. 

Depth is achieved by placing **Primary Navy** surfaces over a slightly darker **Background Navy** (#041635). Higher elevation levels (like modals or dropdowns) utilize a semi-transparent blur effect (Glassmorphism) with a 1px stroke of **Royal Gold** at 15% opacity to define the edges. This creates a "lit from within" effect that feels premium and modern.

## Shapes

Shapes are **Soft** and restrained. A small corner radius (4px to 8px) is applied to maintain a structured, professional appearance that leans toward the precision of print media. 

Buttons and input fields should never be pill-shaped; they should remain subtly rounded rectangles to preserve the architectural integrity of the design system.

## Components

### Buttons
Primary buttons use a solid **Royal Gold** fill with dark navy text for maximum contrast. Secondary buttons use a **Deep Navy** fill with a 1px **Royal Gold** border and Soft Ivory text.

### Inputs & Text Fields
Fields are styled with a **Deep Navy** background and a bottom-border only (2px) in **Soft Ivory**. Upon focus, the border transitions to **Royal Gold**.

### Cards
Cards do not use shadows. They are defined by a background shift to **Primary Navy** and a very thin (0.5px) border of **Soft Ivory** at 10% opacity.

### Navigation
The navigation bar should utilize a backdrop-filter (blur) with a 70% opacity **Primary Navy** fill, creating a glass-like transition as content scrolls beneath it.

### Accents
Use **Royal Gold** for progress bars, toggle switches in the 'on' state, and active navigation indicators. Keep these elements thin (2px) to maintain elegance.