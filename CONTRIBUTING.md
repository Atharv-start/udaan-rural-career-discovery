# Contributing to Udaan (उड़ान)

Welcome to the **Udaan** project! Udaan is being developed for the **Citibank Ada Lovelace Hackathon**. We are thrilled to have you collaborate on building this offline-first career discovery and learning-to-livelihood platform for rural Indian students and village facilitators.

To ensure seamless teamwork, high code quality, and project integrity, all contributors must follow these collaboration guidelines.

---

## 10 Core Team Collaboration Guidelines

1. **Create a Separate Branch for Each Feature**: Never work directly on `main`. Always branch off from the latest `main` branch before starting any task.
2. **Use Descriptive Branch Names**: Follow standard naming conventions (e.g., `feature/career-discovery`, `fix/offline-sync-indicator`, `docs/setup-guide`).
3. **Make Focused Changes**: Keep pull requests and commits scoped to a single purpose or task. Avoid bundling unrelated refactorings or changes.
4. **Test Changes Before Submitting**: Always verify that the project builds and runs without errors before committing or opening a PR (`npm run build` and Android Gradle checks).
5. **Use Descriptive Commit Messages**: Write clear, imperative commit messages explaining *what* was changed and *why* (e.g., `feat(career): add offline vocational pathway filter`).
6. **Open Pull Requests for Review**: Submit all changes via GitHub Pull Requests. Request review from at least one teammate before merging into `main`.
7. **Do Not Commit API Keys or Secrets**: Keep credentials, API keys, keystores, and tokens in `.env.local` or environment secrets. Ensure sensitive files remain untracked.
8. **Do Not Directly Overwrite Another Teammate's Work**: Communicate proactively. Use Git rebasing or merge conflict resolution thoughtfully. Never force-push (`git push --force`) to shared branches.
9. **Keep the Existing UI Consistent with the Established Design**: Maintain the Material 3 design tokens (Deep Teal `#176B5B`, Primary Green `#21866F`, Soft Mint `#DDF3E8`, Warm Cream `#FAF8F1`, Saffron Accent `#F2B544`) and typography established in the initial UI prototype.
10. **Do Not Change Main Application Architecture Without Discussing**: Any structural change to state management, the Jetpack Compose navigation graph, Room database schemas, or LLM services must be agreed upon by the team prior to implementation.

---

## Git Workflow & Branching Strategy

### 1. Branch Naming Convention
Use standard prefixes:
- `feature/<feature-name>`: New capabilities or screens (e.g., `feature/voice-narration-hindi`, `feature/facilitator-dashboard`)
- `fix/<bug-description>`: Bug fixes (e.g., `fix/recommendation-score-tiebreak`)
- `docs/<doc-name>`: Documentation updates (e.g., `docs/api-contracts`)
- `chore/<task>`: Tooling, dependency, or configuration updates (e.g., `chore/gradle-version-catalog`)

### 2. Standard Feature Lifecycle
```bash
# 1. Fetch latest changes from main
git checkout main
git pull origin main

# 2. Create your feature branch
git checkout -b feature/your-feature-name

# 3. Make your changes and test locally
npm run build   # or Gradle build for Android native

# 4. Stage and commit with descriptive messages
git add <files>
git commit -m "feat(module): descriptive explanation of change"

# 5. Push your feature branch to GitHub
git push -u origin feature/your-feature-name

# 6. Open a Pull Request on GitHub for peer review
```

---

## Commit Message Standards

We recommend following the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` A new feature or screen
- `fix:` A bug fix
- `docs:` Documentation changes only
- `style:` Formatting, missing semi-colons, UI padding adjustments
- `refactor:` Code restructuring without behavior changes
- `test:` Adding or updating tests
- `chore:` Build process or auxiliary tool changes

**Example:**
```
feat(discovery): integrate multi-domain interest questionnaire

- Add questions covering vocational vs academic career pathways
- Connect questionnaire answers to TransparentRecommendationEngine
- Update UI to reflect selected preferences in Hindi and English
```

---

## UI & Design Consistency

- **Design System**: Material Design 3 (M3).
- **Primary Color Tokens**:
  - Deep Teal: `#176B5B` (Header, Primary Brand, Action Buttons)
  - Primary Green: `#21866F` (Accents, Progress Indicators)
  - Soft Mint: `#DDF3E8` (Container Backgrounds, Badges)
  - Warm Cream: `#FAF8F1` (Surface, Background)
  - Saffron Accent: `#F2B544` (Highlights, Hackathon Badge, Stars)
  - Dark Charcoal: `#202B27` (Primary Text)
  - Secondary Slate: `#65736C` (Subtitles, Meta Information)
- **Accessibility**: Support bilingual labels (English and Hindi) and ensure contrast ratios meet WCAG AA standards.

---

## Secret Safety & Security

- **Never** hardcode API keys, passwords, or tokens in source code.
- Store local keys in `.env.local` (which is excluded by `.gitignore`).
- For Gemini API or cloud integrations, access keys via environment variables or runtime secret injection.
- If an API key or secret is accidentally committed:
  1. Notify the team immediately.
  2. Rotate (revoke and regenerate) the compromised key in Google Cloud / AI Studio console.
  3. Remove the secret from Git history using `git-filter-repo` before pushing.

---

## How to Add Teammates as Collaborators on GitHub

Repository administrators can grant team members access by following these steps:

1. Navigate to the repository on GitHub:
   `https://github.com/Atharv-start/udaan-rural-career-discovery`
2. Click the **Settings** tab (gear icon in the repository navigation bar).
3. In the left sidebar, click **Collaborators** (under *Access*).
4. You may be prompted to confirm your GitHub password or two-factor authentication.
5. Click the green **Add people** button.
6. Enter your teammate's **GitHub username** or **email address**.
7. Click **Add [username] to this repository**.
8. Select the appropriate role (typically **Write** access for development teammates).
9. Your teammate will receive an invitation email and a GitHub notification. Once they accept the invitation, they will have push and PR review permissions.

*(Note: Invitations should only be sent after team members confirm their exact GitHub handles).*
