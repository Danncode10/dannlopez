"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Lock, Sparkles, ExternalLink } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { projectsConfig } from "@/lib/config";
import type { Project, ProjectCategory } from "@/types/portfolio";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/motion/fade-in";

type Filter = "All" | ProjectCategory;

const FILTERS: Filter[] = [
  "All",
  "Tools",
  "AI",
  "Robotics & IoT",
  "Web Apps",
  "Algorithms & CS",
  "Learning",
];

export function Projects() {
  const [filter, setFilter] = useState<Filter>("All");

  const featured = useMemo(
    () => projectsConfig.filter((p) => p.featured),
    []
  );

  const rest = useMemo(() => {
    const nonFeatured = projectsConfig.filter((p) => !p.featured);
    if (filter === "All") return nonFeatured;
    return nonFeatured.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <section
      id="projects"
      className="relative border-t border-border bg-card"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <FadeIn>
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Projects
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Things I&apos;ve built.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl text-lg">
            From gesture-controlled robots to AI-native platforms — every
            project here is something I shipped end-to-end.
          </p>
        </FadeIn>

        {/* Featured row */}
        {featured.length > 0 && (
          <div className="mt-12">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Featured Work
              </span>
            </div>

            <FadeIn>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {featured.map((p, i) => (
                  <ProjectCard key={p.id} project={p} index={i} featured />
                ))}
              </div>
            </FadeIn>
          </div>
        )}

        {/* Filter chips */}
        <div className="mt-20 mb-8">
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => {
              const active = filter === f;
              return (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`relative px-4 py-2 text-sm font-semibold rounded-full transition-colors ${
                    active
                      ? "text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground border border-border"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="filter-pill"
                      className="absolute inset-0 rounded-full bg-primary"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 32,
                      }}
                    />
                  )}
                  <span className="relative z-10">{f}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid */}
        <div
          key={filter}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {rest.map((p, i) => (
            <FadeIn key={p.id} delay={Math.min(i * 0.04, 0.4)} distance={16} duration={0.45}>
              <ProjectCard project={p} index={i} />
            </FadeIn>
          ))}
        </div>

        {rest.length === 0 && (
          <div className="mt-12 rounded-2xl border border-dashed border-border bg-background/40 p-12 text-center">
            <p className="text-muted-foreground">
              No projects in this category yet. Switch filter to see more.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  featured,
}: {
  project: Project;
  index: number;
  featured?: boolean;
}) {
  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background p-6 transition-all hover:border-primary/40 hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_rgba(108,71,255,0.25)] ${
        featured ? "lg:p-7" : ""
      }`}
    >
      {/* Hover gradient overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(600px circle at 50% -20%, rgba(108,71,255,0.18), transparent 60%)",
        }}
      />

      {/* Header */}
      <div className="relative flex items-start justify-between gap-3">
        <div className="flex items-center gap-2 flex-wrap">
          <Badge
            variant="secondary"
            className="text-[10px] uppercase tracking-wider"
          >
            {project.category}
          </Badge>
          {project.isPrivate && (
            <Badge
              variant="outline"
              className="text-[10px] uppercase tracking-wider gap-1 border-primary/30 text-primary"
            >
              <Lock className="h-3 w-3" />
              Private
            </Badge>
          )}
        </div>
        <span className="text-xs font-mono text-muted-foreground tabular-nums">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Title + tagline */}
      <h3
        className={`relative mt-5 font-bold text-foreground leading-tight ${
          featured ? "text-2xl" : "text-xl"
        }`}
      >
        {project.title}
      </h3>
      <p className="relative mt-2 text-sm font-medium text-foreground/80">
        {project.tagline}
      </p>

      {/* Description */}
      <p className="relative mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
        {project.description}
      </p>

      {/* Stack */}
      <div className="relative mt-5 flex flex-wrap gap-1.5">
        {project.stack.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-medium bg-secondary text-secondary-foreground border border-border/50"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="relative mt-6 flex items-center gap-3 pt-4 border-t border-border/60">
        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
          >
            <SiGithub size={14} />
            Code
            <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
          </a>
        ) : (
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground/60">
            <Lock className="h-3.5 w-3.5" />
            Private repo
          </span>
        )}

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors ml-auto"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            Live demo
          </a>
        )}
      </div>
    </article>
  );
}
