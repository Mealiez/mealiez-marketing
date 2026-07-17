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
        summary: "Smart meal booking with attendance-aware auto planning.",
        painPoints: [
            "Last-minute meal plan changes",
            "Manual booking errors",
            "Uncertain demand forecasting"
        ],
        features: [
            "Pre-book and recurring meal schedules",
            "Cutoff windows and waitlists",
            "Role-wise approvals",
            "Real-time booking dashboards"
        ],
        benefits: [
            "Lower food wastage",
            "Higher student and staff satisfaction",
            "Smoother kitchen operations"
        ]
    },
    {
        slug: "attendance",
        title: "Attendance Management",
        summary: "Track who actually consumed meals, across shifts and locations.",
        painPoints: [
            "Proxy attendance",
            "Mismatch with billing",
            "No live meal counts"
        ],
        features: [
            "QR and PIN-based attendance",
            "Shift and dining hall mapping",
            "Live attendance heatmaps",
            "Exception reporting"
        ],
        benefits: [
            "Better accountability",
            "Leakage control",
            "Data-backed planning"
        ]
    },
    {
        slug: "billing",
        title: "Billing & Payments",
        summary: "Automate invoices, plans, due tracking, and digital collections.",
        painPoints: [
            "Manual invoicing",
            "Delayed collections",
            "Pricing complexity"
        ],
        features: [
            "Flexible plan configuration",
            "Auto-generated invoices",
            "UPI and online payment support",
            "Collection and dues tracking"
        ],
        benefits: [
            "Improved cash flow",
            "Fewer disputes",
            "Less admin effort"
        ]
    },
    {
        slug: "inventory",
        title: "Inventory Management",
        summary: "Control stock movement and procurement with demand intelligence.",
        painPoints: [
            "Stockouts",
            "Over-procurement",
            "No wastage visibility"
        ],
        features: [
            "Ingredient-wise stock tracking",
            "Low-stock alerts",
            "Vendor and purchase logging",
            "Wastage trend analysis"
        ],
        benefits: [
            "Lower procurement cost",
            "Controlled wastage",
            "Better margins"
        ]
    },
    {
        slug: "analytics",
        title: "Analytics & Reports",
        summary: "Unified operational intelligence for founders and operations teams.",
        painPoints: [
            "Scattered reports",
            "No benchmark data",
            "Slow decisions"
        ],
        features: [
            "Executive KPI dashboards",
            "Meal trend and churn insights",
            "Revenue vs consumption reports",
            "Export-ready board reports"
        ],
        benefits: [
            "Faster decisions",
            "Clear operational transparency",
            "Enterprise-ready reporting"
        ]
    },
    {
        slug: "mobile-app",
        title: "Mobile App",
        summary: "A fast mobile experience for diners, admins, and field teams.",
        painPoints: [
            "Low digital adoption",
            "No real-time updates",
            "Poor UX"
        ],
        features: [
            "Meal booking and attendance in one app",
            "Push reminders and plan updates",
            "Admin controls on the go",
            "Usage analytics"
        ],
        benefits: [
            "Higher engagement",
            "Operational agility",
            "Always-on experience"
        ]
    }
];
const solutions = [
    {
        slug: "hostel-mess",
        title: "Hostel Mess Management",
        challenge: "Student attendance shifts daily, making planning difficult.",
        currentProcess: "Manual registers and spreadsheets cause overcooking and leakage.",
        mealiezApproach: [
            "Attendance-backed meal forecasting",
            "Automated billing by plan",
            "Hostel-wise dashboard visibility"
        ],
        roiImpact: "Reduce wastage by up to 18% and improve collection cycles by 25%."
    },
    {
        slug: "college-canteen",
        title: "College Canteens",
        challenge: "High rush-hour demand with low predictability.",
        currentProcess: "Token and cash-based ops lead to delays and poor reporting.",
        mealiezApproach: [
            "Pre-booking with queue smoothing",
            "Digital attendance and payments",
            "Faculty/student segmentation"
        ],
        roiImpact: "Serve peak demand faster while cutting queue friction and food waste."
    },
    {
        slug: "industrial-canteen",
        title: "Industrial Canteens",
        challenge: "Shift-based meal counts and compliance needs are complex.",
        currentProcess: "Manual rosters and delayed reconciliation increase errors.",
        mealiezApproach: [
            "Shift-aware attendance automation",
            "Meal-wise cost controls",
            "Audit-friendly reports"
        ],
        roiImpact: "Improve cost predictability and reduce attendance mismatch losses."
    },
    {
        slug: "corporate-cafeteria",
        title: "Corporate Cafeterias",
        challenge: "Hybrid work creates fluctuating meal demand.",
        currentProcess: "No reliable way to link attendance with food planning.",
        mealiezApproach: [
            "Employee pre-booking",
            "Department-level analytics",
            "Smart demand insights"
        ],
        roiImpact: "Increase cafeteria efficiency and reduce idle production."
    },
    {
        slug: "cloud-kitchen",
        title: "Cloud Kitchens",
        challenge: "Multi-channel order and prep planning can become chaotic.",
        currentProcess: "Disconnected systems block accurate demand planning.",
        mealiezApproach: [
            "Centralized booking and production planning",
            "Inventory-led menu decisions",
            "Performance dashboards"
        ],
        roiImpact: "Support predictable throughput with lower ingredient loss."
    },
    {
        slug: "subscription-mess-business",
        title: "Subscription Mess Businesses",
        challenge: "Managing recurring meal plans and churn is hard at scale.",
        currentProcess: "Manual renewals and collections reduce retention.",
        mealiezApproach: [
            "Recurring subscription billing",
            "Smart reminders and renewals",
            "Retention and churn analytics"
        ],
        roiImpact: "Increase renewals and lifetime value through automated workflows."
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
            background: "rgba(255,252,249,0.88)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(255,107,53,0.08)",
            boxShadow: "0 1px 24px rgba(0,0,0,0.04)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        .nav-link {
          font-size: 14px; font-weight: 500; color: #333;
          text-decoration: none; padding: 8px 0;
          transition: color 0.15s; position: relative;
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
        .dropdown-item:hover { background: #fff3ee; color: #FF6B35; }
        .dropdown-item.active-item { color: #FF6B35; background: rgba(255,107,53,0.05); }
        .header-book-btn {
          background: #FF6B35; color: #fff; border-radius: 8px;
          padding: 9px 20px; font-weight: 600; font-size: 14px;
          text-decoration: none; display: inline-block;
          transition: background 0.15s, box-shadow 0.15s, transform 0.15s;
          box-shadow: 0 4px 14px rgba(255,107,53,0.28);
        }
        .header-book-btn:hover {
          background: #e55e28;
          box-shadow: 0 6px 22px rgba(255,107,53,0.38);
          transform: translateY(-1px);
        }
        .header-login {
          font-size: 14px; font-weight: 500; color: #333;
          text-decoration: none; padding: 8px 12px; border-radius: 8px;
          transition: color 0.15s, background 0.15s;
        }
        .header-login:hover { color: #FF6B35; background: #fff3ee; }
      `
            }, void 0, false, {
                fileName: "[project]/src/components/site-header.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 1200,
                    margin: "0 auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 40px",
                    height: 64
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        style: {
                            textDecoration: "none",
                            display: "flex",
                            alignItems: "center",
                            gap: 8
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
                                        lineNumber: 97,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site-header.tsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/site-header.tsx",
                                lineNumber: 90,
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
                                lineNumber: 100,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/site-header.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: 28
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
                                        lineNumber: 106,
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
                                                children: "Explore automation modules that power bookings, attendance, billing, and growth."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/site-header.tsx",
                                                lineNumber: 108,
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
                                                        children: item.title
                                                    }, item.slug, false, {
                                                        fileName: "[project]/src/components/site-header.tsx",
                                                        lineNumber: 113,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/site-header.tsx",
                                                lineNumber: 111,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/site-header.tsx",
                                        lineNumber: 107,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/site-header.tsx",
                                lineNumber: 105,
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
                                        lineNumber: 126,
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
                                                children: "Pick your industry journey and see tailored workflows designed for scale and control."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/site-header.tsx",
                                                lineNumber: 128,
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
                                                        children: item.title
                                                    }, item.slug, false, {
                                                        fileName: "[project]/src/components/site-header.tsx",
                                                        lineNumber: 133,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/site-header.tsx",
                                                lineNumber: 131,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/site-header.tsx",
                                        lineNumber: 127,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/site-header.tsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, this),
                            topLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: link.href,
                                    className: `nav-link${isActive(link.href) ? " active" : ""}`,
                                    children: link.label
                                }, link.href, false, {
                                    fileName: "[project]/src/components/site-header.tsx",
                                    lineNumber: 146,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/site-header.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: 8
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/company",
                                className: "header-login",
                                children: "Login"
                            }, void 0, false, {
                                fileName: "[project]/src/components/site-header.tsx",
                                lineNumber: 158,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/book-demo",
                                className: "header-book-btn",
                                children: "Book Demo"
                            }, void 0, false, {
                                fileName: "[project]/src/components/site-header.tsx",
                                lineNumber: 159,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/site-header.tsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/site-header.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/site-header.tsx",
        lineNumber: 18,
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
                "Billing",
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
                "Corporate Cafeteria",
                "/solutions/corporate-cafeteria"
            ],
            [
                "Industrial Canteen",
                "/solutions/industrial-canteen"
            ],
            [
                "Cloud Kitchen",
                "/solutions/cloud-kitchen"
            ]
        ]
    },
    {
        title: "Resources",
        links: [
            [
                "Blog",
                "/resources"
            ],
            [
                "Guides",
                "/resources"
            ],
            [
                "Reports",
                "/resources"
            ],
            [
                "Case Studies",
                "/customers"
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
                "Contact",
                "/company"
            ],
            [
                "Book Demo",
                "/book-demo"
            ]
        ]
    },
    {
        title: "LEGAL",
        links: [
            [
                "Privacy Policy",
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
        ]
    },
    {
        title: "SOCIALS",
        links: [
            [
                "LinkedIn",
                "#"
            ],
            [
                "Instagram",
                "#"
            ],
            [
                "YouTube",
                "#"
            ]
        ]
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
        .footer-link { font-size: 13px; color: #666; text-decoration: none; transition: color 0.15s; display: inline-block; }
        .footer-link:hover { color: #FF6B35; }
        .footer-social-btn { color: #555; display: inline-flex; padding: 6px; border-radius: 8px; transition: background 0.15s, color 0.15s; text-decoration: none; }
        .footer-social-btn:hover { background: #fff3ee; color: #FF6B35; }
      `
            }, void 0, false, {
                fileName: "[project]/src/components/site-footer.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 1200,
                    margin: "0 auto",
                    padding: "52px 40px 44px",
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 8,
                                    marginBottom: 16
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: 30,
                                            height: 30,
                                            background: "#FF6B35",
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
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/site-footer.tsx",
                                                    lineNumber: 88,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M12 8v4l3 3"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/site-footer.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/site-footer.tsx",
                                            lineNumber: 87,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site-footer.tsx",
                                        lineNumber: 83,
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
                                        lineNumber: 92,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/site-footer.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: 12,
                                    color: "#888",
                                    lineHeight: 1.6,
                                    marginBottom: 20,
                                    maxWidth: 160
                                },
                                children: "© 2024 Mealiez Culinary OS. All rights reserved."
                            }, void 0, false, {
                                fileName: "[project]/src/components/site-footer.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "center"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        className: "footer-social-btn",
                                        "aria-label": "Share",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "18",
                                            height: "18",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "18",
                                                    cy: "5",
                                                    r: "3"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/site-footer.tsx",
                                                    lineNumber: 102,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "6",
                                                    cy: "12",
                                                    r: "3"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/site-footer.tsx",
                                                    lineNumber: 102,
                                                    columnNumber: 47
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "18",
                                                    cy: "19",
                                                    r: "3"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/site-footer.tsx",
                                                    lineNumber: 102,
                                                    columnNumber: 77
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "8.59",
                                                    y1: "13.51",
                                                    x2: "15.42",
                                                    y2: "17.49"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/site-footer.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "15.41",
                                                    y1: "6.51",
                                                    x2: "8.59",
                                                    y2: "10.49"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/site-footer.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 67
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/site-footer.tsx",
                                            lineNumber: 101,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site-footer.tsx",
                                        lineNumber: 100,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        className: "footer-social-btn",
                                        "aria-label": "Website",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "18",
                                            height: "18",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "12",
                                                    cy: "12",
                                                    r: "10"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/site-footer.tsx",
                                                    lineNumber: 108,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "2",
                                                    y1: "12",
                                                    x2: "22",
                                                    y2: "12"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/site-footer.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/site-footer.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/site-footer.tsx",
                                            lineNumber: 107,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site-footer.tsx",
                                        lineNumber: 106,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        className: "footer-social-btn",
                                        "aria-label": "Copy",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                                                    x: "9",
                                                    y: "9",
                                                    width: "13",
                                                    height: "13",
                                                    rx: "2",
                                                    ry: "2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/site-footer.tsx",
                                                    lineNumber: 115,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/site-footer.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/site-footer.tsx",
                                            lineNumber: 114,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site-footer.tsx",
                                        lineNumber: 113,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/site-footer.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/site-footer.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            display: "grid",
                            gridTemplateColumns: "repeat(6, 1fr)",
                            gap: 12
                        },
                        children: footerColumns.map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        style: {
                                            fontSize: 13,
                                            fontWeight: 700,
                                            color: "#1a1a1a",
                                            marginBottom: 14
                                        },
                                        children: col.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site-footer.tsx",
                                        lineNumber: 131,
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
                                                    marginBottom: 10
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: href,
                                                    className: "footer-link",
                                                    children: label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/site-footer.tsx",
                                                    lineNumber: 140,
                                                    columnNumber: 21
                                                }, this)
                                            }, label, false, {
                                                fileName: "[project]/src/components/site-footer.tsx",
                                                lineNumber: 139,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site-footer.tsx",
                                        lineNumber: 137,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, col.title, true, {
                                fileName: "[project]/src/components/site-footer.tsx",
                                lineNumber: 130,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/site-footer.tsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/site-footer.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/site-footer.tsx",
        lineNumber: 64,
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