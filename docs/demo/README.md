# 🎬 Demo gallery and screenshot capture policy

## Current evidence
The repository contains anime.png as existing project artwork and SVG technical diagrams. It does not yet contain verified browser screenshots of the running application. Do not treat project artwork, generated mockups, SVG diagrams, or browser chrome mockups as product screenshots.

## Planned gallery

| File | Route | Capture requirement |
|---|---|---|
| home.png | / | Actual root page rendered in browser |
| anime-catalog.png | /anime | Actual search/recent page |
| anime-details.png | /anime/:title | Real metadata response and episode groups |
| manga-catalog.png | /manga | Current experimental manga route |
| playback.png | Player route | Authorized test stream only |

## Capture procedure
1. Install dependencies with npm ci.
2. Start the app with npm run dev.
3. Open the local URL in a browser.
4. Navigate to the exact route.
5. Wait for the page to settle and note provider errors.
6. Capture a desktop viewport, preferably 1440 by 900.
7. Capture a mobile viewport when reviewing responsive behavior.
8. Remove personal information, tokens, private headers, and unrelated tabs.
9. Confirm any visible media is authorized for the intended screenshot.
10. Save the image using the planned filename.
11. Add alt text and link it from README.
12. Record capture date, route, viewport, and commit in this guide.

## What not to do
- Do not create a fake browser screenshot using generated art.
- Do not use a mockup as proof that a route works.
- Do not capture copyrighted video or manga content without permission.
- Do not expose secrets or personal account details.
- Do not add empty placeholder image files just to satisfy a link.

## Visual asset types
- **Project artwork:** identity or decorative image, not interface evidence.
- **Technical diagram:** explains architecture or flow.
- **Mockup:** proposed UI concept, clearly labeled as illustrative.
- **Browser screenshot:** genuine capture of the running application at a named route.

## Screenshot acceptance checklist
- [ ] Correct route is visible.
- [ ] App is running, not a static mockup.
- [ ] No secret or private data is visible.
- [ ] Content use is permitted.
- [ ] Image is readable at repository display size.
- [ ] Alt text is accurate.
- [ ] README and asset inventory are updated.
