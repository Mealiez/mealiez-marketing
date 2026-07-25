"use client";

/**
 * client-shell.tsx
 *
 * Wraps all ssr:false dynamic imports in a single Client Component.
 * Next.js 15+ forbids `dynamic({ ssr: false })` in Server Components.
 * By moving them here we keep layout.tsx as a pure Server Component.
 */

import dynamic from "next/dynamic";
import { MotionProvider } from "@/lib/motion-config";
import { LenisProvider } from "@/lib/lenis";
import LightRays from "@/components/ui/light-rays";

// ── ssr:false dynamic imports ─────────────────────────────────────
const PageLoader = dynamic(
  () => import("@/components/loaders/page-loader").then((m) => ({ default: m.PageLoader })),
  { ssr: false }
);

const MouseCursor = dynamic(
  () => import("@/components/ambient/mouse-cursor").then((m) => ({ default: m.MouseCursor })),
  { ssr: false }
);

const TopProgressBar = dynamic(
  () => import("@/components/loaders/progress-bar").then((m) => ({ default: m.TopProgressBar })),
  { ssr: false }
);

const ToastProvider = dynamic(
  () => import("@/components/ux/toast").then((m) => ({ default: m.ToastProvider })),
  { ssr: false, loading: () => null }
);

const PageTransition = dynamic(
  () => import("@/components/ux/page-transition").then((m) => ({ default: m.PageTransition })),
  { ssr: false, loading: () => null }
);

const ScrollToTop = dynamic(
  () => import("@/components/ux/scroll-to-top").then((m) => ({ default: m.ScrollToTop })),
  { ssr: false }
);

// ── Shell ─────────────────────────────────────────────────────────
export function ClientShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Non-critical ambient effects — deferred */}
      <PageLoader />
      <MouseCursor color="rgba(255,107,53,0.06)" size={350} blur={80} opacity={0.7} />
      <TopProgressBar />

      {/* Global LightRays overlay — warm orange glow visible on all pages */}
      <div style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 2,
        pointerEvents: "none",
        opacity: 0.55,
        mixBlendMode: "screen",
      }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#FF6B35"
          raysSpeed={0.6}
          lightSpread={0.6}
          rayLength={1.5}
          fadeDistance={0.6}
          saturation={0.7}
          followMouse={true}
          mouseInfluence={0.05}
        />
      </div>

      <MotionProvider>
        <ToastProvider>
          <LenisProvider>
            <main style={{ width: "100%", paddingTop: 0 }}>
              <PageTransition>
                {children}
              </PageTransition>
            </main>
          </LenisProvider>
        </ToastProvider>

        <ScrollToTop />
      </MotionProvider>
    </>
  );
}
