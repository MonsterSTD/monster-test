# Monster Studio

Landing page de Monster Studio construida con Next.js (App Router).

## Desarrollo local

```bash
npm install
npm run dev
```

Abre http://localhost:3000.

## Build de producción

```bash
npm run build
npm start
```

## Despliegue en Vercel

1. Sube el repositorio a GitHub/GitLab/Bitbucket.
2. En https://vercel.com/new importa el repositorio. Vercel detecta Next.js automáticamente; no hace falta configuración extra.

O desde la terminal:

```bash
npx vercel        # preview
npx vercel --prod # producción
```

## Personalización

- Email del botón "Contactar": constante `CONTACT_EMAIL` en `app/page.tsx`.
- Colores: variables CSS en `app/globals.css`.
