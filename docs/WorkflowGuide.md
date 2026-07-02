# Workflow Guide

Purpose
- Describe n8n workflow conventions and structure used by this project.

Usage
- Place workflows under workflows/<area>/ and keep shared nodes in workflows/shared/.

Folder Structure
- workflows/profile-analysis/
- workflows/ats/
- workflows/career/
- workflows/reports/
- workflows/shared/

Best Practices
- Each workflow should have a single responsibility.
- Keep prompts out of node definitions; load from prompts/ files.

Future Improvements
- CI checks for workflow validity and unit tests for workflows.
