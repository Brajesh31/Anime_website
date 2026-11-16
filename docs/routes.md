# 🧭 Route reference and navigation contract

## Purpose

This document records route declarations in src/App.jsx, the components they render, and parameters consumed by those components. It is not a guarantee that each route works in production.

## Route inventory

| Declared path | Component | Parameter | Purpose |
|---|---|---|---|
| / | Home | None | Landing page |
| /anime | AnimeHome | None | Anime search and recent feed |
| /ln | LightNHome | None | Light novel placeholder |
| /manga | Mangadex22 | None | Manga search experiment |
| /manga/desc/:manga_id | MangaDesc | manga_id | Manga detail experiment |
| /anime/:title | AnimeDescPage | title | Anime metadata and episodes |
| anime/recent/watch/:id/:title | RecentAnimePlayer | id, title | Recent episode playback |
| anime/watch/:title | AnimePlayer | title | Episode playback |

## Parameter meaning

### Anime detail title

AnimeDescPage reads title and appends it to the anime information endpoint. Despite the parameter name, it is a provider identifier, not necessarily a human-readable series title. AnimeHome constructs the path from anime.id.

### Standard player title

AnimePlayer uses title as the episode identifier appended to the playback endpoint. It is not simply the displayed series title.

### Recent player id and title

RecentAnimePlayer uses id for the anime information request and title for the episode playback request. The names are ambiguous. A future source refactor could use animeId and episodeId, but this document does not alter the source contract.

### Manga identifier

MangaDesc receives manga_id. The current manga search component creates a relative desc/{id} link. Verify the resolved URL and route match in a browser.

## Navigation observations

- Anime result cards link to /anime/{encoded anime id}.
- Episode cards link to /anime/watch/{episode id}.
- Recent cards use a relative recent/watch/{id}/{episodeId} link.
- Manga cards use a relative desc/{manga id} link.
- Player route declarations do not use the same leading-slash convention as the other routes.
- Relative links resolve against the current route context and may not produce the intended root path.

## Route verification checklist

- [ ] Open each route in a fresh tab.
- [ ] Refresh each nested route.
- [ ] Navigate from the parent screen.
- [ ] Test identifiers with spaces and punctuation.
- [ ] Test missing and invalid identifiers.
- [ ] Confirm host SPA fallback.
- [ ] Test browser back and forward.
- [ ] Capture screenshots only after verifying the real route.

## Recommended improvements

1. Use root-absolute route declarations consistently.
2. Use parameter names that describe identifiers.
3. Centralize route path builders.
4. Add not-found and route error screens.
5. Add browser tests for direct navigation and refresh.
6. Encode path segments exactly once.

These are recommendations, not implemented changes.
