import React, { useState } from "react";
import { CheckSquare, Calendar, Sparkles, AlertCircle } from "lucide-react";
import { submitDemo } from "../../services/api";

export default function DemoRequestForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    employeeCount: "11-50",
    primaryNeed: "Comprehensive 13-Module ERP",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.company) {
      setStatus("error");
      setErrorMessage("Please complete all required fields (*).");
      return;
    }

    setLoading(true);
    setStatus("idle");

    try {
      const ok = await submitDemo(formData);
      if (ok) {
        setStatus("success");
      } else {
        throw new Error("Demonstration queue server error");
      }
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "Could not complete registration. Check connectivity.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 text-white rounded-2xl p-8 shadow-2xl relative" id="demo-request-form-container">
      {status === "success" ? (
        <div className="text-center py-12 space-y-5" id="demo-success-screen">
          <div className="w-16 h-16 bg-brand-red/10 border border-brand-red text-brand-red rounded-full flex items-center justify-center mx-auto shadow-md">
            <Calendar className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-white">Assessment Scheduled!</h3>
          <p className="text-sm text-slate-400 max-w-sm mx-auto leading-relaxed">
            Your demonstration slot is secured. An Eurosia Buildnex integration analyst from our regional division will call you within 24 hours.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-white hover:text-black text-white text-xs font-semibold px-5 py-2.5 rounded-lg transition-colors duration-300"
          >
            Schedule Another Sandbox Slot
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6" id="demo-request-form">
          <div className="text-left space-y-2">
            <div className="inline-flex items-center gap-2 bg-brand-red/15 border border-brand-red/30 px-3 py-1 rounded-full text-[10px] font-black tracking-wider text-brand-red uppercase">
              <Sparkles className="w-3 h-3 text-brand-red animate-pulse" />
              Claim Free Sandbox Trial
            </div>
            <h2 className="text-xl font-extrabold text-white tracking-tight">Request Workflow Assessment</h2>
            <p className="text-xs text-slate-400 font-sans">
              Experience the dual revision sync engine with simulated network losses in real-time.
            </p>
          </div>

          {status === "error" && (
            <div className="p-4 bg-brand-red/10 border border-brand-red/20 text-brand-red rounded-lg text-xs flex items-center gap-2.5">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="text-left space-y-1.5">
              <label htmlFor="name" className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">
                Your Full Name <span className="text-brand-red">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Tariqul Islam"
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red transition-all font-sans"
              />
            </div>

            <div className="text-left space-y-1.5">
              <label htmlFor="email" className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">
                Work Email <span className="text-brand-red">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. tariq@islamtownship.org"
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red transition-all font-sans"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="text-left space-y-1.5">
              <label htmlFor="phone" className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">
                Phone Number <span className="text-brand-red">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. +8801915607080"
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red transition-all font-sans"
              />
            </div>

            <div className="text-left space-y-1.5">
              <label htmlFor="company" className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">
                Firm / Company <span className="text-brand-red">*</span>
              </label>
              <input
                type="text"
                id="company"
                name="company"
                required
                value={formData.company}
                onChange={handleChange}
                placeholder="e.g. Islam Township Holdings"
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red transition-all font-sans"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="text-left space-y-1.5">
              <label htmlFor="employeeCount" className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">
                Total Seat License Count
              </label>
              <select
                id="employeeCount"
                name="employeeCount"
                value={formData.employeeCount}
                onChange={handleChange}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red transition-all font-sans"
              >
                <option value="1-10">1 to 10 builders</option>
                <option value="11-50">11 to 50 builders</option>
                <option value="51-200">51 to 200 builders</option>
                <option value="200+">More than 200 builders</option>
              </select>
            </div>

            <div className="text-left space-y-1.5">
              <label htmlFor="primaryNeed" className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">
                Primary Software Focus
              </label>
              <select
                id="primaryNeed"
                name="primaryNeed"
                value={formData.primaryNeed}
                onChange={handleChange}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red transition-all font-sans"
              >
                <option value="Comprehensive 13-Module ERP">Full 13-Module ERP</option>
                <option value="Sales Flat Booking Ledger">Sales &amp; Flat CRM Ledger</option>
                <option value="Offline Sync Engine">Offline WASM Sync Core</option>
                <option value="Material & progress Audit">Material &amp; subcontractor logs</option>
              </select>
            </div>
          </div>

          <div className="text-left space-y-1.5">
            <label htmlFor="message" className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">
              Additional Requirements
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder="e.g. Any custom system integration requirements or database migrations needed?"
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red transition-all font-sans resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-brand-red hover:bg-white hover:text-black text-white py-4 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 disabled:bg-slate-700 flex items-center justify-center gap-2 shadow-lg"
            id="demo-submit-btn"
          >
            {loading ? (
              <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            ) : (
              <>
                Schedule Sandbox Briefing
                <CheckSquare className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
