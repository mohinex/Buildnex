import { Eye, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function Terms() {
  return (
    <div className="bg-slate-50 min-h-screen text-left font-sans py-16">
      <SEO 
        title="Terms of Service & Licensing Agreements"
        description="Review standard seat limits, software access policies, offline synchronization liabilities, and refund policies under Eurosia Technologies Ltd."
        keywords="Eurosia software license, builder ERP contract terms, construction ERP SLA"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Link to="/" className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-brand-red mb-8">
          <ArrowLeft className="w-4 h-4" /> Go Back Home
        </Link>

        <div className="bg-white border border-gray-200 rounded-3xl p-8 sm:p-12 shadow-sm space-y-6">
          <div className="flex justify-between items-center pb-6 border-b border-gray-100 flex-wrap gap-2">
            <div>
              <span className="text-[10px] font-bold font-mono text-brand-blue uppercase tracking-wider bg-blue-50 px-2 py-0.5 rounded">Licensing Terms</span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-black mt-3">Terms &amp; General License Guidelines</h1>
            </div>
            <p className="text-[10px] font-mono text-gray-400">Effective: June 2026</p>
          </div>

          <div className="space-y-6 text-xs sm:text-sm text-gray-600 leading-relaxed">
            <h3 className="font-bold text-base text-black flex items-center gap-1.5">
              <Eye className="w-4 h-4 text-brand-blue" /> 1. License Seed Entitlements
            </h3>
            <p>
              Users must purchase sufficient active client slots to cover all civil engineering personnel and project coordinators. Logins represent individual physical seats, and cannot be shared across multiple project teams or subcontractor groups. Violations may result in localized offline lockout sequences.
            </p>

            <h3 className="font-bold text-base text-black flex items-center gap-1.5">
              <Eye className="w-4 h-4 text-brand-blue" /> 2. Offline Integrity Limitations
            </h3>
            <p>
              While Eurosia Buildnex compiles clean event histories locally inside WASM container caches to guarantee zero data loss, the underlying operator terminal must synchronize at least once every 30 days. Unsynchronized local browser data exceeding 30 days may trigger secure cloud preservation holds.
            </p>

            <h3 className="font-bold text-base text-black flex items-center gap-1.5">
              <Eye className="w-4 h-4 text-brand-blue" /> 3. Dhaka Jurisdiction &amp; Governing Law
            </h3>
            <p>
              This enterprise platform, associated APIs, database migrations, and blog resources operate under the exclusive legal jurisdiction of Dhaka, Bangladesh courts. Licensing refunds or multi-company litigation procedures align explicitly with localized digital guidelines.
            </p>

            <p className="text-[11px] text-gray-400 font-mono pt-4 border-t border-gray-100 uppercase">
              Parent Entity: Eurosia Technologies Ltd. Dhaka, Bangladesh &bull; secure@eurosia.com.bd
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
