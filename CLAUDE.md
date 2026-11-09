# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev     # dev server on http://localhost:3000 (Turbopack)
npm run build   # production build, includes the TypeScript check
npm run start   # serve the production build
npm run lint    # ESLint across the repo; `npx eslint <path>` for one file
```

No test runner is configured, so `npm run build` and `npm run lint` are the verification steps.

## Architecture

A brochure site for Iron Ridge Contracting, built as an App Router app in `src/app` with the `@/*` import alias mapped to `./src/*`. It is a first-draft design preview.

- **All business content lives in `src/data/site.ts`**: contact details, services, gallery, testimonials, FAQs and image URLs. Comments there mark what is `PLACEHOLDER` or needs to be `CONFIRM`ed. `showPlaceholderLabels` turns the on-page "Placeholder photo" and "Sample review" labels on or off.
- **Theme colours are semantic tokens** in `src/app/globals.css`, redefined under `.dark` (`next-themes` sets the class). Use tokens like `bg-surface` and `text-accent` rather than `dark:` colour pairs. White text on `#0B8A3E` fails AA, so filled buttons use the `action` token.
- **Phone and email must stay visible** in the sticky `ContactBar`, the footer and the contact page. This is a client requirement.
- Heading type and focus rings are applied once from the `body` classes in `src/app/layout.tsx`.
- `buttonClass` includes `inline-flex`, which overrides a plain `hidden`. Hide buttons with a `max-*:hidden` variant instead. The same applies to `SitePhoto`'s `relative`: wrap it to position it absolutely.
- Client navigation animates through `src/app/template.tsx`. Scroll animation goes through `Reveal`, and `MotionConfig` in `Providers` handles reduced motion.

Non-default setup that affects how code should be written:

- **Next.js 16 with Cache Components and Partial Prefetching** (`cacheComponents` and `partialPrefetching` in `next.config.ts`). Rendering and caching follow the `use cache` / `<Suspense>` model rather than route segment configs like `dynamic = 'force-static'`. Calling `new Date()` during prerender fails the build, which is why the copyright year is a constant in `site.ts`. See `node_modules/next/dist/docs/01-app/01-getting-started/08-caching.md`.
- **Tailwind CSS v4 runs through a Turbopack loader**, not PostCSS. `@tailwindcss/turbopack` is registered for `*.css` under `turbopack.rules` in `next.config.ts`, and there is no `postcss.config` or `tailwind.config`. Theme tokens are defined in `src/app/globals.css` with `@theme`.
- **`LayoutProps<"/">` and similar route helpers are generated global types**, so they need no import. `next-env.d.ts` is generated and gitignored.
