import type { ReactNode } from "react";

// Auth pages have no site header or footer — full-screen layout
export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ minHeight: "100vh", width: "100%" }}>
      {children}
    </div>
  );
}
