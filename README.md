# LinkedIn Professional Guru

> 🚀 An AI-powered Career Intelligence Platform using n8n and Ollama

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Active%20Development-green.svg)](#)
[![Python](https://img.shields.io/badge/Python-3.10%2B-blue.svg)](#)
[![Docker](https://img.shields.io/badge/Docker-Supported-blue.svg)](#)

## 📋 Overview

LinkedIn Professional Guru is an enterprise-grade AI automation platform that leverages **n8n** workflows and **Ollama** local LLMs to provide intelligent career analysis and recommendations. This platform analyzes LinkedIn profiles, performs ATS (Applicant Tracking System) analysis, generates personalized career recommendations, and creates learning roadmaps—all using open-source, privacy-first technologies.

### Key Features

- 🤖 **AI-Powered Analysis** - Uses Ollama local LLMs for profile analysis
- 📊 **ATS Optimization** - Analyzes resumes for ATS compatibility
- 🎯 **Career Intelligence** - Generates personalized career recommendations
- 📚 **Learning Roadmaps** - Creates custom learning paths based on career goals
- 🔒 **Privacy-First** - All processing done locally with no external APIs
- 🐳 **Docker Support** - Easy deployment with Docker containers
- ⚙️ **n8n Integration** - Powerful, visual workflow automation
- 📈 **Scalable** - Enterprise-ready architecture

## 🏗️ Architecture

See [Architecture.md](docs/Architecture.md) for detailed system design and component interactions.

## 🚀 Quick Start

### Prerequisites

- Docker & Docker Compose
- Git
- Minimum 4GB RAM
- Minimum 10GB disk space

### Installation

Detailed installation instructions available in [Installation.md](docs/Installation.md)

```bash
# Clone the repository
git clone https://github.com/sahillad96/linkedin-professional-guru.git
cd linkedin-professional-guru

# Start services with Docker Compose
docker-compose -f docker/docker-compose.yml up -d

# Access n8n
open http://localhost:5678
```

## 📁 Project Structure

```
linkedin-professional-guru/
├── workflows/              # n8n workflow definitions
│   ├── v1.0/             # Version 1.0 workflows
│   ├── v2.0/             # Version 2.0 workflows
│   └── archive/          # Legacy workflows
├── prompts/              # LLM prompts for analysis
├── docs/                 # Documentation
│   ├── Architecture.md   # System design
│   ├── Installation.md   # Setup guide
│   ├── Roadmap.md        # Project roadmap
│   ├── Changelog.md      # Version history
│   └── FutureFeatures.md # Planned features
├── reports/             # Generated reports
├── screenshots/         # UI/workflow screenshots
├── assets/              # Images, logos, resources
├── docker/              # Docker configurations
│   ├── Dockerfile       # n8n container
│   └── docker-compose.yml# Multi-container setup
├── .gitignore           # Git ignore rules
├── LICENSE              # MIT License
└── README.md            # This file
```

## 📚 Documentation

| Document | Purpose |
|----------|----------|
| [Architecture.md](docs/Architecture.md) | System design, components, and data flow |
| [Installation.md](docs/Installation.md) | Setup instructions and configuration |
| [Roadmap.md](docs/Roadmap.md) | Project timeline and milestones |
| [Changelog.md](docs/Changelog.md) | Version history and updates |
| [FutureFeatures.md](docs/FutureFeatures.md) | Planned enhancements |
| [CONTRIBUTING.md](CONTRIBUTING.md) | Contribution guidelines |

## 🔧 Technology Stack

- **n8n** - Visual workflow automation platform
- **Ollama** - Local LLM runtime
- **Docker** - Containerization
- **Python 3.10+** - Data processing
- **Git** - Version control
- **Markdown** - Documentation

## 📅 Version Roadmap

### Version 1.0 (Current)
- LinkedIn profile analysis
- Basic ATS optimization
- Career recommendations engine
- Learning roadmap generation
- Docker deployment

### Version 2.0 (Planned)
- Advanced NLP features
- Multi-language support
- Enhanced recommendation engine
- Integration with job boards
- Performance optimization

See [Roadmap.md](docs/Roadmap.md) for detailed timeline.

## 🤝 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

```bash
# Fork the repository
# Create a feature branch
git checkout -b feature/your-feature

# Commit your changes
git commit -am 'Add new feature'

# Push to the branch
git push origin feature/your-feature

# Create a Pull Request
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📊 Project Status

- ✅ Repository setup
- ✅ Initial documentation
- 🔄 Version 1.0 development (In Progress)
- ⏳ Version 2.0 planning

## 🐛 Issues & Support

Find a bug? Have a suggestion? [Open an issue](https://github.com/sahillad96/linkedin-professional-guru/issues) on GitHub.

## 👨‍💻 Author

**Sahil Lad**
- GitHub: [@sahillad96](https://github.com/sahillad96)
- Repository: [linkedin-professional-guru](https://github.com/sahillad96/linkedin-professional-guru)

## 🙏 Acknowledgments

- n8n Community
- Ollama Project
- Open-source community

---

<div align="center">

**[⬆ back to top](#linkedin-professional-guru)**

Made with ❤️ by Sahil Lad

</div>