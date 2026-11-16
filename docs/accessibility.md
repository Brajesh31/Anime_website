# ♿ Accessibility guide

## Current accessibility status
The source uses semantic HTML elements in places, including forms, links, buttons, headings, and details/summary. Tailwind responsive classes are present. However, no formal WCAG audit or automated accessibility test suite is included. Do not claim WCAG conformance.

## Core requirements

### Keyboard
- Every interactive element must be reachable by keyboard.
- Tab order must follow visual and reading order.
- Focus must remain visible.
- Native links, buttons, inputs, and details/summary should be preferred over clickable generic containers.
- No keyboard trap may occur in menus, dialogs, or player controls.

### Forms
- Search inputs need a programmatic label, not only placeholder text.
- Validation and errors should be associated with the relevant control.
- Submission should not rely on an alert as the only feedback.
- Loading and result counts should be announced where appropriate.

### Images
- Meaningful poster art needs useful alternative text.
- Decorative artwork should use empty alt text.
- Broken image URLs should not leave confusing empty controls.
- Do not use a title string as a substitute for a clear image description in every context.

### Structure and readability
- Use a logical heading hierarchy.
- Use descriptive link text.
- Preserve readable line length and spacing.
- Do not communicate status through color alone.
- Check text and control contrast.

### Motion and media
- Respect prefers-reduced-motion for non-essential animation.
- Player controls must be keyboard-operable.
- Provide understandable unavailable/error text when media cannot load.
- Avoid autoplay behavior that surprises users; review current player props before release.

## Route-specific checks

| Screen | Review |
|---|---|
| Home | Heading hierarchy and navigation link names |
| Anime search | Label, submit action, search feedback, result card names |
| Recent feed | Image alternatives and episode link labels |
| Anime details | Poster alternative, description readability, details/summary keyboard behavior |
| Player | Keyboard-accessible controls and failure state |
| Manga | Search label, result link names, nested title handling |
| Light novels | Placeholder is announced clearly |

## Responsive review
Test at 320 px, 390 px, 768 px, 1366 px, and 1920 px. Check zoom at 200%, portrait/landscape, no horizontal scrolling for ordinary content, and controls large enough to operate.

## Manual audit record
For each review, record date, browser, assistive technology if used, route, viewport, issue, severity, and evidence. Fix critical keyboard blockers before release.

See accessibility-test-plan.md for the repeatable test matrix.
