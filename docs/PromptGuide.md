# Prompt Guide

Purpose
- Explain how prompts are organized, versioned, and used by workflows.

Usage
- Store prompts under prompts/<area>/<version>.md and reference them from workflow nodes.

Folder Structure
- prompts/profile-analysis/
- prompts/ats-analysis/
- prompts/career-roadmap/
- prompts/learning-roadmap/

Best Practices
- Keep system, user, and versioned prompt files separate.
- Do not keep prompt text inside HTTP Request nodes; reference external files.

Future Improvements
- Add tooling to validate prompt syntax and generate diffs across versions.
