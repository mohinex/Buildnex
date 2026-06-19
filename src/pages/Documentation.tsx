import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  BookOpen, 
  Terminal, 
  PlayCircle, 
  Search, 
  ChevronRight, 
  CheckCircle2, 
  HelpCircle 
} from "lucide-react";
import SEOHead from "../components/ui/SEOHead";

export default function Documentation() {
  const [searchQuery, setSearchQuery] = useState("");

  const docs = [
    {
      section: "Getting Started",
      items: [
        { title: "Standard License Seats Activations", link: "#" },
        { title: "Synchronizing SQLite WASM Layers Locally", link: "#" },
        { title: "Configuring Multi-Company Group Tenures", link: "#" }
      ]
    },
    {
      section: "Civil Ledger & Material BOQ",
      items: [
        { title: "Creating Concrete Delivery Checklists offline", link: "#" },
        { title: "Enforcing Dynamic Aggregates Rebar limits", link: "#" },
        { title: "Managing Subcontractor progressive shift bills", link: "#" }
      ]
    },
    {
      section: "Developer CRM",
      items: [
        { title: "Preventing flat double-bookings offline", link: "#" },
        { title: "Tying CRM invoices to structural Concrete pouring", link: "#" },
        { title: "WhatsApp Direct reminder API credentials", link: "#" }
      ]
    }
  ];

  const canonicalUrl = `${window.location.origin}/documentation`;

  return (
    <div className="bg-white min-h-screen text-left font-sans" id="documentation-page">
      <SEOHead 
        title="Product Documentation & Guides"
        description="Learn how to install, configure, and synchronize Eurosia Buildnex ERP modules. Access developer manuals for local SQLite databases."
        keywords="builder user documentation, ERP manual, SQLite WASM setup registers, subcontractor billing keys, real estate modules API"
        canonicalUrl={canonicalUrl}
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-r from-slate-900 to-black text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(204,26,47,0.12)_1px,transparent_1px)] [background-size:24px_24px] opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-6">
          <span className="text-[11px] font-bold text-brand-red tracking-widest uppercase bg-black/40 px-3 py-1 rounded border border-gray-800">
            Developer Archives
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Eurosia Buildnex System Manuals
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-3xl leading-relaxed">
            Browse complete step-by-step documentation, database schemas, hardware bindings guides, and ledger overrides controls built for technical administrators.
          </p>
        </div>
      </section>

      {/* Documentation index columns */}
      <section className="py-20 bg-slate-50 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {docs.map((sec, sIdx) => (
              <div key={sIdx} className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                  <div className="w-9 h-9 rounded-lg bg-red-50 text-brand-red flex items-center justify-center">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <h3 className="font-extrabold text-sm text-[#11135e] tracking-tight uppercase uppercase">{sec.section}</h3>
                </div>

                <div className="space-y-4 text-xs font-sans">
                  {sec.items.map((item, iIdx) => (
                    <div 
                      key={iIdx} 
                      onClick={() => alert(`Opening manual for ${item.title}`)}
                      className="flex justify-between items-center p-3 rounded-lg bg-slate-50 hover:bg-red-50/50 cursor-pointer border border-slate-100 hover:border-brand-red/20 transition-all group"
                    >
                      <span className="text-gray-700 font-bold group-hover:text-brand-red transition-all">{item.title}</span>
                      <ChevronRight className="w-4.5 h-4.5 text-gray-400 group-hover:text-black transition-colors" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded database schema section */}
      <section className="py-16 bg-white border-t border-gray-150 font-mono text-xs">
        <div className="max-w-5xl mx-auto px-4 space-y-6">
          <div className="flex gap-2 items-center text-[#11135e] font-sans pb-2 border-b border-gray-105">
            <Terminal className="w-5 h-5 text-brand-red" />
            <h2 className="text-xl font-bold">Local SQLite Relational Schema Specs</h2>
          </div>

          <div className="bg-slate-950 text-emerald-400 p-6 rounded-2xl border border-slate-800 space-y-4">
            <p className="text-slate-500">// local_inventories table setup constraints</p>
            <pre className="overflow-x-auto text-[11px] leading-relaxed">
{`CREATE TABLE local_inventories (
  id VARCHAR(64) PRIMARY KEY,
  material_type VARCHAR(120) NOT NULL REFERENCES master_catalog(id),
  site_location VARCHAR(80) NOT NULL,
  total_aggregate_tons NUMERIC(12, 2) DEFAULT 0.00,
  cumulative_cost JOURNAL_DECIMAL NOT NULL,
  last_signature_hash VARCHAR(128) NOT NULL,
  synchronized_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`}
            </pre>
          </div>
        </div>
      </section>
    </div>
  );
}
