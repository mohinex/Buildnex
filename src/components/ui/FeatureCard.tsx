import React from "react";
import * as Icons from "lucide-react";
import { FeatureItem } from "../../types";
import { TiltCard } from "./MotionWrappers";

interface FeatureCardProps {
  feature: FeatureItem;
  index: number;
  key?: React.Key;
}

export default function FeatureCard({ feature, index }: FeatureCardProps) {
  // Dynamically resolve icon component based on string value
  const IconComponent = (Icons as any)[feature.iconName] || Icons.HelpCircle;

  return (
    <TiltCard 
      className="bg-white border border-gray-100 hover:border-brand-red/30"
      id={`feature-card-${feature.id}`}
    >
      <div className="p-8 flex flex-col text-left h-full w-full group">
        <div className="mb-6 flex items-center justify-center w-12 h-12 rounded-lg bg-red-50 text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all duration-500 shadow-sm shrink-0">
          <IconComponent className="w-6 h-6 icon-float" />
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-brand-red transition-colors font-sans">
          {feature.title}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed font-sans mt-auto">
          {feature.description}
        </p>
      </div>
    </TiltCard>
  );
}
