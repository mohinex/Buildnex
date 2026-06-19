import React from "react";
import { Link } from "react-router-dom";
import { 
  Building, 
  Users, 
  BadgePercent, 
  MessageCircle, 
  CheckCircle2, 
  ArrowRight
} from "lucide-react";
import SEOHead from "../components/ui/SEOHead";

export default function RealEstateManagement() {
  const crmFeatures = [
    {
      title: "Real-time Block Map",
      description: "Visual grid displaying live status of residential flats: Reserved, Booked, Mortgaged, Handed Over, or Available.",
      icon: Building
    },
    {
      title: "Customer CRM Ledger",
      description: "Unify customer profiles, down-payment installments, bank mortgages, registry tax logs, and legal title checks in one dossier.",
      icon: Users
    },
    {
      title: "Automated Milestone Billing",
      description: "Ties billing installments directly to on-site roof casting checkins or floor completions instead of calendar durations.",
      icon: BadgePercent
    },
    {
      title: "Direct WhatsApp Reminder Streams",
      description: "Push invoice updates, receipt logs, and due warnings automatically through direct cellular WhatsApp API streams.",
      icon: MessageCircle
    }
  ];

  const canonicalUrl = `${window.location.origin}/real-estate-management`;

  return (
    <div className="bg-white min-h-screen text-left font-sans" id="real-estate-management-page">
      <SEOHead 
        title="Real Estate Developer ERP & Sales CRM Ledger"
        description="Streamline customer flat bookings, down-payment milestones, installment schedules, and WhatsApp warnings. Direct offline CRM tools for property brokers."
        keywords="real estate ERP, flat reservation system, CRM ledger for builders, property broker software, township billing engine"
        canonicalUrl={canonicalUrl}
      />

      {/* Hero Header with Design System constraints */}
      <section className="bg-brand-navy text-white py-16 lg:py-24 relative overflow-hidden" id="developer-hero">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:24px_24px] opacity-65"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-6">
          <div className="inline-flex items-center gap-2 bg-black/40 border border-white/10 px-3.5 py-1.5 rounded text-xs font-bold text-brand-red uppercase tracking-wider">
            <Building className="w-4 h-4 animate-pulse text-brand-red" />
            Module 02: Commercial Developers
          </div>
          
          <h1 className="text-[36px] sm:text-[48px] lg:text-[64px] font-extrabold tracking-tight max-w-4xl leading-[1.1] text-white">
            Integrated Real Estate CRM
          </h1>
          
          <p className="text-sm sm:text-base lg:text-lg text-[#dbeafe] max-w-3xl leading-[1.7] font-normal">
            Eliminate double-booking conflicts and stop recovering payments on credit. Eurosia Buildnex connects physical structural progress with property sales, ensuring billing reminders trigger exactly as on-site slabs are poured.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-2 text-xs font-bold">
            <Link
              to="/request-demo"
              className="bg-brand-red hover:bg-black text-white px-6 py-3.5 rounded-lg transition-colors border border-transparent hover:border-white/10"
            >
              Book Developer Demo Trial
            </Link>
            <Link
              to="/features"
              className="bg-white/10 hover:bg-white/20 border border-white/10 text-white px-6 py-3.5 rounded-lg transition-colors"
            >
              Learn Feature Matrix
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Solver Feature Matrix */}
      <section className="py-20 bg-light-gray border-b border-border-gray" id="developer-matrix">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Visual Allotment Mock interface */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-brand-red uppercase tracking-widest pl-2">Live Unit Grid</h3>
              
              <div className="bg-white p-6 rounded-lg border border-border-gray shadow-sm space-y-6">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-brand-black uppercase">TOWER B - LIVE INVENTORY STATUS</span>
                  <span className="text-[10px] bg-brand-navy text-white px-2.5 py-1 rounded font-bold uppercase font-mono">14 Floors</span>
                </div>
                
                {/* 12-flat grid diagram */}
                <div className="grid grid-cols-4 gap-3 text-center font-mono text-[10px] font-bold">
                  <div className="p-3 rounded bg-emerald-50 border border-emerald-200 text-emerald-800 flex flex-col justify-between">
                    <span>101-A</span>
                    <span className="text-[8px] bg-emerald-600 text-white rounded mt-1 p-0.5">AVAIL</span>
                  </div>
                  <div className="p-3 rounded bg-red-50 border border-brand-red/20 text-brand-red flex flex-col justify-between">
                    <span>102-A</span>
                    <span className="text-[8px] bg-brand-red text-white rounded mt-1 p-0.5">SOLD</span>
                  </div>
                  <div className="p-3 rounded bg-amber-50 border border-amber-200 text-amber-800 flex flex-col justify-between">
                    <span>103-A</span>
                    <span className="text-[8px] bg-amber-600 text-white rounded mt-1 p-0.5">RSVD</span>
                  </div>
                  <div className="p-3 rounded bg-red-50 border border-brand-red/20 text-brand-red flex flex-col justify-between">
                    <span>104-A</span>
                    <span className="text-[8px] bg-brand-red text-white rounded mt-1 p-0.5">SOLD</span>
                  </div>
                  
                  <div className="p-3 rounded bg-emerald-50 border border-emerald-200 text-emerald-800 flex flex-col justify-between">
                    <span>201-B</span>
                    <span className="text-[8px] bg-emerald-600 text-white rounded mt-1 p-0.5">AVAIL</span>
                  </div>
                  <div className="p-3 rounded bg-emerald-50 border border-emerald-200 text-emerald-800 flex flex-col justify-between">
                    <span>202-B</span>
                    <span className="text-[8px] bg-emerald-600 text-white rounded mt-1 p-0.5">AVAIL</span>
                  </div>
                  <div className="p-3 rounded bg-red-50 border border-brand-red/20 text-brand-red flex flex-col justify-between">
                    <span>203-B</span>
                    <span className="text-[8px] bg-brand-red text-white rounded mt-1 p-0.5">SOLD</span>
                  </div>
                  <div className="p-3 rounded bg-emerald-50 border border-emerald-200 text-emerald-800 flex flex-col justify-between">
                    <span>204-B</span>
                    <span className="text-[8px] bg-emerald-600 text-white rounded mt-1 p-0.5">AVAIL</span>
                  </div>
                </div>

                <div className="p-4 bg-[#f8fafc] rounded text-xs space-y-2 border border-border-gray">
                  <div className="flex gap-2 items-center text-text-gray text-[10px]">
                    <div className="w-2.5 h-2.5 rounded bg-amber-500"></div> Reserved locally offline by Agent #05 on client-handset (no connection).
                  </div>
                  <div className="flex gap-2 items-center text-text-gray text-[10px]">
                    <div className="w-2.5 h-2.5 rounded bg-brand-red"></div> Automated SMS reminder queue booked for due installment.
                  </div>
                </div>
              </div>
            </div>

            {/* Explanatory blocks */}
            <div className="space-y-6">
              <span className="text-xs font-bold text-brand-navy uppercase tracking-wider">Event-driven milestones</span>
              
              <h2 className="text-[28px] sm:text-[32px] lg:text-[40px] font-bold text-brand-black tracking-tight leading-tight">
                Stop Building On Credit
              </h2>
              
              <p className="text-sm sm:text-base text-text-gray leading-[1.7] font-sans">
                Real estate companies are often trapped in manual cash collection loops. If heavy monsoons halt work on-site, clients may delay payments, causing friction across accounts. Eurosia Buildnex synchronizes on-site project inspections with the CRM billing desk, triggering installments instantly when work packages are completed.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex gap-3 items-start text-xs sm:text-sm text-brand-black font-sans">
                  <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Eliminate double-allotment disputes.</span>
                </div>
                <div className="flex gap-3 items-start text-xs sm:text-sm text-brand-black font-sans">
                  <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Accelerate receipt recoveries of client arrears.</span>
                </div>
                <div className="flex gap-3 items-start text-xs sm:text-sm text-brand-black font-sans">
                  <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Empower property brokers with offline unit checks.</span>
                </div>
                <div className="flex gap-3 items-start text-xs sm:text-sm text-brand-black font-sans">
                  <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Secure client records inside encrypted storage.</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Grid Architecture list */}
      <section className="py-20 bg-white" id="developer-features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold text-brand-navy uppercase tracking-widest">Built for developers</span>
            <h2 className="text-[28px] sm:text-[32px] lg:text-[40px] font-bold text-brand-black tracking-tight leading-tight">Reservation To Deed Transfer Flow</h2>
            <p className="text-sm sm:text-base text-text-gray font-sans">
              Eurosia Buildnex coordinates sales lead pipelines, property booking approvals, bank transactions, and legal transfer schedules in one enterprise dashboard.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {crmFeatures.map((feat, idx) => (
              <div key={idx} className="p-8 bg-white border border-border-gray hover:border-brand-red/30 rounded-lg shadow-sm hover:shadow-md transition-all text-left flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-red-50 text-brand-red group-hover:bg-brand-red group-hover:text-white rounded flex items-center justify-center transition-colors duration-200">
                    <feat.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-sm sm:text-base text-brand-black group-hover:text-brand-red transition-colors">{feat.title}</h3>
                  <p className="text-xs sm:text-sm text-text-gray leading-[1.7] font-sans">{feat.description}</p>
                </div>
                <div className="pt-4 flex items-center gap-1.5 text-xs text-brand-navy font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  See Ledger Walkthrough <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate bottom banner matching dark section criteria */}
      <section className="bg-[#050505] text-[#cbd5e1] py-20 text-center relative overflow-hidden" id="developer-cta">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:24px_24px] opacity-70"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
          <h2 className="text-[28px] sm:text-[32px] lg:text-[40px] font-bold text-white leading-tight">Ready to Boost Your Real Estate Cashflow?</h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl mx-auto leading-[1.7]">
            Book an assessment session with the Eurosia Buildnex ERP team. We will show you how progress-linked invoicing increases cash recovery by up to 21%.
          </p>
          <div className="flex justify-center gap-4 pt-2 text-xs font-bold">
            <Link
              to="/request-demo"
              className="bg-brand-red hover:bg-white hover:text-black text-white px-6 py-3.5 rounded-lg transition-colors border border-transparent"
            >
              Secure Free Sandbox Session
            </Link>
            <Link
              to="/contact"
              className="border border-white/10 hover:border-white hover:bg-white/5 text-gray-300 px-6 py-3.5 rounded-lg transition-colors"
            >
              Speak to Local Specialist
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
