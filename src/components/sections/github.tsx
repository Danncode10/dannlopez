"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((m) => m.GitHubCalendar),
  {
    ssr: false,
    loading: () => (
      <div className="h-[140px] w-full rounded-lg bg-secondary/30 animate-pulse" />
    ),
  }
);
import { useGitHubRepos } from "@/hooks/use-github-repos";
import { siteConfig } from "@/lib/config";
import { FadeIn } from "@/components/motion/fade-in";
import { Star, GitFork, ArrowUpRight, AlertCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { motion, AnimatePresence } from "framer-motion";

const PAGE_SIZE = 6;

export function GitHubSection() {
  const { data: repos, isLoading, isError } = useGitHubRepos(siteConfig.githubUsername);
  const [page, setPage] = useState(0);

  const totalPages = repos ? Math.ceil(repos.length / PAGE_SIZE) : 0;
  const pageRepos = repos?.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE) ?? [];

  return (
    <section
      id="github"
      className="relative border-t border-border bg-background"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <FadeIn>
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            GitHub
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Live activity.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl text-lg">
            Pulled in real-time from{" "}
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-semibold"
            >
              @{siteConfig.githubUsername}
            </a>{" "}
            on GitHub.
          </p>
        </FadeIn>

        {/* Contribution graph */}
        <FadeIn delay={0.15}>
          <div className="mt-12 rounded-2xl border border-border bg-card p-6 overflow-x-auto">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              Contribution Graph
            </h3>
            <ContribGraph username={siteConfig.githubUsername} />
          </div>
        </FadeIn>

        {/* Repos */}
        <FadeIn delay={0.25}>
          <div className="mt-12 flex items-center justify-between">
            <h3 className="text-xl font-semibold text-foreground">
              Public Repositories
              {repos && (
                <span className="ml-2 text-muted-foreground font-normal">
                  ({repos.length})
                </span>
              )}
            </h3>
            {totalPages > 1 && (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setPage((p) => Math.max(0, p - 1))}
                  disabled={page === 0}
                  className="p-2 rounded-lg border border-border bg-card text-muted-foreground hover:text-foreground hover:bg-secondary disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  aria-label="Previous page"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <span className="text-sm text-muted-foreground tabular-nums">
                  {page + 1} / {totalPages}
                </span>
                <button
                  onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
                  disabled={page === totalPages - 1}
                  className="p-2 rounded-lg border border-border bg-card text-muted-foreground hover:text-foreground hover:bg-secondary disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  aria-label="Next page"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>

          {isLoading && (
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="h-44 rounded-2xl border border-border bg-card animate-pulse"
                />
              ))}
            </div>
          )}

          {isError && (
            <div className="mt-6 rounded-2xl border border-destructive/30 bg-destructive/5 p-6 flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Couldn&apos;t load GitHub repos
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  The GitHub API may be rate-limiting. Try refreshing in a moment.
                </p>
              </div>
            </div>
          )}

          {repos && (
            <AnimatePresence mode="wait">
              <motion.div
                key={page}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {pageRepos.map((r) => (
                  <a
                    key={r.id}
                    href={r.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex flex-col rounded-2xl border border-border bg-card p-5 hover:border-primary/40 hover:-translate-y-0.5 transition-all"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2 min-w-0">
                        <SiGithub size={16} className="text-muted-foreground shrink-0" />
                        <span className="text-sm font-semibold text-foreground truncate">
                          {r.name}
                        </span>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all shrink-0" />
                    </div>

                    <p className="mt-3 text-xs text-muted-foreground leading-relaxed line-clamp-3 flex-1">
                      {r.description ?? "No description yet."}
                    </p>

                    <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                      {r.language && (
                        <span className="inline-flex items-center gap-1.5">
                          <span className="h-2 w-2 rounded-full bg-primary" />
                          {r.language}
                        </span>
                      )}
                      <span className="inline-flex items-center gap-1">
                        <Star className="h-3 w-3" />
                        {r.stargazers_count}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <GitFork className="h-3 w-3" />
                        {r.forks_count}
                      </span>
                    </div>
                  </a>
                ))}
              </motion.div>
            </AnimatePresence>
          )}
        </FadeIn>
      </div>
    </section>
  );
}

function ContribGraph({ username }: { username: string }) {
  return (
    <GitHubCalendar
      username={username}
      colorScheme="dark"
      blockSize={12}
      blockMargin={4}
      fontSize={12}
      style={{ color: "var(--color-foreground)" }}
    />
  );
}
