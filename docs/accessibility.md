# ♿ Accessibility checklist

## Current assessment

Tailwind utility classes provide some responsive layout behavior, but the current project has not been comprehensively tested with keyboard-only navigation, screen readers, or automated accessibility tooling. This document is a verification plan, not a certification.

## Document and navigation

- [ ] Set a descriptive page title in `index.html`.
- [ ] Keep document language accurate.
- [ ] Ensure every route has a clear page heading.
- [ ] Provide a way to navigate between major content areas.
- [ ] Ensure browser back/forward navigation remains predictable.
- [ ] Provide a meaningful not-found route.

## Search forms

- [ ] Give each search input a visible or programmatic label.
- [ ] Ensure submit can be triggered with Enter.
- [ ] Do not use alerts as the only search feedback.
- [ ] Announce loading, empty, and error results using appropriate status semantics.
- [ ] Preserve focus after result updates in a predictable way.

## Result cards and images

- [ ] Use descriptive alternative text for meaningful cover images.
- [ ] Use empty alt text for decorative images.
- [ ] Ensure titles and links have meaningful accessible names.
- [ ] Avoid using color alone to communicate availability or selection.
- [ ] Ensure text contrast meets WCAG AA targets.

## Playback

- [ ] Verify keyboard access to all player controls.
- [ ] Provide a clear unavailable/error message.
- [ ] Do not autoplay sound unexpectedly.
- [ ] Confirm captions/subtitles availability where provided by an authorized source.
- [ ] Ensure focus remains visible around player controls.

## Motion and responsive behavior

- [ ] Respect `prefers-reduced-motion` for animations.
- [ ] Test at 320 CSS pixels and common tablet/desktop widths.
- [ ] Check zoom to 200%.
- [ ] Avoid horizontal overflow except where a clearly labeled horizontal media rail is intentional.

## Manual test protocol

Use keyboard only: Tab, Shift+Tab, Enter, Space, and Escape where relevant. Then review the major routes with at least one screen reader. Record browser, assistive technology, route, issue, and retest result in QA notes.
