import { Mail } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { siteConfig } from "@/lib/config";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <span className="text-[10px] font-black">D</span>
            </div>
            <span className="font-semibold text-foreground">
              {siteConfig.name}
            </span>
          </div>
          <span className="hidden sm:inline">·</span>
          <span>© {year} · Built with Next.js + Tailwind</span>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
          >
            <SiGithub size={16} />
          </a>
          <a
            href={siteConfig.socials.email}
            aria-label="Email"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
