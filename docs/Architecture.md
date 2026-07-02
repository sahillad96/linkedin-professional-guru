# System Architecture

## Overview

LinkedIn Professional Guru follows a modular, microservices-inspired architecture designed for scalability, maintainability, and extensibility.

## Core Components

### 1. Input Handler
- Accepts LinkedIn profile URLs
- Processes resume/CV files
- Validates input data
- Formats data for processing

### 2. n8n Workflow Engine
- Orchestrates multi-step workflows
- Manages parallel execution
- Handles error recovery
- Routes data between components

### 3. LLM Processing Units

#### Profile Analyzer
- Extracts skills and competencies
- Identifies career patterns
- Analyzes professional history
- Evaluates experience level

#### ATS Optimizer
- Scores resume against job descriptions
- Identifies keyword gaps
- Suggests improvements
- Provides optimization tips

#### Recommendation Engine
- Suggests career paths
- Identifies skill gaps
- Recommends training resources
- Proposes next career moves

### 4. Report Generator
- Compiles analysis results
- Formats recommendations
- Generates exportable reports
- Creates visual summaries

## Data Flow

### Processing Pipeline

```
Input → Validation → Parsing → Preprocessing → LLM Analysis → Aggregation → Formatting → Output
```

## Technology Stack

| Component | Technology | Purpose |
|-----------|-----------|----------|
| Orchestration | n8n | Workflow management |
| LLM Runtime | Ollama | Local model serving |
| LLM Models | Mistral, Llama2 | AI processing |
| Containerization | Docker | Deployment |
| Development | Python | Data processing |
| Version Control | Git | Code management |

## Storage Architecture

```
├── workflows/
│   ├── v1.0/              # Production workflows
│   ├── v2.0/              # Development workflows
│   └── archive/           # Legacy/deprecated
├── prompts/               # LLM prompt templates
├── reports/               # Generated outputs
├── screenshots/           # Visual assets
├── assets/                # Static resources
└── docker/                # Container configs
```

## Deployment Architecture

### Development Environment
```
Local Machine
├── Docker Engine
├── n8n Container
├── Ollama Container
└── Volume Mounts
```

## Security Architecture

### Data Privacy
- All processing done locally
- No external API calls
- No data transmission
- Local storage only

### Access Control
- Docker network isolation
- Local development mode
- Authentication for n8n UI
- Secure configuration management

## Performance Optimization

### Caching Strategy
- Profile analysis cache
- LLM response cache
- Workflow execution cache

### Processing Optimization
- Parallel workflow execution
- Efficient data preprocessing
- Optimized LLM prompts
- Result batching

---

**Next Steps:**
- Review [Installation.md](Installation.md) for deployment
- Check [Roadmap.md](Roadmap.md) for upcoming enhancements
- See [CONTRIBUTING.md](../CONTRIBUTING.md) for development guidelines
# Architecture Overview

## Purpose

LinkedIn Professional Guru is designed as a local-first AI automation platform that analyzes professional profiles and produces structured career insights. The architecture emphasizes transparency, modularity, and privacy by keeping inference local through Ollama and orchestrating workflows with n8n.

## High-Level Components

1. Data Intake Layer
   - LinkedIn profile data can be supplied manually, via CSV, or through future integrations.
   - Input files are stored in the reports or assets folders during development.

2. Workflow Orchestration Layer
   - n8n hosts the automation workflows that parse input, call prompts, and manage execution logic.
   - Workflow versions are stored under workflows/v1.0, workflows/v2.0, and workflows/archive.

3. Prompt Layer
   - Prompt templates live in the prompts directory.
   - These include instructions for ATS analysis, skill mapping, role targeting, and roadmap generation.

4. Model Layer
   - Ollama serves local LLMs without sending sensitive data to third-party APIs.
   - The project is intentionally model-agnostic and can support multiple local inference backends.

5. Output Layer
   - Reports are written to reports/ in structured markdown or JSON-friendly formats.
   - Future extensions may integrate dashboards, PDF exports, or recommendation APIs.

## Suggested Data Flow

```text
User Profile Data
   -> n8n Workflow
   -> Prompt Assembly
   -> Ollama Local Model
   -> Structured Insight Generation
   -> Report Output
```

## Design Principles

- Privacy-first: no paid or external APIs required
- Local-first: all AI processing remains on the user's machine or private network
- Extensible: workflows and prompts can evolve independently
- Enterprise-ready: documentation, versioning, and governance are built in from the start

## Deployment Considerations

- Run Ollama locally or on a private internal server
- Deploy n8n through Docker for predictable environment setup
- Keep prompts versioned alongside workflows
- Use reports as artifacts for review and future benchmarking
