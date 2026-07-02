# Contributing to LinkedIn Professional Guru

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing to the project.

## Code of Conduct

This project is committed to providing a welcoming and inspiring community for all. Please read and follow our community standards of respect and professionalism.

## How to Contribute

### 1. Report Issues

If you encounter bugs or have feature requests, please [create an issue](https://github.com/sahillad96/linkedin-professional-guru/issues).

**Before creating an issue:**
- Check existing issues to avoid duplicates
- Provide clear title and description
- Include relevant details (OS, Docker version, error messages)
- Use the appropriate issue template

### 2. Contribute Code

#### Getting Started

```bash
# Clone your fork
git clone https://github.com/YOUR-USERNAME/linkedin-professional-guru.git
cd linkedin-professional-guru

# Add upstream remote
git remote add upstream https://github.com/sahillad96/linkedin-professional-guru.git

# Create feature branch
git checkout -b feature/your-feature-name
```

#### Development Workflow

1. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   # or
   git checkout -b fix/bug-description
   ```

2. **Make your changes**
   - Follow existing code style and patterns
   - Write clear commit messages
   - Update documentation as needed
   - Keep commits atomic and focused

3. **Test your changes**
   ```bash
   cd docker
   docker-compose down
   docker-compose up -d
   # Test your workflow/changes
   ```

4. **Commit and push**
   ```bash
   git add .
   git commit -m "feat: add amazing feature"
   git push origin feature/amazing-feature
   ```

5. **Submit a Pull Request**
   - Use the PR template
   - Link related issues
   - Provide clear description
   - Be responsive to feedback

### 3. Improve Documentation

Documentation improvements are always welcome!

- Fix typos and clarify explanations
- Add examples and use cases
- Improve formatting and structure
- Translate to other languages (future)

### 4. Create Workflows

Contribute new n8n workflows:

1. Design workflow in n8n UI
2. Export as JSON
3. Save to appropriate `workflows/` subdirectory
4. Create documentation in [WorkflowGuide.md](docs/WorkflowGuide.md)
5. Add sample data to `samples/`
6. Submit pull request with explanation

### 5. Contribute Prompts

Enhance AI prompts for better analysis:

1. Create or modify prompt in `prompts/`
2. Follow versioning: `v1.md`, `v2.md`, etc.
3. Document changes in `CHANGELOG.md`
4. Test with sample data
5. Submit PR with test results

## Contribution Guidelines

### Code Style

- **JSON**: Use proper indentation (2 spaces)
- **Markdown**: Use consistent heading levels
- **Commit Messages**: Use conventional commits
  ```
  feat: add new feature
  fix: resolve issue
  docs: update documentation
  refactor: improve code structure
  ```

### Documentation

- Keep documentation up-to-date
- Use clear, concise language
- Include examples where helpful
- Update table of contents if needed
- Add links to related documentation

### Workflow Contributions

- Test thoroughly before submitting
- Include sample input data
- Document expected outputs
- Add comments for complex logic
- Follow naming conventions

### Prompt Contributions

- Test with various inputs
- Document the purpose and use case
- Include expected output examples
- Version appropriately
- Reference related prompts

## Pull Request Process

1. **Ensure your PR:**
   - Has a descriptive title and clear description
   - References related issues (`Fixes #123`)
   - Follows the PR template
   - Has meaningful commit messages

2. **Address feedback:**
   - Respond to reviewer comments
   - Make requested changes
   - Update PR description if needed
   - Push updates to the same branch

3. **Merge criteria:**
   - All CI checks pass
   - At least one approval
   - No conflicting changes
   - Documentation is updated

## Development Setup

### Prerequisites
- Docker & Docker Compose
- Git
- Text editor (VS Code recommended)
- 8GB+ RAM

### Local Environment

```bash
# Start services
cd docker
docker-compose up -d

# Monitor services
docker-compose ps
docker-compose logs -f n8n

# Access services
# n8n: http://localhost:5678
# Ollama API: http://localhost:11434
```

### Testing Workflows

1. Navigate to n8n UI
2. Import workflow from `workflows/`
3. Use sample data from `samples/`
4. Execute and verify output
5. Document results

## Areas for Contribution

### High Priority
- [ ] Documentation improvements
- [ ] Bug fixes
- [ ] Performance optimization
- [ ] Test coverage

### Medium Priority
- [ ] New workflows
- [ ] Prompt enhancements
- [ ] UI improvements
- [ ] Example projects

### Future Opportunities
- [ ] Multi-language support
- [ ] Additional LLM models
- [ ] Database integration
- [ ] Mobile app
- [ ] Cloud deployment options

## Questions?

- Check [Documentation](docs/)
- Open a [Discussion](https://github.com/sahillad96/linkedin-professional-guru/discussions)
- Review existing [Issues](https://github.com/sahillad96/linkedin-professional-guru/issues)

## Recognition

Contributors are recognized in:
- Project README
- CHANGELOG.md
- GitHub contributors page
- Release notes

Thank you for making this project better! 🚀
