import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  Facebook, 
  Linkedin, 
  Twitter, 
  Instagram,
  ShieldCheck, 
  MapPin, 
  Globe
} from "lucide-react";
import { fetchSettings } from "../../services/api";
import { WebsiteSettings } from "../../types";

const DEFAULT_SETTINGS: WebsiteSettings = {
  phone: "+880 1711-408725",
  whatsapp: "+880 1709-371514",
  email: "support@eurosia.com.bd",
  facebook: "https://www.facebook.com/EurosiaOfficial",
  linkedin: "https://linkedin.com/in/EurosiaOfficial",
  x: "https://x.com/EurosiaOfficial",
  instagram: "https://www.instagram.com/EurosiaOfficial",
  logoText: "Eurosia",
  subLogoText: "Buildnex"
};

export default function Footer() {
  const [settings, setSettings] = useState<WebsiteSettings>(DEFAULT_SETTINGS);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    async function loadFooterSettings() {
      try {
        const data = await fetchSettings();
        if (data) setSettings(data);
      } catch (err) {
        console.warn("Failed to load footer settings, using local defaults", err);
      }
    }
    loadFooterSettings();
  }, []);

  return (
    <footer className="bg-black text-gray-400 font-sans border-t-4 border-brand-red text-left" id="website-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Brand Information */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="/logo.svg" 
              className="w-10 h-10 object-contain rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105" 
              alt="Eurosia Buildnex Logo" 
              referrerPolicy="no-referrer"
            />
            <span className="text-xl font-extrabold text-white tracking-tight">
              {settings.logoText} <span className="text-brand-red">{settings.subLogoText}</span>
            </span>
          </Link>
          <p className="text-sm leading-relaxed text-gray-400 font-sans">
            The complete offline-first smart construction ERP platform for modern builders. Empowering real estate developers, building contractors, and engineers to collaborate from any site—without needing active internet connectivity.
          </p>
          
          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a 
              href={settings.facebook} 
              target="_blank" 
              rel="noreferrer" 
              className="w-9 h-9 rounded-full bg-gray-900 hover:bg-brand-red flex items-center justify-center text-white transition-all duration-200 hover:scale-105"
              aria-label="Facebook Page"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a 
              href={settings.linkedin} 
              target="_blank" 
              rel="noreferrer" 
              className="w-9 h-9 rounded-full bg-gray-900 hover:bg-brand-blue flex items-center justify-center text-white transition-all duration-200 hover:scale-105"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a 
              href={settings.x} 
              target="_blank" 
              rel="noreferrer" 
              className="w-9 h-9 rounded-full bg-gray-900 hover:bg-white hover:text-black flex items-center justify-center text-white transition-all duration-200 hover:scale-105"
              aria-label="Twitter Profile"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a 
              href={settings.instagram || "https://www.instagram.com/EurosiaOfficial"} 
              target="_blank" 
              rel="noreferrer" 
              className="w-9 h-9 rounded-full bg-gray-900 hover:bg-rose-500 flex items-center justify-center text-white transition-all duration-200 hover:scale-105"
              aria-label="Instagram Profile"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-sm font-black text-white uppercase tracking-wider">Product Index</h3>
          <ul className="space-y-3 text-sm font-medium font-sans">
            <li>
              <Link to="/construction-erp" className="hover:text-brand-red transition-colors duration-150">Civil Operations &amp; ERP</Link>
            </li>
            <li>
              <Link to="/real-estate-management" className="hover:text-brand-red transition-colors duration-150">Sales CRM &amp; Allotment</Link>
            </li>
            <li>
              <Link to="/license-management" className="hover:text-brand-red transition-colors duration-150">Seat &amp; Device Licenses</Link>
            </li>
            <li>
              <Link to="/multi-company" className="hover:text-brand-red transition-colors duration-150">Multi-Company Setup</Link>
            </li>
            <li>
              <Link to="/security" className="hover:text-brand-red transition-colors duration-150">Security &amp; SOC-2 Audit</Link>
            </li>
          </ul>
        </div>

        {/* Resources served */}
        <div className="space-y-4">
          <h3 className="text-sm font-black text-white uppercase tracking-wider">Resources</h3>
          <ul className="space-y-3 text-sm font-sans">
            <li>
              <Link to="/case-studies" className="hover:text-white transition-colors duration-150">Customer Success Stories</Link>
            </li>
            <li>
              <Link to="/downloads" className="hover:text-white transition-colors duration-150">Platform Client Downloads</Link>
            </li>
            <li>
              <Link to="/release-notes" className="hover:text-white transition-colors duration-150">Software Release Notes</Link>
            </li>
            <li>
              <Link to="/documentation" className="hover:text-white transition-colors duration-150">Technical User Manuals</Link>
            </li>
            <li>
              <Link to="/careers" className="hover:text-white transition-colors duration-150 flex items-center gap-1.5">
                Join Engineering <span className="px-1.5 py-0.5 text-[8px] bg-brand-red text-white rounded font-mono font-bold">HIRING</span>
              </Link>
            </li>
            <li>
              <Link to="/partners" className="hover:text-white transition-colors duration-150">Strategic Partner Tracks</Link>
            </li>
          </ul>
        </div>

        {/* Contact list details */}
        <div className="space-y-6">
          <h3 className="text-sm font-black text-white uppercase tracking-wider">Corporate Contacts</h3>
          
          {/* Bangladesh */}
          <div className="space-y-2 text-xs">
            <h4 className="font-extrabold text-white text-[11px] uppercase tracking-wide border-b border-gray-800 pb-1">Eurosia Bangladesh HQ</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-brand-red shrink-0" />
                <a href="tel:+8801711408725" className="hover:text-white transition-colors">+880 1711-408725</a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <a href="https://wa.me/8801709371514" target="_blank" rel="noreferrer" className="hover:text-white transition-colors text-emerald-400">
                  +880 1709-371514 <span className="text-[8px] bg-emerald-950 text-emerald-300 px-1 py-0.2 rounded font-bold">W/A</span>
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <a href="tel:09649222222" className="hover:text-indigo-300 transition-colors font-semibold">Hotline: 09649-222222</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                <a href="mailto:support@eurosia.com.bd" className="hover:text-white transition-colors font-mono">support@eurosia.com.bd</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-brand-red shrink-0 mt-0.5" />
                <span className="leading-snug">144/5G, Matikata, Dhaka-1206 (Near ECB Circle)</span>
              </li>
            </ul>
          </div>

          {/* Malaysia */}
          <div className="space-y-2 text-xs">
            <h4 className="font-extrabold text-white text-[11px] uppercase tracking-wide border-b border-gray-800 pb-1 font-sans">Eurosia Malaysia Office</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-brand-red shrink-0" />
                <a href="tel:+60102181687" className="hover:text-white transition-colors">+60 1021-81687</a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <a href="https://wa.me/8801711408725" target="_blank" rel="noreferrer" className="hover:text-white transition-colors text-emerald-400">WhatsApp Support</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-brand-blue shrink-0 mt-0.5" />
                <span className="leading-snug">City Garden Commercial Centre, Taman Nirwana, Ampang, Selangor</span>
              </li>
            </ul>
          </div>
        </div>

      </div>

      {/* Bottom Frame */}
      <div className="bg-neutral-950 text-xs border-t border-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <ShieldCheck className="w-4 h-4 text-brand-red text-opacity-80" />
            <span>&copy; {currentYear} eurosia buildnex. All Rights Reserved.</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors duration-150">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="hover:text-white transition-colors duration-150">Terms &amp; Conditions</Link>
            <Link 
              to="/admin" 
              className="text-gray-500 hover:text-brand-red font-mono border border-gray-800 px-2.5 py-1 rounded transition-all duration-200" 
              id="footer-admin-link"
            >
              Management Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
