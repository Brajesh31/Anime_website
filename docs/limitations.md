# ⚠️ Known limitations and risk register

| ID | Limitation | Impact | Recommended action |
|---|---|---|---|
| L-01 | Third-party anime API is hard-coded | Endpoint changes can break discovery and player | Centralize provider config and define fallback/error states |
| L-02 | Response shapes are assumed | Missing arrays or fields can crash rendering | Validate and normalize provider responses |
| L-03 | Fixed playback source index | Provider ordering changes may select no source or an invalid source | Select the first supported, authorized source after validation |
| L-04 | Error handling is mostly console logging | Users see indefinite loading or empty areas | Add user-facing retry and unavailable states |
| L-05 | Manga route is incomplete | Search and detail experience may not work end-to-end | Complete route behavior and add fixtures |
| L-06 | Light-novel screen is placeholder | Route is not a delivered feature | Implement with a documented lawful data source or remove only after product decision |
| L-07 | No persistence | Search/player state is temporary | Add a backend only after requirements and privacy review |
| L-08 | No automated component/browser tests | Route regressions may go undetected | Add unit and E2E testing |
| L-09 | No complete accessibility audit | Keyboard/screen-reader barriers may exist | Follow the accessibility test plan |
| L-10 | Development and deployment proxies differ | A path can work locally but fail in production | Validate each hosting rewrite on deployed preview |
| L-11 | External artwork and streams have separate rights | Legal and availability exposure | Use authorized assets and sources only |

## Release blocking questions

Before public production use, verify provider permissions, content rights, API terms, rate limits, endpoint stability, direct-route rewrites, accessibility, privacy posture, and error behavior. A successful Vite build does not resolve these questions.
