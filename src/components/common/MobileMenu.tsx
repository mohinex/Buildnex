import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  X, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp,
  Cpu, 
  Building, 
  KeyRound, 
  Layers, 
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
  PhoneCall
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  phone: string;
}

export default function MobileMenu({ isOpen, onClose, phone }: MobileMenuProps) {
  const location = useLocation();
  const [featuresExpanded, setFeaturesExpanded] = useState(false);
  const [resourcesExpanded, setResourcesExpanded] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const featureItems = [
    { name: "Civil Operations & ERP", path: "/construction-erp", icon: Cpu },
    { name: "Sales CRM & Allotment", path: "/real-estate-management", icon: Building },
    { name: "Seat & Device Licenses", path: "/license-management", icon: KeyRound },
    { name: "Multi-Company Conglomerate", path: "/multi-company", icon: Layers },
    { name: "Security & Compliance", path: "/security", icon: ShieldCheck }
  ];

  const resourceItems = [
    { name: "Case Studies", path: "/case-studies", icon: Award },
    { name: "Downloads", path: "/downloads", icon: Download },
    { name: "Release Notes", path: "/release-notes", icon: FileText },
    { name: "Documentation", path: "/documentation", icon: BookOpen },
    { name: "Careers", path: "/careers", icon: Briefcase },
    { name: "Partners", path: "/partners", icon: Handshake },
    { name: "FAQs", path: "/faq", icon: HelpCircle },
    { name: "Blog Feed", path: "/blog", icon: FileCode2 }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop screen */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black z-40 lg:hidden"
          />

          {/* Drawer container */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.35 }}
            className="fixed top-0 bottom-0 right-0 w-85 bg-white shadow-2xl z-50 lg:hidden flex flex-col"
            id="mobile-drawer"
          >
            {/* Header Frame */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100 shrink-0 select-none">
              <span className="font-extrabold text-xs tracking-tight text-black">
                NAVIGATION MASTER MENU
              </span>
              <button 
                onClick={onClose}
                className="p-1.5 rounded-lg bg-gray-50 hover:bg-red-50 hover:text-brand-red transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Sitemap links list */}
            <nav className="flex-grow overflow-y-auto p-6 space-y-3 font-sans text-[#11135e] text-left">
              <Link
                to="/"
                onClick={onClose}
                className={`block px-4 py-2.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all ${
                  isActive("/") ? "text-brand-red bg-red-50/70" : "text-gray-700 hover:text-black hover:bg-gray-50"
                }`}
              >
                Home Page
              </Link>

              {/* Collapsible Features Accordion */}
              <div className="space-y-1">
                <button
                  onClick={() => setFeaturesExpanded(!featuresExpanded)}
                  className="w-full flex justify-between items-center px-4 py-2.5 rounded-lg text-xs font-black uppercase tracking-wider text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <span>Features Suites</span>
                  {featuresExpanded ? <ChevronUp className="w-4 h-4 text-brand-red" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
                </button>

                {featuresExpanded && (
                  <div className="pl-4 space-y-1 bg-slate-50 rounded-xl p-2.5 border border-slate-100 grid grid-cols-1 gap-1">
                    {featureItems.map((fi, idx) => (
                      <Link
                        key={idx}
                        to={fi.path}
                        onClick={onClose}
                        className={`p-2 rounded-lg text-[11px] font-bold flex gap-2.5 items-center transition-all ${
                          isActive(fi.path) ? "text-brand-red font-extrabold" : "text-zinc-600 hover:text-black"
                        }`}
                      >
                        <fi.icon className="w-3.5 h-3.5 text-brand-red" />
                        <span>{fi.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/solutions"
                onClick={onClose}
                className={`block px-4 py-2.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all ${
                  isActive("/solutions") ? "text-brand-red bg-red-50/70" : "text-gray-700 hover:text-black hover:bg-gray-50"
                }`}
              >
                Solutions Verticals
              </Link>

              <Link
                to="/offline-first"
                onClick={onClose}
                className={`block px-4 py-2.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all ${
                  isActive("/offline-first") ? "text-brand-red bg-red-50/70" : "text-gray-700 hover:text-black hover:bg-gray-50"
                }`}
              >
                Offline Tech
              </Link>

              <Link
                to="/pricing"
                onClick={onClose}
                className={`block px-4 py-2.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all ${
                  isActive("/pricing") ? "text-brand-red bg-red-50/70" : "text-gray-700 hover:text-black hover:bg-gray-50"
                }`}
              >
                Pricing Plans
              </Link>

              {/* Collapsible Resources Accordion */}
              <div className="space-y-1">
                <button
                  onClick={() => setResourcesExpanded(!resourcesExpanded)}
                  className="w-full flex justify-between items-center px-4 py-2.5 rounded-lg text-xs font-black uppercase tracking-wider text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <span>Resources &amp; Support</span>
                  {resourcesExpanded ? <ChevronUp className="w-4 h-4 text-brand-red" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
                </button>

                {resourcesExpanded && (
                  <div className="pl-4 space-y-1 bg-slate-50 rounded-xl p-2.5 border border-slate-100 grid grid-cols-1 gap-1">
                    {resourceItems.map((ri, idx) => (
                      <Link
                        key={idx}
                        to={ri.path}
                        onClick={onClose}
                        className={`p-2 rounded-lg text-[11px] font-bold flex gap-2.5 items-center transition-all ${
                          isActive(ri.path) ? "text-brand-red font-extrabold" : "text-zinc-600 hover:text-black"
                        }`}
                      >
                        <ri.icon className="w-3.5 h-3.5 text-[#11135e]" />
                        <span>{ri.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/contact"
                onClick={onClose}
                className={`block px-4 py-2.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all ${
                  isActive("/contact") ? "text-brand-red bg-red-50/70" : "text-gray-700 hover:text-black hover:bg-gray-50"
                }`}
              >
                Contact Desk
              </Link>
            </nav>

            {/* Bottom Actions Pin */}
            <div className="p-6 border-t border-gray-100 bg-slate-50 shrink-0 space-y-3.5">
              <button
                onClick={() => {
                  onClose();
                  window.dispatchEvent(new Event("trigger-pwa-install-dialog"));
                }}
                className="w-full flex items-center justify-center gap-1.5 border border-[#cc1a2f]/20 bg-red-50/45 text-[#cc1a2f] hover:bg-neutral-50 text-xs font-bold py-2.5 rounded-lg transition-all font-mono uppercase cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-[#cc1a2f]" /> Install App
              </button>

              <Link
                to="/admin"
                onClick={onClose}
                className="w-full flex items-center justify-center gap-1.5 border border-gray-200 text-gray-700 hover:text-black text-xs font-bold py-2.5 rounded-lg transition-colors font-mono uppercase"
              >
                <Lock className="w-3.5 h-3.5 text-brand-red" /> Secure Login
              </Link>

              <Link
                to="/request-demo"
                onClick={onClose}
                className="block text-center bg-brand-red hover:bg-black text-white font-black text-xs py-3.5 rounded-lg shadow-md tracking-wider transition-all"
              >
                Request Free Demo
              </Link>

              <div className="flex justify-center pt-2">
                <a 
                  href={`tel:${phone}`}
                  className="flex items-center gap-1.5 text-[10px] font-mono text-gray-400 hover:text-brand-red transition-all"
                >
                  <PhoneCall className="w-3.5 h-3.5" /> SUPPORT: {phone}
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
