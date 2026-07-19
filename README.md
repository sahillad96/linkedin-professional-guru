# LinkedIn Professional Guru

<div align="center">

**AI-Powered Career Intelligence Platform Using 100% Local AI**

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Version: 0.1.0](https://img.shields.io/badge/version-0.1.0-green.svg)](CHANGELOG.md)
[![Docker Ready](https://img.shields.io/badge/docker-ready-blue.svg)]()
[![Next.js 13+](https://img.shields.io/badge/next.js-13+-black.svg)](https://nextjs.org)

[🚀 Features](#features) • [📖 Docs](#documentation) • [🗺️ Roadmap](#roadmap) • [🤝 Contribute](#contributing)

</div>

---

## Overview

LinkedIn Professional Guru is a modern web application that helps professionals improve their careers using **100% local AI**. Analyze your LinkedIn profile, resume, and career goals through an intuitive interface powered by local language models.

### Key Benefits

- **🔒 Privacy First** - All data stays on your machine
- **💰 Zero Cost** - No API subscriptions or paid services
- **🌐 Offline Ready** - Works completely disconnected
- **⚙️ Full Control** - Self-hosted, fully customizable

---

## Features

### Current (v0.1.0)
✅ Docker-based environment  
✅ Ollama local LLM integration  
✅ n8n workflow automation  
✅ LinkedIn Profile Analyzer  
✅ JSON parsing & structured extraction

### Planned
📋 Resume Analyzer  
🎯 ATS Compatibility Checker  
📊 Job Description Matching  
🧠 Career Intelligence Dashboard  
📚 Learning Roadmaps & Certifications  
📄 Report Generation (Markdown, HTML, PDF)

---

## Tech Stack

**Frontend**: Next.js • React • TypeScript • Tailwind CSS • shadcn/ui  
**Backend**: n8n • Node.js  
**AI**: Ollama • Local LLMs  
**Infrastructure**: Docker • Docker Compose • Nginx

---

## Quick Start

### Prerequisites
- Docker & Docker Compose
- 4GB RAM (8GB recommended)
- 10GB disk space

### Installation

```bash
# Clone repository
git clone https://github.com/sahillad96/linkedin-professional-guru.git
cd linkedin-professional-guru

# Setup environment
cp .env.example .env

# Start services
docker-compose up -d

# Access the platform
# Frontend: http://localhost:3000
# n8n: http://localhost:5678
```

For detailed setup, see [Installation Guide](./docs/Installation.md).

---

## Architecture

```
┌─────────────────────────────┐
│  Next.js Web Interface      │
└──────────────┬──────────────┘
               │ REST API
               ▼
┌─────────────────────────────┐
│  n8n Automation Engine      │
└──────────────┬──────────────┘
               │ LLM Requests
               ▼
┌─────────────────────────────┐
│  Ollama Local LLM Server    │
└─────────────────────────────┘
```

See [Architecture Guide](./docs/Architecture.md) for details.

---

## Documentation

- [Installation Guide](./docs/Installation.md) - Setup and deployment
- [Development Guide](./docs/Development.md) - Development workflow
- [Architecture](./docs/Architecture.md) - System design
- [API Reference](./docs/API.md) - Endpoints and usage
- [Roadmap](./docs/Roadmap.md) - Feature timeline

---

## Project Structure

```
linkedin-professional-guru/
├── app/                  # Next.js application
├── components/           # React components
├── automation/           # n8n workflows & prompts
├── docker/               # Docker configuration
├── docs/                 # Documentation
├── public/               # Static assets
├── .github/              # GitHub templates
└── scripts/              # Utility scripts
```

---

## Roadmap

| Version | Target | Status |
|---------|--------|--------|
| 0.1.0   | MVP    | ✅ Complete |
| 0.2.0   | Enhanced Input | 🔄 In Progress |
| 0.3.0   | Resume & ATS | 📅 Planned |
| 1.0.0   | Production | 🎯 Target |

Detailed roadmap: [Roadmap.md](./docs/Roadmap.md)

---

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

**Quick Steps:**
1. Fork the repository
2. Create feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m 'Add feature'`
4. Push and open a Pull Request

---

## License

MIT License - see [LICENSE](LICENSE) file for details.

---

## Support

- 📖 [Documentation](./docs/)
- 🐛 [Issues](https://github.com/sahillad96/linkedin-professional-guru/issues)
- 💬 [Discussions](https://github.com/sahillad96/linkedin-professional-guru/discussions)

---

<div align="center">

Built with ❤️ for career professionals  
[⬆ Back to top](#linkedin-professional-guru)

</div>
