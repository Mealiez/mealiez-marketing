# Mealiez Marketing Website

> **Mealiez** is India's mess management platform — an operating system for modern messes, hostel canteens, industrial cafeterias, and food service businesses.  
> This repository contains the **marketing website**: a high-performance Next.js application designed for lead generation, trust building, and conversion.

---

## Table of Contents

- [Architecture Overview](#architecture-overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Routes & Pages](#routes--pages)
- [Component Architecture](#component-architecture)
- [Design System](#design-system)
- [Animation System](#animation-system)
- [Data Layer](#data-layer)
- [SEO & Metadata](#seo--metadata)
- [Performance Optimisations](#performance-optimisations)
- [Build & Deployment](#build--deployment)
- [Development](#development)

---

## Architecture Overview

```
mealiez-marketing/
├── client/                     # Next.js 16 application (App Router)
│   ├── public/                 # Static assets (images, fonts, etc.)
│   ├── src/
│   │   ├── app/                # App Router — file-based routing
│   │   │   ├── (auth)/         # Auth route group (no header/footer)
│   │   │   ├── product/        # Product pages (+ dynamic [slug])
│   │   │   ├── solutions/      # Solution pages (+ dynamic [slug])
│   │   │   ├── blog/           # Blog listing
│   │   │   ├── book-demo/      # Demo booking funnel
│   │   │   ├── pricing/        # Pricing and plans
│   │   │   ├── resources/      # Resource centre, calculators
│   │   │   ├── ...             # Other top-level routes
│   │   │   ├── layout.tsx      # Root layout (fonts, header, footer)
│   │   │   ├── page.tsx        # Homepage (hero, features, etc.)
│   │   │   ├── sitemap.ts      # Dynamic XML sitemap
│   │   │   └── robots.ts       # robots.txt
│   │   ├── components/         # Shared React components
│   │   │   ├── ambient/        # Background effects (aurora, particles)
│   │   │   ├── loaders/        # Loading states (page, skeleton, progress)
│   │   │   ├── performance/    # Performance utilities (lazy-load)
│   │   │   ├── ui/             # Design system primitives
│   │   │   └── ux/             # UX utilities (transitions, scroll, toast)
│   │   └── lib/                # Shared logic and configuration
│   ├── next.config.ts          # Next.js configuration
│   ├── tsconfig.json           # TypeScript configuration
│   └── package.json            # Dependencies and scripts
├── prd.md                      # Product Requirements Document
├── techStack.md                # Technology stack reference
├── websiteinfo.md              # Sitemap and navigation architecture
└── README.md                   # You are here
```

### Application Architecture Pattern

The application follows a **hybrid server-client architecture**:

| Layer | Rendering Strategy | Purpose |
|---|---|---|
| **Root Layout** (`layout.tsx`) | Server Component | Font loading, metadata, SEO, header/footer |
| **Content Pages** (`/product/*`, `/solutions/*`) | Client Component | Interactive content, animations, calculators |
| **Client Shell** (`client-shell.tsx`) | Client Component Wrapper | Aggregates all `ssr:false` dynamic imports |
| **Data** (`lib/site-data.ts`) | Static Module | Product/solution metadata, navigation config |

**Key Architectural Decisions:**

1. **Client Shell Pattern**: All components requiring `dynamic({ ssr: false })` are consolidated in `client-shell.tsx`, keeping the root layout as a pure Server Component (Next.js 15+ requirement).

2. **Route Groups**: `(auth)/` is isolated from the main layout — no header, footer, or ambient effects on auth pages.

3. **Dynamic Routes**: Both `product/[slug]` and `solutions/[slug]` use the same `site-data.ts` data source, enabling reusable page templates with data-driven content.

4. **Inline Styles over CSS Modules**: The project uses inline `style` props and page-scoped `<style>` tags rather than CSS Modules, enabling dynamic, conditional styling without style extraction overhead. The global `globals.css` provides CSS custom properties, layout utilities, and keyframe animations.

---

## Tech Stack

### Core Framework

| Technology | Version | Purpose |
|---|---|---|
| **Next.js** | 16.2.10 | React framework (App Router, Turbopack) |
| **React** | 19.2.4 | UI library |
| **TypeScript** | 5.x | Type safety |

### Styling & UI

| Technology | Purpose |
|---|---|
| **Tailwind CSS v4** | Utility-first CSS (via PostCSS) |
| **Shadcn UI** | Component primitives (adapted) |
| **Custom CSS Variables** | 200+ design tokens in `globals.css` |

### Animation

| Technology | Purpose |
|---|---|
| **Framer Motion** | Component animations, page transitions, gestures |
| **Lenis** | Smooth scroll (requestIdleCallback-initiated) |
| **GSAP** | Hero section animations only (limited scope) |
| **Three.js / OGL** | 3D visual effects (PixelSnow, background shaders) |

### Data & CMS

| Technology | Purpose |
|---|---|
| **Sanity CMS** | Content management for blog, case studies |
| **Supabase** | Database for lead capture, form submissions |
| **Static Data** | Product/solution content in `lib/site-data.ts` |

### Forms & Validation

| Technology | Purpose |
|---|---|
| **React Hook Form** | Form state management |
| **Zod** | Schema validation |

### Analytics & Monitoring

| Technology | Purpose |
|---|---|
| **Google Analytics 4** | Page views, conversions |
| **Microsoft Clarity** | Session recordings, heatmaps |
| **PostHog / Mixpanel** | Event tracking |

### Infrastructure

| Technology | Purpose |
|---|---|
| **Vercel** | Hosting, CI/CD, Edge Functions |
| **Resend** | Transactional email (demo bookings) |
| **next-sitemap** | Automated XML sitemap |

---

## Routes & Pages

### Page Hierarchy

```
/                              → Homepage (hero, stats, features, workflow, testimonials, CTA)
├── product/                   → Product overview (module cards grid)
│   ├── meal-booking           → Meal booking module
│   ├── attendance             → Attendance management
│   ├── billing                → Billing & payments
│   ├── inventory              → Inventory management
│   ├── analytics              → Analytics & reports
│   └── mobile-app             → Mobile app module
├── solutions/                 → Solutions overview (industry cards grid)
│   ├── hostel-mess            → Hostel mess management
│   ├── college-canteen        → College canteens
│   ├── industrial-canteen     → Industrial canteens
│   ├── corporate-cafeteria    → Corporate cafeterias
│   ├── cloud-kitchen          → Cloud kitchens
│   └── subscription-mess-business → Tiffin/subscription businesses
├── why-mealiez/               → Value proposition, comparison matrix
├── pricing/                   → Plans, feature comparison, FAQ
├── customers/                 → Case studies, testimonials
├── book-demo/                 → Multi-step demo booking funnel
├── resources/                 → Resource centre hub
│   ├── roi-calculator         → ROI calculator tool
│   └── cost-leakage-calculator → Cost leakage calculator tool
├── blog/                      → Blog listing
├── guides/                    → Downloadable guides
├── reports/                   → Industry reports
├── company/                   → About, contact
├── security/                  → Security, privacy, infrastructure
└── legal/
    ├── privacy/               → Privacy policy
    ├── terms/                 → Terms of service
    └── data-infrastructure/   → Data hosting details
```

### Page Templates

The website uses **five distinct page templates**:

| Template | Used For | Key Sections |
|---|---|---|
| **Homepage** | `/` | Hero, Stats, Problem, Features, Workflow, Solutions, Pricing, Testimonials, Resources, FAQ, CTA |
| **Product Template** | `/product/[slug]` | Hero, Pain Points, Features, Workflow, Benefits, FAQ, CTA |
| **Solution Template** | `/solutions/[slug]` | Hero, Challenge, Current Process, How Mealiez Solves, ROI, FAQ, CTA |
| **Pricing Template** | `/pricing` | Hero, Plan Cards, Feature Comparison, FAQ, CTA |
| **Resource Template** | `/resources/*` | Calculator interaction, results, lead capture |

---

## Component Architecture

### Layout Components (Server-Rendered)

```
layout.tsx
├── ScrollProgress           → Thin progress bar at top of viewport
├── SiteHeader               → Glassmorphism floating navbar with mega-menus
├── ClientShell              → Client boundary wrapper (see below)
│   └── Main Content         → Page content (children)
└── SiteFooter               → Glass card footer with CTA + navigation
```

### Client Shell (Single Client Boundary)

`client-shell.tsx` aggregates all client-only features to minimise client-server boundaries:

```
ClientShell
├── ClickSpark               → Particle burst on click
├── PageLoader               → Full-screen loading animation
├── MouseCursor              → Custom cursor glow effect
├── TopProgressBar           → Route transition progress bar
├── LightRays                → Global warm ambient light effect
├── MotionProvider           → Framer Motion config (reducedMotion: "user")
├── ToastProvider            → Notification toast system
├── LenisProvider            → Smooth scroll (init idle-callback)
├── PageTransition           → Page exit/enter animations
├── ScrollToTop              → Auto scroll to top on route change
└── Main Content             → Animated page content
```

### Ambient & Visual Effects

| Component | Location | Description |
|---|---|---|
| `AuroraBg` | `ambient/` | Animated aurora/nebula background gradient |
| `FloatingParticles` | `ambient/` | Floating particle system (canvas-based) |
| `MouseCursor` | `ambient/` | Custom cursor with glow trail |
| `LightRays` | `ui/` | God-ray light effect (GLSL shader) |
| `PixelSnow` | `ui/` | 3D snowflake particle system (Three.js) |
| `BorderGlow` | `ui/` | Animated conic gradient border wrapper |
| `ClickSpark` | `ui/` | Click ripple particle burst |

### UI Primitive Components

| Component | Purpose |
|---|---|
| `AnimatedCounter` | Number count-up animation (stats) |
| `AnimatedSection` | Scroll-triggered entrance animation wrapper |
| `Icon` | SVG icon system (maps to site-data icon names) |
| `IconFrame` | Circular icon container with gradient |
| `Card` / `PremiumCard` | Content card containers |
| `Section` | Standardised section wrapper |
| `MagneticButton` | Magnetic mouse-follow button effect |
| `ButtonLoader` | Submit button loading state |

### Loading States

| Component | Purpose |
|---|---|
| `PageLoader` | Full-screen initial load animation |
| `ProgressBar` | Top-of-page route transition bar |
| `SkeletonBlog` | Blog post skeleton loader |
| `SkeletonCard` | Card skeleton loader |
| `ImagePlaceholder` | LQIP image placeholder |
| `SearchLoader` | Search results loading state |

### UX Utilities

| Component | Purpose |
|---|---|
| `PageTransition` | Framer Motion layout animation between routes |
| `ScrollToTop` | Scroll-to-top button (appears after scroll) |
| `RippleEffect` | Material-style ripple on click |
| `Toast` | Notification toast system |

---

## Design System

### Colour System

The design system uses a **warm orange tonal palette** exclusively — no cold blues or greens:

| Token Group | Description |
|---|---|
| `--or-50` to `--or-900` | 10-step orange scale (primary accent) |
| `--n-50` to `--n-900` | 10-step warm neutral scale (replaces cold greys) |
| `--surf-pure` to `--surf-glass` | 8 warm white surface levels |
| `--txt-display` to `--txt-on-orange-soft` | 10 typography colour tokens |

### Typography

| Font | Usage | Weights |
|---|---|---|
| **Barlow Condensed** | Display headings, stats, CTAs | 700, 800, 900 |
| **Barlow** | Body text, navigation, labels | 400, 600, 700, 800 |

### Glassmorphism System

Three distinct elevation levels ensure visual hierarchy:

| Level | Background Opacity | Blur | Example Usage |
|---|---|---|---|
| **L1 — Ground** | 60% | 20px sat. 1.6 | Cards on cream backgrounds |
| **L2 — Elevated** | 78% | 28px sat. 1.8 | Navbar, floating panels |
| **L3 — Floating** | 92% | 40px sat. 2.0 | Mega-menus, tooltips |

### Shadow System

15 shadow levels with warm brown undertones (`rgba(42,25,14,...)`) instead of cold black, plus 5 orange-hued shadow variants for CTAs and accent elements.

### Component Styling Pattern

The project uses **three styling layers** in order of specificity:

1. **Global Design Tokens** (`globals.css`): 200+ CSS custom properties for colours, spacing, typography, shadows, glows, and borders.
2. **Page-Scoped Styles** (inline `<style>` tags): Component-specific CSS within each page file, scoped by unique class names.
3. **Inline Styles** (`style={}` props): Dynamic, conditional styling that responds to state and props.

---

## Animation System

### Framer Motion Architecture

All components use Framer Motion for animations via the `MotionProvider` wrapper, which globally applies `reducedMotion: "user"` to respect OS motion preferences.

**Shared Animation Variants** (from `lib/motion-config.tsx`):

```typescript
fadeUp      → opacity: 0 → 1, y: 20 → 0
fadeIn      → opacity: 0 → 1
scaleIn     → opacity: 0 → 1, scale: 0.92 → 1
slideLeft   → opacity: 0 → 1, x: -16 → 0
slideRight  → opacity: 0 → 1, x: 16 → 0
staggerContainer → staggerChildren: 0.08s
```

### Scroll-Reveal System

Two parallel scroll-reveal systems exist for backwards compatibility:

1. **IntersectionObserver (Legacy)** — Used in homepage and overview pages via the `useReveal()` hook. Adds `.in` class to trigger CSS transitions.
2. **Framer Motion `useInView`** — Used in footer and newer components with `motion.div` variants.

### Smooth Scrolling (Lenis)

- Initialised via `requestIdleCallback` to avoid blocking First Paint / TTI
- Automatically disabled when `prefers-reduced-motion: reduce` is active
- Custom easing: `1.001 - pow(2, -10t)`

### Page Transitions

- `PageTransition` wraps all route content with Framer Motion's `animatePresence + layout` for smooth exit/enter transitions.
- `TopProgressBar` provides visual feedback during route changes.

### CSS Animations

`globals.css` defines 25+ keyframe animations for ambient effects, loading states, and micro-interactions, including:

- `orbPulse`, `floatY`, `floatYSlow` — Ambient floating
- `shimmer` — Loading skeleton shimmer
- `glow-pulse` — CTA button breathing glow
- `ticker` — Infinite logo marquee
- `border-flow`, `gradShift` — Decorative border animations

---

## Data Layer

### Static Data (`lib/site-data.ts`)

All product and solution content is maintained as typed static data:

```typescript
// Product type
type Product = {
  slug: string;
  title: string;
  icon: string;
  summary: string;
  painPoints: string[];
  features: string[];
  workflowSteps: { label: string; sub: string }[];
  benefits: string[];
  faqs: { q: string; a: string }[];
};

// Solution type
type Solution = {
  slug: string;
  title: string;
  icon: string;
  tagline: string;
  challenge: string;
  currentProcess: string;
  mealiezApproach: string[];
  relevantFeatures: string[];
  roiImpact: string;
  faqItems: { q: string; a: string }[];
};
```

**Content Coverage:**

| Category | Items | Fields per Item |
|---|---|---|
| Products | 6 (meal-booking, attendance, billing, inventory, analytics, mobile-app) | 9 typed fields |
| Solutions | 6 (hostel-mess, college-canteen, industrial-canteen, corporate-cafeteria, cloud-kitchen, subscription-mess) | 8 typed fields |

### Navigation Data

The `navMenus` object (exported from `site-data.ts`) maps product and solution arrays to the navigation structure used by both desktop mega-menus and mobile accordion drawers.

### Future CMS Integration

The static data architecture is designed for seamless migration to Sanity CMS:
- Data shapes are already structured as typed schemas
- The `site-data.ts` module acts as a single source of truth that can be replaced with a Sanity client
- Each product/solution page already consumes data via `slug` param matching

---

## SEO & Metadata

### Dynamic Metadata (Root Layout)

```typescript
// layout.tsx — Metadata configuration
export const metadata: Metadata = {
  metadataBase: new URL("https://mealiez.in"),
  title: { default: "...", template: "%s | Mealiez" },
  description: "...",
  openGraph: { type: "website", locale: "en_IN", images: [...] },
  twitter: { card: "summary_large_image", ... },
};
```

### Sitemap (`sitemap.ts`)

Automatically generated XML sitemap serving 30+ routes with:
- Prioritised pages (homepage: 1.0, book-demo: 0.95, pricing: 0.9)
- Appropriate change frequencies (weekly for blog, yearly for legal)
- All routes use `lastModified: new Date()` for freshness signals

### Robots (`robots.ts`)

```text
User-agent: *
Allow: /
Disallow: /api/
Disallow: /(auth)/
Sitemap: https://mealiez.in/sitemap.xml
Host: https://mealiez.in
```

### Schema Markup (JSON-LD)

Structured data is prepared for:
- `Organization` schema (brand)
- `Product` schema (module pages)
- `SoftwareApplication` schema (SaaS platform)
- `FAQPage` schema (FAQ accordions)
- `Article` schema (blog posts)

### Performance Headers

`next.config.ts` configures security and caching headers:
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `Referrer-Policy: strict-origin-when-cross-origin`
- Static asset caching: `max-age=31536000, immutable` (1 year)

---

## Performance Optimisations

### Font Optimisation

- **Subset loading**: Only actual weight variants are loaded (cuts payload by ~60%)
- **`next/font`**: Self-hosted, no external network requests
- **`display: swap`**: Ensures text remains visible during load
- **Preload**: Both Barlow and Barlow Condensed are preloaded
- **DNS prefetch**: Added for `fonts.googleapis.com` as fallback

### Image Optimisation

| Setting | Value |
|---|---|
| Formats | AVIF, WebP |
| Device sizes | 640, 750, 828, 1080, 1200, 1920 |
| Image sizes | 16, 32, 48, 64, 96, 128, 256, 384 |
| Cache TTL | 1 year (31,536,000s) |
| SVG | Disallowed (safety) |

### JavaScript Optimisation

- **Turbopack**: Used in development for faster refresh
- **Dynamic imports**: UI framework (Three.js/OGL) loaded only on pages that need it
- **LazyMotion**: Framer Motion loads only `domAnimation` (~10KB vs ~50KB)
- **Client Shell**: Single client boundary minimises serialisation overhead
- **Lenis deferred**: Initialised via `requestIdleCallback`

### Build & Config Optimisations

```typescript
// next.config.ts key settings
{
  compress: true,
  poweredByHeader: false,
  images: { formats: ["image/avif", "image/webp"] },
  experimental: {
    optimizeCss: false,  // Critters can break complex CSS — disabled
    ppr: false,          // Partial prerendering disabled (static shell not needed)
  },
}
```

### Core Web Vitals Targets

| Metric | Target |
|---|---|
| LCP (Largest Contentful Paint) | < 2.5s |
| CLS (Cumulative Layout Shift) | < 0.1 |
| INP (Interaction to Next Paint) | < 200ms |
| Lighthouse Score | > 95 (all categories) |

---

## Build & Deployment

### Prerequisites

- Node.js 20+
- npm 10+

### Local Development

```bash
# Install dependencies
cd client && npm install

# Start development server (Turbopack)
npm run dev
# → http://localhost:3000
```

### Build

```bash
# Production build
cd client && npm run build

# Preview production build
npm run start
```

### Linting

```bash
cd client && npm run lint
```

### Deployment (Vercel)

1. Connect the repository to Vercel
2. Set root directory to `client/`
3. Configure environment variables (if any):
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_GA_ID`
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`
4. Deploy: every push to `main` triggers automatic deployment

### CI/CD

- **Branch Previews**: Every PR gets a unique Vercel preview URL
- **Production**: Merges to `main` auto-deploy to `mealiez.in`
- **Analytics**: Vercel Web Analytics + Speed Insights enabled

---

## Development

### Key Scripts

```bash
npm run dev     # Start dev server (Turbopack)
npm run build   # Production build
npm run start   # Start production server
npm run lint    # ESLint
```

### Coding Conventions

- **Components**: PascalCase, `.tsx` extension
- **Utilities**: camelCase, `.ts` extension
- **CSS Variables**: `--kebab-case`
- **Classes (CSS)**: `pg-` prefix for page-specific classes, `rv-` for reveal animations
- **Imports**: Absolute imports using `@/` alias (maps to `src/`)
- **Styles**: Prefer inline styles for dynamic values, CSS classes for static styles

### Creating a New Product/Solution Page

1. Add the data entry to `products` or `solutions` array in `lib/site-data.ts`
2. Create `app/product/[slug]/page.tsx` or `app/solutions/[slug]/page.tsx`
3. The page component reads data via `params.slug` matching
4. Add the route to `app/sitemap.ts`

### Adding a New Route

1. Create the route folder in `src/app/`
2. Add `page.tsx` with the page component
3. Update `sitemap.ts` with the new route
4. Update `robots.ts` if the route should be disallowed
5. Add navigation links in `site-header.tsx` and `site-footer.tsx`

---

## Key Files Reference

| File | Purpose |
|---|---|
| `client/next.config.ts` | Build configuration, headers, image optimisation |
| `client/tsconfig.json` | TypeScript configuration with `@/` path alias |
| `client/src/app/layout.tsx` | Root layout — fonts, metadata, header, footer |
| `client/src/app/page.tsx` | Homepage — 1500+ lines of editorial layout |
| `client/src/app/globals.css` | Design system tokens, keyframes, utilities |
| `client/src/app/sitemap.ts` | XML sitemap generator |
| `client/src/app/robots.ts` | robots.txt generator |
| `client/src/lib/site-data.ts` | Product and solution data source |
| `client/src/lib/motion-config.tsx` | Framer Motion provider and variants |
| `client/src/lib/animations.ts` | Animation variant presets |
| `client/src/lib/lenis.tsx` | Smooth scroll provider |
| `client/src/components/client-shell.tsx` | Client-only component boundary |
| `client/src/components/site-header.tsx` | Glassmorphism navbar with mega-menus |
| `client/src/components/site-footer.tsx` | Glass card footer with CTA |
| `websiteinfo.md` | Full sitemap, navigation structure, page templates |
| `techStack.md` | Technology stack reference |
| `prd.md` | Product requirements and business goals |

---

## License

&copy; 2026 Mealiez. All rights reserved.