import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Building2, 
  Layers, 
  Users, 
  Wallet, 
  FileText, 
  TrendingUp, 
  Globe2, 
  ClipboardList,
  Boxes,
  KeyRound,
  FileCheck2,
  RefreshCw,
  Search
} from "lucide-react";
import SEO from "../components/SEO";

export default function Features() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<"all" | "field" | "commercial" | "system">("all");

  const modules = [
    {
      id: "project-mgmt",
      name: "Project Management",
      category: "field",
      icon: ClipboardList,
      desc: "Architect work packages down to individual concrete pours and soil checks. Track progress, site checklists, and daily shift logs on mobile devices offline.",
    },
    {
      id: "building-mgmt",
      name: "Building Structure Management",
      category: "field",
      icon: Building2,
      desc: "Model complex high-rises floor-by-floor. Track structural masonry, electrical cabling pipelines, plumbing, and external painting schedules.",
    },
    {
      id: "flat-mgmt",
      name: "Flat & Unit Asset Ledger",
      category: "commercial",
      icon: Layers,
      desc: "Track every unit's dimensional square-footage, layout reference, base price variables, orientation value premiums, and real-time occupancy reservation tags.",
    },
    {
      id: "client-crm",
      name: "Corporate Client CRM",
      category: "commercial",
      icon: Users,
      desc: "Consolidate communication logs, purchase intents, verification document scans, and communication histories across prospective flat buyers and renters.",
    },
    {
      id: "booking-mgmt",
      name: "Booking & Installment Control",
      category: "commercial",
      icon: FileCheck2,
      desc: "Automate booking reservation deposits. Map exact payment milestones tied directly to roof slab castings, foundation cures, or specific durations.",
    },
    {
      id: "payment-tracking",
      name: "Payment & Cashflow Tracking",
      category: "commercial",
      icon: Wallet,
      desc: "Log receipts, process banker down-payments, issue automated SMS tax receipts, and track raw materials expenditures to protect margins.",
    },
    {
      id: "contractor-mgmt",
      name: "Sub-Contractor Operations",
      category: "field",
      icon: Users,
      desc: "Govern sub-contractor balance books. Accurately report volume measurements, rate card deviations, piece-rate shift wages, advances, and settlements.",
    },
    {
      id: "inventory-mgmt",
      name: "Bulk Inventory & Materials",
      category: "field",
      icon: Boxes,
      desc: "Avoid on-site theft or cement spoil. Monitor material dispatches from raw stores to building sectors, and toggle auto-requisitions.",
    },
    {
      id: "reports-analytics",
      name: "Reports & Analytics Engine",
      category: "system",
      icon: TrendingUp,
      desc: "Deliver single-click reports detailing overall raw cashflows, site completion milestones, flat sales status, and budget variances.",
    },
    {
      id: "document-vault",
      name: "Secure Document Vault",
      category: "system",
      icon: FileText,
      desc: "Access crucial blueprints, structural plans, government soil reports, soil test certificates, and legal deeds cached offline for immediate use.",
    },
    {
      id: "multi-company",
      name: "Multi-Company Partitioning",
      category: "system",
      icon: Globe2,
      desc: "Support separate accounting books, logos, and regional offices across real estate ventures and logistics within a single master tenant database.",
    },
    {
      id: "license-system",
      name: "Enterprise Licensing System",
      category: "system",
      icon: KeyRound,
      desc: "Activate seat license counts, security permission tokens, offline lockouts, and cryptographic field keys to control workflows.",
    },
    {
      id: "offline-sync",
      name: "SQLite-Powered Sync",
      category: "system",
      icon: RefreshCw,
      desc: "Standard transaction-safe local database embedded inside user browsers, persisting records safely, ready to sync the second signal returns.",
    },
  ];

  const filteredModules = modules.filter((m) => {
    const matchesSearch = m.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          m.desc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === "all" || m.category === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="bg-white min-h-screen font-sans text-left">
      <SEO 
        title="Features"
        description="Explore the 13 foundational module categories of Eurosia Buildnex, the offline-first high-reliability smart construction ERP platform."
        keywords="construction management platform, project management, inventory management, offline sync, real estate ERP, flat listing"
      />

      {/* Header Banner - Matches Design System Hero constraint */}
      <section className="bg-brand-navy text-white py-16 lg:py-24 relative overflow-hidden" id="features-hero">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:20px_20px] opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-6">
          <div className="inline-flex items-center gap-2 bg-black/40 border border-white/10 px-3 py-1.5 rounded text-xs font-bold text-brand-red uppercase tracking-widest">
            ERP Capability Matrix
          </div>
          
          <h1 className="text-[36px] sm:text-[48px] lg:text-[64px] font-extrabold tracking-tight leading-[1.1] text-white">
            Comprehensive Builder Modules
          </h1>
          
          <p className="text-sm sm:text-base lg:text-lg text-[#dbeafe] max-w-3xl leading-[1.7] font-normal">
            Eliminate traditional software fragmentation. Our system consolidates cash journals, soil reports, material dispatch schedules, CRM leads, and multi-company license partitions inside a single offline-capable frame.
          </p>
        </div>
      </section>

      {/* Interactive Module Grid */}
      <section className="py-16 bg-light-gray border-b border-border-gray" id="features-grid-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Controls Bar */}
          <div className="p-4 bg-white border border-border-gray rounded-lg shadow-sm flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Search */}
            <div className="relative w-full md:w-80 font-sans">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search modules..."
                className="pl-10 pr-4 py-2 w-full border border-border-gray rounded-lg text-sm font-medium text-brand-black focus:outline-none focus:ring-1 focus:ring-brand-red focus:border-brand-red bg-light-gray"
              />
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto font-sans">
              {[
                { name: "All Modules", value: "all" },
                { name: "Field & Civil", value: "field" },
                { name: "CRM & Sales", value: "commercial" },
                { name: "Framework Systems", value: "system" },
              ].map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setSelectedFilter(tab.value as any)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all border ${
                    selectedFilter === tab.value
                      ? "bg-brand-navy text-white border-transparent"
                      : "bg-light-gray hover:bg-gray-200 text-text-gray border-border-gray"
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>
          </div>

          {/* Grid output */}
          {filteredModules.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredModules.map((m) => (
                <div
                  key={m.id}
                  className="bg-white border border-border-gray hover:border-brand-red/30 rounded-lg p-6 sm:p-8 hover:shadow-md transition-all duration-300 relative group flex flex-col justify-between text-left"
                >
                  <div>
                    {/* Top indicator bar */}
                    <div className="flex justify-between items-center mb-6">
                      <div className="w-10 h-10 bg-brand-red/10 text-brand-red rounded flex items-center justify-center">
                        <m.icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold font-mono tracking-wider uppercase text-text-gray px-2.5 py-1 bg-light-gray rounded border border-border-gray">
                        {m.category}
                      </span>
                    </div>

                    <h3 className="font-bold text-base sm:text-lg text-brand-black mb-3 group-hover:text-brand-red transition-colors flex items-center gap-1.5">
                      {m.name}
                      {m.id === "offline-sync" && (
                        <span className="w-2.5 h-2.5 rounded-full bg-brand-red inline-block animate-ping"></span>
                      )}
                    </h3>
                    <p className="text-xs sm:text-sm text-text-gray leading-[1.7] font-sans">
                      {m.desc}
                    </p>
                  </div>

                  {m.id === "offline-sync" && (
                    <div className="mt-6 pt-4 border-t border-dotted border-border-gray">
                      <Link
                        to="/offline-first"
                        className="text-xs font-bold text-brand-navy hover:text-brand-red flex items-center gap-1.5"
                      >
                        Read Deep Dive Tech Specs &rarr;
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 p-8 bg-white border border-border-gray rounded-lg">
              <p className="text-text-gray text-xs sm:text-sm">No modules matched your query. Try broadening your keywords.</p>
            </div>
          )}

        </div>
      </section>

      {/* Module Highlight Feature Banner - Matches dark section requirements exactly */}
      <section className="py-20 bg-white" id="features-highlights">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#050505] text-[#cbd5e1] rounded-lg p-8 sm:p-12 lg:p-16 relative overflow-hidden border border-white/5">
            <div className="absolute right-0 bottom-0 top-0 w-1/3 bg-[radial-gradient(rgba(204,26,47,0.1)_1px,transparent_1px)] [background-size:16px_16px] opacity-10 hidden lg:block"></div>
            
            <div className="max-w-2xl space-y-6 relative z-10 text-left">
              <span className="text-xs font-bold text-brand-red tracking-widest uppercase">THE ENTERPRISE ADVANTAGE</span>
              
              <h2 className="text-[28px] sm:text-[32px] lg:text-[40px] font-bold tracking-tight text-white leading-tight">
                Cryptographic Audit Trails Ensure Site Accountability
              </h2>
              
              <p className="text-xs sm:text-sm md:text-base text-slate-350 leading-[1.7] font-sans">
                Construction platforms are only as robust as the audit trail they write. Eurosia Buildnex tags and signs every local action with cryptographic signatures, ensuring contractors, project leaders, and financial officers operate with pristine accountability.
              </p>

              <div className="flex flex-wrap gap-4 pt-4 text-xs font-bold">
                <Link
                  to="/request-demo"
                  className="bg-brand-red hover:bg-white hover:text-black text-white px-6 py-3.5 rounded-lg transition-colors border border-transparent"
                >
                  Request Customized Module Demo
                </Link>
                <Link
                  to="/contact"
                  className="bg-white/10 hover:bg-white/20 border border-white/10 text-white px-6 py-3.5 rounded-lg transition-colors"
                >
                  Contact Builder Consultant
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
