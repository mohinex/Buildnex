import React from "react";
import { Link } from "react-router-dom";
import { 
  ShieldCheck, 
  Lock, 
  Key, 
  FileCheck2, 
  Database, 
  Fingerprint, 
  CheckCircle2, 
  Server 
} from "lucide-react";
import SEOHead from "../components/ui/SEOHead";

export default function Security() {
  const securityFeatures = [
    {
      title: "AES-256 Cache Encryption",
      description: "Local browser SQLite-WASM database cache layers are fully secured with client-side military grade AES-256 cryptographic standards.",
      icon: Database
    },
    {
      title: "SSO & Biometric Tokens",
      description: "Integrate active corporate Single Sign-On (SSO), active directory catalogs, and hardware-based biometric verification workflows.",
      icon: Fingerprint
    },
    {
      title: "Compliance Audit Trail",
      description: "Instantly compile ISO 9001/27001 logs, structural core checks, and safety clearances into immutable secure archives.",
      icon: FileCheck2
    },
    {
      title: "Enterprise Row Security",
      description: "Restricts subcontractor data visual views down to exact task assignments, avoiding information pooling risks.",
      icon: Server
    }
  ];

  const canonicalUrl = `${window.location.origin}/security`;

  return (
    <div className="bg-white min-h-screen text-left font-sans" id="security-page">
      <SEOHead 
        title="Security, Privacy & SOC-2 Compliance"
        description="Eurosia Buildnex protects construction data through AES-256 client encryption, SOC-2 compliant logs, and role-based clearance structures."
        keywords="construction data security, SOC-2 compliance, encrypted SQLite WASM, secure offline ERP, biometric active directories"
        canonicalUrl={canonicalUrl}
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-r from-black to-slate-900 text-white py-20 relative overflow-hiddenborder-b-4 border-brand-red">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(204,26,47,0.15)_1px,transparent_1px)] [background-size:24px_24px] opacity-70"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-6">
          <div className="inline-flex items-center gap-2 bg-brand-red/25 border border-brand-red/40 px-3 py-1 rounded-full text-xs font-bold text-brand-red uppercase tracking-wider">
            <Lock className="w-4 h-4 animate-pulse" />
            Security Excellence standards
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight max-w-4xl leading-tight">
            Security &amp; Enterprise Compliance Engineered Locally
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Eurosia Buildnex defends sensitive residential pricing guides, labor advances, material requisitions, and developer CRM history datasets with unyielding local encryption.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              to="/request-demo"
              className="bg-brand-red hover:bg-white hover:text-black text-white text-xs font-black px-6 py-3.5 rounded-lg transition-all shadow-lg shadow-brand-red/10"
            >
              Get Security whitepaper
            </Link>
          </div>
        </div>
      </section>

      {/* Security Contrast Matrix */}
      <section className="py-20 bg-slate-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Explanatory blocks */}
            <div className="space-y-6">
              <span className="text-xs font-mono font-bold text-brand-red uppercase">Compliance Pillars</span>
              <h2 className="text-3xl font-extrabold text-[#11135e] tracking-tight">
                SOC-2 &amp; ISO Audited Architectures
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed font-sans">
                Unlike client-side spreadsheets or unencrypted field apps, Eurosia Buildnex treats security as an architectural constant. All client-side data synchronized across your local network and the master Cloud Run databases is routed through advanced TLS tunnels and validated by decentralized revision-hash arbiters, completely mitigating SQL injections and data intercept attempts.
              </p>
              
              <div className="space-y-3.5">
                <div className="flex gap-3 text-xs text-slate-800 items-start">
                  <CheckCircle2 className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                  <span>ISO 27001 cybersecurity frameworks followed diligently.</span>
                </div>
                <div className="flex gap-3 text-xs text-slate-800 items-start">
                  <CheckCircle2 className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                  <span>E-sign agreements cryptographically certified at signature source.</span>
                </div>
                <div className="flex gap-3 text-xs text-slate-800 items-start">
                  <CheckCircle2 className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                  <span>Immediate cloud-to-local active directory validation sweeps.</span>
                </div>
              </div>
            </div>

            {/* Visual simulation for Security Audit logs */}
            <div className="bg-slate-950 text-[#abb2bf] rounded-3xl p-6 sm:p-8 font-mono text-xs border border-slate-800 shadow-2xl space-y-4">
              <div className="flex justify-between items-center text-[10px] pb-3 border-b border-slate-800">
                <span className="text-brand-red font-bold uppercase flex items-center gap-1.5 font-sans">
                  🛡️ Threat Shield Active
                </span>
                <span className="text-slate-500">Node #SH-9042</span>
              </div>

              <div className="space-y-2 text-[11px]">
                <p className="text-slate-500">[02:14:02] SSE channel verified with master DB cluster...</p>
                <p className="text-emerald-400">&gt; encrypting local tables: sqlite_master: OK (AES-256)</p>
                <p className="text-emerald-400">&gt; checking biometric token status: VERIFIED (ID: admin-rahman)</p>
                <p className="text-yellow-500">&gt; integrity checks: 0 file discrepancies found</p>
                <p className="text-slate-500">&gt; SOC-2 operational entry log committed: ID_84A4BD</p>
              </div>

              <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg text-[10px] space-y-1 text-left">
                <span className="text-white font-bold font-sans">Corporate Security Rating:</span>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden mt-1.5">
                  <div className="h-full bg-brand-red rounded-full w-[96.8%]"></div>
                </div>
                <div className="flex justify-between text-slate-500 text-[9px] pt-1 font-mono">
                  <span>96.8% Safe (AAA Rating)</span>
                  <span>SSL v3.1 Compliant</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Grid Pillars */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="max-w-2xl mx-auto space-y-3 mb-16 select-none">
            <span className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest">Active Protections</span>
            <h2 className="text-3xl font-black text-black">A Modern Approach to Civil Safeguards</h2>
            <p className="text-sm text-gray-500 leading-relaxed font-sans">
              Keep critical business secrets, subcontract ledgers, and property sales transactions highly defended.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityFeatures.map((feat, idx) => (
              <div key={idx} className="p-6 bg-white border border-gray-150 hover:border-brand-red/25 hover:shadow-xl rounded-2xl transition-all text-left flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="w-10 h-10 bg-red-50 text-brand-red group-hover:bg-brand-red group-hover:text-white rounded-lg flex items-center justify-center transition-colors duration-200">
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
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold">Deploy SOC-2 Compliant ERP Today</h2>
          <p className="text-xs sm:text-sm text-gray-400 max-w-2xl mx-auto">
            Speak to our Chief Information Security Officer (CISO) to learn about our corporate data privacy guidelines and cloud security protocols.
          </p>
          <div className="pt-4">
            <Link
              to="/request-demo"
              className="bg-brand-red hover:bg-white hover:text-black text-white text-xs font-black px-6 py-3 rounded-lg transition-colors inline-block"
            >
              Get Free Security Diagnostic Session
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
