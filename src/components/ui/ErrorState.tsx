import React from "react";
import { AlertCircle, RotateCcw } from "lucide-react";

interface ErrorProps {
  message?: string;
  onRetry?: () => void;
}

export default function ErrorState({ message = "Operational connection failed", onRetry }: ErrorProps) {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center bg-red-50/50 border border-red-100 rounded-xl" id="error-state-container">
      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-brand-red mb-4">
        <AlertCircle className="w-6 h-6" />
      </div>
      <h3 className="text-base font-bold text-gray-900">Synchronisation Fault</h3>
      <p className="mt-1 text-sm text-gray-500 max-w-sm">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-4 inline-flex items-center gap-2 bg-black hover:bg-brand-red text-white text-xs font-semibold px-4 py-2 rounded-lg transition-all duration-300 shadow-sm"
          id="btn-error-retry"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Retry Connection
        </button>
      )}
    </div>
  );
}
