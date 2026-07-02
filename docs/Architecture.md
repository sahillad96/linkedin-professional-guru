# System Architecture

## Overview

LinkedIn Professional Guru is a modular, scalable architecture built on containerized microservices for local AI inference and workflow automation.

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                    User Interface (Web)                      │
│                    http://localhost:5678                     │
└──────────────────────┬──────────────────────────────────────┘
                       │
┌──────────────────────▼──────────────────────────────────────┐
│                  n8n Workflow Engine                         │
│  - Visual Workflow Designer                                 │
│  - HTTP Request Handler                                     │
│  - JSON Parser & Transformer                                │
│  - Execution Scheduler                                      │
│  - Data Storage & History                                   │
└────────────────────┬─────────────────────┬──────────────────┘
                     │                     │
        ┌────────────▼────────┐   ┌────────▼──────────┐
        │  Local File System  │   │  Ollama LLM API   │
        │                    │   │  (Port 11434)     │
        │  - Workflows (JSON)│   │                   │
        │  - Prompts (MD)    │   │  - Llama 3.2 (3B) │
        │  - Reports (MD/JSON)│   │  - HTTP Endpoint │
        │  - Samples (TXT)   │   │  - Local Models   │
        └────────────────────┘   └──────────────────┘
                     │                     │
        ┌────────────▼─────────────────────▼─────┐
        │      Docker Container Network          │
        │  (Internal communication between        │
        │   n8n and Ollama services)              │
        └──────────────────────────────────────┘
```

## Technology Stack

### Core Services

| Component | Technology | Purpose | Version |
|-----------|-----------|---------|----------|
| **Automation** | n8n CE | Workflow orchestration | Latest |
| **LLM** | Ollama | Local inference | Latest |
| **Model** | Llama 3.2 | Language model | 3B params |
| **Container** | Docker | Containerization | 20.10+ |
| **Orchestration** | Docker Compose | Service management | 1.29+ |

### Data Formats

| Format | Use Case | Location |
|--------|----------|----------|
| **JSON** | Workflows, structured data | `workflows/`, `reports/` |
| **Markdown** | Prompts, documentation, reports | `prompts/`, `docs/`, `reports/` |
| **Plain Text** | Sample data, input | `samples/` |

## Repository Structure

### Root Directory

```
linkedin-professional-guru/
├── .github/              # GitHub configuration
│   ├── ISSUE_TEMPLATE/   # Issue templates
│   ├── workflows/        # GitHub Actions (future)
│   └── pull_request_template.md
│
├── docker/               # Docker configuration
│   ├── compose.yaml      # Docker Compose definition
│   ├── .env.example      # Environment template
│   └── README.md         # Docker setup guide
│
├── docs/                 # Project documentation
│   ├── Architecture.md   # This file
│   ├── Installation.md   # Setup guide
│   ├── WorkflowGuide.md  # Workflow documentation
│   ├── PromptGuide.md    # Prompt engineering
│   ├── API.md            # API reference
│   ├── Roadmap.md        # Development roadmap
│   ├── Versioning.md     # Versioning strategy
│   ├── DevelopmentGuide.md # Dev setup
│   └── Changelog.md      # Release notes (root)
│
├── prompts/              # AI prompt templates
│   ├── profile-analysis/
│   │   ├── system.md     # System prompt
│   │   ├── user.md       # User prompt template
│   │   └── v1.md         # Version 1
│   ├── ats-analysis/
│   │   └── v1.md
│   ├── career-roadmap/
│   │   └── v1.md
│   └── learning-roadmap/
│       └── v1.md
│
├── workflows/            # n8n workflow definitions
│   ├── profile-analysis/
│   │   ├── linkedin-profile-analyzer.json
│   │   ├── prompt-builder.json
│   │   └── parse-response.json
│   ├── ats-analysis/
│   │   ├── ats-analyzer.json
│   │   └── keyword-analysis.json
│   ├── career/
│   │   ├── career-roadmap.json
│   │   └── learning-roadmap.json
│   ├── reports/
│   │   ├── markdown-generator.json
│   │   ├── html-generator.json
│   │   └── pdf-generator.json
│   ├── shared/
│   │   ├── ollama-http.json
│   │   ├── parse-json.json
│   │   ├── markdown-builder.json
│   │   └── save-report.json
│   └── archive/          # Deprecated workflows
│
├── reports/              # Generated reports
│   ├── markdown/         # .md reports
│   ├── json/             # .json reports
│   ├── pdf/              # .pdf reports (v0.6.0+)
│   └── sample-reports/   # Example outputs
│
├── samples/              # Test data & examples
│   ├── linkedin-profile.txt
│   ├── resume.txt
│   ├── job-description.txt
│   └── expected-output.json
│
├── templates/            # Report templates
│   ├── markdown/
│   ├── html/
│   └── pdf/
│
├── assets/               # Project assets
│   ├── images/
│   ├── icons/
│   └── logo/
│
├── screenshots/          # UI/workflow screenshots
│   ├── workflows/
│   ├── reports/
│   └── ui/
│
├── .gitignore            # Git ignore rules
├── LICENSE               # MIT License
├── README.md             # Main documentation
├── CHANGELOG.md          # Release history
├── CONTRIBUTING.md       # Contributing guide
└── SECURITY.md           # Security policy
```

## Data Flow

### Profile Analysis Workflow

```
1. INPUT
   └─> LinkedIn Profile Text
       (from samples/ or user input)

2. PROMPT BUILDER
   └─> system.md + user.md + input
       = Complete prompt

3. OLLAMA HTTP REQUEST
   └─> POST to http://ollama:11434/api/generate
       └─> Llama 3.2 processes prompt
           └─> JSON response with analysis

4. JSON PARSER
   └─> Parse LLM response
       └─> Extract structured data

5. MARKDOWN GENERATOR
   └─> Format analysis as Markdown
       └─> Add headers, sections, formatting

6. REPORT SAVER
   └─> Save to reports/markdown/
       └─> reports/json/ (if needed)

7. OUTPUT
   └─> Professional career analysis report
```

### Workflow Execution Flow

```
n8n Workflow Execution
│
├─ Receive Input
│  └─ HTTP POST / Manual trigger
│
├─ Process Nodes (Sequential/Parallel)
│  ├─ Node 1: Transform data
│  ├─ Node 2: Call Ollama API
│  ├─ Node 3: Parse response
│  ├─ Node 4: Generate report
│  └─ Node 5: Save file
│
├─ Error Handling
│  ├─ Retry on failure
│  ├─ Fallback responses
│  └─ Error logging
│
├─ Store Execution History
│  └─ Workflow runs recorded
│
└─ Return Result
   └─ Output to user/system
```

## Service Communication

### n8n ↔ Ollama HTTP Request

```json
{
  "method": "POST",
  "url": "http://ollama:11434/api/generate",
  "headers": {
    "Content-Type": "application/json"
  },
  "body": {
    "model": "llama3.2:3b",
    "prompt": "Analyze this LinkedIn profile...",
    "stream": false,
    "temperature": 0.7
  }
}
```

### Response Parsing

```json
{
  "model": "llama3.2:3b",
  "created_at": "2024-01-15T10:30:00Z",
  "response": "{ 'analysis': { 'skills': [...], 'experience': ... } }",
  "done": true,
  "eval_count": 256,
  "eval_duration": 2000000000
}
```

## Storage Architecture

### Docker Volumes

```yaml
Volumes:
  n8n_storage:
    - Size: Variable (depends on workflow executions)
    - Contains: n8n configurations, workflow definitions, execution history
    - Mounted at: /home/node/.n8n
    - Persisted: Yes (survives container restart)

  ollama_storage:
    - Size: ~2GB per model (3B model)
    - Contains: LLM model files, model cache
    - Mounted at: /root/.ollama
    - Persisted: Yes
```

### Local File System

```
linkedin-professional-guru/
├── reports/             # Generated reports (gitignored)
│   ├── markdown/        # .md files
│   ├── json/            # .json files
│   └── pdf/             # .pdf files (future)
│
├── logs/                # Application logs (gitignored)
│   ├── n8n.log
│   └── ollama.log
│
├── .models_cache/       # Model cache (gitignored)
│   └── Downloaded models
│
└── temp/                # Temporary files (gitignored)
```

## Scalability Considerations

### Current (v0.1.0)
- **Single machine deployment**
- **Sequential workflow execution**
- **No horizontal scaling**
- **Local storage only**

### Future (v0.8.0+)
- **Multi-agent architecture**
- **Parallel workflow execution**
- **Distributed processing**
- **Database backend (PostgreSQL)**
- **Queue-based architecture** (Bull, RabbitMQ)

## Performance Characteristics

### Inference Time
- **Profile Analysis**: 30-60 seconds
- **Depends on**: Text length, prompt complexity, hardware
- **Model**: Llama 3.2 (3B)
- **Hardware**: CPU-based (GPU support future)

### Memory Usage
- **Ollama**: ~4GB (3B model loaded)
- **n8n**: ~500MB-1GB
- **Total**: ~6GB minimum
- **Recommended**: 16GB+ for comfortable operation

### Disk Usage
- **Base images**: ~2GB
- **Models**: ~2GB per model
- **Reports**: ~100KB per analysis
- **Total**: ~20GB starting, grows with reports

## Network Architecture

### Docker Network

```
Internal (bridge network)
├─ n8n (port 5678)
├─ Ollama (port 11434)
└─ Communication: Internal hostname resolution
```

### Port Mapping

| Service | Internal | External | Access |
|---------|----------|----------|--------|
| **n8n** | 5678 | 127.0.0.1:5678 | Localhost only |
| **Ollama** | 11434 | 127.0.0.1:11434 | Localhost only |

### Firewall Rules (Recommended)

```bash
# Block external access
# Only allow localhost
iptables -A INPUT -p tcp --dport 5678 -s 127.0.0.1 -j ACCEPT
iptables -A INPUT -p tcp --dport 5678 -j DROP
```

## Security Architecture

### Data Flow Security

```
User Input
    ↓
✅ Validated locally
    ↓
n8n Processing
    ↓
✅ No external API calls
    ↓
Ollama Local Inference
    ↓
✅ No data sent to cloud
    ↓
Local Report Storage
    ↓
✅ Data remains on device
```

### Container Isolation

- Services run in isolated containers
- No shared filesystem (except docker socket)
- Internal network communication
- Resource limits enforced

## Extension Points

### Adding New Analyzers

1. **Create workflow**: `workflows/new-feature/`
2. **Add prompts**: `prompts/new-feature/`
3. **Sample data**: `samples/new-feature/`
4. **Documentation**: `docs/`

### Custom LLM Models

```bash
# Pull alternative model
docker exec ollama ollama pull mistral:latest

# Update prompts for new model
# Edit docker/.env
OLLAMA_MODEL=mistral:latest
```

### Integration Points

- HTTP webhooks (n8n)
- REST API (Ollama)
- Local file system (reports)
- GitHub Actions (future CI/CD)
- Database connections (future)

## Related Documentation

- [Installation Guide](Installation.md) – Setup & deployment
- [Workflow Guide](WorkflowGuide.md) – n8n workflows explained
- [Prompt Guide](PromptGuide.md) – AI prompt engineering
- [API Reference](API.md) – REST endpoints
- [Development Guide](DevelopmentGuide.md) – Developer setup

## Future Architecture (v1.0.0+)

```
┌─────────────────────────────────────────┐
│         User Interface Layer             │
│  (Web UI, API, Mobile app)              │
└──────────────────┬──────────────────────┘
                   │
┌──────────────────▼──────────────────────┐
│      Orchestration & Gateway Layer       │
│  (API Gateway, Auth, Load Balancing)    │
└──────────────────┬──────────────────────┘
                   │
┌──────────────────▼──────────────────────────────────┐
│          Multi-Agent Orchestration                  │
│  - Profile Analyzer Agent                          │
│  - Resume Analyzer Agent                           │
│  - ATS Analyzer Agent                              │
│  - Career Roadmap Agent                            │
│  - Learning Recommendations Agent                  │
└──────────────────┬──────────────────────────────────┘
                   │
┌──────────────────▼──────────────────────────────────┐
│     Processing & Inference Layer                    │
│  - n8n Workflows                                   │
│  - Ollama (multi-model)                            │
│  - Vector Database (RAG)                           │
│  - Cache Layer                                     │
└──────────────────┬──────────────────────────────────┘
                   │
┌──────────────────▼──────────────────────────────────┐
│       Data & Storage Layer                          │
│  - PostgreSQL Database                             │
│  - File Storage                                    │
│  - Knowledge Base                                  │
└──────────────────────────────────────────────────────┘
```
