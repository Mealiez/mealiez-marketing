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
