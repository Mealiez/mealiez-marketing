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

import { useEffect, useState, createContext, useContext } from "react";
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
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null);

  useEffect(() => {
    // Never run during SSR
    if (typeof window === "undefined") return;

    // Bail out if user prefers reduced motion
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let raf: number;
    let localLenis: Lenis | null = null;

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

        localLenis = lenis;
        setLenisInstance(lenis);

        function raf_loop(time: number) {
          lenis.raf(time);
          raf = requestAnimationFrame(raf_loop);
        }
        raf = requestAnimationFrame(raf_loop);
      });
    });

    return () => {
      cancelAnimationFrame(raf);
      if (localLenis) {
        localLenis.destroy();
      }
    };
  }, []);

  return (
    <LenisContext.Provider value={lenisInstance}>
      {children}
    </LenisContext.Provider>
  );
}
