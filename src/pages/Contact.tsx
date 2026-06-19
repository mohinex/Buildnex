import React, { useState } from "react";
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  Facebook, 
  Linkedin, 
  Twitter, 
  Instagram,
  MapPin, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  Loader2,
  Globe
} from "lucide-react";
import SEO from "../components/SEO";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit contact request. Check server latency.");
      }

      setSuccess(true);
      setFormData({ name: "", email: "", phone: "", company: "", message: "" });
    } catch (err: any) {
      setError(err?.message || "An unhandled connection breakdown occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white min-h-screen text-left font-sans">
      <SEO 
        title="Contact Sales & Support"
        description="Connect with Eurosia Technologies Ltd. Phone: +8801711408725, Whatsapp: +8801709371514, support@eurosia.com.bd. Submit active lead queries."
        keywords="eurosia contact number, bangladesh erp phone, project management support email, constructor client care"
      />

      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-4">
          <span className="text-[11px] font-bold text-brand-red uppercase tracking-widest bg-zinc-900 px-3 py-1 rounded border border-zinc-800">
            Direct Office Communications
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Connect With Our Workflow Engineers
          </h1>
          <p className="text-gray-400 text-sm max-w-2xl leading-relaxed">
            Have questions about system license limits, offline database sizes, or server migration processes? Open a communication ticket below or call our Dhaka headquarters directly.
          </p>
        </div>
      </section>

      {/* Primary Layout Block */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Block: Contact Cards & Info */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Bangladesh Office */}
              <div className="bg-white border border-gray-200 rounded-3xl p-8 space-y-6 shadow-sm">
                <div className="flex justify-between items-center">
                  <h3 className="font-extrabold text-lg text-black">Eurosia Bangladesh Office</h3>
                  <span className="text-[10px] px-2.5 py-0.5 rounded bg-red-50 text-[#cc1a2f] border border-red-500/10 font-bold font-mono">Headquarters</span>
                </div>
                
                <div className="space-y-4 text-xs text-gray-600">
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-red-50 text-brand-red flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-mono">Address</p>
                      <p className="text-gray-800 leading-relaxed font-semibold mt-0.5">
                        Eurosia<br />
                        144/5G, Matikata, Dhaka-1206, Bangladesh<br />
                        <span className="text-gray-400 text-[10px] font-mono">Near ECB Circle</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-red-50 text-brand-red flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-mono">Phone / WhatsApp</p>
                      <div className="flex flex-col gap-1 mt-0.5 font-semibold text-gray-800 text-xs">
                        <a href="tel:+8801711408725" className="hover:text-brand-red transition-all flex items-center gap-1">
                          +880 1711-408725 <span className="text-[9px] bg-slate-100 text-slate-500 px-1 font-mono rounded">Mobile</span>
                        </a>
                        <a href="https://wa.me/8801709371514" target="_blank" rel="noreferrer" className="hover:text-emerald-500 transition-all flex items-center gap-1 text-emerald-600">
                          +880 1709-371514 <span className="text-[9px] bg-emerald-50 text-emerald-600 px-1 font-mono rounded">WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-gray-100 text-gray-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Globe className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-mono">Telephone</p>
                      <div className="flex flex-col gap-1 mt-0.5 text-xs text-gray-800 font-semibold font-mono">
                        <a href="tel:+88028711849" className="hover:text-brand-red transition-all">+880 2 8711849</a>
                        <a href="tel:+88028715960" className="hover:text-brand-red transition-all">+880 2 8715960</a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-mono">National Hotline</p>
                      <a href="tel:09649222222" className="text-sm font-black text-indigo-600 hover:text-brand-red transition-all block mt-0.5">
                        09649-222222
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 text-brand-blue flex items-center justify-center shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-mono">Engineering Support</p>
                      <a href="mailto:support@eurosia.com.bd" className="text-xs font-bold text-gray-800 hover:text-brand-red transition-all mt-0.5 block font-mono">
                        support@eurosia.com.bd
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Malaysia Office */}
              <div className="bg-white border border-gray-200 rounded-3xl p-8 space-y-6 shadow-sm">
                <div className="flex justify-between items-center">
                  <h3 className="font-extrabold text-lg text-black">Eurosia Malaysia Office</h3>
                  <span className="text-[10px] px-2.5 py-0.5 rounded bg-blue-50 text-blue-600 border border-blue-500/10 font-bold font-mono">Regional</span>
                </div>

                <div className="space-y-4 text-xs text-gray-600">
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-mono">Address</p>
                      <p className="text-gray-800 leading-relaxed font-semibold mt-0.5">
                        Shop No. 2, Block 3A<br />
                        City Garden Commercial Centre<br />
                        Taman Nirwana, 68000 Ampang<br />
                        Selangor Darul Ehsan, Malaysia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-mono">Mobile Hotline</p>
                      <a href="tel:+60102181687" className="text-xs font-bold text-gray-800 hover:text-brand-red transition-all block mt-0.5 font-mono">
                        +60 1021-81687
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-mono">Regional WhatsApp</p>
                      <a href="https://wa.me/8801711408725" target="_blank" rel="noreferrer" className="text-xs font-bold text-emerald-600 hover:text-[#cc1a2f] transition-all block mt-0.5 font-mono">
                        +880 1711-408725
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels Card */}
              <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm space-y-4">
                <h4 className="font-extrabold text-xs text-black uppercase tracking-wider font-mono">Social Networks</h4>
                <div className="grid grid-cols-4 gap-3">
                  <a href="https://www.facebook.com/EurosiaOfficial" target="_blank" rel="noreferrer" className="bg-slate-50 border border-gray-100 hover:bg-brand-red hover:text-white flex flex-col items-center justify-center py-3.5 rounded-2xl text-gray-500 transition-all shadow-inner group">
                    <Facebook className="w-5 h-5 mb-1 group-hover:scale-105 transition-transform" />
                    <span className="text-[9px] font-mono font-bold">Facebook</span>
                  </a>
                  <a href="https://x.com/EurosiaOfficial" target="_blank" rel="noreferrer" className="bg-slate-50 border border-gray-100 hover:bg-black hover:text-white flex flex-col items-center justify-center py-3.5 rounded-2xl text-gray-500 transition-all shadow-inner group">
                    <Twitter className="w-5 h-5 mb-1 group-hover:scale-105 transition-transform" />
                    <span className="text-[9px] font-mono font-bold">X/Twitter</span>
                  </a>
                  <a href="https://linkedin.com/in/EurosiaOfficial" target="_blank" rel="noreferrer" className="bg-slate-50 border border-gray-100 hover:bg-[#11135e] hover:text-white flex flex-col items-center justify-center py-3.5 rounded-2xl text-gray-500 transition-all shadow-inner group">
                    <Linkedin className="w-5 h-5 mb-1 group-hover:scale-105 transition-transform" />
                    <span className="text-[9px] font-mono font-bold">LinkedIn</span>
                  </a>
                  <a href="https://www.instagram.com/EurosiaOfficial" target="_blank" rel="noreferrer" className="bg-slate-50 border border-gray-100 hover:bg-rose-500 hover:text-white flex flex-col items-center justify-center py-3.5 rounded-2xl text-gray-500 transition-all shadow-inner group">
                    <Instagram className="w-5 h-5 mb-1 group-hover:scale-105 transition-transform" />
                    <span className="text-[9px] font-mono font-bold">Instagram</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Right Block: Contact Form */}
            <div className="lg:col-span-7 bg-white border border-gray-200 rounded-3xl p-8 sm:p-12 shadow-sm space-y-6">
              <h3 className="font-extrabold text-xl text-black">Inquire About Systems Licensing</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Fill in the details below to trigger an automated CRM ticket. Our Bangladesh customer engineers respond to system queries within 4 business hours.
              </p>

              {/* Success Flag */}
              {success && (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-sm text-emerald-900">Form Captured Dynamically</h5>
                    <p className="text-xs text-emerald-700 mt-1">
                      Thanks! Your submission has been securely written. You can view this entry inside our Marketing management Portal in the footer.
                    </p>
                  </div>
                </div>
              )}

              {/* Error flag */}
              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-sm text-brand-red">Submission Fault</h5>
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
                      placeholder="e.g. Atikur Rahman"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-brand-blue focus:border-brand-blue"
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
                      placeholder="e.g. rahman@company.com"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-brand-blue focus:border-brand-blue"
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
                      placeholder="e.g. +8801711408725"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-brand-blue focus:border-brand-blue"
                    />
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label htmlFor="company" className="font-bold text-gray-400 uppercase tracking-widest font-mono">Builder Organization</label>
                    <input
                      id="company"
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Rahman Properties Ltd."
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-brand-blue focus:border-brand-blue"
                    />
                  </div>
                </div>

                <div className="space-y-1.5 text-left">
                  <label htmlFor="message" className="font-bold text-gray-400 uppercase tracking-widest font-mono">Detailed Inquiry</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your ongoing projects, active site locations, and core module needs..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-brand-blue focus:border-brand-blue"
                  ></textarea>
                </div>

                <div className="pt-2 text-left">
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-black hover:bg-brand-red text-white py-3 px-8 rounded-lg font-bold text-sm shadow-sm transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                        Encrypting Submissions...
                      </>
                    ) : (
                      "Submit Secure Inquiry"
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
