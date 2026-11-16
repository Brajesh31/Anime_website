# 🚀 Deployment and hosting guide

## 1. Build output
The project uses Vite. Generate production assets with:

```bash
npm ci
npm run build
```

The output directory is dist/. Deploy those static assets to a host that supports the SPA fallback required by React Router.

## 2. Hosting responsibilities
A static host must serve the built entry document and generated assets, return the SPA entry document for valid client routes, preserve content types and caching behavior, and apply rewrite rules only where intended.

## 3. Browser-history fallback
A visitor may open a nested URL directly or refresh while on a nested page. If the host looks for a physical file instead of returning the SPA entry document, it may return a hosting-level 404.

Verify direct navigation and refresh for /anime, /manga, /ln, /anime/{identifier}, player routes, and /manga/desc/{identifier}. Route declarations and generated links must be tested together.

## 4. Vite proxy vs Vercel rewrites
Vite server.proxy applies to local development only. It does not automatically become a production API proxy.

The repository also contains vercel.json rewrites for selected application and manga paths. These are a separate mechanism. Verify exact source matching, destination paths, route shadowing, CORS/headers, destination ownership, and whether the rewrite is required.

A successful local manga request does not prove that the production rewrite works.

## 5. Environment and secrets
No private credentials should be placed in the browser bundle. VITE_ variables are client-visible. A future private provider credential requires a server-side component and documented security design.

## 6. Pre-deployment checklist
- [ ] npm ci succeeds.
- [ ] Lint findings have been reviewed.
- [ ] Production build succeeds.
- [ ] Root route loads.
- [ ] Nested routes load directly and survive refresh.
- [ ] Back and forward navigation work.
- [ ] Remote requests work from deployed origin.
- [ ] Proxy rewrites are tested independently from Vite.
- [ ] No private credential is present in generated assets.
- [ ] Images and media are permitted and available.
- [ ] Mobile layout is reviewed.
- [ ] Keyboard navigation is reviewed.
- [ ] Browser console/network errors are reviewed.
- [ ] Docs and demo evidence match deployed version.

## 7. Rollback
Keep a known-good deployment available through the host. Roll back if a new frontend build or rewrite causes navigation/rendering failure. A frontend rollback cannot repair an upstream provider outage or grant rights to external media.
