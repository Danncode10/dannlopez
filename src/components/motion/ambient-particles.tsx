"use client";

import { useEffect, useRef, useState } from "react";

interface AmbientParticlesProps {
  active?: boolean;
  count?: number;
}

type Particle = {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
};

const hexToRgb = (value: string) => {
  const hex = value.trim().replace("#", "");
  if (hex.length !== 6) return { r: 108, g: 71, b: 255 };
  return {
    r: Number.parseInt(hex.slice(0, 2), 16),
    g: Number.parseInt(hex.slice(2, 4), 16),
    b: Number.parseInt(hex.slice(4, 6), 16),
  };
};

export function AmbientParticles({
  active = true,
  count = 110,
}: AmbientParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mounted] = useState(active);

  useEffect(() => {
    if (!mounted) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const primary = hexToRgb(
      getComputedStyle(document.documentElement)
        .getPropertyValue("--color-primary")
    );
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const particles: Particle[] = [];
    const mouse = {
      x: -10000,
      y: -10000,
      prevX: -10000,
      prevY: -10000,
      active: false,
    };

    let width = 0;
    let height = 0;
    let raf = 0;
    let visible = true;
    let fade = 0;

    const seed = () => {
      particles.length = 0;
      for (let i = 0; i < count; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        particles.push({
          x,
          y,
          baseX: x,
          baseY: y,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          size: 1.25 + Math.random() * 2.75,
          alpha: 0.25 + Math.random() * 0.55,
        });
      }
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const draw = () => {
      if (!visible) {
        raf = requestAnimationFrame(draw);
        return;
      }

      fade = Math.min(1, fade + 0.018);
      ctx.clearRect(0, 0, width, height);

      const mouseVx = mouse.x - mouse.prevX;
      const mouseVy = mouse.y - mouse.prevY;
      mouse.prevX = mouse.x;
      mouse.prevY = mouse.y;

      for (const particle of particles) {
        if (mouse.active) {
          const dx = particle.x - mouse.x;
          const dy = particle.y - mouse.y;
          const distanceSquared = dx * dx + dy * dy;
          const radius = 180;
          if (distanceSquared < radius * radius) {
            const falloff = 1 - distanceSquared / (radius * radius);
            particle.vx += mouseVx * falloff * 0.04;
            particle.vy += mouseVy * falloff * 0.04;
          }
        }

        particle.vx += (Math.random() - 0.5) * 0.06;
        particle.vy += (Math.random() - 0.5) * 0.06;
        particle.vx += (particle.baseX - particle.x) * 0.0006;
        particle.vy += (particle.baseY - particle.y) * 0.0006;
        particle.vx *= 0.982;
        particle.vy *= 0.982;
        particle.x += particle.vx;
        particle.y += particle.vy;

        ctx.strokeStyle = `rgba(${primary.r}, ${primary.g}, ${primary.b}, ${
          particle.alpha * fade
        })`;
        ctx.lineWidth = 1.25;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(particle.x - particle.size, particle.y);
        ctx.lineTo(particle.x + particle.size, particle.y);
        ctx.stroke();
      }

      raf = requestAnimationFrame(draw);
    };

    const onMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      mouse.x = x;
      mouse.y = y;
      mouse.active = x >= 0 && x <= width && y >= 0 && y <= height;
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry?.isIntersecting ?? false;
      },
      { threshold: 0 }
    );

    resize();
    observer.observe(canvas);
    if (!reduce) raf = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    const onMouseOut = () => {
      mouse.active = false;
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseout", onMouseOut);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onMouseOut);
    };
  }, [count, mounted]);

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 transition-opacity duration-1000"
      style={{ opacity: active ? 1 : 0 }}
    >
      {mounted && <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />}
    </div>
  );
}
