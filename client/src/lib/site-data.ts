export type Product = {
  slug: string;
  title: string;
  summary: string;
  painPoints: string[];
  features: string[];
  benefits: string[];
};

export type Solution = {
  slug: string;
  title: string;
  challenge: string;
  currentProcess: string;
  mealiezApproach: string[];
  roiImpact: string;
};

export const products: Product[] = [
  {
    slug: "meal-booking",
    title: "Meal Booking",
    summary: "Smart meal booking with attendance-aware auto planning.",
    painPoints: [
      "Last-minute meal plan changes",
      "Manual booking errors",
      "Uncertain demand forecasting",
    ],
    features: [
      "Pre-book and recurring meal schedules",
      "Cutoff windows and waitlists",
      "Role-wise approvals",
      "Real-time booking dashboards",
    ],
    benefits: [
      "Lower food wastage",
      "Higher student and staff satisfaction",
      "Smoother kitchen operations",
    ],
  },
  {
    slug: "attendance",
    title: "Attendance Management",
    summary: "Track who actually consumed meals, across shifts and locations.",
    painPoints: ["Proxy attendance", "Mismatch with billing", "No live meal counts"],
    features: [
      "QR and PIN-based attendance",
      "Shift and dining hall mapping",
      "Live attendance heatmaps",
      "Exception reporting",
    ],
    benefits: ["Better accountability", "Leakage control", "Data-backed planning"],
  },
  {
    slug: "billing",
    title: "Billing & Payments",
    summary: "Automate invoices, plans, due tracking, and digital collections.",
    painPoints: ["Manual invoicing", "Delayed collections", "Pricing complexity"],
    features: [
      "Flexible plan configuration",
      "Auto-generated invoices",
      "UPI and online payment support",
      "Collection and dues tracking",
    ],
    benefits: ["Improved cash flow", "Fewer disputes", "Less admin effort"],
  },
  {
    slug: "inventory",
    title: "Inventory Management",
    summary: "Control stock movement and procurement with demand intelligence.",
    painPoints: ["Stockouts", "Over-procurement", "No wastage visibility"],
    features: [
      "Ingredient-wise stock tracking",
      "Low-stock alerts",
      "Vendor and purchase logging",
      "Wastage trend analysis",
    ],
    benefits: ["Lower procurement cost", "Controlled wastage", "Better margins"],
  },
  {
    slug: "analytics",
    title: "Analytics & Reports",
    summary: "Unified operational intelligence for founders and operations teams.",
    painPoints: ["Scattered reports", "No benchmark data", "Slow decisions"],
    features: [
      "Executive KPI dashboards",
      "Meal trend and churn insights",
      "Revenue vs consumption reports",
      "Export-ready board reports",
    ],
    benefits: [
      "Faster decisions",
      "Clear operational transparency",
      "Enterprise-ready reporting",
    ],
  },
  {
    slug: "mobile-app",
    title: "Mobile App",
    summary: "A fast mobile experience for diners, admins, and field teams.",
    painPoints: ["Low digital adoption", "No real-time updates", "Poor UX"],
    features: [
      "Meal booking and attendance in one app",
      "Push reminders and plan updates",
      "Admin controls on the go",
      "Usage analytics",
    ],
    benefits: ["Higher engagement", "Operational agility", "Always-on experience"],
  },
];

export const solutions: Solution[] = [
  {
    slug: "hostel-mess",
    title: "Hostel Mess Management",
    challenge: "Student attendance shifts daily, making planning difficult.",
    currentProcess: "Manual registers and spreadsheets cause overcooking and leakage.",
    mealiezApproach: [
      "Attendance-backed meal forecasting",
      "Automated billing by plan",
      "Hostel-wise dashboard visibility",
    ],
    roiImpact: "Reduce wastage by up to 18% and improve collection cycles by 25%.",
  },
  {
    slug: "college-canteen",
    title: "College Canteens",
    challenge: "High rush-hour demand with low predictability.",
    currentProcess: "Token and cash-based ops lead to delays and poor reporting.",
    mealiezApproach: [
      "Pre-booking with queue smoothing",
      "Digital attendance and payments",
      "Faculty/student segmentation",
    ],
    roiImpact: "Serve peak demand faster while cutting queue friction and food waste.",
  },
  {
    slug: "industrial-canteen",
    title: "Industrial Canteens",
    challenge: "Shift-based meal counts and compliance needs are complex.",
    currentProcess: "Manual rosters and delayed reconciliation increase errors.",
    mealiezApproach: [
      "Shift-aware attendance automation",
      "Meal-wise cost controls",
      "Audit-friendly reports",
    ],
    roiImpact: "Improve cost predictability and reduce attendance mismatch losses.",
  },
  {
    slug: "corporate-cafeteria",
    title: "Corporate Cafeterias",
    challenge: "Hybrid work creates fluctuating meal demand.",
    currentProcess: "No reliable way to link attendance with food planning.",
    mealiezApproach: [
      "Employee pre-booking",
      "Department-level analytics",
      "Smart demand insights",
    ],
    roiImpact: "Increase cafeteria efficiency and reduce idle production.",
  },
  {
    slug: "cloud-kitchen",
    title: "Cloud Kitchens",
    challenge: "Multi-channel order and prep planning can become chaotic.",
    currentProcess: "Disconnected systems block accurate demand planning.",
    mealiezApproach: [
      "Centralized booking and production planning",
      "Inventory-led menu decisions",
      "Performance dashboards",
    ],
    roiImpact: "Support predictable throughput with lower ingredient loss.",
  },
  {
    slug: "subscription-mess-business",
    title: "Subscription Mess Businesses",
    challenge: "Managing recurring meal plans and churn is hard at scale.",
    currentProcess: "Manual renewals and collections reduce retention.",
    mealiezApproach: [
      "Recurring subscription billing",
      "Smart reminders and renewals",
      "Retention and churn analytics",
    ],
    roiImpact: "Increase renewals and lifetime value through automated workflows.",
  },
];

export const navMenus = {
  product: products,
  solutions: solutions,
};
