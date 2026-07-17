import Link from "next/link";

const footerSections = [
  {
    title: "Product",
    links: [
      ["Meal Booking", "/product/meal-booking"],
      ["Attendance", "/product/attendance"],
      ["Billing", "/product/billing"],
      ["Inventory", "/product/inventory"],
      ["Analytics", "/product/analytics"],
      ["Mobile App", "/product/mobile-app"],
    ],
  },
  {
    title: "Solutions",
    links: [
      ["Hostel Mess", "/solutions/hostel-mess"],
      ["College Canteens", "/solutions/college-canteen"],
      ["Industrial Canteens", "/solutions/industrial-canteen"],
      ["Corporate Cafeterias", "/solutions/corporate-cafeteria"],
      ["Cloud Kitchens", "/solutions/cloud-kitchen"],
      ["Subscription Mess", "/solutions/subscription-mess-business"],
    ],
  },
  {
    title: "Resources",
    links: [
      ["Blog", "/resources"],
      ["Guides", "/resources"],
      ["Reports", "/resources"],
      ["Case Studies", "/customers"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About", "/company"],
      ["Contact", "/company"],
      ["Book Demo", "/book-demo"],
    ],
  },
  {
    title: "Legal",
    links: [
      ["Privacy", "/security"],
      ["Terms", "/security"],
      ["Security", "/security"],
    ],
  },
  {
    title: "Socials",
    links: [
      ["LinkedIn", "#"],
      ["Instagram", "#"],
      ["YouTube", "#"],
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-[#FF6B35]/10 bg-slate-950 text-slate-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/5 via-transparent to-[#FF875C]/5" />
      <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-6">
        {footerSections.map((section) => (
          <div key={section.title}>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
              {section.title}
            </h3>
            <ul className="space-y-2 text-sm">
              {section.links.map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="transition hover:text-[#FF875C]">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="relative border-t border-white/10 px-6 py-5 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Mealiez. Built for modern food operations.
      </div>
    </footer>
  );
}
