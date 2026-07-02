# Development Guide

## Setup

See [Installation.md](./Installation.md) for initial setup.

## Development Workflow

### Starting Development Environment

```bash
# Ensure all services are running
docker-compose up -d

# Watch frontend logs
docker-compose logs -f frontend

# Watch n8n logs
docker-compose logs -f n8n

# Watch Ollama logs
docker-compose logs -f ollama
```

### Making Changes

**Frontend Changes**:
- Code is mounted as volume, hot-reload enabled
- Changes appear in browser automatically
- No container restart needed

**n8n Workflows**:
- Edit workflows in n8n UI (http://localhost:5678)
- Changes persist in n8n_data volume
- Export workflows to version control when complete

**Environment Changes**:
- Edit `.env` file
- Restart affected containers: `docker-compose restart`

## Project Structure

```
app/
├── page.tsx              # Landing page
├── layout.tsx            # Root layout
├── api/
│   └── analyze/
│       └── route.ts      # Main API endpoint
└── dashboard/
    └── page.tsx          # Dashboard

components/
├── landing/
│   ├── Hero.tsx
│   ├── Features.tsx
│   └── CTA.tsx
├── dashboard/
│   ├── Analyzer.tsx
│   └── Report.tsx
└── ui/                   # shadcn/ui components

automation/
├── workflows/
│   └── profile-analysis.json
└── prompts/
    └── profile-analysis.md

public/                   # Static assets
```

## Common Tasks

### Add New API Endpoint

1. Create route file: `app/api/[feature]/route.ts`
2. Implement handler
3. Add n8n workflow trigger
4. Test with curl or Postman

### Add New Component

1. Create file in `components/`
2. Use TypeScript for type safety
3. Use Tailwind CSS for styling
4. Import shadcn/ui components as needed

### Update n8n Workflow

1. Access n8n UI: http://localhost:5678
2. Edit or create workflow
3. Test with sample data
4. Export workflow JSON
5. Commit to `automation/workflows/`

### Add New LLM Prompt

1. Create file in `automation/prompts/`
2. Use clear, structured prompts
3. Include examples for better results
4. Test with Ollama
5. Version control changes

## Testing

### Manual Testing

```bash
# Test frontend
open http://localhost:3000

# Test n8n
open http://localhost:5678

# Test API
curl -X POST http://localhost:3000/api/analyze \
  -H "Content-Type: application/json" \
  -d '{"profile": "Sample LinkedIn profile text"}'

# Test Ollama
curl -X POST http://localhost:11434/api/generate \
  -H "Content-Type: application/json" \
  -d '{"model": "mistral", "prompt": "Hello"}'
```

### Container Debugging

```bash
# Access container shell
docker-compose exec frontend bash
docker-compose exec n8n bash
docker-compose exec ollama bash

# View logs
docker-compose logs <service>
docker-compose logs --tail=100 <service>

# Check service health
docker-compose ps
```

## Debugging

### Frontend Debugging

- Open browser DevTools (F12)
- Check Network tab for API calls
- Check Console for JavaScript errors
- Use React Developer Tools extension

### API Debugging

- Check API logs: `docker-compose logs frontend`
- Use curl or Postman to test endpoints
- Add console.log() for debugging

### Workflow Debugging

- n8n has built-in debug mode
- Execute workflows with test data
- Check workflow logs in n8n UI
- Inspect node outputs

## Database Queries (Future)

When database is added:

```bash
# Access database
docker-compose exec db bash

# Run migrations
node scripts/migrate.js
```

## Performance Profiling

```bash
# Check container resource usage
docker stats

# Monitor over time
docker stats --no-stream
```

## Code Quality

### TypeScript

- All code should be TypeScript
- Avoid `any` type
- Use strict mode
- Add JSDoc comments for public APIs

### Styling

- Use Tailwind CSS utilities
- Minimal custom CSS
- Follow component patterns
- Keep components focused

## Troubleshooting

### Frontend Won't Load

```bash
# Restart frontend
docker-compose restart frontend

# Check logs
docker-compose logs frontend
```

### API Returns 500

```bash
# Check backend logs
docker-compose logs

# Restart all services
docker-compose restart
```

### LLM Not Responding

```bash
# Check Ollama status
curl http://localhost:11434/api/tags

# Restart Ollama
docker-compose restart ollama
```

## Next Steps

1. Review [Architecture.md](./Architecture.md)
2. Check existing workflows in n8n
3. Explore component library in `components/ui/`
4. Start contributing!
