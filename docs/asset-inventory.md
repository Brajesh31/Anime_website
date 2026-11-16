# 🖼️ Asset inventory and visual evidence

## Purpose
This inventory distinguishes existing project assets, technical diagrams, and genuine product screenshots. An architecture illustration is not proof of a working interface.

## Existing image assets

| Path | Type | Purpose | Evidence status |
|---|---|---|---|
| anime.png | Raster image | Existing project artwork | Present |
| public/vite.svg | SVG | Vite starter asset | Present, not necessarily used |
| src/assets/react.svg | SVG | React starter asset | Present, not necessarily used |

## Technical diagrams

| Path | Format | Subject |
|---|---|---|
| docs/diagrams/system-architecture.svg | SVG | Current system boundaries and components |
| docs/diagrams/anime-user-flow.svg | SVG | Anime discovery journey |
| docs/diagrams/playback-flow.svg | SVG | Playback metadata request |
| docs/diagrams/flows.md | Mermaid | Boot, search, recent feed, details, playback, manga, deployment, sequence, state and conceptual ERD |

## Planned genuine browser captures

| Path | Route | Required capture condition |
|---|---|---|
| docs/demo/home.png | / | Real home route loaded |
| docs/demo/anime-catalog.png | /anime | Actual search/recent UI or documented empty state |
| docs/demo/anime-details.png | /anime/:title | Detail response loaded |
| docs/demo/manga-catalog.png | /manga | Current experimental screen shown honestly |
| docs/demo/playback.png | Player route | Authorized test stream only |

These files are not present until captured. Do not create empty PNG placeholders or label generated mockups as screenshots.

## Screenshot quality requirements
- Capture the real application, not a mock browser frame.
- Record route, viewport, browser, and capture date.
- Use a consistent desktop viewport and a mobile capture for responsive changes.
- Remove personal data and developer overlays.
- Never expose tokens, request headers, or unauthorized media.
- Prefer PNG for UI captures and optimize without obscuring text.
- Add useful alt text.
- Update the gallery only after verifying the asset exists and matches the named route.

## Asset contribution checklist
- [ ] Clear purpose and ownership/permission.
- [ ] Suitable format, dimensions, and file size.
- [ ] Useful alt text.
- [ ] Correct documentation reference.
- [ ] Not misrepresented as a screenshot or original artwork.
