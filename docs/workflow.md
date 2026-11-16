# 🔄 Contributor workflow

## Feature workflow

```mermaid
flowchart TD
  A[Pick issue or improvement] --> B[Inspect active route and source]
  B --> C[Document behavior and acceptance criteria]
  C --> D[Implement focused change]
  D --> E[Handle loading, empty, and error states]
  E --> F[Review accessibility and responsive behavior]
  F --> G[Run lint and build]
  G --> H{Checks pass?}
  H -->|No| D
  H -->|Yes| I[Capture genuine demo evidence if useful]
  I --> J[Update docs and open PR]
  J --> K[Review and merge]
```

## Pull request evidence

A useful change description identifies affected routes, provider dependencies, user-visible behavior, rights/terms checks, responsive impact, and validation commands. Attach a screenshot only when it is an actual capture of the changed UI.

## Safe changes

Do not replace working features with decorative mockups. Keep old experimental components until their purpose and usage are checked. Remove obsolete source only through a separately reviewed cleanup change.
