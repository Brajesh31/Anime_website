# 🧪 Quality assurance plan

## Automated checks available now

```bash
npm ci
npm run lint
npm run build
```

These validate static code and production bundling. They do not verify third-party endpoint availability, route visuals, or playback rights.

## Route test matrix

| Route | Check | Expected verification |
|---|---|---|
| `/` | Load landing route | Links are visible and navigate to expected content routes |
| `/anime` | Load catalog | Search field accepts input; network request outcome is visible |
| `/anime` | Submit valid/invalid search | Results or a useful empty/error state appears |
| `/anime` | Recent feed | Recent items render when provider returns valid data |
| `/anime/:title` | Load detail | Metadata and episode groups render safely |
| `/anime/watch/:title` | Load player | Valid authorized source renders player; failure is visible |
| `/anime/recent/watch/:id/:title` | Load recent player | Metadata and source states are understandable |
| `/manga` | Search manga | Result list or an explicit provider error is visible |
| `/manga/desc/:manga_id` | Open detail | Page handles missing or invalid IDs |
| `/ln` | Open novel route | Placeholder state is clearly identified |

## Responsive matrix

| Viewport | Example width | Review |
|---|---:|---|
| Small phone | 320 px | No unintended horizontal overflow |
| Modern phone | 390 px | Search and cards usable |
| Tablet | 768 px | Grid and text remain readable |
| Laptop | 1366 px | Main content does not become excessively wide |
| Large desktop | 1920 px | Content remains aligned and legible |

## Negative scenarios

- Provider returns HTTP 429 or 5xx.
- Provider returns invalid JSON or an unexpected schema.
- Search query is empty or whitespace.
- Result array is empty.
- Image URL is absent or broken.
- Playback sources array is empty.
- User opens a detail route with an invalid ID.
- User refreshes a nested route after deployment.
- User navigates away while an HTTP request is pending.

## Evidence capture

Store genuine browser captures in `docs/demo/` only after checking that they contain no secrets, personal data, or unauthorized media. Include route and viewport in the filename or capture log. Use `docs/demo/README.md` as the process.
