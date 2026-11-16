# 🗂️ Project structure and source ownership

## Root files

| Path | Responsibility | Notes |
|---|---|---|
| .editorconfig | Editor formatting defaults | Shared editor behavior |
| .env.example | Safe Vite variable guidance | No app variables currently documented |
| .gitattributes | Git text/binary handling | Repository metadata |
| .gitignore | Excluded local/generated files | Keep build output and dependencies out of Git |
| index.html | Vite HTML entry | Root mount and module entry |
| package.json | Scripts and dependencies | npm manifest |
| package-lock.json | Resolved dependency graph | Use with npm ci |
| vite.config.js | React plugin and dev proxy | Proxy only affects local Vite server |
| tailwind.config.js | Tailwind content/theme | Utility CSS configuration |
| postcss.config.js | CSS processing | Tailwind and Autoprefixer |
| eslint.config.js | Static lint rules | Legacy source findings remain |
| vercel.json | Deployment rewrites | Not equivalent to Vite proxy |
| anime.png | Existing project artwork | Not a live UI screenshot |

## Application entry and route composition

| Path | Responsibility | Active usage |
|---|---|---|
| src/main.jsx | Mounts React and imports global styles | Application entry |
| src/App.jsx | Creates browser router and route table | Route composition |
| src/App.css | App-level CSS | Imported by App |
| src/index.css | Global CSS/Tailwind directives | Imported by entry |

## Anime components

| Path | Responsibility | Notes |
|---|---|---|
| src/components/Home.jsx | Landing page | Root route |
| src/components/AnimeHome.jsx | Search and recent episodes | Active route |
| src/components/AnimeBtn.jsx | Standalone anime request experiment | Imported by App but not rendered as a route |
| src/components/LightNHome.jsx | Light-novel placeholder | Active route |
| src/components/pageComponents/AnimeDescPage.jsx | Anime metadata and episode groups | Active route |
| src/components/pageComponents/AnimePlayer.jsx | Episode playback | Active route |
| src/components/pageComponents/RecentAnimePlayer.jsx | Recent episode playback | Active route |
| src/components/pageComponents/Navbar.jsx | Navbar/search experiment | Not used in current route elements |

## Manga components

| Path | Responsibility | Notes |
|---|---|---|
| src/components/manga_comps/Mangadex22.jsx | Active manga route experiment | Current route component |
| src/components/manga_comps/MangaDesc.jsx | Manga detail experiment | Active detail route |
| src/components/manga_comps/MangaHome.jsx | Alternate manga/novel experiment | Not selected by current route table |
| src/components/manga_comps/MangaHome2.jsx | Alternate cover/image experiment | Not selected by current route table |
| src/components/manga_comps/Managadex.jsx | Earlier MangaDex experiment | Not selected by current route table |

## Documentation and automation

| Path | Responsibility |
|---|---|
| .github/ISSUE_TEMPLATE/ | Structured issue forms |
| .github/workflows/ci.yml | Install, lint, build and docs checks |
| .github/workflows/update-readme.yml | Manual README workflow |
| docs/ | Product, architecture, integration, quality and operations docs |
| docs/diagrams/ | SVG and Mermaid diagrams |
| docs/demo/ | Genuine screenshot capture process |
| scripts/check_docs.py | Documentation-link validation |

## Source organization observations
- Some components are imported by App.jsx but are not route elements.
- Some manga components are retained experiments.
- API request logic lives in page components rather than a shared service layer.
- State is local and not persisted.
- There is no test or service directory in the current source tree.

## Proposed future structure

```text
src/
├── app/                 # Router and application composition
├── components/          # Shared UI primitives
├── features/
│   ├── anime/           # Search, detail, episodes, playback
│   ├── manga/           # Manga discovery and detail
│   └── novels/          # Only if approved as a feature
├── services/            # Provider adapters and HTTP clients
├── models/              # Normalized domain models
├── hooks/               # Shared feature hooks
├── utils/               # URL, validation and formatting helpers
└── styles/              # Global styles and tokens
```

The proposed tree is not current source. Existing experiments should not be deleted or moved without a separately reviewed source change.
