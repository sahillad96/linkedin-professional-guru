# Repository Update Rules

## README Format

All future README updates must preserve the established LinkedIn Professional Guru README format.

Required structure:

1. Project title
2. Centered project description
3. License/version/technology badges
4. Navigation links
5. Overview
6. Key Benefits
7. Features
8. Tech Stack
9. Quick Start
10. Architecture
11. Documentation
12. Project Structure
13. Roadmap
14. Contributing
15. License
16. Support
17. Footer

## Rules

- Update the existing README instead of replacing it with a different documentation style.
- Preserve the project title: LinkedIn Professional Guru.
- Preserve the repository identity: sahillad96/linkedin-professional-guru.
- Preserve GitHub-relative navigation where practical.
- Keep badge style consistent.
- Keep emoji section markers consistent with the existing README.
- Keep concise technical descriptions.
- Update version numbers and feature status when implementation changes.
- Keep architecture diagrams synchronized with the actual application.
- Never document n8n as a runtime dependency after the migration is complete.
- Do not claim 100% local AI when the application uses a remote AI provider.
- Do not claim a feature is complete until the code and tests support it.
- Keep documentation links valid.
- Do not add unrelated sections unless the project structure requires them.

## Development Documentation

When a feature changes architecture, update the relevant documentation in the same change:

- README.md
- CHANGELOG.md
- docs/Architecture.md
- docs/API.md
- docs/Development.md
- docs/Installation.md
- docs/Roadmap.md

## Versioning

Use Semantic Versioning.

Update the version consistently across:

- README badges
- CHANGELOG.md
- application metadata where applicable
- release documentation

