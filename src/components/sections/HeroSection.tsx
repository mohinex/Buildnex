import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, WifiOff, Building2, Sparkles, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";
import { fetchBanners } from "../../services/api";
import { Banner } from "../../types";
import { SpotlightHero, Magnetic } from "../ui/MotionWrappers";

const DEFAULT_BANNER: Banner = {
  id: "b1",
  badge: "Now Launching Version 4.2 Offline-First",
  title: "Eurosia Buildnex",
  description: "The complete offline-first smart construction ERP platform for modern builders. Manage projects, buildings, individual units, CRM clients, flat bookings, material payments, subcontractors, and compliance reports from one powerful enterprise platform. Built for remote sites with unstable connectivity.",
  ctaText: "Book Instant Demo",
  ctaLink: "/request-demo",
  secondaryCtaText: "Contact Expert Sales",
  secondaryCtaLink: "/contact"
};

export default function HeroSection() {
  const [data, setData] = useState<Banner>(DEFAULT_BANNER);

  useEffect(() => {
    async function loadBanner() {
      try {
        const banners = await fetchBanners();
        if (banners && banners.length > 0) {
          setData(banners[0]);
        }
      } catch (err) {
        console.warn("Could not retrieve dynamic hero banner, using fallback", err);
      }
    }
    loadBanner();
  }, []);

  return (
    <SpotlightHero className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white py-20 lg:py-28 select-none text-left" id="hero-banner-section">
      {/* Decorative Radial Grid Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60"></div>
      
      {/* Visual Ambient Light Spots */}
      <div className="absolute top-12 left-1/4 w-72 h-72 bg-brand-blue/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-24 right-1/4 w-72 h-72 bg-brand-red/5 rounded-full filter blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Core Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* dynamic Badge */}
            {data.badge && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 bg-red-50 border border-brand-red/20 px-3 py-1 rounded-full text-[11px] font-bold text-brand-red uppercase tracking-wider shadow-sm"
              >
                <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                {data.badge}
              </motion.div>
            )}

            {/* Title / Tagline */}
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-black leading-[1.1]" 
              id="hero-main-title"
            >
              Eurosia <span className="text-brand-blue font-black">Buildnex</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-2xl font-medium font-sans"
            >
              {data.description}
            </motion.p>

            {/* Micro highlights */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-3 gap-4 py-4 border-y border-gray-100 max-w-xl"
            >
              <div>
                <p className="text-xl sm:text-2xl font-black text-brand-blue">14,200+</p>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">Active Units</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-brand-red">100%</p>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">Offline-Ready</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-black">99.98%</p>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">Sync Accuracy</p>
              </div>
            </motion.div>

            {/* CTA action buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Magnetic>
                <Link
                  to={data.ctaLink}
                  className="bg-brand-red hover:bg-black text-white text-center font-bold px-8 py-4 rounded-xl shadow-lg shadow-brand-red/10 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group w-full sm:w-auto"
                  id="hero-cta-primary"
                >
                  {data.ctaText}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Magnetic>

              <Magnetic>
                <Link
                  to={data.secondaryCtaLink}
                  className="bg-white hover:bg-gray-50 text-gray-900 text-center font-bold px-8 py-4 rounded-xl border border-gray-300 hover:border-gray-900 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
                  id="hero-cta-secondary"
                >
                  {data.secondaryCtaText}
                </Link>
              </Magnetic>
            </div>

            <p className="text-[11px] text-gray-400 flex items-center gap-1.5 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-500" /> SLA Guarantee &bull; ISO 27001 Secure Data Caches
            </p>

          </div>

          {/* Right Hero Live Terminal Sandbox Representation */}
          <motion.div 
            initial={{ opacity: 0, x: 30, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.25 }}
            className="lg:col-span-5 relative mt-8 lg:mt-0"
          >
            <div className="relative mx-auto max-w-[450px] lg:max-w-none">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-red to-brand-blue rounded-2xl blur opacity-25"></div>
              
              <div className="relative bg-slate-950 text-slate-100 rounded-2xl shadow-2xl border border-slate-800 overflow-hidden font-mono text-xs">
                
                {/* Header bar */}
                <div className="bg-slate-900 px-4 py-3.5 flex items-center justify-between border-b border-slate-850">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-[9px] uppercase font-black tracking-widest text-slate-500 flex items-center gap-1">
                    <WifiOff className="w-3.5 h-3.5 text-brand-red" /> Edge Caching Mode: Active
                  </span>
                </div>

                {/* Content Stream */}
                <div className="p-6 space-y-4 text-left">
                  <div className="bg-slate-900/95 rounded-lg p-4 border border-slate-800 space-y-2.5">
                    <div className="flex justify-between items-center text-[10px]">
                      <span className="font-bold text-white uppercase tracking-wider flex items-center gap-1">
                        <Building2 className="w-3.5 h-3.5 text-brand-red" /> Structural Node #DH-1042
                      </span>
                      <span className="px-1.5 py-0.5 rounded bg-brand-red/10 text-brand-red border border-brand-red/20 text-[9px] font-black uppercase">
                        Queued Logs
                      </span>
                    </div>
                    <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full w-4/5 bg-gradient-to-r from-brand-red to-brand-blue animate-pulse"></div>
                    </div>
                    <p className="text-[11px] text-gray-400 font-sans leading-relaxed">
                      WASM Sandbox persistent node active. Transaction queue buffering site checklists at basement level.
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">&gt;_ SQLite Core Console Stream</p>
                    <div className="bg-black rounded-lg p-3 text-[11px] space-y-1 text-emerald-400 border border-slate-900 leading-relaxed font-mono">
                      <p className="text-slate-500">[05:12:01] Local database allocated...</p>
                      <p className="text-brand-red">[05:12:02] Wi-Fi lost. Buffer session locally...</p>
                      <p>&gt; client_flat_reservation: "Tower A - Suite 402" [CACHED]</p>
                      <p>&gt; transaction_material: "30 tons Portland Grade A Cement" [CACHED]</p>
                      <p className="text-brand-blue">[05:12:05] Network detected. Sync referee arbitrating...</p>
                      <p className="text-white font-bold">&gt; RESOLVED. MERGING COMPLETE (0 conflits). COMMITTED.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </SpotlightHero>
  );
}

// Alias export just in case
export { HeroSection };
