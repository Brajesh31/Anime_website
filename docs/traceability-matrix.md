# 🧭 Requirements, implementation, and verification traceability

This matrix connects user-visible capabilities to source, documentation, and evidence. It is a maintenance aid, not a claim that all tests currently exist.

| Capability | Source | Documentation | Verification |
|---|---|---|---|
| App bootstrap | src/main.jsx | architecture.md | Build check exists |
| Route selection | src/App.jsx | routes.md, architecture.md | Browser tests pending |
| Anime search | AnimeHome.jsx | features.md, api.md, data-flow.md | Manual test required |
| Recent episodes | AnimeHome.jsx | api.md, data-flow.md | Manual test required |
| Anime detail | AnimeDescPage.jsx | routes.md, api.md | Manual test required |
| Episode grouping | AnimeDescPage.jsx | features.md | Unit test pending |
| Standard playback | AnimePlayer.jsx | api.md, content-rights.md | Authorized playback test pending |
| Recent playback | RecentAnimePlayer.jsx | routes.md, api.md | Manual test required |
| Manga search | Mangadex22.jsx | api.md, deployment.md | Experimental/manual |
| Manga detail | MangaDesc.jsx | routes.md, features.md | Experimental/manual |
| Light novel placeholder | LightNHome.jsx | features.md, limitations.md | Placeholder confirmation |
| Local manga proxy | vite.config.js | configuration.md, deployment.md | Dev proxy test required |
| Production rewrites | vercel.json | deployment.md | Deployment test required |
| Documentation links | scripts/check_docs.py | documentation-maintenance.md | CI check exists |
| Accessibility | UI components | accessibility.md | Manual audit pending |
| Security boundaries | Components/config | security-review.md | Review only, not penetration test |

## Change checklist
When a capability changes:
1. Update source references.
2. Update implementation status.
3. Update route/API/data-flow docs.
4. Add or update verification steps.
5. Update README if user-visible status changes.
6. Capture genuine visual evidence if UI changes.
7. Record unresolved risks rather than omitting them.
