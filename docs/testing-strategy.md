# 🧪 Testing strategy and quality gates

## Current coverage

The repository has static linting, a production build, and a Python documentation-link checker. It does not include a dedicated unit test runner, component suite, browser automation framework, or provider contract suite.

| Layer | Current status | What it can prove |
|---|---|---|
| ESLint | Present, advisory in CI | Reports configured static code issues |
| Vite build | Present | Source can be bundled |
| Markdown link checker | Present | Checked relative links resolve |
| Unit tests | Not configured | No automated function assertions |
| Component tests | Not configured | No rendered component behavior |
| Browser E2E | Not configured | No automated route/user journey coverage |
| Provider contract tests | Not configured | No automated API schema compatibility |
| Accessibility automation | Not configured | No automated accessibility audit |

## Local validation

```bash
npm ci
npm run lint
npm run build
python scripts/check_docs.py
```

Lint is expected to report legacy findings until source cleanup is completed. Do not ignore new findings because CI currently treats lint as advisory.

## Recommended test pyramid

### Unit level
When a service/utility layer is introduced, test URL construction, path encoding, payload normalization, missing fields, source selection, episode grouping, whitespace queries, and error classification.

### Component level
Test search submission, loading/success/empty/error states, result cards and links, episode grouping, unavailable player state, and manga rendering for valid/invalid payloads.

### Browser level
Test every declared route, search-to-detail navigation, detail-to-player navigation, recent-feed-to-player navigation, manga navigation, browser history, direct nested-route load, refresh, mobile viewport, and keyboard-only use.

### Integration/contract level
Use controlled fixtures or mocks. Do not make routine CI depend on unstable third-party services. Fixtures must not contain private data or copyrighted media.

## Test data rules
- Use synthetic identifiers and fixture payloads.
- Keep fixtures minimal and representative.
- Do not store real account data, tokens, or private headers.
- Do not commit copyrighted episodes or manga content.
- Mark mocked provider responses as fixtures, not live evidence.

## Release quality gate
A future release should require clean dependency installation, blocking lint, production build, unit/component tests, critical browser route tests, provider/content-rights review, keyboard/responsive checks, documentation validation, and dependency advisory review.

Until those layers exist, describe the project as a prototype, not a fully verified production service.
