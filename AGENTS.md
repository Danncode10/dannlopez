# Project Rules & AI Steering (AGENTS.md)

> **Start here**: Always read this file first before taking any action on this project.

You are an expert developer working on **Lester Dann G. Lopez's personal portfolio website**. This is a **static, config-driven** Next.js 15+ (App Router) site. There is no database, no authentication, and no backend — all content lives in `src/lib/config.ts` and GitHub data is fetched live via the public GitHub REST API.

## Project Overview

A personal portfolio for Lester Dann G. Lopez, BS Computer Science (Robotics) student at Nueva Vizcaya State University (NVSU). The site targets recruiters and companies and showcases:
- **About** — background, university, and goals
- **Projects** — personal, academic, and open-source project cards
- **GitHub Contributions** — live contribution graph and public repo list
- **Skills** — languages, frameworks, tools grouped by category
- **Grades** — academic performance per semester

---

## Diagnostic Protocol

Before starting any specialized task, verify that the required MCP tools are connected:

- **GitHub MCP**: Required for fetching repo lists, contribution data, and branch history.

If the GitHub MCP is missing, alert the user:

> ⚠️ GitHub MCP Not Detected: I need this to fetch live GitHub data.
> Fix: Open MCP Store → Install "GitHub" → authenticate with your GitHub account.

No Supabase MCP or Terminal MCP is required for this project.

---

## Content Architecture (Non-Negotiable)

All site content is config-driven. No content should be hardcoded inside components.

```
src/lib/config.ts        ← Single source of truth for ALL site data
```

| Export | What it controls |
|---|---|
| `siteConfig` | Name, bio, university, GitHub username, email, social links |
| `projectsConfig` | Project cards — title, description, stack tags, GitHub/live URLs |
| `skillsConfig` | Skills array — see `Skills.md` for the full schema |
| `gradesConfig` | Subjects, grades, semester label, GPA |

**Rule**: When asked to add, update, or remove any content (a project, a skill, a grade), edit `src/lib/config.ts` only. Do not touch component files for content changes.

---

## GitHub Data Fetching

- Use the **GitHub REST API** (`https://api.github.com`) for live data.
- The username comes from `siteConfig.githubUsername` — never hardcode it.
- No API key is needed for public data; use unauthenticated requests.
- Fetch logic belongs in `src/hooks/` as custom hooks (e.g., `useGitHubRepos`, `useContributions`).
- Cache responses with `next: { revalidate: 3600 }` (1-hour ISR) on Server Components, or use TanStack Query on Client Components.

---

## Architectural Guardrails

1. **Config-Driven Content**: UI components read from `config.ts` — they never own data.
2. **Separation of Concerns**: Fetching logic lives in `src/hooks/`. Rendering lives in `src/components/`. Config lives in `src/lib/config.ts`.
3. **Type Safety**: Every config object must have a TypeScript interface in `src/types/`. Never use `any`.
4. **No Database**: There is no Supabase, no RLS, no auth. Do not introduce backend dependencies.

---

## Tech Stack Conventions

- **React**: Functional components and hooks. Favor Server Components for data fetching.
- **CSS**: Tailwind CSS only. Use semantic tokens — never hardcode colors.
- **Components**: Shadcn/UI for all UI primitives.
- **Async**: `async/await` for all asynchronous operations.

---

## Code Architecture Rules

1. **Maintain Structure**: Do not change folder hierarchy or component responsibilities unless explicitly asked.
2. **Modularity**: Extract reusable logic into custom hooks. Avoid copy-pasting logic across components.
3. **Directory**: New components go in `src/components/`. New hooks go in `src/hooks/`. Config stays in `src/lib/`.
4. **DRY**: If the same data shape appears in two places, it belongs in `config.ts` with a shared type.
5. **Commit Messages**: After any code change, provide a concise Git commit message (e.g., `feat: add grades section`).
6. **Server vs. Client**: Default to Server Components. Use `'use client'` only when interactivity, browser APIs, or client state is strictly required.

---

## UI Quality Standards (Non-Negotiable)

- **Mobile-First**: Every component must be fully responsive starting at 375px. No horizontal scroll.
- **Touch Targets**: All interactive elements must be at minimum 48px tall.
- **Visual Hierarchy**: Headings must feel like headings — use size, weight, and spacing intentionally.
- **Spacing Rhythm**: Use consistent Tailwind scale (`p-4`, `p-6`, `gap-4`, `gap-6`). Never cram elements.
- **Empty States**: Never show a blank area. Use a centered icon + message for loading or empty states.
- **Semantic Tokens Only**:
  - Backgrounds: `bg-background`, `bg-card`, `bg-muted`
  - Text: `text-foreground`, `text-muted-foreground`, `text-primary`
  - Borders: `border`, `border-border`, `border-input`
  - Buttons: always use Shadcn `<Button variant="default">` or `variant="outline"` — never a raw `<button>`
- **No hardcoded colors**: hex codes, rgba values, or Tailwind `neutral-*`/`white`/`black` classes are a CRITICAL FAILURE unless inside `globals.css` theme tokens.
- **Card Pattern**: Wrap section cards in `<Card>` with `<CardHeader>`, `<CardContent>` from Shadcn.

---

## Section-Specific Rules

### About
- Content from `siteConfig.bio`, `siteConfig.university`, `siteConfig.degree`.
- Include a profile photo (`public/avatar.jpg`) with a fallback initial avatar.

### Projects
- Source: `projectsConfig` array.
- Each card shows: title, description, tech stack tags, GitHub link, live demo link (if available).
- Stack tags use `<Badge variant="secondary">` from Shadcn.

### GitHub Contributions
- Fetch public repos and contribution data via GitHub API using `siteConfig.githubUsername`.
- Show a contribution graph and a paginated repo list (6 per page).
- Use GitHub MCP if available to resolve branch or history questions.

### Skills
- Source: `skillsConfig` array. See `Skills.md` for full schema and rendering rules.
- Group by category. Display skill icon + name + optional proficiency badge.

### Grades
- Source: `gradesConfig` array, organized by semester.
- Display as a clean table or card grid per semester.
- Show subject name, grade/mark, and units. Include GPA per semester if available.
- This section is a selling point — present it cleanly and confidently.
