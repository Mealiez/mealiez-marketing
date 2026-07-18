/* Pure-CSS animated section — replaces framer-motion AnimatedSection.
   Uses IntersectionObserver + CSS transitions. Zero JS bundle cost. */
"use client";

import { ReactNode, useRef, useEffect } from "react";

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function AnimatedSection({ children, className = "", delay = 0 }: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current; if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = `opacity 0.6s ease ${delay}s, transform 0.6s cubic-bezier(.22,1,.36,1) ${delay}s`;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      el.style.opacity = "1";
      el.style.transform = "none";
      io.disconnect();
    }, { threshold: 0.1, rootMargin: "-80px" });
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return <div ref={ref} className={className}>{children}</div>;
}
