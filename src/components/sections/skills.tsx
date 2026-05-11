"use client";

import { useMemo } from "react";
import * as SimpleIcons from "@icons-pack/react-simple-icons";
import { skillsConfig } from "@/lib/config";
import type { Skill, SkillCategory } from "@/types/portfolio";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/motion/fade-in";
import { Stagger, StaggerItem } from "@/components/motion/stagger";

const CATEGORY_ORDER: SkillCategory[] = [
  "Languages",
  "Frameworks & Libraries",
  "Tools & Platforms",
  "CS Concepts",
];

function slugToComponent(slug?: string): React.ComponentType<{ size?: number; color?: string; className?: string }> | null {
  if (!slug) return null;
  const key = "Si" + slug.charAt(0).toUpperCase() + slug.slice(1);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const lib = SimpleIcons as Record<string, any>;
  return lib[key] ?? null;
}

export function Skills() {
  const grouped = useMemo(() => {
    const map = new Map<SkillCategory, Skill[]>();
    for (const cat of CATEGORY_ORDER) map.set(cat, []);
    for (const s of skillsConfig) {
      const list = map.get(s.category);
      if (list) list.push(s);
    }
    return map;
  }, []);

  return (
    <section
      id="skills"
      className="relative border-t border-border bg-card"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <FadeIn>
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Skills
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            What I work with.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl text-lg">
            Languages, frameworks, and tools I&apos;ve used to ship real
            projects.
          </p>
        </FadeIn>

        {skillsConfig.length === 0 ? (
          <p className="mt-12 text-center text-muted-foreground">
            Skills coming soon.
          </p>
        ) : (
          <div className="mt-16 space-y-14">
            {CATEGORY_ORDER.map((cat) => {
              const items = grouped.get(cat) ?? [];
              if (items.length === 0) return null;
              return (
                <div key={cat}>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-5">
                    {cat}
                  </h3>
                  <Stagger
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3"
                    stagger={0.04}
                  >
                    {items.map((s) => (
                      <StaggerItem key={s.name}>
                        <SkillCard skill={s} />
                      </StaggerItem>
                    ))}
                  </Stagger>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

function SkillCard({ skill }: { skill: Skill }) {
  const Icon = slugToComponent(skill.icon);
  return (
    <div className="group relative flex items-center gap-3 rounded-xl border border-border bg-background p-4 hover:border-primary/40 hover:-translate-y-0.5 transition-all">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-foreground">
        {Icon ? (
          <Icon size={20} color="currentColor" />
        ) : (
          <span className="text-sm font-bold">{skill.name.charAt(0)}</span>
        )}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-foreground truncate">
          {skill.name}
        </p>
        {skill.proficiency && (
          <Badge variant="secondary" className="mt-1 text-[10px] font-medium">
            {skill.proficiency}
          </Badge>
        )}
      </div>
    </div>
  );
}
