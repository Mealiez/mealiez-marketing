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

const ClickSpark = dynamic(() => import("@/components/ui/ClickSpark"), { ssr: false });

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
    <ClickSpark
      sparkColor="#FF6B35"
      sparkSize={12}
      sparkRadius={20}
      sparkCount={8}
      duration={450}
      easing="ease-out"
      extraScale={1.2}
    >
      {/* Non-critical ambient effects — deferred */}
      <PageLoader />
      <MouseCursor color="rgba(255,107,53,0.05)" size={260} blur={60} opacity={0.6} />
      <TopProgressBar />

      {/* Global LightRays overlay — warm orange glow visible on all pages */}
      <div style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 2,
        pointerEvents: "none",
        opacity: 0.40,
        mixBlendMode: "screen",
      }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#FF6B35"
          raysSpeed={0.3}
          lightSpread={0.5}
          rayLength={1.2}
          fadeDistance={0.5}
          saturation={0.6}
          followMouse={false}
          mouseInfluence={0}
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
    </ClickSpark>
  );
}
