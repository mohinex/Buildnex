import { Link } from "react-router-dom";
import { 
  WifiOff, 
  Database, 
  RefreshCw, 
  Layers, 
  ShieldAlert,
  Network,
  DownloadCloud,
  CheckCircle2,
  Lock,
  ArrowRight
} from "lucide-react";
import SEO from "../components/SEO";

export default function OfflineFirst() {
  const syncSteps = [
    {
      title: "Zero Connection Action Capture",
      desc: "All activities—concrete volume pours, subcontractor advances, unit bookings, cement checks—are verified immediately via local logic and saved to an offline event ledger.",
      icon: WifiOff,
      metric: "0ms UI delay"
    },
    {
      title: "Secure Client SQLite Ledger",
      desc: "Records wait inside a standard, relational SQLite database embedded right in your browser storage. Safe from sudden browser crashes, session resets, or machine shutdowns.",
      icon: Database,
      metric: "AES-256 Encrypted"
    },
    {
      title: "Intelligent Event Batching",
      desc: "The system compresses modifications into tiny, cryptographic event streams. It minimizes mobile protocol overheads so uploads complete on weak, spotty 2G edge networks.",
      icon: Layers,
      metric: "90% packet shrink"
    },
    {
      title: "Revision Hash Reconciliation",
      desc: "When data is restored, our API monitors structural revision histories of target records. Conflict arbitration rules automatically merge non-overlapping changes or alert supervisors of overlaps.",
      icon: RefreshCw,
      metric: "Sub-150ms arbiter"
    }
  ];

  return (
    <div className="bg-white min-h-screen text-left font-sans">
      <SEO 
        title="Offline-First Structural Synchronization Engine"
        description="Deep-dive technical specifications of Eurosia Buildnex sync architecture. Learn how we eliminate packet drop and secure field records offline without active internet."
        keywords="offline erp software, construction offline database, sqlite browser synchronization, conflict resolution erp, cloud sync"
      />

      {/* Main Hero Header */}
      <section className="bg-slate-950 text-white py-20 lg:py-28 relative overflow-hidden stripe-border">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(204,26,47,0.15)_1px,transparent_1px)] [background-size:24px_24px] opacity-70"></div>
        
        {/* Subtle abstract geometric representation of sync */}
        <div className="absolute top-1/2 right-10 -translate-y-1/2 w-96 h-96 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-red/10 via-brand-blue/10 to-transparent blur-2xl rounded-full hidden lg:block"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-1.5 bg-brand-red text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              <WifiOff className="w-3.5 h-3.5 animate-pulse" /> Engineering deep dive
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Work Anywhere. Settle Later. Zero Data Loss Guaranteed.
            </h1>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              In civil construction, &ldquo;the cloud&rdquo; crashes the second you descend below soil lines or enter remote rural territories. Traditional mobile ERPs immediately throw network timeouts and drop unstaged records. 
            </p>
            <p className="text-sm text-gray-400">
              Eurosia Buildnex integrates local relational storage directly inside the client engine. Feel the speed of sub-millisecond local queries, with background synchronization.
            </p>
          </div>

          <div className="lg:col-span-5 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 relative">
            <h3 className="font-extrabold text-white text-sm mb-4 uppercase tracking-wider flex items-center gap-2">
              <Network className="w-4 h-4 text-brand-red" /> Operational Integrity Comparison
            </h3>
            
            <div className="space-y-4 text-xs font-mono">
              <div className="bg-zinc-950 p-3 rounded border border-zinc-850 space-y-2">
                <p className="text-brand-red font-bold uppercase flex items-center justify-between">
                  <span>Traditional Cloud ERP</span> <span className="text-[10px] bg-red-950 text-red-400 px-1 rounded">FAIL</span>
                </p>
                <div className="w-full bg-zinc-900 h-2 rounded overflow-hidden">
                  <div className="h-full w-12 bg-brand-red"></div>
                </div>
                <p className="text-[10px] text-zinc-500 leading-relaxed">
                  Disconnect &rarr; Web Socket Terminated &rarr; UI Freeze &rarr; <strong>Unsaved record deleted (Re-key required)</strong>.
                </p>
              </div>

              <div className="bg-zinc-950 p-3 rounded border border-zinc-850 space-y-2">
                <p className="text-emerald-400 font-bold uppercase flex items-center justify-between">
                  <span>EUROSIA BUILDNEX EDGE</span> <span className="text-[10px] bg-emerald-950 text-emerald-400 px-1 rounded">STABLE</span>
                </p>
                <div className="w-full bg-zinc-900 h-2 rounded overflow-hidden">
                  <div className="h-full w-full bg-brand-blue"></div>
                </div>
                <p className="text-[10px] text-zinc-500 leading-relaxed">
                  Disconnect &rarr; Auto-Switch to SQLite Buffer &rarr; Writes Committed &rarr; Async Handshake &rarr; <strong>Seamless Merge</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sync Step-by-Step Sequence */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="max-w-3xl text-left space-y-4">
            <span className="text-xs font-bold text-brand-blue font-mono uppercase">Synchronization Architecture</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-black">
              Inside The Eurosia Buildnex Offline-First Sync Cycle
            </h2>
            <p className="text-sm text-gray-600">
              We leverage low-level client-side databases paired with a highly structured backend events engine to provide reliable performance. 
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {syncSteps.map((step, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-300"
              >
                <div className="space-y-4 text-left">
                  <div className="w-10 h-10 rounded-lg bg-red-50 text-brand-red flex items-center justify-center font-bold">
                    <step.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-extrabold text-sm text-black">{idx + 1}. {step.title}</h3>
                  <p className="text-[11px] text-gray-500 leading-relaxed">{step.desc}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-[10px] font-mono text-gray-400">
                  <span>Status:</span>
                  <span className="font-bold text-brand-blue uppercase">{step.metric}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Security and Redundancy details */}
      <section className="py-20 bg-white text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-5 relative">
              <div className="bg-slate-900 text-white rounded-2xl p-8 space-y-6">
                <div className="w-10 h-10 bg-brand-red text-white flex items-center justify-center rounded-lg">
                  <Lock className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold">Military-Grade Local Encryption</h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Your business secrets are protected should a corporate smartphone fall into the hands of competitor groups. All local data stored in the browser's persistent key-vault storage is encrypted at rest using AES-256 standard cryptographic hashes.
                </p>
                
                <div className="flex gap-4 items-center">
                  <div className="text-left">
                    <p className="text-brand-red font-black text-xs">AES-256</p>
                    <p className="text-[9px] text-gray-400 font-mono uppercase">Key standard</p>
                  </div>
                  <div className="text-left border-l border-zinc-800 pl-4">
                    <p className="text-white font-black text-xs">9.4/10</p>
                    <p className="text-[9px] text-gray-400 font-mono uppercase">Sec-Audit Score</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold text-brand-red font-mono uppercase">Conflict Resolution Protocol</span>
              <h3 className="text-3xl font-extrabold text-black tracking-tight">
                No Duplicate Invoices. No Erased Payments.
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                When two people modify the same project record, standard databases simply overwrite the latest timestamp, discarding crucial field records. Eurosia Buildnex handles conflicts mathematically.
              </p>
              
              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-sm text-black">Non-Overlapping Fields Auto-Merge</h5>
                    <p className="text-xs text-gray-500 mt-1">If Site Agent A modifies raw cement logs and Agent B updates overall water pipes count under the same master building, the system merges both edits immediately.</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-sm text-black">Audit Version Hash Timestamps</h5>
                    <p className="text-xs text-gray-500 mt-1">If both change the same field, the conflict is staged within our system. A project manager resolves the difference inside the management panel.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <Link
                  to="/request-demo"
                  className="bg-brand-red hover:bg-black text-white text-xs font-bold px-6 py-3.5 rounded-lg flex items-center gap-2 transition-all shrink-0 w-full sm:w-auto justify-center"
                >
                  Request Sync Technical PDF
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="bg-transparent hover:bg-gray-150 text-gray-900 text-xs font-bold px-6 py-3.5 border border-gray-300 rounded-lg transition-all text-center w-full sm:w-auto"
                >
                  Contact Dev Lead
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
