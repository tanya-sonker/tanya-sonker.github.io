# Tanya Sonker Portfolio

This repo is now a React + TypeScript single-page app built with Vite and deployed on GitHub Pages.

## Project structure
- `app/src/` — React TSX application source
- `app/public/` — static assets served by Vite
- `app/dist/` — production build output
- `.github/workflows/pages.yml` — GitHub Pages deployment workflow

## Local development
Use Corepack with pnpm to avoid global `pnpm` version issues.

```bash
corepack enable
corepack pnpm install
corepack pnpm dev
```

If `pnpm dev` fails with `ERR_VM_DYNAMIC_IMPORT_CALLBACK_MISSING`, use the Corepack-managed command instead:

```bash
corepack pnpm dev
```

## Build

```bash
corepack pnpm build
```

## Preview

```bash
corepack pnpm preview
```

## Deployment
The app is deployed via GitHub Pages from the `master` branch using the Pages workflow at `.github/workflows/pages.yml`.
The workflow builds the app from `app/` and publishes `app/dist/`.

## Notes
- The app uses `HashRouter` so routing works cleanly on GitHub Pages.
- Static assets remain in `app/public/`, including `CNAME`, `manifest.json`, `service-worker.js`, `images/`, `icons/`, and `resume/`.
