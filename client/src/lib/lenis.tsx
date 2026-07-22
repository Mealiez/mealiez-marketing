"use client";

/**
 * lenis.tsx — Smooth scroll provider using Lenis
 * Wraps the entire app to enable silky 60fps scrolling.
 * Respects prefers-reduced-motion automatically.
 */

import { useEffect, useRef, createContext, useContext } from "react";
import type Lenis from "lenis";

const LenisContext = createContext<Lenis | null>(null);

export function useLenis() {
  return useContext(LenisContext);
}

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Bail out if user prefers reduced motion
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    // Dynamically import to avoid SSR issues
    import("lenis").then(({ default: LenisClass }) => {
      const lenis = new LenisClass({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        touchMultiplier: 2,
        infinite: false,
      });

      lenisRef.current = lenis;

      let raf: number;
      function raf_loop(time: number) {
        lenis.raf(time);
        raf = requestAnimationFrame(raf_loop);
      }
      raf = requestAnimationFrame(raf_loop);

      return () => {
        cancelAnimationFrame(raf);
        lenis.destroy();
      };
    });

    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
    };
  }, []);

  return (
    <LenisContext.Provider value={lenisRef.current}>
      {children}
    </LenisContext.Provider>
  );
}
