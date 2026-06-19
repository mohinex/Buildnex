import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, AlertTriangle } from "lucide-react";
import { WebSection, FeatureItem, PricingPackage, FAQItem } from "../../types";
import { fetchFeatures, fetchPricing, fetchFAQ } from "../../services/api";
import HeroSection from "./HeroSection";
import FeatureCard from "../ui/FeatureCard";
import PricingCard from "../ui/PricingCard";
import FAQAccordion from "../ui/FAQAccordion";
import LoadingState from "../ui/LoadingState";

interface DynamicSectionRendererProps {
  section: WebSection;
}

export default function DynamicSectionRenderer({ section }: DynamicSectionRendererProps) {
  const [features, setFeatures] = useState<FeatureItem[]>([]);
  const [pricing, setPricing] = useState<PricingPackage[]>([]);
  const [faqs, setFaqs] = useState<FAQItem[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadSectionDependencies() {
      if (section.type === "features" && features.length === 0) {
        setLoading(true);
        try {
          const res = await fetchFeatures();
          setFeatures(res);
        } catch (e) {
          console.error(e);
        } finally {
          setLoading(false);
        }
      } else if (section.type === "pricing" && pricing.length === 0) {
        setLoading(true);
        try {
          const res = await fetchPricing();
          setPricing(res);
        } catch (e) {
          console.error(e);
        } finally {
          setLoading(false);
        }
      } else if (section.type === "faq" && faqs.length === 0) {
        setLoading(true);
        try {
          const res = await fetchFAQ();
          setFaqs(res);
        } catch (e) {
          console.error(e);
        } finally {
          setLoading(false);
        }
      }
    }
    loadSectionDependencies();
  }, [section.type]);

  if (loading) {
    return <LoadingState message={`Syncing layout block indices for ${section.type}...`} />;
  }

  switch (section.type) {
    case "hero":
      return <HeroSection />;

    case "features":
      return (
        <section className="py-20 bg-slate-50 border-y border-gray-100 text-center" id="dynamic-features-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto space-y-4 mb-16 select-none">
              <span className="text-[11px] font-black tracking-widest text-brand-red uppercase">
                {section.subtitle || "The Buildnex Modules"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-sans">
                {section.title || "One Unified ERP Platform for Complex Ops"}
              </h2>
              {section.content && (
                <p className="text-base text-gray-600 font-sans leading-relaxed">
                  {section.content}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.length > 0 ? (
                features.map((fe, idx) => <FeatureCard key={fe.id} feature={fe} index={idx} />)
              ) : (
                <div className="col-span-full py-8 text-center text-gray-400 font-mono text-xs">
                  No modules found in database. Seed server memory.
                </div>
              )}
            </div>
          </div>
        </section>
      );

    case "pricing":
      return (
        <section className="py-20 bg-white text-center" id="dynamic-pricing-section">
          <div className="max-w-s mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-3xl mx-auto space-y-4 mb-16 select-none">
              <span className="text-[11px] font-black tracking-widest text-brand-blue uppercase">
                {section.subtitle || "Flexible Enterprise Licences"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black font-sans">
                {section.title || "Suited for any builder scale."}
              </h2>
              {section.content && (
                <p className="text-sm text-gray-500 font-sans leading-relaxed">
                  {section.content}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
              {pricing.length > 0 ? (
                pricing.map((plan) => <PricingCard key={plan.id} plan={plan} />)
              ) : (
                <div className="col-span-full py-8 text-center text-gray-400 font-mono text-xs">
                  No pricing levels seeded.
                </div>
              )}
            </div>
          </div>
        </section>
      );

    case "faq":
      return (
        <section className="py-20 bg-slate-50 border-t border-gray-100" id="dynamic-faq-section">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12 select-none">
              <span className="text-[11px] font-black tracking-widest text-brand-red uppercase">
                {section.subtitle || "FAQ"}
              </span>
              <h2 className="text-3xl font-extrabold text-black font-sans tracking-tight mt-1.5">
                {section.title || "Frequently Asked Questions"}
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.length > 0 ? (
                faqs.map((faq) => <FAQAccordion key={faq.id} faq={faq} />)
              ) : (
                <div className="py-8 text-center text-gray-400 font-mono text-xs">
                  No FAQ questions.
                </div>
              )}
            </div>
          </div>
        </section>
      );

    case "cta":
      return (
        <section className="bg-black text-white relative py-20 overflow-hidden text-center" id="dynamic-cta-section">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-red via-brand-blue to-black"></div>
          <div className="absolute inset-0 bg-[radial-gradient(rgba(204,26,47,0.1)_1px,transparent_1px)] [background-size:24px_24px] opacity-70"></div>
          
          <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
            <span className="text-[11px] font-bold text-brand-red tracking-widest uppercase">
              {section.subtitle || "TAKE CONTROL OF YOUR PROJECTS"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight font-sans">
              {section.title || "Stop Data Losses. Empower Your Field Crews Today."}
            </h2>
            <p className="text-gray-400 text-sm max-w-2xl mx-auto leading-relaxed">
              {section.content || "Ready to explore Eurosia Buildnex offline smart ERP? Let our dedicated construction workflow analysts provide a tailored demonstration based on your operational modules."}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                to="/request-demo"
                className="w-full sm:w-auto bg-brand-red hover:bg-white hover:text-black text-white text-center font-bold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm"
              >
                Schedule My Workflow Session
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto border border-gray-800 hover:border-white hover:bg-white/5 text-gray-300 text-center font-bold px-8 py-4 rounded-xl transition-all duration-300 text-sm"
              >
                Speak to Local Office
              </Link>
            </div>
          </div>
        </section>
      );

    default:
      return null;
  }
}
