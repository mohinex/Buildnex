import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  HelpCircle, 
  ChevronRight, 
  Search, 
  CheckCircle2, 
  AlertCircle 
} from "lucide-react";
import SEOHead from "../components/ui/SEOHead";

export default function Support() {
  const [ticket, setTicket] = useState({
    name: "",
    email: "",
    subject: "",
    body: ""
  });
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setTicket({ name: "", email: "", subject: "", body: "" });
    setTimeout(() => setSuccess(false), 5000);
  };

  const supportArticles = [
    {
      title: "Resolving WASM SQLite Caching Discrepancies",
      category: "sync"
    },
    {
      title: "Configuring IMEI Hardware Tokens for Site Supervisors",
      category: "security"
    },
    {
      title: "Setting Up Milestone down-payment Triggers on flat Books",
      category: "CRM"
    },
    {
      title: "Generating ISO Standard Civil Compliance PDFs",
      category: "compliance"
    }
  ];

  const canonicalUrl = `${window.location.origin}/support`;

  return (
    <div className="bg-white min-h-screen text-left font-sans" id="support-page">
      <SEOHead 
        title="Support Center & Technical Helpdesk"
        description="Access direct support hotlines, instant WhatsApp queues, self-service user manuals, and technical ticket submission portals."
        keywords="construction customer support, ERP troubleshoot guides, builder hotlines, SQLite errors sync, real estate CRM help"
        canonicalUrl={canonicalUrl}
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-r from-slate-900 to-[#11135e] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(204,26,47,0.1)_1px,transparent_1px)] [background-size:24px_24px] opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-4">
          <span className="text-[11px] font-bold text-brand-red tracking-widest uppercase bg-black/40 px-3 py-1 rounded border border-gray-800">
            TECHNICAL HELPDESKS
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            How Can Our Engineers Support You?
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-3xl leading-relaxed">
            Eurosia Buildnex provides 24/7 technical oversight for civil builders. Get in touch with our product specialists via phone, email, or direct WhatsApp support loops.
          </p>
        </div>
      </section>

      {/* Direct support options bar */}
      <section className="py-12 bg-slate-900 text-white font-sans border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="p-6 bg-slate-950 rounded-2xl border border-slate-850 flex items-center gap-4">
            <div className="w-11 h-11 bg-brand-red/10 border border-brand-red/30 text-brand-red rounded-xl flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm">Emergency Telephone</h4>
              <p className="text-xs text-gray-400 mt-0.5">+880 1711-408725</p>
            </div>
          </div>

          <div className="p-6 bg-slate-950 rounded-2xl border border-slate-850 flex items-center gap-4">
            <div className="w-11 h-11 bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 rounded-xl flex items-center justify-center shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm">Direct WhatsApp Sync</h4>
              <p className="text-xs text-gray-400 mt-0.5">+880 1709-371514</p>
            </div>
          </div>

          <div className="p-6 bg-slate-950 rounded-2xl border border-slate-850 flex items-center gap-4">
            <div className="w-11 h-11 bg-[#11135e]/20 border border-[#11135e]/40 text-brand-blue rounded-xl flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm">Corporate Emails</h4>
              <p className="text-xs text-gray-400 mt-0.5">support@eurosia.com.bd</p>
            </div>
          </div>

        </div>
      </section>

      {/* Ticket form & Self-serve splits */}
      <section className="py-20 bg-slate-50 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Help Ticket submission form */}
            <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-gray-200 shadow-md space-y-6">
              <div>
                <span className="text-xs font-mono font-bold text-brand-red uppercase">Submit Technical Inquiry</span>
                <h2 className="text-2xl font-extrabold text-black mt-2">Open An Active Helpdesk Ticket</h2>
                <p className="text-xs text-gray-400 mt-1">Our average response rate is under 45 minutes during local business hours.</p>
              </div>

              {success && (
                <div className="p-4 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-xl text-xs flex gap-2.5 items-center">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>Ticket successfully compiled! An administrative specialist has been assigned to your workspace.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-bold text-gray-700">Full Name</label>
                    <input 
                      type="text" 
                      required
                      value={ticket.name}
                      onChange={e => setTicket({...ticket, name: e.target.value})}
                      placeholder="e.g. Engr. Solaiman"
                      className="w-full p-3 rounded-lg border border-gray-200 text-black placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red bg-white"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-gray-700">Email Address</label>
                    <input 
                      type="email" 
                      required
                      value={ticket.email}
                      onChange={e => setTicket({...ticket, email: e.target.value})}
                      placeholder="solaiman@coastalinfra.net"
                      className="w-full p-3 rounded-lg border border-gray-200 text-black placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red bg-white"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-gray-700">Inquiry Subject</label>
                  <input 
                    type="text" 
                    required
                    value={ticket.subject}
                    onChange={e => setTicket({...ticket, subject: e.target.value})}
                    placeholder="e.g. SQLite database validation error on tablet"
                    className="w-full p-3 rounded-lg border border-gray-200 text-black placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red bg-white"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-gray-700">Description of Technical Hardship</label>
                  <textarea 
                    rows={4}
                    required
                    value={ticket.body}
                    onChange={e => setTicket({...ticket, body: e.target.value})}
                    placeholder="Please specify module, handset type, and action taken before error state occurred."
                    className="w-full p-3 rounded-lg border border-gray-200 text-black placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red bg-white"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="bg-brand-red hover:bg-black text-white font-extrabold px-6 py-3.5 rounded-lg transition-colors w-full cursor-pointer"
                >
                  Submit Secure Helpdesk Ticket
                </button>
              </form>
            </div>

            {/* Self-serve FAQs */}
            <div className="lg:col-span-5 space-y-6">
              <h3 className="text-xs font-black font-mono text-gray-400 uppercase tracking-widest pl-2">Self-Service Archives</h3>
              
              <div className="space-y-4">
                {supportArticles.map((art, idx) => (
                  <div key={idx} className="p-5 bg-white border border-gray-200 rounded-2xl flex justify-between items-center group hover:border-[#11135e]/30 transition-all cursor-pointer">
                    <div>
                      <span className="text-[9px] bg-red-50 text-brand-red font-mono font-black px-2 py-0.5 rounded uppercase">{art.category}</span>
                      <h4 className="font-bold text-sm text-black mt-2 group-hover:text-brand-red transition-all">{art.title}</h4>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
