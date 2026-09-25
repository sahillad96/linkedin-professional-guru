# Architecture Guide

## System Overview

LinkedIn Professional Guru is transitioning from a containerized n8n + Ollama runtime to a standalone Next.js application.

The target runtime path is:

```
Browser
  ↓
Next.js UI
  ↓
POST /api/evaluate
  ↓
Input normalization + Zod validation
  ↓
Controlled prompt construction
  ↓
Gemini API
  ↓
Structured JSON parsing
  ↓
Zod report validation
  ↓
Report builder
  ↓
JSON response
```

## Components

### 1. Frontend

**Technology**: Next.js + React + TypeScript  
**Purpose**: Profile input and report presentation

Responsibilities:

- Collect user input
- Display validation errors
- Show loading state
- Display the structured report
- Provide print-friendly rendering

### 2. Application API

**Endpoint**: `POST /api/evaluate`

Responsibilities:

- Generate request ID
- Validate request payload
- Normalize user input
- Construct controlled prompt
- Call Gemini server-side
- Validate the provider response
- Return safe structured JSON

### 3. AI Integration

**Technology**: Gemini API

The API key stays server-side.

Configuration:

```env
GEMINI_API_KEY=
GEMINI_MODEL=
```

The model is configurable to avoid hard-coding a provider model name.

### 4. Validation

Zod validates both input and model output.

The application does not trust model output solely because the provider returned HTTP 200.

### 5. Report Builder

Report construction stays separate from the API route so the same report logic is reusable for future HTML, Markdown, and PDF output.

## Legacy Migration

The original n8n and Ollama setup remains available in the repository as historical infrastructure.

Runtime dependency on n8n is removed from the target architecture.

Original workflow files should remain under:

```
n8n-source/
```

## Security

- Never expose `GEMINI_API_KEY` to the browser.
- Never commit `.env.local`.
- Apply input length limits.
- Validate all user input server-side.
- Validate all model output before rendering.
- Avoid logging complete user profile content.
- Return safe error messages without secrets or internal stack traces.

## Future Architecture

Planned additions:

- Supabase Auth
- Supabase PostgreSQL
- Report history
- Skill-gap tracking
- Resume analysis
- Job matching
- CI-based evaluation fixtures
