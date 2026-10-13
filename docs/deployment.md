# Deployment

Build with `npm run build` and deploy `dist/` to a static host that supports SPA fallbacks. Preserve the rewrites in `vercel.json` or provide equivalent hosting rules. Test direct requests to `/anime`, `/manga`, detail routes, and proxy paths.

Before publishing, verify provider terms, media rights, CORS, rate limits, HTTPS, error handling, and the absence of secrets in the client bundle.
