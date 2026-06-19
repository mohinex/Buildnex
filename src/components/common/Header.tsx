import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Menu, 
  Construction, 
  PhoneCall, 
  ChevronDown, 
  ChevronRight,
  Cpu, 
  Layers, 
  Building, 
  KeyRound, 
  ShieldCheck,
  Award,
  Download,
  FileText,
  BookOpen,
  Briefcase,
  Handshake,
  HelpCircle,
  FileCode2,
  Lock,
  ArrowRight
} from "lucide-react";
import { fetchSettings } from "../../services/api";
import { WebsiteSettings } from "../../types";
import MobileMenu from "./MobileMenu";

const DEFAULT_SETTINGS: WebsiteSettings = {
  phone: "+8801711408725",
  whatsapp: "+8801709371514",
  email: "support@eurosia.com.bd",
  facebook: "https://facebook.com/eurosia",
  linkedin: "https://linkedin.com/company/eurosia",
  x: "https://x.com/eurosia_buildnex",
  logoText: "Eurosia",
  subLogoText: "Buildnex"
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<WebsiteSettings>(DEFAULT_SETTINGS);
  const [activeDropdown, setActiveDropdown] = useState<"features" | "resources" | null>(null);
  const location = useLocation();

  useEffect(() => {
    async function loadHeaderConfig() {
      try {
        const sData = await fetchSettings();
        if (sData) setSettings(sData);
      } catch (err) {
        console.warn("Failed to load header settings, fallback to defaults", err);
      }
    }
    loadHeaderConfig();
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const featureItems = [
    { 
      name: "Civil Operations & ERP", 
      desc: "Requisitions, BOQs, site diaries & subcontractor rollups.",
      path: "/construction-erp", 
      icon: Cpu 
    },
    { 
      name: "Sales CRM & Allotment", 
      desc: "Flat booking, installment triggers & automated billing.",
      path: "/real-estate-management", 
      icon: Building 
    },
    { 
      name: "Seat & Device Licenses", 
      desc: "Administrative locks, remote wipes & hardware tokens.",
      path: "/license-management", 
      icon: KeyRound 
    },
    { 
      name: "Multi-Company Conglomerate", 
      desc: "Real-time master rollup accounting & subsidiary workspaces.",
      path: "/multi-company", 
      icon: Layers 
    },
    { 
      name: "Security & Compliance", 
      desc: "Client AES-256 SQLite encryption, SOC-2 logs & TLS security.",
      path: "/security", 
      icon: ShieldCheck 
    }
  ];

  const resourceItems = [
    { name: "Customer Case Studies", path: "/case-studies", icon: Award },
    { name: "Platform Downloads", path: "/downloads", icon: Download },
    { name: "System Release Notes", path: "/release-notes", icon: FileText },
    { name: "Product Documentation", path: "/documentation", icon: BookOpen },
    { name: "Careers & Open Vacancies", path: "/careers", icon: Briefcase },
    { name: "Certified Partner Tracks", path: "/partners", icon: Handshake },
    { name: "Technical FAQs", path: "/faq", icon: HelpCircle },
    { name: "News & Blog Insights", path: "/blog", icon: FileCode2 }
  ];

  // Close drops when path updates
  useEffect(() => {
    setActiveDropdown(null);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/85 backdrop-blur-md border-b border-gray-100 shadow-sm" id="website-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Frame */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none" id="header-logo">
            <img 
              src="/logo.svg" 
              className="w-10 h-10 object-contain rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105" 
              alt="Eurosia Buildnex Logo" 
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col text-left">
              <span className="font-extrabold text-xl tracking-tight text-black">
                {settings.logoText} <span className="text-brand-red font-black">{settings.subLogoText}</span>
              </span>
              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest leading-none mt-0.5">
                SMART CONSTRUCTION ERP
              </span>
            </div>
          </Link>

          {/* Desktop Sitemap Menu */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              to="/"
              className={`px-3.5 py-2 rounded-md text-sm font-bold transition-all ${
                isActive("/") ? "text-brand-red" : "text-gray-600 hover:text-black hover:bg-slate-50"
              }`}
            >
              Home
            </Link>

            {/* Features Dropdown Host */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown("features")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                className={`px-3.5 py-2 rounded-md text-sm font-bold flex items-center gap-1 transition-all ${
                  activeDropdown === "features" || location.pathname.includes("erp") || location.pathname.includes("management") || location.pathname.includes("security")
                    ? "text-brand-red bg-slate-50" 
                    : "text-gray-600 hover:text-black hover:bg-slate-50"
                }`}
              >
                Features
                <ChevronDown className="w-4 h-4" />
              </button>

              {activeDropdown === "features" && (
                <div className="absolute left-0 mt-0.5 w-[380px] bg-white border border-gray-150 rounded-2xl shadow-xl p-5 text-left grid grid-cols-1 gap-2.5 z-50">
                  <span className="text-[10px] font-black text-gray-400 font-mono uppercase tracking-wider pl-1 mb-1">Civil &amp; Commercial Modules</span>
                  {featureItems.map((fi, idx) => (
                    <Link
                      key={idx}
                      to={fi.path}
                      className="p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-gray-100 flex gap-3.5 items-start transition-all group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-red-50 text-brand-red flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-brand-red group-hover:text-white transition-colors">
                        <fi.icon className="w-4.5 h-4.5" />
                      </div>
                      <div className="space-y-0.5">
                        <h4 className="font-bold text-xs text-black group-hover:text-brand-red transition-colors">{fi.name}</h4>
                        <p className="text-[10px] text-gray-400 leading-relaxed font-sans">{fi.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/solutions"
              className={`px-3.5 py-2 rounded-md text-sm font-bold transition-all ${
                isActive("/solutions") ? "text-brand-red" : "text-gray-600 hover:text-black hover:bg-slate-50"
              }`}
            >
              Solutions
            </Link>

            <Link
              to="/offline-first"
              className={`px-3.5 py-2 rounded-md text-sm font-bold transition-all ${
                isActive("/offline-first") ? "text-brand-red" : "text-gray-600 hover:text-black hover:bg-slate-50"
              }`}
            >
              Technology
            </Link>

            <Link
              to="/pricing"
              className={`px-3.5 py-2 rounded-md text-sm font-bold transition-all ${
                isActive("/pricing") ? "text-brand-red" : "text-gray-600 hover:text-black hover:bg-slate-50"
              }`}
            >
              Pricing
            </Link>

            {/* Resources Dropdown Host */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown("resources")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                className={`px-3.5 py-2 rounded-md text-sm font-bold flex items-center gap-1 transition-all ${
                  activeDropdown === "resources" || location.pathname.includes("blog") || location.pathname.includes("faq") || location.pathname.includes("downloads")
                    ? "text-brand-red bg-slate-50" 
                    : "text-gray-600 hover:text-black hover:bg-slate-50"
                }`}
              >
                Resources
                <ChevronDown className="w-4 h-4" />
              </button>

              {activeDropdown === "resources" && (
                <div className="absolute left-0 mt-0.5 w-[500px] bg-white border border-gray-150 rounded-2xl shadow-xl p-5 text-left grid grid-cols-2 gap-2 z-50">
                  <div className="col-span-2">
                    <span className="text-[10px] font-black text-gray-400 font-mono uppercase tracking-wider pl-1.5 block mb-1">Developer Archives &amp; Support</span>
                  </div>
                  {resourceItems.map((ri, idx) => (
                    <Link
                      key={idx}
                      to={ri.path}
                      className="p-2 rounded-lg hover:bg-slate-50 border border-transparent hover:border-gray-100 flex gap-2.5 items-center transition-all group"
                    >
                      <div className="w-7 h-7 rounded bg-red-50 text-brand-red flex items-center justify-center shrink-0 group-hover:bg-[#11135e] group-hover:text-white transition-colors">
                        <ri.icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[11px] font-bold text-gray-700 group-hover:text-black transition-colors">{ri.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className={`px-3.5 py-2 rounded-md text-sm font-bold transition-all ${
                isActive("/contact") ? "text-brand-red" : "text-gray-600 hover:text-black hover:bg-slate-50"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => window.dispatchEvent(new Event("trigger-pwa-install-dialog"))}
              className="text-xs font-bold text-[#cc1a2f] hover:text-black flex items-center gap-1 font-mono hover:bg-red-50/50 px-3.5 py-2.5 rounded-lg border border-[#cc1a2f]/10 transition-all uppercase cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-[#cc1a2f]" /> Install App
            </button>

            <Link
              to="/admin"
              className="text-xs font-bold text-gray-500 hover:text-brand-red flex items-center gap-1 font-mono hover:bg-slate-50 px-3.5 py-2.5 rounded-lg border border-transparent hover:border-gray-100 transition-all uppercase"
            >
              <Lock className="w-3.5 h-3.5" /> Secure Login
            </Link>

            <Link
              to="/request-demo"
              className="bg-brand-red hover:bg-black text-white text-xs font-extrabold px-5 py-3 rounded-lg shadow-md transition-all duration-300 cursor-pointer"
              id="header-demo-cta"
            >
              Request Free Demo
            </Link>
          </div>

          {/* Mobile Actions Drawer Controller */}
          <div className="flex items-center lg:hidden gap-2">
            <Link
              to="/request-demo"
              className="bg-brand-red hover:bg-black text-white text-[11px] font-black px-3.5 py-2.5 rounded-lg shadow-sm"
            >
              Book Demo
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 bg-gray-50 text-gray-700 hover:text-black hover:bg-gray-100 rounded-lg"
              aria-label="Open sitemap drawer"
              id="header-mobile-toggle"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

        </div>
      </div>

      {/* Render Mobile Navigation sliding drawer drawer component */}
      <MobileMenu 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        phone={settings.phone}
      />
    </header>
  );
}
