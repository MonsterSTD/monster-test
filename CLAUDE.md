# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Single-page landing site for Monster Studio (design, signage and print studio in Galicia), built with Next.js (App Router), React 19 and TypeScript. User-facing copy is in Spanish (`<html lang="es">`); keep new copy in Spanish.

## Commands

```bash
npm install
npm run dev     # dev server on http://localhost:3000
npm run build   # production build (also type-checks)
npm start       # serve the production build
npx tsc --noEmit  # type-check only
```

There is no linter or test suite configured. Requires Node >= 20.9.0.

Deployment is on Vercel with zero config (`npx vercel` for preview, `npx vercel --prod` for production).

## Architecture

- `app/layout.tsx` — root layout: site metadata, viewport theme color, and the Inter font from `next/font/google`.
- `app/page.tsx` — the entire landing page as one server component. Content is data-driven from constants at the top of the file: `CONTACT_EMAIL` (used by the "Contactar" `mailto:` button) and the `services` array rendered as cards.
- `app/globals.css` — all styling, in plain global CSS with BEM-ish class names (no CSS modules, Tailwind or UI library). Colors are CSS custom properties on `:root` (`--bg`, `--surface`, `--border`, `--text`, `--muted`, `--accent`); the dark background is also duplicated as `themeColor` in `layout.tsx`, so update both together.
- `@/*` path alias maps to the repo root.
