"use client";

import { Mail, ArrowUpRight } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";

function LinkedInIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.267 2.37 4.267 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
import { siteConfig } from "@/lib/config";
import { FadeIn } from "@/components/motion/fade-in";
import { Magnetic } from "@/components/motion/magnetic";

export function Contact() {
  const hasLinkedIn = !!siteConfig.socials.linkedin;

  return (
    <section
      id="contact"
      className="relative border-t border-border bg-card overflow-hidden"
    >
      {/* Background flourish */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-32 h-[400px] bg-gradient-to-b from-primary/15 via-primary/5 to-transparent -z-10"
      />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-28 md:py-36 text-center">
        <FadeIn>
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Contact
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold text-foreground tracking-tight">
            Let&apos;s build something{" "}
            <span className="bg-gradient-to-r from-primary via-blue-400 to-accent-foreground bg-clip-text text-transparent">
              great
            </span>
            .
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
            Open to internships, collaborations, and interesting problems. The
            fastest way to reach me is email.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Magnetic strength={0.2}>
              <a
                href={siteConfig.socials.email}
                className="group inline-flex h-12 items-center gap-2 px-7 text-sm font-semibold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_10px_30px_-12px_rgba(108,71,255,0.6)] transition-all hover:-translate-y-0.5"
              >
                <Mail className="h-4 w-4" />
                {siteConfig.email}
                <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </a>
            </Magnetic>

            <Magnetic strength={0.2}>
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center gap-2 px-7 text-sm font-semibold rounded-xl border border-border text-foreground hover:bg-secondary transition-all"
              >
                <SiGithub size={16} />
                GitHub
              </a>
            </Magnetic>

            {hasLinkedIn && (
              <Magnetic strength={0.2}>
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center gap-2 px-7 text-sm font-semibold rounded-xl border border-border text-foreground hover:bg-secondary transition-all"
                >
                  <LinkedInIcon size={16} />
                  LinkedIn
                </a>
              </Magnetic>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
