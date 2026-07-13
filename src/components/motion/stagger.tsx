"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  useRef,
  type ReactElement,
  type ReactNode,
} from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface StaggerProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
}

export function Stagger({
  children,
  className,
  stagger = 0.08,
  delayChildren = 0,
}: StaggerProps) {
  const items = Children.toArray(children);
  return (
    <div className={className}>
      {items.map((child, i) => {
        if (!isValidElement(child)) return child;
        const element = child as ReactElement<StaggerItemProps>;
        return cloneElement(element, {
          ...element.props,
          _staggerDelay: delayChildren + i * stagger,
          key: child.key ?? i,
        });
      })}
    </div>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  distance?: number;
  _staggerDelay?: number;
}

export function StaggerItem({
  children,
  className,
  distance = 20,
  _staggerDelay = 0,
}: StaggerItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const show = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      ref={ref}
      className={cn("will-change-transform motion-reduce:transition-none", className)}
      style={{
        opacity: show ? 1 : 0,
        transform: show ? "translate3d(0,0,0)" : `translate3d(0, ${distance}px, 0)`,
        transition: `opacity 0.5s cubic-bezier(0.22,1,0.36,1) ${_staggerDelay}s, transform 0.5s cubic-bezier(0.22,1,0.36,1) ${_staggerDelay}s`,
      }}
    >
      {children}
    </div>
  );
}
