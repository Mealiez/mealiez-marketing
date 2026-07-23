"use client";

import { useState, useRef, useEffect } from "react";

/**
 * Progressive image loader with blur-up effect.
 * Shows a low-res blurred placeholder until the full image loads.
 */
export function ProgressiveImage({
  src,
  alt,
  width,
  height,
  style,
  className,
  priority = false,
}: {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  style?: React.CSSProperties;
  className?: string;
  priority?: boolean;
}) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current?.complete) {
      setLoaded(true);
    }
  }, []);

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        width: width || "100%",
        height: height || "auto",
        background: "#f0e8e0",
        borderRadius: "inherit",
        ...style,
      }}
      className={className}
    >
      {/* Blur placeholder */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(90deg, #f0e8e0 25%, #f5ede5 50%, #f0e8e0 75%)",
          backgroundSize: "200% 100%",
          animation: !loaded ? "shimmer 2s ease-in-out infinite" : "none",
          opacity: loaded ? 0 : 1,
          transition: "opacity 0.5s ease",
        }}
      />

      {/* Actual image */}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        onLoad={() => setLoaded(true)}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      />
    </div>
  );
}

/**
 * Blur-up image loader — shows a tiny blurred version first
 */
export function BlurUpImage({
  src,
  blurSrc,
  alt,
  width,
  height,
  style,
}: {
  src: string;
  blurSrc?: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  style?: React.CSSProperties;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        width: width || "100%",
        height: height || "auto",
        background: "#f0e8e0",
        borderRadius: "inherit",
        ...style,
      }}
    >
      {/* Blurred placeholder */}
      {blurSrc && (
        <img
          src={blurSrc}
          alt=""
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "blur(20px)",
            transform: "scale(1.1)",
            opacity: loaded ? 0 : 1,
            transition: "opacity 0.6s ease",
          }}
        />
      )}

      {/* High-res image */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      />
    </div>
  );
}

/**
 * Avatar skeleton placeholder
 */
export function AvatarSkeleton({ size = 40 }: { size?: number }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: "linear-gradient(90deg, #f0e8e0 25%, #f5ede5 50%, #f0e8e0 75%)",
        backgroundSize: "200% 100%",
        animation: "shimmer 2s ease-in-out infinite",
        flexShrink: 0,
      }}
    />
  );
}

/**
 * Lazy section wrapper — shows skeleton until visible
 */
export function LazySection({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {visible ? children : (
        <div style={{ padding: 40, display: "flex", justifyContent: "center" }}>
          <div style={{ width: 32, height: 32, borderRadius: "50%", border: "3px solid #FF6B35", borderTopColor: "transparent", animation: "spin-slow 0.8s linear infinite" }} />
        </div>
      )}
    </div>
  );
}