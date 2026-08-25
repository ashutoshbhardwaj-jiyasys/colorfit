# Colorfit — Brand, Packaging & Graphic Design Studio

A modern, minimalist marketing site built with **Next.js (App Router) + TypeScript + Tailwind CSS**, with motion powered by **GSAP** (ScrollTrigger) and **Lenis** smooth scrolling.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

> Note: dependencies were not installed in this environment. Run `npm install` once on your machine before `npm run dev`.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — lint

## Structure

```
src/
  app/
    layout.tsx          Root layout: fonts, smooth scroll, nav, footer
    page.tsx            Home (Hero, Marquee, Services, Work, Process)
    work/page.tsx       Portfolio grid
    services/page.tsx   Services list
    about/page.tsx      Studio story + stats
    contact/page.tsx    Contact form + details
    globals.css         Tailwind layers + animation utilities
  components/
    Navbar.tsx          Hide-on-scroll nav, mobile menu
    Footer.tsx          CTA + footer
    SmoothScroll.tsx    Lenis <-> GSAP ticker sync
    PageHeader.tsx      Shared inner-page header
    ContactForm.tsx     Front-end contact form
    home/               Home page sections
    anim/               Reusable motion: Reveal, AnimatedHeading, MagneticButton
  lib/
    gsap.ts             GSAP + ScrollTrigger registration
    data.ts             Services, projects, stats content
    nav.ts              Nav links
```

## Customizing

- **Colors / type**: `tailwind.config.ts` (palette under `theme.extend.colors`) and fonts in `src/app/layout.tsx`.
- **Content**: edit `src/lib/data.ts` for services, projects, and stats.
- **Project imagery**: the work tiles in `components/home/FeaturedWork.tsx` and `app/work/page.tsx` use colored placeholders — drop your real images (e.g. `next/image`) in place of the placeholder `<div>`s.
- **Contact form**: `ContactForm.tsx` currently handles submit on the client only. Wire `handleSubmit` to an API route or email service (Resend, Formspree, etc.).

## Motion notes

- All animations respect `prefers-reduced-motion`.
- The Process section uses a pinned horizontal scroll on screens ≥ 768px and stacks vertically on mobile.

  -Please refer this for any details.
