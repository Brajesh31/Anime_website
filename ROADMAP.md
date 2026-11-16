# 🗺️ Product and engineering roadmap

This roadmap reflects gaps visible in the current source. Items are plans, not implemented features. Priorities are ordered by reliability and user impact, not by visual novelty.

## 🔴 Priority 1: Stabilize existing journeys

- [ ] Audit every route declaration and generated link.
- [ ] Standardize root-absolute player paths.
- [ ] Add direct-route, refresh, back, and forward navigation tests.
- [ ] Replace fixed playback source index selection with validated source selection.
- [ ] Add explicit loading, empty, error, retry, and unavailable states.
- [ ] Validate provider payloads before reading nested properties.
- [ ] Cancel stale requests when route parameters or search queries change.
- [ ] Replace console-only failures with understandable UI feedback.
- [ ] Review provider terms and document allowed integration behavior.

## 🟠 Priority 2: Engineering quality

- [ ] Resolve existing ESLint errors in focused source changes.
- [ ] Make lint a blocking CI step after the baseline is clean.
- [ ] Add unit tests for URL builders, payload normalization, and episode grouping.
- [ ] Add component tests for search, detail, and player states.
- [ ] Add browser tests for critical user journeys.
- [ ] Add sanitized provider fixtures and schema contract tests.
- [ ] Remove or replace noisy full-payload console logging.
- [ ] Review unused dependencies and update the lockfile deliberately.

## 🟡 Priority 3: Product completeness decisions

- [ ] Decide whether manga is an active product feature or a retained experiment.
- [ ] If retained, complete manga search/detail behavior and validate proxy paths.
- [ ] Decide whether light novels are in scope before building a catalog/reader.
- [ ] Define a product requirement before adding accounts, watchlists, or history.
- [ ] Define a persistence/security design before choosing a database.
- [ ] Avoid adding billing or user data without an explicit product need.

## 🟢 Priority 4: Experience and evidence

- [ ] Complete keyboard and screen-reader accessibility review.
- [ ] Review responsive behavior at documented viewport widths.
- [ ] Improve meaningful image alternatives and form labels.
- [ ] Capture genuine screenshots from verified routes.
- [ ] Measure bundle size and Core Web Vitals before setting budgets.
- [ ] Add performance improvements only with before/after evidence.

## Release gate
A production-oriented release should have clean install, blocking lint, successful build, critical route tests, understandable failure states, rights/terms review, accessibility review, dependency review, and current documentation.

## Scope discipline
Do not treat the existence of a roadmap item as proof that a feature exists. Update this file when priorities change and link completed items to evidence or commits.
