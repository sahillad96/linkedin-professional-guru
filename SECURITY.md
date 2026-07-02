# Security Policy

## Reporting Vulnerabilities

Please do NOT open public issues for security vulnerabilities.

Instead, email security@linkedin-guru.local with:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)

We will acknowledge receipt within 48 hours.

## Security Features

### Data Privacy
✅ All processing is local - no external servers  
✅ No tracking or analytics  
✅ Data not persisted unless exported  
✅ No account required for basic features

### Infrastructure
✅ Docker containerization  
✅ Network isolation between containers  
✅ No default credentials  
✅ Security headers configured

## Security Best Practices

### For Users
- Keep Docker updated
- Run behind a firewall if exposed to network
- Keep local models updated
- Review exported reports before sharing

### For Developers
- Never commit credentials or secrets
- Use environment variables for configuration
- Validate all user inputs
- Keep dependencies up to date
