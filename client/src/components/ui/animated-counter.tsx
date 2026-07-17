"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
};

export function AnimatedCounter({
  value, suffix = "", prefix = "", duration = 1.5, className = "" }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isClient, setIsClient] = useState(false);
  const count = useMotionValue(0);
  const springCount = useSpring(count, { stiffness: 100, damping: 30 });
  const display = useTransform(springCount, (latest) => Math.round(latest));

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isInView && isClient) {
      count.set(value);
    }
  }, [isInView, value, count, isClient]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span>{isClient ? display : value}</motion.span>
      {suffix}
    </span>
  );
}
