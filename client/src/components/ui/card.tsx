/* Card component — CSS hover transition, no framer-motion */
import { ReactNode, CSSProperties } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
  style?: CSSProperties;
};

export function Card({ children, className = "", hoverable = true, style }: CardProps) {
  return (
    <div
      className={`surface-card ${className}`}
      style={{
        transition: hoverable ? "transform 0.3s cubic-bezier(.22,1,.36,1), box-shadow 0.3s" : undefined,
        ...style,
      }}
      onMouseEnter={(e) => {
        if (!hoverable) return;
        (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 32px 80px rgba(15,23,42,0.12)";
      }}
      onMouseLeave={(e) => {
        if (!hoverable) return;
        (e.currentTarget as HTMLElement).style.transform = "none";
        (e.currentTarget as HTMLElement).style.boxShadow = "";
      }}
    >
      {children}
    </div>
  );
}
