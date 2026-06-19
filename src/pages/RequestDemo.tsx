import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { 
  Building2, 
  CheckCircle2, 
  Users, 
  HelpCircle,
  TrendingUp,
  Loader2,
  CalendarDays,
  ShieldCheck,
  AlertCircle,
  Phone,
  Mail,
  MessageCircle,
  MapPin
} from "lucide-react";
import SEO from "../components/SEO";

export default function RequestDemo() {
  const [searchParams] = useSearchParams();
  const selectedPlanId = searchParams.get("plan") || "pro";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    employeeCount: "11-50",
    primaryNeed: "Project Management & Offline Sync",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (selectedPlanId === "starter") {
      setFormData((prev) => ({ ...prev, primaryNeed: "Starter Partnership Setup" }));
    } else if (selectedPlanId === "pro") {
      setFormData((prev) => ({ ...prev, primaryNeed: "Professional Growth Package" }));
    } else if (selectedPlanId === "enterprise") {
      setFormData((prev) => ({ ...prev, primaryNeed: "Enterprise Custom Holding" }));
    }
  }, [selectedPlanId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Local server timeout during database committing.");
      }

      setSuccess(true);
      // Clean forms
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        employeeCount: "11-50",
        primaryNeed: "Project Management & Offline Sync",
        message: "",
      });
    } catch (err: any) {
      setError(err?.message || "Failed to commit demo registry.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white min-h-screen text-left font-sans">
      <SEO 
        title="Schedule Live Workflow Demo"
        description="Book a live workflow structural demonstration of Eurosia Buildnex ERP. Speak with Bangladesh construction architects on site offline-syncing limits."
        keywords="book erp demo, schedule construction erp session, eurosia free license trial, building system testing"
      />

      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-16 text-center border-b-4 border-brand-red relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(204,26,47,0.1)_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-70"></div>
        <div className="max-w-4xl mx-auto px-4 relative space-y-4">
          <span className="text-[11px] font-bold text-brand-red uppercase tracking-widest bg-zinc-900 border border-zinc-800 px-3 py-1 rounded">
            Interactive Product Tour
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            Schedule A Structured Blueprint Assessment
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Select a convenient workflow module session. Explore how decentralized SQLite databases merge with security hashes in real-time, matching muddy fields with the headquarters executive board.
          </p>
        </div>
      </section>

      {/* Booking split block */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Block: Session details */}
            <div className="lg:col-span-5 space-y-8 text-left">
              <div className="bg-white border border-gray-200 rounded-3xl p-8 space-y-6 shadow-sm">
                <h3 className="font-extrabold text-lg text-black flex items-center gap-2">
                  <CalendarDays className="w-5 h-5 text-brand-red" /> What To Expect
                </h3>

                <ul className="space-y-6 text-xs text-gray-600">
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-black">Aesthetic Sandbox Presentation</h4>
                      <p className="text-gray-500 mt-1">We load simulated townships onto field devices, illustrating immediate offline edits, automated payment schedule models, and material expense slips.</p>
                    </div>
                  </li>

                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-black">Database Sizing &amp; Sync Mapping</h4>
                      <p className="text-gray-500 mt-1">Our civil engineers map local SQLite limits, device wrappers for iOS/Android, and explain multi-company partitions.</p>
                    </div>
                  </li>

                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-black">Transparent Subscription Quote</h4>
                      <p className="text-gray-500 mt-1">Receive direct license seat structures based explicitly on ongoing concrete square-foot projections.</p>
                    </div>
                  </li>
                </ul>

                <div className="pt-6 border-t border-gray-100 flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-brand-blue" />
                  <p className="text-[10px] text-gray-400 font-mono">
                    Session Duration: <strong>40 Minutes</strong> &bull; Host: <strong>Dhaka HQ Engr Team</strong>
                  </p>
                </div>
              </div>

              {/* Quick review widget */}
              <div className="p-6 bg-brand-blue rounded-2xl text-white space-y-3">
                <p className="text-xs italic text-blue-100">
                  &ldquo;The live demo let our civil auditors load exact cement requisitions and shut off the office network router instantly. Seeing SQLite resume without single transaction lag sold us the platform.&rdquo;
                </p>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-300">
                  &mdash; Chief Operations, Coastal Bridge Builders
                </p>
              </div>

              {/* Direct corporate desk access */}
              <div className="bg-white border border-gray-200 rounded-3xl p-6 space-y-4 shadow-sm text-left">
                <h4 className="font-extrabold text-sm text-black uppercase tracking-wider font-mono">Urgent Direct Dial-In</h4>
                <p className="text-[11px] text-gray-500 leading-relaxed">
                  Need to bypass the calendar booking pipeline? Reach our engineers directly at our physical helpdesks:
                </p>
                
                <div className="space-y-3 pt-2 text-[11px]">
                  <div className="border-l-2 border-brand-red pl-3 space-y-1">
                    <p className="font-bold text-black text-[10px] uppercase font-mono">Dhaka ECB Circle Desk</p>
                    <a href="tel:09649222222" className="text-brand-red font-semibold hover:underline block flex items-center gap-1.5">
                      <Phone className="w-3 h-3" /> Hotline: 09649-222222
                    </a>
                    <a href="https://wa.me/8801709371514" target="_blank" rel="noreferrer" className="text-emerald-600 font-semibold hover:underline block flex items-center gap-1.5">
                      <MessageCircle className="w-3 h-3" /> +880 1709-371514
                    </a>
                  </div>

                  <div className="border-l-2 border-blue-600 pl-3 space-y-1">
                    <p className="font-bold text-black text-[10px] uppercase font-mono">Kuala Lumpur / Ampang Desk</p>
                    <a href="tel:+60102181687" className="text-blue-600 font-semibold hover:underline block flex items-center gap-1.5">
                      <Phone className="w-3 h-3" /> +60 1021-81687
                    </a>
                    <a href="https://wa.me/8801711408725" target="_blank" rel="noreferrer" className="text-emerald-600 font-semibold hover:underline block flex items-center gap-1.5">
                      <MessageCircle className="w-3 h-3" /> +880 1711-408725
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Block: Live Demo Form */}
            <div className="lg:col-span-7 bg-white border border-gray-200 rounded-3xl p-8 sm:p-12 shadow-sm space-y-6">
              <h3 className="font-extrabold text-xl text-black">Book Your Workflow Blueprint</h3>
              
              {/* Success frame */}
              {success && (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-sm text-emerald-900">Demo Registration Recorded</h5>
                    <p className="text-xs text-emerald-700 mt-1">
                      Success! Your submission has been securely documented into the Eurosia marketing vault. marketing managers can audit this entry inside the Management Portal immediately.
                    </p>
                  </div>
                </div>
              )}

              {/* Error frame */}
              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-sm text-brand-red">DB Commit Block</h5>
                    <p className="text-xs text-red-700 mt-1">{error}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5 text-xs text-gray-700">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="name" className="font-bold text-gray-400 uppercase tracking-widest font-mono">Your Full Name</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Solaiman Karim"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-brand-blue"
                    />
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label htmlFor="email" className="font-bold text-gray-400 uppercase tracking-widest font-mono">Corporate Email</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. solaiman@firm.net"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-brand-blue"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="phone" className="font-bold text-gray-400 uppercase tracking-widest font-mono">Phone Number</label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +8801709371514"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-brand-blue"
                    />
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label htmlFor="company" className="font-bold text-gray-400 uppercase tracking-widest font-mono">Builder Group</label>
                    <input
                      id="company"
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Royal Coastal Infrastructure"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-brand-blue"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="employeeCount" className="font-bold text-gray-400 uppercase tracking-widest font-mono">Staff Seat Density</label>
                    <select
                      id="employeeCount"
                      name="employeeCount"
                      value={formData.employeeCount}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-1 focus:ring-brand-blue"
                    >
                      <option value="1-10">1-10 civil personnel</option>
                      <option value="11-50">11-50 site logins</option>
                      <option value="51-200">51-200 office &amp; fields</option>
                      <option value="200+">200+ Nationwide holding seats</option>
                    </select>
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label htmlFor="primaryNeed" className="font-bold text-gray-400 uppercase tracking-widest font-mono">System Priority Focus</label>
                    <select
                      id="primaryNeed"
                      name="primaryNeed"
                      value={formData.primaryNeed}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-1 focus:ring-brand-blue"
                    >
                      <option value="Project Management & Offline Sync">Project Management &amp; Offline Sync</option>
                      <option value="Sales Flat Booking Ledger">Sales Flat Booking Ledger</option>
                      <option value="Contractor Advance Balance Sheets">Contractor Advances &amp; Pay Ledger</option>
                      <option value="Comprehensive 13-Module ERP">Comprehensive 13-Module Suite</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5 text-left">
                  <label htmlFor="message" className="font-bold text-gray-400 uppercase tracking-widest font-mono">Specific Operational Challenges</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell our structural engineers about the exact soil excavation tracking, client booking delays, or contractor advances issues you manage..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-brand-blue"
                  ></textarea>
                </div>

                <div className="pt-2 text-left">
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-black hover:bg-brand-red text-white py-3.5 px-8 rounded-lg font-bold text-sm shadow-sm transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                        Committing Event Ledger...
                      </>
                    ) : (
                      "Confirm Live Assessment Session"
                    )}
                  </button>
                </div>
              </form>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
