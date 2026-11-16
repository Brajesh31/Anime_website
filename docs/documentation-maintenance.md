# 📝 Documentation maintenance standard

## Purpose
Documentation is part of the maintained product. It must describe current source behavior and make gaps explicit, rather than becoming a collection of generic templates.

## Source of truth
- Route declarations: src/App.jsx.
- Component behavior: the corresponding source files.
- Dependencies and commands: package.json and package-lock.json.
- Development proxy: vite.config.js.
- Deployment rewrites: vercel.json.
- CI behavior: .github/workflows.
- Repository policies: root-level policy files.

When two documents disagree with source, inspect the source and correct the documentation.

## Writing standard
Every technical document should answer:
1. What does this feature or system area do?
2. Which source files implement it?
3. What inputs and outputs are involved?
4. What assumptions does the code make?
5. What can fail?
6. How can a maintainer verify it?
7. What is implemented versus proposed?

Avoid generic filler, invented metrics, unsupported service guarantees, and claims of production readiness.

## Diagrams
- Keep Mermaid source in Markdown so contributors can edit it.
- Use diagrams for meaningful system boundaries, request flows, state transitions, and deployment.
- Label future-state diagrams as proposals.
- Update diagrams when routes, endpoints, or responsibilities change.
- Verify Mermaid fences are balanced and links resolve.

## Images and badges
- Use explicit img elements with alt text for badges placed inside HTML layout blocks.
- Use real browser captures for screenshots.
- Distinguish project artwork, technical diagrams, mockups, and screenshots.
- Never fabricate product evidence or commit unauthorized media.
- Verify local image paths and external badge URLs.

## Change checklist
- [ ] README reflects current behavior.
- [ ] Docs index links to new documents.
- [ ] Route/API references match source.
- [ ] Mermaid diagrams render.
- [ ] Local links and image references resolve.
- [ ] New screenshots are genuine and permitted.
- [ ] Limitations and risks remain accurate.
- [ ] Changelog records meaningful changes.
