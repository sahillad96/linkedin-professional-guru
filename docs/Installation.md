# Installation & Setup Guide

## Prerequisites

Before installing LinkedIn Professional Guru, ensure you have:

### System Requirements
- **OS**: Linux, macOS, or Windows (with WSL2)
- **RAM**: Minimum 4GB (8GB recommended)
- **Storage**: Minimum 10GB free disk space
- **CPU**: Multi-core processor (4+ cores recommended)
- **GPU**: Optional but recommended for faster LLM processing

### Required Software
- **Docker**: Version 20.10+
- **Docker Compose**: Version 1.29+
- **Git**: Version 2.30+
- **Python**: Version 3.10+ (optional, for local development)

## Installation Steps

### 1. Install Prerequisites

#### On Ubuntu/Debian
```bash
# Update package manager
sudo apt-get update
sudo apt-get upgrade -y

# Install Docker
sudo apt-get install -y docker.io docker-compose git

# Add current user to docker group
sudo usermod -aG docker $USER
newgrp docker
```

#### On macOS
```bash
# Using Homebrew
brew install docker docker-compose git

# Install Docker Desktop from https://www.docker.com/products/docker-desktop
```

#### On Windows
```powershell
# Using Chocolatey
choco install docker-desktop docker-compose git

# Or download from official websites:
# - Docker Desktop: https://www.docker.com/products/docker-desktop
# - Git: https://git-scm.com/download/win
```

### 2. Clone the Repository

```bash
# Clone repository
git clone https://github.com/sahillad96/linkedin-professional-guru.git
cd linkedin-professional-guru

# Verify directory structure
ls -la
```

### 3. Configure Docker Environment

#### Create `.env` file
```bash
cp docker/.env.example docker/.env
```

#### Edit `.env` file
```bash
vim docker/.env
```

**Configuration options:**
```env
# n8n Configuration
N8N_PORT=5678
N8N_BASIC_AUTH_ACTIVE=true
N8N_BASIC_AUTH_USER=admin
N8N_BASIC_AUTH_PASSWORD=your_secure_password

# Ollama Configuration
OLLAMA_PORT=11434
OLLAMA_MODELS=mistral,neural-chat,llama2

# System Configuration
TIMEZONE=UTC
LOG_LEVEL=info
```

### 4. Start Services with Docker Compose

```bash
# Navigate to docker directory
cd docker

# Start services in detached mode
docker-compose up -d

# View logs
docker-compose logs -f

# Check service status
docker-compose ps
```

### 5. Verify Installation

#### Check n8n
```bash
# Access n8n web interface
open http://localhost:5678
# Or: firefox http://localhost:5678
# Or: curl http://localhost:5678
```

#### Check Ollama
```bash
# Test Ollama API
curl http://localhost:11434/api/tags

# Expected response:
# {"models":[]}
```

### 6. Download LLM Models

#### Pull Ollama Models
```bash
# Connect to Ollama container
docker exec -it linkedin-guru-ollama bash

# Pull required models
ollama pull mistral
ollama pull neural-chat
ollama pull llama2

# Verify models
ollama list

# Exit container
exit
```

## Post-Installation Configuration

### n8n Configuration

1. **Login to n8n**
   - URL: `http://localhost:5678`
   - Use credentials from `.env`

2. **Configure Credentials**
   - Settings → Credentials
   - Add any required API credentials

3. **Set Up Notifications**
   - Settings → Notifications
   - Configure email/webhook alerts

## Troubleshooting

### Common Issues

#### Issue: Docker daemon not running
```bash
# Solution: Start Docker
sudo systemctl start docker  # Linux
brew services start docker  # macOS
```

#### Issue: Port already in use
```bash
# Solution: Change port in docker-compose.yml
sudo lsof -i :5678
kill -9 <PID>
```

## Verification Checklist

- [ ] Docker installed and running
- [ ] Repository cloned successfully
- [ ] `.env` file configured
- [ ] Docker services started
- [ ] n8n accessible at `http://localhost:5678`
- [ ] Ollama API responding at `http://localhost:11434`
- [ ] LLM models downloaded and loaded

## Next Steps

1. **Explore n8n**: https://docs.n8n.io/
2. **Learn Ollama**: https://ollama.ai/
3. **Review Workflows**: Check `workflows/v1.0/` directory
4. **Check Roadmap**: See [Roadmap.md](Roadmap.md)

---

**Previous**: [README.md](../README.md) | **Next**: [Architecture.md](Architecture.md)