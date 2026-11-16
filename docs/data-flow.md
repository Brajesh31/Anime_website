# 🔀 Data flow

## Anime search flow

```mermaid
sequenceDiagram
  actor User
  participant Page as AnimeHome
  participant API as Anime catalog API
  participant Router as React Router
  participant Detail as AnimeDescPage
  User->>Page: Enter search query
  User->>Page: Submit form
  Page->>API: GET /anime/gogoanime/{query}
  API-->>Page: Search response
  Page->>Page: Store results in state
  Page-->>User: Render available result cards
  User->>Router: Select a result
  Router->>Detail: Navigate to /anime/{id}
  Detail->>API: GET /anime/gogoanime/info/{id}
  API-->>Detail: Metadata and episode list
  Detail->>Detail: Group episodes into chunks of ten
  Detail-->>User: Render detail and episode links
```

## Recent episode flow

1. `AnimeHome` mounts.
2. Its effect requests the recent-episodes endpoint.
3. A response containing `results` is stored in `recentTitle`.
4. The component maps items into links.
5. The recent player uses route parameters to request metadata and playback data.

This flow assumes that the provider continues to return the expected `results`, `id`, `episodeId`, image, and title fields.

## Playback flow

```mermaid
flowchart TD
  A[User selects an episode] --> B[Player route]
  B --> C[Read route parameter]
  C --> D[Request episode playback metadata]
  D --> E{Response contains source?}
  E -->|Yes| F[Store selected media URL]
  F --> G[ReactPlayer renders controls]
  E -->|No| H[Show a useful unavailable state]
  D -->|Request failure| I[Show error and retry guidance]
```

The final two states are recommended behavior; the current implementation mainly logs request errors and may remain on a loading message. Do not assume robust fallback exists yet.

## Manga flow

The manga screen submits a query to a local path beginning with `/aviv2/manga/info/`. Vite development configuration proxies selected paths to an external service. The Vercel configuration includes corresponding rewrite experiments. The response is stored as a list, but the current component contains incomplete and inconsistent rendering logic.

## Trust boundary

All provider data is untrusted input. Validate arrays, object properties, IDs, strings, image URLs, and media URLs before rendering or passing them to a player. Never treat a provider response as proof that the media is licensed for redistribution.
