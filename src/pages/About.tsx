import { Link } from "react-router-dom";
import { Building2, Users2, Trophy, Compass, ShieldCheck, ArrowRight, MapPin } from "lucide-react";
import SEO from "../components/SEO";

export default function About() {
  const values = [
    {
      title: "Tactile Field Context",
      desc: "Software designed in comfortable city high-rises fails on remote muddy fields. We test our systems directly in deep excavations, high-temperature masonry decks, and humid bridge paths.",
      icon: Compass,
    },
    {
      title: "Data Stewardship Policy",
      desc: "We consider construction records a crucial capital asset. We reject dark patterns, ensuring zero tracking or client data lock-ins. All records remain completely exportable.",
      icon: ShieldCheck,
    },
    {
      title: "Fair Transparent Economics",
      desc: "We deliver true enterprise pricing clarity. We do not bury server costs in hidden columns. Your quotes map directly to actual active operational seats used.",
      icon: Trophy,
    },
  ];

  return (
    <div className="bg-white min-h-screen text-left font-sans">
      <SEO 
        title="About Us & Corporate History"
        description="Learn the origin story of Eurosia Buildnex ERP, owned by Eurosia Technologies of Dhaka, Bangladesh. Explore our dedicated civil engineering philosophies."
        keywords="eurosia technologies ltd, dhaka bangladesh erp development, construction management mission, builder erp origins"
      />

      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(204,26,47,0.15)_1px,transparent_1px)] [background-size:24px_24px] opacity-70"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-6">
          <span className="text-[11px] font-bold text-brand-red uppercase tracking-widest bg-zinc-900 border border-zinc-800 px-3 py-1 rounded">
            Our Corporate Philosophy
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Connecting Real Estate Visionaries With Hard Site Realities
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-3xl leading-relaxed">
            Eurosia Buildnex is a specialized civil software system owned, developed, and maintained by Eurosia Technologies Ltd. Based in Dhaka, Bangladesh, we solve operational data bottlenecks for complex modern builders worldwide.
          </p>
        </div>
      </section>

      {/* Origin Story Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Story Text */}
            <div className="space-y-6">
              <span className="text-xs font-bold text-brand-red font-mono uppercase">Decade of Field Research</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-black">
                How We Designed The First Offline-First Construction Ledger
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                During large-scale real-estate township builds in secondary zones, our founders observed a critical flaw: site agents lost up to 15% of their working day simply waiting for mobile signal to load accounting entries or dispatch material trucks. 
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                When network drops severed communication, site records fell back to loose papers and pocket diaries. By the time paperwork processed at headquarters, pricing errors and billing disputes had already eaten away profit margins.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                We gathered civil engineers, database specialists, and CRM layout designers to build Eurosia Buildnex—a platform utilizing highly compressed local SQLite storage so builders can process records offline, with background synchronization.
              </p>

              {/* Bangladesh Signature */}
              <div className="p-4 bg-slate-50 border border-gray-200 rounded-xl flex items-center gap-3">
                <MapPin className="w-5 h-5 text-brand-red shrink-0" />
                <p className="text-[11px] text-gray-500 leading-normal">
                  Corporate HQ: <strong>Eurosia Technologies Ltd.</strong>, Dhaka, Bangladesh. Supporting enterprise builders across global operations.
                </p>
              </div>
            </div>

            {/* Stats Infographics */}
            <div className="bg-slate-50 border border-gray-200 rounded-3xl p-8 sm:p-12 space-y-8">
              <h3 className="font-bold text-lg text-black">Buildnex Corporate Milestones</h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <p className="text-3xl font-black text-brand-blue">240+</p>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Civil Projects Managed</p>
                </div>
                <div className="space-y-2 border-l border-gray-200 pl-6">
                  <p className="text-3xl font-black text-brand-red">Dhaka</p>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Headquarters Base</p>
                </div>
                <div className="space-y-2 border-t border-gray-250 pt-4">
                  <p className="text-3xl font-black text-black">1.2M+</p>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Offline Events Merged</p>
                </div>
                <div className="space-y-2 border-l border-gray-200 border-t border-gray-250 pt-4 pl-6">
                  <p className="text-3xl font-black text-brand-blue">Eurosia</p>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Technologies Group</p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200 flex items-center justify-between text-xs text-gray-500">
                <span>Core Code Audits:</span>
                <span className="font-bold text-emerald-600 uppercase">100% SECURE APPROVED</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Corporate Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold text-brand-blue font-mono uppercase">FOUNDING DIRECTIVES</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black">
              The Principles Guarding Our Software Systems
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-gray-100 p-8 rounded-xl shadow-sm space-y-4"
              >
                <div className="w-10 h-10 rounded-lg bg-red-50 text-brand-red flex items-center justify-center">
                  <val.icon className="w-5 h-5 animate-pulse" />
                </div>
                <h3 className="font-bold text-base text-black">{val.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Global Call to Action */}
      <section className="bg-black text-white relative py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h3 className="text-xl sm:text-2xl font-bold">Partner With Modern Builders</h3>
          <p className="text-xs text-gray-400 max-w-xl mx-auto">
            Ready to integrate Eurosia Buildnex into your corporate team workflow? Speak directly with our Bangladesh consulting engineers to set up a free corporate trial.
          </p>
          <div className="pt-4">
            <Link
              to="/request-demo"
              className="bg-brand-red hover:bg-white hover:text-black text-white text-xs font-bold px-6 py-3.5 rounded-lg inline-flex items-center gap-1.5 transition-colors"
            >
              Request Structural Assessment
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
