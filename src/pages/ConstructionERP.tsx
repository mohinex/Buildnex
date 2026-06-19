import React from "react";
import { Link } from "react-router-dom";
import { 
  Building2, 
  Layers, 
  Wrench, 
  ClipboardCheck, 
  Cpu, 
  ChevronRight,
  TrendingDown, 
  TrendingUp, 
  Zap, 
  WifiOff 
} from "lucide-react";
import SEOHead from "../components/ui/SEOHead";

export default function ConstructionERP() {
  const coreFeatures = [
    {
      title: "13-Module Offline ERP Suite",
      description: "Manage civil, electrical, plumbing, masonry, and finishing operations on field tablets. Sync only when stable networks are restored.",
      icon: Cpu
    },
    {
      title: "Estimate & BOQ Alignment",
      description: "Match concrete, steel, and machinery requisitions against original base models, eliminating cost leakage at storage yards.",
      icon: Layers
    },
    {
      title: "Subcontractor Ledger",
      description: "Auto-calculate piecemeal rates and progressive milestones with cryptographic logs, eliminating paper disputes.",
      icon: Wrench
    },
    {
      title: "Real-Time Field Diary",
      description: "Accelerate site checks, log concrete crush tests, capture structural flaws with photos, and auto-generate compliance archives.",
      icon: ClipboardCheck
    }
  ];

  const canonicalUrl = `${window.location.origin}/construction-erp`;

  return (
    <div className="bg-white min-h-screen text-left font-sans" id="construction-erp-page">
      <SEOHead 
        title="Construction Management System ERP"
        description="Integrate field material requisitions, subcontractor billing, concrete castings, and site diaries offline. Eurosia Buildnex ERP prevents cost overflows."
        keywords="construction ERP system, building management module, builder billing logs, subcontractor sheets, structural cement audits"
        canonicalUrl={canonicalUrl}
      />

      {/* Hero Header matching Design System constraints */}
      <section className="bg-brand-navy text-white py-16 lg:py-24 relative overflow-hidden" id="erp-hero">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:24px_24px] opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-6">
          <div className="inline-flex items-center gap-2 bg-black/40 border border-white/10 px-3.5 py-1.5 rounded text-xs font-bold text-brand-red uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5 animate-pulse text-brand-red" />
            Module 01: Civil Operations
          </div>
          
          <h1 className="text-[36px] sm:text-[48px] lg:text-[64px] font-extrabold tracking-tight max-w-4xl leading-[1.1] text-white">
            Comprehensive Construction ERP
          </h1>
          
          <p className="text-sm sm:text-base lg:text-lg text-[#dbeafe] max-w-3xl leading-[1.7] font-normal">
            Unstable signals should not lock up site records. Eurosia Buildnex ERP brings all requisitions, site diaries, laboratory testing results, and contractor shift allocations offline directly to active excavator zones.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-2 text-xs font-bold">
            <Link
              to="/request-demo"
              className="bg-brand-red hover:bg-black text-white px-6 py-3.5 rounded-lg transition-colors border border-transparent hover:border-white/10"
            >
              Request Sample Materials Sandbox
            </Link>
            <Link
              to="/solutions"
              className="bg-white/10 hover:bg-white/20 border border-white/10 text-white px-6 py-3.5 rounded-lg transition-colors"
            >
              Explore Solutions Index
            </Link>
          </div>
        </div>
      </section>

      {/* Structural Conflict Matrix */}
      <section className="py-20 bg-light-gray border-b border-border-gray" id="erp-conflict">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <span className="text-xs font-bold tracking-widest text-brand-red uppercase font-mono">The Civil Hardship</span>
              
              <h2 className="text-[28px] sm:text-[32px] lg:text-[40px] font-bold text-brand-black tracking-tight leading-tight">
                Eliminate Estimating Drifts Across Excavation Sites
              </h2>
              
              <p className="text-sm sm:text-base text-text-gray leading-[1.7] font-sans">
                Many builders log inventory on paper when working in remote cellars, leading to uncontrolled waste. High-volume purchases like Portland cement, heavy rebar tonnage, and diesel fuels are vulnerable to material leaks.
              </p>
              
              <div className="space-y-4">
                <div className="flex gap-4 p-4 bg-white border border-border-gray rounded-lg shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0">
                    <TrendingDown className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-brand-black">Uncontrolled Over-Requisition</h4>
                    <p className="text-[11px] sm:text-xs text-text-gray mt-1 leading-relaxed">Estimators lose track of cumulative site deliveries, exceeding initial budgets by as much as 18%.</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 bg-white border border-border-gray rounded-lg shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-brand-black">Precision Local Controls</h4>
                    <p className="text-[11px] sm:text-xs text-text-gray mt-1 leading-relaxed">Tablet-based SQLite models instantly verify ordered quantities against specifications offline before release approvals.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Offline interface simulation element */}
            <div className="relative">
              <div className="relative bg-black text-white rounded-lg border border-white/10 shadow-2xl p-6 sm:p-8 font-mono text-[11px]">
                <div className="flex justify-between items-center pb-4 border-b border-white/10 mb-6">
                  <span className="font-bold text-brand-red uppercase flex items-center gap-1.5">
                    <WifiOff className="w-4 h-4" /> Field Mode: Offline
                  </span>
                  <span className="text-gray-500">Node #CEM-9042</span>
                </div>

                <div className="space-y-4 text-left">
                  <div className="bg-neutral-900 rounded-lg p-4 border border-white/5 space-y-2">
                    <div className="flex justify-between text-slate-350 font-bold font-sans">
                      <span>Order #REBAR-024</span>
                      <span className="text-brand-red">BLOCKED</span>
                    </div>
                    <p className="text-[11px] text-gray-400 font-sans leading-relaxed">
                      Requisition of 45 tons of raw steel grade 500W exceeds current Tower B budget limit by 12.4 tons. Please log administrative override.
                    </p>
                  </div>

                  <div className="space-y-1.5 text-emerald-400 font-mono">
                    <p className="text-gray-500">[02:30:11] SQLite Local validation initiated...</p>
                    <p>&gt; checking Tower-B concrete_pours_slab_3: verified (OK)</p>
                    <p>&gt; checking current_aggregate_rebar_weight: drift detected (-12.4t)</p>
                    <p className="text-amber-500">&gt; local event log flagged with supervisor signature: 0x9B42A4</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modular grid features */}
      <section className="py-20 bg-white" id="erp-features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold tracking-widest text-brand-navy uppercase">Features Architecture</span>
            <h2 className="text-[28px] sm:text-[32px] lg:text-[40px] font-bold text-brand-black leading-tight">Built for Unstable Field Environments</h2>
            <p className="text-sm sm:text-base text-text-gray font-sans">Every aspect of the platform has been optimized to offer processing speed, structural data integrity, and extreme usability on actual physical job sites.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreFeatures.map((feat, idx) => (
              <div 
                key={idx} 
                className="p-6 bg-white border border-border-gray hover:border-brand-red/30 hover:shadow-md rounded-lg transition-all text-left group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded bg-brand-red/10 text-brand-red group-hover:bg-brand-red group-hover:text-white flex items-center justify-center transition-all mb-6">
                    <feat.icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-sm sm:text-base text-brand-black mb-2">{feat.title}</h4>
                  <p className="text-xs sm:text-sm text-text-gray leading-[1.7] font-sans">{feat.description}</p>
                </div>
                <div className="pt-4 flex items-center gap-1 text-xs text-brand-red font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn module workflow <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA structured matching dark section */}
      <section className="bg-[#050505] text-[#cbd5e1] py-20 relative overflow-hidden" id="erp-footer-cta">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:24px_24px] opacity-70"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center space-y-6">
          <h2 className="text-[28px] sm:text-[32px] lg:text-[40px] font-bold tracking-tight text-white leading-tight">Accelerate Your Field Logistics Safely</h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl mx-auto leading-[1.7]">
            Experience our 13 fully integrated ERP modules including sub-contractor advances, raw inventory checklists, and laboratory data logs. Book a 30-minute diagnostic briefing.
          </p>
          <div className="pt-4 flex justify-center gap-4 text-xs font-bold">
            <Link
              to="/request-demo"
              className="bg-brand-red hover:bg-white hover:text-black text-white px-6 py-3.5 rounded-lg transition-colors border border-transparent"
            >
              Schedule Instant Demo Box
            </Link>
            <Link
              to="/contact"
              className="border border-white/10 hover:border-white hover:bg-white/5 text-gray-300 px-6 py-3.5 rounded-lg transition-colors"
            >
              Contact Sales HQ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
