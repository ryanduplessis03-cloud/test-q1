# Fab Curtains & Blinds Cleaning Preview

Red-and-white Vite/React landing page preview for a curtain and blind cleaning
booking flow with photo-assisted estimates.

## Local development

```sh
npm install
npm run dev
```

The local preview runs on port `3000`.

## Production build

```sh
npm run build
npm run preview
```

## Netlify deployment

This project is configured for Netlify with `netlify.toml`.

- Build command: `npm run build`
- Publish directory: `dist`
- Node version: `22`
- SPA fallback: all routes redirect to `/index.html`
- Vite assets: cached with immutable one-year headers
