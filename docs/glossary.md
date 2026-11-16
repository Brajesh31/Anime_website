# 📖 Glossary

| Term | Meaning in this repository |
|---|---|
| Anime provider | External service queried for anime search, recent episodes, metadata, or playback metadata |
| Browser route | URL path interpreted by React Router |
| Catalog result | Provider-returned item shown in a search result list |
| Client-side SPA | Application where browser JavaScript renders screens and handles route changes |
| Component state | Data held by a React component, generally lost when that component is unmounted or the page reloads |
| CORS | Browser security mechanism that controls cross-origin requests |
| Episode identifier | Provider ID used to request a specific episode |
| External media host | Remote server from which a player attempts to load media |
| Manga proxy | External service reached through local proxy/rewrite paths |
| Metadata | Descriptive fields such as title, image, description, and episode list |
| Provider payload | JSON response returned by a third-party integration |
| ReactPlayer | Installed React component used to render a remote media source |
| Route parameter | Dynamic segment such as :title or :manga_id in a route declaration |
| SPA fallback | Hosting behavior that returns the app entry document for client-side routes |
| Vite proxy | Development-server forwarding configured in vite.config.js |
| Vercel rewrite | Hosting routing rule configured in vercel.json |
| Source array | Provider response collection used by the player to locate media URLs |
| Fixed-index selection | Current fragile behavior that reads sources[2] instead of selecting a validated source |
| Mermaid | Text-based diagram syntax rendered by GitHub in supported Markdown files |
| ADR | Architecture Decision Record describing context, decision, and consequences |
| Technical illustration | Diagram explaining a system; not evidence of a live UI |
| Browser screenshot | Genuine capture of the running application at a specific route and viewport |

## Status labels
- **Implemented:** code path exists and performs the described behavior.
- **Partial:** implementation exists but has material gaps.
- **Experimental:** exploratory code with incomplete guarantees.
- **Placeholder:** route exists but intended feature is absent.
- **Planned:** future intention only.
