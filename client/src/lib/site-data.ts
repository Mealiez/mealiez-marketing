export type Product = {
  slug: string;
  title: string;
  icon: string;
  summary: string;
  painPoints: string[];
  features: string[];
  workflowSteps: { label: string; sub: string }[];
  benefits: string[];
  faqs: { q: string; a: string }[];
};

export type Solution = {
  slug: string;
  title: string;
  icon: string;
  tagline: string;
  challenge: string;
  currentProcess: string;
  mealiezApproach: string[];
  relevantFeatures: string[];
  roiImpact: string;
  faqItems: { q: string; a: string }[];
};

export const products: Product[] = [
  {
    slug: "meal-booking",
    title: "Meal Booking",
    icon: "calendar-check",
    summary: "Smart meal booking with attendance-aware auto planning.",
    painPoints: [
      "Last-minute cancellations cause over-cooking and wasted food budgets",
      "Manual booking records create errors and double-entries every day",
      "Kitchen teams have no reliable demand forecast to plan efficiently",
    ],
    features: [
      "Pre-book and recurring meal schedules",
      "Cutoff windows and automated waitlists",
      "Role-wise approvals and plan overrides",
      "Real-time booking dashboards for kitchen teams",
    ],
    workflowSteps: [
      { label: "Member Books", sub: "Via app or web" },
      { label: "System Confirms", sub: "Auto-validates plan" },
      { label: "Kitchen Plans", sub: "Demand-aware prep" },
      { label: "Meal Served", sub: "Tracked & logged" },
    ],
    benefits: [
      "Up to 30% lower food wastage through accurate demand forecasting",
      "Higher member satisfaction with self-service booking control",
      "Smoother kitchen operations with real-time prep counts",
    ],
    faqs: [
      { q: "Can members book meals in advance for the whole week?", a: "Yes. Members can pre-schedule meals up to 7 days ahead with daily cutoff windows configured by the admin." },
      { q: "What happens when a booked meal is cancelled?", a: "The system automatically updates kitchen prep counts in real time and can trigger waitlist promotions if enabled." },
      { q: "Can Meal Booking integrate with the Billing module?", a: "Yes. Every confirmed booking is tied directly to the member's billing ledger for precise, automated invoicing." },
    ],
  },
  {
    slug: "attendance",
    title: "Attendance Management",
    icon: "check-circle",
    summary: "Track who actually consumed meals, across shifts and locations.",
    painPoints: [
      "Proxy attendance allows unauthorised diners to consume at the mess's cost",
      "Attendance counts rarely match billing records, creating revenue leakage",
      "No live meal count visibility means kitchens prep based on guesswork",
    ],
    features: [
      "QR code and PIN-based meal-time attendance",
      "Shift and dining hall mapping per location",
      "Live attendance heatmaps for operators",
      "Automated exception and discrepancy reporting",
    ],
    workflowSteps: [
      { label: "Member Scans", sub: "QR or PIN entry" },
      { label: "System Validates", sub: "Plan & eligibility check" },
      { label: "Count Updated", sub: "Real-time dashboard" },
      { label: "Report Generated", sub: "Daily reconciliation" },
    ],
    benefits: [
      "Eliminate proxy dining and attendance fraud",
      "Plug revenue leakage with attendance-linked billing",
      "Data-backed planning with live consumption analytics",
    ],
    faqs: [
      { q: "What hardware is required for QR attendance?", a: "Any Android tablet or smartphone with our app works as a scanning terminal. No proprietary hardware required." },
      { q: "Can attendance be tracked across multiple dining halls?", a: "Yes. You can map multiple halls, shifts, and locations with separate dashboards for each." },
      { q: "How does this connect to billing?", a: "Every attendance event is linked to the member's account and automatically adjusts their billable meal count." },
    ],
  },
  {
    slug: "billing",
    title: "Billing & Payments",
    icon: "credit-card",
    summary: "Automate invoices, plans, due tracking, and digital collections.",
    painPoints: [
      "Manual invoicing takes hours each month and is riddled with entry errors",
      "Delayed collections create cash-flow gaps for mess operators",
      "Complex pricing plans (monthly, half-yearly, custom) are hard to manage manually",
    ],
    features: [
      "Flexible plan configuration (daily, monthly, custom cycles)",
      "Auto-generated invoices per billing cycle",
      "UPI, card, and online payment gateway support",
      "Dues tracking, reminders, and collection dashboards",
    ],
    workflowSteps: [
      { label: "Plan Assigned", sub: "Per member setup" },
      { label: "Invoice Generated", sub: "Auto at cycle end" },
      { label: "Payment Received", sub: "UPI / online / cash" },
      { label: "Ledger Updated", sub: "Zero manual entry" },
    ],
    benefits: [
      "Improved monthly cash flow with automated collection reminders",
      "Fewer billing disputes with transparent digital ledgers",
      "90% reduction in admin time spent on invoicing and dues tracking",
    ],
    faqs: [
      { q: "Does Mealiez support partial payments?", a: "Yes. Partial payment recording and outstanding balance tracking are both supported out of the box." },
      { q: "Can we set different meal plans for different member groups?", a: "Absolutely. You can create unlimited plan types and assign them to individuals or groups." },
      { q: "Is GST support included?", a: "Yes. Tax configurations are fully customisable per plan and auto-applied to generated invoices." },
    ],
  },
  {
    slug: "inventory",
    title: "Inventory Management",
    icon: "package",
    summary: "Control stock movement and procurement with demand intelligence.",
    painPoints: [
      "Stockouts during peak meal times disrupt service and harm reputation",
      "Over-procurement due to guesswork inflates ingredient costs significantly",
      "No visibility into daily wastage makes cost optimisation impossible",
    ],
    features: [
      "Ingredient-wise stock tracking with opening and closing balances",
      "Low-stock alerts and automatic reorder triggers",
      "Vendor and purchase order logging",
      "Wastage trend analysis by ingredient and time period",
    ],
    workflowSteps: [
      { label: "Stock Received", sub: "Vendor logged in" },
      { label: "Consumption Tracked", sub: "Per meal usage" },
      { label: "Wastage Recorded", sub: "Daily close entry" },
      { label: "Insights Generated", sub: "Trend dashboards" },
    ],
    benefits: [
      "Lower procurement cost by 15–20% through demand-aligned purchasing",
      "Eliminate surprise stockouts with proactive low-stock alerts",
      "Better margins through daily wastage visibility and control",
    ],
    faqs: [
      { q: "Can I track multiple stores or cold storage units?", a: "Yes. Multiple inventory locations can be configured and tracked independently from a single dashboard." },
      { q: "Does inventory link to menu planning?", a: "Yes. Ingredient requirements can be mapped to menu items so stock consumption is automatically calculated based on meals served." },
      { q: "Can vendors submit invoices through the system?", a: "Vendor purchase logs can be entered by your team. Direct vendor portal access is on the product roadmap." },
    ],
  },
  {
    slug: "analytics",
    title: "Analytics & Reports",
    icon: "bar-chart",
    summary: "Unified operational intelligence for founders and operations teams.",
    painPoints: [
      "Reports are scattered across spreadsheets, WhatsApp groups, and registers",
      "No benchmark data makes it impossible to know if performance is improving",
      "Slow, manual report preparation delays critical operational decisions",
    ],
    features: [
      "Executive KPI dashboards with daily, weekly, monthly views",
      "Meal trend, churn, and member retention insights",
      "Revenue vs. consumption variance reports",
      "Export-ready board-level reports (PDF/Excel)",
    ],
    workflowSteps: [
      { label: "Data Captured", sub: "Every module feeds in" },
      { label: "Unified & Clean", sub: "Auto-reconciled" },
      { label: "Dashboard Updated", sub: "Real-time KPIs" },
      { label: "Export & Share", sub: "PDF / Excel reports" },
    ],
    benefits: [
      "Faster operational decisions backed by live data",
      "Clear transparency across all food operations in one view",
      "Enterprise-ready reporting for board reviews and audits",
    ],
    faqs: [
      { q: "Can I customise which KPIs appear on my dashboard?", a: "Yes. Dashboard widgets are configurable per role — operators, managers, and owners each get a tailored view." },
      { q: "How far back does historical data go?", a: "From the moment you onboard. All historical data is retained for the full life of your account." },
      { q: "Can I schedule automatic report delivery to email?", a: "Yes. Scheduled email reports can be configured for daily, weekly, or monthly delivery to any recipient list." },
    ],
  },
  {
    slug: "mobile-app",
    title: "Mobile App",
    icon: "smartphone",
    summary: "A fast mobile experience for diners, admins, and field teams.",
    painPoints: [
      "Low digital adoption due to poor or non-existent mobile interfaces",
      "Members have no real-time updates on meals, schedules, or billing",
      "Admins have no way to monitor or act on issues when away from their desk",
    ],
    features: [
      "Member app: meal booking, attendance, and payment in one place",
      "Push reminders for meal windows, plan renewals, and due dates",
      "Admin controls — approve, pause, and manage members on the go",
      "Usage analytics to track engagement and drop-off",
    ],
    workflowSteps: [
      { label: "Install App", sub: "Android & iOS" },
      { label: "Member Onboards", sub: "Self-registration" },
      { label: "Daily Usage", sub: "Book, pay, track" },
      { label: "Admin Monitors", sub: "Live dashboard" },
    ],
    benefits: [
      "Higher member engagement and digital adoption rates",
      "Operational agility — manage your mess from anywhere",
      "Always-on experience keeps members informed and satisfied",
    ],
    faqs: [
      { q: "Is the app available on both Android and iOS?", a: "Yes. The Mealiez member and admin apps are available on both Android (Play Store) and iOS (App Store)." },
      { q: "Can members make payments through the app?", a: "Yes. Members can pay dues directly through the app via UPI, cards, or net banking." },
      { q: "What permissions does the admin app require?", a: "Camera (for QR scanning), notifications, and internet. No sensitive device permissions are required." },
    ],
  },
];

export const solutions: Solution[] = [
  {
    slug: "hostel-mess",
    title: "Hostel Mess Management",
    icon: "building",
    tagline: "Automate your hostel food operations from booking to billing.",
    challenge: "Student attendance shifts daily, making meal planning and cost control extremely difficult for hostel mess operators.",
    currentProcess: "Manual registers, paper-based meal opting, and spreadsheet billing create chronic overcooking, financial leakage, and warden headaches.",
    mealiezApproach: [
      "Attendance-backed meal forecasting eliminates overcooking",
      "Automated billing by plan reduces collection friction",
      "Hostel-wise dashboard gives wardens full visibility",
      "Student app for self-service booking and payment",
    ],
    relevantFeatures: ["Meal Booking", "Attendance Management", "Billing & Payments", "Analytics & Reports", "Mobile App"],
    roiImpact: "Reduce food wastage by up to 18% and improve collection cycles by 25% within the first 60 days.",
    faqItems: [
      { q: "Can Mealiez handle multiple hostel blocks under one account?", a: "Yes. Multi-block and multi-floor configurations are fully supported under a single operator dashboard." },
      { q: "What if students leave mid-month?", a: "Pro-rated billing on plan termination is handled automatically with configurable refund policies." },
      { q: "Can wardens get daily meal count reports on WhatsApp?", a: "Automated daily summary reports can be configured to deliver via email; WhatsApp integration is on the roadmap." },
    ],
  },
  {
    slug: "college-canteen",
    title: "College Canteens",
    icon: "graduation-cap",
    tagline: "Serve thousands of students efficiently with zero-queue digital ops.",
    challenge: "High rush-hour demand with completely unpredictable daily headcounts makes college canteens the hardest food service to manage manually.",
    currentProcess: "Token and cash-based operations cause long queues, revenue leakage, no demand insight, and chaotic kitchen preparation.",
    mealiezApproach: [
      "Pre-booking with queue smoothing reduces peak-hour congestion",
      "Digital attendance and payments eliminate cash handling",
      "Faculty and student plan segmentation for precision billing",
      "Live dashboards show real-time counter and prep demand",
    ],
    relevantFeatures: ["Meal Booking", "Attendance Management", "Billing & Payments", "Mobile App"],
    roiImpact: "Serve peak demand 40% faster while eliminating queue friction and reducing daily food waste by 20%.",
    faqItems: [
      { q: "Can the system handle subsidised faculty meal rates separately?", a: "Yes. Multiple pricing tiers, including subsidised rates for different user groups, are fully configurable." },
      { q: "Does the canteen need to be fully digital to start?", a: "No. You can run a hybrid model — digital for pre-booked members, manual counter for walk-ins — and scale up gradually." },
      { q: "Can we link the system to the college ERP?", a: "Yes. API integrations with common college ERP and attendance systems are available on request for Enterprise accounts." },
    ],
  },
  {
    slug: "industrial-canteen",
    title: "Industrial Canteens",
    icon: "factory",
    tagline: "Shift-accurate, audit-ready meal management for industrial scale.",
    challenge: "Shift-based meal counts, contractor workforce mixing, and compliance reporting requirements make industrial canteens uniquely complex to manage.",
    currentProcess: "Manual rosters, delayed reconciliation between HR and canteen systems, and paper-based audit trails increase errors and compliance risk.",
    mealiezApproach: [
      "Shift-aware attendance automation maps meals to work shifts",
      "Contractor and employee meal cost separation for accurate billing",
      "Audit-friendly digital reports replace paper trails",
      "Inventory controls tuned for high-volume batch cooking",
    ],
    relevantFeatures: ["Attendance Management", "Billing & Payments", "Inventory Management", "Analytics & Reports"],
    roiImpact: "Improve cost predictability and reduce attendance mismatch losses by up to 22% within the first quarter.",
    faqItems: [
      { q: "Can meals be tracked per contractor company separately?", a: "Yes. Contractor-wise meal segregation and cost allocation reporting are fully supported." },
      { q: "How does the system handle 3-shift operations?", a: "Shift windows are fully configurable. The system auto-assigns the correct meal type and cost rate based on check-in time." },
      { q: "Is the data exportable for government compliance reports?", a: "Yes. All attendance and consumption data can be exported in standard formats for statutory compliance requirements." },
    ],
  },
  {
    slug: "corporate-cafeteria",
    title: "Corporate Cafeterias",
    icon: "office-building",
    tagline: "Smart cafeteria management for the hybrid work era.",
    challenge: "Hybrid and remote work creates wildly fluctuating daily cafeteria demand, making meal prep planning and cost control nearly impossible.",
    currentProcess: "Without reliable attendance-linked demand data, corporate kitchens either over-produce and waste, or under-produce and disappoint employees.",
    mealiezApproach: [
      "Employee meal pre-booking links to attendance data for precise planning",
      "Department-level meal analytics for cost allocation and HR reporting",
      "Smart demand insights reduce idle production and procurement costs",
      "Integrated employee subsidy and wallet management",
    ],
    relevantFeatures: ["Meal Booking", "Analytics & Reports", "Billing & Payments", "Mobile App"],
    roiImpact: "Increase cafeteria efficiency by 35% and reduce idle food production costs by up to 28%.",
    faqItems: [
      { q: "Can different departments have different meal subsidy levels?", a: "Yes. Department-wise subsidy configurations and wallet top-ups are fully supported." },
      { q: "Does the system work for multi-city office footprints?", a: "Yes. Multi-location configurations under a single corporate account are available in the Enterprise plan." },
      { q: "Can we integrate with our existing HR / HRMS system?", a: "Yes. HRMS and access control integrations are supported via API for Enterprise customers." },
    ],
  },
  {
    slug: "cloud-kitchen",
    title: "Cloud Kitchens",
    icon: "cloud",
    tagline: "Centralised production planning for high-throughput cloud operations.",
    challenge: "Multi-channel order aggregation, subscription management, and production planning can become chaotic without a unified operations platform.",
    currentProcess: "Disconnected systems across aggregators, WhatsApp orders, and manual prep sheets block accurate demand planning and inflate ingredient costs.",
    mealiezApproach: [
      "Centralised booking and production planning for all channels",
      "Inventory-led menu decisions reduce ingredient waste",
      "Subscription billing and renewal automation for meal plan customers",
      "Performance dashboards track per-SKU profitability",
    ],
    relevantFeatures: ["Meal Booking", "Inventory Management", "Billing & Payments", "Analytics & Reports"],
    roiImpact: "Support predictable throughput with 25% lower ingredient loss and improved subscription renewal rates.",
    faqItems: [
      { q: "Can we manage multiple kitchen locations from one dashboard?", a: "Yes. Multi-kitchen management under one operator account is fully supported in the Enterprise plan." },
      { q: "Does Mealiez integrate with Swiggy or Zomato?", a: "Direct aggregator integrations are on the roadmap. Currently, subscription and direct-to-customer orders are the primary use case." },
      { q: "How does subscription billing work for meal plan customers?", a: "Recurring billing cycles are configured per plan. Automated reminders and payment links are sent before each renewal date." },
    ],
  },
  {
    slug: "subscription-mess-business",
    title: "Subscription Mess Businesses",
    icon: "refresh-cw",
    tagline: "Grow your tiffin or meal subscription business on autopilot.",
    challenge: "Managing hundreds of recurring meal plan customers, churn prevention, and manual collection cycles is unscalable without the right system.",
    currentProcess: "Manual renewals via WhatsApp, cash collection rounds, and Excel subscriber tracking reduce retention and burn operator time every month.",
    mealiezApproach: [
      "Recurring subscription billing with automated payment reminders",
      "Smart renewal alerts sent before plan expiry",
      "Churn tracking and retention analytics to identify at-risk customers",
      "Delivery route and customer management for tiffin operations",
    ],
    relevantFeatures: ["Billing & Payments", "Analytics & Reports", "Mobile App", "Meal Booking"],
    roiImpact: "Increase monthly renewal rates by 30% and eliminate manual collection cycles entirely.",
    faqItems: [
      { q: "Can customers pause their meal plan for holidays?", a: "Yes. Plan pause, skip, and resume functionality is configurable by the operator and can be self-served by the customer." },
      { q: "How are delivery routes managed?", a: "Delivery zone and route configuration with customer location tagging is available. Turn-by-turn routing integrations are on the roadmap." },
      { q: "Can we offer trial plans to new customers?", a: "Yes. Trial plan durations and conversion flows are fully configurable within the billing module." },
    ],
  },
];

export const navMenus = {
  product: products,
  solutions: solutions,
};