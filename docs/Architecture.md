# Architecture

Purpose
- Explain the high-level architecture of LinkedIn Professional Guru.

Usage
- Local deployment with Docker and n8n, powered by local LLMs (Ollama).

Folder Structure
- Describes major components: prompts, workflows, docs, docker, samples, reports, templates, assets.

Best Practices
- Keep prompts versioned and outside workflow JSON.
- Use local LLMs (Ollama) and avoid external paid APIs.
- Use Docker Compose for local reproducible environments.

Future Improvements
- Vector DB integration, multi-agent orchestration, dashboard.
