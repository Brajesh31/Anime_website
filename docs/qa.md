# 🧪 Quality assurance and route verification plan

## 1. Current automated checks
The CI workflow checks out the repository, sets up Node.js 20, runs npm ci, runs ESLint as an advisory step due legacy findings, builds the Vite production bundle, sets up Python, and runs the Markdown relative-link checker.

A successful workflow proves only that its required steps completed. Because lint is advisory, green CI does not mean lint is clean. It also does not prove live APIs, deployed routes, or playback work.

## 2. Route smoke-test matrix

| Route | Test | Evidence |
|---|---|---|
| / | Load landing page | Page and navigation links visible |
| /anime | Load anime page | Search and recent-feed regions render |
| /anime | Submit known query | Request and resulting UI state observable |
| /anime | Submit empty query | Safe, understandable behavior |
| /anime/:title | Open valid identifier | Metadata and episode list render |
| /anime/:title | Open invalid identifier | Error/unavailable behavior understandable |
| Standard player route | Open valid episode ID | Playback request and player state observable |
| Recent player route | Open valid anime/episode IDs | Both metadata requests inspectable |
| /manga | Submit query | Proxy request and experimental results observable |
| /manga/desc/:manga_id | Open valid/invalid ID | Detail component handles missing data |
| /ln | Open route | Placeholder clearly identified |

Player declarations and links need special attention because their leading-slash convention differs from other route declarations.

## 3. Responsive matrix

| Device class | Width | Review focus |
|---|---:|---|
| Narrow phone | 320 px | No horizontal overflow |
| Typical phone | 390 px | Search, cards, text and player fit |
| Tablet | 768 px | Grid and text density |
| Laptop | 1366 px | Content width and spacing |
| Large desktop | 1920 px | Alignment and line length |

## 4. Negative scenarios
- Provider returns HTTP 429 or 5xx.
- Network is offline.
- Provider returns invalid JSON.
- Search result array is empty.
- Result item has no identifier or image.
- Anime detail has no episodes.
- Playback response has no sources or fewer than three.
- Selected source URL is invalid or unsupported.
- Manga response has no data collection or nested English title.
- User changes route while a request is pending.
- User refreshes a nested route.
- Browser back/forward navigation.

## 5. Accessibility checks
Keyboard-only navigation, visible focus, accessible input name, meaningful links/buttons, useful image alternatives, heading hierarchy, contrast, reduced-motion support, player keyboard controls, and announced loading/error states.

## 6. Current baseline debt
The latest recorded CI run passed install, production build, and documentation-link validation. ESLint reports legacy issues including unused imports/state, prop validation, duplicate declarations, undefined identifiers, missing React list keys, and a CommonJS config global. Lint remains advisory until source findings are addressed.

## 7. Evidence requirements
Record route, sanitized identifier, browser, viewport, reproduction steps, expected/actual behavior, sanitized console/network evidence, and whether the issue reproduces with the provider unavailable. Screenshots must contain no secrets or unauthorized content. See demo/README.md.
