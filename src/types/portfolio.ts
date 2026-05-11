export type ProjectCategory =
  | "Tools"
  | "AI"
  | "Robotics & IoT"
  | "Web Apps"
  | "Algorithms & CS"
  | "Learning";

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: ProjectCategory;
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
  isPrivate?: boolean;
  featured?: boolean;
  image?: string;
}

export type SkillCategory =
  | "Languages"
  | "Frameworks & Libraries"
  | "Tools & Platforms"
  | "CS Concepts";

export type Proficiency = "Beginner" | "Intermediate" | "Advanced";

export interface Skill {
  name: string;
  category: SkillCategory;
  icon?: string;
  proficiency?: Proficiency;
}

export interface Subject {
  code?: string;
  name: string;
  grade: string;
  units?: number;
}

export interface SemesterGrades {
  label: string;
  gpa?: string;
  subjects: Subject[];
}

export interface SiteConfig {
  name: string;
  shortName: string;
  role: string;
  university: string;
  degree: string;
  bio: string;
  githubUsername: string;
  email: string;
  url: string;
  socials: {
    github: string;
    linkedin?: string;
    email: string;
  };
  avatar: string;
}
