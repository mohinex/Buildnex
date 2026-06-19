import { ShieldAlert, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function PrivacyPolicy() {
  return (
    <div className="bg-slate-50 min-h-screen text-left font-sans py-16">
      <SEO 
        title="Privacy Statement & Compliance Guard"
        description="Review comprehensive security compliance information, localized SQLite browser caching models, and database telemetry storage policies of Eurosia Buildnex ERP."
        keywords="builder app security, erp encryption standards, SQLite browser security, GDPR Dhaka bangladesh"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Link to="/" className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-brand-red mb-8">
          <ArrowLeft className="w-4 h-4" /> Go Back Home
        </Link>

        <div className="bg-white border border-gray-200 rounded-3xl p-8 sm:p-12 shadow-sm space-y-6">
          <div className="flex justify-between items-center pb-6 border-b border-gray-100 flex-wrap gap-2">
            <div>
              <span className="text-[10px] font-bold font-mono text-brand-red uppercase tracking-wider bg-red-50 px-2 py-0.5 rounded">Compliance Unit</span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-black mt-3">Privacy &amp; Data Stewardship Statement</h1>
            </div>
            <p className="text-[10px] font-mono text-gray-400">Effective: June 2026</p>
          </div>

          <div className="space-y-6 text-xs sm:text-sm text-gray-600 leading-relaxed">
            <h3 className="font-bold text-base text-black flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-brand-red" /> 1. Information Stewardship &amp; Decency
            </h3>
            <p>
              Under the corporate direction of Eurosia Technologies Ltd. (Dhaka, Bangladesh), we treat builder client bookings, payment tracking registries, and on-site material logs with absolute accountability and non-segregation guarantees. We promise never to trade, sell, or leverage your operational databases.
            </p>

            <h3 className="font-bold text-base text-black flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-brand-red" /> 2. Localized SQLite Browser Encryption Standard
            </h3>
            <p>
              When site crew personnel enter cement counts or piece-rate wages in disconnected environments, calculations write directly to client-side browser files (stored via WebAssembly SQLite wrappers). This block operates completely offline. All local information is hashed immediately using <strong>AES-256 standard protocols</strong>.
            </p>

            <h3 className="font-bold text-base text-black flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-brand-red" /> 3. Automated Event Payload Caches
            </h3>
            <p>
              When a network signal is recovered, Eurosia Buildnex bundles compressed event logs. These packets transmit over HTTPS layers directly to the dedicated corporate server instance. Packets represent atomic edits (e.g. "Flat booking reserved") rather than complete database sets, safeguarding your network costs.
            </p>

            <p className="text-[11px] text-gray-400 font-mono pt-4 border-t border-gray-100 uppercase">
              Corporate Registry: Eurosia Technologies Ltd. Dhaka, Bangladesh &bull; info@eurosia.com.bd
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
