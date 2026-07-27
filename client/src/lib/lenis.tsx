"use client";

/**
 * lenis.tsx — Smooth scroll provider (optimised)
 *
 * Optimisations:
 *  - Uses requestIdleCallback to init Lenis after first paint
 *    (doesn't block TTI or FCP)
 *  - Removed @studio-freight/lenis import (duplicate package)
 *  - raf_loop cancels correctly on unmount
 *  - Respects prefers-reduced-motion
 */

import { useEffect, useRef, createContext, useContext } from "react";
import type Lenis from "lenis";

const LenisContext = createContext<Lenis | null>(null);

export function useLenis() {
  return useContext(LenisContext);
}

// requestIdleCallback polyfill for Safari
const scheduleIdle = (cb: () => void) => {
  if (typeof requestIdleCallback !== "undefined") {
    requestIdleCallback(cb, { timeout: 2000 });
  } else {
    setTimeout(cb, 200);
  }
};

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Never run during SSR
    if (typeof window === "undefined") return;

    // Bail out if user prefers reduced motion
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let raf: number;

    // Delay Lenis init until browser is idle — after first paint
    scheduleIdle(() => {
      import("lenis").then(({ default: LenisClass }) => {
        const lenis = new LenisClass({
          duration: 0.9,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          touchMultiplier: 2.5,
          syncTouch: true,
          infinite: false,
        });

        lenisRef.current = lenis;

        function raf_loop(time: number) {
          lenis.raf(time);
          raf = requestAnimationFrame(raf_loop);
        }
        raf = requestAnimationFrame(raf_loop);
      });
    });

    return () => {
      cancelAnimationFrame(raf);
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
