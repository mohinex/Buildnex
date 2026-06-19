import React from "react";

interface LoadingProps {
  message?: string;
}

export default function LoadingState({ message = "Retrieving building models..." }: LoadingProps) {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center" id="loading-state-container">
      <div className="relative flex items-center justify-center w-16 h-16">
        <div className="absolute inset-0 border-4 border-slate-100 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-t-brand-red border-r-transparent border-bottom-transparent border-left-transparent rounded-full animate-spin"></div>
      </div>
      <p className="mt-4 text-sm font-semibold text-gray-500 font-mono animate-pulse uppercase tracking-wider">
        {message}
      </p>
    </div>
  );
}
