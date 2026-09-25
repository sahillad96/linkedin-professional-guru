# Roadmap

## September 2026 Release Scope

The September release consolidates the n8n migration and the first complete career-intelligence workflow.

### Platform Migration

- [ ] Remove n8n from the runtime path
- [ ] Preserve original n8n workflow exports under `n8n-source/`
- [ ] Convert Code nodes to TypeScript
- [ ] Convert HTTP Request nodes to server-side API functions
- [ ] Convert n8n expressions to explicit TypeScript
- [ ] Add Next.js `/api/evaluate`
- [ ] Add `/api/health`
- [ ] Add server-side Gemini integration
- [ ] Add configurable Gemini model
- [ ] Add Zod input and output validation
- [ ] Add request IDs
- [ ] Add timeout and retry handling
- [ ] Add safe provider error handling

### LinkedIn Profile Analyzer

- [ ] Enhanced profile input form
- [ ] Profile completeness analysis
- [ ] Profile section extraction
- [ ] Skills extraction
- [ ] Skills categorization
- [ ] Strength analysis
- [ ] Gap analysis
- [ ] Target-role alignment
- [ ] Evidence-based recommendations
- [ ] Career positioning analysis
- [ ] Structured report generation
- [ ] Responsive report UI
- [ ] Print/PDF-ready report

### Resume Analyzer

- [ ] Resume upload foundation
- [ ] PDF/text extraction
- [ ] Resume section detection
- [ ] Experience extraction
- [ ] Skills extraction
- [ ] Education extraction
- [ ] Certification extraction
- [ ] Project extraction
- [ ] Achievement/evidence extraction
- [ ] Resume completeness analysis
- [ ] Resume quality analysis

### ATS Intelligence

- [ ] ATS-oriented structure checks
- [ ] Keyword extraction
- [ ] Keyword coverage analysis
- [ ] Target-role keyword comparison
- [ ] Skills-to-role matching
- [ ] Missing keyword identification
- [ ] Evidence-strength analysis
- [ ] Resume improvement suggestions
- [ ] Explainable compatibility indicators

### Career Report

- [ ] Unified LinkedIn + resume analysis
- [ ] Current-position summary
- [ ] Target-role alignment
- [ ] Skill gaps
- [ ] Priority improvements
- [ ] Recommended actions
- [ ] Short-term career actions
- [ ] Structured Markdown output
- [ ] HTML report output
- [ ] Print-friendly report output

### Quality and Testing

- [ ] Validation test suite
- [ ] Prompt construction tests
- [ ] Gemini response parsing tests
- [ ] Invalid-output tests
- [ ] 429/quota tests
- [ ] 5xx provider tests
- [ ] Regression fixtures
- [ ] Production build verification
- [ ] No-secret-leak checks

### Deployment

- [ ] Free-first Cloudflare deployment configuration
- [ ] Environment variable documentation
- [ ] GitHub CI validation
- [ ] Production health check

## Version Overview

| Version | Focus | Status |
|---------|-------|--------|
| 0.1.0 | MVP foundation | ✅ Complete |
| 1.2.1 | n8n reliability migration | 🔄 September 2026 |
| 1.3.0 | Production hardening | 🔄 September 2026 |
| 1.4.0 | Resume + ATS intelligence | 🔄 September 2026 |
| 1.5.0 | Job description matching | 📅 Planned |
| 1.6.0 | Career intelligence dashboard | 📅 Planned |
| 1.7.0 | Learning roadmap + certifications | 📅 Planned |
| 1.8.0 | Accounts and report history | 📅 Planned |
| 1.9.0 | Career progress dashboard | 📅 Planned |
| 2.0.0 | AI career agent | 🎯 Long Term |

## October 2026 and Later

### Job Description Matching

- Job description ingestion
- Role requirement extraction
- Skill matching
- Experience matching
- Keyword coverage
- Gap analysis
- Explainable match indicators

### Career Intelligence Dashboard

- Target-role tracking
- Skill-gap visualization
- Report history
- Progress tracking
- Career milestones

### Learning Roadmaps

- Skill-specific learning paths
- Project recommendations
- Certification tracking
- Progress tracking

### User Accounts

- Supabase Auth
- Saved profiles
- Saved reports
- Report history
- Profile comparison

### AI Career Agent

- Structured career memory
- Goal tracking
- Context-aware recommendations
- Periodic career reviews
