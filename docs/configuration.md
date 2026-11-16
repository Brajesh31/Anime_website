# ⚙️ Configuration reference

## Current configuration model
The app has minimal runtime configuration. Provider URLs are literals in React components, while selected manga paths are configured in Vite and Vercel files.

| File | Responsibility | Boundary |
|---|---|---|
| .env.example | Safe Vite variable guidance | No app variable currently defined |
| vite.config.js | React plugin and local development proxy | Vite dev server |
| vercel.json | Hosting rewrite rules | Vercel deployment |
| package.json | Scripts and dependency manifest | Install/build |
| AnimeHome.jsx | Anime search/recent endpoint constants | Browser bundle |
| AnimeDescPage.jsx | Anime info endpoint | Browser bundle |
| AnimePlayer.jsx | Playback endpoint | Browser bundle |
| RecentAnimePlayer.jsx | Playback and anime info endpoints | Browser bundle |
| Mangadex22.jsx | Local manga proxy path | Browser request |

## Environment variables
No application-specific environment variables are currently read by the inspected source. Vite exposes variables prefixed with VITE_ to client-side code. These values are public after build. Never put private tokens, passwords, database credentials, signing keys, or privileged API secrets in VITE variables.

If public configuration is added:
- Document the name, purpose, and whether it is required.
- Add a safe example value to .env.example.
- Validate required values at startup.
- State that VITE values are browser-visible.
- Keep all privileged secrets on a server.

## Development proxy
vite.config.js contains proxy entries for selected /aviv2/manga/info/ and /aviv2/manga/cover/ paths targeting an external host. Test the exact path requested by the component. This proxy does not create an owned backend and does not automatically apply after deployment.

## Deployment rewrites
vercel.json contains rewrites for selected app and manga paths. Treat them as routing rules, not a complete secure API gateway. Verify matching, destination ownership, response headers, CORS, and SPA fallback separately.

## Configuration change checklist
- [ ] Update the correct file.
- [ ] State whether it affects development, build, or deployment.
- [ ] Add safe documentation to .env.example if appropriate.
- [ ] Confirm no secret enters browser code.
- [ ] Test the exact local request.
- [ ] Test deployed behavior separately.
- [ ] Update API and deployment docs.
