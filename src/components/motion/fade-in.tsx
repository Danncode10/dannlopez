"use client";

import { useRef, type ReactNode } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

type Direction = "up" | "down" | "left" | "right" | "none";

interface FadeInProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
}

const offsetStyle = (
  direction: Direction,
  distance: number,
  show: boolean
): React.CSSProperties => {
  if (show) return { transform: "translate3d(0,0,0)" };
  switch (direction) {
    case "up":
      return { transform: `translate3d(0, ${distance}px, 0)` };
    case "down":
      return { transform: `translate3d(0, ${-distance}px, 0)` };
    case "left":
      return { transform: `translate3d(${distance}px, 0, 0)` };
    case "right":
      return { transform: `translate3d(${-distance}px, 0, 0)` };
    default:
      return {};
  }
};

export function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  distance = 24,
  className,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const show = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      ref={ref}
      className={cn("will-change-transform motion-reduce:transition-none", className)}
      style={{
        opacity: show ? 1 : 0,
        transition: `opacity ${duration}s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform ${duration}s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
        ...offsetStyle(direction, distance, show),
      }}
    >
      {children}
    </div>
  );
}
