import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, Info, ShieldCheck, HelpCircle, ArrowRight } from "lucide-react";
import SEO from "../components/SEO";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Starter Partnership",
      id: "starter",
      tagline: "For mid-scale builders & growing contractors.",
      monthlyPrice: 149,
      annualPrice: 119,
      seats: "Up to 15 site logins",
      databases: "Single localized db tenant",
      features: [
        "Core Project Management Module",
        "Building Structure Management",
        "Materials & Inventory Logs (Offline)",
        "Contractor advance books tracking",
        "Support: Standard email response < 24h",
        "Synchronizations: Standard SQLite container",
      ],
      notIncluded: [
        "Corporate Buyer CRM integration",
        "Bulk SMS flat booking dispatchers",
        "Enterprise licensing cryptographic keys",
        "Direct 24/7 Phone & Slack SLAs"
      ],
      ctaText: "Get Started Request Quote",
      popular: false
    },
    {
      name: "Professional Growth",
      id: "pro",
      tagline: "For active real estate developer companies.",
      monthlyPrice: 399,
      annualPrice: 329,
      seats: "Up to 50 site logins",
      databases: "Dedicated cloud replica instance",
      features: [
        "All features included in Starter",
        "Real Estate Flat & Unit Asset Ledger",
        "Corporate Buyer CRM Integration",
        "Booking & Installment Automation",
        "Automatic SMS payment receipts queue",
        "Support: Priority Slack & Email < 4h",
        "Advanced background auto-sync arbitration",
      ],
      notIncluded: [
        "Cryptographic licensing seat locks",
        "Dedicated Multi-Company partitions",
        "On-premise Private Cloud hostings"
      ],
      ctaText: "Request Quote Now",
      popular: true
    },
    {
      name: "Enterprise Multi-Firm",
      id: "enterprise",
      tagline: "For nationwide infrastructure holdings.",
      monthlyPrice: "Custom",
      annualPrice: "Custom",
      seats: "Unlimited users",
      databases: "Dedicated regional SQL cluster",
      features: [
        "Complete Unlimited 13-Module Access",
        "Multi-Company Accounting Partitions",
        "Enterprise Licensing Cryptographic seat keys",
        "Custom compliance soil report outputs",
        "Offline document vaults layout integration",
        "On-premise Private server options",
        "Support: Dedicated Technical Success Manager",
        "24/7 Emergency Phone & Engineering Hotline",
      ],
      notIncluded: [],
      ctaText: "Schedule Enterprise Call",
      popular: false
    }
  ];

  const featuresList = [
    { name: "Project Management Module", starter: true, pro: true, enterprise: true },
    { name: "Building Structure Masonry", starter: true, pro: true, enterprise: true },
    { name: "Contractor Advances Management", starter: true, pro: true, enterprise: true },
    { name: "Offline Sync Mechanics", starter: "Standard", pro: "Advanced", enterprise: "Military Custom" },
    { name: "Flat Lease & Sale Ledger", starter: false, pro: true, enterprise: true },
    { name: "CRM Client Records Management", starter: false, pro: true, enterprise: true },
    { name: "Milestone Billing Automations", starter: false, pro: true, enterprise: true },
    { name: "Custom PDF soil certifications", starter: false, pro: false, enterprise: true },
    { name: "Multi-Company Partitioning", starter: false, pro: false, enterprise: true },
    { name: "Dedicated Technical Supervisor", starter: false, pro: false, enterprise: true },
    { name: "SLA Response Times", starter: "24 Hours", pro: "4 Hours", enterprise: "Instant Hotline" },
  ];

  return (
    <div className="bg-white min-h-screen text-left font-sans">
      <SEO 
        title="Pricing & Licensing Comparisons"
        description="Review transparent monthly corporate investment models for Eurosia Buildnex ERP. Custom Starter, Pro and Nationwide holding options."
        keywords="construction erp cost, builder erp licenses, property management pricing, offline accounting pricing"
      />

      {/* Hero Block */}
      <section className="bg-slate-50 border-b border-gray-100 py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#cc1a2f_0.5px,transparent_0.5px)] [background-size:20px_20px] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-6 text-center">
          <span className="text-[11px] font-bold text-brand-red uppercase tracking-widest bg-red-100/60 px-3 py-1 rounded">
            Fair &amp; Transparent Licensing
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-black max-w-4xl mx-auto">
            Choose A Plan Tailored For Your Annual Development Goals
          </h1>
          <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Protect your builder margins and connect your remote workforce. Save up to 20% by purchasing annual licensing schemes.
          </p>

          {/* Toggle Button */}
          <div className="inline-flex items-center gap-3 p-1 bg-gray-150 border border-gray-200 rounded-xl mt-4">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                !isAnnual ? "bg-black text-white shadow" : "text-gray-500 hover:text-black"
              }`}
            >
              Pay Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all relative flex items-center gap-1.5 ${
                isAnnual ? "bg-black text-white shadow" : "text-gray-500 hover:text-black"
              }`}
            >
              Pay Annually
              <span className="bg-brand-red text-white text-[9px] px-1.5 py-0.5 rounded-full uppercase font-black font-semibold animate-pulse">
                -20% Save
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Primary Plans Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {plans.map((plan) => {
              const priceDisplay = isAnnual 
                ? typeof plan.annualPrice === "number" ? `$${plan.annualPrice}` : plan.annualPrice
                : typeof plan.monthlyPrice === "number" ? `$${plan.monthlyPrice}` : plan.monthlyPrice;

              return (
                <div
                  key={plan.id}
                  className={`border rounded-3xl p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300 relative ${
                    plan.popular
                      ? "border-brand-red ring-2 ring-brand-red/20 ring-offset-2 bg-gradient-to-b from-red-50/20 via-white to-white"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-red text-white text-[10px] uppercase font-black tracking-widest px-3 py-1 rounded-full">
                      Most Selected Niche
                    </span>
                  )}

                  {/* Intro Area */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-black">{plan.name}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{plan.tagline}</p>
                    
                    {/* Price Frame */}
                    <div className="py-2 flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold text-brand-blue tracking-tight">{priceDisplay}</span>
                      {typeof priceDisplay === "number" || priceDisplay.startsWith("$") ? (
                        <span className="text-xs text-gray-400 font-mono">/ month</span>
                      ) : null}
                    </div>

                    <div className="text-[11px] font-mono font-bold uppercase tracking-wide bg-slate-50 px-2 py-1.5 rounded flex justify-between">
                      <span className="text-gray-400">Seats:</span>
                      <span className="text-black">{plan.seats}</span>
                    </div>

                    {/* Features list */}
                    <ul className="space-y-3 text-xs pt-4 border-t border-gray-100 text-left">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex gap-2.5 items-start text-gray-700">
                          <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing Action */}
                  <div className="mt-8 pt-4">
                    <Link
                      to={`/request-demo?plan=${plan.id}`}
                      className={`w-full font-bold text-xs py-3 rounded-lg block text-center transition-colors ${
                        plan.popular
                          ? "bg-brand-red hover:bg-black text-white"
                          : "bg-black hover:bg-brand-red text-white"
                      }`}
                    >
                      {plan.ctaText}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Deep-Dive Comparative Matrix */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h3 className="text-xs font-bold text-brand-blue font-mono uppercase">Standardized Comparative Matrix</h3>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black">Granular Seat Features Breakdown</h2>
          </div>

          <div className="overflow-x-auto border border-gray-200 rounded-2xl bg-white shadow-sm">
            <table className="w-full text-sm text-left table-auto">
              <thead className="bg-slate-100 text-xs font-mono text-gray-500 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 font-bold uppercase">Features Matrix</th>
                  <th className="px-6 py-4 font-bold uppercase">Starter Plan</th>
                  <th className="px-6 py-4 font-bold uppercase">Professional</th>
                  <th className="px-6 py-4 font-bold uppercase">Enterprise Suite</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-xs">
                {featuresList.map((f, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50">
                    <td className="px-6 py-4 font-semibold text-black">{f.name}</td>
                    
                    {/* Starter */}
                    <td className="px-6 py-4">
                      {typeof f.starter === "boolean" ? (
                        f.starter ? <Check className="w-4 h-4 text-emerald-500 font-bold" /> : <span className="text-gray-300">-</span>
                      ) : (
                        <span className="font-medium text-gray-600">{f.starter}</span>
                      )}
                    </td>

                    {/* Pro */}
                    <td className="px-6 py-4">
                      {typeof f.pro === "boolean" ? (
                        f.pro ? <Check className="w-4 h-4 text-emerald-500 font-bold" /> : <span className="text-gray-300">-</span>
                      ) : (
                        <span className="font-bold text-black">{f.pro}</span>
                      )}
                    </td>

                    {/* Enterprise */}
                    <td className="px-6 py-4">
                      {typeof f.enterprise === "boolean" ? (
                        f.enterprise ? <Check className="w-4 h-4 text-brand-red font-bold" /> : <span className="text-gray-300">-</span>
                      ) : (
                        <span className="font-bold text-brand-red">{f.enterprise}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* SLA Details Banner */}
      <section className="py-16 bg-white outline-b outline-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <div className="w-12 h-12 bg-red-50 text-brand-red flex items-center justify-center rounded-2xl mx-auto">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-black">Enterprise Hosting &amp; Security Compliance</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            All data records stored under Eurosia Buildnex cloud instances rely on high-grade security vaults including ISO certificate standards, TLS 1.3 socket layer encryption, automated nightly server-state mirrorings, and absolute regulatory GDPR alignment guidelines.
          </p>
          <div className="flex justify-center gap-6 text-xs text-gray-500 font-mono">
            <span>&bull; SOC2 Certified</span>
            <span>&bull; AES_GCM_256 Cryptography</span>
            <span>&bull; ISO-27001 Certified</span>
          </div>
        </div>
      </section>
    </div>
  );
}
