# LinkedIn Professional Guru

**AI-powered Career Intelligence Platform using n8n and Ollama**

[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![GitHub Release](https://img.shields.io/github/v/release/sahillad96/linkedin-professional-guru)](releases)
[![Status](https://img.shields.io/badge/Status-Prototype-blue.svg)](#project-status)

## Overview

LinkedIn Professional Guru is a fully local, open-source AI Career Intelligence Platform that analyzes LinkedIn profiles, resumes, and job descriptions using large language models—without relying on cloud AI services or paid APIs.

Built with **n8n** for workflow automation and **Ollama** for local LLM inference, this platform delivers:

- 🧠 **LinkedIn Profile Analysis** – Extract insights, skills, and career trajectory
- 📄 **Resume Scoring & ATS Compatibility** – Analyze fit and suggest improvements
- 💼 **Job-Resume Matching** – Compare resumes against job descriptions
- 🎯 **Career Roadmaps** – Generate personalized progression paths
- 🚀 **Learning Recommendations** – Identify skill gaps and certifications
- 🏠 **100% Local & Open Source** – No vendor lock-in, no usage limits

## Quick Start

### Prerequisites

- Docker & Docker Compose
- 8GB RAM (minimum), 16GB+ recommended
- 20GB disk space for LLM models

### Installation

```bash
# Clone repository
git clone https://github.com/sahillad96/linkedin-professional-guru.git
cd linkedin-professional-guru

# Copy environment file
cp docker/.env.example docker/.env

# Start services
cd docker
docker-compose up -d

# Wait for services (2-3 minutes)
sleep 180

# Access n8n
open http://localhost:5678
```

For detailed setup, see [Installation Guide](docs/Installation.md).

## Key Features

### 🔧 Fully Local & Offline
- All LLM inference runs on your machine
- No data sent to external APIs
- Works without internet connection
- Complete data privacy

### 🤖 AI-Powered Analysis
- Llama 3.2 (3B) local language model
- Custom prompt engineering for career analysis
- Structured JSON output for integrations
- Extensible prompt management system

### 📊 Comprehensive Reports
- Markdown formatting for documentation
- JSON export for programmatic access
- PDF generation (v0.6.0+)
- Sample reports for reference

### 🔄 Workflow Automation
- Visual workflow builder (n8n)
- Modular, reusable components
- HTTP request handling
- JSON parsing and transformation

## Project Status

### ✅ Completed (v0.1.0)
- Docker containerization
- n8n Community Edition setup
- Ollama integration
- HTTP request workflows
- JSON parsing
- LinkedIn profile analyzer prototype

### 🚀 Roadmap

| Version | Features | ETA |
|---------|----------|-----|
| **v0.2.0** | Dynamic input, prompt management, markdown reports | Q3 2026 |
| **v0.3.0** | ATS analyzer, keyword matching, resume scoring | Q3 2026 |
| **v0.4.0** | Resume analyzer, job matcher | Q4 2026 |
| **v0.5.0** | Career & learning roadmaps, certifications | Q4 2026 |
| **v0.6.0** | HTML & PDF exports | Q1 2027 |
| **v1.0.0** | Production release | Q2 2027 |

Full roadmap: [Roadmap.md](docs/Roadmap.md)

## Repository Structure

```
linkedin-professional-guru/
├── docker/              # Docker configuration & compose files
├── docs/                # Complete documentation
├── prompts/             # AI prompt templates (versioned)
├── workflows/           # n8n workflow definitions (JSON)
├── reports/             # Generated analysis reports
├── samples/             # Test data & examples
├── templates/           # Report templates
├── assets/              # Images, icons, branding
└── .github/             # GitHub templates & CI/CD
```

Detailed breakdown: [Architecture.md](docs/Architecture.md)

## Usage

### Run LinkedIn Profile Analysis

1. Navigate to n8n: `http://localhost:5678`
2. Open **LinkedIn Profile Analyzer** workflow
3. Paste LinkedIn profile text in the input
4. Execute workflow
5. View generated report in `reports/markdown/`

### Customize Prompts

Edit prompts in `prompts/profile-analysis/`:
- `system.md` – System-level instructions
- `user.md` – User query template
- `v1.md` – Current version

See [Prompt Guide](docs/PromptGuide.md) for details.

### Add New Workflows

1. Create feature branch: `git checkout -b feature/new-analyzer`
2. Design workflow in n8n UI
3. Export as JSON to `workflows/`
4. Document in [Workflow Guide](docs/WorkflowGuide.md)
5. Submit pull request

See [Contributing Guide](CONTRIBUTING.md).

## Documentation

| Document | Purpose |
|----------|----------|
| [Installation.md](docs/Installation.md) | Setup & deployment |
| [Architecture.md](docs/Architecture.md) | System design & structure |
| [WorkflowGuide.md](docs/WorkflowGuide.md) | n8n workflows explained |
| [PromptGuide.md](docs/PromptGuide.md) | AI prompt engineering |
| [API.md](docs/API.md) | REST API reference |
| [DevelopmentPlan.md](docs/DevelopmentPlan.md) | Technical roadmap |
| [Versioning.md](docs/Versioning.md) | Versioning strategy |
| [Changelog.md](CHANGELOG.md) | Release notes |

## Development

### Local Development

```bash
# Start services
cd docker
docker-compose up -d

# Monitor logs
docker-compose logs -f n8n

# Stop services
docker-compose down
```

### Testing

```bash
# Run sample workflows
cd workflows/profile-analysis
# Use sample data from samples/ directory
```

See [Development Guide](docs/DevelopmentGuide.md).

## Technology Stack

- **Automation**: n8n (Community Edition)
- **LLM**: Ollama + Llama 3.2 (3B)
- **Containerization**: Docker & Docker Compose
- **Workflows**: JSON (n8n format)
- **Prompts**: Markdown
- **Reports**: Markdown, JSON, PDF
- **Version Control**: Git & GitHub

## Security

- All data processed locally
- No API keys or credentials in code
- `.env` files are `.gitignore`'d
- See [Security Policy](SECURITY.md)

## Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Follow [Contributing Guide](CONTRIBUTING.md)
4. Submit a pull request

See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## Community & Support

- **Issues**: [GitHub Issues](https://github.com/sahillad96/linkedin-professional-guru/issues)
- **Discussions**: [GitHub Discussions](https://github.com/sahillad96/linkedin-professional-guru/discussions)
- **Documentation**: [Full Docs](docs/)

## Roadmap & Vision

Our goal: **The most powerful, privacy-focused, open-source career intelligence platform.**

Future directions:
- Multi-agent architecture
- Knowledge base & RAG
- GitHub portfolio analysis
- PostgreSQL integration
- Mobile app
- Self-hosted SaaS option

See [Roadmap.md](docs/Roadmap.md).

## License

MIT License – see [LICENSE](LICENSE) for details.

## Project Lead

**Sahil Lad** – [@sahillad96](https://github.com/sahillad96)

---

**Made with ❤️ for career growth & AI automation**
