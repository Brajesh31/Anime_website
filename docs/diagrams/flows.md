# 🔀 Mermaid flowcharts, sequences, and state models

This is the editable source for GitHub-rendered diagrams. Current behavior and proposed future behavior are labeled separately.

## 1. Application boot and route selection

```mermaid
flowchart TD
 A[Browser requests site] --> B[index.html]
 B --> C[src/main.jsx]
 C --> D[React root]
 D --> E[src/App.jsx]
 E --> F[createBrowserRouter]
 F --> G{Path match}
 G --> H[Home]
 G --> I[AnimeHome]
 G --> J[AnimeDescPage]
 G --> K[AnimePlayer]
 G --> L[RecentAnimePlayer]
 G --> M[Mangadex22 / MangaDesc]
 G --> N[LightNHome placeholder]
```

## 2. Anime search journey

```mermaid
flowchart TD
 A[Open anime page] --> B[Enter search text]
 B --> C[Submit form]
 C --> D[Prevent default submit]
 D --> E[Current submit alert]
 E --> F[Axios GET search endpoint]
 F --> G{Request succeeds?}
 G -->|No| H[Log error, limited UI feedback]
 G -->|Yes| I{Response has results?}
 I -->|Yes| J[Store result list]
 J --> K[Render result cards]
 K --> L[Select title]
 L --> M[Navigate to detail route]
 I -->|No| N[Store empty result list]
 N --> O[Show current no-result message]
```

## 3. Recent episode discovery

```mermaid
flowchart TD
 A[AnimeHome mounts] --> B[useEffect]
 B --> C[GET recent episodes]
 C --> D{Request succeeds?}
 D -->|No| E[Log error]
 D -->|Yes| F{Has results?}
 F -->|Yes| G[Store recent list]
 G --> H[Render recent cards]
 H --> I[Select episode]
 I --> J[Navigate to recent player]
 F -->|No| K[Set empty list]
```

## 4. Anime detail and episode grouping

```mermaid
flowchart TD
 A[Open anime detail URL] --> B[Read title parameter]
 B --> C[GET anime info]
 C --> D{Request succeeds?}
 D -->|No| E[Log error, limited visible recovery]
 D -->|Yes| F[Read image, description, episodes]
 F --> G[Update local state]
 G --> H[Split episodes into groups of ten]
 H --> I[Render collapsible groups]
 I --> J[Select episode]
 J --> K[Navigate to player]
```

## 5. Playback request

```mermaid
flowchart TD
 A[Open player route] --> B[Read episode identifier]
 B --> C[GET playback metadata]
 C --> D{Request succeeds?}
 D -->|No| E[Log error]
 D -->|Yes| F[Read sources array]
 F --> G[Current code selects index 2]
 G --> H{Selected URL exists?}
 H -->|Yes| I[Store videoSrc]
 I --> J[Render ReactPlayer]
 H -->|No| K[No robust fallback currently]
 E --> L[Loading state may remain visible]
```

## 6. Manga search experiment

```mermaid
flowchart TD
 A[Open manga route] --> B[Enter query]
 B --> C[Submit]
 C --> D[GET local /aviv2/manga/info path]
 D --> E{Runtime environment}
 E -->|Vite dev| F[Vite proxy]
 E -->|Vercel| G[Vercel rewrites]
 F --> H[External manga proxy]
 G --> H
 H --> I[Return payload]
 I --> J[Component reads data collection]
 J --> K[Experimental result rendering]
 K --> L[Incomplete detail and cover workflow]
```

## 7. Recommended request lifecycle, target state model

```mermaid
stateDiagram-v2
 [*] --> Idle
 Idle --> Loading: Submit or mount
 Loading --> Success: Valid non-empty response
 Loading --> Empty: Valid empty response
 Loading --> Error: Network, HTTP, or schema failure
 Error --> Loading: Explicit retry
 Success --> Loading: New query or route
 Empty --> Loading: New query
```

This explicit state model is recommended future behavior. The current UI does not consistently implement every state.

## 8. Provider request sequence

```mermaid
sequenceDiagram
 actor Visitor
 participant Page as React page
 participant Axios
 participant API as External provider
 participant State as React state
 Visitor->>Page: Search or open route
 Page->>Axios: GET endpoint
 Axios->>API: HTTP request
 alt Expected payload
  API-->>Axios: JSON response
  Axios-->>Page: response.data
  Page->>Page: Read expected fields
  Page->>State: setState
  State-->>Visitor: Re-render
 else Request or schema failure
  API-->>Axios: Error or unexpected JSON
  Axios-->>Page: Rejection or invalid shape
  Page->>Page: Current code logs error
  Note over Page,Visitor: Visible recovery is incomplete
 end
```

## 9. Deployment path

```mermaid
flowchart LR
 A[Developer] --> B[npm run build]
 B --> C[dist bundle]
 C --> D[Static host]
 D --> E[Browser]
 E --> F{Request}
 F -->|Asset| G[Serve asset]
 F -->|Client route| H[Return SPA entry]
 E --> I[External API request]
 I --> J[Provider]
 K[Vite proxy] -. local development only .-> J
 L[Vercel rewrites] -. deployment routing .-> J
```

## 10. Conceptual future persistence model

```mermaid
erDiagram
 USER ||--o{ WATCHLIST_ITEM : saves
 USER ||--o{ VIEWING_PROGRESS : tracks
 CATALOG_ITEM ||--o{ WATCHLIST_ITEM : referenced_by
 CATALOG_ITEM ||--o{ VIEWING_PROGRESS : referenced_by
 USER {
  string id
  string identity_subject
  datetime created_at
 }
 CATALOG_ITEM {
  string id
  string content_type
  string provider_reference
  string display_title
 }
 WATCHLIST_ITEM {
  string id
  string user_id
  string catalog_item_id
  datetime created_at
 }
 VIEWING_PROGRESS {
  string id
  string user_id
  string catalog_item_id
  string progress_reference
  datetime updated_at
 }
```

**This ER diagram is a future design sketch only.** The current repository has no database, users, watchlist, or viewing-progress persistence. Do not create migrations from it without a reviewed product and security decision.
