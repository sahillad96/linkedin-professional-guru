# LinkedIn Professional Guru

## Repository Structure

```text
linkedin-professional-guru/
│
├── .github/
│   ├── ISSUE_TEMPLATE/
│   ├── workflows/
│   └── pull_request_template.md
│
├── assets/
│   ├── images/
│   ├── icons/
│   └── logo/
│
├── docker/
│   ├── compose.yaml
│   ├── .env.example
│   └── README.md
│
├── docs/
│   ├── Architecture.md
│   ├── Installation.md
│   ├── Roadmap.md
│   ├── Changelog.md
│   ├── PromptGuide.md
│   ├── WorkflowGuide.md
│   └── API.md
│
├── prompts/
│   ├── profile-analysis/
│   │   ├── v1.md
│   │   └── system.md
│   │
│   ├── ats-analysis/
│   │   └── v1.md
│   │
│   ├── career-roadmap/
│   │   └── v1.md
│   │
│   └── learning-roadmap/
│       └── v1.md
│
├── workflows/
│   ├── v1.0/
│   │   ├── 01-linkedin-profile-analyzer.json
│   │   ├── 02-ats-analyzer.json
│   │   ├── 03-career-roadmap.json
│   │   ├── 04-learning-roadmap.json
│   │   └── 05-report-generator.json
│   │
│   ├── shared/
│   │   ├── parse-json.json
│   │   ├── prompt-builder.json
│   │   └── save-report.json
│   │
│   └── archive/
│
├── reports/
│   ├── markdown/
│   ├── json/
│   ├── pdf/
│   └── sample-reports/
│
├── templates/
│   ├── markdown/
│   ├── html/
│   └── pdf/
│
├── samples/
│   ├── linkedin-profile.txt
│   ├── resume.txt
│   └── job-description.txt
│
├── screenshots/
│   ├── workflow/
│   ├── reports/
│   └── ui/
│
├── CHANGELOG.md
├── CONTRIBUTING.md
├── LICENSE
├── README.md
├── SECURITY.md
└── .gitignore
```

---

# Current Version

**v0.1.0**

Completed

- Docker Setup
- n8n Community Edition
- Ollama Integration
- HTTP Request Node
- JSON Parsing
- LinkedIn Profile Analyzer Prototype

---

# Roadmap

## v0.2.0

- Dynamic Profile Input
- Prompt Management
- Markdown Report Generator

## v0.3.0

- ATS Analyzer
- Keyword Analyzer

## v0.4.0

- Resume Analyzer
- Job Description Matching

## v0.5.0

- Career Roadmap Generator
- Learning Roadmap Generator

## v0.6.0

- HTML Report
- PDF Report

## v0.7.0

- GitHub Portfolio Analyzer

## v0.8.0

- Multi-Agent Workflow

## v0.9.0

- Workflow Optimization
- Local Knowledge Base

## v1.0.0

Production Release

- Complete LinkedIn Professional Guru
- Documentation
- Docker Deployment
- Local AI Support
- Open Source Release
