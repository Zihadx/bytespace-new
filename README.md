# ByteSpace — Frontend Assessment

> A responsive learning-platform landing page built from the provided Figma design using **Next.js**, **React**, **TypeScript**, and **Tailwind CSS**.

[![Live Demo](https://img.shields.io/badge/Live-Demo-000000?style=flat-square&logo=vercel&logoColor=white)](https://bytespace-new.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/Zihadx/bytespace-new)

---

## Table of Contents

- [Overview](#overview)
- [Assessment Scope](#assessment-scope)
- [Tech Stack](#tech-stack)
- [Design Implementation](#design-implementation)
- [Page Sections](#page-sections)
- [Project Structure](#project-structure)
- [Key Implementation Details](#key-implementation-details)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Future Improvements](#future-improvements)

---

## Overview

ByteSpace is a modern learning platform concept focused on **course discovery, learning paths, creator tools, and learner community**.

This project was developed as part of the **Jr. Software Engineer — Frontend Assessment**, based on the provided ByteSpace Figma design.

The goal was to translate the supplied design into a clean, responsive, and maintainable Next.js application while keeping the typography, spacing, colors, imagery, and overall design direction as close to the reference as possible.

### Core Goals

- Reproduce the provided Figma design accurately
- Build a responsive experience across all screen sizes
- Create reusable React components
- Separate content/data from presentation
- Maintain a clean and scalable project structure
- Follow practical frontend engineering principles
- Keep the implementation aligned with the assessment scope

---

## Assessment Scope

### Required

- [x] Full landing page
- [x] Figma-based UI implementation
- [x] Responsive layout
- [x] Reusable React components
- [x] TypeScript implementation
- [x] Clean project architecture
- [x] Production build verification
- [x] Vercel deployment

### Bonus

- [ ] Login
- [ ] Signup

> Bonus features are treated separately from the core landing-page implementation.

---

## Tech Stack

| Technology | Usage |
| --- | --- |
| **Next.js** | Application framework and routing |
| **React** | Component-based UI development |
| **TypeScript** | Type-safe development |
| **Tailwind CSS** | Styling and responsive layouts |
| **Lucide React** | Interface icons |
| **Vercel** | Deployment |

---

## Design Implementation

The provided Figma design was used as the primary source of truth for the UI.

Particular attention was given to:

- Typography, font sizes, and weights
- Color palette
- Spacing and section rhythm
- Container widths
- Card dimensions and border radius
- Image proportions
- Decorative elements
- Alignment and positioning
- Responsive behavior

The implementation preserves the visual hierarchy and design language of the reference while adapting the layout for mobile, tablet, and desktop viewports.

---

## Page Sections

```text
Navbar
│
├── Hero
│   ├── Main headline
│   ├── Supporting text
│   ├── Course search
│   ├── Hero illustration
│   └── Decorative elements
│
├── Partners / Logo Strip
│
├── Featured Courses
│   ├── Category filters
│   └── Course cards
│
├── Learning Paths
│   └── Learning category cards
│
├── Professional Growth
│   ├── Learner-focused content
│   └── Creator-focused content
│
├── Creator CTA
│
├── Testimonials
│
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
│   │
│   ├── layout.tsx
│   ├── globals.css
│   └── not-found.tsx
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   │
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
│   │
│   └── ui/
│
├── config/
│   └── site.ts
│
├── constants/
│   └── tokens.ts
│
├── data/
│
├── hooks/
│
├── lib/
│
├── services/
│
└── types/

public/
├── images/
└── ...
```

### Folder Responsibilities

| Folder | Purpose |
| --- | --- |
| `app/` | Next.js App Router: layouts, pages, global styles, and the 404 page |
| `components/layout/` | Site-wide layout pieces such as the Navbar and Footer |
| `components/sections/home/` | One component per landing-page section |
| `components/ui/` | Small reusable UI building blocks (cards, buttons, pills) |
| `config/` | Site-level configuration (name, links, metadata) |
| `constants/` | Design tokens and shared constant values |
| `data/` | Static content kept separate from presentation |
| `hooks/` | Custom React hooks |
| `lib/` | Helper functions and utilities |
| `services/` | Data-fetching and service logic |
| `types/` | Shared TypeScript types and interfaces |
| `public/` | Static assets such as images |

---

## Key Implementation Details

- **Component-based architecture:** each landing-page section is its own component, which keeps `page.tsx` short and easy to read.
- **Content separated from UI:** course, category, and testimonial content lives in `data/` and is typed through `types/`, so the UI stays reusable.
- **Type safety:** props and data models are typed with TypeScript interfaces.
- **Responsive by default:** layouts are mobile-first and adapt with Tailwind breakpoints.
- **Horizontally scrollable filters:** the category row hides its scrollbar and supports mouse wheel, touch, and arrow-button scrolling.
- **Route group:** the `(main)` route group keeps shared layout logic separate from the root layout.

---

## Getting Started

### Prerequisites

- Node.js 18.18 or later
- npm, yarn, or pnpm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Zihadx/bytespace-new.git

# 2. Move into the project folder
cd bytespace-new

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create an optimized production build |
| `npm run start` | Run the production build locally |
| `npm run lint` | Run ESLint checks |

---

## Deployment

The project is deployed on **Vercel**.

- **Live Demo:** https://bytespace-new.vercel.app
- **Repository:** https://github.com/Zihadx/bytespace-new

A production build (`npm run build`) was run successfully before deployment.

---

## Future Improvements

- Login and Signup pages (bonus scope)
- Connect course data to a real API or CMS
- Working search and filter logic
- Page-level animations and transitions
- Accessibility and SEO polish

---

## Author

**Nur Zihad**
[GitHub](https://github.com/Zihadx) · [LinkedIn](https://www.linkedin.com/in/nur-zihad) · [Email](mailto:nzihad.io@gmail.com)