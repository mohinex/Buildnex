import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Building2, 
  Award, 
  Handshake, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  Mail 
} from "lucide-react";
import SEOHead from "../components/ui/SEOHead";

export default function Partners() {
  const [partnerForm, setPartnerForm] = useState({
    name: "",
    email: "",
    company: "",
    partnerType: "reseller"
  });
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setPartnerForm({ name: "", email: "", company: "", partnerType: "reseller" });
    setTimeout(() => setSuccess(false), 5000);
  };

  const programs = [
    {
      title: "Value-Added Resellers",
      description: "Incorporate Eurosia Buildnex seat licenses and SQLite sync modules into your proprietary regional ERP configurations for civil builders.",
      reward: "Up to 25% recurring margin shares"
    },
    {
      title: "Civil Consultancies",
      description: "Recommend state-standard offline-first compliance tools to horizontals land survey projects and municipal township engineers.",
      reward: "Earn verified referral honors"
    },
    {
      title: "Implementation Partners",
      description: "Manage physical device activations, biometric active directory locks configurations, and sqlite database setups on location sites.",
      reward: "SaaS consulting retainers"
    }
  ];

  const canonicalUrl = `${window.location.origin}/partners`;

  return (
    <div className="bg-white min-h-screen text-left font-sans" id="partners-page">
      <SEOHead 
        title="Resellers & Implementation Partner Program"
        description="Partner with Eurosia Buildnex to distribute local SQLite-WASM construction ERP engines. Access technical certificates, sandbox configurations, and cash rewards."
        keywords="construction ERP partner, reseller business programs, builder software referrals, civil consulting certification"
        canonicalUrl={canonicalUrl}
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-r from-slate-900 to-black text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(204,26,47,0.12)_1px,transparent_1px)] [background-size:24px_24px] opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-4">
          <span className="text-[11px] font-bold text-brand-red tracking-widest uppercase bg-black/40 px-3 py-1 rounded border border-gray-800">
            STRATEGIC COVENANTS
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Eurosia Buildnex Certified Partner Ecosystem
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-3xl leading-relaxed">
            Expand your corporate scope by distributing our SOC-2 compliant structural ledger platforms to real estate developers, bridge builders, and aggregate quarries globally.
          </p>
        </div>
      </section>

      {/* Program Tracks Grid */}
      <section className="py-20 bg-slate-50 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left program cards */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl font-extrabold text-black pl-2">Strategic Integration Pathways</h2>

              <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                {programs.map((prog, idx) => (
                  <div key={idx} className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm space-y-4">
                    <div className="flex gap-3.5 items-center">
                      <div className="w-10 h-10 bg-red-50 text-brand-red rounded-lg flex items-center justify-center">
                        <Handshake className="w-5 h-5" />
                      </div>
                      <h3 className="font-extrabold text-[#11135e] text-base">{prog.title}</h3>
                    </div>

                    <p className="text-xs text-gray-500 leading-relaxed font-sans">{prog.description}</p>
                    <div className="pt-2 flex items-center gap-2 text-xs text-brand-red font-bold font-mono">
                      <Award className="w-4 h-4" /> {prog.reward}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Application slots */}
            <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-gray-200 shadow-md space-y-6">
              <div>
                <span className="text-xs font-mono font-bold text-brand-red uppercase">Submit Partner Application</span>
                <h3 className="text-lg font-black text-black">Apply for certification</h3>
                <p className="text-xs text-slate-500 mt-1">Our strategic integration directors will follow up with verified corporate application dossiers.</p>
              </div>

              {success && (
                <div className="p-4 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-xl text-xs flex gap-2.5 items-center">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>Covenant inquiry submitted! An integration director is planning code assessments with your team.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
                <div className="space-y-1">
                  <label className="font-bold text-gray-700">Full Name</label>
                  <input 
                    type="text" 
                    required
                    value={partnerForm.name}
                    onChange={e => setPartnerForm({...partnerForm, name: e.target.value})}
                    placeholder="e.g. Engr. Solaiman"
                    className="w-full p-3 rounded-lg border border-gray-200 text-black focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red bg-white"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-gray-700">Corporate Email</label>
                  <input 
                    type="email" 
                    required
                    value={partnerForm.email}
                    onChange={e => setPartnerForm({...partnerForm, email: e.target.value})}
                    placeholder="solaiman@coastalinfra.net"
                    className="w-full p-3 rounded-lg border border-gray-200 text-black focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red bg-white"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-gray-700">Company Legal Name</label>
                  <input 
                    type="text" 
                    required
                    value={partnerForm.company}
                    onChange={e => setPartnerForm({...partnerForm, company: e.target.value})}
                    placeholder="Coastal Infrastructure Group"
                    className="w-full p-3 rounded-lg border border-gray-200 text-black focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red bg-white"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-gray-700">Partner Category Track</label>
                  <select 
                    value={partnerForm.partnerType}
                    onChange={e => setPartnerForm({...partnerForm, partnerType: e.target.value})}
                    className="w-full p-3 rounded-lg border border-gray-200 text-black focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red bg-white"
                  >
                    <option value="reseller">Value-Added Reseller (VAR)</option>
                    <option value="consultancy">Civil Workflow Consultant</option>
                    <option value="implementer">Site Integration Partner</option>
                  </select>
                </div>

                <button 
                  type="submit"
                  className="bg-brand-red hover:bg-black text-white font-extrabold px-6 py-3.5 rounded-lg transition-colors w-full cursor-pointer shadow-md"
                >
                  Initiate Partner Assessments
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
