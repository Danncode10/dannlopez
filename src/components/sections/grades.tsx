"use client";

import { gradesConfig } from "@/lib/config";
import { FadeIn } from "@/components/motion/fade-in";
import { Badge } from "@/components/ui/badge";
import { Award, BookOpen } from "lucide-react";

export function Grades() {
  if (gradesConfig.length === 0) return null;

  return (
    <section
      id="grades"
      className="relative border-t border-border bg-background"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <FadeIn>
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Academics
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Numbers that speak.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl text-lg">
            Academic performance per semester at Nueva Vizcaya State University.
          </p>
        </FadeIn>

        <div className="mt-12 grid lg:grid-cols-2 gap-6">
          {gradesConfig.map((sem, i) => (
            <FadeIn key={sem.label} delay={i * 0.08}>
              <div className="rounded-2xl border border-border bg-card overflow-hidden">
                <div className="flex items-center justify-between gap-3 p-5 border-b border-border bg-secondary/30">
                  <div className="flex items-center gap-2 min-w-0">
                    <BookOpen className="h-4 w-4 text-primary shrink-0" />
                    <h3 className="text-sm font-semibold text-foreground truncate">
                      {sem.label}
                    </h3>
                  </div>
                  {sem.gpa && (
                    <Badge variant="secondary" className="gap-1.5 shrink-0">
                      <Award className="h-3 w-3 text-primary" />
                      GPA {sem.gpa}
                    </Badge>
                  )}
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-[11px] uppercase tracking-wider text-muted-foreground">
                        <th className="text-left font-semibold px-5 py-3">Subject</th>
                        <th className="text-center font-semibold px-3 py-3">Units</th>
                        <th className="text-right font-semibold px-5 py-3">Grade</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sem.subjects.map((sub, j) => (
                        <tr
                          key={`${sub.name}-${j}`}
                          className="border-t border-border hover:bg-secondary/20 transition-colors"
                        >
                          <td className="px-5 py-3">
                            <div className="flex flex-col">
                              <span className="font-medium text-foreground">
                                {sub.name}
                              </span>
                              {sub.code && (
                                <span className="text-xs text-muted-foreground font-mono">
                                  {sub.code}
                                </span>
                              )}
                            </div>
                          </td>
                          <td className="text-center px-3 py-3 text-muted-foreground tabular-nums">
                            {sub.units ?? "—"}
                          </td>
                          <td className="text-right px-5 py-3 font-bold text-foreground tabular-nums">
                            {sub.grade}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
