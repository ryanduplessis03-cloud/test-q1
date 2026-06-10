# AGENTS.md

## Cursor Cloud specific instructions

### Repository layout

`main` contains only a placeholder README. The application lives on branch `cursor/red-white-cleaning-preview-d027` (Fab Curtains & Blinds Cleaning preview — Vite/React SPA). Check out that branch before installing dependencies or running the app.

### Services

| Service | Command | Port | Notes |
|---------|---------|------|-------|
| Vite dev server | `npm run dev` | 3000 | Primary development server; binds `0.0.0.0` |
| Vite preview | `npm run preview` | 3000 | Serves production build after `npm run build` |

There is no backend, database, Docker, or required environment variables.

### Prerequisites

- Node.js **22.x** and npm **10.x** (enforced in `package.json` `engines`)

### Common commands

See `README.md` and `package.json` scripts:

- Install: `npm install`
- Dev: `npm run dev`
- Test: `npm test` (Vitest + jsdom; no browser server needed)
- Build: `npm run build`
- Preview build: `npm run preview`

There is no ESLint/lint script in this project.

### Gotchas

- Run `npm run dev` (not `npm run build`) for local development with hot reload.
- The quote CTA links externally to WhatsApp (`wa.me`); no API keys are required to load or test the page.
