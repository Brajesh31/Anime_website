# 📚 Documentation hub

This directory is the maintained technical guide for Anime Website. It separates what the code currently does from proposed work and operational assumptions.

## Start here

| Need | Document |
|---|---|
| Understand the product and its scope | [Project overview](project-overview.md) |
| Trace the runtime structure | [Architecture](architecture.md) |
| Understand requests and responses | [Data flow](data-flow.md), [API notes](api.md) |
| Find a file or module | [Project structure](project-structure.md) |
| Install and run locally | [Installation](installation.md), [Development](development.md) |
| Deploy the Vite SPA | [Deployment](deployment.md) |
| Check what is implemented | [Features](features.md), [Limitations](limitations.md) |
| Review browser accessibility | [Accessibility](accessibility.md) |
| Review security and third-party risk | [Security review](security-review.md) |
| Test route behavior | [QA plan](qa.md) |
| Capture demo screenshots | [Demo asset guide](demo/README.md) |
| Resolve common failures | [Troubleshooting](troubleshooting.md), [FAQ](faq.md) |
| Maintain the repository | [Maintenance](maintenance.md) |

## Architecture references

- [System architecture](architecture.md)
- [Request/data flow](data-flow.md)
- [Routing workflow](workflow.md)
- [Project structure](project-structure.md)
- [Architecture decision record](adr/0001-client-side-react-spa.md)

## Quality and governance

- [Accessibility checklist](accessibility.md)
- [Security review](security-review.md)
- [QA strategy](qa.md)
- [Documentation maintenance](documentation-maintenance.md)
- [Glossary](glossary.md)
- [Limitations and risks](limitations.md)

## Demo and diagrams

- [Demo gallery and screenshot capture procedure](demo/README.md)
- [Mermaid diagrams](diagrams/README.md)

## Documentation conventions

- **Implemented** means visible in the checked-in code.
- **Partial** means a code path exists but is incomplete, fragile, or relies on external conditions.
- **Planned** means a roadmap item only.
- **Not implemented** means the repository contains no working implementation for that capability.

External services must be described as dependencies, not owned infrastructure. Do not publish fake performance numbers, uptime claims, or screenshots presented as actual application captures.
