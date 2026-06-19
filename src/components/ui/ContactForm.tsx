import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { submitContact } from "../../services/api";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.company || !formData.message) {
      setStatus("error");
      setErrorMessage("Please fill out all required fields to complete submission.");
      return;
    }

    setLoading(true);
    setStatus("idle");

    try {
      const ok = await submitContact(formData);
      if (ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", company: "", message: "" });
      } else {
        throw new Error("System returned non-ok signal");
      }
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-xl relative" id="contact-form-container">
      {status === "success" ? (
        <div className="text-center py-12 space-y-4" id="contact-success-screen">
          <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-sm">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">Message Transmitted!</h3>
          <p className="text-sm text-gray-500 max-w-sm mx-auto leading-relaxed">
            Thank you for reaching out to us. An ERP business consultant from our Dhaka corporate headquarters will contact you shortly.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="inline-flex items-center gap-2 bg-black hover:bg-brand-red text-white text-xs font-semibold px-5 py-2.5 rounded-lg transition-colors duration-300"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6" id="contact-form">
          <div className="text-left">
            <h2 className="text-xl font-extrabold text-black tracking-tight mb-2">Speak directly with building analysts.</h2>
            <p className="text-xs text-gray-500 font-sans">
              Enter your corporate directory credentials. We respect your operational privacy.
            </p>
          </div>

          {status === "error" && (
            <div className="p-4 bg-red-50 border border-red-200 text-red-600 rounded-lg text-xs flex items-center gap-2.5">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="text-left space-y-1.5">
              <label htmlFor="name" className="text-xs font-bold text-gray-700 uppercase tracking-wide">
                Full Name <span className="text-brand-red">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Engr. Atikur Rahman"
                className="w-full bg-slate-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-red focus:bg-white transition-all font-sans"
              />
            </div>

            <div className="text-left space-y-1.5">
              <label htmlFor="email" className="text-xs font-bold text-gray-700 uppercase tracking-wide">
                Work Email <span className="text-brand-red">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. rahman@atikproperties.com"
                className="w-full bg-slate-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-red focus:bg-white transition-all font-sans"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="text-left space-y-1.5">
              <label htmlFor="phone" className="text-xs font-bold text-gray-700 uppercase tracking-wide">
                Phone Number <span className="text-brand-red">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. +8801711408725"
                className="w-full bg-slate-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-red focus:bg-white transition-all font-sans"
              />
            </div>

            <div className="text-left space-y-1.5">
              <label htmlFor="company" className="text-xs font-bold text-gray-700 uppercase tracking-wide">
                Company Name <span className="text-brand-red">*</span>
              </label>
              <input
                type="text"
                id="company"
                name="company"
                required
                value={formData.company}
                onChange={handleChange}
                placeholder="e.g. Rahman Development Group"
                className="w-full bg-slate-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-red focus:bg-white transition-all font-sans"
              />
            </div>
          </div>

          <div className="text-left space-y-1.5">
            <label htmlFor="message" className="text-xs font-bold text-gray-700 uppercase tracking-wide">
              Message Description <span className="text-brand-red">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="e.g. Describe your current remote project location challenges..."
              className="w-full bg-slate-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-red focus:bg-white transition-all font-sans resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black hover:bg-brand-red text-white py-4 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 disabled:bg-gray-400 flex items-center justify-center gap-2 shadow-lg"
            id="contact-submit-btn"
          >
            {loading ? (
              <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            ) : (
              <>
                Transmit Secure Inquiry
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
