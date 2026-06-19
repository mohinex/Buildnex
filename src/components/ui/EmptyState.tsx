import React from "react";
import { Inbox } from "lucide-react";

interface EmptyProps {
  title?: string;
  message?: string;
}

export default function EmptyState({ 
  title = "No database items found", 
  message = "Please check back later or add content through the management portal." 
}: EmptyProps) {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center bg-slate-50 border border-dashed border-gray-200 rounded-xl" id="empty-state-container">
      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 mb-4">
        <Inbox className="w-6 h-6" />
      </div>
      <h3 className="text-base font-bold text-gray-900">{title}</h3>
      <p className="mt-1 text-sm text-gray-400 max-w-sm">{message}</p>
    </div>
  );
}
