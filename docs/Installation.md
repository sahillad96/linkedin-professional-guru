# Installation

Purpose
- Provide step-by-step instructions for setting up the project locally.

Usage
- Prerequisites: Docker, Docker Compose, Git, Ollama, VS Code.
- Quickstart:
  1. Clone the repository
  2. Copy docker/.env.example → .env and edit
  3. docker compose up --build
  4. Start Ollama and n8n per docker/README.md

Folder Structure
- Where to find configuration files, prompts, workflows, and samples.

Best Practices
- Use .env for local secrets and do not commit secrets.
- Use local LLM endpoints (Ollama) — configure connection in shared workflow nodes.

Future Improvements
- Add a Makefile and an automated setup script to bootstrap the environment.
