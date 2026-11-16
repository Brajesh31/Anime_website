# 🎥 Demo gallery and screenshot workflow

## Current asset status

The root-level `anime.png` is an existing project image. It is not verified to be a screenshot of a running route. No browser captures are currently checked into this folder. The paths below are reserved for genuine captures, not fabricated evidence.

## Planned capture set

| Filename | Route | Capture content |
|---|---|---|
| `home.png` | `/` | Full home viewport showing the current entry links |
| `anime-catalog.png` | `/anime` | Catalog page, search area, and recent feed state |
| `anime-details.png` | `/anime/:title` | Metadata and episode grouping with a lawful provider response |
| `manga-catalog.png` | `/manga` | Current manga route, including unfinished-state context |
| `playback.png` | `/anime/watch/:title` | Player using media that is explicitly permitted for testing |

## How to capture

1. Install dependencies using `npm ci`.
2. Start the application with `npm run dev`.
3. Open a route in a desktop browser.
4. Use browser developer tools to confirm there are no personal details, API tokens, private headers, or unauthorized media in the view.
5. Capture the page at a consistent desktop viewport, recommended 1440 × 900.
6. Capture a mobile view where layout behavior is meaningful, recommended 390 × 844.
7. Save PNG files using the exact names above.
8. Verify text is legible and no browser console or devtools overlay is visible.
9. Update this table with capture date, viewport, browser, and route.
10. Commit only screenshots that are genuine and safe to distribute.

## Screenshot metadata record

For every future capture, add a short entry:

| Field | Value |
|---|---|
| Route | Exact route path |
| Captured at | YYYY-MM-DD |
| Browser | Name and version |
| Viewport | Width × height in CSS pixels |
| Data source | Local fixture or provider name |
| Media permission | Reference to permission/terms review where applicable |

## Mockups versus screenshots

- **Screenshot:** direct capture of the running application.
- **Mockup:** designed illustration that communicates a proposed layout.
- **Project artwork:** image used for branding or decoration.
- **Diagram:** technical explanation of flow or architecture.

Label each asset correctly. Never place generated artwork in the screenshot gallery as if it proves a feature is implemented.

## Image hygiene

Prefer optimized PNG or WebP. Keep captures focused, avoid unnecessary full-page mega-images, use descriptive alt text in Markdown, and review files for secrets or personally identifying information before committing.
