import React from "react";
import { Link } from "react-router-dom";
import { 
  Building2, 
  TrendingUp, 
  Clock, 
  Award, 
  ArrowRight, 
  CheckCircle2 
} from "lucide-react";
import SEOHead from "../components/ui/SEOHead";

export default function CaseStudies() {
  const cases = [
    {
      company: "Atik Properties Group",
      location: "Sylhet, Bangladesh",
      title: "Syncing Materials Across Remote Basements",
      metric: "18% cement waste reduced",
      duration: "6 Month Trial",
      challenge: "Site mechanics had zero bandwidth inside subterranean excavations, causing delayed concrete deliveries and paper receipt errors.",
      result: "Tablet SQLite-WASM local inventories ensured concrete checkout matches exact specifications before pouring. Instant background synchronization when site workers resurfaced."
    },
    {
      company: "Royal Coastal Infrastructure",
      location: "Chittagong Port Zone",
      title: "Automated Milestone Installments",
      metric: "21% faster cash collection",
      duration: "12 Month Deployment",
      challenge: "Billing was strictly calendar-based, leading to client payment excuses when monsoons delayed roof casting progress.",
      result: "Eurosia Buildnex tied property CRM billing milestones directly to structural site diaries, generating automated installment alerts strictly when castings were completed."
    },
    {
      company: "Islam Township Holdings",
      location: "Dhaka, Bangladesh",
      title: "Multi-Subsidiary Financial Control",
      metric: "Single ledger rollup in seconds",
      duration: "Permanent Group Deployment",
      challenge: "Forced to merge thousands of disconnected spreadsheets annually across real estate, concrete factories, and sub-contractor brands.",
      result: "Integrated consolidated master ledger workspace, providing separate accounting balance sheets with unified real-time corporate oversight."
    }
  ];

  const canonicalUrl = `${window.location.origin}/case-studies`;

  return (
    <div className="bg-white min-h-screen text-left font-sans" id="case-studies-page">
      <SEOHead 
        title="Customer Success & Case Studies"
        description="See how Eurosia Buildnex ERP helps leading builders reduce concrete inventory wastage by 18% and accelerate developer billing cashflow by 21%."
        keywords="construction customer stories, builder software results, real estate ERP ratings, offline workspace achievements"
        canonicalUrl={canonicalUrl}
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-r from-[#11135e] to-black text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(204,26,47,0.1)_1px,transparent_1px)] [background-size:24px_24px] opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-4">
          <span className="text-[11px] font-bold text-brand-red tracking-widest uppercase bg-black/40 px-3 py-1 rounded border border-gray-800">
            Real Proof of Performance
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            How Builders Scale with Eurosia Buildnex
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-3xl leading-relaxed">
            From rural sand quarries to towering residential high-rises, explore how our offline-first ERP secures millions in yearly transaction value.
          </p>
        </div>
      </section>

      {/* Case studies list */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {cases.map((cs, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-3xl p-8 sm:p-12 shadow-md hover:shadow-xl transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Info bar */}
              <div className="lg:col-span-4 space-y-4">
                <span className="text-[10px] bg-red-100 text-brand-red font-bold font-mono px-2 py-0.5 rounded uppercase tracking-wider">{cs.location}</span>
                <h2 className="text-2xl font-extrabold text-black">{cs.company}</h2>
                
                <div className="pt-4 border-t border-gray-100 space-y-3.5 text-xs text-slate-700">
                  <div className="flex items-center gap-2 text-brand-red font-bold">
                    <TrendingUp className="w-4.5 h-4.5" />
                    <span>{cs.metric}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{cs.duration}</span>
                  </div>
                </div>
              </div>

              {/* Right Content details */}
              <div className="lg:col-span-8 space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-[#11135e]">{cs.title}</h3>
                  <p className="text-xs text-gray-400 font-mono mt-1">Challenge &amp; Resolution</p>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-gray-600 leading-relaxed font-sans">
                  <div>
                    <h4 className="font-extrabold text-[#11135e] text-xs uppercase tracking-wider mb-1">The Dilemma</h4>
                    <p>{cs.challenge}</p>
                  </div>

                  <div className="pt-2">
                    <h4 className="font-extrabold text-emerald-600 text-xs uppercase tracking-wider mb-1">Outcome with Buildnex</h4>
                    <p className="text-black font-semibold bg-emerald-50/50 p-4 rounded-xl border border-emerald-100">{cs.result}</p>
                  </div>
                </div>

                <div className="pt-4 flex items-center">
                  <Link
                    to="/request-demo"
                    className="text-xs font-bold text-brand-red hover:text-black flex items-center gap-1 transition-colors"
                  >
                    Discuss similar workflow setups <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Corporate bottoms */}
      <section className="bg-black text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold">Achieve Structural Efficiency On-Site</h2>
          <p className="text-xs sm:text-sm text-gray-400 max-w-2xl mx-auto">
            Book a 30-minute diagnostic session with our construction workflow engineers to map your corporate processes.
          </p>
          <div className="pt-2">
            <Link
              to="/request-demo"
              className="bg-brand-red hover:bg-white hover:text-black text-white text-xs font-black px-6 py-3 rounded-lg transition-colors inline-block shadow-lg"
            >
              Book My Custom Diagnostic Session
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
