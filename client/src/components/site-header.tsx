import Link from "next/link";
import { navMenus } from "@/lib/site-data";
import { Button } from "./ui/button";

const topLinks = [
  { href: "/why-mealiez", label: "Why Mealiez" },
  { href: "/pricing", label: "Pricing" },
  { href: "/customers", label: "Customers" },
  { href: "/resources", label: "Resources" },
  { href: "/company", label: "Company" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#FF6B35]/10 bg-white/80 backdrop-blur-2xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="text-2xl font-extrabold tracking-tight">
          <span className="text-gradient">Mealiez</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-700 lg:flex">
          <div className="group relative py-2">
            <Link href="/product" className="transition hover:text-[#FF6B35] group-hover:text-[#FF6B35]">
              Product
            </Link>
            <div className="invisible absolute left-0 top-10 w-[34rem] translate-y-2 rounded-3xl border border-[#FF6B35]/10 bg-white/98 p-4 opacity-0 shadow-2xl transition duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <div className="mb-3 rounded-2xl bg-gradient-to-r from-[#FF6B35]/10 to-[#FF875C]/10 p-3 text-xs text-slate-800">
                Explore automation modules that power bookings, attendance, billing, and growth intelligence.
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                {navMenus.product.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/product/${item.slug}`}
                    className="rounded-xl border border-transparent px-3 py-2 text-sm transition hover:border-[#FF6B35]/20 hover:bg-[#FF6B35]/5"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="group relative py-2">
            <Link href="/solutions" className="transition hover:text-[#FF6B35] group-hover:text-[#FF6B35]">
              Solutions
            </Link>
            <div className="invisible absolute left-0 top-10 w-[34rem] translate-y-2 rounded-3xl border border-[#FF6B35]/10 bg-white/98 p-4 opacity-0 shadow-2xl transition duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <div className="mb-3 rounded-2xl bg-gradient-to-r from-[#FF875C]/10 to-[#FFA27F]/10 p-3 text-xs text-slate-800">
                Pick your industry journey and see tailored workflows designed for scale and control.
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                {navMenus.solutions.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/solutions/${item.slug}`}
                    className="rounded-xl border border-transparent px-3 py-2 text-sm transition hover:border-[#FF875C]/20 hover:bg-[#FF875C]/5"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {topLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-[#FF6B35]">
              {link.label}
            </Link>
          ))}
        </nav>

        <Button href="/book-demo" className="pulse-glow">
          Book Demo
        </Button>
      </div>
    </header>
  );
}
