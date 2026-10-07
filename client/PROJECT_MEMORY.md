# Mealiez Marketing Site - Project Memory

## Overview
This is a Next.js 16+ (App Router) marketing website for **Mealiez**, a digital management system for Indian messes and hostels. The site is designed to be highly interactive and visually appealing, using WebGL and advanced CSS animations.

## Tech Stack
- **Framework:** Next.js (version 16.2.10) with App Router (`src/app`)
- **UI Library:** React (version 19.2.4)
- **Styling:** CSS-in-JS (via styled JSX/inline styles) and standard CSS. Wait, it also might be using some Tailwind classes or custom CSS.
- **Animations & 3D:** 
  - `framer-motion` for complex UI animations
  - `lenis` for smooth scrolling
  - `three` & `ogl` for WebGL/3D background effects (e.g., PixelSnow, AuroraBg, LightRays).
- **Language:** TypeScript (`strict` mode likely enabled)

## Codebase Architecture
- `src/app/`: Contains all the Next.js routes. 
  - Main marketing pages: `/product`, `/pricing`, `/company`, `/customers`, `/solutions`, `/why-mealiez`, `/book-demo`, etc.
  - Content pages: `/blog`, `/guides`, `/reports`, `/resources`, `/reviews`.
  - Legal & Info: `/legal`, `/security`.
  - Authentication: `/(auth)` route group for login/signup flows.
- `src/components/`:
  - `ui/`: Reusable UI components (buttons, cards, interactive elements like `AnimatedCounter`, `BorderGlow`, `PixelSnow`, `LightRays`).
  - `ux/`: User experience specific components.
  - `ambient/`: Background effects like `AuroraBg`, `FloatingParticles`.
- `src/lib/`:
  - `hooks/`: Custom React hooks (e.g., `use-reveal.ts`).
  - `site-data/`: Hardcoded marketing data, FAQs, stats, etc.
  - `animations/` & utilities.

## Key Features & Notes
- The site makes heavy use of advanced WebGL background effects. Be mindful of performance when adding/modifying these (e.g., `PixelSnow` was recently removed from the hero section due to being too heavy).
- Smooth scrolling is implemented globally using `lenis`.
- The design system relies heavily on a brand color scheme centered around orange (`#EA580C`, `#F97316`).
- Intersection Observers are used for reveal-on-scroll animations (classes like `.rv-el`, `.rv-l`, `.rv-r`, `.rv-s`).
