import Link from "next/link";
import { navMenus } from "@/lib/site-data";

const topLinks = [
  { href: "/why-mealiez", label: "Why Mealiez" },
  { href: "/pricing", label: "Pricing" },
  { href: "/customers", label: "Customers" },
  { href: "/resources", label: "Resources" },
  { href: "/company", label: "Company" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="text-2xl font-extrabold tracking-tight">
          <span className="text-gradient">Mealiez</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-700 lg:flex">
          <div className="group relative py-2">
            <Link href="/product" className="transition hover:text-blue-600 group-hover:text-blue-600">
              Product
            </Link>
            <div className="invisible absolute left-0 top-10 w-[34rem] translate-y-2 rounded-3xl border border-slate-200 bg-white/95 p-4 opacity-0 shadow-2xl transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <div className="mb-3 rounded-2xl bg-blue-50 p-3 text-xs text-blue-900">
                Explore automation modules that power bookings, attendance, billing, and growth intelligence.
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                {navMenus.product.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/product/${item.slug}`}
                    className="rounded-xl border border-transparent px-3 py-2 text-sm transition hover:border-blue-100 hover:bg-blue-50"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="group relative py-2">
            <Link href="/solutions" className="transition hover:text-blue-600 group-hover:text-blue-600">
              Solutions
            </Link>
            <div className="invisible absolute left-0 top-10 w-[34rem] translate-y-2 rounded-3xl border border-slate-200 bg-white/95 p-4 opacity-0 shadow-2xl transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <div className="mb-3 rounded-2xl bg-cyan-50 p-3 text-xs text-cyan-900">
                Pick your industry journey and see tailored workflows designed for scale and control.
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                {navMenus.solutions.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/solutions/${item.slug}`}
                    className="rounded-xl border border-transparent px-3 py-2 text-sm transition hover:border-cyan-100 hover:bg-cyan-50"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {topLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-blue-600">
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/book-demo"
          className="pulse-glow rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-500"
        >
          Book Demo
        </Link>
      </div>
    </header>
  );
}
