"use client";

import { useQuery } from "@tanstack/react-query";

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  homepage: string | null;
  updated_at: string;
  fork: boolean;
}

async function fetchRepos(username: string): Promise<GitHubRepo[]> {
  const res = await fetch(
    `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
    {
      headers: { Accept: "application/vnd.github+json" },
    }
  );
  if (!res.ok) throw new Error(`GitHub API ${res.status}`);
  const data = (await res.json()) as GitHubRepo[];
  return data.filter((r) => !r.fork);
}

export function useGitHubRepos(username: string) {
  return useQuery({
    queryKey: ["github-repos", username],
    queryFn: () => fetchRepos(username),
    staleTime: 1000 * 60 * 30,
    refetchOnWindowFocus: false,
  });
}
