"use client";

import { useEffect, useRef, useState } from "react";

interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  onComplete?: () => void;
  highlight?: {
    start: number;
    end: number;
    delay?: number;
  };
}

export function Typewriter({
  text,
  speed = 45,
  delay = 0,
  className,
  onComplete,
  highlight,
}: TypewriterProps) {
  const [shown, setShown] = useState(0);
  const [highlightActive, setHighlightActive] = useState(false);
  const startedRef = useRef(false);
  const completedRef = useRef(false);
  const onCompleteRef = useRef(onComplete);
  const highlightRef = useRef(highlight);

  useEffect(() => {
    onCompleteRef.current = onComplete;
    highlightRef.current = highlight;
  });

  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      const raf = requestAnimationFrame(() => {
        setShown(text.length);
        setHighlightActive(true);
        completedRef.current = true;
        onCompleteRef.current?.();
      });
      return () => cancelAnimationFrame(raf);
    }

    const startAt = performance.now() + delay;
    let raf = 0;
    let highlightTimer: ReturnType<typeof setTimeout> | null = null;

    const tick = (now: number) => {
      const elapsed = now - startAt;
      if (elapsed < 0) {
        raf = requestAnimationFrame(tick);
        return;
      }

      const next = Math.min(text.length, Math.floor(elapsed / speed));
      setShown(next);

      if (next < text.length) {
        raf = requestAnimationFrame(tick);
        return;
      }

      if (!completedRef.current) {
        completedRef.current = true;
        onCompleteRef.current?.();
        const activeHighlight = highlightRef.current;
        if (activeHighlight) {
          highlightTimer = setTimeout(
            () => setHighlightActive(true),
            activeHighlight.delay ?? 250
          );
        }
      }
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      if (highlightTimer) clearTimeout(highlightTimer);
    };
  }, [delay, speed, text]);

  const done = shown >= text.length;

  const visibleText = () => {
    if (!highlight || !done) return <span aria-hidden>{text.slice(0, shown)}</span>;

    return (
      <span aria-hidden>
        {text.slice(0, highlight.start)}
        <span
          className="transition-[color,text-shadow] duration-700 ease-out"
          style={{
            color: highlightActive ? "var(--color-primary)" : "inherit",
            textShadow: highlightActive
              ? "0 0 32px color-mix(in oklab, var(--color-primary) 48%, transparent)"
              : "0 0 0 transparent",
          }}
        >
          {text.slice(highlight.start, highlight.end)}
        </span>
        {text.slice(highlight.end)}
      </span>
    );
  };

  return (
    <span className={className}>
      {visibleText()}
      <span
        aria-hidden
        className={done ? "typewriter-cursor-done" : "typewriter-cursor"}
        style={{ visibility: done ? "hidden" : "visible" }}
      />
      <span aria-hidden style={{ opacity: 0 }}>
        {text.slice(shown)}
      </span>
      <span className="sr-only">{text}</span>
    </span>
  );
}
