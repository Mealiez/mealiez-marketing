/* Section component — no framer-motion, plain semantic HTML */
import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function Section({ children, className = "", id }: SectionProps) {
  return (
    <section id={id} className={`section-shell ${className}`}>
      <div className="noise-overlay" />
      {children}
    </section>
  );
}
