import React from "react";
import { Link } from "react-router-dom";
import { 
  Monitor, 
  Smartphone, 
  Download, 
  ShieldCheck, 
  FileCode, 
  CheckCircle2, 
  HelpCircle 
} from "lucide-react";
import SEOHead from "../components/ui/SEOHead";

export default function Downloads() {
  const downloadItems = [
    {
      platform: "Windows Desktop",
      version: "v4.2.14 LTS",
      size: "82.4 MB",
      extension: "64-bit installer (.exe)",
      icon: Monitor,
      sha: "9B42A4BD32E9D181CC8E9D"
    },
    {
      platform: "Android Field Wrapper",
      version: "v4.2.10 PRO",
      size: "34.1 MB",
      extension: "Google Play & APK Direct download",
      icon: Smartphone,
      sha: "F49D21BEE102A42BD6714E"
    },
    {
      platform: "macOS Civil Client",
      version: "v4.2.12 Beta",
      size: "89.0 MB",
      extension: "Universal disk image (.dmg)",
      icon: Monitor,
      sha: "E19C026BD04598282361BF"
    }
  ];

  const canonicalUrl = `${window.location.origin}/downloads`;

  return (
    <div className="bg-white min-h-screen text-left font-sans" id="downloads-page">
      <SEOHead 
        title="Desktop clients & Mobile APK Downloads"
        description="Download Eurosia Buildnex offline-first software applications. Access high-performance Windows installations, Android wrappers, and macOS DMG drives."
        keywords="download ERP app, construction tablet APK, windows builder installer, mac civil client, offline SQLite storage files"
        canonicalUrl={canonicalUrl}
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-r from-slate-900 to-black text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(204,26,47,0.12)_1px,transparent_1px)] [background-size:24px_24px] opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-4">
          <span className="text-[11px] font-bold text-brand-red tracking-widest uppercase bg-black/40 px-3 py-1 rounded border border-gray-800">
            Client Package index
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Deploy Local High-Performance Clients
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-3xl leading-relaxed">
            Eurosia Buildnex utilizes compiled WebAssembly (WASM) structures to operate directly on devices without central database roundtrips. Select your matching operating platform to install local cache drawers.
          </p>
        </div>
      </section>

      {/* Downloads list Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {downloadItems.map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group">
                <div className="space-y-6">
                  <div className="w-12 h-12 bg-red-50 text-brand-red rounded-xl flex items-center justify-center shadow-inner group-hover:bg-brand-red group-hover:text-white transition-colors duration-200">
                    <item.icon className="w-6 h-6" />
                  </div>

                  <div className="space-y-1">
                    <span className="text-[9px] font-bold text-gray-400 uppercase font-mono">{item.version}</span>
                    <h3 className="text-lg font-black text-black">{item.platform}</h3>
                    <p className="text-xs text-gray-500">{item.extension} &bull; {item.size}</p>
                  </div>

                  <div className="p-3.5 bg-slate-50 border border-slate-100 rounded-lg text-[10px] font-mono text-gray-400 space-y-1">
                    <span className="block text-gray-500 font-bold font-sans">SHA256 Checksum:</span>
                    <span className="break-all">{item.sha}</span>
                  </div>
                </div>

                <div className="pt-8">
                  <button 
                    onClick={() => alert("Client download initiated in simulator. Secure license key required for local activations.")}
                    className="w-full bg-[#11135e] hover:bg-brand-red text-white text-xs font-bold py-3 rounded-lg flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                  >
                    <Download className="w-4 h-4" /> Download Application Installer
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security notice block */}
      <section className="py-16 bg-white border-t border-gray-100 font-sans">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-extrabold text-black">Cryptographically Signed Packages</h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              All installer payloads provided are scanned automatically for threats and signed with dynamic corporate certificates under SOC-2 parameters, ensuring zero malware risks for enterprise builders.
            </p>
          </div>

          <div className="space-y-4 bg-slate-50 border border-slate-100 p-6 rounded-2xl">
            <h4 className="font-bold text-xs text-black font-mono uppercase tracking-wider">Installation Help</h4>
            <div className="space-y-3.5 text-xs text-gray-600">
              <div className="flex gap-2.5 items-start">
                <CheckCircle2 className="w-4.5 h-4.5 text-brand-red shrink-0" />
                <span>Requires active Seat License keys acquired from corporate portals.</span>
              </div>
              <div className="flex gap-2.5 items-start">
                <CheckCircle2 className="w-4.5 h-4.5 text-brand-red shrink-0" />
                <span>Supports Windows 10/11 &amp; Android OS v8.0 and above.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
