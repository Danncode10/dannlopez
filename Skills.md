# Skills Section — AI Agent Rules

> Read this before building or modifying the Skills section of the portfolio.

---

## Where Skills Data Lives

All skills data is defined in:

```
src/lib/config.ts  →  export const skillsConfig: Skill[]
```

To add, remove, or update a skill, edit `skillsConfig` only. Never hardcode skills inside the component.

---

## Skill Entry Schema

Each entry in `skillsConfig` must follow this TypeScript interface:

```ts
interface Skill {
  name: string;           // Display name, e.g. "TypeScript"
  category: SkillCategory; // One of the categories below
  icon: string;           // Simple Icons slug (lowercase, no spaces)
  proficiency: "Beginner" | "Intermediate" | "Advanced";
}

type SkillCategory =
  | "Languages"
  | "Frameworks & Libraries"
  | "Tools & Platforms"
  | "CS Concepts";
```

---

## Categories

Use exactly these four category strings — no variations:

| Category | Examples |
|---|---|
| `Languages` | Python, TypeScript, JavaScript, C++, Java, C |
| `Frameworks & Libraries` | Next.js, React, Tailwind CSS, ROS (Robot Operating System) |
| `Tools & Platforms` | Git, GitHub, VS Code, Linux, Vercel, Arduino |
| `CS Concepts` | Data Structures, Algorithms, OOP, Computer Vision, Embedded Systems |

---

## Icon Slugs

Use **Simple Icons** slugs (`https://simpleicons.org`). The slug is the lowercase, space-free identifier used by the Simple Icons library.

Common examples:

| Skill | Slug |
|---|---|
| TypeScript | `typescript` |
| JavaScript | `javascript` |
| Python | `python` |
| Next.js | `nextdotjs` |
| React | `react` |
| Tailwind CSS | `tailwindcss` |
| Git | `git` |
| GitHub | `github` |
| C++ | `cplusplus` |
| Linux | `linux` |
| Arduino | `arduino` |
| Vercel | `vercel` |

If a skill has no Simple Icons entry, omit the `icon` field and the component will render a fallback text badge.

---

## UI Rendering Rules

When building or updating the `<Skills />` component:

1. **Group by category** — render each `SkillCategory` as a labeled section with a heading.
2. **Responsive grid** — `grid-cols-2 sm:grid-cols-3 md:grid-cols-4` for skill cards.
3. **Skill card contents**:
   - Simple Icons SVG icon (use `react-icons/si` or `@icons-pack/react-simple-icons`)
   - Skill name (`text-sm font-medium`)
   - Proficiency badge (`<Badge variant="secondary">`) — only show if proficiency is set
4. **Semantic tokens only** — `bg-card`, `text-foreground`, `text-muted-foreground`. No hardcoded colors.
5. **No horizontal scroll** — cards must wrap cleanly at all breakpoints.
6. **Empty state** — if `skillsConfig` is empty, show a centered message: "Skills coming soon."

---

## Adding a New Skill (Agent Workflow)

1. Look up the Simple Icons slug at `https://simpleicons.org`.
2. Add the entry to `skillsConfig` in `src/lib/config.ts`.
3. Place it in the correct `category`.
4. Set an honest `proficiency` level.
5. Do not touch `src/components/Skills.tsx` unless the rendering logic itself needs to change.

---

## Removing a Skill

Delete the entry from `skillsConfig`. The component re-renders automatically — no other changes needed.
