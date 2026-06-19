import React from "react";
import Header from "./Header";
import Footer from "./Footer";

interface WebsiteLayoutProps {
  children: React.ReactNode;
}

export default function WebsiteLayout({ children }: WebsiteLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900 font-sans antialiased selection:bg-brand-red selection:text-white" id="eurosia-website-layout">
      {/* Dynamic Header */}
      <Header />
      
      {/* Main responsive content stage */}
      <main className="flex-grow flex flex-col">
        {children}
      </main>

      {/* Dynamic Footer */}
      <Footer />
    </div>
  );
}
