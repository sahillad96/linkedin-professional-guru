# API Reference

## Base URL

```
http://localhost:3000/api
```

## Endpoints

### Analyze LinkedIn Profile

Analyze a LinkedIn profile and return career insights.

**Request**

```http
POST /api/analyze
Content-Type: application/json

{
  "profile": "LinkedIn profile text here..."
}
```

**Response**

```json
{
  "success": true,
  "analysis": {
    "summary": "...",
    "strengths": [...],
    "weaknesses": [...],
    "recommendations": [...]
  },
  "timestamp": "2026-07-02T12:00:00Z"
}
```

**Error Response**

```json
{
  "success": false,
  "error": "Error message here",
  "timestamp": "2026-07-02T12:00:00Z"
}
```

## Request/Response

### Content Types

- `Content-Type: application/json`

### Status Codes

| Code | Meaning |
|------|----------|
| 200  | Success |
| 400  | Bad request |
| 500  | Server error |

## Examples

### Using cURL

```bash
curl -X POST http://localhost:3000/api/analyze \
  -H "Content-Type: application/json" \
  -d '{
    "profile": "John Doe, Software Engineer with 5 years experience in Python and JavaScript"
  }'
```

### Using JavaScript

```javascript
const response = await fetch('/api/analyze', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    profile: 'Your LinkedIn profile text here...',
  }),
});

const data = await response.json();
console.log(data);
```

### Using Python

```python
import requests

response = requests.post(
    'http://localhost:3000/api/analyze',
    json={
        'profile': 'Your LinkedIn profile text here...'
    }
)

result = response.json()
print(result)
```

## Rate Limiting

Currently no rate limiting. Future versions may implement:
- Per-IP rate limits
- Per-session rate limits
- Queue-based processing

## Authentication

Currently no authentication required. Future versions will add:
- Session tokens
- API keys
- OAuth integration

## Versioning

API follows semantic versioning:
- Breaking changes: New major version
- New features: New minor version
- Bug fixes: New patch version
