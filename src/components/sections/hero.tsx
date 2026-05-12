"use client";

import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown, Download } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { siteConfig } from "@/lib/config";
import { Magnetic } from "@/components/motion/magnetic";

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setMounted(true), 16);
    return () => clearTimeout(id);
  }, []);

  const words = siteConfig.name.split(" ");

  const reveal = (delay: number): React.CSSProperties => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translate3d(0,0,0)" : "translate3d(0,20px,0)",
    transition: `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
  });

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden min-h-[92vh] flex items-center"
    >
      {/* Gradient blobs with subtle pulse */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-primary/20 blur-[120px] -z-10 animate-pulse-slow"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-accent/30 blur-[120px] -z-10 animate-pulse-slow [animation-delay:1s]"
      />

      {/* Grid overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--color-foreground) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-center">
        {/* LEFT — copy */}
        <div className="text-left">
          {/* Status badge */}
          <div
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5"
            style={reveal(0)}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="text-xs font-semibold text-primary">
              {siteConfig.role}
            </span>
          </div>

          {/* Name — word-by-word reveal */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight leading-[1.05] text-foreground">
            {words.map((word, i) => (
              <span
                key={i}
                className="inline-block mr-[0.25em]"
                style={reveal(0.08 + i * 0.08)}
              >
                {i === words.length - 1 ? (
                  <span className="bg-gradient-to-r from-primary via-blue-400 to-accent-foreground bg-clip-text text-transparent">
                    {word}
                  </span>
                ) : (
                  word
                )}
              </span>
            ))}
          </h1>

          {/* Bio */}
          <p
            className="mt-6 max-w-2xl text-lg sm:text-xl text-muted-foreground leading-relaxed"
            style={reveal(0.4)}
          >
            Building across{" "}
            <span className="text-foreground font-semibold">Web</span>,{" "}
            <span className="text-foreground font-semibold">AI</span>,{" "}
            <span className="text-foreground font-semibold">Robotics</span>, and{" "}
            <span className="text-foreground font-semibold">Automation</span>{" "}
            — shipping real products as a CS student at {siteConfig.university}.
          </p>

          {/* CTAs */}
          <div
            className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4"
            style={reveal(0.55)}
          >
            <Magnetic strength={0.2}>
              <a
                href="#projects"
                className="inline-flex h-12 items-center gap-2 px-7 text-sm font-semibold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_10px_30px_-12px_rgba(108,71,255,0.6)] transition-all hover:-translate-y-0.5"
              >
                See Projects
                <ArrowRight className="h-4 w-4" />
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

            {siteConfig.resumeUrl && (
              <Magnetic strength={0.2}>
                <a
                  href={siteConfig.resumeUrl}
                  download
                  className="inline-flex h-12 items-center gap-2 px-7 text-sm font-semibold rounded-xl border border-border text-foreground hover:bg-secondary transition-all"
                >
                  <Download className="h-4 w-4" />
                  Resume
                </a>
              </Magnetic>
            )}
          </div>
        </div>

        {/* RIGHT — avatar */}
        <div
          className="hidden lg:flex items-center justify-center"
          style={{
            ...reveal(0.2),
            transitionDuration: "0.9s",
          }}
        >
          <div className="relative">
            {/* Animated glow */}
            <div
              aria-hidden
              className="absolute -inset-6 rounded-full bg-gradient-to-tr from-primary via-blue-400 to-accent-foreground opacity-40 blur-2xl animate-spin-slow"
            />

            {/* Floating wrapper */}
            <div className="relative aspect-square w-[320px] xl:w-[380px] rounded-full overflow-hidden border-4 border-card shadow-2xl ring-1 ring-primary/30 animate-float">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={siteConfig.avatar}
                alt={siteConfig.name}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
        style={reveal(1.2)}
      >
        <span className="text-[10px] uppercase tracking-widest font-semibold">
          Scroll
        </span>
        <ChevronDown className="h-5 w-5 animate-bounce-slow" />
      </a>
    </section>
  );
}
