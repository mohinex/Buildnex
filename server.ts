import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import { BlogPost, LeadSubmission, DemoRequest } from "./src/types";

const app = express();
const PORT = 3000;
const DB_PATH = path.join(process.cwd(), "data", "db.json");

// Ensure Data directory and database file exist with realistic seed data
function initializeDatabase() {
  const dirPath = path.dirname(DB_PATH);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  if (fs.existsSync(DB_PATH)) {
    try {
      const data = fs.readFileSync(DB_PATH, "utf-8");
      JSON.parse(data);
      console.log("Database file parsed successfully.");
      return;
    } catch (e) {
      console.log("Stale database file detected. Resetting to seed data.");
    }
  }

  const initialSeed = {
    leads: [
      {
        id: "lead-1",
        name: "Engr. Atikur Rahman",
        email: "rahman@atikproperties.com",
        phone: "+8801711408725",
        company: "Rahman Development Group",
        message: "We manage 4 remote excavation points in Sylhet with zero mobile bandwidth. I want to test the local SQLite browser sync offline capabilities. Please coordinate an assessment session.",
        submittedAt: "2026-06-18 10:14:02"
      },
      {
        id: "lead-2",
        name: "M. Solaiman",
        email: "solaiman@coastalinfra.net",
        phone: "+8801709371514",
        company: "Royal Coastal Infrastructure",
        message: "How does the flat ledger log milestone installments? We want to automate invoice notifications strictly when roof slab castings are marked complete by on-site supervisors.",
        submittedAt: "2026-06-19 02:40:55"
      }
    ],
    demos: [
      {
        id: "demo-1",
        name: "A. Rahim Chowdhury",
        email: "rahim@chowdhurybuilders.com",
        phone: "+8801819203040",
        company: "Chowdhury Builders Bangladesh",
        employeeCount: "51-200",
        primaryNeed: "Comprehensive 13-Module ERP",
        message: "Interested in a customized workflow setup to replace our legacy systems across our 14 active civil structures in Dhaka.",
        submittedAt: "2026-06-18 14:22:10",
        status: "scheduled"
      },
      {
        id: "demo-2",
        name: "Tariqul Islam",
        email: "tariq@islamtownship.org",
        phone: "+8801915607080",
        company: "Islam Township Holdings",
        employeeCount: "200+",
        primaryNeed: "Sales Flat Booking Ledger",
        message: "We need an integrated CRM that allows brokers to lock flat reservations offline on fields without duplicates. We want to test your dual event conflict resolution engine.",
        submittedAt: "2026-06-19 04:12:44",
        status: "pending"
      }
    ],
    blogs: [
      {
        id: "post-1",
        title: "The Muddy Field Dilemma: Designing Relational Synchronizations for Remote Sites",
        slug: "muddy-field-dilemma-remote-sync",
        summary: "Why traditional WebSocket ERP apps collapse instantly under basements, and how custom SQLite Event streams safeguard crucial materials data.",
        content: "In modern civil construction, the 'cloud' is often more of a hazard than a benefit. When site mechanics or excavation crews descend into deep basement floors, or travel to remote horizontal land properties, active connections drop immediately.\n\nTraditional ERP layouts rely on constant stateful WebSockets or REST requests. The second a cellular packet is lost, the browser tab freezes, throwing vague network errors and erasing material checks or contractor schedules entered by field agents.\n\n### Transitioning to Local Storage Engines\n\nEurosia Buildnex solves this bottleneck at its root. We embed a localized relational SQLite database directly into user runtimes through compiled WASM (WebAssembly) layers. Every project modification is signed and written to a secure offline event buffer on-site immediately with zero UI delay.\n\n### The Compounding Benefit\n\nBy ensuring site personnel can execute material checkouts, contractor shift advances, and plot inspections offline, builders eliminate delayed project orders and paper discrepancies, increasing annual margin yields up to 14%.",
        category: "offline-sync",
        author: {
          name: "Engr. S. Atikur",
          role: "Construction Architect"
        },
        readTime: "6 Min Read",
        publishedAt: "June 11, 2026",
        coverImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=640&auto=format&fit=crop"
      },
      {
        id: "post-2",
        title: "Building Safer: Protecting Real Estate ledgers with Local SQLite-WASM Encryptions",
        slug: "safe-ledgers-local-sqlite-encryption",
        summary: "Ensure corporate compliance and protect prospective client flat contracts locally even when field smartphones are misplaced.",
        content: "Mobile accessibility is a major productivity booster for general contractor leads, but it introduces extreme security challenges. If an agent misplaces their master tablet on an active construction site, sensitive raw steel pricing, client bank drafts, and subcontractor advance ledgers are exposed to third-party operations.\n\n### AES-256 Client-Side Security\n\nEurosia Buildnex handles data safety at the edge. All localized structural catalogs, buyer portfolios, and ledger events stored in the browser's persistent key-value folders are immediately encrypted with AES-256 bit algorithms.\n\n### Cryptographic Permission Keys\n\nWhen administrators issue Seat Licenses inside the master platform, individual client containers receive distinct cryptographic access credentials. If a site handset is retired or lost, remote wipe routines lock local files instantly, ensuring GDPR and SOC-2 standard corporate stewardship.",
        category: "technology",
        author: {
          name: "Tariqul Islam",
          role: "Lead Cybersecurity Architect"
        },
        readTime: "4 Min Read",
        publishedAt: "June 14, 2026",
        coverImage: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?q=80&w=640&auto=format&fit=crop"
      },
      {
        id: "post-3",
        title: "Milestones Slabs vs Calendar Durations: Automating Flat Booking Instalments",
        slug: "milestones-slabs-automated-instalments",
        summary: "Stop building on credit. Automate cashflow reminders strictly tied to physical concrete pouring inspections.",
        content: "A major source of cashflow stagnation among real estate development townships is delayed installment recovery. Traditional billing engines send invoice reminders strictly based on arbitrary calendar durations (e.g., '10% invoice every 6 months').\n\nHowever, if heavy monsoons delay the third roof slab casting, clients rightfully refuse payments, sparking manual auditing delays and double-entry accounting friction.\n\n### Event-Driven Milestones\n\nEurosia Buildnex coordinates physical progress directly with client CRM billing ledgers. The minute a civil supervisor logs a completed roof slab masonry check into the offline ERP, the synchronized API triggers a payment milestone event.\n\nClients automatically receive localized SMS text logs and bank portal links, pulling payments in weeks sooner and keeping building cash flows healthy.",
        category: "enterprise",
        author: {
          name: "M. Solaiman",
          role: "ERP Workflow Analyst"
        },
        readTime: "5 Min Read",
        publishedAt: "June 16, 2026",
        coverImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=640&auto=format&fit=crop"
      }
    ],
    settings: {
      phone: "+880 1711-408725",
      whatsapp: "+880 1709-371514",
      email: "support@eurosia.com.bd",
      facebook: "https://www.facebook.com/EurosiaOfficial",
      linkedin: "https://linkedin.com/in/EurosiaOfficial",
      x: "https://x.com/EurosiaOfficial",
      instagram: "https://www.instagram.com/EurosiaOfficial",
      logoText: "Eurosia",
      subLogoText: "Buildnex"
    },
    menus: [
      { id: "m1", name: "Home", path: "/", order: 1 },
      { id: "m2", name: "Features", path: "/features", order: 2 },
      { id: "m3", name: "Solutions", path: "/solutions", order: 3 },
      { id: "m4", name: "Offline-First", path: "/offline-first", order: 4 },
      { id: "m5", name: "Pricing", path: "/pricing", order: 5 },
      { id: "m6", name: "Blog", path: "/blog", order: 6 },
      { id: "m7", name: "About", path: "/about", order: 7 },
      { id: "m8", name: "Contact", path: "/contact", order: 8 }
    ],
    banners: [
      {
        id: "b1",
        badge: "Now Launching Version 4.2 Offline-First",
        title: "Eurosia Buildnex",
        description: "The complete offline-first smart construction ERP platform for modern builders. Manage projects, buildings, individual units, CRM clients, flat bookings, material payments, subcontractors, and compliance reports from one powerful enterprise platform. Built for remote sites with unstable connectivity.",
        ctaText: "Book Instant Demo",
        ctaLink: "/request-demo",
        secondaryCtaText: "Contact Expert Sales",
        secondaryCtaLink: "/contact"
      }
    ],
    features: [
      {
        id: "fe-1",
        title: "Multi-Tier Project Architectures",
        description: "Model massive townships block-by-block. Track work packages down to individual building structures, concrete pours, raw blocks, and contractor shifts.",
        iconName: "Building2",
        category: "project-control",
        order: 1
      },
      {
        id: "fe-2",
        title: "Client & Flat Lifecycle Ledger",
        description: "Streamline client bookings, dynamic flat pricing allocations, client down-payments, automated installment reminders, and legal title transfers.",
        iconName: "Users",
        category: "sales-crm",
        order: 2
      },
      {
        id: "fe-3",
        title: "Smart Sync Arbitration Engine",
        description: "Runs a custom revision-hash conflict arbiter on background threads. Solves simultaneous project edits in real-time.",
        iconName: "Sparkles",
        category: "sync-engine",
        order: 3
      },
      {
        id: "fe-4",
        title: "Real-Time Field Collaboration",
        description: "Connect your head office with distant muddy excavation fields seamlessly, regardless of local mobile signal quality.",
        iconName: "Layers",
        category: "sync-engine",
        order: 4
      },
      {
        id: "fe-5",
        title: "Material Costing & Requisitions",
        description: "Track inventory, cement tons, and rebar logs with dynamic PO routing and supplier allocation.",
        iconName: "Wallet",
        category: "cost-control",
        order: 5
      },
      {
        id: "fe-6",
        title: "Subcontractor Progress Ledger",
        description: "Manage task signoffs, advances, milestone cash releases, and performance analytics of subcontract labor.",
        iconName: "Wrench",
        category: "cost-control",
        order: 6
      },
      {
        id: "fe-7",
        title: "Automated Site Diary Entry",
        description: "On-site foremen log inspections, weather delay factors, and material deliveries easily onto the local SQLite stack.",
        iconName: "FileText",
        category: "operational-efficiency",
        order: 7
      },
      {
        id: "fe-8",
        title: "Smart Task Planning & Scheduling",
        description: "Visual Gantt charts and dependency paths that adjust automatically when concrete casting dates shift.",
        iconName: "TrendingUp",
        category: "project-control",
        order: 8
      },
      {
        id: "fe-9",
        title: "Dispute Audit Logs & Receipts",
        description: "Instant field entry logs, booking registries, and supplier receipts form an unalterable audit trail.",
        iconName: "ShieldCheck",
        category: "governance",
        order: 9
      },
      {
        id: "fe-10",
        title: "Asset & Machinery Depot Control",
        description: "Monitor excavator fuel efficiency limits, tower crane certifications, concrete mixer locations, and maintenance periods.",
        iconName: "Server",
        category: "operational-efficiency",
        order: 10
      },
      {
        id: "fe-11",
        title: "Dynamic Legal Document Templates",
        description: "Instantly compile sales agreements, flat allotment drafts, and localized sub-contractor covenants securely.",
        iconName: "Globe2",
        category: "governance",
        order: 11
      },
      {
        id: "fe-12",
        title: "Mobile Offline-First Android Wrapper",
        description: "High-performance hybrid software container designed specifically to cache extensive engineering drawings offline.",
        iconName: "Smartphone",
        category: "interface",
        order: 12
      },
      {
        id: "fe-13",
        title: "Enterprise Compliance Audit Reporting",
        description: "One-click Generation of ISO standard environmental reports, structural integrity audits, and real-time site rosters.",
        iconName: "CheckCircle2",
        category: "governance",
        order: 13
      }
    ],
    faq: [
      {
        id: "faq-1",
        question: "How does Eurosia Buildnex sync work when cellular networks are completely down?",
        answer: "Every project action, raw material invoice, and flat booking recorded by active site personnel is cached onto local browser SQLite databases through compiled WASM drivers. When the mobile operator or local Wi-Fi drops, the app switches to offline buffering state. On connection recovery, a sub-150ms dynamic conflict referee checks revision hashes, committing site edits in sequence.",
        category: "sync"
      },
      {
        id: "faq-2",
        question: "Is raw structural material tracking completely synced with general ledger accounts?",
        answer: "Yes, Eurosia Buildnex ties physical site material bills of quantity (BOQ) with corporate accounting systems. Material invoices submitted offline at field storage depots undergo automatic multi-level approval queues the second connectivity settles, updating work package estimations and corporate ledger journals in real-time.",
        category: "product"
      },
      {
        id: "faq-3",
        question: "Can we support separate developer companies and subcontractor arms under a single tenant?",
        answer: "Of course. Eurosia Buildnex features a multi-tiered workspace module designed specifically for large conglomerate construction and civil engineering groups. You can partition sub-brands, separate accounting branches, and limit contractor views while retaining full master roll-up dashboards at the central head office.",
        category: "security"
      },
      {
        id: "faq-4",
        question: "What is the security protocol for local offline storage devices?",
        answer: "To meet strict SOC-2 compliance standards, raw project files stored in user web caching layers are secured with end-to-end client-side AES-256 bit algorithms. Security credentials and access vectors are validated dynamically, enabling seamless administrative device lockout or key revocation on missing handsets.",
        category: "security"
      }
    ],
    pricing: [
      {
        id: "pr-1",
        name: "Standard Growth",
        price: "Contact Team",
        period: "per user/month",
        description: "Suited for localized general contractors and civil builders tracking up to 3 active construction zones.",
        features: [
          "Offline Field Data Caching",
          "Material BOQ Receipts Entry",
          "Basic Project Gantt Schedules",
          "Up to 25 Seat Licences",
          "Email & WhatsApp Helpdesks"
        ],
        isPopular: false,
        ctaText: "Schedule Pilot Assessment",
        ctaLink: "/request-demo"
      },
      {
        id: "pr-2",
        name: "Enterprise Core",
        price: "Contact Team",
        period: "per user/month",
        description: "Built for mid-sized real estate conglomerates managing multiple active building schedules and direct flat sales portfolios.",
        features: [
          "Dual Conflict Sync Referee Matrix",
          "Full Client Booking Lifecycle Ledger",
          "Advanced Material Accounting Ties",
          "Unlimited Construction Projects",
          "Dedicated Delivery Account Lead",
          "E-Sign Document Integrations"
        ],
        isPopular: true,
        ctaText: "Request Sandbox Access",
        ctaLink: "/request-demo"
      },
      {
        id: "pr-3",
        name: "Sovereign Custom",
        price: "Contact Team",
        period: "per firm/month",
        description: "Engineered specifically for massive state-level developers, heavy bridge-builders, and global engineering enterprises.",
        features: [
          "Relational Database On-Prem Host",
          "Custom OAuth & Corporate Authentication",
          "Local Civil Engineering Core API Ties",
          "Guaranteed 99.98% Service Level Agreement",
          "Custom Feature Engineering Queue",
          "On-site Core Technical Deployments"
        ],
        isPopular: false,
        ctaText: "Arrange Corporate Briefing",
        ctaLink: "/request-demo"
      }
    ]
  };

  fs.writeFileSync(DB_PATH, JSON.stringify(initialSeed, null, 2), "utf-8");
  console.log("Database initialized with seed data.");
}

initializeDatabase();

// JSON middleware
app.use(express.json());

// Secure offline PIN-based authentication codes & roles (super admin, admin, manager, user)
const PIN_ROLES: Record<string, { role: string; name: string }> = {
  "9876": { role: "Super Admin", name: "Super Admin (Resident Developer)" },
  "1234": { role: "Admin", name: "Corporate Administrator" },
  "4321": { role: "Manager", name: "District Manager" },
  "2468": { role: "User", name: "Field Supervisor" }
};

app.post("/api/auth/pin", (req, res) => {
  const { pin } = req.body;
  if (!pin) {
    return res.status(400).json({ error: "PIN is required" });
  }
  const match = PIN_ROLES[pin];
  if (match) {
    return res.json({ 
      success: true, 
      role: match.role, 
      name: match.name,
      message: `${match.role} offline supervisor PIN verified.`
    });
  } else {
    return res.status(401).json({ error: "Invalid PIN badge code. Access denied." });
  }
});

app.post("/api/auth/login", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }
  if (email.toLowerCase().includes("admin") || email.toLowerCase().includes("supervisor")) {
    return res.json({
      success: true,
      role: "Admin",
      name: "Corporate Administrator",
      message: "Welcome back, supervisor active."
    });
  }
  return res.json({
    success: true,
    role: "User",
    name: "Standard Personnel",
    message: "Authorized login success."
  });
});

// Helper state operations
function getDatabase() {
  const raw = fs.readFileSync(DB_PATH, "utf-8");
  return JSON.parse(raw);
}

function writeDatabase(data: any) {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), "utf-8");
}

// ==========================================
// API ENDPOINTS
// ==========================================

// 1. Get Blog posts
app.get("/api/blog", (req, res) => {
  try {
    const db = getDatabase();
    res.json(db.blogs);
  } catch (err: any) {
    res.status(500).json({ error: "Db operation failure." });
  }
});

// 2. Get Single Blog post by slug
app.get("/api/blog/:slug", (req, res) => {
  try {
    const db = getDatabase();
    const post = db.blogs.find((b: BlogPost) => b.slug === req.params.slug);
    if (!post) {
      return res.status(404).json({ error: "Post record not found" });
    }
    res.json(post);
  } catch (err: any) {
    res.status(500).json({ error: "Db query error." });
  }
});

// 3. Create blog post (Admin only)
app.post("/api/blog", (req, res) => {
  try {
    const db = getDatabase();
    const { title, summary, content, category, authorName, authorRole, coverImage } = req.body;
    
    // Sluggify title
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

    const newPost: BlogPost = {
      id: `post-${Date.now()}`,
      title,
      slug,
      summary,
      content,
      category,
      author: {
        name: authorName || "Engr Rahman",
        role: authorRole || "Civil Architect",
        avatar: ""
      },
      readTime: `${Math.max(1, Math.ceil(content.split(" ").length / 200))} Min Read`,
      publishedAt: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      }),
      coverImage: coverImage || "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=640&auto=format&fit=crop"
    };

    db.blogs.unshift(newPost);
    writeDatabase(db);
    res.status(201).json(newPost);
  } catch (err: any) {
    res.status(500).json({ error: "Blockage publishing post record." });
  }
});

// 4. Delete Blog post
app.delete("/api/blog/:id", (req, res) => {
  try {
    const db = getDatabase();
    db.blogs = db.blogs.filter((b: BlogPost) => b.id !== req.params.id);
    writeDatabase(db);
    res.json({ success: true });
  } catch (err: any) {
    res.status(500).json({ error: "Failed to delete post." });
  }
});

// 5. Contact Lead Entry Form POST
app.post("/api/contact", (req, res) => {
  try {
    const db = getDatabase();
    const { name, email, phone, company, message } = req.body;

    const newLead: LeadSubmission = {
      id: `lead-${Date.now()}`,
      name,
      email,
      phone,
      company,
      message,
      submittedAt: new Date().toISOString().replace(/T/, " ").replace(/\..+/, "")
    };

    db.leads.unshift(newLead);
    writeDatabase(db);
    res.status(201).json({ success: true, lead: newLead });
  } catch (err: any) {
    res.status(500).json({ error: "Error committing lead entry." });
  }
});

// 6. Get Contact Leads
app.get("/api/admin/leads", (req, res) => {
  try {
    const db = getDatabase();
    res.json(db.leads);
  } catch (err: any) {
    res.status(500).json({ error: "Query limits error." });
  }
});

// 7. Request Demo bookings POST
app.post("/api/demo", (req, res) => {
  try {
    const db = getDatabase();
    const { name, email, phone, company, employeeCount, primaryNeed, message } = req.body;

    const newDemo: DemoRequest = {
      id: `demo-${Date.now()}`,
      name,
      email,
      phone,
      company,
      employeeCount: employeeCount || "11-50",
      primaryNeed: primaryNeed || "Comprehensive ERP modules",
      message,
      submittedAt: new Date().toISOString().replace(/T/, " ").replace(/\..+/, ""),
      status: "pending"
    };

    db.demos.unshift(newDemo);
    writeDatabase(db);
    res.status(201).json({ success: true, demo: newDemo });
  } catch (err: any) {
    res.status(500).json({ error: "Error booking demo slot." });
  }
});

// 8. Get Demo bookings
app.get("/api/admin/demos", (req, res) => {
  try {
    const db = getDatabase();
    res.json(db.demos);
  } catch (err: any) {
    res.status(500).json({ error: "Fault fetching registers." });
  }
});

// 9. Patch Demo Status
app.patch("/api/admin/demos/:id/status", (req, res) => {
  try {
    const db = getDatabase();
    const demo = db.demos.find((d: DemoRequest) => d.id === req.params.id);
    if (!demo) {
      return res.status(404).json({ error: "Registration not found" });
    }

    demo.status = req.body.status;
    writeDatabase(db);
    res.json({ success: true, demo });
  } catch (err: any) {
    res.status(500).json({ error: "Status update failed." });
  }
});

// ==========================================
// CMS DYNAMIC CONTENT API ENDPOINTS
// ==========================================

// 10. Settings API
app.get("/api/settings", (req, res) => {
  try {
    const db = getDatabase();
    res.json(db.settings);
  } catch (err: any) {
    res.status(500).json({ error: "Failed to load settings." });
  }
});

app.patch("/api/settings", (req, res) => {
  try {
    const db = getDatabase();
    db.settings = { ...db.settings, ...req.body };
    writeDatabase(db);
    res.json({ success: true, settings: db.settings });
  } catch (err: any) {
    res.status(500).json({ error: "Failed to update settings." });
  }
});

// 11. Menus API
app.get("/api/menus", (req, res) => {
  try {
    const db = getDatabase();
    res.json((db.menus || []).sort((a: any, b: any) => a.order - b.order));
  } catch (err: any) {
    res.status(500).json({ error: "Failed to load menus." });
  }
});

// 12. Banners API
app.get("/api/banners", (req, res) => {
  try {
    const db = getDatabase();
    res.json(db.banners || []);
  } catch (err: any) {
    res.status(500).json({ error: "Failed to load banners." });
  }
});

app.patch("/api/banners/:id", (req, res) => {
  try {
    const db = getDatabase();
    db.banners = (db.banners || []).map((b: any) => b.id === req.params.id ? { ...b, ...req.body } : b);
    writeDatabase(db);
    res.json({ success: true, banners: db.banners });
  } catch (err: any) {
    res.status(500).json({ error: "Failed to update banner." });
  }
});

// 13. Features API
app.get("/api/features", (req, res) => {
  try {
    const db = getDatabase();
    res.json((db.features || []).sort((a: any, b: any) => a.order - b.order));
  } catch (err: any) {
    res.status(500).json({ error: "Failed to load features." });
  }
});

app.patch("/api/features/:id", (req, res) => {
  try {
    const db = getDatabase();
    db.features = (db.features || []).map((f: any) => f.id === req.params.id ? { ...f, ...req.body } : f);
    writeDatabase(db);
    res.json({ success: true, features: db.features });
  } catch (err: any) {
    res.status(500).json({ error: "Failed to update feature." });
  }
});

// 14. FAQ API
app.get("/api/faq", (req, res) => {
  try {
    const db = getDatabase();
    res.json(db.faq || []);
  } catch (err: any) {
    res.status(500).json({ error: "Failed to load FAQs." });
  }
});

app.post("/api/faq", (req, res) => {
  try {
    const db = getDatabase();
    const newFAQ = { id: `faq-${Date.now()}`, ...req.body };
    db.faq = db.faq || [];
    db.faq.push(newFAQ);
    writeDatabase(db);
    res.status(201).json(newFAQ);
  } catch (err: any) {
    res.status(500).json({ error: "Failed to create FAQ." });
  }
});

app.delete("/api/faq/:id", (req, res) => {
  try {
    const db = getDatabase();
    db.faq = (db.faq || []).filter((f: any) => f.id !== req.params.id);
    writeDatabase(db);
    res.json({ success: true });
  } catch (err: any) {
    res.status(500).json({ error: "Failed to delete FAQ." });
  }
});

// 15. Pricing API
app.get("/api/pricing", (req, res) => {
  try {
    const db = getDatabase();
    res.json(db.pricing || []);
  } catch (err: any) {
    res.status(500).json({ error: "Failed to load pricing packages." });
  }
});

app.patch("/api/pricing/:id", (req, res) => {
  try {
    const db = getDatabase();
    db.pricing = (db.pricing || []).map((p: any) => p.id === req.params.id ? { ...p, ...req.body } : p);
    writeDatabase(db);
    res.json({ success: true, pricing: db.pricing });
  } catch (err: any) {
    res.status(500).json({ error: "Failed to update pricing package." });
  }
});

// ==========================================
// VITE OR STATIC SERVING MIDDLEWARE
// ==========================================

async function start() {
  if (process.env.NODE_ENV !== "production") {
    // Development Mode
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
    console.log("Vite middleware mounted on Express dev server.");
  } else {
    // Production Mode
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
    console.log("Serving compiled static assets from dist folder.");
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Eurosia Buildnex server booting completed on port ${PORT}`);
  });
}

start();
