import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Award, 
  MapPin, 
  Clock, 
  ChevronRight, 
  CheckCircle2, 
  PlusCircle, 
  Briefcase 
} from "lucide-react";
import SEOHead from "../components/ui/SEOHead";

export default function Careers() {
  const [app, setApp] = useState({
    name: "",
    email: "",
    role: "software",
    message: ""
  });
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setApp({ name: "", email: "", role: "software", message: "" });
    setTimeout(() => setSuccess(false), 5000);
  };

  const positions = [
    {
      title: "Senior SQLite-WASM Systems Architect",
      department: "Engineering",
      location: "Dhaka HQ / Remote",
      type: "Full-Time"
    },
    {
      title: "Enterprise Cybersecurity Director",
      department: "Governance & compliance",
      location: "Dhaka HQ",
      type: "Full-Time"
    },
    {
      title: "Senior Civil Site Support Engineer",
      department: "Client Delivery",
      location: "Sylhet Site Depot",
      type: "Contractual"
    }
  ];

  const canonicalUrl = `${window.location.origin}/careers`;

  return (
    <div className="bg-white min-h-screen text-left font-sans" id="careers-page">
      <SEOHead 
        title="Careers & Open Engineering Positions"
        description="Join Eurosia Buildnex ERP team. Build specialized offline-first SQLite synchronization protocols and military-grade client data protections."
        keywords="construction ERP jobs, senior software engineer vacancy, civil operations careers, databases engineer hiring"
        canonicalUrl={canonicalUrl}
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-r from-slate-900 to-[#11135e] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(204,26,47,0.1)_1px,transparent_1px)] [background-size:24px_24px] opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-4">
          <span className="text-[11px] font-bold text-brand-red tracking-widest uppercase bg-black/40 px-3 py-1 rounded border border-gray-800">
            EMPLOYEE PIPELINES
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Shape The Future Of Construction Technology
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-3xl leading-relaxed">
            Eurosia Buildnex is building the next-generation offline replication protocol designed specifically for muddy excavations and large developers. Join our distributed engineering team.
          </p>
        </div>
      </section>

      {/* Open Positions Grid */}
      <section className="py-20 bg-slate-50 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left positions listings */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl font-extrabold text-black pl-2">Active Engineering Rollups</h2>

              <div className="space-y-4">
                {positions.map((pos, idx) => (
                  <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-6 flex justify-between items-center hover:border-brand-red/20 transition-all shadow-sm">
                    <div className="space-y-2">
                      <span className="text-[9px] bg-red-15 bg-red-50 text-brand-red font-mono font-bold px-2 py-0.5 rounded">{pos.department}</span>
                      <h4 className="font-bold text-sm text-[#11135e]">{pos.title}</h4>
                      <p className="text-[11px] text-gray-400 font-sans flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5" /> {pos.location} &bull; {pos.type}
                      </p>
                    </div>

                    <button 
                      onClick={() => alert(`Applying position: ${pos.title}`)}
                      className="bg-[#11135e] hover:bg-brand-red text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors flex items-center gap-1 shrink-0"
                    >
                      Apply Now <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Quick application form */}
            <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-gray-200 shadow-md space-y-6">
              <div>
                <span className="text-xs font-mono font-bold text-brand-red uppercase">Direct Pipeline</span>
                <h3 className="text-lg font-black text-black">Submit Profile Application</h3>
                <p className="text-xs text-gray-450 mt-1">If your expertise does not map to recent entries, apply directly to our core engineering queue.</p>
              </div>

              {success && (
                <div className="p-4 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-xl text-xs flex gap-2.5 items-center">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>Submission successful! Our human resources team will contact you soon.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
                <div className="space-y-1">
                  <label className="font-bold text-gray-700">Full Name</label>
                  <input 
                    type="text" 
                    required
                    value={app.name}
                    onChange={e => setApp({...app, name: e.target.value})}
                    placeholder="e.g. Tariqul Islam"
                    className="w-full p-3 rounded-lg border border-gray-200 text-black focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red bg-white"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-gray-700">Email Address</label>
                  <input 
                    type="email" 
                    required
                    value={app.email}
                    onChange={e => setApp({...app, email: e.target.value})}
                    placeholder="tariq@islamtownship.org"
                    className="w-full p-3 rounded-lg border border-gray-200 text-black focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red bg-white"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-gray-700">Target Role Category</label>
                  <select 
                    value={app.role}
                    onChange={e => setApp({...app, role: e.target.value})}
                    className="w-full p-3 rounded-lg border border-gray-200 text-black focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red bg-white"
                  >
                    <option value="software">SQLite WASM System / Core Engineering</option>
                    <option value="cybersecurity">Cybersecurity Compliance</option>
                    <option value="client-delivery">On-site Field Implementation Specialist</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-gray-700">Statement of Purpose</label>
                  <textarea 
                    rows={3}
                    required
                    value={app.message}
                    onChange={e => setApp({...app, message: e.target.value})}
                    placeholder="Share brief highlights of your software, database, or civil logistics experience."
                    className="w-full p-3 rounded-lg border border-gray-200 text-black focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red bg-white"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="bg-brand-red hover:bg-black text-white font-extrabold px-6 py-3.5 rounded-lg transition-colors w-full cursor-pointer shadow-md"
                >
                  Submit Profile For Review
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
