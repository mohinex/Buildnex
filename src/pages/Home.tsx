import React from "react";
import { Link } from "react-router-dom";
import { 
  Building2, 
  Layers, 
  Users, 
  Wallet, 
  CheckCircle2, 
  CloudLightning, 
  WifiOff, 
  ArrowRight, 
  ShieldCheck, 
  Server, 
  Wrench,
  Sparkles,
  ChevronRight
} from "lucide-react";
import SEO from "../components/SEO";
import { HeroSection } from "../components/sections/HeroSection";
import { StaggerList, StaggerItem } from "../components/ui/MotionWrappers";

export default function Home() {
  const benefits = [
    {
      title: "Real-Time Field Collaboration",
      desc: "Connect your head office with distant muddy excavation fields seamlessly, regardless of local mobile signal quality.",
      icon: Users,
    },
    {
      title: "Automated Dispute Prevention",
      desc: "Instant field entry logs, booking registries, and supplier receipts form an unalterable audit trail for peace of mind.",
      icon: ShieldCheck,
    },
    {
      title: "Granular Financial Visibility",
      desc: "Monitor raw materials, contractor cash outflows, client installments, and projected project margins on-the-fly.",
      icon: Wallet,
    },
    {
      title: "Multi-Company Scalability",
      desc: "Run separate real estate development arms, engineering firms, and holding corporations under a single master cloud tenant.",
      icon: Building2,
    },
  ];

  const corePreviews = [
    {
      title: "Multi-Tier Project Architectures",
      desc: "Model massive township schedules. Track work packages down to individual building structures, concrete pours, individual raw units, and contractor shifts.",
      stats: "0% data drop",
      tag: "Project Control",
    },
    {
      title: "Client & Flat Lifecycle Ledger",
      desc: "Streamline client bookings, dynamic flat pricing allocations, client down-payments, automated SMS reminders, and legal title transfers.",
      stats: "2.4x booking speed",
      tag: "Sales CRM",
    },
    {
      title: "Smart Sync Arbitration Engine",
      desc: "Runs a custom revision-hash conflict arbiter on background threads. Solves simultaneous project revisions in real-time.",
      stats: "Sub-150ms resolved",
      tag: "Offline Sync Engine",
    },
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-left">
      <SEO 
        title="Eurosia Buildnex - Modern Construction Operating System"
        description="Eurosia Buildnex is the complete offline-first smart construction ERP platform for modern builders. Manage project structures, client bookings, sub-contractors, and material costs cleanly."
        keywords="construction erp software, real estate erp software, construction management platform, property management software"
      />

      {/* Hero Section */}
      <HeroSection />

      {/* Product Overview Section */}
      <section className="py-20 lg:py-28 bg-light-gray border-y border-border-gray" id="home-overview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-xs font-bold text-brand-red tracking-widest uppercase">The Buildnex System</h2>
            <p className="text-[28px] sm:text-[32px] lg:text-[40px] font-bold tracking-tight text-brand-navy leading-tight">
              One Unified ERP Platform, No Matter Where The Job Takes You
            </p>
            <p className="text-sm sm:text-base text-text-gray leading-[1.7] font-sans">
              Traditional ERP solutions collapse the minute cellular networks fail. We built Eurosia Buildnex from scratch for the reality of hard construction zones: unstable signals, high remote stress, and multi-team scale.
            </p>
          </div>

          <StaggerList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {corePreviews.map((preview, idx) => (
              <StaggerItem key={idx}>
                <div 
                  className="bg-white border border-border-gray hover:border-brand-red/30 rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300 relative group text-left h-full"
                >
                  <div className="absolute top-6 right-6 text-[10px] font-bold text-brand-navy bg-brand-navy/5 px-2.5 py-1 rounded">
                    {preview.tag}
                  </div>
                  <div className="mb-6 flex items-center justify-center w-12 h-12 rounded bg-brand-red/10 text-brand-red">
                    {idx === 0 ? <Building2 className="w-5 h-5" /> : idx === 1 ? <Users className="w-5 h-5" /> : <CloudLightning className="w-5 h-5" />}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-brand-black mb-2 group-hover:text-brand-red transition-colors">
                    {preview.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-gray leading-[1.7] mb-6">
                    {preview.desc}
                  </p>
                  <div className="pt-4 border-t border-border-gray flex items-center justify-between text-xs text-text-gray font-sans mt-auto">
                    <span>Audited metric</span>
                    <span className="font-bold text-brand-red">{preview.stats}</span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerList>

        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 lg:py-28 bg-white" id="home-benefits">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-5 space-y-6 text-left">
              <span className="text-xs font-bold text-brand-navy tracking-widest uppercase">Engineered for ROI</span>
              <h2 className="text-[28px] sm:text-[32px] lg:text-[40px] font-bold text-brand-black tracking-tight leading-tight">
                Designed to maximize site productivity &amp; corporate cashflows.
              </h2>
              <p className="text-sm sm:text-base text-text-gray leading-[1.7]">
                Construction overhead leaks away slowly due to data discrepancy, tardy supplier bookings, lost site receipts, and billing disputes. Eurosia Buildnex stops the leak at its source by keeping every hand operating on the same master database.
              </p>
              
              <div className="pt-4">
                <Link 
                  to="/solutions" 
                  className="inline-flex items-center gap-2 font-bold text-brand-red hover:text-brand-black transition-all duration-200 text-sm"
                >
                  Explore All Core Modules
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <StaggerList className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              {benefits.map((benefit, idx) => (
                <StaggerItem key={idx}>
                  <div 
                    className="p-6 bg-[#f8fafc] hover:bg-slate-100 rounded-lg transition-all duration-200 border border-border-gray space-y-4 h-full"
                  >
                    <div className="w-10 h-10 rounded bg-brand-navy text-white flex items-center justify-center">
                      <benefit.icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-[#111827] text-sm sm:text-base">{benefit.title}</h3>
                    <p className="text-xs sm:text-sm text-text-gray leading-[1.7]">{benefit.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerList>

          </div>

        </div>
      </section>

      {/* Dynamic Offline Feature Section */}
      <section className="py-20 lg:py-28 bg-brand-navy text-white relative overflow-hidden text-left" id="home-offline">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:32px_32px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 bg-brand-red text-white text-[10px] font-bold px-3 py-1.5 rounded uppercase tracking-wide">
                <WifiOff className="w-3.5 h-3.5" /> Edge technology
              </div>
              <h2 className="text-[28px] sm:text-[32px] lg:text-[40px] font-bold tracking-tight leading-tight text-white">
                Offline-First Is Not A Feature. It Is Our Foundation.
              </h2>
              <p className="text-[#dbeafe] text-sm sm:text-base leading-[1.7] font-normal">
                Most cloud ERP applications fail immediately when cellular networks or Wi-Fi drop at deep concrete basements or distant land clearing projects. Eurosia Buildnex continues to collect, store, query, and structure data without any connection.
              </p>
              
              <ul className="space-y-3.5 pt-2 text-xs sm:text-sm text-slate-200">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" /> <span>Uses fully localized SQLite cache on client browsers &amp; mobile wrappers.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" /> <span>Secure end-to-end local data encryption (AES-256 bit).</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" /> <span>Transparent automated background synchronization on network detection.</span>
                </li>
              </ul>

              <div className="pt-4 flex flex-wrap gap-4 text-xs font-bold">
                <Link
                  to="/offline-first"
                  className="bg-brand-red hover:bg-black text-white px-6 py-3.5 rounded-lg transition-all duration-300"
                >
                  Learn Sync Mechanics
                </Link>
                <Link
                  to="/request-demo"
                  className="bg-white/10 hover:bg-white/20 border border-white/10 text-white px-6 py-3.5 rounded-lg transition-all duration-300"
                >
                  Book Live Sandbox Demo
                </Link>
              </div>
            </div>

            {/* Offline Infographic Box */}
            <div className="lg:col-span-6">
              <div className="bg-black/80 backdrop-blur border border-white/10 rounded-xl p-8 space-y-6 text-sm text-left">
                <h4 className="font-bold text-white text-base">Eurosia Auto-Sync Sequence Map</h4>
                
                <div className="relative border-l border-white/10 pl-6 space-y-6">
                  {/* Step 1 */}
                  <div className="relative">
                    <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-brand-red border-4 border-slate-950"></div>
                    <span className="text-[10px] font-mono font-bold uppercase text-brand-red">01. Standalone Field Operation</span>
                    <p className="text-gray-400 text-xs mt-1 font-sans leading-relaxed">
                      Civil engineers log site activities and material requisitions locally. The data is validated offline against built-in business directives.
                    </p>
                  </div>

                  {/* Step 2 */}
                  <div className="relative">
                    <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-yellow-500 border-4 border-slate-950"></div>
                    <span className="text-[10px] font-mono font-bold uppercase text-yellow-500">02. Micro-Payload Compression</span>
                    <p className="text-gray-400 text-xs mt-1 font-sans leading-relaxed">
                      Modifications are saved to a localized event stream, keeping packet sizes minute. Composed events ensure transmission even from fragile connections.
                    </p>
                  </div>

                  {/* Step 3 */}
                  <div className="relative">
                    <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-950"></div>
                    <span className="text-[10px] font-mono font-bold uppercase text-blue-400">03. Conflict-Free Merging</span>
                    <p className="text-gray-400 text-xs mt-1 font-sans leading-relaxed">
                      Our server-side arbitration routine verifies security signatures, handling conflicts transparently and updating the enterprise core without data failures.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Industries Served Section */}
      <section className="py-20 lg:py-28 bg-white border-b border-border-gray text-left" id="home-industries">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-4">
            <div className="max-w-2xl space-y-4">
              <span className="text-xs font-bold text-brand-red tracking-widest uppercase">Target Audiences</span>
              <h2 className="text-[28px] sm:text-[32px] lg:text-[40px] font-bold tracking-tight text-brand-black">
                Built For The Entire Construction Ecosystem
              </h2>
              <p className="text-sm sm:text-base text-text-gray font-sans">
                Whether you manage high-rise commercial structures, massive industrial projects, or residential development townships, we match your operation models.
              </p>
            </div>
            <Link
              to="/solutions"
              className="bg-light-gray hover:bg-black hover:text-white text-brand-black font-bold text-xs px-6 py-3.5 rounded-lg border border-border-gray transition-all"
            >
              Learn More Solutions
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 border border-border-gray bg-light-gray rounded-xl space-y-4">
              <div className="w-12 h-12 rounded bg-[#11135e]/5 text-brand-navy flex items-center justify-center">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#111827]">Real Estate Developers</h3>
              <p className="text-xs sm:text-sm text-text-gray leading-[1.7] font-sans">
                Drive sales directly! Fully integrated CRM to track customer payments, unit bookings, flat registrations, installment notifications, and occupancy handovers.
              </p>
            </div>

            <div className="p-8 border border-border-gray bg-light-gray rounded-xl space-y-4">
              <div className="w-12 h-12 rounded bg-amber-500/5 text-amber-655 text-yellow-600 flex items-center justify-center">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#111827]">Construction Contractors</h3>
              <p className="text-xs sm:text-sm text-text-gray leading-[1.7] font-sans">
                Control field costs. Accurately model task progress, concrete pours, sub-contractor daily rollups, material logs, and heavy machine operating schedules.
              </p>
            </div>

            <div className="p-8 border border-border-gray bg-light-gray rounded-xl space-y-4">
              <div className="w-12 h-12 rounded bg-emerald-55/5 text-emerald-600 bg-emerald-500/5 flex items-center justify-center">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#111827]">Civil Engineering Firms</h3>
              <p className="text-xs sm:text-sm text-text-gray leading-[1.7] font-sans">
                Achieve absolute legal compliance. Store detailed material testing logs, daily inspection rolls, health and safety forms, and architectural design maps.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28 bg-[#f8fafc] text-left" id="home-testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-bold text-brand-red tracking-widest uppercase">TESTIMONIALS</span>
            <p className="text-[28px] sm:text-[32px] lg:text-[40px] font-bold text-brand-black tracking-tight">
              Trusted by Top Contractors and Real Estate Leaders
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-border-gray p-8 rounded-lg shadow-sm space-y-6">
              <p className="text-text-gray leading-[1.7] italic text-xs sm:text-sm font-sans font-medium">
                &ldquo;Eurosia Buildnex changed our real estate township reporting completely. Before Buildnex, our site agents struggled on unstable rural edge connections. Now we have 100% compliance with local offline entry. Our accounting matches reality with no delayed data.&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-brand-navy font-bold text-xs text-white flex items-center justify-center">
                  AH
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[111827]">Engr. Atikur Rahman</h4>
                  <p className="text-xs text-text-gray font-sans">Managing Director, Rahman Real Estate &amp; Construction</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-border-gray p-8 rounded-lg shadow-sm space-y-6">
              <p className="text-text-gray leading-[1.7] italic text-xs sm:text-sm font-sans font-medium">
                &ldquo;With projects across 14 remote river-dredging and bridge alignment centers, network stability was our primary adversary. Buildnex runs flawlessly. The engineers simply book material invoices on site, and the system synchs in the evening once back at corporate.&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-brand-navy font-bold text-xs text-white flex items-center justify-center">
                  MS
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[111827]">M. Solaiman</h4>
                  <p className="text-xs text-text-gray font-sans">Chief Project Director, Royal Coastal Infrastructure Ltd.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Call to Action Section - Styled matching "dark section" requirements */}
      <section className="bg-[#050505] text-[#cbd5e1] relative py-20 lg:py-28 overflow-hidden text-center" id="home-cta">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-red via-brand-navy to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:24px_24px] opacity-70"></div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-8">
          <span className="text-xs font-bold text-brand-red tracking-widest uppercase">TAKE CONTROL OF YOUR PROJECTS</span>
          <h2 className="text-[28px] sm:text-[32px] lg:text-[40px] font-bold text-white tracking-tight leading-tight">
            Stop Data Losses. Empower Your Builders and Field Crews Today.
          </h2>
          <p className="text-[16px] sm:text-[18px] leading-[1.7] text-slate-300 max-w-2xl mx-auto font-sans">
            Ready to explore Eurosia Buildnex offline smart ERP? Let our dedicated construction workflow analysts provide a tailored demonstration based on your operational modules.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 text-xs font-bold">
            <Link
              to="/request-demo"
              className="w-full sm:w-auto bg-brand-red hover:bg-white hover:text-black text-white text-center px-8 py-4 rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center gap-2 border border-transparent"
            >
              Schedule My Workflow Session
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto border border-white/10 hover:border-white hover:bg-white/5 text-gray-300 text-center px-8 py-4 rounded-lg transition-all duration-300"
            >
              Speak to Local Office
            </Link>
          </div>

          <p className="text-[11px] text-gray-500 font-mono">
            Support: +8801711408725 &bull; WhatsApp: +8801709371514 &bull; email: support@eurosia.com.bd
          </p>
        </div>
      </section>
    </div>
  );
}
