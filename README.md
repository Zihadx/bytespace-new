# ByteSpace — Frontend Assessment

> A responsive learning-platform landing page built from the provided Figma design with **Next.js**, **React**, **TypeScript**, and **Tailwind CSS**.

[![Live Demo](https://img.shields.io/badge/Live-Demo-000000?style=flat-square&logo=vercel&logoColor=white)](https://bytespace-new-live.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/Zihadx/bytespace-new)

**Live Demo:** https://bytespace-new-live.vercel.app/
**Repository:** https://github.com/Zihadx/bytespace-new

---

## Table of Contents

- [Overview](#overview)
- [Assessment Scope](#assessment-scope)
- [Tech Stack](#tech-stack)
- [Page Sections](#page-sections)
- [Project Structure](#project-structure)
- [Key Implementation Details](#key-implementation-details)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Future Improvements](#future-improvements)
- [Author](#author)

---

## Overview

ByteSpace is a modern learning platform concept focused on **course discovery, learning paths, creator tools, and learner community**.

This project was built for the **Jr. Software Engineer — Frontend Assessment**. The goal was to turn the supplied Figma design into a clean, responsive, and maintainable Next.js application, keeping the typography, spacing, colors, imagery, and overall design direction as close to the reference as possible.

**Goals**

- Reproduce the Figma design accurately
- Work well on mobile, tablet, and desktop
- Build reusable React components
- Keep content/data separate from presentation
- Keep the project structure clean and scalable

---

## Assessment Scope

**Required**

- [x] Full landing page
- [x] Figma-based UI implementation
- [x] Responsive layout
- [x] Reusable React components
- [x] TypeScript implementation
- [x] Clean project architecture
- [x] Production build verification
- [x] Vercel deployment

**Bonus**

- [ ] Login
- [ ] Signup

> Bonus features are separate from the core landing-page implementation.

---

## Tech Stack

| Technology | Usage |
| --- | --- |
| **Next.js** | Application framework and routing |
| **React** | Component-based UI |
| **TypeScript** | Type-safe development |
| **Tailwind CSS** | Styling and responsive layouts |
| **Lucide React** | Icons |
| **pnpm** | Package manager |
| **Vercel** | Deployment |

---

## Page Sections

```text
Navbar
├── Hero
│   ├── Headline and supporting text
│   ├── Course search
│   └── Hero illustration
├── Partners / Logo Strip
├── Featured Courses
│   ├── Category filters
│   └── Course cards
├── Learning Paths
├── Professional Growth
│   ├── Learner-focused content
│   └── Creator-focused content
├── Creator CTA
├── Testimonials
└── Footer
```

---

## Project Structure

```text
src/
├── app/
│   ├── (main)/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── globals.css
│   └── not-found.tsx
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   └── home/
│   │       ├── Hero.tsx
│   │       ├── PartnersStrip.tsx
│   │       ├── FeaturedCourses.tsx
│   │       ├── LearningPaths.tsx
│   │       ├── GrowthPath.tsx
│   │       ├── CreatorFeatures.tsx
│   │       ├── CreatorCTA.tsx
│   │       └── Testimonials.tsx
│   └── ui/
│
├── config/        # Site-level configuration
│   └── site.ts
├── constants/     # Design tokens and shared constants
│   └── tokens.ts
├── data/          # Static content
├── hooks/         # Custom React hooks
├── lib/           # Helper functions
├── services/      # Data-fetching logic
└── types/         # Shared TypeScript types

public/
└── images/        # Static assets
```

| Folder | Purpose |
| --- | --- |
| `app/` | Next.js App Router: layouts, pages, global styles, 404 page |
| `components/layout/` | Site-wide pieces such as Navbar and Footer |
| `components/sections/home/` | One component per landing-page section |
| `components/ui/` | Small reusable UI building blocks |
| `data/` and `types/` | Static content and the TypeScript types that describe it |

---

## Key Implementation Details

- **Component-based architecture:** every landing-page section is its own component, so `page.tsx` stays short and readable.
- **Content separated from UI:** course, category, and testimonial content lives in `data/` and is typed through `types/`.
- **Type safety:** props and data models use TypeScript interfaces.
- **Responsive by default:** mobile-first layouts that adapt with Tailwind breakpoints.
- **Scrollable category filters:** the category row hides its scrollbar and scrolls with touch, mouse wheel, or arrow buttons.
- **Route group:** the `(main)` route group keeps shared layout logic separate from the root layout.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 20 or later
- [pnpm](https://pnpm.io/) (install with `npm install -g pnpm`)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Zihadx/bytespace-new.git

# 2. Go into the project folder
cd bytespace-new

# 3. Install dependencies
pnpm install

# 4. Start the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Available Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the development server |
| `pnpm build` | Create an optimized production build |
| `pnpm start` | Run the production build locally |
| `pnpm lint` | Run ESLint checks |

---

## Deployment

The project is deployed on **Vercel**: https://bytespace-new-live.vercel.app/

A production build (`pnpm build`) was run successfully before deployment.

---

## Future Improvements

- Login and Signup pages (bonus scope)
- Connect course data to a real API or CMS
- Working search and filter logic
- Page animations and transitions
- Accessibility and SEO polish

---

## Author

**Nur Zihad**

[GitHub](https://github.com/Zihadx) · [LinkedIn](https://www.linkedin.com/in/nur-zihad) · [Email](mailto:nzihad.io@gmail.com)