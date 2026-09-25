# n8n to Next.js Migration

## Purpose

This document tracks the migration of LinkedIn AI Professional Guru from n8n workflow orchestration to a standalone Next.js + TypeScript application.

## Source of Truth

The original n8n exports are retained under:

`n8n-source/`

They must not be modified during migration analysis.

## Target Mapping

| n8n Capability | Target Implementation | Status |
|---|---|---|
| Form Trigger | Next.js form | Planned |
| Code nodes | TypeScript modules under `lib/` | Planned |
| HTTP Request | Server-side Gemini client | Planned |
| IF nodes | TypeScript conditionals | Planned |
| Set nodes | Typed objects | Planned |
| Validation | Zod | Planned |
| Response | Next.js API + report UI | Planned |
| Retry/error handling | Explicit server logic | Planned |

## Rules

1. Preserve behavior before improving behavior.
2. Do not delete the original n8n source.
3. Do not expose secrets to the client.
4. Validate model output before rendering.
5. Keep the first migrated version stateless.
6. Prefer free and open-source dependencies.

## Verification

The migration is complete only when:

```text
npm install      passes
lint             passes
tests            pass
typecheck        passes
build            passes
```

