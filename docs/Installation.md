# Installation & Deployment Guide

## Table of Contents

1. [System Requirements](#system-requirements)
2. [Quick Start](#quick-start)
3. [Detailed Installation](#detailed-installation)
4. [Docker Setup](#docker-setup)
5. [Verification](#verification)
6. [Troubleshooting](#troubleshooting)
7. [Production Deployment](#production-deployment)

## System Requirements

### Minimum
- **OS**: Linux, macOS, Windows (WSL2)
- **RAM**: 8GB minimum
- **Disk**: 20GB free space
- **Docker**: 20.10+
- **Docker Compose**: 1.29+

### Recommended
- **RAM**: 16GB or more
- **Disk**: 50GB SSD (for model caching)
- **CPU**: Multi-core processor (4+ cores)
- **Network**: Stable internet for initial setup

### GPU Support (Optional)
- **NVIDIA GPU**: CUDA 11.8+
- **Metal Support**: macOS with Metal-capable GPU
- **AMD GPU**: ROCm support (experimental)

## Quick Start

Get up and running in 5 minutes:

```bash
# 1. Clone repository
git clone https://github.com/sahillad96/linkedin-professional-guru.git
cd linkedin-professional-guru

# 2. Configure environment
cp docker/.env.example docker/.env

# 3. Start services
cd docker
docker-compose up -d

# 4. Wait for services
sleep 180

# 5. Access n8n
open http://localhost:5678
# or
echo "Access n8n at: http://localhost:5678"
```

## Detailed Installation

### Step 1: Install Prerequisites

#### macOS

```bash
# Install Homebrew (if not installed)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Docker Desktop
brew install --cask docker

# Start Docker
open /Applications/Docker.app
```

#### Linux (Ubuntu/Debian)

```bash
# Update package manager
sudo apt-get update

# Install Docker
curl -fsSL https://get.docker.com | sudo sh

# Add user to docker group
sudo usermod -aG docker $USER

# Install Docker Compose
sudo apt-get install docker-compose-plugin

# Verify installation
docker --version
docker compose version
```

#### Windows (with WSL2)

```powershell
# Install WSL2
wsl --install

# Download Docker Desktop from:
# https://www.docker.com/products/docker-desktop

# Enable WSL2 backend in Docker Desktop Settings
```

### Step 2: Clone Repository

```bash
# Clone repository
git clone https://github.com/sahillad96/linkedin-professional-guru.git
cd linkedin-professional-guru

# Verify directory structure
ls -la
```

### Step 3: Configure Environment

```bash
# Copy example environment file
cp docker/.env.example docker/.env

# Edit .env file (optional, defaults are usually fine)
vim docker/.env
# or
code docker/.env
```

**Default .env values:**

```env
# n8n
N8N_PORT=5678
N8N_BASIC_AUTH_ACTIVE=false
N8N_ENCRYPTION_KEY=your-secret-key-here

# Ollama
OLLAMA_PORT=11434
OLLAMA_MODEL=llama3.2:3b

# Docker
TIME_ZONE=UTC
PULL_POLICY=missing
```

### Step 4: Build & Start Services

```bash
# Navigate to docker directory
cd docker

# Build images (optional)
docker-compose build

# Start services in background
docker-compose up -d

# View status
docker-compose ps
```

### Step 5: Monitor Startup

```bash
# Watch n8n startup logs
docker-compose logs -f n8n

# In another terminal, watch Ollama
docker-compose logs -f ollama

# Wait for "Listening on" messages
# Takes 2-3 minutes for first start
```

### Step 6: Access Services

```bash
# n8n Web UI
open http://localhost:5678

# Ollama API (for testing)
curl http://localhost:11434/api/tags
```

## Docker Setup

### Docker Compose File Structure

```yaml
version: '3.8'

services:
  n8n:
    # n8n workflow automation engine
    image: n8n:latest
    ports:
      - "127.0.0.1:5678:5678"
    environment:
      - N8N_PORT=${N8N_PORT}
      - N8N_PROTOCOL=http
    volumes:
      - n8n_storage:/home/node/.n8n

  ollama:
    # Local LLM inference engine
    image: ollama/ollama:latest
    ports:
      - "127.0.0.1:11434:11434"
    volumes:
      - ollama_storage:/root/.ollama
    environment:
      - OLLAMA_MODEL=${OLLAMA_MODEL}

volumes:
  n8n_storage:
  ollama_storage:
```

### Volume Management

```bash
# List volumes
docker volume ls

# Inspect n8n volume
docker volume inspect docker_n8n_storage

# Inspect Ollama volume
docker volume inspect docker_ollama_storage

# Backup volume
docker run --rm -v docker_n8n_storage:/data -v $(pwd):/backup \
  alpine tar czf /backup/n8n-backup.tar.gz -C /data .

# Restore volume
docker run --rm -v docker_n8n_storage:/data -v $(pwd):/backup \
  alpine tar xzf /backup/n8n-backup.tar.gz -C /data
```

### Network Configuration

```bash
# Create custom network (optional)
docker network create llm-network

# Inspect network
docker network inspect llm-network

# Connect container to network
docker network connect llm-network container-name
```

## Verification

### Service Health

```bash
# Check all services
docker-compose ps

# Output should show:
# NAME        STATUS         PORTS
# n8n         Up 2 minutes   127.0.0.1:5678->5678/tcp
# ollama      Up 2 minutes   127.0.0.1:11434->11434/tcp
```

### Port Verification

```bash
# Check n8n port
curl -I http://localhost:5678

# Expected: HTTP/1.1 200 OK

# Check Ollama port
curl http://localhost:11434/api/tags

# Expected: JSON response with model list
```

### Model Verification

```bash
# List available models
curl http://localhost:11434/api/tags

# Run test inference
curl -X POST http://localhost:11434/api/generate \
  -d '{
    "model": "llama3.2:3b",
    "prompt": "Hello, world!",
    "stream": false
  }'
```

### Workflow Test

1. Open n8n: http://localhost:5678
2. Navigate to **Workflows**
3. Create new workflow or import from `workflows/`
4. Execute test workflow
5. Check output in **Execution** tab

## Troubleshooting

### Services Won't Start

```bash
# Check docker daemon
docker ps

# Check logs
docker-compose logs n8n
docker-compose logs ollama

# Restart services
docker-compose restart

# Full rebuild
docker-compose down
docker-compose up -d
```

### Port Already in Use

```bash
# Find process using port 5678
lsof -i :5678

# Or change port in .env
# N8N_PORT=5679
docker-compose up -d
```

### Ollama Model Not Loading

```bash
# Pull model manually
docker exec ollama ollama pull llama3.2:3b

# Check model size
du -sh ~/.ollama/models/blobs/

# Requires ~2GB disk space
```

### Out of Memory

```bash
# Increase Docker memory
# Docker Desktop: Settings > Resources > Memory

# Linux: No limit by default
# Windows WSL2: Edit .wslconfig
[wsl2]
memory=16GB
```

### n8n Slow or Unresponsive

```bash
# Check resource usage
docker stats

# Increase n8n memory (docker-compose.yml)
services:
  n8n:
    deploy:
      resources:
        limits:
          memory: 4G
```

### Network Issues

```bash
# Check container network
docker-compose exec n8n curl http://ollama:11434/api/tags

# Add network to .env if needed
N8N_OLLAMA_URL=http://ollama:11434
```

## Production Deployment

### Security Hardening

```yaml
# docker-compose.yml (production)
services:
  n8n:
    image: n8n:latest
    restart: unless-stopped
    environment:
      - N8N_PROTOCOL=https
      - N8N_BASIC_AUTH_ACTIVE=true
      - N8N_BASIC_AUTH_USER=${N8N_USER}
      - N8N_BASIC_AUTH_PASSWORD=${N8N_PASSWORD}
    volumes:
      - n8n_storage:/home/node/.n8n
    networks:
      - internal
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:5678/healthz"]
      interval: 30s
      timeout: 10s
      retries: 3

  ollama:
    image: ollama/ollama:latest
    restart: unless-stopped
    volumes:
      - ollama_storage:/root/.ollama
    networks:
      - internal
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:11434/api/tags"]
      interval: 30s
      timeout: 10s
      retries: 3

networks:
  internal:
    driver: bridge
```

### Reverse Proxy (Nginx)

```nginx
upstream n8n {
    server n8n:5678;
}

server {
    listen 443 ssl http2;
    server_name ai.example.com;

    ssl_certificate /etc/letsencrypt/live/ai.example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/ai.example.com/privkey.pem;

    location / {
        proxy_pass http://n8n;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

### Backup Strategy

```bash
#!/bin/bash
# Daily backup script

BACKUP_DIR="/backups/linkedin-guru"
DATE=$(date +%Y%m%d_%H%M%S)

# Backup volumes
docker run --rm -v docker_n8n_storage:/data -v $BACKUP_DIR:/backup \
  alpine tar czf /backup/n8n-$DATE.tar.gz -C /data .

docker run --rm -v docker_ollama_storage:/data -v $BACKUP_DIR:/backup \
  alpine tar czf /backup/ollama-$DATE.tar.gz -C /data .

# Backup reports
tar -czf $BACKUP_DIR/reports-$DATE.tar.gz reports/

# Clean old backups (keep 7 days)
find $BACKUP_DIR -name "*.tar.gz" -mtime +7 -delete
```

### Monitoring

```bash
# Monitor service health
watch -n 5 docker-compose ps

# Monitor resource usage
docker stats --no-stream

# View logs
docker-compose logs --tail=100 -f
```

## Next Steps

1. ✅ **Installation Complete**: Services running locally
2. 📚 **Learn Architecture**: Read [Architecture.md](Architecture.md)
3. 🚀 **Try Workflows**: Import from `workflows/profile-analysis/`
4. 🛠️ **Customize**: Edit prompts in `prompts/`
5. 🤝 **Contribute**: See [Contributing Guide](../CONTRIBUTING.md)

## Support

- **Issues**: [GitHub Issues](https://github.com/sahillad96/linkedin-professional-guru/issues)
- **Discussions**: [GitHub Discussions](https://github.com/sahillad96/linkedin-professional-guru/discussions)
- **Documentation**: [Full Docs](../docs/)
