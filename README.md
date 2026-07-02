# 🚀 LinkedIn Professional Guru

<div align="center">

![LinkedIn Professional Guru](./assets/logo.png)

**AI-Powered Career Intelligence Platform Using 100% Local AI**

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Version](https://img.shields.io/badge/version-0.1.0-green.svg)](CHANGELOG.md)
[![Docker](https://img.shields.io/badge/docker-enabled-blue.svg)](./docker/)
[![TypeScript](https://img.shields.io/badge/typescript-enabled-blue.svg)](./)
[![Next.js](https://img.shields.io/badge/next.js-13+-black.svg)](https://nextjs.org)

[Features](#features) • [Installation](#installation) • [Documentation](#documentation) • [Roadmap](#roadmap) • [Contributing](#contributing)

</div>

---

## 🎯 What is LinkedIn Professional Guru?

LinkedIn Professional Guru is a modern, AI-powered career intelligence platform that helps professionals improve their careers using **completely local AI**. No API calls, no paid services, no cloud dependencies—everything runs offline on your machine.

Analyze your LinkedIn profile, resume, and career goals through an intuitive web interface. Get actionable insights powered by local language models running through Ollama.

### Why Local AI?

✅ **Privacy First** - Your data never leaves your machine
✅ **Zero Cost** - No API subscriptions or paid services
✅ **Offline Ready** - Works completely disconnected from the internet
✅ **Full Control** - Deploy and customize for your needs
✅ **Enterprise Safe** - No data sharing with third parties

---

## ✨ Features

### Current (v0.1.0)
- 🔧 Docker-based local development environment
- 🤖 Ollama integration with local LLM support
- 📊 LinkedIn Profile Analyzer prototype
- 🔄 n8n workflow automation engine
- 📝 JSON parsing and structured data extraction

### Planned (v0.2.0 - v1.0.0)
- 📋 Resume Analyzer & Scoring
- 🎯 ATS Compatibility Checker
- 📊 Job Description Matching Engine
- 🧠 Career Intelligence Dashboard
- 🗺️ Learning Roadmaps & Certification Recommendations
- 📁 GitHub Portfolio Analyzer
- 📄 Professional Reports (Markdown, HTML, PDF, JSON)
- 🔐 User Authentication & Profiles
- ⚡ Performance Optimization
- 🏢 Enterprise Features (RAG, Multi-Agent, Vector Search)

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────┐
│   Next.js Frontend (React + TypeScript) │
│   Beautiful Dashboard & Reports         │
└────────────────┬────────────────────────┘
                 │ HTTP/REST API
                 ▼
┌─────────────────────────────────────────┐
│   n8n Automation Engine                 │
│   Workflow Orchestration & Logic        │
└────────────────┬────────────────────────┘
                 │ LLM Requests
                 ▼
┌─────────────────────────────────────────┐
│   Ollama Local LLM Server               │
│   (Offline AI Processing)               │
└─────────────────────────────────────────┘
```

For detailed architecture information, see [Architecture.md](./docs/Architecture.md).

---

## 🚀 Quick Start

### Prerequisites
- Docker & Docker Compose
- 4GB RAM minimum (8GB recommended)
- 10GB disk space for models
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/sahillad96/linkedin-professional-guru.git
cd linkedin-professional-guru

# Copy environment template
cp .env.example .env

# Start all services
docker-compose up -d

# Wait for services to be ready (2-5 minutes)
docker-compose logs -f

# Access the platform
# Frontend: http://localhost:3000
# n8n: http://localhost:5678
# Ollama: http://localhost:11434
```

For detailed installation instructions, see [Installation.md](./docs/Installation.md).

### First Run

1. Open http://localhost:3000 in your browser
2. Click "Analyze LinkedIn Profile"
3. Paste your LinkedIn profile text
4. Click "Analyze"
5. View your personalized career intelligence report

---

## 📚 Documentation

| Document | Purpose |
|----------|----------|
| [Installation.md](./docs/Installation.md) | Setup and deployment guide |
| [Development.md](./docs/Development.md) | Development workflow and debugging |
| [Architecture.md](./docs/Architecture.md) | System design and components |
| [WorkflowGuide.md](./docs/WorkflowGuide.md) | n8n workflow documentation |
| [PromptGuide.md](./docs/PromptGuide.md) | LLM prompt engineering |
| [API.md](./docs/API.md) | API endpoints and usage |
| [Roadmap.md](./docs/Roadmap.md) | Feature roadmap and milestones |
| [CONTRIBUTING.md](./CONTRIBUTING.md) | Contribution guidelines |

---

## 📁 Project Structure

```
linkedin-professional-guru/
├── app/                          # Next.js app directory
│   ├── page.tsx                 # Landing page
│   ├── dashboard/               # Dashboard routes
│   ├── api/                     # API routes
│   └── layout.tsx               # Root layout
├── components/                   # React components
│   ├── landing/                 # Landing page components
│   ├── dashboard/               # Dashboard components
│   ├── common/                  # Shared components
│   └── ui/                      # shadcn/ui components
├── automation/                   # n8n workflows
│   ├── workflows/               # Workflow definitions
│   └── prompts/                 # LLM prompts
├── docker/                       # Docker configuration
│   ├── docker-compose.yml       # Compose configuration
│   ├── nginx.conf               # Reverse proxy config
│   └── Dockerfile               # Application Dockerfile
├── docs/                         # Documentation
├── public/                       # Static assets
├── scripts/                      # Utility scripts
└── .github/                      # GitHub configuration
```

---

## 🛠️ Tech Stack

### Frontend
- **Next.js 13+** - React framework with SSR
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **shadcn/ui** - Beautiful component library
- **Recharts** - Data visualization

### Backend
- **n8n Community Edition** - Workflow automation
- **Node.js** - Runtime

### AI/ML
- **Ollama** - Local LLM serving
- **Mistral/Llama 2** - Language models

### Infrastructure
- **Docker** - Containerization
- **Docker Compose** - Orchestration
- **Nginx** - Reverse proxy

---

## 🎯 Use Cases

### For Job Seekers
- 📊 Analyze your LinkedIn profile strength
- 📋 Optimize resume for ATS systems
- 🎯 Match skills against job descriptions
- 🗺️ Plan your career development

### For Career Coaches
- 📈 Generate client analysis reports
- 🧠 Identify skill gaps
- 📚 Recommend certifications
- 💼 Track career progress

### For Recruiters
- 🔍 Screen candidates efficiently
- 📊 Generate compatibility reports
- 🎯 Match candidates to roles

---

## 📈 Roadmap

See [Roadmap.md](./docs/Roadmap.md) for detailed feature roadmap.

**v0.1.0** ✅ Complete
- Docker setup
- n8n & Ollama integration
- Profile analyzer prototype

**v0.2.0** 🔄 In Progress
- Dynamic profile input
- Prompt management system
- Markdown reports

**v0.3.0** 📋 Planned
- Resume & ATS analyzers
- Keyword matching engine

**v1.0.0** 🚀 Target
- Full feature set
- Production deployment
- Public release

---

## 🤝 Contributing

We welcome contributions! See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

### Quick Contribution Guide
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see [LICENSE](LICENSE) file for details.

---

## 🙋 Support

### Getting Help
- 📖 Read the [Documentation](./docs/)
- 🐛 Check [Existing Issues](https://github.com/sahillad96/linkedin-professional-guru/issues)
- 💬 Open a [GitHub Discussion](https://github.com/sahillad96/linkedin-professional-guru/discussions)
- 📧 Email: support@linkedin-guru.local

---

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [n8n Documentation](https://docs.n8n.io)
- [Ollama Documentation](https://github.com/ollama/ollama)
- [Tailwind CSS](https://tailwindcss.com/docs)

---

## 📊 Project Stats

![GitHub Stars](https://img.shields.io/github/stars/sahillad96/linkedin-professional-guru?style=social)
![GitHub Forks](https://img.shields.io/github/forks/sahillad96/linkedin-professional-guru?style=social)
![GitHub Issues](https://img.shields.io/github/issues/sahillad96/linkedin-professional-guru)

---

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org)
- Styled with [Tailwind CSS](https://tailwindcss.com) and [shadcn/ui](https://ui.shadcn.com)
- Automated with [n8n](https://n8n.io)
- Powered by [Ollama](https://ollama.ai)

---

<div align="center">

**[⬆ Back to top](#linkedin-professional-guru)**

Made with ❤️ for career professionals worldwide

</div>
