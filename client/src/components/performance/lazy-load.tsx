"use client";

import dynamic from "next/dynamic";
import { Suspense, lazy } from "react";

/**
 * Dynamically imported component wrapper with loading fallback
 */
export function dynamicImport<T extends React.ComponentType<any>>(
  importFn: () => Promise<{ default: T }>,
  fallback?: React.ReactNode
) {
  const Component = dynamic(importFn, {
    loading: () => fallback || <div style={{ padding: 20, textAlign: "center" }}>Loading...</div>,
  });
  return Component;
}

/**
 * Lazy component wrapper with Suspense
 */
export function LazyLoad({
  children,
  fallback,
}: {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}) {
  return (
    <Suspense
      fallback={
        fallback || (
          <div
            style={{
              width: "100%",
              minHeight: 200,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 24,
                height: 24,
                borderRadius: "50%",
                border: "2.5px solid rgba(255,107,53,0.2)",
                borderTopColor: "#FF6B35",
                animation: "spin-slow 0.8s linear infinite",
              }}
            />
          </div>
        )
      }
    >
      {children}
    </Suspense>
  );
}

/**
 * Prefetch utility — prefetches a URL when the user hovers over a link
 */
export function prefetchOnHover(url: string) {
  const link = document.createElement("link");
  link.rel = "prefetch";
  link.href = url;
  link.as = "document";
  document.head.appendChild(link);
}

/**
 * Preload critical resources
 */
export function preloadResource(href: string, as: "image" | "font" | "script" | "style" | "fetch") {
  const link = document.createElement("link");
  link.rel = "preload";
  link.href = href;
  link.as = as;
  document.head.appendChild(link);
}