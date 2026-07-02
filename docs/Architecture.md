# Architecture Guide

## System Overview

LinkedIn Professional Guru is a containerized application with three main components:

```
┌─────────────────────────────────────────────────────────────┐
│                  Web Browser (User)                          │
└────────────────────────┬────────────────────────────────────┘
                         │ HTTP/HTTPS
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                  Nginx Reverse Proxy                         │
│                 (Port 80/443)                                │
└────────────────────────┬────────────────────────────────────┘
                         │
        ┌────────────────┼────────────────┐
        │                │                │
        ▼                ▼                ▼
   ┌────────────┐  ┌─────────┐     ┌──────────┐
   │ Next.js    │  │  n8n    │     │  Ollama  │
   │ Frontend   │  │ Engine  │     │   LLM    │
   │ (Port 3000)│  │(Port   │     │(Port    │
   │            │  │ 5678)  │     │ 11434)  │
   └────────────┘  └─────────┘     └──────────┘
```

## Components

### 1. Frontend (Next.js)

**Technology**: Next.js + React + TypeScript  
**Port**: 3000  
**Purpose**: User-facing web interface

**Features**:
- Landing page
- Dashboard
- Profile analyzer UI
- Report generation and display
- Responsive design with Tailwind CSS

**File Structure**:
```
app/
├── page.tsx              # Landing page
├── dashboard/
│   ├── page.tsx          # Dashboard
│   └── analyze/          # Analysis routes
└── api/                  # Backend endpoints

components/
├── landing/              # Landing page components
├── dashboard/            # Dashboard components
└── ui/                   # Shared UI components
```

### 2. Automation Engine (n8n)

**Technology**: n8n Community Edition  
**Port**: 5678  
**Purpose**: Workflow orchestration and automation

**Workflows**:
- Profile analysis workflow
- Report generation workflow
- Data parsing and transformation
- LLM request handling

**Key Features**:
- Visual workflow builder
- HTTP node for API communication
- JSON parsing nodes
- Code execution capabilities
- Local execution (no cloud)

### 3. AI/ML Engine (Ollama)

**Technology**: Ollama + Local Language Models  
**Port**: 11434  
**Purpose**: Local LLM inference

**Supported Models**:
- Mistral 7B (default)
- Llama 2 7B
- Neural Chat
- Other GGUF format models

**Configuration**:
```env
OLLAMA_BASE_URL=http://ollama:11434
OLLAMA_MODEL=mistral
OLLAMA_TEMPERATURE=0.7
```

## Data Flow

### Profile Analysis Flow

```
1. User inputs LinkedIn profile text
   ↓
2. Frontend sends to API route (/api/analyze)
   ↓
3. API triggers n8n workflow
   ↓
4. n8n prepares prompt with profile text
   ↓
5. n8n sends request to Ollama
   ↓
6. Ollama processes with local LLM
   ↓
7. n8n parses and formats response
   ↓
8. API returns structured JSON
   ↓
9. Frontend displays analysis report
```

## Docker Compose Structure

```yaml
services:
  frontend:          # Next.js application
  n8n:              # Workflow engine
  ollama:           # LLM inference server
  nginx:            # Reverse proxy

networks:
  internal:         # Internal service communication

volumes:
  n8n_data:        # n8n workflow storage
  ollama_data:     # Model cache
```

## Security Architecture

### Network Isolation

- Services communicate only over Docker network
- No service is directly exposed except through Nginx
- All communication is internal to the machine

### Data Privacy

- All processing happens locally
- No data leaves the container environment
- No external API calls
- User data is not persisted unless explicitly exported

### Access Control

- Frontend accessible via Nginx proxy
- n8n editor accessible (for configuration)
- Ollama only accessible from n8n

## Performance Considerations

### Resource Allocation

```
Container      | Recommended | Minimum
─────────────────────────────────────
Frontend       | 512MB       | 256MB
n8n            | 1GB         | 512MB
Ollama         | 4GB         | 2GB
Nginx          | 128MB       | 64MB
─────────────────────────────────────
Total          | 5.6GB       | 2.8GB
```

### Optimization Tips

1. Use SSD storage for Docker volumes
2. Allocate sufficient RAM to Docker
3. Use smaller models (7B) for faster inference
4. Enable Docker's resource limits

## Scaling Considerations

### Horizontal Scaling

Future versions may support:
- Multiple Ollama instances
- Load balancing
- Queue-based architecture
- Distributed processing

### Vertical Scaling

- Upgrade container resources
- Use larger language models
- Increase cache sizes

## Integration Points

### Frontend → Backend

```
POST /api/analyze
{
  "profile": "LinkedIn profile text..."
}
```

### Backend → LLM

```
POST http://ollama:11434/api/generate
{
  "model": "mistral",
  "prompt": "Analyze this profile...",
  "stream": false
}
```

## Future Architecture

Planned enhancements:
- Database layer (PostgreSQL/SQLite)
- Vector search (Qdrant)
- Multi-agent system
- Caching layer (Redis)
- Message queue (RabbitMQ)
