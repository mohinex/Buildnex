import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Building2, 
  Wrench, 
  Layers, 
  UserSquare2, 
  Trees, 
  ClipboardCheck,
  Building,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import SEO from "../components/SEO";

export default function Solutions() {
  const industries = [
    {
      id: "real-estate",
      name: "Real Estate Developers",
      icon: Building,
      badge: "Commercial Focus",
      problem: "Traditional systems lack integrated Sales CRM ledgers, causing critical synchronization delays between flat sales bookings, bank disbursals, and on-site handovers.",
      solution: "Provide real estate brokers with offline reservation inputs. Automate scheduled down-payment milestones tied explicitly to actual structural slabs poured.",
      benefits: [
        "Dynamic inventory management with accurate unit orientations.",
        "Automatic SMS & WhatsApp payment reminder queues.",
        "Smooth customer profile transitions from booking to deed handover."
      ]
    },
    {
      id: "const-companies",
      name: "Construction Companies",
      icon: Building2,
      badge: "Civil & Heavy Industrial",
      problem: "Field site engineers cannot access centralized material registries from rural transport or deep foundation excavations, sparking delayed concrete orders.",
      solution: "Local SQLite catalogs support material requisition forms on tablets. Quantities automatically match original project estimates before synchronization.",
      benefits: [
        "Seamless offline tracking of concrete, steel, and fuel dispatches.",
        "Instant cost-code drift alerts compared to base models.",
        "Accurate machinery allocation logs."
      ]
    },
    {
      id: "contractors",
      name: "General Contractors",
      icon: Wrench,
      badge: "Execution Specialists",
      problem: "Sub-contractor advances, piece-rate shifts, and daily progress rollups are logged on paper sheets, resulting in severe accounting differences.",
      solution: "Site managers record contractor daily outputs and labor logs directly on fields without connectivity using clean, rapid visual forms.",
      benefits: [
        "Cryptographic ledger trail on labor shifts output.",
        "Real-time tracking of contractor advance settlements.",
        "Clear progress comparisons between estimated and physical units."
      ]
    },
    {
      id: "engineering",
      name: "Engineering Firms",
      icon: ClipboardCheck,
      badge: "Compliance & Design",
      problem: "Site inspectors must compile detailed compliance audits and material core tests back at hotels, causing delayed safety clearances.",
      solution: "Capture safety check-ins, core testing outputs, and structural photos directly into the offline SQLite applet with instant timestamp validations.",
      benefits: [
        "Instant inspection report compilations with photo markers.",
        "Cryptographic signatures on-the-fly.",
        "Direct offline blueprint checks and vector layers."
      ]
    },
    {
      id: "property-mgmt",
      name: "Property Management Companies",
      icon: Layers,
      badge: "Asset Optimization",
      problem: "Post-handover maintenance ticket logs and lease contracts are segregated from the original builder records, creating double-entry work.",
      solution: "Transition structural schematics, unit records, and owner profiles directly from the sales module into high-end rental management logs.",
      benefits: [
        "Unified tenant ledger with direct payment histories.",
        "Predictive building maintenance scheduling synced to construction specs.",
        "Automated utility billing calculators."
      ]
    },
    {
      id: "land-developers",
      name: "Land Developers",
      icon: Trees,
      badge: "Horizontal Infrastructure",
      problem: "Earthwork, civil surveyor plot boundaries, and drainage works are scattered across broad forest zones with completely dead cellular connectivity.",
      solution: "Map horizontal plot boundaries offline, log earthmoving excavator times, and track surveyor inspection logs on field smartphones.",
      benefits: [
        "Plot inventory and boundaries saved locally.",
        "Direct offline tracking of earth excavation volumes.",
        "Seamless alignment of infrastructure costs across multiple project sectors."
      ]
    }
  ];

  const [activeTab, setActiveTab] = useState(industries[0].id);
  const selectedIndustry = industries.find((ind) => ind.id === activeTab) || industries[0];

  return (
    <div className="bg-white min-h-screen text-left font-sans">
      <SEO 
        title="Solutions by Industry"
        description="Tailored smart Construction ERP architectures for Developer CRM, Civil Engineers, Sub-contractors, Horizontal Land Surveyors, and Property Managers."
        keywords="property management software, real estate development ERP, subcontractor billing tools, land layout survey software"
      />

      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#11135e] to-black text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(204,26,47,0.1)_1px,transparent_1px)] [background-size:24px_24px] opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-4">
          <span className="text-[11px] font-bold text-brand-red tracking-widest uppercase bg-black/40 px-3 py-1 rounded border border-gray-800">
            Enterprise Vertical Profiles
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Tailored Workflows Designed For Your Specific Construction Reality
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-3xl leading-relaxed">
            One size never fits all in construction. Select your category below to see how Eurosia Buildnex aligns and simplifies your specific field and commercial operations.
          </p>
        </div>
      </section>

      {/* Tabged Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Sidebar Navigation */}
            <div className="lg:col-span-4 space-y-3">
              <h3 className="text-xs font-bold font-mono text-gray-400 uppercase tracking-widest pl-2 mb-4">Target Verticals</h3>
              {industries.map((ind) => {
                const isSelected = ind.id === activeTab;
                return (
                  <button
                    key={ind.id}
                    onClick={() => setActiveTab(ind.id)}
                    className={`w-full flex items-center gap-4 p-4 rounded-xl text-left border transition-all duration-200 ${
                      isSelected
                        ? "bg-white border-brand-red/30 shadow-md text-black"
                        : "bg-transparent border-transparent hover:bg-gray-100 text-gray-500"
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                      isSelected ? "bg-brand-red text-white" : "bg-gray-200 text-gray-600"
                    }`}>
                      <ind.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-inherit">{ind.name}</h4>
                      <p className="text-[10px] text-gray-400 mt-0.5">{ind.badge}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Display Body */}
            <div className="lg:col-span-8 bg-white border border-gray-200 rounded-3xl p-8 sm:p-12 shadow-xl space-y-8">
              
              {/* Badge & Title */}
              <div className="flex justify-between items-center pb-6 border-b border-gray-100 flex-wrap gap-2">
                <div>
                  <span className="text-[11px] font-bold text-brand-red font-mono uppercase bg-red-50 px-2.5 py-1 rounded border border-brand-red/10">
                    {selectedIndustry.badge}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-black mt-3">
                    {selectedIndustry.name}
                  </h2>
                </div>
              </div>

              {/* Problem/Solution Contrast */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                <div className="space-y-3">
                  <h4 className="font-extrabold text-sm text-gray-400 uppercase tracking-widest font-mono">The Challenge</h4>
                  <p className="text-gray-600 leading-relaxed text-xs">
                    {selectedIndustry.problem}
                  </p>
                </div>

                <div className="space-y-3 border-l border-gray-100 pl-0 md:pl-8">
                  <h4 className="font-extrabold text-sm text-brand-blue uppercase tracking-widest font-mono">The Buildnex Solution</h4>
                  <p className="text-slate-800 leading-relaxed text-xs">
                    {selectedIndustry.solution}
                  </p>
                </div>
              </div>

              {/* Quantifiable Bullet Benefits */}
              <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 space-y-4">
                <h4 className="text-xs font-bold text-black uppercase tracking-wider">Key Functional Outcomes</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedIndustry.benefits.map((benefit, bIdx) => (
                    <div key={bIdx} className="flex gap-3 text-xs text-gray-700 items-start">
                      <CheckCircle2 className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA Block */}
              <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-gray-500">
                  Ready to map this specific solution to your current corporate models?
                </p>
                <Link
                  to="/request-demo"
                  className="bg-black hover:bg-brand-red text-white text-xs font-bold px-6 py-3 rounded-lg flex items-center gap-1.5 transition-colors shrink-0"
                >
                  Request Customized Live Setup
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
