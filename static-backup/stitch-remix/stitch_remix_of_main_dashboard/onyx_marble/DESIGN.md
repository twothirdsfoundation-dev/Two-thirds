---
name: Onyx & Marble
colors:
  surface: '#fbf9f9'
  surface-dim: '#dbdad9'
  surface-bright: '#fbf9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#e9e8e7'
  surface-container-highest: '#e3e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#4c4546'
  inverse-surface: '#303031'
  inverse-on-surface: '#f2f0f0'
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
  background: '#fbf9f9'
  on-background: '#1b1c1c'
  surface-variant: '#e3e2e2'
typography:
  display:
    fontFamily: Noto Serif
    fontSize: 48px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h1:
    fontFamily: Noto Serif
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.2'
  h2:
    fontFamily: Noto Serif
    fontSize: 24px
    fontWeight: '400'
    lineHeight: '1.3'
  h3:
    fontFamily: Noto Serif
    fontSize: 20px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin: 48px
  section-padding: 96px
---

## Brand & Style

This design system is rooted in the principles of architectural minimalism and stoicism. It prioritizes clarity over decoration, evoking a sense of permanence and discipline. The aesthetic is "High-Contrast Minimalism"—a style that relies on the tension between pure black and crisp white to create visual interest. 

The target audience values focus and high-end craftsmanship. The UI should evoke an emotional response of quiet confidence and professional authority. There are no decorative flourishes; every element exists for a functional purpose, organized within a rigid, logical structure that mirrors the stillness of an empty gallery or a Brutalist stone monument.

## Colors

The palette is strictly monochromatic. It utilizes "Obsidian" (Pure Black) for primary actions and headings to anchor the eye, and "Carrara" (Pure White) for the primary canvas to provide expansive whitespace. 

A scale of architectural grays provides the only tonal depth permitted. These grays are used to establish hierarchy in secondary text and subtle UI borders. In this system, color is never used to convey emotion—only to define structure and state. High contrast is the primary tool for accessibility and navigation.

## Typography

The typographic pairing balances the traditional authority of a serif with the modern precision of a sans-serif. 

**Noto Serif** is reserved for headlines and editorial moments. It should be typeset with ample leading and slightly tightened letter-spacing for a sophisticated, "ink-on-paper" feel. 

**Inter** handles all functional and body copy. It must be set with generous line heights to ensure the "airy" feel requested. All labels and auxiliary information should be set in Inter, often using uppercase with increased tracking to create a disciplined, technical look.

## Layout & Spacing

This design system employs a **Fixed Grid** model for desktop and a fluid model for smaller viewports. The layout is governed by an 8px base unit, ensuring all elements align to a predictable rhythm.

Whitespace is treated as a physical material. Do not crowd elements; use large section paddings to separate different content blocks. The layout should feel "airy" but grounded by strong vertical and horizontal axes. Margins are intentionally wide to draw the eye toward the center, creating a gallery-like focus on the content.

## Elevation & Depth

Depth is conveyed through **Tonal Layers** and **Bold Borders**, never through shadows or blurs. 

1. **Flat Hierarchy:** Elements are positioned on the same plane, separated by 1px borders in architectural gray or pure black.
2. **Inversion:** To show focus or "elevation," a container may switch from a white background to a black background with white text.
3. **Ghost Outlines:** Secondary containers use a subtle #E5E5E5 border. Active or focused states use a 1.5px black border.
4. **No Shadows:** Shadows are strictly prohibited. The system relies on the interplay of solid fills and hairlines to define edges.

## Shapes

The shape language is uncompromisingly linear. All containers, buttons, and input fields utilize **Sharp (0px) corners**. This reinforces the architectural and stoic nature of the system. 

Circles are permitted only for specific functional icons or user avatars where a square would feel unnatural, but even then, a square frame is preferred for the sake of system consistency. Lines should be thin (1px) unless highlighting a selected state, where they may increase to 2px.

## Components

### Buttons
Primary buttons are solid Obsidian (Black) with white text. Secondary buttons are Ghost style (White background, 1px Gray border, Black text). All buttons are rectangular with no corner radius. Hover states involve a simple tonal shift (e.g., Black to Dark Gray).

### Input Fields
Inputs are defined by a 1px bottom-border only, or a full 1px light gray rectangular border. Labels sit above the field in uppercase Inter. The focus state is a 1px solid Black border.

### Cards
Cards are flat containers with no shadow. They are defined either by a 1px light gray border or a very subtle gray background fill (#F5F5F5) against the white canvas.

### Chips & Tags
Tags are strictly rectangular. Use black text on a light gray background. Do not use icons inside tags unless they are essential for status.

### Lists
Lists are separated by thin horizontal rules. There is no zebra-striping. Interactivity in list items is indicated by a background color change to a very light gray (#F9F9F9) or by the text shifting from gray to black.

### Additional Components
- **Dividers:** 1px horizontal lines used frequently to separate sections.
- **Breadcrumbs:** Small uppercase Inter text separated by forward slashes (/).