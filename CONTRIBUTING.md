# Contributing to LinkedIn Professional Guru

First off, thank you for considering contributing to LinkedIn Professional Guru! It's people like you that make LinkedIn Professional Guru such a great tool.

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the [issue list](https://github.com/sahillad96/linkedin-professional-guru/issues) as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

* **Use a clear and descriptive title**
* **Describe the exact steps which reproduce the problem**
* **Provide specific examples to demonstrate the steps**
* **Describe the behavior you observed after following the steps**
* **Explain which behavior you expected to see instead and why**
* **Include screenshots and animated GIFs if possible**
* **Include your environment details** (OS, Docker version, etc.)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

* **Use a clear and descriptive title**
* **Provide a step-by-step description of the suggested enhancement**
* **Provide specific examples to demonstrate the steps**
* **Describe the current behavior and expected behavior**
* **Explain why this enhancement would be useful**

### Pull Requests

* Fill in the required template
* Follow the TypeScript and CSS styleguides
* Include appropriate test cases
* End all files with a newline
* Avoid platform-dependent code

## Development Setup

1. Fork the repository
2. Clone your fork locally
   ```bash
   git clone https://github.com/YOUR_USERNAME/linkedin-professional-guru.git
   cd linkedin-professional-guru
   ```
3. Create a virtual environment and install dependencies
   ```bash
   cp .env.example .env
   docker-compose up -d
   ```
4. Create a branch for your changes
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Workflow

1. Make your changes in a dedicated branch
2. Test your changes thoroughly
3. Write clear, descriptive commit messages
4. Push to your fork
5. Open a pull request with a clear title and description

## Style Guides

### Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line

Example:
```
Add LinkedIn profile analyzer component

Implements the core profile analysis functionality with JSON parsing.
Closes #123
```

### TypeScript Code Style

* Use TypeScript for all new code
* Use `const` by default, `let` when needed, avoid `var`
* Use arrow functions when appropriate
* Write meaningful variable and function names
* Add JSDoc comments for complex functions
* Keep functions small and focused

Example:
```typescript
/**
 * Analyzes a LinkedIn profile and returns insights
 * @param profile - The LinkedIn profile text
 * @returns Structured analysis data
 */
export async function analyzeLinkedInProfile(
  profile: string
): Promise<ProfileAnalysis> {
  // Implementation
}
```

### CSS/Tailwind Style Guide

* Use Tailwind CSS utility classes
* Avoid writing custom CSS unless absolutely necessary
* Use a consistent naming convention for custom classes
* Mobile-first responsive design approach

## Testing

* Write tests for new features
* Ensure existing tests still pass
* Aim for high code coverage
* Test edge cases and error scenarios

## Documentation

* Update README.md if you change functionality
* Add comments to complex code sections
* Update relevant documentation files in `/docs`
* Add examples for new features

## Questions?

Feel free to open an issue with the `question` label or start a discussion.

## Recognition

Contributors will be recognized in:
* The README.md file
* Release notes
* GitHub contributors page

Thank you for your interest in contributing to LinkedIn Professional Guru!
