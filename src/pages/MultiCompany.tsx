import React from "react";
import { Link } from "react-router-dom";
import { 
  Building2, 
  Network, 
  BarChart4, 
  FileSpreadsheet, 
  Layers, 
  PlusCircle, 
  CheckCircle2, 
  Users 
} from "lucide-react";
import SEOHead from "../components/ui/SEOHead";

export default function MultiCompany() {
  const multiFeatures = [
    {
      title: "Shared Global Catalog",
      description: "Manage physical material catalogs, cement inventory definitions, and master unit costs at the central company while permitting remote site variations.",
      icon: Layers
    },
    {
      title: "Consolidated Master Audits",
      description: "Instantly aggregate balance sheets, cashflows, contractor advances, and land plot reservation histories across 47 legal entities with one click.",
      icon: FileSpreadsheet
    },
    {
      title: "Segmented Workspaces",
      description: "Maintain secure partitions between development brands, legal subsidiaries, and general contractors, limiting view scopes by profile.",
      icon: Network
    },
    {
      title: "Multi-Jurisdiction Accounting",
      description: "Configured to calculate unique VAT rates, municipal flat booking registration duties, and local corporate tax standards automatically.",
      icon: BarChart4
    }
  ];

  const canonicalUrl = `${window.location.origin}/multi-company`;

  return (
    <div className="bg-white min-h-screen text-left font-sans" id="multi-company-page">
      <SEOHead 
        title="Multi-Company Conglomerate Architecture ERP"
        description="Consolidate several real estate development entities, civil subcontractors, and material depots. Eurosia Buildnex ERP automates multi-company rollups."
        keywords="multi company ERP, construction conglomerate accounting, developer branch ledger, subsidiary tracking, central business tools"
        canonicalUrl={canonicalUrl}
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-r from-slate-900 to-[#11135e] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(204,26,47,0.12)_1px,transparent_1px)] [background-size:24px_24px] opacity-70"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-6">
          <div className="inline-flex items-center gap-2 bg-brand-red/25 border border-brand-red/40 px-3.5 py-1 rounded-full text-xs font-bold text-brand-red uppercase tracking-wider">
            <Building2 className="w-4 h-4 animate-pulse" />
            Module 03: Multi-Company Rollups
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight max-w-4xl leading-tight">
            Multi-Company Architecture For Industrial Conglomerates
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Consolidate property holdings, central design firms, municipal subcontractors, and massive sand or aggregate quarries inside an unalterable, unified parent company workspace.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              to="/request-demo"
              className="bg-brand-red hover:bg-white hover:text-black text-white text-xs font-extrabold px-6 py-3.5 rounded-lg transition-all shadow-lg"
            >
              Request Custom Multi-Company Audit
            </Link>
          </div>
        </div>
      </section>

      {/* Core Split Section */}
      <section className="py-20 bg-slate-50 border-b border-gray-155">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Visual Workspace Matrix representation */}
            <div className="relative">
              <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-xl space-y-6">
                <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                  <span className="text-xs font-black text-[#11135e] font-mono tracking-wider uppercase">Master Consolidated HQ</span>
                  <span className="text-[10px] bg-red-100 text-brand-red px-2 py-0.5 rounded font-black font-mono">CONSOLIDATING</span>
                </div>

                {/* Sub branches charts mockup */}
                <div className="space-y-3.5 text-xs">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex justify-between items-center text-slate-700">
                    <span className="font-bold flex items-center gap-2">
                      <Building2 className="w-3.5 h-3.5 text-brand-red" /> Subsidiary 01: Dhaka Real Estate Developers
                    </span>
                    <span className="font-mono text-emerald-600 font-bold">+18.2%</span>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex justify-between items-center text-slate-700">
                    <span className="font-bold flex items-center gap-2">
                      <Building2 className="w-3.5 h-3.5 text-brand-red" /> Subsidiary 02: Chittagong Heavy Civil Contractors
                    </span>
                    <span className="font-mono text-emerald-600 font-bold">+12.4%</span>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex justify-between items-center text-slate-700">
                    <span className="font-bold flex items-center gap-2">
                      <Building2 className="w-3.5 h-3.5 text-brand-red" /> Subsidiary 03: Sylhet Quarry Logistics
                    </span>
                    <span className="font-mono text-rose-600 font-bold">-2.1%</span>
                  </div>
                </div>

                <div className="p-4 bg-[#11135e]/5 border border-[#11135e]/10 rounded-xl text-xs flex justify-between font-bold text-black">
                  <span>Consolidated Margin Ledger (UTC)</span>
                  <span className="font-mono text-brand-blue">+$189,401,922</span>
                </div>
              </div>
            </div>

            {/* Explanatory blocks */}
            <div className="space-y-6">
              <span className="text-xs font-mono font-bold text-brand-red uppercase">Consolidated Command</span>
              <h2 className="text-3xl font-black text-black">Control Multi-Brand Operations Securely</h2>
              <p className="text-sm text-gray-600 leading-relaxed font-sans">
                Many modern building groups manage different legal structures to isolate project risk. However, accounting teams are often forced to consolidate multiple spreadsheets at the end of the year to check balance sheets. Eurosia Buildnex provides real-time transactional rollups with clean sub-ledger isolation.
              </p>
              
              <div className="space-y-3">
                <div className="flex gap-3 text-xs text-gray-700 items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#11135e] shrink-0 mt-0.5" />
                  <span>Segment administrative users to avoid security drift.</span>
                </div>
                <div className="flex gap-3 text-xs text-gray-700 items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#11135e] shrink-0 mt-0.5" />
                  <span>Transfer construction equipment models across divisions without spreadsheet logs.</span>
                </div>
                <div className="flex gap-3 text-xs text-gray-700 items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#11135e] shrink-0 mt-0.5" />
                  <span>Consolidated cash flow records showing actual operational margins in near real-time.</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Grid Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="max-w-2xl mx-auto space-y-3 mb-16 select-none">
            <span className="text-xs font-black tracking-widest text-[#11135e] uppercase font-mono">Consolidations Grid</span>
            <h2 className="text-3xl font-black text-black">Designed for Group Management</h2>
            <p className="text-sm text-gray-500 leading-relaxed font-sans">
              Keep operations decoupled but structurally unified with central governance audits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {multiFeatures.map((feat, idx) => (
              <div key={idx} className="p-6 bg-white border border-gray-150 hover:border-[#11135e]/30 hover:shadow-xl rounded-2xl transition-all text-left flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="w-10 h-10 bg-red-50 text-brand-red group-hover:bg-[#11135e] group-hover:text-white rounded-lg flex items-center justify-center transition-colors duration-200">
                    <feat.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-sm text-black">{feat.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed font-sans">{feat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate bottom banner */}
      <section className="bg-black text-white py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(204,26,47,0.1)_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="max-w-3xl mx-auto px-4 relative z-10 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold">Unify Your Companies Under One Screen</h2>
          <p className="text-xs sm:text-sm text-gray-400 max-w-2xl mx-auto">
            Contact Eurosia Buildnex enterprise sales to configure a private proof-of-concept environment mapping all active parent company subsidiaries.
          </p>
          <div className="pt-4">
            <Link
              to="/request-demo"
              className="bg-brand-red hover:bg-white hover:text-black text-white text-xs font-black px-6 py-3 rounded-lg transition-colors inline-block"
            >
              Schedule Conglomerate Diagnostic Briefing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
