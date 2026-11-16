# ✅ Feature inventory

This inventory distinguishes code present in the repository from intended product direction.

## Landing and routing

- **Implemented:** React Router browser routes for home, anime, light novels, manga, anime details, and two playback views.
- **Basic:** Home page displays navigation links.
- **Gap:** No shared navigation shell or route-level not-found experience is visible in the current route table.

## Anime discovery

- **Partial:** Search state and request function exist in `AnimeHome`.
- **Partial:** Recent episode request and rendering loop exist.
- **Gap:** Input submission uses an alert, and request errors are logged rather than presented as a full error state.
- **Gap:** Search and recent item accessibility labels and empty/loading behavior need review.

## Anime detail

- **Partial:** Fetches image, description, and episodes.
- **Implemented:** Groups returned episodes in batches of ten.
- **Gap:** Assumes valid episode arrays and fields; no explicit empty/error presentation.

## Playback

- **Partial:** ReactPlayer is rendered when a source URL is selected.
- **Gap:** Source selection assumes a fixed array index.
- **Gap:** Loading, unavailable, retry, and source fallback states are not complete.
- **External dependency:** Actual playback depends on provider response and media host behavior.

## Manga

- **Experimental:** MangaDex-oriented search and cover proxy requests appear in source.
- **Gap:** The active manga route renders an incomplete screen.
- **Gap:** Manga details do not yet render a full metadata/chapter reader experience.
- **Gap:** Several older components contain duplicate or unused experimental functions.

## Light novels

- **Not implemented:** The component currently displays placeholder text only.

## Platform capabilities not present

No authentication, database, watchlist, history, subscriptions, payments, creator dashboard, moderation console, offline mode, or owned media CDN is present.
