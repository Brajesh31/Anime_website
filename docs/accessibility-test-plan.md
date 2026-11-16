# 🧪 Accessibility test plan

## Test scope

Test the landing page, anime search, anime detail/episode links, both playback routes, manga search, and the light-novel placeholder.

## Manual cases

| ID | Procedure | Pass condition |
|---|---|---|
| A11Y-01 | Navigate from page start using Tab | Focus order is logical and visible |
| A11Y-02 | Submit search using Enter | Search can be completed without pointer |
| A11Y-03 | Inspect input with screen reader | Input has a meaningful accessible name |
| A11Y-04 | Inspect cover images | Meaningful content images have relevant alt text |
| A11Y-05 | Zoom browser to 200% | Content remains usable without clipping |
| A11Y-06 | Set reduced motion preference | Nonessential motion is reduced |
| A11Y-07 | Inspect player controls with keyboard | Controls can be reached and operated |
| A11Y-08 | Simulate failed provider request | Failure is communicated in text |
| A11Y-09 | Check text and controls | Contrast is sufficient |
| A11Y-10 | Test narrow viewport | Content does not require two-dimensional scrolling |

## Evidence log template

| Date | Route | Browser/AT | Test ID | Result | Issue reference |
|---|---|---|---|---|---|
| YYYY-MM-DD | /anime | Browser + screen reader | A11Y-01 | Not yet tested | - |

Do not mark a test as passed until it has been executed.
