import type {
  Project,
  Skill,
  SemesterGrades,
  SiteConfig,
} from "@/types/portfolio";

/**
 * ─────────────────────────────────────────────────────────────────
 *  PORTFOLIO CONFIG — Single source of truth
 * ─────────────────────────────────────────────────────────────────
 *  Edit the objects below to update the site. Component files read
 *  from here — never hardcode content inside components.
 * ─────────────────────────────────────────────────────────────────
 */

export const siteConfig: SiteConfig = {
  name: "Lester Dann G. Lopez",
  shortName: "Dann",
  role: "BS Computer Science (Robotics) Student",
  university: "Nueva Vizcaya State University",
  degree: "BS Computer Science — Robotics & Automation",
  bio: "I'm a Computer Science student building across Web, AI, Robotics, and Automation. I ship real products end-to-end — from gesture-controlled Arduino hardware to AI-native Next.js platforms — and I treat every project as a chance to push past what's expected of a student.",
  githubUsername: "Danncode10",
  email: "Lesterdannlopez7@gmail.com",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://danncode10.vercel.app",
  socials: {
    github: "https://github.com/Danncode10",
    linkedin: "", // [EDIT ME] add your LinkedIn URL here
    email: "mailto:Lesterdannlopez7@gmail.com",
  },
  avatar: "/avatar.png",
};

/**
 * PROJECTS — Add / remove / reorder freely.
 * Mark `featured: true` to surface in the Featured Work row at the top.
 * For private repos: set `isPrivate: true` and omit `githubUrl`.
 */
export const projectsConfig: Project[] = [
  // ─── FEATURED ──────────────────────────────────────────────────
  {
    id: "nextviz",
    title: "NextViz",
    tagline: "Local-first, node-based automation engine for Next.js.",
    description:
      "Design workflows visually, sync them to Git as JSON, and run them on Vercel — no VPS required. Built for Vibe Coders who want n8n power with shadcn/ui simplicity.",
    category: "Tools",
    stack: ["Next.js", "TypeScript", "React Flow", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/Danncode10/nextviz",
    featured: true,
  },
  {
    id: "dannflow",
    title: "DannFlow",
    tagline: "AI-optimized Next.js + Supabase boilerplate.",
    description:
      "A high-performance, AI-native boilerplate for Next.js, Supabase, and Vercel. Designed as a source of truth for Claude Code and Antigravity so AI agents can build autonomously without breaking architecture.",
    category: "Tools",
    stack: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/Danncode10/DannFlow",
    featured: true,
  },
  {
    id: "attyjuan",
    title: "AttyJuan",
    tagline: "[EDIT ME] One-line tagline for AttyJuan.",
    description:
      "[EDIT ME] 2–3 sentences describing what AttyJuan does, who it's for, and the problem it solves. Update this in src/lib/config.ts.",
    category: "Web Apps",
    stack: ["Next.js", "TypeScript"],
    isPrivate: true,
    featured: true,
  },
  {
    id: "everything-claude-code",
    title: "Everything Claude Code",
    tagline: "Agent harness performance optimization system.",
    description:
      "Skills, instincts, memory, security, and research-first development for Claude Code, Codex, Opencode, Cursor and beyond.",
    category: "Tools",
    stack: ["Claude Code", "Agent SDK", "TypeScript"],
    githubUrl: "https://github.com/Danncode10/everything-claude-code",
    liveUrl: "https://ecc.tools",
    featured: true,
  },
  {
    id: "adventflow",
    title: "AdventFlow",
    tagline: "AI-native management suite for the Adventist Church.",
    description:
      "A Next.js 15 + Supabase platform with secure hierarchy, financial transparency, and resource sharing for Missions, Divisions, and local congregations.",
    category: "Web Apps",
    stack: ["Next.js 15", "Supabase", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/Danncode10/AdventFlow",
    liveUrl: "https://advent-flow-six.vercel.app",
    featured: true,
  },

  // ─── PRIVATE — PLACEHOLDERS ─────────────────────────────────────
  {
    id: "private-2",
    title: "[EDIT ME] Private Project Name",
    tagline: "[EDIT ME] One-line tagline.",
    description: "[EDIT ME] Replace this with a 2–3 sentence description.",
    category: "Web Apps",
    stack: ["TypeScript"],
    isPrivate: true,
  },

  // ─── AI ─────────────────────────────────────────────────────────
  {
    id: "meshmind",
    title: "MeshMind",
    tagline: "Natural-language 3D modeling for Blender using Claude.",
    description:
      "Describe a 3D design in plain English; Claude controls Blender via MCP and builds it for you. Iterate by chatting.",
    category: "AI",
    stack: ["Python", "Blender", "Claude API", "MCP"],
    githubUrl: "https://github.com/Danncode10/meshmind",
  },
  {
    id: "viblend",
    title: "ViBlend",
    tagline: "Claude + Blender 3D-print design template.",
    description:
      "Natural-language modeling for 3D printing — describe your design, Claude builds it in Blender, iterate in plain English.",
    category: "AI",
    stack: ["Python", "Blender", "Claude API"],
    githubUrl: "https://github.com/Danncode10/viblend",
  },
  {
    id: "simple-agent-vacuum",
    title: "Simple Agent Vacuum w/ GUI",
    tagline: "Reflex-agent simulation with a visual interface.",
    description:
      "A simple AI vacuum agent that demonstrates rule-based decision making, rendered through a TypeScript-powered GUI.",
    category: "AI",
    stack: ["TypeScript", "AI Agents"],
    githubUrl: "https://github.com/Danncode10/Simple-Agent-Vacuum-with-GUI",
  },

  // ─── ROBOTICS & IoT ─────────────────────────────────────────────
  {
    id: "arduino-pyside6-opencv",
    title: "Arduino + PySide6 + OpenCV",
    tagline: "Gesture-controlled Arduino with a Python GUI.",
    description:
      "Combines OpenCV hand tracking, PySide6 UI, and real-world hardware control — wave your hand to drive an Arduino.",
    category: "Robotics & IoT",
    stack: ["Python", "Arduino", "OpenCV", "PySide6"],
    githubUrl:
      "https://github.com/Danncode10/Arduino-PySide6-OpenCV-Learning-Journey",
  },
  {
    id: "smart-water-dispenser",
    title: "Smart Water Dispenser",
    tagline: "Hands-free Arduino dispenser with ultrasonic sensing.",
    description:
      "Arduino-powered auto-dispenser using an ultrasonic sensor and servo motor — touchless and IoT-ready for public use.",
    category: "Robotics & IoT",
    stack: ["Arduino", "C++", "Ultrasonic Sensor", "Servo Motor"],
    githubUrl:
      "https://github.com/Danncode10/Smart-Water-Dispenser-Arduino-Based-",
  },
  {
    id: "essential-electrical-robotics",
    title: "Essential Electrical for Robotics",
    tagline: "Hands-on Arduino course for CS Robotics students.",
    description:
      "Covers resistors, capacitors, relays, and power control for real-world sensors and motors — the missing electrical fundamentals course.",
    category: "Robotics & IoT",
    stack: ["Arduino", "Electronics", "C++"],
    githubUrl:
      "https://github.com/Danncode10/Essential-Electrical-Components-for-CS-Robotics",
  },
  {
    id: "arduino-humidity",
    title: "Arduino Humidity Logger",
    tagline: "Sensor-based humidity monitor for embedded experiments.",
    description:
      "A compact Arduino + DHT sensor humidity logger — the start of a longer environmental monitoring stack.",
    category: "Robotics & IoT",
    stack: ["Arduino", "C++", "DHT Sensor"],
    githubUrl: "https://github.com/Danncode10/arduino-humidity",
  },

  // ─── WEB APPS ───────────────────────────────────────────────────
  {
    id: "lifeease",
    title: "LifeEase",
    tagline: "Minimalist productivity app with Task / School / Health.",
    description:
      "React Native + FastAPI + SQLite — combines a task manager, school planner, and health tracker into one quiet, focused interface.",
    category: "Web Apps",
    stack: ["React Native", "FastAPI", "SQLite", "Python"],
    githubUrl: "https://github.com/Danncode10/LifeEase",
  },
  {
    id: "sorry-jas",
    title: "Sorry Jas",
    tagline: "Interactive 'I Forgive You' landing page.",
    description:
      "A playful apology page with a persistent forgive button and a very elusive 'No' button — built for fun, used for real.",
    category: "Web Apps",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/Danncode10/Sorry-Jas",
    liveUrl: "https://sorry-jas-by-dann.vercel.app",
  },
  {
    id: "snapbase",
    title: "SnapBase",
    tagline: "Full-stack image management on Supabase.",
    description:
      "A Next.js + FastAPI hybrid image app built to master the Supabase ecosystem — auth, storage, RLS, and custom backend logic.",
    category: "Web Apps",
    stack: ["Next.js", "Supabase", "FastAPI", "TypeScript"],
    githubUrl: "https://github.com/Danncode10/SnapBase-Supabase-Practice-Project",
    liveUrl: "https://snapbase.vercel.app",
  },
  {
    id: "bus-immersion",
    title: "Bus Immersion Site",
    tagline: "Documentary site for a university immersion program.",
    description:
      "A narrative-driven site built to capture the bus immersion experience — story, photos, and reflections in one clean reading flow.",
    category: "Web Apps",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/Danncode10/bus-immersion-ni-dann",
    liveUrl: "https://bus-immersion-by-dann.vercel.app",
  },
  {
    id: "map-dashboard",
    title: "Map Dashboard",
    tagline: "Environmental conservation map with layered data.",
    description:
      "A map visualization dashboard showing environmental maps and conservation data with interactive layers.",
    category: "Web Apps",
    stack: ["JavaScript", "Leaflet", "Maps API"],
    githubUrl: "https://github.com/Danncode10/map-dashboard",
  },
  {
    id: "student-login-php",
    title: "Student Login System",
    tagline: "Full-stack PHP + MySQL auth with hashed passwords.",
    description:
      "PHP, MySQL, and Bootstrap — password hashing, session management, and protected routes from scratch.",
    category: "Web Apps",
    stack: ["PHP", "MySQL", "Bootstrap"],
    githubUrl:
      "https://github.com/Danncode10/Student-Login-Registration-System-with-PHP-and-MySQL",
  },

  // ─── ALGORITHMS & CS ────────────────────────────────────────────
  {
    id: "speed-analysis-algorithms",
    title: "Speed Analysis of Algorithms",
    tagline: "Benchmarks 10 search algorithms in Jupyter.",
    description:
      "Ranks execution time on random datasets with visual performance charts — a clean reference for algorithm comparison.",
    category: "Algorithms & CS",
    stack: ["Python", "Jupyter", "Matplotlib"],
    githubUrl:
      "https://github.com/Danncode10/Speed-Analysis-of-Searching-Algorithms",
  },
  {
    id: "algorithms-final",
    title: "Algorithms Final Project",
    tagline: "Six algorithm challenges, one notebook each.",
    description:
      "Solutions to six problems from the 100 Algorithms Challenge — each in its own Jupyter notebook with test cases.",
    category: "Algorithms & CS",
    stack: ["Python", "Jupyter"],
    githubUrl: "https://github.com/Danncode10/Algorithms-Final-Project",
  },
  {
    id: "python-dsa-competition",
    title: "Python DSA Competition",
    tagline: "Competitive DSA solutions with time/space analysis.",
    description:
      "Optimized Python implementations for an internal data structures competition, annotated with complexity notes.",
    category: "Algorithms & CS",
    stack: ["Python", "Data Structures", "Algorithms"],
    githubUrl: "https://github.com/Danncode10/Python-DSA-Competition",
  },
  {
    id: "particle-pressure-simulator",
    title: "Particle Pressure Simulator",
    tagline: "Physics simulation of gas particle pressure dynamics.",
    description:
      "Real-time visual rendering of gas particle behavior — built to make abstract physics concepts tangible.",
    category: "Algorithms & CS",
    stack: ["Python", "Physics Simulation"],
    githubUrl: "https://github.com/Danncode10/Particle-Pressure-Simulator-",
  },
  {
    id: "leetcode-daily",
    title: "LeetCode Daily",
    tagline: "Daily LeetCode solutions for interview mastery.",
    description:
      "Tracks data structures & algorithms practice — each solution annotated with approach notes for interview prep.",
    category: "Algorithms & CS",
    stack: ["Python", "DSA"],
    githubUrl: "https://github.com/Danncode10/Leetcode-Daily",
  },
  {
    id: "cpp-projects",
    title: "C++ Projects",
    tagline: "OOP, data structures, and systems mini-projects.",
    description:
      "Collection of C++ problem sets covering OOP, data structures, and foundational systems programming.",
    category: "Algorithms & CS",
    stack: ["C++", "OOP", "DSA"],
    githubUrl: "https://github.com/Danncode10/Cpp-projects",
  },

  // ─── LEARNING ───────────────────────────────────────────────────
  {
    id: "learn-pyside6",
    title: "Learning PySide6",
    tagline: "Python GUI journey with widgets, layouts, and signals.",
    description:
      "Hands-on learning project covering event-driven programming, widgets, and reactive layouts in PySide6.",
    category: "Learning",
    stack: ["Python", "PySide6", "Qt"],
    githubUrl: "https://github.com/Danncode10/Learn-PySide6-Python-GUI-",
  },
  {
    id: "prolog-for-beginners",
    title: "Prolog for Beginners",
    tagline: "Beginner-friendly logic programming course.",
    description:
      "Detailed lessons, installation guides, and practical examples — designed to make logic programming approachable.",
    category: "Learning",
    stack: ["Prolog", "Logic Programming"],
    githubUrl: "https://github.com/Danncode10/prolog-for-beginners",
  },
  {
    id: "link-to-qr",
    title: "Link to QR Code",
    tagline: "Python utility to generate downloadable QR codes.",
    description:
      "Minimal-setup utility to convert any URL into a downloadable QR code image — instant output, zero ceremony.",
    category: "Learning",
    stack: ["Python", "qrcode"],
    githubUrl: "https://github.com/Danncode10/Link-To-QR-Code-using-Python",
  },
];

/**
 * SKILLS — see Skills.md for full schema and rendering rules.
 * Icons are Simple Icons slugs (lowercase, no spaces).
 */
export const skillsConfig: Skill[] = [
  // Languages
  { name: "Python", category: "Languages", icon: "python", proficiency: "Advanced" },
  { name: "TypeScript", category: "Languages", icon: "typescript", proficiency: "Advanced" },
  { name: "JavaScript", category: "Languages", icon: "javascript", proficiency: "Advanced" },
  { name: "C++", category: "Languages", icon: "cplusplus", proficiency: "Intermediate" },
  { name: "C", category: "Languages", icon: "c", proficiency: "Intermediate" },
  { name: "PHP", category: "Languages", icon: "php", proficiency: "Intermediate" },
  { name: "Prolog", category: "Languages", proficiency: "Beginner" },

  // Frameworks & Libraries
  { name: "Next.js", category: "Frameworks & Libraries", icon: "nextdotjs", proficiency: "Advanced" },
  { name: "React", category: "Frameworks & Libraries", icon: "react", proficiency: "Advanced" },
  { name: "React Native", category: "Frameworks & Libraries", icon: "react", proficiency: "Intermediate" },
  { name: "Tailwind CSS", category: "Frameworks & Libraries", icon: "tailwindcss", proficiency: "Advanced" },
  { name: "FastAPI", category: "Frameworks & Libraries", icon: "fastapi", proficiency: "Intermediate" },
  { name: "PySide6 / Qt", category: "Frameworks & Libraries", icon: "qt", proficiency: "Intermediate" },
  { name: "OpenCV", category: "Frameworks & Libraries", icon: "opencv", proficiency: "Intermediate" },

  // Tools & Platforms
  { name: "Git", category: "Tools & Platforms", icon: "git", proficiency: "Advanced" },
  { name: "GitHub", category: "Tools & Platforms", icon: "github", proficiency: "Advanced" },
  { name: "Vercel", category: "Tools & Platforms", icon: "vercel", proficiency: "Advanced" },
  { name: "Supabase", category: "Tools & Platforms", icon: "supabase", proficiency: "Advanced" },
  { name: "Arduino", category: "Tools & Platforms", icon: "arduino", proficiency: "Advanced" },
  { name: "Blender", category: "Tools & Platforms", icon: "blender", proficiency: "Intermediate" },
  { name: "Linux", category: "Tools & Platforms", icon: "linux", proficiency: "Intermediate" },
  { name: "VS Code", category: "Tools & Platforms", icon: "vscodium", proficiency: "Advanced" },
  { name: "MySQL", category: "Tools & Platforms", icon: "mysql", proficiency: "Intermediate" },
  { name: "Claude Code", category: "Tools & Platforms", icon: "anthropic", proficiency: "Advanced" },

  // CS Concepts
  { name: "Data Structures", category: "CS Concepts", proficiency: "Advanced" },
  { name: "Algorithms", category: "CS Concepts", proficiency: "Advanced" },
  { name: "OOP", category: "CS Concepts", proficiency: "Advanced" },
  { name: "Computer Vision", category: "CS Concepts", proficiency: "Intermediate" },
  { name: "Embedded Systems", category: "CS Concepts", proficiency: "Intermediate" },
  { name: "AI Agents", category: "CS Concepts", proficiency: "Intermediate" },
];

/**
 * GRADES — One entry per semester.
 * [EDIT ME] Replace placeholder values with real subjects, grades, and units.
 */
export const gradesConfig: SemesterGrades[] = [
  {
    label: "1st Semester — [EDIT ME] Year/Level",
    gpa: "1.50",
    subjects: [
      { code: "[EDIT ME] CS101", name: "Intro to Computing", grade: "1.25", units: 3 },
      { code: "[EDIT ME] MATH1", name: "Calculus I", grade: "1.50", units: 4 },
      { code: "[EDIT ME] ENG1", name: "Purposive Communication", grade: "1.50", units: 3 },
    ],
  },
  {
    label: "2nd Semester — [EDIT ME] Year/Level",
    gpa: "1.40",
    subjects: [
      { code: "[EDIT ME] CS102", name: "Programming Fundamentals", grade: "1.25", units: 3 },
      { code: "[EDIT ME] CS103", name: "Discrete Mathematics", grade: "1.50", units: 3 },
      { code: "[EDIT ME] PHYS1", name: "Physics for Engineers", grade: "1.50", units: 4 },
    ],
  },
];
