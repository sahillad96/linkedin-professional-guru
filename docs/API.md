# API Reference

## Base URL

```
http://localhost:3000/api
```

## Health

`GET /api/health`

Expected response:

```json
{
  "status": "ok",
  "version": "1.2.1"
}
```

## Evaluate Profile

`POST /api/evaluate`

Request:

```json
{
  "name": "Test User",
  "currentRole": "IT Support Engineer",
  "experience": "4 years",
  "targetRole": "Cybersecurity Engineer",
  "skills": [
    "Windows",
    "Networking",
    "Active Directory"
  ]
}
```

The exact request schema is defined by the application validation module.

## Error Responses

`400` for invalid input.

`429` when provider or application rate limits apply.

`500` for unexpected server failures.

Errors must not expose credentials, stack traces, or internal secrets.

## Testing With cURL

```bash
curl -X POST http://localhost:3000/api/evaluate \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "currentRole": "IT Support Engineer",
    "experience": "4 years",
    "targetRole": "Cybersecurity Engineer",
    "skills": ["Windows", "Networking", "Active Directory"]
  }'
```
