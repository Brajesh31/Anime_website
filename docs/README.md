# 📚 Documentation hub

The documentation describes the checked-in React/Vite application, identifies external dependencies, and separates current behavior from recommendations and future work. Start with the README at the repository root for the project overview.

## 🧭 Find the right guide

| If you need to... | Read |
|---|---|
| Understand purpose and intended scope | [Product brief](product-brief.md), [Project overview](project-overview.md) |
| Check actual implementation status | [Feature inventory](features.md), [Route reference](routes.md), [Limitations](limitations.md) |
| Understand the runtime architecture | [Architecture](architecture.md), [System design](system-design.md) |
| Follow requests and user journeys | [Data flow](data-flow.md), [Mermaid diagrams](diagrams/flows.md) |
| Understand remote provider assumptions | [API integrations](api.md), [Content rights](content-rights.md) |
| Configure local/deployed behavior | [Configuration](configuration.md), [Deployment](deployment.md) |
| Understand dependencies | [Dependency notes](dependencies.md) |
| Locate source and assets | [Project structure](project-structure.md), [Asset inventory](asset-inventory.md) |
| Install and contribute | [Installation](installation.md), [Development](development.md), [Workflow](workflow.md) |
| Validate the app | [QA plan](qa.md), [Testing strategy](testing-strategy.md), [Traceability](traceability-matrix.md) |
| Review accessibility | [Accessibility](accessibility.md), [Accessibility test plan](accessibility-test-plan.md) |
| Review security and rights | [Security review](security-review.md), [Content rights](content-rights.md) |
| Diagnose an incident | [Operations](operations.md), [Observability](observability.md), [Troubleshooting](troubleshooting.md) |
| Track project risk | [Risk register](risk-register.md), [Limitations](limitations.md) |
| Review performance | [Performance guide](performance.md) |
| Prepare a release | [Release management](release-management.md), [Changelog](../CHANGELOG.md) |
| Capture visuals | [Demo guide](demo/README.md), [Asset inventory](asset-inventory.md) |

## 🏗️ Architecture and engineering
- [Architecture](architecture.md)
- [System design](system-design.md)
- [Data flow](data-flow.md)
- [Routes and parameters](routes.md)
- [API integrations](api.md)
- [Database and persistence status](database.md)
- [Configuration](configuration.md)
- [Dependencies and supply chain](dependencies.md)
- [Project structure](project-structure.md)
- [Architecture decision records](adr/)

## 🧪 Quality and governance
- [QA plan](qa.md)
- [Testing strategy](testing-strategy.md)
- [Traceability matrix](traceability-matrix.md)
- [Accessibility](accessibility.md)
- [Accessibility test plan](accessibility-test-plan.md)
- [Security review](security-review.md)
- [Content rights](content-rights.md)
- [Risk register](risk-register.md)
- [Performance](performance.md)
- [Release management](release-management.md)
- [Maintenance](maintenance.md)

## 🛠️ Operations
- [Operations and incident response](operations.md)
- [Observability](observability.md)
- [Troubleshooting](troubleshooting.md)
- [Deployment](deployment.md)

## 📦 Product and contributor references
- [Product brief](product-brief.md)
- [Feature inventory](features.md)
- [Known limitations](limitations.md)
- [Roadmap](../ROADMAP.md)
- [Contributor workflow](workflow.md)
- [Documentation maintenance](documentation-maintenance.md)
- [Glossary](glossary.md)
- [FAQ](faq.md)
- [Demo capture guide](demo/README.md)
- [Asset inventory](asset-inventory.md)

## 📊 Diagram catalogue
The [diagram index](diagrams/README.md) lists SVG illustrations and [Mermaid sources](diagrams/flows.md): application boot, search, recent episodes, detail, playback, manga proxy, request lifecycle, provider sequence, deployment, and a clearly labeled conceptual persistence model.

## Status vocabulary
- **Implemented:** supported by checked-in code.
- **Basic:** minimal implementation with limited behavior.
- **Partial:** code exists but lacks reliability or UX behavior.
- **Experimental:** exploratory or incomplete.
- **Placeholder:** route exists without the intended feature.
- **Planned:** future work only.
- **Not implemented:** no working implementation exists.

## Documentation rules
1. Prefer source-backed statements.
2. Label proposed designs and future diagrams.
3. Keep routes and endpoint observations synchronized with source.
4. Do not invent uptime, performance, coverage, or usage metrics.
5. Do not call generated artwork a product screenshot.
6. Do not claim provider ownership or content rights without evidence.
7. Update this index when documents are added or renamed.
