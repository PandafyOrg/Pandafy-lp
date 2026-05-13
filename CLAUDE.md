# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start Next.js dev server
- `npm run build` — production build
- `npm run start` — run production build
- `npm run lint` — ESLint (no test framework configured)

## Architecture

Next.js 16 (App Router) + React 19 + TypeScript marketing landing page for **Etz.org** (PT-BR site, canonical `https://www.etzai.com.br/`). Styled with Tailwind v4 (CSS-in-`app/globals.css`, no `tailwind.config`) and shadcn/ui (New York style, neutral base, components installed under `components/ui`).

- `app/page.tsx` is the entire landing page composition: it imports section components from `components/` (`home/hero`, `problema-section`, `features`, `prova-social-section`, `new-release-promo`, `faq-section`, `sticky-footer`) and owns the sticky header + mobile nav with scroll-based state. Sections are jumped to via `scrollToSection(id)` against DOM `id`s declared on each section component, so when renaming/adding a section both the nav `target` and the section element `id` must stay in sync.
- `app/layout.tsx` sets global metadata, Open Graph, and JSON-LD structured data — edit there for SEO, not per-page.
- Additional routes: `app/comecar`, `app/login`, `app/signup` (each a single `page.tsx`).
- `components/ui/*` are shadcn primitives. Custom landing components (hero, sections, marquee, globe, gridbeam, pixelcards, scramble, following-pointer, etc.) live alongside them and are imported with the `@/components/...` alias.
- Path aliases (see `tsconfig.json` and `components.json`): `@/*` → repo root; shadcn aliases `@/components`, `@/components/ui`, `@/lib`, `@/lib/utils`, `@/hooks`.
- `lib/utils.ts` exports `cn` (clsx + tailwind-merge); `lib/fonts.ts` and `lib/load-script.ts` handle font + script loading. `GeistSans` is wired in `app/layout.tsx`.
- Icons: Radix Icons + Lucide. Animations: `framer-motion` / `motion`. 3D-ish visuals: `cobe` (globe).

## Build / config notes

- `next.config.mjs` sets `typescript.ignoreBuildErrors: true` and `images.unoptimized: true`. TypeScript errors will NOT fail the build — run `tsc --noEmit` manually if you need a real type check. Treat any image work as plain `<img>`/static asset (no Next image optimization pipeline).
- `.gitignore` excludes `node_modules`, `.next`, etc. The committed `tsconfig.tsbuildinfo` and `.next/` dir present in the working tree are local artifacts.
- `landing/` (with empty `scripts/` and `styles/`) is currently unused scaffolding.

## Content & design conventions

- All user-facing copy is **Portuguese (Brazil)**. Preserve PT-BR when editing copy or adding sections.
- `SKILL.md` (`gpt-taste` skill) documents the in-house design system: AIDA section structure, ultra-wide hero (`max-w-5xl`+, 2–3 line H1 max), gapless bento grids with `grid-flow-dense`, large vertical section padding (`py-32 md:py-48`), no emoji in code, no meta-labels like "SECTION 01", `overflow-x-hidden` on `<main>` to prevent horizontal scroll from animated elements. Follow it when creating new sections.
- `design-system.md` is a working design-system document for the page — consult it for tokens/components before introducing new visual primitives.
