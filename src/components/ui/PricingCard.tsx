import React from "react";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { PricingPackage } from "../../types";
import { TiltCard } from "./MotionWrappers";

interface PricingCardProps {
  plan: PricingPackage;
  key?: React.Key;
}

export default function PricingCard({ plan }: PricingCardProps) {
  return (
    <TiltCard 
      className={`relative bg-white rounded-3xl border h-full ${
        plan.isPopular 
          ? "border-brand-red/60 scale-105 z-10" 
          : "border-gray-200"
      }`}
      id={`pricing-card-${plan.id}`}
    >
      <div className="p-8 flex flex-col h-full text-left relative z-10 w-full">
        {plan.isPopular && (
          <span className="absolute top-0 right-8 -translate-y-1/2 bg-brand-red text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-md z-20">
            Most Popular Plan
          </span>
        )}

        <div className="mb-6">
          <h3 className="text-xl font-extrabold text-black tracking-tight">{plan.name}</h3>
          <p className="mt-2 text-xs text-gray-500 leading-relaxed font-sans">{plan.description}</p>
        </div>

        <div className="mb-8 border-b border-gray-100 pb-8 flex flex-col justify-end">
          <div className="flex items-baseline text-black">
            <span className="text-3xl font-black tracking-tight">{plan.price}</span>
            <span className="ml-1 text-xs font-semibold text-gray-400 font-sans tracking-wide">/{plan.period}</span>
          </div>
        </div>

        <ul className="space-y-4 mb-8 flex-grow">
          {plan.features.map((feat, index) => (
            <li key={index} className="flex items-start text-sm text-gray-600 gap-3">
              <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span className="font-sans leading-tight">{feat}</span>
            </li>
          ))}
        </ul>

        <Link
          to={plan.ctaLink || "/request-demo"}
          className={`w-full text-center py-4 rounded-xl font-bold text-sm transition-all duration-300 shadow-md ${
            plan.isPopular
              ? "bg-brand-red hover:bg-black text-white hover:scale-[1.02] active:scale-[0.98]"
              : "bg-black hover:bg-brand-red text-white hover:scale-[1.02] active:scale-[0.98]"
          }`}
          id={`pricing-card-btn-${plan.id}`}
        >
          {plan.ctaText}
        </Link>
      </div>
    </TiltCard>
  );
}
