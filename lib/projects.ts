export interface Project {
  id: string;
  name: string;
  description: string;
  details: string;
  role: string;
  features: string[];
  paletteIndex: number;
  images: number;
  imagePath?: string;
  platforms?: string[];
  tech: string[];
  url?: string | null;
}

export interface Palette {
  from: string;
  to: string;
  light: string;
  border: string;
  text: string;
}

export const palettes: Palette[] = [
  { from: "from-cyan-500", to: "to-blue-600", light: "bg-cyan-500/10", border: "border-cyan-500/20", text: "text-cyan-400" },
  { from: "from-emerald-500", to: "to-teal-600", light: "bg-emerald-500/10", border: "border-emerald-500/20", text: "text-emerald-400" },
  { from: "from-violet-500", to: "to-purple-600", light: "bg-violet-500/10", border: "border-violet-500/20", text: "text-violet-400" },
  { from: "from-amber-500", to: "to-orange-600", light: "bg-amber-500/10", border: "border-amber-500/20", text: "text-amber-400" },
  { from: "from-rose-500", to: "to-pink-600", light: "bg-rose-500/10", border: "border-rose-500/20", text: "text-rose-400" },
  { from: "from-sky-500", to: "to-indigo-600", light: "bg-sky-500/10", border: "border-sky-500/20", text: "text-sky-400" },
  { from: "from-lime-500", to: "to-green-600", light: "bg-lime-500/10", border: "border-lime-500/20", text: "text-lime-400" },
  { from: "from-fuchsia-500", to: "to-pink-600", light: "bg-fuchsia-500/10", border: "border-fuchsia-500/20", text: "text-fuchsia-400" },
  { from: "from-teal-500", to: "to-cyan-600", light: "bg-teal-500/10", border: "border-teal-500/20", text: "text-teal-400" },
  { from: "from-orange-500", to: "to-red-600", light: "bg-orange-500/10", border: "border-orange-500/20", text: "text-orange-400" },
  { from: "from-indigo-500", to: "to-violet-600", light: "bg-indigo-500/10", border: "border-indigo-500/20", text: "text-indigo-400" },
  { from: "from-yellow-500", to: "to-amber-600", light: "bg-yellow-500/10", border: "border-yellow-500/20", text: "text-yellow-400" },
];

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const mobileApps: Project[] = [
  {
    id: "inuka-fund-app",
    name: "Inuka Fund App",
    description: "Fintech mobile application for seamless fund management and portfolio tracking",
    details:
      "A comprehensive fund management platform enabling users to invest, track, and manage their financial portfolios in real-time. Features include instant deposits, withdrawal processing, portfolio analytics, and automated reporting. Built with a microservices architecture on AWS.",
    role: "Lead Full Stack Developer",
    features: [
      "Real-time portfolio tracking with interactive charts",
      "Secure authentication with biometric support",
      "Instant deposit and withdrawal processing",
      "Automated transaction notifications",
      "Multi-currency wallet management",
      "Comprehensive transaction history with filters",
    ],
    paletteIndex: 8,
    images: 6,
    imagePath: "/projects/inuka-fund-app",
    platforms: ["App Store", "Play Store"],
    tech: ["Flutter", "Spring Boot", "PostgreSQL", "AWS"],
  },
  {
    id: "ctrade-mobile",
    name: "C-Trade Mobile",
    description: "Professional trading platform with real-time market data and execution",
    details:
      "A professional-grade mobile trading platform providing real-time market data, advanced charting tools, and seamless trade execution. Designed for both novice and experienced traders with WebSocket-powered live updates.",
    role: "Full Stack Developer",
    features: [
      "Real-time market data streaming via WebSocket",
      "Advanced charting with technical indicators",
      "One-click trade execution",
      "Watchlist and portfolio management",
      "Price alerts and notifications",
      "Order history and performance analytics",
    ],
    paletteIndex: 8,
    images: 3,
    imagePath: "/projects/ctrade",
    platforms: ["App Store", "Play Store"],
    tech: ["Flutter", "WebSocket", "REST APIs", "Redis"],
  },
  {
    id: "zmx-mobile",
    name: "ZMX Mobile",
    description: "Cryptocurrency trading with multi-exchange support and analytics",
    details:
      "A feature-rich cryptocurrency trading platform supporting multiple exchanges, real-time price tracking, and advanced trading features including limit orders, stop-loss, and portfolio rebalancing.",
    role: "Full Stack Developer",
    features: [
      "Multi-exchange cryptocurrency trading",
      "Real-time price charts with drawing tools",
      "Limit and stop-loss order support",
      "Portfolio tracking with P&L analytics",
      "Market depth and order book visualization",
      "Secure wallet integration",
    ],
    paletteIndex: 8,
    images: 7,
    imagePath: "/projects/zmx",
    platforms: ["App Store", "Play Store"],
    tech: ["Flutter", "GraphQL", "Redis", "Node.js"],
  },
  {
    id: "omari",
    name: "Omari",
    description: "All-in-one mobile money and financial services from Old Mutual Zimbabwe",
    details:
      "Omari is a FinTech mobile money platform by Old Mutual Zimbabwe, offering dual-currency wallets (USD/ZWL), money transfers, airtime purchases, bill payments, card management, and Omari Care — a suite of insurance products including FoodCare, SchoolCare, and HealthCare. Built to serve the mass market across Zimbabwe.",
    role: "Full Stack Developer",
    features: [
      "Dual-currency wallets (USD & ZWL) with instant switching",
      "Send and receive money to any wallet or bank account",
      "Buy airtime and data bundles across all networks (Econet, NetOne, Telecel)",
      "Omari Care plans — FoodCare, SchoolCare, HealthCare",
      "Bill and merchant payments (municipalities, ZESA, medical aid)",
      "Virtual card management with ZimSwitch and Visa",
    ],
    paletteIndex: 8,
    images: 5,
    imagePath: "/projects/omari",
    platforms: ["App Store", "Play Store"],
    tech: ["Flutter", "Spring Boot", "PostgreSQL", "AWS"],
  },
  {
    id: "tsl",
    name: "TSL M-Trade",
    description: "Tobacco trade management and payment platform for TSL Limited Zimbabwe",
    details:
      "M-Trade is a digital tobacco trade management system by TSL Limited, Zimbabwe's leading agricultural logistics conglomerate. The platform provides secure authentication, trade workflow management, and integrated payment disbursement (TSL Pay) for farmers and buyers across the tobacco value chain.",
    role: "Full Stack Developer",
    features: [
      "Secure farmer authentication and profile management",
      "Trade workflow management for tobacco auctions",
      "Integrated payment processing via TSL Pay",
      "Real-time lot tracking and reconciliation",
      "Multi-currency transaction support (USD/ZWL)",
      "Digital contract and document management",
    ],
    paletteIndex: 8,
    images: 6,
    imagePath: "/projects/tsl",
    platforms: ["App Store", "Play Store"],
    tech: ["React Native", ".NET Core", "SQL Server", "Azure"],
  },
];

export const webApps: Project[] = [
  {
    id: "ctrade-web",
    name: "C-Trade Web System",
    description: "Institutional-grade trading platform with portfolio management",
    details:
      "A full-featured web-based trading platform providing institutional-grade tools for portfolio management, risk analysis, and trade execution across multiple asset classes with real-time data.",
    role: "Full Stack Developer",
    features: [
      "Advanced portfolio management dashboard",
      "Real-time market data and analytics",
      "Risk assessment and management tools",
      "Multi-asset trade execution",
      "Custom report generation",
      "Team collaboration features",
    ],
    paletteIndex: 8,
    images: 3,
    tech: ["React", "Spring Boot", "PostgreSQL", "AWS"],
  },
  {
    id: "zmx-web",
    name: "ZMX Web System",
    description: "Cryptocurrency exchange with advanced trading and analytics",
    details:
      "A sophisticated cryptocurrency exchange web platform featuring real-time market analytics, advanced trading interfaces, and comprehensive portfolio management tools for crypto traders.",
    role: "Full Stack Developer",
    features: [
      "Real-time cryptocurrency market dashboard",
      "Advanced trading interface with multiple order types",
      "Portfolio performance analytics",
      "Historical data export and reporting",
      "API integration for automated trading",
      "Security features including 2FA and withdrawal whitelist",
    ],
    paletteIndex: 8,
    images: 4,
    tech: ["Vue.js", "Node.js", "MongoDB", "Redis"],
  },
  {
    id: "fms-web",
    name: "FMS Web System",
    description: "Enterprise financial management with automated reporting",
    details:
      "An enterprise financial management system designed to streamline financial operations, automate reporting, and provide real-time visibility into organizational financial health.",
    role: "Full Stack Developer",
    features: [
      "Automated financial report generation",
      "Budget planning and forecasting",
      "Expense tracking and approval workflows",
      "Accounts payable and receivable management",
      "Audit trail and compliance reporting",
      "Role-based access control",
    ],
    paletteIndex: 8,
    images: 3,
    tech: ["React", "Spring Boot", "AWS", "PostgreSQL"],
  },
  {
    id: "smatprop",
    name: "SmatProp Portal",
    description: "Real estate platform with property management and bookings",
    details:
      "A comprehensive real estate management platform connecting property owners, tenants, and agents with features for listings, bookings, payments, and property maintenance.",
    role: "Full Stack Developer",
    features: [
      "Property listing with virtual tours",
      "Online booking and scheduling",
      "Rent collection and payment processing",
      "Maintenance request management",
      "Tenant communication portal",
      "Analytics and occupancy reporting",
    ],
    paletteIndex: 8,
    images: 3,
    tech: ["Laravel", "Vue.js", "MySQL", "Docker"],
    url: "https://www.smatprop.com/",
  },
  {
    id: "njere-ecommerce",
    name: "Njere E-commerce",
    description: "Scalable multi-vendor marketplace for African markets",
    details:
      "A scalable e-commerce platform built for African markets, featuring multi-vendor support, localized payment integrations, and an optimized shopping experience.",
    role: "Full Stack Developer",
    features: [
      "Multi-vendor marketplace management",
      "Localized payment and shipping integrations",
      "Product catalog with advanced search",
      "Order management and fulfillment tracking",
      "Marketing tools and promotional campaigns",
      "Customer analytics and segmentation",
    ],
    paletteIndex: 8,
    images: 3,
    tech: ["React", "Node.js", "MongoDB", "AWS"],
    url: "https://www.njere.africa/",
  },
  {
    id: "exit-interview",
    name: "Exit Interview System",
    description: "HR offboarding with structured feedback and analytics",
    details:
      "An enterprise HR system designed to streamline the employee offboarding process, capture valuable feedback through structured exit interviews, and generate actionable insights for HR leadership.",
    role: "Full Stack Developer",
    features: [
      "Structured exit interview questionnaires",
      "Automated workflow and notifications",
      "Feedback analytics and trend reporting",
      "Confidential response handling",
      "Integration with HRIS systems",
      "Action item tracking and follow-up",
    ],
    paletteIndex: 8,
    images: 3,
    tech: ["React", "C#", "SQL Server", "Azure"],
  },
];

export const allProjects = [...mobileApps, ...webApps];

export function getProjectBySlug(slug: string): Project | undefined {
  return allProjects.find((p) => p.id === slug);
}
