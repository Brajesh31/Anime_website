# ♿ Accessibility test plan

## Scope
This plan covers the primary screens in the current React application. It is a manual test plan, not evidence of completed WCAG conformance.

## Test environment
Record browser, operating system, viewport, zoom level, assistive technology (if used), test date, and commit SHA. Test at 320 px, 390 px, 768 px, 1366 px, and 1920 px.

## Test cases

| ID | Screen | Action | Expected result |
|---|---|---|---|
| A11Y-01 | All routes | Navigate using Tab and Shift+Tab | Focus order is logical |
| A11Y-02 | All routes | Inspect focused element | Visible focus indicator |
| A11Y-03 | Anime search | Locate search input without placeholder | Input has accessible name |
| A11Y-04 | Anime search | Submit query | Result/error feedback is understandable |
| A11Y-05 | Result cards | Navigate by keyboard | Link name identifies destination |
| A11Y-06 | Recent feed | Inspect poster images | Useful alt or decorative empty alt |
| A11Y-07 | Anime details | Operate details/summary groups | Native keyboard interaction works |
| A11Y-08 | Player | Operate controls without mouse | Controls remain usable |
| A11Y-09 | Player | Simulate unavailable source | Failure is communicated |
| A11Y-10 | Manga | Use search and result links | Controls have accessible names |
| A11Y-11 | All routes | Zoom to 200% | Content remains usable |
| A11Y-12 | All routes | Check reduced motion | Non-essential animation is reduced |

## Screen-reader review
Review page title, heading order, form labels, link purpose, image alternatives, dynamic result announcements, and error messaging. Do not assume that semantic HTML alone guarantees a good experience.

## Defect severity
- **Blocker:** core flow cannot be completed by keyboard or assistive technology.
- **High:** important information/control is unavailable or unlabeled.
- **Medium:** confusing announcement, focus order, or contrast problem.
- **Low:** minor wording or consistency issue.

## Evidence
Record the test ID, steps, expected/actual behavior, browser/assistive technology, severity, and a sanitized screenshot or recording when useful. Re-test after the fix.
