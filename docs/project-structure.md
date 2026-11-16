# 🗂️ Project structure

## Root files

| Path | Purpose |
|---|---|
| `index.html` | Vite HTML entry document |
| `package.json` | Scripts and dependency manifest |
| `package-lock.json` | npm dependency lock |
| `vite.config.js` | Vite plugin and development proxy |
| `tailwind.config.js` | Tailwind content paths and theme extension |
| `postcss.config.js` | Tailwind and Autoprefixer pipeline |
| `eslint.config.js` | Flat ESLint configuration |
| `vercel.json` | Vercel rewrite configuration |
| `anime.png` | Existing project image asset |
| `.env.example` | Guidance for future public Vite configuration |

## Source tree

| Path | Purpose |
|---|---|
| `src/main.jsx` | Mounts React and imports global styles |
| `src/App.jsx` | Creates and provides the route table |
| `src/App.css` | App-level stylesheet |
| `src/index.css` | Tailwind directives and global stylesheet |
| `src/components/Home.jsx` | Landing route |
| `src/components/AnimeHome.jsx` | Anime search and recent episodes |
| `src/components/AnimeBtn.jsx` | Standalone anime fetch component |
| `src/components/LightNHome.jsx` | Light-novel placeholder |
| `src/components/pageComponents/AnimeDescPage.jsx` | Anime metadata and episode list |
| `src/components/pageComponents/AnimePlayer.jsx` | Standard playback route |
| `src/components/pageComponents/RecentAnimePlayer.jsx` | Recent episode playback route |
| `src/components/pageComponents/Navbar.jsx` | Search navbar experiment |
| `src/components/manga_comps/Mangadex22.jsx` | Active manga route component |
| `src/components/manga_comps/MangaDesc.jsx` | Manga cover/detail experiment |
| `src/components/manga_comps/MangaHome.jsx` | MangaHere/novel-cool experiment |
| `src/components/manga_comps/MangaHome2.jsx` | Remote cover image experiment |
| `src/components/manga_comps/Managadex.jsx` | Earlier MangaDex component experiment |

## Repository hygiene notes

Some components are not imported by the active route table. They are retained as experiments and should not be deleted without checking their intended use. Avoid treating every file under `src/components` as a shipped route.

Potential future organization:

```text
src/
├── app/                 # Router and providers
├── components/          # Reusable UI
├── features/
│   ├── anime/
│   ├── manga/
│   └── novels/
├── services/            # API adapters
├── hooks/               # Shared hooks
├── utils/               # Validation and formatting
└── styles/
```

This proposed layout is not the current source tree.
