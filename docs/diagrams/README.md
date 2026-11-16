# 🧩 Diagram catalogue

This folder explains the application and its major user/integration journeys.

## SVG diagrams

| File | Subject | Use |
|---|---|---|
| [system-architecture.svg](system-architecture.svg) | Browser, React, routing, provider and media boundaries | High-level architecture |
| [anime-user-flow.svg](anime-user-flow.svg) | Anime discovery journey | User flow |
| [playback-flow.svg](playback-flow.svg) | Playback metadata request and player | Integration flow |

## Mermaid source diagrams

[flows.md](flows.md) contains GitHub-rendered editable diagrams:
1. Application bootstrap and route selection.
2. Anime search journey.
3. Recent episode discovery.
4. Anime details and episode grouping.
5. Playback request and player state.
6. Manga search and proxy path.
7. Recommended request lifecycle state diagram.
8. Provider request sequence.
9. Static deployment and route fallback.
10. Conceptual future persistence ER diagram.

## Diagram conventions
- Solid arrows represent the flow described in each diagram.
- External provider boxes are outside repository ownership.
- Diagrams marked recommended, target, or conceptual are not implemented architecture.
- The future ER diagram is not a database schema.
- SVGs are technical illustrations, not browser screenshots.

## Updating diagrams
When routes, endpoints, components, or deployment rules change:
1. Inspect the changed source.
2. Update the relevant diagram and explanation.
3. Keep current and future behavior distinguishable.
4. Verify relative links.
5. Preview Mermaid rendering in GitHub.

Do not imply a backend, cache, identity service, or database exists when it does not.
