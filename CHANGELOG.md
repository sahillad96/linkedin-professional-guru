# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Planned
- Dynamic profile input system
- Prompt management dashboard
- Markdown report generation
- Enhanced workflow templates

## [0.1.0] - 2026-07-02

### Added
- Initial project setup
- Docker and Docker Compose configuration
- n8n Community Edition integration
- Ollama local LLM support
- LinkedIn Profile Analyzer prototype
- Basic API routes and endpoints
- Project documentation
- GitHub configuration and templates

### Infrastructure
- Multi-container Docker setup
- Nginx reverse proxy configuration
- Environment configuration system
- Health check and monitoring setup

### Documentation
- Comprehensive README
- Installation guide
- Architecture documentation
- Development guidelines
- Security policy
- Contributing guidelines

## Versioning Strategy

This project follows [Semantic Versioning](https://semver.org/):

- **MAJOR**: Breaking changes
- **MINOR**: New features (backward compatible)
- **PATCH**: Bug fixes

### Version Roadmap

- **0.1.0** (July 2026) - MVP with profile analysis
- **0.2.0** - Dynamic input and prompt management
- **0.3.0** - Resume and ATS analysis
- **0.4.0** - Job matching and scoring
- **0.5.0** - Career intelligence features
- **0.6.0** - Report generation (HTML, PDF)
- **0.7.0** - Multi-agent workflows
- **0.8.0** - RAG and knowledge base
- **0.9.0** - Performance optimization
- **1.0.0** - Production ready

---

## How to Update

1. Pull latest changes: `git pull origin main`
2. Update Docker images: `docker-compose pull`
3. Restart services: `docker-compose up -d`
4. Check logs: `docker-compose logs -f`

## Migration Guides

See docs/Migrations/ for version-specific migration guides.
