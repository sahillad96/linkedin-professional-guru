# Security Policy

## Security Overview

LinkedIn Professional Guru is designed with security and privacy as core principles. All processing happens locally on your infrastructure—no data is sent to external services or cloud providers.

## Security Principles

### 🔒 Local-First Architecture
- **Zero Cloud Dependency**: All AI inference runs on your machine
- **No API Keys Required**: No reliance on third-party API services
- **Complete Data Privacy**: Your data never leaves your system
- **Offline Capable**: Works without internet connection

### 🛡️ Data Protection
- Sensitive data (LinkedIn profiles, resumes) stays on your local storage
- No telemetry or tracking
- No user behavior analytics
- Reports can be encrypted locally if needed

### 🔐 Container Security
- Docker containers run with minimal privileges
- Network isolation between services
- No unnecessary port exposure
- Regular security updates for base images

## Reporting Security Issues

### Do NOT Post Publicly

If you discover a security vulnerability, please **do not** create a public GitHub issue.

### Report Responsibly

1. Email security details to: **sahil@example.com** (or use GitHub Security Advisory)
2. Include:
   - Description of vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if available)

3. Allow time for response and fix (typically 48-72 hours)
4. Do not disclose publicly until a fix is available

## Security Best Practices

### Environment Configuration

```bash
# ✅ DO: Use .env for secrets
cp docker/.env.example docker/.env
# Edit .env with your values

# ❌ DON'T: Commit .env files
# .env is already in .gitignore
```

### Docker Security

```bash
# ✅ DO: Run with non-root user
# ✅ DO: Use read-only volumes where possible
# ✅ DO: Keep Docker images updated
# ✅ DO: Use docker-compose security options

# ❌ DON'T: Run containers with --privileged
# ❌ DON'T: Share host network unnecessarily
# ❌ DON'T: Expose unnecessary ports
```

### File Permissions

```bash
# ✅ Sensitive files should be restricted
chmod 600 docker/.env
chmod 600 secrets.env

# ❌ Avoid world-readable sensitive data
chmod 666 .env  # TOO PERMISSIVE
```

### Network Security

```yaml
# docker-compose.yaml
services:
  n8n:
    ports:
      - "127.0.0.1:5678:5678"  # ✅ Bind to localhost only
      # - "0.0.0.0:5678:5678"  # ❌ Exposed to all interfaces
```

## Dependency Security

### Regular Updates
- Monitor base image updates
- Review n8n security updates
- Check Ollama releases
- Keep Docker daemon updated

### Checking for Vulnerabilities

```bash
# Scan Docker images
docker scan n8n:latest
docker scan ollama:latest

# Check installed packages
docker-compose exec n8n npm audit
```

## Data Security

### Local Storage
- Reports stored in `reports/` directory
- Logs in `logs/` directory
- Model cache in `.models_cache/` (gitignored)

### Backup & Recovery

```bash
# Back up important data
tar -czf backup-reports.tar.gz reports/

# Secure backup storage
cp backup-reports.tar.gz /secure/location/

# Encrypt sensitive backups (optional)
gpg --symmetric backup-reports.tar.gz
```

### Data Retention

- Review generated reports regularly
- Delete sensitive data when no longer needed
- Archive reports to secure storage
- Consider data retention policies

## Access Control

### Local Machine
- Restrict n8n access with strong password
- Use OS-level firewall rules
- Limit port exposure (localhost only recommended)

### Docker Socket

```bash
# ❌ DON'T: Expose Docker socket to containers
# - /var/run/docker.sock:/var/run/docker.sock

# ✅ DO: Use principle of least privilege
```

## Compliance & Standards

### Privacy
- GDPR: No data sent to EU/non-EU without consent
- CCPA: Complete data ownership
- HIPAA: Can be deployed in HIPAA-compliant environment

### Standards
- Docker security best practices
- OWASP top 10 (where applicable)
- NIST cybersecurity framework

## Vulnerability Scanning

### Regular Audits
```bash
# Check for known vulnerabilities
docker run --rm aquasec/trivy image n8n:latest
docker run --rm aquasec/trivy image ollama:latest
```

### Dependency Checks
```bash
# npm audit
docker-compose exec n8n npm audit

# pip check (if Python packages used)
docker-compose exec n8n pip check
```

## Incident Response

### If a Vulnerability is Discovered

1. **Assess Impact**: Determine severity and scope
2. **Contain**: Stop affected services if necessary
3. **Report**: Follow responsible disclosure above
4. **Patch**: Apply fixes when available
5. **Verify**: Test fixes in safe environment
6. **Deploy**: Update production systems
7. **Review**: Post-incident analysis

## Security Checklist

- [ ] Using .env for all sensitive configuration
- [ ] .env file is in .gitignore
- [ ] Docker containers have resource limits
- [ ] Ports are bound to localhost only
- [ ] Regular security updates applied
- [ ] Backups are encrypted and stored securely
- [ ] Access logs reviewed regularly
- [ ] No sensitive data in version control
- [ ] Docker images regularly scanned
- [ ] Network firewall rules in place

## Security Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Docker Security Best Practices](https://docs.docker.com/engine/security/)
- [n8n Security Documentation](https://docs.n8n.io/)
- [Ollama Security Guide](https://ollama.ai/)

## Future Security Improvements

- [ ] Database encryption
- [ ] TLS/SSL enforcement
- [ ] API authentication enhancements
- [ ] Audit logging
- [ ] Rate limiting
- [ ] Input validation hardening
- [ ] Secrets management integration

## Questions & Support

For security-related questions:
- **Security Issues**: Email (see Reporting Security Issues)
- **General Questions**: Open a [Discussion](https://github.com/sahillad96/linkedin-professional-guru/discussions)
- **Documentation**: See [docs/](docs/)

---

**Your security is our priority. Thank you for helping keep this project safe.** 🔒
