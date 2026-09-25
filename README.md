# LinkedIn Professional Guru

<div align="center">

**AI-Powered Career Intelligence Platform**

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Version: 1.2.1](https://img.shields.io/badge/version-1.2.1-green.svg)](CHANGELOG.md)
[![Cloudflare Ready](https://img.shields.io/badge/cloudflare-ready-orange.svg)]()
[![Next.js](https://img.shields.io/badge/next.js-black.svg)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/typescript-blue.svg)](https://www.typescriptlang.org)

[🚀 Features](#features) • [📖 Docs](#documentation) • [🗺️ Roadmap](#roadmap) • [🤝 Contribute](#contributing)

</div>

---

## Overview

LinkedIn Professional Guru is a career intelligence platform for analyzing LinkedIn profiles, career goals, skills, and professional positioning.

The current migration removes n8n from the runtime path and moves workflow logic into a standalone Next.js + TypeScript application.

### Key Benefits

- **🔒 Privacy First** - Keep sensitive profile data under your application control
- **💰 Free-First Architecture** - Prefer free and open-source services where practical
- **⚙️ No n8n Runtime Dependency** - Application logic runs directly in TypeScript
- **🧩 Modular Design** - Validation, prompting, AI integration, and reporting stay separated
- **🌐 Cloudflare Ready** - Designed for low-cost edge deployment

---

## Features

### Current (v1.2.1)

✅ LinkedIn profile analysis workflow migration  
✅ Next.js + TypeScript application architecture  
✅ Server-side Gemini integration  
✅ Structured JSON validation  
✅ Input normalization and validation  
✅ Report generation and responsive report UI  
✅ API health endpoint  
✅ Retry and provider error handling  
✅ Print-friendly reports  
✅ n8n workflow source retained for migration reference  

### Planned

📋 Resume Analyzer  
🎯 ATS Compatibility Checker  
📊 Job Description Matching  
🧠 Career Intelligence Dashboard  
📚 Learning Roadmaps & Certifications  
📄 Report Generation (Markdown, HTML, PDF)  
👤 User Accounts & Report History  
🔐 Production Rate Limiting and Abuse Protection  

---

## Tech Stack

**Frontend**: Next.js • React • TypeScript • Tailwind CSS  
**Backend**: Next.js Server API • Node.js  
**AI**: Gemini API  
**Validation**: Zod  
**Source Control**: GitHub  
**Deployment**: Cloudflare  
**Future Persistence**: Supabase Free Tier  

---

## Quick Start

### Prerequisites

- Node.js 20+
- npm
- Git
- Gemini API key for AI evaluation

### Installation

```bash
# Clone repository
git clone https://github.com/sahillad96/linkedin-professional-guru.git
cd linkedin-professional-guru

# Install dependencies
npm install

# Setup environment
cp .env.example .env.local

# Start development server
npm run dev
```

Access the application:

- **Frontend**: http://localhost:3000
- **Health Check**: http://localhost:3000/api/health

For detailed setup, see [Installation Guide](https://github.com/sahillad96/linkedin-professional-guru/blob/main/docs/Installation.md).

---

## Architecture

```
┌─────────────────────────────┐
│      Next.js Web App        │
│   Form + Report Interface   │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│      /api/evaluate          │
│ Validation + Orchestration  │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│      Gemini API             │
│   Structured Evaluation     │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│   Zod + Report Builder      │
└─────────────────────────────┘
```

The original n8n workflows are retained under `n8n-source/` as migration references and are not required at runtime.

See [Architecture Guide](https://github.com/sahillad96/linkedin-professional-guru/blob/main/docs/Architecture.md) for details.

---

## Documentation

- [Installation Guide](https://github.com/sahillad96/linkedin-professional-guru/blob/main/docs/Installation.md) - Local setup and deployment
- [Development Guide](https://github.com/sahillad96/linkedin-professional-guru/blob/main/docs/Development.md) - Development workflow
- [Architecture](https://github.com/sahillad96/linkedin-professional-guru/blob/main/docs/Architecture.md) - System design
- [API Reference](https://github.com/sahillad96/linkedin-professional-guru/blob/main/docs/API.md) - Endpoints and request formats
- [Roadmap](https://github.com/sahillad96/linkedin-professional-guru/blob/main/docs/Roadmap.md) - Feature timeline
- [Migration](https://github.com/sahillad96/linkedin-professional-guru/blob/main/MIGRATION.md) - n8n to Next.js mapping

---

## Project Structure

```
linkedin-professional-guru/
├── app/                  # Next.js application and API routes
├── components/           # React components
├── lib/                  # Validation, prompts, AI, and report logic
├── types/                # Shared TypeScript types
├── tests/                # Unit and integration tests
├── n8n-source/           # Original n8n workflow exports
├── docker/               # Legacy/local infrastructure assets
├── docs/                 # Documentation
├── public/               # Static assets
├── .github/              # GitHub workflows and templates
└── scripts/              # Utility scripts
```

---

## Roadmap

| Version | Target | Status |
|---------|--------|--------|
| 0.1.0 | MVP foundation | ✅ Complete |
| 1.2.1 | n8n reliability migration | 🔄 In Progress |
| 1.3.0 | Production hardening | 📅 Planned |
| 1.4.0 | Report quality engine | 📅 Planned |
| 1.5.0 | Accounts and report history | 📅 Planned |
| 1.6.0 | LinkedIn optimization tools | 📅 Planned |
| 1.7.0 | Cybersecurity career engine | 📅 Planned |
| 1.8.0 | Resume and ATS intelligence | 📅 Planned |
| 1.9.0 | Career progress dashboard | 📅 Planned |
| 2.0.0 | AI career agent | 🎯 Long Term |

Detailed roadmap: [Roadmap.md](https://github.com/sahillad96/linkedin-professional-guru/blob/main/docs/Roadmap.md)

---

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](https://github.com/sahillad96/linkedin-professional-guru/blob/main/CONTRIBUTING.md) for guidelines.

**Quick Steps:**

1. Fork the repository
2. Create feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m 'Add feature'`
4. Push and open a Pull Request

---

## License

MIT License - see [LICENSE](https://github.com/sahillad96/linkedin-professional-guru/blob/main/LICENSE) file for details.

---

## Support

- 📖 [Documentation](https://github.com/sahillad96/linkedin-professional-guru/blob/main/docs)
- 🐛 [Issues](https://github.com/sahillad96/linkedin-professional-guru/issues)
- 💬 [Discussions](https://github.com/sahillad96/linkedin-professional-guru/discussions)

---

<div align="center">

Built with ❤️ for career professionals  
[⬆ Back to top](#linkedin-professional-guru)

</div>
