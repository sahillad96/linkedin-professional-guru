# Installation Guide

## Prerequisites

- **Docker** - Version 20.10 or higher
- **Docker Compose** - Version 1.29 or higher
- **System Resources**:
  - RAM: 4GB minimum (8GB recommended)
  - Disk Space: 10GB minimum (20GB recommended for multiple models)
  - CPU: Dual-core minimum (quad-core recommended)

## System Setup

### macOS

```bash
# Install Docker Desktop
# Download from https://www.docker.com/products/docker-desktop

# Verify installation
docker --version
docker-compose --version
```

### Linux (Ubuntu/Debian)

```bash
# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/download/v2.20.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Add user to docker group
sudo usermod -aG docker $USER
```

### Windows

- Install Docker Desktop for Windows
- Enable WSL 2 backend
- Download from https://www.docker.com/products/docker-desktop

## Installation Steps

### 1. Clone Repository

```bash
git clone https://github.com/sahillad96/linkedin-professional-guru.git
cd linkedin-professional-guru
```

### 2. Configure Environment

```bash
cp .env.example .env
```

Edit `.env` if needed (optional - defaults are fine for local development).

### 3. Start Services

```bash
# Start all containers in background
docker-compose up -d

# View logs to monitor startup
docker-compose logs -f
```

Wait 2-5 minutes for all services to initialize.

### 4. Verify Services

```bash
# Check service status
docker-compose ps

# Should show all services as "Up"
```

### 5. Access the Application

- **Frontend**: http://localhost:3000
- **n8n Editor**: http://localhost:5678
- **Ollama API**: http://localhost:11434

## First Run

1. Open http://localhost:3000 in your browser
2. Wait for the frontend to load (initial load may take a moment)
3. Click "Analyze LinkedIn Profile"
4. Paste sample LinkedIn profile text
5. Click "Analyze" to see results

## Troubleshooting

### Services Won't Start

```bash
# Check Docker daemon
docker ps

# Check Docker Compose version
docker-compose --version

# Clean up and restart
docker-compose down
docker-compose up -d
```

### Port Already in Use

```bash
# Find what's using the port
lsof -i :3000
lsof -i :5678
lsof -i :11434

# Kill the process or change ports in docker-compose.yml
```

### Out of Disk Space

Ollama models require significant space. Check available space:

```bash
df -h
```

Free up space or use an external volume.

### Memory Issues

If services crash due to memory:

1. Increase Docker memory allocation
2. Restart fewer containers
3. Use smaller language models

## Next Steps

- See [Development Guide](./Development.md) for development setup
- See [Architecture Guide](./Architecture.md) for system overview
- See [API Reference](./API.md) for API endpoints
