import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQItem } from "../../types";

interface FAQAccordionProps {
  faq: FAQItem;
  key?: React.Key;
}

export default function FAQAccordion({ faq }: FAQAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm transition-all duration-300"
      id={`faq-accordion-${faq.id}`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 hover:bg-slate-50 transition-colors focus:outline-none focus:ring-1 focus:ring-brand-blue text-left"
        id={`faq-btn-${faq.id}`}
      >
        <div className="flex items-start gap-4 pr-4">
          <HelpCircle className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
          <h3 className="font-bold text-gray-900 text-sm leading-snug font-sans">
            {faq.question}
          </h3>
        </div>
        <ChevronDown 
          className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-brand-red" : ""
          }`} 
        />
      </button>

      <div 
        className={`transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[500px] border-t border-gray-100" : "max-h-0"
        }`}
      >
        <div className="p-6 bg-slate-50/60 text-sm text-gray-600 leading-relaxed font-sans">
          {faq.answer}
        </div>
      </div>
    </div>
  );
}
