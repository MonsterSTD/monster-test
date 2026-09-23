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

The code lives on GitHub (`MonsterSTD/monster-test`) and deploys to Vercel with zero config (`npx vercel` for preview, `npx vercel --prod` for production). `main` is the production branch.

## Architecture

- `app/layout.tsx` — root layout: site metadata, viewport theme color, and the Inter font from `next/font/google`.
- `app/page.tsx` — the entire landing page as one server component. Content is data-driven from constants at the top of the file: `CONTACT_EMAIL` (used by the "Contactar" `mailto:` button) and the `services` array rendered as cards.
- `app/globals.css` — all styling, in plain global CSS with BEM-ish class names (no CSS modules, Tailwind or UI library). Colors are CSS custom properties on `:root` (`--bg`, `--surface`, `--border`, `--text`, `--muted`, `--accent`); the dark background is also duplicated as `themeColor` in `layout.tsx`, so update both together.
- `@/*` path alias maps to the repo root.

## Reglas de trabajo

**Comunicación**
- El usuario principal es Delio y no es programador. Explica de forma sencilla cualquier decisión técnica importante.
- Cuando detectes una decisión importante sobre arquitectura, base de datos o funcionamiento que deba conservarse para futuras sesiones, propón añadirla a este CLAUDE.md.

**Autonomía y seguridad**
- Trabaja de forma autónoma en las tareas de desarrollo, pero avisa antes de realizar cambios destructivos o difíciles de revertir.
- Nunca borres datos, archivos importantes o configuraciones sin confirmación.

**Secretos**
- Nunca expongas contraseñas, tokens, API keys ni secretos en el código, y nunca los incluyas en Git ni GitHub.
- Guarda credenciales y secretos en variables de entorno: `.env.local` en local (ya está en `.gitignore` mediante `.env*.local`) y la configuración de Environment Variables del proyecto en Vercel.

**Código**
- Respeta la arquitectura existente (descrita arriba) salvo que haya una razón clara para modificarla.
- Mantén el código organizado y documenta las decisiones importantes.
- La aplicación debe ser responsive y funcionar correctamente en móvil y escritorio.
- Antes de dar una tarea por terminada, comprueba que el proyecto compila correctamente con `npm run build`.

**Git y despliegue**
- GitHub es el repositorio del proyecto y Vercel se utiliza para los despliegues; `main` es la rama de producción.
- No hagas push a `main` automáticamente después de cada cambio. Primero informa de lo que has cambiado y espera confirmación del usuario para publicar.
