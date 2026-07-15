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
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-extrabold tracking-tight text-slate-900">
          Mealiez
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-700 lg:flex">
          <div className="group relative">
            <Link href="/product" className="transition hover:text-blue-600">
              Product
            </Link>
            <div className="absolute left-0 top-8 hidden w-72 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl group-hover:block">
              {navMenus.product.map((item) => (
                <Link
                  key={item.slug}
                  href={`/product/${item.slug}`}
                  className="block rounded-xl px-3 py-2 text-sm hover:bg-slate-50"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="group relative">
            <Link href="/solutions" className="transition hover:text-blue-600">
              Solutions
            </Link>
            <div className="absolute left-0 top-8 hidden w-72 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl group-hover:block">
              {navMenus.solutions.map((item) => (
                <Link
                  key={item.slug}
                  href={`/solutions/${item.slug}`}
                  className="block rounded-xl px-3 py-2 text-sm hover:bg-slate-50"
                >
                  {item.title}
                </Link>
              ))}
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
          className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-500"
        >
          Book Demo
        </Link>
      </div>
    </header>
  );
}
