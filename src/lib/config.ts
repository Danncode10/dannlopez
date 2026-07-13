import type {
  Project,
  Skill,
  SemesterGrades,
  SiteConfig,
  Credential,
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
  role: "Software Engineer & BS Computer Science (Robotics) Student",
  university: "Nueva Vizcaya State University",
  degree: "BS Computer Science — Robotics & Automation",
  bio: "I'm a software engineer and Computer Science student building production-grade Web, AI, Robotics, and Automation systems. I ship real client-facing products end-to-end, completed software engineering OJT at FullSuite, and finished GCI World through the University of Tokyo while continuing to build beyond what is expected of a student.",
  githubUsername: "Danncode10",
  email: "Lesterdannlopez7@gmail.com",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://danncode10.vercel.app",
  socials: {
    github: "https://github.com/Danncode10",
    linkedin: "https://www.linkedin.com/in/lester-dann-lopez-26874b190/",
    email: "mailto:Lesterdannlopez7@gmail.com",
  },
  avatar: "/avatar.png",
  resumeUrl: "/resume.docx",
};

/**
 * PROJECTS — Add / remove / reorder freely.
 * Mark `featured: true` to surface in the Featured Work row at the top.
 * For private repos: set `isPrivate: true` and omit `githubUrl`.
 */
export const projectsConfig: Project[] = [
  // ─── FEATURED ──────────────────────────────────────────────────
  {
    id: "attyjuan-ai",
    title: "AttyJuan AI",
    tagline: "AI-powered legal platform for the Philippine legal context.",
    description:
      "A legal-tech platform that helps citizens understand legal processes and gives lawyers a modern workspace for clients, cases, and AI-assisted legal workflows.",
    category: "AI",
    stack: ["Next.js", "TypeScript", "AI", "Legal Tech", "Vercel"],
    githubUrl: "https://github.com/Danncode10/AttyJuan",
    liveUrl: "https://atty-juan-phi.vercel.app",
    isPrivate: true,
    featured: true,
  },
  {
    id: "chris-auto-shine-australia",
    title: "Chris Auto Shine",
    tagline: "Australian auto-detailing business website.",
    description:
      "A polished, conversion-focused website for an Australia-based auto detailing brand, built to present services clearly and turn visitors into bookings.",
    category: "Web Apps",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/Danncode10/chrisautoshine_v2",
    liveUrl: "https://chrisautoshine-v2.vercel.app",
    featured: true,
  },
  {
    id: "bismi-cafe-and-resto",
    title: "Bismi Cafe and Resto",
    tagline: "Restaurant website for menu, brand, and customer discovery.",
    description:
      "A modern cafe and restaurant site built to showcase the brand, menu, and customer-facing details with a fast, mobile-first experience.",
    category: "Web Apps",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/Danncode10/bismi-cafe-and-resto",
    liveUrl: "https://bismicafeandresto.vercel.app",
    isPrivate: true,
    featured: true,
  },
  {
    id: "fix-pinas",
    title: "FixPinas",
    tagline: "Civic issue reporting platform for the Philippines.",
    description:
      "A civic-tech platform for reporting local issues, tracking public concerns, and making community problems easier to surface and resolve.",
    category: "Web Apps",
    stack: ["Next.js", "TypeScript", "Civic Tech", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/Danncode10/fix-pinas",
    liveUrl: "https://fix-pinas.vercel.app",
    isPrivate: true,
    featured: true,
  },
  {
    id: "gci-world-university-tokyo",
    title: "GCI World",
    tagline: "University of Tokyo global challenge completion project.",
    description:
      "Completed GCI World through the University of Tokyo, applying software engineering and global problem-solving practice in an international academic setting.",
    category: "Learning",
    stack: ["Python", "Data Science", "Global Challenge", "University of Tokyo"],
    githubUrl: "https://github.com/Danncode10/GCI-World-April-2026",
    isPrivate: true,
    featured: true,
  },
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
 * CREDENTIALS — Licenses & Certifications.
 * Each entry maps to a clickable verification link.
 */
export const credentialsConfig: Credential[] = [
  {
    id: "fullsuite-software-engineer-ojt",
    title: "Software Engineer OJT",
    issuer: "FullSuite",
    issuedDate: "2026",
    credentialUrl: siteConfig.socials.linkedin ?? siteConfig.socials.github,
    skills: ["Software Engineering", "Next.js", "TypeScript", "Team Workflow"],
  },
  {
    id: "gci-world-university-tokyo",
    title: "GCI World — Completed",
    issuer: "The University of Tokyo",
    issuedDate: "Apr 2026",
    credentialUrl: "https://github.com/Danncode10/GCI-World-April-2026",
    skills: ["Global Challenge", "Data Science", "Problem Solving"],
  },
  {
    id: "python-essentials-1",
    title: "Python Essentials 1",
    issuer: "Cisco",
    issuerIcon: "cisco",
    issuedDate: "May 2026",
    credentialUrl:
      "https://www.credly.com/badges/6af07665-73a8-4b7b-81b4-a1597ee349b4/linked_in_profile",
    skills: ["Python"],
  },
  {
    id: "crash-course-python",
    title: "Crash Course on Python",
    issuer: "Google",
    issuerIcon: "google",
    issuedDate: "Dec 2024",
    credentialId: "UXAPAOH0GX3Z",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/UXAPAOH0GX3Z",
    skills: ["NumPy", "pandas", "Python"],
  },
  {
    id: "intro-git-github",
    title: "Introduction to Git and GitHub",
    issuer: "Google",
    issuerIcon: "google",
    issuedDate: "Dec 2024",
    credentialId: "HRAI0KOWM9B6",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/HRAI0KOWM9B6",
    skills: ["Git", "GitHub"],
  },
  {
    id: "learn-cpp",
    title: "Learn C++ Programming — Beginner to Advance",
    issuer: "Udemy",
    issuerIcon: "udemy",
    issuedDate: "Aug 2024",
    credentialId: "UC-333c0a61-60b8-4778-9680-ef10dd15fbba",
    credentialUrl:
      "https://www.udemy.com/certificate/UC-333c0a61-60b8-4778-9680-ef10dd15fbba/",
    skills: ["C++"],
  },
  {
    id: "ux-process",
    title: "Start the UX Design Process: Empathize, Define, and Ideate",
    issuer: "Google",
    issuerIcon: "google",
    issuedDate: "May 2024",
    credentialId: "T4TH28LGSAEJ",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/T4TH28LGSAEJ",
    skills: ["UX Design", "Tailwind CSS"],
  },
  {
    id: "ux-foundations",
    title: "Foundations of User Experience (UX) Design",
    issuer: "Google",
    issuerIcon: "google",
    issuedDate: "May 2024",
    credentialId: "6AG3YLPGADDX",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/6AG3YLPGADDX",
    skills: ["User Experience (UX)", "Bootstrap"],
  },
];

/**
 * GRADES — One entry per semester.
 * [EDIT ME] Replace placeholder values with real subjects, grades, and units.
 */
export const gradesConfig: SemesterGrades[] = [
  {
    label: "1st Year, 1st Semester",
    gpa: "1.30",
    subjects: [
      { code: "GE ARTS", name: "Art Appreciation", grade: "1.25", units: 3 },
      { code: "GE SELF", name: "Understanding the Self", grade: "1.25", units: 3 },
      { code: "GE ENVI", name: "Environmental Science", grade: "1.50", units: 3 },
      { code: "GE MATH", name: "Mathematics in the Modern World", grade: "1.50", units: 3 },
      { code: "IT ECC 1", name: "Introduction to Computing", grade: "1.25", units: 3 },
      { code: "IT ECC 2", name: "Fundamentals of Programming", grade: "1.00", units: 3 },
      { code: "PATHF 1", name: "Physical Activities Towards Health and Wellness 1", grade: "1.50", units: 2 },
      { code: "CWTS 1", name: "Civic Welfare Training Service 1", grade: "1.25", units: 3 },
    ],
  },
  {
    label: "1st Year, 2nd Semester",
    gpa: "1.37",
    subjects: [
      { code: "GE INDI", name: "Philippine Indigenous Communities", grade: "1.50", units: 3 },
      { code: "GE COMM", name: "Purposive Communication", grade: "1.50", units: 3 },
      { code: "GE STS", name: "Science, Technology, and Society", grade: "1.25", units: 3 },
      { code: "GE WORLD", name: "The Contemporary World", grade: "1.25", units: 3 },
      { code: "CS PC 1", name: "Discrete Structures 1", grade: "1.00", units: 3 },
      { code: "IT ECC 3", name: "Intermediate Programming", grade: "1.00", units: 3 },
      { code: "PATHF 2", name: "Physical Activities Toward Health and Wellness 2", grade: "1.50", units: 2 },
      { code: "CWTS 2", name: "Civic Welfare Training Service 2", grade: "2.00", units: 3 },
    ],
  },
  {
    label: "2nd Year, 1st Semester",
    gpa: "1.27",
    subjects: [
      { code: "GE ENTREP", name: "The Entrepreneurial Mind", grade: "1.75", units: 3 },
      { code: "GE HIST", name: "Readings in Philippine History", grade: "1.25", units: 3 },
      { code: "CS PC 2", name: "Discrete Structures 2", grade: "1.00", units: 3 },
      { code: "CS PC 3", name: "Object Oriented Programming", grade: "1.00", units: 3 },
      { code: "IT ECC 4", name: "Data Structures and Algorithms", grade: "1.25", units: 3 },
      { code: "CST2_1", name: "Basic Electronic Circuits", grade: "1.50", units: 3 },
      { code: "CST2_2", name: "Fundamentals of Robotics", grade: "1.00", units: 3 },
      { code: "PATHF 3", name: "Physical Activities Toward Health and Wellness 3", grade: "1.50", units: 2 },
    ],
  },
  {
    label: "2nd Year, 2nd Semester",
    gpa: "1.21",
    subjects: [
      { code: "GE MSRIZAL", name: "Life and Works of Rizal", grade: "1.50", units: 3 },
      { code: "CS PC 4", name: "Algorithms and Complexities", grade: "1.00", units: 3 },
      { code: "IT ECC 5", name: "Information Management", grade: "1.25", units: 3 },
      { code: "CS PC 5", name: "Architecture and Organization", grade: "1.00", units: 3 },
      { code: "CS MATH", name: "Analytic Geometry and Calculus", grade: "1.25", units: 3 },
      { code: "CST2_3", name: "Microcontroller/Microprocessor", grade: "1.25", units: 2 },
      { code: "PATHF 4", name: "Physical Activities Toward Health and Wellness 4", grade: "1.25", units: 2 },
    ],
  },
  {
    label: "3rd Year, 1st Semester",
    gpa: "1.04",
    subjects: [
      { code: "GE ETHICS", name: "Ethics", grade: "1.00", units: 3 },
      { code: "CS PC 6", name: "Automata Theory and Formal Languages", grade: "1.00", units: 3 },
      { code: "CS PC 7", name: "Information Assurance and Security", grade: "1.25", units: 3 },
      { code: "IT ECC 6", name: "Application Development and Emerging Technologies", grade: "1.00", units: 3 },
      { code: "CS PEC 1", name: "System Fundamentals", grade: "1.00", units: 3 },
      { code: "CST2_4", name: "Artificial Intelligence", grade: "1.00", units: 3 },
    ],
  },
  {
    label: "3rd Year, 2nd Semester",
    subjects: [
      { code: "CS PC 8", name: "Programming Languages", grade: "In Progress", units: 3 },
      { code: "CS PC 9", name: "Software Engineering 1", grade: "In Progress", units: 3 },
      { code: "CS PC 10", name: "Social Issues and Professional Ethics", grade: "In Progress", units: 3 },
    ],
  },
];
