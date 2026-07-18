# Website Information Architecture (Sitemap)
## Mealiez Marketing Website
**Version:** 1.0  
**Owner:** Mealiez  
**Date:** July 18, 2026

---

## 1. Complete Website Sitemap (Hierarchy)

```text
MEALIEZ WEBSITE
├── Home (/)
├── Product
│   ├── Overview
│   ├── Meal Booking (/product/meal-booking)
│   ├── Attendance Management (/product/attendance)
│   ├── Billing & Payments (/product/billing)
│   ├── Inventory Management (/product/inventory)
│   ├── Analytics & Reports (/product/analytics)
│   └── Mobile Apps (/product/mobile-app)
├── Solutions
│   ├── Hostel Mess Management (/solutions/hostel-mess)
│   ├── College Canteens (/solutions/college-canteen)
│   ├── Industrial Canteens (/solutions/industrial-canteen)
│   ├── Corporate Cafeterias (/solutions/corporate-cafeteria)
│   ├── Cloud Kitchens (/solutions/cloud-kitchen)
│   └── Subscription Mess Businesses (/solutions/subscription-mess-business)
├── Why Mealiez (/why-mealiez)
│   ├── Why Manual Systems Fail
│   ├── Why Excel Fails
│   ├── Why Traditional ERP Fails
│   ├── Cost of Food Wastage
│   └── Mealiez Advantage
├── Pricing (/pricing)
│   ├── Standard Plan
│   ├── Enterprise Plan
│   ├── Feature Comparison
│   └── FAQ
├── Customers
│   ├── Customer Stories (/customers)
│   ├── Case Studies
│   └── Testimonials
├── Resources
│   ├── Blog (/blog)
│   ├── Guides (/guides)
│   ├── Reports (/reports)
│   ├── ROI Calculator (/resources/roi-calculator)
│   └── Cost Leakage Calculator (/resources/cost-leakage-calculator)
├── Company
│   ├── About Mealiez (/about)
│   ├── Founder Story (/about#founder-story)
│   ├── Mission & Vision (/about#mission-vision)
│   └── Contact (/contact)
├── Security (/security)
│   ├── Data Security
│   ├── Privacy
│   ├── Infrastructure
│   ├── Backups
│   └── Reliability
└── Book Demo (/book-demo)
```

---

## 2. Navigation Structure

### Main Navigation Bar
```text
[LOGO]  Product (Mega Menu)  Solutions (Mega Menu)  Pricing  Customers  Resources  Company  [Book Demo (CTA Button)]
```
*   **Mega Menus** should be used for **Product** and **Solutions** dropdown components.
*   **Book Demo** CTA button should be highlighted and sticky on scroll.

---

## 3. Page Templates & Layouts

### 3.1 Homepage Layout (Highest Design Priority: 60-70% of Effort)
1.  **Hero Section:** Powerful hook, value prop, visual product teaser, primary & secondary CTAs.
2.  **Trusted By Section:** Logo cloud of prominent messes, colleges, and operators using Mealiez.
3.  **Problem Section:** The core pain points of traditional food service operations (wastage, manual entry, leakage).
4.  **Product Overview:** Interactive or tabbed selector showcase of core Mealiez modules.
5.  **Interactive Product Workflow:** Visualizing step-by-step how a member books a meal and how the kitchen processes it.
6.  **Core Features Grid:** Detailed feature callouts (attendance, billing, inventory).
7.  **Industry Solutions:** Audience segment selector (Hostels, Factories, Cloud Kitchens).
8.  **Dashboard Showcase:** Large, clean desktop browser screenshots of the analytical dashboards.
9.  **ROI Calculator:** Interactive widget showing instant cost-savings estimate.
10. **Customer Results:** Statistics and proof points (e.g., "30% waste reduction", "100% billing accuracy").
11. **Testimonials:** Rich slider showing user-faced and operator-faced reviews.
12. **Founder Story:** Letter or story section highlighting why Mealiez was built.
13. **FAQ:** Toggle-style general queries.
14. **Final CTA:** Clean, persuasive demo booking request.
15. **Footer:** Comprehensive global links.

### 3.2 Product Page Template (Reusable for Feature Pages)
*Used for `/product/*` pages.*
*   **Hero:** Module branding, description, main screenshot, and CTA.
*   **Problem:** Niche challenges solved by the specific module.
*   **How It Works:** Operational step-by-step breakdown.
*   **Key Features:** Bulleted list of functionalities with small icons.
*   **Workflow Diagram:** Visual flow of logic or actions in the tool.
*   **Dashboard Screenshots:** High-definition close-up captures of UI components.
*   **Benefits:** Strategic value (e.g., automated fee reminders save 15 hrs/week).
*   **FAQ:** Technical and functional FAQs specific to the product module.
*   **CTA:** Demo booking banner.

### 3.3 Solution Page Template (Reusable for Industry Pages)
*Used for `/solutions/*` pages.*
*   **Hero:** Niche-specific headline (e.g., "Scale Your Student Housing Food Operations").
*   **Industry Challenges:** Unique issues faced by the industry segment.
*   **Current Process:** Flow showing how manually running operations fails.
*   **How Mealiez Solves It:** Targeted feature mapping to their problems.
*   **Relevant Features:** Curated modules essential to this category.
*   **ROI Impact:** Industry-specific metric projections.
*   **Customer Story:** Spotlighting a case study from the same segment.
*   **FAQ:** Audience-specific questions answered.
*   **Book Demo CTA:** Custom lead capture CTA.

### 3.4 Pricing Page Layout
*   **Hero:** Clear pricing philosophy, currency selector.
*   **Pricing Toggle:** Toggle between billing frequencies (Monthly vs. Annual).
*   **Plan Cards:**
    *   *Standard Plan:* Target audience, pricing, core features checklist, "Start Free Trial/Get Demo" CTA.
    *   *Enterprise Plan:* Large facilities, "Contact Sales" action, advanced features (integrations, custom SLAs).
*   **Feature Comparison:** Comprehensive checklist detailing exactly what is supported in both plans.
*   **ROI Calculator:** Direct link or embed to prove the self-funding nature of the platform.
*   **FAQ:** Pricing, billing, scaling, support, and custom implementation FAQs.
*   **Contact Sales CTA:** Support trigger for enterprise inquiries.

### 3.5 "Why Mealiez" Page (High Conversion Potential)
*   **Hero:** "Why do leading food operations teams choose Mealiez over traditional setups?"
*   **Manual System Problems:** Breaking down registers, card systems, and paper records.
*   **Excel Problems:** Explaining how spreadsheets break under scale, lead to human errors, and lack real-time inputs.
*   **Key Pain Deep Dives:**
    *   *Attendance Issues* (proxy dining, tracking errors)
    *   *Billing Errors* (untracked changes, delayed collections)
    *   *Food Wastage* (over-purchasing, cooking without headcounts)
*   **Cost Leakage Calculator:** Quick estimation widget embedded on the page.
*   **Mealiez Comparison Table:** Checklist grid comparing:
    *   Manual / Paper
    *   Excel Sheets
    *   Traditional ERPs
    *   **Mealiez**
*   **Customer Results:** Key proof metrics and statistics.
*   **CTA:** Final booking push.

### 3.6 Case Study Template
*   **Hero:** Customer name, industry, and the main success metric (e.g., "How ABC University Reduced Wastage by 28% in 3 Months").
*   **Client Overview:** Size, scale, locations, and member counts.
*   **Challenges:** The operational bottlenecks before installing Mealiez.
*   **Implementation:** How Mealiez was deployed, including customer training and onboarding steps.
*   **Results & Metrics:** Data comparison tables and callout blocks showing absolute improvements.
*   **Screenshots:** Photos of actual setups in action or customized client dashboards.
*   **Quote:** Direct review from the lead decision-maker (Warden, Principal, Owner).
*   **CTA:** "Replicate these results for your business - Contact Us".

---

## 4. Blog Architecture (Taxonomy)

The blog will cover educational content categorised into the following subcategories:
1.  **Mess Management:** Standard operating procedures, staffing guides, and menu curation tips.
2.  **Hostel Operations:** Modern amenities management, student engagement, and warden resources.
3.  **Food Waste Reduction:** Practical methods, batch-cooking formulas, and environmental sustainability practices.
4.  **Billing & Payments:** Cash flow optimization, fee structure models, and collection strategies.
5.  **Attendance Systems:** Reviews of biometrics, card integrations, and RFID setups.
6.  **Industry Insights:** B2B food service statistics, policy shifts, and catering market trends.
7.  **Product Updates:** New release announcements, feature documentation, and company news from Mealiez.

---

## 5. Global Footer Structure

```text
┌────────────────────────────────────────────────────────────────────────┐
│                                                                        │
│   PRODUCT               SOLUTIONS             RESOURCES                │
│   • Meal Booking        • Hostel Mess         • Blog                   │
│   • Attendance          • College Canteen     • Guides                 │
│   • Billing             • Industrial Canteen  • Reports                │
│   • Inventory           • Corporate Cafeteria • Case Studies           │
│   • Analytics           • Cloud Kitchen                                │
│   • Mobile App                                                         │
│                                                                        │
│   COMPANY               LEGAL                 SOCIALS                  │
│   • About               • Privacy Policy      • LinkedIn               │
│   • Contact             • Terms of Service    • Instagram              │
│   • Book Demo           • Security            • YouTube                │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```
