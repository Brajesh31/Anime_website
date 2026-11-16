# 🧩 Architecture diagrams

The diagrams below are maintained as Mermaid source in Markdown, so they remain reviewable and editable.

## 1. Application bootstrap and route selection

```mermaid
flowchart TD
  A[index.html] --> B[main.jsx]
  B --> C[React StrictMode]
  C --> D[App.jsx]
  D --> E[Browser Router]
  E --> F{Route}
  F --> G[Home]
  F --> H[AnimeHome]
  F --> I[Anime detail]
  F --> J[Anime player]
  F --> K[Manga]
  F --> L[Light novel placeholder]
```

## 2. Search-to-detail sequence

```mermaid
sequenceDiagram
  actor Reader
  participant Search as AnimeHome
  participant API as Remote API
  participant Detail as AnimeDescPage
  Reader->>Search: Submit title
  Search->>API: Search request
  API-->>Search: Result collection
  Search-->>Reader: Result cards
  Reader->>Detail: Select result
  Detail->>API: Info request
  API-->>Detail: Metadata and episodes
  Detail-->>Reader: Detail page
```

## 3. Playback source selection

```mermaid
flowchart TD
  A[Open episode route] --> B[Request playback metadata]
  B --> C{Response valid?}
  C -->|Yes| D{Authorized source available?}
  D -->|Yes| E[Render ReactPlayer]
  D -->|No| F[Unavailable state]
  C -->|No| G[Schema/request error]
```

The validated and authorized checks are recommended target behavior. Existing player code should be hardened before those checks are treated as implemented.


## Rendered SVG assets

These diagrams are also committed as standalone SVG image files for reuse in documentation and presentations:

- [System architecture diagram](system-architecture.svg)
- [Anime discovery user flow](anime-user-flow.svg)
- [Playback request flow](playback-flow.svg)

The SVGs are technical diagrams, not screenshots of the running application.
