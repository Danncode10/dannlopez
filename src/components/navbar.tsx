"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/config";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "GitHub", href: "#github" },
  { label: "Skills", href: "#skills" },
  { label: "Grades", href: "#grades" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = [
      "home",
      ...navLinks.map((l) => l.href.replace("#", "")),
      "contact",
    ];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActiveSection(e.target.id);
        }
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-background/70 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-blue-500 text-primary-foreground shadow-[0_4px_20px_-4px_rgba(108,71,255,0.6)] group-hover:scale-105 transition-transform"
          >
            <span className="text-sm font-black">D</span>
          </motion.div>
          <span className="hidden sm:inline text-sm font-semibold tracking-tight text-foreground">
            {siteConfig.shortName}
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 rounded-full border border-border/50 bg-card/60 backdrop-blur p-1">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const active = activeSection === id;
            return (
              <a
                key={link.href}
                href={link.href}
                className="relative px-4 py-1.5 text-sm font-medium rounded-full transition-colors"
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-secondary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span
                  className={`relative z-10 ${
                    active ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </span>
              </a>
            );
          })}
        </nav>

        {/* Right CTAs */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/50 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            aria-label="GitHub"
          >
            <SiGithub size={16} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 h-9 px-4 text-xs font-semibold rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-muted-foreground hover:text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl px-4 pb-4 pt-2 space-y-1"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-muted-foreground rounded-lg hover:text-foreground hover:bg-secondary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="block mt-3 px-4 py-3 text-sm font-semibold rounded-lg bg-primary text-primary-foreground text-center"
            >
              Get in touch
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
