"use client";

import { useEffect, useState } from "react";
import { GraduationCap, Code2, Rocket } from "lucide-react";
import { siteConfig, projectsConfig } from "@/lib/config";
import { FadeIn } from "@/components/motion/fade-in";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const duration = 1600;
    const interval = setInterval(() => {
      const t = Math.min(1, (Date.now() - start) / duration);
      const eased = 1 - Math.pow(1 - t, 4);
      setValue(Math.round(eased * to));
      if (t >= 1) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, [to]);

  return (
    <span className="tabular-nums">
      {value}
      {suffix}
    </span>
  );
}

export function About() {
  const totalProjects = projectsConfig.length;

  return (
    <section
      id="about"
      className="relative border-t border-border bg-background"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <FadeIn>
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            About Me
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Student by title.{" "}
            <span className="text-muted-foreground">Builder by practice.</span>
          </h2>
        </FadeIn>

        <div className="mt-12 grid lg:grid-cols-[1.4fr_1fr] gap-12 items-start">
          {/* Left: bio */}
          <FadeIn delay={0.1}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {siteConfig.bio}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border bg-card">
                <GraduationCap className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-foreground">
                  {siteConfig.university}
                </span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border bg-card">
                <Code2 className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-foreground">
                  {siteConfig.degree}
                </span>
              </div>
            </div>
          </FadeIn>

          {/* Right: stat cards */}
          <FadeIn direction="left" delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              <StatCard
                icon={<Rocket className="h-5 w-5 text-primary" />}
                label="Projects shipped"
                value={<Counter to={totalProjects} suffix="+" />}
              />
              <StatCard
                icon={<Code2 className="h-5 w-5 text-primary" />}
                label="GitHub repos"
                value={<Counter to={30} suffix="+" />}
              />
              <StatCard
                icon={<GraduationCap className="h-5 w-5 text-primary" />}
                label="Years coding"
                value={<Counter to={4} suffix="+" />}
                className="col-span-2"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function StatCard({
  icon,
  label,
  value,
  className,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-border bg-card p-5 hover:border-primary/40 transition-colors ${className ?? ""}`}
    >
      <div className="flex items-center gap-2 text-muted-foreground">
        {icon}
        <span className="text-xs font-semibold uppercase tracking-wider">
          {label}
        </span>
      </div>
      <div className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
        {value}
      </div>
    </div>
  );
}
