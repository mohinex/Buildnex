import React from "react";
import { Link } from "react-router-dom";
import { 
  KeyRound, 
  Smartphone, 
  Monitor, 
  ShieldCheck, 
  UserX, 
  RefreshCw, 
  CheckCircle2, 
  AlertCircle 
} from "lucide-react";
import SEOHead from "../components/ui/SEOHead";

export default function LicenseManagement() {
  const licenseDetails = [
    {
      title: "seat control",
      description: "Direct control of building licensing seat limits. Easily revoke or transfer licenses to subcontractors instantly.",
      icon: UserX
    },
    {
      title: "Device Verification Key",
      description: "Enforces single-device authentication audits for site inspectors. Prevents password leakage across labor forces.",
      icon: KeyRound
    },
    {
      title: "Multi-Platform Container",
      description: "Cross-platform support for Windows desktops, Android mobile smartphones, and iOS field tablets with unified updates.",
      icon: Smartphone
    },
    {
      title: "Remote Storage Lockout",
      description: "Trigger immediate encryption wipes on missing handsets, protecting sensitive rebar costing logs.",
      icon: ShieldCheck
    }
  ];

  const canonicalUrl = `${window.location.origin}/license-management`;

  return (
    <div className="bg-white min-h-screen text-left font-sans" id="license-management-page">
      <SEOHead 
        title="Seat & Device License Management"
        description="Oversee employee seat licenses, activate on-site smartphone access tokens, and enforce remote device lockouts globally. Eurosia Buildnex administration master console."
        keywords="license management tool, device licensing software, ERP seat token control, mobile secure wipes, builders administration ledger"
        canonicalUrl={canonicalUrl}
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-r from-slate-900 to-black text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(204,26,47,0.12)_1px,transparent_1px)] [background-size:24px_24px] opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-6">
          <div className="inline-flex items-center gap-2 bg-brand-red/20 border border-brand-red/30 px-3 py-1 rounded-full text-xs font-bold text-brand-red uppercase tracking-wider">
            <KeyRound className="w-4 h-4 animate-pulse" />
            Security Administration Module
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight max-w-4xl leading-tight">
            Seat &amp; Connected Device License Controls
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Manage your seat logs with full structural precision. Provision licenses down to specialized civil field sub-contractors and site diaries inspectors, tracking access status across Windows, Android, and tablets.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              to="/request-demo"
              className="bg-brand-red hover:bg-white hover:text-black text-white text-xs font-extrabold px-6 py-3.5 rounded-lg transition-all shadow-lg"
            >
              Demo Admin Console
            </Link>
            <Link
              to="/contact"
              className="border border-slate-700 hover:border-white text-slate-300 text-xs font-bold px-6 py-3.5 rounded-lg transition-colors"
            >
              Contact Sales HQ
            </Link>
          </div>
        </div>
      </section>

      {/* Core Logic Section */}
      <section className="py-20 bg-slate-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Descriptive blocks */}
            <div className="space-y-6">
              <span className="text-xs font-mono font-bold text-brand-red uppercase">Hardware Enforcements</span>
              <h2 className="text-3xl font-extrabold text-black tracking-tight">
                Secure Remote Handsets Tied To Muddy Excavations
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed font-sans">
                site mechanics and material supervisors often misplace mobile tablets on chaotic civil jobsites. Eurosia Buildnex minimizes this threat by binding user accounts directly to unique device identifiers (IMEI tokens). If a device is lost, administrators execute single-button cryptographic wipes instantly, ensuring raw cost codes and client ledgers do not leak.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3.5 text-xs text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                  <span>Enforce single sign-on (SSO) or local token checks.</span>
                </div>
                <div className="flex items-start gap-3.5 text-xs text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                  <span>Map device profiles with GPS track marks.</span>
                </div>
                <div className="flex items-start gap-3.5 text-xs text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                  <span>Instantly lock out subcontract labor shifts past standard timelines.</span>
                </div>
              </div>
            </div>

            {/* Simulated UI Card for Device Provisioning */}
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-xl space-y-6">
              <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest pl-1 font-mono">Administration License Feed</h3>
              
              <div className="space-y-4">
                {/* Device 1 */}
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
                  <div className="flex gap-3 items-center">
                    <div className="w-9 h-9 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center shrink-0">
                      <Smartphone className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs text-black">Atikur Rahman - Galaxy S23</h4>
                      <p className="text-[10px] text-gray-400 mt-0.5">Seat: Administrator (DH-001) &bull; Verified</p>
                    </div>
                  </div>
                  <span className="text-[9px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-black uppercase font-mono">ACTIVE</span>
                </div>

                {/* Device 2 */}
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
                  <div className="flex gap-3 items-center">
                    <div className="w-9 h-9 bg-red-50 text-brand-red rounded-lg flex items-center justify-center shrink-0">
                      <Smartphone className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs text-black">Site Field Tablet - Sylhet Zone</h4>
                      <p className="text-[10px] text-gray-400 mt-0.5">Seat: Site Engineer (SY-042) &bull; Misplaced</p>
                    </div>
                  </div>
                  <button className="text-[9px] bg-brand-red text-white hover:bg-black px-2 py-1 rounded font-black uppercase font-mono transition-all">WIPE &amp; LOCK</button>
                </div>
              </div>

              <p className="text-[11px] text-gray-400 font-sans leading-relaxed text-center italic">
                Device #SY-042 locks cache immediately if offline for more than 72 hours.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Grid Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="max-w-2xl mx-auto space-y-3 mb-16 select-none">
            <span className="text-xs font-black tracking-widest text-[#11135e] uppercase">Security Pillars</span>
            <h2 className="text-3xl font-black text-black">Enterprise Administration Standards</h2>
            <p className="text-sm text-gray-500">
              Maintain full visual command of seat license tokens, compliance audits, and security boundaries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {licenseDetails.map((feat, idx) => (
              <div key={idx} className="p-6 bg-white border border-gray-150 hover:border-brand-red/20 hover:shadow-xl rounded-2xl transition-all text-left flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="w-10 h-10 bg-red-50 text-brand-red group-hover:bg-brand-red group-hover:text-white rounded-lg flex items-center justify-center shadow-inner transition-colors duration-200">
                    <feat.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-sm text-black uppercase tracking-tight">{feat.title}</h3>
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
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold">Secure Your Construction Operations Globally</h2>
          <p className="text-xs sm:text-sm text-gray-400 max-w-2xl mx-auto">
            Ready to deploy Eurosia Buildnex security controls? Let our engineers help configure your corporate active registries.
          </p>
          <div className="pt-4">
            <Link
              to="/request-demo"
              className="bg-brand-red hover:bg-white hover:text-black text-white text-xs font-black px-6 py-3 rounded-lg transition-colors inline-block"
            >
              Get Free Sandbox License Key
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
