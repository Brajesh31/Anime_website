# 📚 Documentation hub

This directory explains the application as implemented, records external assumptions, and separates current behavior from future plans.

## Start here

| Goal | Guide |
|---|---|
| Understand purpose and scope | [Project overview](project-overview.md) |
| Trace runtime composition | [Architecture](architecture.md), [System design](system-design.md) |
| Understand provider requests | [Data flow](data-flow.md), [API notes](api.md) |
| Locate source modules | [Project structure](project-structure.md) |
| Install and work locally | [Installation](installation.md), [First-run checklist](installation-checklist.md), [Development](development.md) |
| Deploy the SPA | [Deployment](deployment.md) |
| Review feature state | [Features](features.md), [Limitations](limitations.md) |
| Review accessibility | [Accessibility](accessibility.md), [Accessibility test plan](accessibility-test-plan.md) |
| Review risks | [Security review](security-review.md) |
| Test behavior | [QA plan](qa.md), [Testing strategy](testing-strategy.md) |
| Capture genuine screenshots | [Demo asset guide](demo/README.md) |
| Resolve common errors | [Troubleshooting](troubleshooting.md), [FAQ](faq.md) |
| Maintain the repository | [Maintenance](maintenance.md), [Documentation rules](documentation-maintenance.md) |
| Understand terminology and diagnostics | [Glossary](glossary.md), [Observability](observability.md) |

## Architecture references
- [Architecture](architecture.md)
- [Data flow](data-flow.md)
- [System design](system-design.md)
- [Contributor workflow](workflow.md)
- [Project structure](project-structure.md)
- [ADR-0001: Client-side React SPA](adr/0001-client-side-react-spa.md)
- [Diagram index](diagrams/README.md)

## Quality and governance
- [Accessibility](accessibility.md)
- [Security review](security-review.md)
- [QA plan](qa.md)
- [Testing strategy](testing-strategy.md)
- [Documentation maintenance](documentation-maintenance.md)
- [Maintenance](maintenance.md)
- [Limitations](limitations.md)

## Demo and visuals
- [Demo gallery and screenshot capture procedure](demo/README.md)
- [Mermaid diagrams](diagrams/README.md)

## Documentation conventions
- **Implemented:** visible in checked-in code.
- **Partial:** a code path exists but is incomplete or fragile.
- **Experimental:** present as an integration/UI experiment.
- **Planned:** roadmap item only.
- **Not implemented:** no working implementation exists in the current source.

External services are dependencies, not owned infrastructure. Do not publish fake performance metrics, provider guarantees, or screenshots presented as actual application captures.
