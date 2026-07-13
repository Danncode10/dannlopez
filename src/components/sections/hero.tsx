"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Download } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { siteConfig } from "@/lib/config";
import { Magnetic } from "@/components/motion/magnetic";
import { Typewriter } from "@/components/motion/typewriter";
import { AmbientParticles } from "@/components/motion/ambient-particles";

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setMounted(true), 16);
    return () => clearTimeout(id);
  }, []);

  const highlightStart = siteConfig.name.indexOf(siteConfig.shortName);
  const highlightEnd =
    highlightStart >= 0
      ? highlightStart + siteConfig.shortName.length
      : siteConfig.name.length;

  const reveal = (delay: number): React.CSSProperties => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translate3d(0,0,0)" : "translate3d(0,20px,0)",
    transition: `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
  });

  const introReveal = (delay = 0) => ({
    opacity: typingDone ? 1 : 0.28,
    filter: typingDone ? "blur(0px)" : "blur(10px)",
    y: typingDone ? 0 : 10,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  });

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden min-h-[92vh] flex items-center"
      style={{
        background:
          "radial-gradient(ellipse 860px 620px at 82% 0%, color-mix(in oklab, var(--color-primary) 20%, transparent), transparent 60%), var(--color-background)",
      }}
    >
      {/* Grid overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-50"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 grid-fade-overlay"
      />
      <AmbientParticles active count={140} />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 -z-10"
        style={{
          background:
            "linear-gradient(to top, var(--color-background), transparent)",
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-center">
        {/* LEFT — copy */}
        <div className="text-left">
          {/* Status badge */}
          <motion.div
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5"
            initial={{ opacity: 0.2, filter: "blur(8px)", y: 8 }}
            animate={introReveal(0)}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="text-xs font-semibold text-primary">
              {siteConfig.role}
            </span>
          </motion.div>

          {/* Name — DannFlow-style typewriter reveal */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight leading-[1.05] text-foreground">
            <Typewriter
              text={siteConfig.name}
              speed={64}
              delay={180}
              onComplete={() => setTypingDone(true)}
              highlight={{
                start: highlightStart >= 0 ? highlightStart : 0,
                end: highlightEnd,
                delay: 250,
              }}
            />
          </h1>

          {/* Bio */}
          <motion.p
            className="mt-6 max-w-2xl text-lg sm:text-xl text-muted-foreground leading-relaxed"
            initial={{ opacity: 0.25, filter: "blur(10px)", y: 12 }}
            animate={introReveal(0.05)}
          >
            Building across{" "}
            <span className="text-foreground font-semibold">Web</span>,{" "}
            <span className="text-foreground font-semibold">AI</span>,{" "}
            <span className="text-foreground font-semibold">Robotics</span>, and{" "}
            <span className="text-foreground font-semibold">Automation</span>{" "}
            — shipping real products as a CS student at {siteConfig.university}.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4"
            initial={{ opacity: 0.25, filter: "blur(10px)", y: 12 }}
            animate={introReveal(0.16)}
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
          </motion.div>
        </div>

        {/* RIGHT — avatar */}
        <motion.div
          className="hidden lg:flex items-center justify-center"
          initial={{ opacity: 0.2, filter: "blur(14px)", y: 18, scale: 0.96 }}
          animate={
            typingDone
              ? { opacity: 1, filter: "blur(0px)", y: 0, scale: 1 }
              : { opacity: 0.2, filter: "blur(14px)", y: 18, scale: 0.96 }
          }
          transition={{
            duration: 1,
            delay: typingDone ? 0.24 : 0,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <TiltFrame>
            <div
              aria-hidden
              className="absolute -inset-4 rounded-full border border-primary/20"
            />

            {/* Floating wrapper */}
            <div className="relative aspect-square w-[320px] xl:w-[380px] rounded-[2rem] overflow-hidden border border-border bg-card shadow-2xl ring-1 ring-primary/30 animate-float">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={siteConfig.avatar}
                alt={siteConfig.name}
                className="h-full w-full object-cover"
              />
            </div>
          </TiltFrame>
        </motion.div>
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

function TiltFrame({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="relative"
      whileHover={{ rotateX: -2.5, rotateY: 3, y: -4 }}
      transition={{ type: "spring", stiffness: 220, damping: 22 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </motion.div>
  );
}
