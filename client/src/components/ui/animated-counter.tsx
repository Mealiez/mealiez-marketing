/* Pure-CSS AnimatedCounter — replaces framer-motion version.
   Uses IntersectionObserver + requestAnimationFrame. Zero bundle cost. */
"use client";

import { useEffect, useRef } from "react";

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
};

export function AnimatedCounter({
  value, suffix = "", prefix = "", duration = 1.5, className = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current; if (!el) return;
    el.textContent = `${prefix}0${suffix}`;

    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return; io.disconnect();
      const start = performance.now();
      const ms = duration * 1000;
      function tick(now: number) {
        const t = Math.min((now - start) / ms, 1);
        // ease-out cubic
        const ease = 1 - Math.pow(1 - t, 3);
        const current = Math.round(ease * value);
        if (el) el.textContent = `${prefix}${current.toLocaleString()}${suffix}`;
        if (t < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }, { threshold: 0.5 });

    io.observe(el);
    return () => io.disconnect();
  }, [value, suffix, prefix, duration]);

  return <span ref={ref} className={className}>{prefix}{value.toLocaleString()}{suffix}</span>;
}
