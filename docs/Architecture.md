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