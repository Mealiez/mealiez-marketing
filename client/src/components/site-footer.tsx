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
];

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-5">
        {footerSections.map((section) => (
          <div key={section.title}>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
              {section.title}
            </h3>
            <ul className="space-y-2 text-sm">
              {section.links.map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="transition hover:text-blue-300">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Mealiez. Built for modern food operations.
      </div>
    </footer>
  );
}
