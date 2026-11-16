# 🧪 Testing strategy

## Current baseline
The project provides ESLint and Vite build scripts. A dedicated unit test runner, component test framework, browser E2E runner, and provider contract suite are not configured.

## Proposed layers
### Static checks
Run lint and production build in CI.

### Unit tests
Test pure helpers for URL construction, response normalization, episode grouping, and error mapping.

### Component tests
Mock provider services and verify loading, success, empty, and failure states. Do not call live media sources in routine tests.

### Browser tests
Check route navigation, nested-route refresh, keyboard operation, responsive behavior, and playback fallback.

### Contract fixtures
Keep sanitized JSON fixtures for known provider response shapes. Never include credentials or unauthorized copyrighted media.

## Definition of done
- [ ] Behavior and acceptance criteria are documented.
- [ ] Success and failure paths are considered.
- [ ] Automated checks pass.
- [ ] Relevant route is manually reviewed.
- [ ] Keyboard and responsive behavior are checked.
- [ ] Docs and genuine screenshots are updated where applicable.
