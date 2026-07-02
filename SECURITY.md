# Security Policy

## Supported Versions

We release patches for security vulnerabilities for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 0.1.x   | ✅                 |
| < 0.1   | ❌                 |

## Reporting a Vulnerability

Please do NOT open public issues for security vulnerabilities.

Instead, send an email to security@linkedin-guru.local with:
* Description of the vulnerability
* Steps to reproduce
* Potential impact
* Suggested fix (if any)

We will acknowledge receipt within 48 hours and provide a status update within 7 days.

## Security Features

### Data Privacy
- ✅ All processing is local - no data is sent to external servers
- ✅ No tracking or analytics
- ✅ No account or login required for basic features
- ✅ Data is not persisted unless explicitly exported

### Infrastructure Security
- ✅ Docker containerization isolates services
- ✅ Network isolation between containers
- ✅ No default credentials
- ✅ Reverse proxy with security headers

### Code Security
- ✅ Regular dependency updates
- ✅ Security scanning in CI/CD
- ✅ Code review process
- ✅ TypeScript for type safety

## Security Best Practices

### For Users
1. Keep Docker and dependencies updated
2. Run behind a firewall when exposed to network
3. Use strong authentication if adding it
4. Review exported reports before sharing
5. Keep your local models updated

### For Developers
1. Never commit credentials or secrets
2. Use environment variables for configuration
3. Validate all user inputs
4. Keep dependencies up to date
5. Follow principle of least privilege
6. Report security issues responsibly

## Vulnerability Management

We use:
- GitHub security scanning
- Dependabot for dependency updates
- OWASP guidelines for web security
- Regular security audits

## Compliance

This project aims to comply with:
- OWASP Top 10
- CWE/SANS Top 25
- Local data protection regulations (GDPR, CCPA, etc.)

Note: Since all processing is local and no data is transmitted externally, many data protection concerns are mitigated.
