import { useState } from "react";
import { Link } from "react-router-dom";
import { HelpCircle, ChevronDown, ChevronUp, Construction, Calendar } from "lucide-react";
import SEO from "../components/SEO";

export default function FAQ() {
  const faqs = [
    {
      q: "Does Eurosia Buildnex function completely without an active internet connection?",
      a: "Yes. Our core framework compiles a lightweight relational SQLite catalog inside the user's browser, allowing engineers or agents to create material receipts, client bookings, and progress rolls. Records buffer locally and auto-synchronize when cellular networks or Wi-Fi are restored.",
      cat: "sync"
    },
    {
      q: "What secure databases execute the offline desktop caching layers?",
      a: "Workflows utilize highly optimized Client SQLite instances transpiled to efficient WebAssembly (WASM). Local stored structures are encrypted at rest with military-grade AES-256 bits, preventing leakages if laptops or phones are lost on active soil sites.",
      cat: "product"
    },
    {
      q: "How does the sync engine handle overlapping or conflicting contractor logs?",
      a: "We maintain discrete revision events which allow our backend sync model to auto-resolve non-linear entries. If two site managers update the same item concurrently, the platform holds both states as conflicted and alerts the supervisor inside the admin panel.",
      cat: "sync"
    },
    {
      q: "Is Eurosia Buildnex owned by a certified technology group?",
      a: "Eurosia Buildnex is owned, developed, and maintained by Eurosia Technologies Ltd. Our corporate headquarters is located at Rangs Proactive block in Dhaka, Bangladesh. We serve active municipal builders and nationwide holding operations.",
      cat: "product"
    },
    {
      q: "Can we isolate separate accounting books for sister construction ventures?",
      a: "Yes. Our Multi-Company partition layer allows holdings to isolate separate brand layouts, logistics columns, and user permissions. Group administrators oversee global activities from a single consolidated master screen.",
      cat: "product"
    },
    {
      q: "What subscription options cover custom physical integrations?",
      a: "We provide Starter Partnerships, Professional Growth sets, and fully tailored Enterprise Holding tiers. We map quotes transparently to the active seat license density your engineering crew uses, without hidden monthly charges.",
      cat: "pricing"
    }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="bg-white min-h-screen text-left font-sans">
      <SEO 
        title="FAQ - System Specifications"
        description="Review detailed technical answers regarding Eurosia Buildnex offline compliance, SQLite WASM caches, and dual-ledger conflict resolution protocols."
        keywords="construction erp questions, how offline database works, WASM database erp, bangladesh erp setup faq"
      />

      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-[11px] font-bold text-brand-red uppercase tracking-widest bg-zinc-950 px-3 py-1 rounded border border-zinc-800">
            Platform Help Desk
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Frequently Answered Platform Inquiries
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Have questions about physical soil test uploads, SQLite synchronization payloads, or subscription seat licensing layers? Explore our core systems checklist below.
          </p>
        </div>
      </section>

      {/* Accordion list */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-4">
            
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div 
                  key={idx} 
                  className="border-b border-gray-100 last:border-b-0 pb-4 last:pb-0"
                >
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full flex justify-between items-center py-4 text-left font-bold text-sm sm:text-base text-gray-900 hover:text-brand-red transition-colors focus:outline-none"
                  >
                    <span className="flex gap-3 items-center">
                      <HelpCircle className="w-5 h-5 text-brand-blue shrink-0" />
                      {faq.q}
                    </span>
                    {isOpen ? <ChevronUp className="w-5 h-5 text-brand-red shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />}
                  </button>

                  {isOpen && (
                    <div className="pl-8 pb-4">
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}

          </div>

          {/* Quick contact trigger */}
          <div className="mt-12 text-center p-8 bg-zinc-950 text-white rounded-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(rgba(204,26,47,0.1)_1px,transparent_1px)] [background-size:20px_20px] opacity-70"></div>
            <div className="relative space-y-4">
              <h4 className="font-bold text-base">Still Have System Inquiries?</h4>
              <p className="text-xs text-gray-400">Our Bangladesh consulting engineers offer individual technical analysis calls.</p>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 bg-brand-red hover:bg-white hover:text-black text-white text-xs font-bold px-6 py-3 rounded-lg transition-colors"
                >
                  Open Direct Support Ticket
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
