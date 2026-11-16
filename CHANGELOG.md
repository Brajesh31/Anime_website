# 📋 Changelog

Notable repository changes are recorded here. This file focuses on user-visible behavior, documentation, security, and maintenance changes rather than listing every file operation.

The project has not established a tagged semantic-version release history. Entries are therefore date-based until a formal release process is adopted.

## [Unreleased]

### Documentation and repository quality
- Reworked the README badge row to use explicit HTML image elements so badge images render inside the centered HTML layout.
- Expanded the README with implementation status, route reference, architecture, setup, request journeys, security boundaries, troubleshooting, and documentation navigation.
- Added detailed Mermaid flowcharts for application boot, anime search, recent episodes, anime detail, playback, manga proxy, request lifecycle, provider sequence, deployment, and a conceptual persistence model.
- Added product, route, configuration, dependency, operations, risk, rights, asset, performance, release, and traceability documentation.
- Expanded architecture, API, data-flow, system-design, project-structure, deployment, QA, accessibility, testing, installation, development, database, troubleshooting, and maintenance guides.
- Clarified that browser screenshots are pending and that existing artwork and technical diagrams are not live UI screenshots.
- Recorded known route, provider response, playback source-selection, manga, lint, and accessibility limitations.

### Verification notes
- The previously recorded CI run passed install, production build, and documentation-link validation.
- ESLint remains advisory because existing application source has lint findings.
- The documentation changes do not claim to fix application runtime behavior.
