"use client";

import React, { useEffect, useRef, useCallback } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
  delay: number;
}

interface FloatingParticlesProps {
  count?: number;
  colors?: string[];
  minSize?: number;
  maxSize?: number;
  speed?: number;
  className?: string;
  interactive?: boolean;
}

/**
 * Floating particle field background.
 * Creates a subtle, cinematic particle effect that responds to mouse movement when interactive.
 */
export function FloatingParticles({
  count = 20,
  colors = ["rgba(255,107,53,0.12)", "rgba(255,162,127,0.08)", "rgba(255,135,92,0.06)"],
  minSize = 3,
  maxSize = 8,
  speed = 0.3,
  className = "",
  interactive = true,
}: FloatingParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const frameRef = useRef<number>(0);

  const initParticles = useCallback(() => {
    const particles: Particle[] = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: minSize + Math.random() * (maxSize - minSize),
        speedX: (Math.random() - 0.5) * speed,
        speedY: (Math.random() - 0.5) * speed,
        opacity: 0.15 + Math.random() * 0.35,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 1000,
      });
    }
    particlesRef.current = particles;
  }, [count, minSize, maxSize, speed, colors]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let startTime = Date.now();
    let frameCount = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    initParticles();
    window.addEventListener("resize", resize);

    // Throttle: only paint every 2nd frame (30fps for particles, imperceptible)
    const animate = () => {
      frameCount++;
      if (frameCount % 2 !== 0) {
        animationId = requestAnimationFrame(animate);
        return;
      }

      const elapsed = (Date.now() - startTime) / 1000;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;

      particlesRef.current.forEach((p) => {
        p.x += p.speedX * 0.1;
        p.y += p.speedY * 0.1;

        const waveX = Math.sin(elapsed * 0.25 + p.delay) * 0.12;
        const waveY = Math.cos(elapsed * 0.3 + p.delay) * 0.12;
        const drawX = ((p.x + waveX + 100) % 100) - 0;
        const drawY = ((p.y + waveY + 100) % 100) - 0;

        ctx.beginPath();
        ctx.arc(
          (drawX / 100) * w,
          (drawY / 100) * h,
          p.size,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [initParticles, interactive]);

  // Mouse tracking
  useEffect(() => {
    if (!interactive) return;

    const handleMouse = (e: MouseEvent) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    window.addEventListener("mousemove", handleMouse);
    window.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, [interactive]);

  return (
    <canvas
      ref={canvasRef}
      className={`floating-particles-canvas ${className}`}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 1,
      }}
      aria-hidden="true"
    />
  );
}