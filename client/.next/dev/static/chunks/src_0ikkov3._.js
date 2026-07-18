(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/site-data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "navMenus",
    ()=>navMenus,
    "products",
    ()=>products,
    "solutions",
    ()=>solutions
]);
const products = [
    {
        slug: "meal-booking",
        title: "Meal Booking",
        icon: "🍽️",
        summary: "Smart meal booking with attendance-aware auto planning.",
        painPoints: [
            "Last-minute cancellations cause over-cooking and wasted food budgets",
            "Manual booking records create errors and double-entries every day",
            "Kitchen teams have no reliable demand forecast to plan efficiently"
        ],
        features: [
            "Pre-book and recurring meal schedules",
            "Cutoff windows and automated waitlists",
            "Role-wise approvals and plan overrides",
            "Real-time booking dashboards for kitchen teams"
        ],
        workflowSteps: [
            {
                label: "Member Books",
                sub: "Via app or web"
            },
            {
                label: "System Confirms",
                sub: "Auto-validates plan"
            },
            {
                label: "Kitchen Plans",
                sub: "Demand-aware prep"
            },
            {
                label: "Meal Served",
                sub: "Tracked & logged"
            }
        ],
        benefits: [
            "Up to 30% lower food wastage through accurate demand forecasting",
            "Higher member satisfaction with self-service booking control",
            "Smoother kitchen operations with real-time prep counts"
        ],
        faqs: [
            {
                q: "Can members book meals in advance for the whole week?",
                a: "Yes. Members can pre-schedule meals up to 7 days ahead with daily cutoff windows configured by the admin."
            },
            {
                q: "What happens when a booked meal is cancelled?",
                a: "The system automatically updates kitchen prep counts in real time and can trigger waitlist promotions if enabled."
            },
            {
                q: "Can Meal Booking integrate with the Billing module?",
                a: "Yes. Every confirmed booking is tied directly to the member's billing ledger for precise, automated invoicing."
            }
        ]
    },
    {
        slug: "attendance",
        title: "Attendance Management",
        icon: "✅",
        summary: "Track who actually consumed meals, across shifts and locations.",
        painPoints: [
            "Proxy attendance allows unauthorised diners to consume at the mess's cost",
            "Attendance counts rarely match billing records, creating revenue leakage",
            "No live meal count visibility means kitchens prep based on guesswork"
        ],
        features: [
            "QR code and PIN-based meal-time attendance",
            "Shift and dining hall mapping per location",
            "Live attendance heatmaps for operators",
            "Automated exception and discrepancy reporting"
        ],
        workflowSteps: [
            {
                label: "Member Scans",
                sub: "QR or PIN entry"
            },
            {
                label: "System Validates",
                sub: "Plan & eligibility check"
            },
            {
                label: "Count Updated",
                sub: "Real-time dashboard"
            },
            {
                label: "Report Generated",
                sub: "Daily reconciliation"
            }
        ],
        benefits: [
            "Eliminate proxy dining and attendance fraud",
            "Plug revenue leakage with attendance-linked billing",
            "Data-backed planning with live consumption analytics"
        ],
        faqs: [
            {
                q: "What hardware is required for QR attendance?",
                a: "Any Android tablet or smartphone with our app works as a scanning terminal. No proprietary hardware required."
            },
            {
                q: "Can attendance be tracked across multiple dining halls?",
                a: "Yes. You can map multiple halls, shifts, and locations with separate dashboards for each."
            },
            {
                q: "How does this connect to billing?",
                a: "Every attendance event is linked to the member's account and automatically adjusts their billable meal count."
            }
        ]
    },
    {
        slug: "billing",
        title: "Billing & Payments",
        icon: "💳",
        summary: "Automate invoices, plans, due tracking, and digital collections.",
        painPoints: [
            "Manual invoicing takes hours each month and is riddled with entry errors",
            "Delayed collections create cash-flow gaps for mess operators",
            "Complex pricing plans (monthly, half-yearly, custom) are hard to manage manually"
        ],
        features: [
            "Flexible plan configuration (daily, monthly, custom cycles)",
            "Auto-generated invoices per billing cycle",
            "UPI, card, and online payment gateway support",
            "Dues tracking, reminders, and collection dashboards"
        ],
        workflowSteps: [
            {
                label: "Plan Assigned",
                sub: "Per member setup"
            },
            {
                label: "Invoice Generated",
                sub: "Auto at cycle end"
            },
            {
                label: "Payment Received",
                sub: "UPI / online / cash"
            },
            {
                label: "Ledger Updated",
                sub: "Zero manual entry"
            }
        ],
        benefits: [
            "Improved monthly cash flow with automated collection reminders",
            "Fewer billing disputes with transparent digital ledgers",
            "90% reduction in admin time spent on invoicing and dues tracking"
        ],
        faqs: [
            {
                q: "Does Mealiez support partial payments?",
                a: "Yes. Partial payment recording and outstanding balance tracking are both supported out of the box."
            },
            {
                q: "Can we set different meal plans for different member groups?",
                a: "Absolutely. You can create unlimited plan types and assign them to individuals or groups."
            },
            {
                q: "Is GST support included?",
                a: "Yes. Tax configurations are fully customisable per plan and auto-applied to generated invoices."
            }
        ]
    },
    {
        slug: "inventory",
        title: "Inventory Management",
        icon: "📦",
        summary: "Control stock movement and procurement with demand intelligence.",
        painPoints: [
            "Stockouts during peak meal times disrupt service and harm reputation",
            "Over-procurement due to guesswork inflates ingredient costs significantly",
            "No visibility into daily wastage makes cost optimisation impossible"
        ],
        features: [
            "Ingredient-wise stock tracking with opening and closing balances",
            "Low-stock alerts and automatic reorder triggers",
            "Vendor and purchase order logging",
            "Wastage trend analysis by ingredient and time period"
        ],
        workflowSteps: [
            {
                label: "Stock Received",
                sub: "Vendor logged in"
            },
            {
                label: "Consumption Tracked",
                sub: "Per meal usage"
            },
            {
                label: "Wastage Recorded",
                sub: "Daily close entry"
            },
            {
                label: "Insights Generated",
                sub: "Trend dashboards"
            }
        ],
        benefits: [
            "Lower procurement cost by 15–20% through demand-aligned purchasing",
            "Eliminate surprise stockouts with proactive low-stock alerts",
            "Better margins through daily wastage visibility and control"
        ],
        faqs: [
            {
                q: "Can I track multiple stores or cold storage units?",
                a: "Yes. Multiple inventory locations can be configured and tracked independently from a single dashboard."
            },
            {
                q: "Does inventory link to menu planning?",
                a: "Yes. Ingredient requirements can be mapped to menu items so stock consumption is automatically calculated based on meals served."
            },
            {
                q: "Can vendors submit invoices through the system?",
                a: "Vendor purchase logs can be entered by your team. Direct vendor portal access is on the product roadmap."
            }
        ]
    },
    {
        slug: "analytics",
        title: "Analytics & Reports",
        icon: "📊",
        summary: "Unified operational intelligence for founders and operations teams.",
        painPoints: [
            "Reports are scattered across spreadsheets, WhatsApp groups, and registers",
            "No benchmark data makes it impossible to know if performance is improving",
            "Slow, manual report preparation delays critical operational decisions"
        ],
        features: [
            "Executive KPI dashboards with daily, weekly, monthly views",
            "Meal trend, churn, and member retention insights",
            "Revenue vs. consumption variance reports",
            "Export-ready board-level reports (PDF/Excel)"
        ],
        workflowSteps: [
            {
                label: "Data Captured",
                sub: "Every module feeds in"
            },
            {
                label: "Unified & Clean",
                sub: "Auto-reconciled"
            },
            {
                label: "Dashboard Updated",
                sub: "Real-time KPIs"
            },
            {
                label: "Export & Share",
                sub: "PDF / Excel reports"
            }
        ],
        benefits: [
            "Faster operational decisions backed by live data",
            "Clear transparency across all food operations in one view",
            "Enterprise-ready reporting for board reviews and audits"
        ],
        faqs: [
            {
                q: "Can I customise which KPIs appear on my dashboard?",
                a: "Yes. Dashboard widgets are configurable per role — operators, managers, and owners each get a tailored view."
            },
            {
                q: "How far back does historical data go?",
                a: "From the moment you onboard. All historical data is retained for the full life of your account."
            },
            {
                q: "Can I schedule automatic report delivery to email?",
                a: "Yes. Scheduled email reports can be configured for daily, weekly, or monthly delivery to any recipient list."
            }
        ]
    },
    {
        slug: "mobile-app",
        title: "Mobile App",
        icon: "📱",
        summary: "A fast mobile experience for diners, admins, and field teams.",
        painPoints: [
            "Low digital adoption due to poor or non-existent mobile interfaces",
            "Members have no real-time updates on meals, schedules, or billing",
            "Admins have no way to monitor or act on issues when away from their desk"
        ],
        features: [
            "Member app: meal booking, attendance, and payment in one place",
            "Push reminders for meal windows, plan renewals, and due dates",
            "Admin controls — approve, pause, and manage members on the go",
            "Usage analytics to track engagement and drop-off"
        ],
        workflowSteps: [
            {
                label: "Install App",
                sub: "Android & iOS"
            },
            {
                label: "Member Onboards",
                sub: "Self-registration"
            },
            {
                label: "Daily Usage",
                sub: "Book, pay, track"
            },
            {
                label: "Admin Monitors",
                sub: "Live dashboard"
            }
        ],
        benefits: [
            "Higher member engagement and digital adoption rates",
            "Operational agility — manage your mess from anywhere",
            "Always-on experience keeps members informed and satisfied"
        ],
        faqs: [
            {
                q: "Is the app available on both Android and iOS?",
                a: "Yes. The Mealiez member and admin apps are available on both Android (Play Store) and iOS (App Store)."
            },
            {
                q: "Can members make payments through the app?",
                a: "Yes. Members can pay dues directly through the app via UPI, cards, or net banking."
            },
            {
                q: "What permissions does the admin app require?",
                a: "Camera (for QR scanning), notifications, and internet. No sensitive device permissions are required."
            }
        ]
    }
];
const solutions = [
    {
        slug: "hostel-mess",
        title: "Hostel Mess Management",
        icon: "🏠",
        tagline: "Automate your hostel food operations from booking to billing.",
        challenge: "Student attendance shifts daily, making meal planning and cost control extremely difficult for hostel mess operators.",
        currentProcess: "Manual registers, paper-based meal opting, and spreadsheet billing create chronic overcooking, financial leakage, and warden headaches.",
        mealiezApproach: [
            "Attendance-backed meal forecasting eliminates overcooking",
            "Automated billing by plan reduces collection friction",
            "Hostel-wise dashboard gives wardens full visibility",
            "Student app for self-service booking and payment"
        ],
        relevantFeatures: [
            "Meal Booking",
            "Attendance Management",
            "Billing & Payments",
            "Analytics & Reports",
            "Mobile App"
        ],
        roiImpact: "Reduce food wastage by up to 18% and improve collection cycles by 25% within the first 60 days.",
        faqItems: [
            {
                q: "Can Mealiez handle multiple hostel blocks under one account?",
                a: "Yes. Multi-block and multi-floor configurations are fully supported under a single operator dashboard."
            },
            {
                q: "What if students leave mid-month?",
                a: "Pro-rated billing on plan termination is handled automatically with configurable refund policies."
            },
            {
                q: "Can wardens get daily meal count reports on WhatsApp?",
                a: "Automated daily summary reports can be configured to deliver via email; WhatsApp integration is on the roadmap."
            }
        ]
    },
    {
        slug: "college-canteen",
        title: "College Canteens",
        icon: "🎓",
        tagline: "Serve thousands of students efficiently with zero-queue digital ops.",
        challenge: "High rush-hour demand with completely unpredictable daily headcounts makes college canteens the hardest food service to manage manually.",
        currentProcess: "Token and cash-based operations cause long queues, revenue leakage, no demand insight, and chaotic kitchen preparation.",
        mealiezApproach: [
            "Pre-booking with queue smoothing reduces peak-hour congestion",
            "Digital attendance and payments eliminate cash handling",
            "Faculty and student plan segmentation for precision billing",
            "Live dashboards show real-time counter and prep demand"
        ],
        relevantFeatures: [
            "Meal Booking",
            "Attendance Management",
            "Billing & Payments",
            "Mobile App"
        ],
        roiImpact: "Serve peak demand 40% faster while eliminating queue friction and reducing daily food waste by 20%.",
        faqItems: [
            {
                q: "Can the system handle subsidised faculty meal rates separately?",
                a: "Yes. Multiple pricing tiers, including subsidised rates for different user groups, are fully configurable."
            },
            {
                q: "Does the canteen need to be fully digital to start?",
                a: "No. You can run a hybrid model — digital for pre-booked members, manual counter for walk-ins — and scale up gradually."
            },
            {
                q: "Can we link the system to the college ERP?",
                a: "Yes. API integrations with common college ERP and attendance systems are available on request for Enterprise accounts."
            }
        ]
    },
    {
        slug: "industrial-canteen",
        title: "Industrial Canteens",
        icon: "🏭",
        tagline: "Shift-accurate, audit-ready meal management for industrial scale.",
        challenge: "Shift-based meal counts, contractor workforce mixing, and compliance reporting requirements make industrial canteens uniquely complex to manage.",
        currentProcess: "Manual rosters, delayed reconciliation between HR and canteen systems, and paper-based audit trails increase errors and compliance risk.",
        mealiezApproach: [
            "Shift-aware attendance automation maps meals to work shifts",
            "Contractor and employee meal cost separation for accurate billing",
            "Audit-friendly digital reports replace paper trails",
            "Inventory controls tuned for high-volume batch cooking"
        ],
        relevantFeatures: [
            "Attendance Management",
            "Billing & Payments",
            "Inventory Management",
            "Analytics & Reports"
        ],
        roiImpact: "Improve cost predictability and reduce attendance mismatch losses by up to 22% within the first quarter.",
        faqItems: [
            {
                q: "Can meals be tracked per contractor company separately?",
                a: "Yes. Contractor-wise meal segregation and cost allocation reporting are fully supported."
            },
            {
                q: "How does the system handle 3-shift operations?",
                a: "Shift windows are fully configurable. The system auto-assigns the correct meal type and cost rate based on check-in time."
            },
            {
                q: "Is the data exportable for government compliance reports?",
                a: "Yes. All attendance and consumption data can be exported in standard formats for statutory compliance requirements."
            }
        ]
    },
    {
        slug: "corporate-cafeteria",
        title: "Corporate Cafeterias",
        icon: "🏢",
        tagline: "Smart cafeteria management for the hybrid work era.",
        challenge: "Hybrid and remote work creates wildly fluctuating daily cafeteria demand, making meal prep planning and cost control nearly impossible.",
        currentProcess: "Without reliable attendance-linked demand data, corporate kitchens either over-produce and waste, or under-produce and disappoint employees.",
        mealiezApproach: [
            "Employee meal pre-booking links to attendance data for precise planning",
            "Department-level meal analytics for cost allocation and HR reporting",
            "Smart demand insights reduce idle production and procurement costs",
            "Integrated employee subsidy and wallet management"
        ],
        relevantFeatures: [
            "Meal Booking",
            "Analytics & Reports",
            "Billing & Payments",
            "Mobile App"
        ],
        roiImpact: "Increase cafeteria efficiency by 35% and reduce idle food production costs by up to 28%.",
        faqItems: [
            {
                q: "Can different departments have different meal subsidy levels?",
                a: "Yes. Department-wise subsidy configurations and wallet top-ups are fully supported."
            },
            {
                q: "Does the system work for multi-city office footprints?",
                a: "Yes. Multi-location configurations under a single corporate account are available in the Enterprise plan."
            },
            {
                q: "Can we integrate with our existing HR / HRMS system?",
                a: "Yes. HRMS and access control integrations are supported via API for Enterprise customers."
            }
        ]
    },
    {
        slug: "cloud-kitchen",
        title: "Cloud Kitchens",
        icon: "☁️",
        tagline: "Centralised production planning for high-throughput cloud operations.",
        challenge: "Multi-channel order aggregation, subscription management, and production planning can become chaotic without a unified operations platform.",
        currentProcess: "Disconnected systems across aggregators, WhatsApp orders, and manual prep sheets block accurate demand planning and inflate ingredient costs.",
        mealiezApproach: [
            "Centralised booking and production planning for all channels",
            "Inventory-led menu decisions reduce ingredient waste",
            "Subscription billing and renewal automation for meal plan customers",
            "Performance dashboards track per-SKU profitability"
        ],
        relevantFeatures: [
            "Meal Booking",
            "Inventory Management",
            "Billing & Payments",
            "Analytics & Reports"
        ],
        roiImpact: "Support predictable throughput with 25% lower ingredient loss and improved subscription renewal rates.",
        faqItems: [
            {
                q: "Can we manage multiple kitchen locations from one dashboard?",
                a: "Yes. Multi-kitchen management under one operator account is fully supported in the Enterprise plan."
            },
            {
                q: "Does Mealiez integrate with Swiggy or Zomato?",
                a: "Direct aggregator integrations are on the roadmap. Currently, subscription and direct-to-customer orders are the primary use case."
            },
            {
                q: "How does subscription billing work for meal plan customers?",
                a: "Recurring billing cycles are configured per plan. Automated reminders and payment links are sent before each renewal date."
            }
        ]
    },
    {
        slug: "subscription-mess-business",
        title: "Subscription Mess Businesses",
        icon: "🔁",
        tagline: "Grow your tiffin or meal subscription business on autopilot.",
        challenge: "Managing hundreds of recurring meal plan customers, churn prevention, and manual collection cycles is unscalable without the right system.",
        currentProcess: "Manual renewals via WhatsApp, cash collection rounds, and Excel subscriber tracking reduce retention and burn operator time every month.",
        mealiezApproach: [
            "Recurring subscription billing with automated payment reminders",
            "Smart renewal alerts sent before plan expiry",
            "Churn tracking and retention analytics to identify at-risk customers",
            "Delivery route and customer management for tiffin operations"
        ],
        relevantFeatures: [
            "Billing & Payments",
            "Analytics & Reports",
            "Mobile App",
            "Meal Booking"
        ],
        roiImpact: "Increase monthly renewal rates by 30% and eliminate manual collection cycles entirely.",
        faqItems: [
            {
                q: "Can customers pause their meal plan for holidays?",
                a: "Yes. Plan pause, skip, and resume functionality is configurable by the operator and can be self-served by the customer."
            },
            {
                q: "How are delivery routes managed?",
                a: "Delivery zone and route configuration with customer location tagging is available. Turn-by-turn routing integrations are on the roadmap."
            },
            {
                q: "Can we offer trial plans to new customers?",
                a: "Yes. Trial plan durations and conversion flows are fully configurable within the billing module."
            }
        ]
    }
];
const navMenus = {
    product: products,
    solutions: solutions
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/site-header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SiteHeader",
    ()=>SiteHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/site-data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const topLinks = [
    {
        href: "/why-mealiez",
        label: "Why Mealiez"
    },
    {
        href: "/pricing",
        label: "Pricing"
    },
    {
        href: "/customers",
        label: "Customers"
    },
    {
        href: "/resources",
        label: "Resources"
    },
    {
        href: "/company",
        label: "Company"
    }
];
function SiteHeader() {
    _s();
    const path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const isActive = (href)=>path === href || path.startsWith(href + "/");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        style: {
            position: "sticky",
            top: 0,
            zIndex: 50,
            background: "rgba(255,252,249,0.92)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(255,107,53,0.08)",
            boxShadow: "0 1px 24px rgba(0,0,0,0.04)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        .nav-link {
          font-size: 13.5px; font-weight: 500; color: #333;
          text-decoration: none; padding: 8px 0;
          transition: color 0.15s; position: relative; white-space: nowrap;
        }
        .nav-link:hover { color: #FF6B35; }
        .nav-link.active { color: #FF6B35; font-weight: 600; }
        .nav-link.active::after {
          content: ''; position: absolute; bottom: -2px; left: 0; right: 0;
          height: 2px; background: #FF6B35; border-radius: 1px;
        }
        .nav-group { position: relative; }
        .nav-group .nav-dropdown {
          position: absolute; top: calc(100% + 10px); left: -16px;
          width: 480px; background: rgba(255,252,249,0.98);
          backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
          border-radius: 16px; border: 1px solid rgba(255,107,53,0.1);
          box-shadow: 0 16px 48px rgba(0,0,0,0.12);
          padding: 16px; z-index: 100;
          opacity: 0; visibility: hidden;
          transform: translateY(10px);
          transition: all 0.22s cubic-bezier(.22,1,.36,1);
          pointer-events: none;
        }
        .nav-group:hover .nav-dropdown {
          opacity: 1; visibility: visible;
          transform: translateY(0);
          pointer-events: auto;
        }
        .dropdown-item {
          font-size: 13px; color: #444; text-decoration: none;
          display: block; padding: 8px 12px; border-radius: 8px;
          transition: background 0.15s, color 0.15s;
        }
        .dropdown-item span.di-icon { font-size: 16px; margin-right: 8px; }
        .dropdown-item:hover { background: #fff3ee; color: #FF6B35; }
        .dropdown-item.active-item { color: #FF6B35; background: rgba(255,107,53,0.05); }
        .header-book-btn {
          background: linear-gradient(135deg, #FF6B35, #FF875C); color: #fff; border-radius: 8px;
          padding: 9px 20px; font-weight: 600; font-size: 13.5px;
          text-decoration: none; display: inline-block;
          transition: opacity 0.15s, box-shadow 0.15s, transform 0.15s;
          box-shadow: 0 4px 14px rgba(255,107,53,0.28);
        }
        .header-book-btn:hover {
          opacity: 0.9;
          box-shadow: 0 6px 22px rgba(255,107,53,0.38);
          transform: translateY(-1px);
        }
        .header-login {
          font-size: 13.5px; font-weight: 500; color: #333;
          text-decoration: none; padding: 8px 12px; border-radius: 8px;
          transition: color 0.15s, background 0.15s;
        }
        .header-login:hover { color: #FF6B35; background: #fff3ee; }
      `
            }, void 0, false, {
                fileName: "[project]/src/components/site-header.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 1200,
                    margin: "0 auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 32px",
                    height: 64
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        style: {
                            textDecoration: "none",
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                            flexShrink: 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: 32,
                                    height: 32,
                                    background: "linear-gradient(135deg, #FF6B35, #FF875C)",
                                    borderRadius: 9,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    boxShadow: "0 4px 12px rgba(255,107,53,0.3)"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "17",
                                    height: "17",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "#fff",
                                    strokeWidth: "2.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M3 11l19-9-9 19-2-8-8-2z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site-header.tsx",
                                        lineNumber: 100,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site-header.tsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/site-header.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: 20,
                                    fontWeight: 800,
                                    color: "#FF6B35",
                                    letterSpacing: "-0.02em"
                                },
                                children: "Mealiez"
                            }, void 0, false, {
                                fileName: "[project]/src/components/site-header.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/site-header.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: 22,
                            flex: 1,
                            justifyContent: "center"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "nav-group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/product",
                                        className: `nav-link${isActive("/product") ? " active" : ""}`,
                                        children: "Product"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site-header.tsx",
                                        lineNumber: 110,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "nav-dropdown",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: "linear-gradient(135deg,#fff3ee,#ffe8d6)",
                                                    borderRadius: 10,
                                                    padding: "10px 14px",
                                                    fontSize: 12,
                                                    color: "#555",
                                                    marginBottom: 12
                                                },
                                                children: "Automation modules for bookings, attendance, billing, inventory and growth."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/site-header.tsx",
                                                lineNumber: 112,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "grid",
                                                    gridTemplateColumns: "1fr 1fr",
                                                    gap: 4
                                                },
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navMenus"].product.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: `/product/${item.slug}`,
                                                        className: `dropdown-item${path === `/product/${item.slug}` ? " active-item" : ""}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "di-icon",
                                                                children: item.icon
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/site-header.tsx",
                                                                lineNumber: 122,
                                                                columnNumber: 21
                                                            }, this),
                                                            item.title
                                                        ]
                                                    }, item.slug, true, {
                                                        fileName: "[project]/src/components/site-header.tsx",
                                                        lineNumber: 117,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/site-header.tsx",
                                                lineNumber: 115,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/site-header.tsx",
                                        lineNumber: 111,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/site-header.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "nav-group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/solutions",
                                        className: `nav-link${isActive("/solutions") ? " active" : ""}`,
                                        children: "Solutions"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site-header.tsx",
                                        lineNumber: 131,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "nav-dropdown",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: "linear-gradient(135deg,#fff3ee,#ffe8d6)",
                                                    borderRadius: 10,
                                                    padding: "10px 14px",
                                                    fontSize: 12,
                                                    color: "#555",
                                                    marginBottom: 12
                                                },
                                                children: "Industry-specific workflows designed for operational scale and control."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/site-header.tsx",
                                                lineNumber: 133,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "grid",
                                                    gridTemplateColumns: "1fr 1fr",
                                                    gap: 4
                                                },
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navMenus"].solutions.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: `/solutions/${item.slug}`,
                                                        className: `dropdown-item${path === `/solutions/${item.slug}` ? " active-item" : ""}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "di-icon",
                                                                children: item.icon
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/site-header.tsx",
                                                                lineNumber: 143,
                                                                columnNumber: 21
                                                            }, this),
                                                            item.title
                                                        ]
                                                    }, item.slug, true, {
                                                        fileName: "[project]/src/components/site-header.tsx",
                                                        lineNumber: 138,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/site-header.tsx",
                                                lineNumber: 136,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/site-header.tsx",
                                        lineNumber: 132,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/site-header.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this),
                            topLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: link.href,
                                    className: `nav-link${isActive(link.href) ? " active" : ""}`,
                                    children: link.label
                                }, link.href, false, {
                                    fileName: "[project]/src/components/site-header.tsx",
                                    lineNumber: 151,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/site-header.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                            flexShrink: 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                className: "header-login",
                                children: "Login"
                            }, void 0, false, {
                                fileName: "[project]/src/components/site-header.tsx",
                                lineNumber: 163,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/book-demo",
                                className: "header-book-btn",
                                children: "Book Demo"
                            }, void 0, false, {
                                fileName: "[project]/src/components/site-header.tsx",
                                lineNumber: 164,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/site-header.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/site-header.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/site-header.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_s(SiteHeader, "kx72sda92+XlSh1QiZvq/YVQxpY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = SiteHeader;
var _c;
__turbopack_context__.k.register(_c, "SiteHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/site-footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SiteFooter",
    ()=>SiteFooter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
"use client";
;
;
const footerColumns = [
    {
        title: "Product",
        links: [
            [
                "Meal Booking",
                "/product/meal-booking"
            ],
            [
                "Attendance",
                "/product/attendance"
            ],
            [
                "Billing & Payments",
                "/product/billing"
            ],
            [
                "Inventory",
                "/product/inventory"
            ],
            [
                "Analytics",
                "/product/analytics"
            ],
            [
                "Mobile App",
                "/product/mobile-app"
            ]
        ]
    },
    {
        title: "Solutions",
        links: [
            [
                "Hostel Mess",
                "/solutions/hostel-mess"
            ],
            [
                "College Canteens",
                "/solutions/college-canteen"
            ],
            [
                "Industrial Canteen",
                "/solutions/industrial-canteen"
            ],
            [
                "Corporate Cafeteria",
                "/solutions/corporate-cafeteria"
            ],
            [
                "Cloud Kitchen",
                "/solutions/cloud-kitchen"
            ],
            [
                "Subscription Mess",
                "/solutions/subscription-mess-business"
            ]
        ]
    },
    {
        title: "Resources",
        links: [
            [
                "Blog",
                "/blog"
            ],
            [
                "Guides",
                "/guides"
            ],
            [
                "Reports",
                "/reports"
            ],
            [
                "Case Studies",
                "/customers"
            ],
            [
                "ROI Calculator",
                "/resources/roi-calculator"
            ],
            [
                "Cost Leakage Calc",
                "/resources/cost-leakage-calculator"
            ]
        ]
    },
    {
        title: "Company",
        links: [
            [
                "About Us",
                "/company"
            ],
            [
                "Founder Story",
                "/company#founder-story"
            ],
            [
                "Mission & Vision",
                "/company#mission-vision"
            ],
            [
                "Why Mealiez",
                "/why-mealiez"
            ],
            [
                "Contact",
                "/company#contact"
            ],
            [
                "Book Demo",
                "/book-demo"
            ]
        ]
    },
    {
        title: "Legal",
        links: [
            [
                "Privacy Policy",
                "/security"
            ],
            [
                "Terms of Service",
                "/security"
            ],
            [
                "Security",
                "/security"
            ],
            [
                "Data Infrastructure",
                "/security"
            ]
        ]
    }
];
const socials = [
    {
        label: "LinkedIn",
        href: "#",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "18",
            height: "18",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                }, void 0, false, {
                    fileName: "[project]/src/components/site-footer.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "2",
                    y: "9",
                    width: "4",
                    height: "12"
                }, void 0, false, {
                    fileName: "[project]/src/components/site-footer.tsx",
                    lineNumber: 67,
                    columnNumber: 99
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "4",
                    cy: "4",
                    r: "2"
                }, void 0, false, {
                    fileName: "[project]/src/components/site-footer.tsx",
                    lineNumber: 67,
                    columnNumber: 140
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/site-footer.tsx",
            lineNumber: 66,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        label: "Instagram",
        href: "#",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "18",
            height: "18",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "2",
                    y: "2",
                    width: "20",
                    height: "20",
                    rx: "5",
                    ry: "5"
                }, void 0, false, {
                    fileName: "[project]/src/components/site-footer.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                }, void 0, false, {
                    fileName: "[project]/src/components/site-footer.tsx",
                    lineNumber: 76,
                    columnNumber: 65
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "17.5",
                    y1: "6.5",
                    x2: "17.51",
                    y2: "6.5"
                }, void 0, false, {
                    fileName: "[project]/src/components/site-footer.tsx",
                    lineNumber: 76,
                    columnNumber: 124
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/site-footer.tsx",
            lineNumber: 75,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        label: "YouTube",
        href: "#",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "18",
            height: "18",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M22.54 6.42a2.78 2.78 0 0 0-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.45A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 0 0 1.95-1.97A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"
                }, void 0, false, {
                    fileName: "[project]/src/components/site-footer.tsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                    points: "9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
                }, void 0, false, {
                    fileName: "[project]/src/components/site-footer.tsx",
                    lineNumber: 85,
                    columnNumber: 283
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/site-footer.tsx",
            lineNumber: 84,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }
];
function SiteFooter() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        style: {
            background: "#fff",
            borderTop: "1px solid rgba(255,107,53,0.1)",
            fontFamily: "'Inter', system-ui, sans-serif"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        .footer-link { font-size: 13px; color: #666; text-decoration: none; transition: color 0.15s; display: inline-block; line-height: 1; }
        .footer-link:hover { color: #FF6B35; }
        .footer-social-btn { color: #555; display: inline-flex; padding: 7px; border-radius: 9px; transition: background 0.15s, color 0.15s; text-decoration: none; border: 1px solid rgba(0,0,0,0.07); }
        .footer-social-btn:hover { background: #fff3ee; color: #FF6B35; border-color: rgba(255,107,53,0.2); }
      `
            }, void 0, false, {
                fileName: "[project]/src/components/site-footer.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 1200,
                    margin: "0 auto",
                    padding: "56px 32px 44px",
                    display: "flex",
                    gap: 48,
                    alignItems: "flex-start"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: "0 0 180px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                style: {
                                    textDecoration: "none",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 8,
                                    marginBottom: 14
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: 30,
                                            height: 30,
                                            background: "linear-gradient(135deg, #FF6B35, #FF875C)",
                                            borderRadius: 8,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            flexShrink: 0
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "16",
                                            height: "16",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "#fff",
                                            strokeWidth: "2.5",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M3 11l19-9-9 19-2-8-8-2z"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/site-footer.tsx",
                                                lineNumber: 119,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/site-footer.tsx",
                                            lineNumber: 118,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site-footer.tsx",
                                        lineNumber: 113,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: 18,
                                            fontWeight: 800,
                                            color: "#FF6B35",
                                            letterSpacing: "-0.02em"
                                        },
                                        children: "Mealiez"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site-footer.tsx",
                                        lineNumber: 122,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/site-footer.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: 12,
                                    color: "#999",
                                    lineHeight: 1.65,
                                    marginBottom: 6,
                                    maxWidth: 164
                                },
                                children: "The operating system for modern messes and food service businesses."
                            }, void 0, false, {
                                fileName: "[project]/src/components/site-footer.tsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: 11,
                                    color: "#bbb",
                                    lineHeight: 1.6,
                                    marginBottom: 20
                                },
                                children: "© 2026 Mealiez. All rights reserved."
                            }, void 0, false, {
                                fileName: "[project]/src/components/site-footer.tsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    gap: 6,
                                    alignItems: "center"
                                },
                                children: socials.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: s.href,
                                        className: "footer-social-btn",
                                        "aria-label": s.label,
                                        children: s.icon
                                    }, s.label, false, {
                                        fileName: "[project]/src/components/site-footer.tsx",
                                        lineNumber: 134,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/site-footer.tsx",
                                lineNumber: 132,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/site-footer.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            display: "grid",
                            gridTemplateColumns: "repeat(5, 1fr)",
                            gap: 8
                        },
                        children: footerColumns.map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        style: {
                                            fontSize: 11,
                                            fontWeight: 800,
                                            color: "#1a1a1a",
                                            marginBottom: 16,
                                            textTransform: "uppercase",
                                            letterSpacing: "0.06em"
                                        },
                                        children: col.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site-footer.tsx",
                                        lineNumber: 150,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        style: {
                                            listStyle: "none",
                                            padding: 0,
                                            margin: 0
                                        },
                                        children: col.links.map(([label, href])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                style: {
                                                    marginBottom: 11
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: href,
                                                    className: "footer-link",
                                                    children: label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/site-footer.tsx",
                                                    lineNumber: 159,
                                                    columnNumber: 21
                                                }, this)
                                            }, label, false, {
                                                fileName: "[project]/src/components/site-footer.tsx",
                                                lineNumber: 158,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site-footer.tsx",
                                        lineNumber: 156,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, col.title, true, {
                                fileName: "[project]/src/components/site-footer.tsx",
                                lineNumber: 149,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/site-footer.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/site-footer.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    borderTop: "1px solid rgba(0,0,0,0.05)",
                    maxWidth: 1200,
                    margin: "0 auto",
                    padding: "16px 32px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: 12,
                            color: "#bbb"
                        },
                        children: "Made with ❤️ for mess operators across India."
                    }, void 0, false, {
                        fileName: "[project]/src/components/site-footer.tsx",
                        lineNumber: 175,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            gap: 20
                        },
                        children: [
                            [
                                "Privacy",
                                "/security"
                            ],
                            [
                                "Terms",
                                "/security"
                            ],
                            [
                                "Security",
                                "/security"
                            ]
                        ].map(([label, href])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: href,
                                className: "footer-link",
                                style: {
                                    fontSize: 12
                                },
                                children: label
                            }, label, false, {
                                fileName: "[project]/src/components/site-footer.tsx",
                                lineNumber: 178,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/site-footer.tsx",
                        lineNumber: 176,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/site-footer.tsx",
                lineNumber: 169,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/site-footer.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
_c = SiteFooter;
var _c;
__turbopack_context__.k.register(_c, "SiteFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0ikkov3._.js.map