import React from "react";
import { Link } from "react-router-dom";
import { 
  FileText, 
  Sparkles, 
  Cpu, 
  Settings, 
  CheckCircle2, 
  CalendarDays, 
  Bookmark 
} from "lucide-react";
import SEOHead from "../components/ui/SEOHead";

export default function ReleaseNotes() {
  const versions = [
    {
      version: "v4.2.14 Stable",
      date: "June 18, 2026",
      badge: "LTS Release",
      summary: "Introduces local multi-company database shard separation for enterprise conglomerate profiles, along with improved SQLite-WASM physical catalog lookups.",
      changes: [
        "Enabled secure, encrypted sub-brand workspaces.",
        "Halved SQLite WebAssembly catalog filter processing durations on low-memory handsets.",
        "Automated WhatsApp installment reminder routing through direct cellular gateways."
      ]
    },
    {
      version: "v4.2.10 PRO",
      date: "May 29, 2026",
      badge: "Performance Update",
      summary: "Refines background revision-hash arbitration loops when field operators sync material receipts under 2G bandwidth cellular locations.",
      changes: [
        "Introduced the dual event-conflict referee table for simultaneously booked property units.",
        "Added automatic hardware binding tokens tied to unique IMEI devices.",
        "Compressed background telemetry logs payloads by 40%."
      ]
    },
    {
      version: "v4.1.0 Standard",
      date: "March 11, 2026",
      badge: "Core Launch",
      summary: "Launch of the 13 integrated civil operations and ERP ledger modules, featuring e-signature contracts, local laboratory casting diaries, and supplier checkouts.",
      changes: [
        "Embedded client-side AES-256 bit folder level file storage encryptions.",
        "Enabled multi-level workflow approval queues on material budgets.",
        "Added custom offline plot layouts surveyor maps caching."
      ]
    }
  ];

  const canonicalUrl = `${window.location.origin}/release-notes`;

  return (
    <div className="bg-white min-h-screen text-left font-sans" id="release-notes-page">
      <SEOHead 
        title="Software Release Notes & Changelogs"
        description="Stay updated with Eurosia Buildnex ERP releases. Learn about WebAssembly SQLite optimizations, dual status event arbiters, and cellular reminders."
        keywords="software release notes, construction ERP updates, builder changelogs, offline sync revisions, WASM data optimizers"
        canonicalUrl={canonicalUrl}
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-r from-[#11135e] to-black text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(204,26,47,0.1)_1px,transparent_1px)] [background-size:24px_24px] opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-4">
          <span className="text-[11px] font-bold text-brand-red tracking-widest uppercase bg-black/40 px-3 py-1 rounded border border-gray-800">
            FIRMWARE CHRONOLOGY
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Eurosia Buildnex System Updates
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-3xl leading-relaxed">
            We continuously refine our synchronization engine, client encryption frameworks, and warehouse registries. Track real-time changes made across all modules.
          </p>
        </div>
      </section>

      {/* Version Notes */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {versions.map((vc, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-3xl p-8 sm:p-12 shadow-sm space-y-6">
              
              {/* Top Meta info */}
              <div className="flex flex-wrap justify-between items-center gap-4 pb-4 border-b border-gray-100">
                <div className="space-y-1">
                  <span className="text-[10px] bg-red-100 text-brand-red font-mono font-bold px-2.5 py-0.5 rounded border border-brand-red/10 lowercase">
                    {vc.badge}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-black mt-2">{vc.version}</h3>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-gray-400 font-mono">
                  <CalendarDays className="w-4 h-4 text-brand-red" />
                  <span>{vc.date}</span>
                </div>
              </div>

              {/* Summary text */}
              <p className="text-xs sm:text-sm text-gray-650 leading-relaxed font-sans mt-4">
                {vc.summary}
              </p>

              {/* Changes lists */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest">Detail Adjustments</h4>
                <div className="grid grid-cols-1 gap-3.5">
                  {vc.changes.map((ch, cidx) => (
                    <div key={cidx} className="flex gap-2.5 items-start text-xs text-slate-800">
                      <CheckCircle2 className="w-4.5 h-4.5 text-brand-red shrink-0 mt-0.5" />
                      <span>{ch}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Newsletter info */}
      <section className="bg-black text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold">Stay Informed of System Updates</h2>
          <p className="text-xs sm:text-sm text-gray-400 max-w-2xl mx-auto">
            Our diagnostic team posts core structural optimizations monthly. Sign up for release alerts.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="bg-brand-red hover:bg-white hover:text-black text-white text-xs font-black px-6 py-3 rounded-lg transition-colors inline-block"
            >
              Sign Up For Dev Newsletters
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
