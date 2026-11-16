# 🚀 Deployment

## Build artifact

Run:

```bash
npm ci
npm run lint
npm run build
```

Deploy the generated `dist/` directory to a static hosting provider configured for Vite.

## SPA route fallback

React Router uses browser history paths. Hosting must return the SPA entry document for valid application routes such as `/anime`, `/manga`, and `/anime/watch/example`. Otherwise, direct navigation or refresh can produce a hosting-level 404.

## Existing Vercel configuration

The repository contains `vercel.json` rewrites for selected routes and manga proxy experiments. Review each rule against the active router and provider before changing it. The current rewrite list should not be assumed to constitute a complete or secure production proxy.

The Vite `server.proxy` configuration applies to the development server. It does not automatically apply to a deployed Vercel build.

## Deployment checklist

- [ ] Clean install completes from package-lock.
- [ ] ESLint passes.
- [ ] Production build succeeds.
- [ ] Root page loads from deployed URL.
- [ ] Direct route navigation and refresh work.
- [ ] Remote provider requests work from the deployed origin.
- [ ] CORS and rate-limit behavior are understood.
- [ ] Media source is authorized and playable.
- [ ] No private keys or provider credentials are in the built JavaScript.
- [ ] Mobile layout and keyboard navigation are reviewed.
- [ ] Browser console has no unexplained runtime errors.

## Rollback

Keep the previous known-good deployment available through the hosting provider. Roll back when a deployment breaks navigation, build output, or lawful provider access. A rollback does not fix an upstream provider outage.
