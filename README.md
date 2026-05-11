# Lester Dann G. Lopez — Personal Portfolio

A personal portfolio website built to showcase my journey as a **BS Computer Science (Robotics)** student at **Nueva Vizcaya State University**. Visitors can explore my projects, GitHub activity, technical skills, and academic grades — everything a company needs to get a real picture of who I am as a developer.

[![Next.js](https://img.shields.io/badge/Next.js-15+-black?logo=next.js)](https://nextjs.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?logo=tailwindcss)](https://tailwindcss.com)
[![Shadcn/UI](https://img.shields.io/badge/Shadcn%2FUI-components-white)](https://ui.shadcn.com)
[![GitHub API](https://img.shields.io/badge/GitHub-REST%20API-181717?logo=github)](https://docs.github.com/en/rest)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)](https://vercel.com)

---

## Sections

| Section | What it shows |
|---|---|
| **About Me** | Who I am — CS Robotics student, NVSU, background and goals |
| **Projects** | Showcase cards for personal, academic, and open-source projects |
| **GitHub Contributions** | Live contribution graph + public repo list via GitHub API |
| **Skills** | Languages, frameworks, tools, and CS concepts I know |
| **Grades** | Academic performance — because the numbers speak for themselves |

---

## Quick Start

```bash
git clone https://github.com/Danncode10/my-website.git
cd my-website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_GITHUB_USERNAME=Danncode10
NEXT_PUBLIC_SITE_URL=https://yourdomain.vercel.app
```

No database. No auth. The GitHub API is public and requires no key for read-only access.

---

## Customization

All site content lives in one place:

```
src/lib/config.ts
```

Edit these exported objects to update the site:

| Export | Controls |
|---|---|
| `siteConfig` | Name, bio, university, GitHub username, email |
| `projectsConfig` | Project cards (title, description, stack, links) |
| `skillsConfig` | Skills grouped by category (see `Skills.md` for schema) |
| `gradesConfig` | Subjects, grades, semester, GPA |

---

## Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   └── globals.css       # Theme tokens
├── components/           # UI sections
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── GitHubContributions.tsx
│   ├── Skills.tsx
│   └── Grades.tsx
├── lib/
│   └── config.ts         # ALL site content lives here
└── hooks/                # GitHub API data fetching hooks
```

---

## Deploy to Vercel

1. Push your repo to GitHub
2. Import at [vercel.com](https://vercel.com)
3. Add `NEXT_PUBLIC_GITHUB_USERNAME` and `NEXT_PUBLIC_SITE_URL` as environment variables
4. Deploy

---

*Built for clarity. Designed for recruiters. Powered by Next.js.*
