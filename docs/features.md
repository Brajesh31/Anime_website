# ✅ Feature inventory and implementation status

This inventory is based on the current route table and inspected component source. It is deliberately conservative: a route or installed dependency does not establish a complete user-facing feature.

## Status definitions
- **Implemented:** working code path is present for the described narrow behavior.
- **Basic:** only a minimal screen or navigation element exists.
- **Partial:** a code path exists but reliability, UX, or edge handling is incomplete.
- **Experimental:** exploratory code that should not be relied on as a finished feature.
- **Placeholder:** route exists but intended product capability is not built.
- **Not implemented:** no corresponding working implementation is present.

## Feature matrix

| Feature | Status | Source evidence | Gaps |
|---|---|---|---|
| SPA bootstrap | Implemented | src/main.jsx | No shared app state architecture |
| Browser routing | Implemented | src/App.jsx | Player path conventions require validation |
| Landing page | Basic | Home.jsx | Minimal content |
| Anime search | Partial | AnimeHome.jsx | Alert on submit, limited errors, no robust loading state |
| Recent feed | Partial | AnimeHome.jsx | Console-only failure handling |
| Anime detail | Partial | AnimeDescPage.jsx | Assumes image, description and episodes schema |
| Episode grouping | Implemented | AnimeDescPage.jsx | Fixed groups of ten, assumes array entries |
| Standard playback | Partial | AnimePlayer.jsx | Reads sources[2].url without validation |
| Recent playback | Partial | RecentAnimePlayer.jsx | Fixed source index and limited recovery |
| Manga search | Experimental | Mangadex22.jsx | Incomplete result and cover behavior |
| Manga detail | Experimental | MangaDesc.jsx | Not a complete chapter/reader workflow |
| Light novels | Placeholder | LightNHome.jsx | No catalog or reader |
| AnimeBtn experiment | Experimental | AnimeBtn.jsx | Imported but not used as a route element |
| Navbar experiment | Experimental | Navbar.jsx | Not selected by current route table |

## Detailed behavior

### Landing and navigation
The root route renders Home. It is a minimal entry point, not a complete personalized dashboard. There is no account-aware navigation or saved user state.

### Anime discovery
AnimeHome keeps the input value, search results, recent episode list, and a searched flag in local state. Submitting triggers an alert and an Axios request. Search and recent responses are expected to contain results. Errors are logged to the console, so the screen does not consistently distinguish empty data from request failure.

### Anime details
AnimeDescPage reads the route parameter, requests metadata, stores image/description/episodes, and groups episodes in batches of ten. It assumes the provider returns an array and expected fields. It has no comprehensive invalid-ID, empty-data, or retry state.

### Playback
Both player components request playback metadata and use a fixed source array position. This is brittle because provider ordering and source count can change. The current UI can remain in a loading presentation when a request or source selection fails.

### Manga
Mangadex22 is the active manga route component. It calls a local proxy path and expects nested data fields. Its cover-fetch and rendering logic is incomplete. Other manga components remain in the repository as experiments and are not all routed.

### Light novels
The light-novel route renders a placeholder. No catalog, detail page, reader, or data integration is implemented.

## Platform features not present
Authentication, profiles, watchlists, favorites, viewing history, reading bookmarks, payments, subscriptions, database persistence, owned backend, admin console, moderation, offline mode, and owned media delivery are not implemented.

## Release honesty
Do not advertise partial or experimental capabilities as production-ready. Update this inventory whenever a feature changes, and link the change to source files and test evidence.
