import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./services/queryClient";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import WhatsAppButton from "./components/common/WhatsAppButton";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Solutions from "./pages/Solutions";
import OfflineFirst from "./pages/OfflineFirst";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import RequestDemo from "./pages/RequestDemo";
import FAQ from "./pages/FAQ";
import Blog from "./pages/Blog";
import BlogPostPage from "./pages/BlogPostPage";
import Admin from "./pages/Admin";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";

// New Core Pages
import ConstructionERP from "./pages/ConstructionERP";
import RealEstateManagement from "./pages/RealEstateManagement";
import LicenseManagement from "./pages/LicenseManagement";
import MultiCompany from "./pages/MultiCompany";
import Security from "./pages/Security";

// New Resource Pages
import CaseStudies from "./pages/CaseStudies";
import Downloads from "./pages/Downloads";
import ReleaseNotes from "./pages/ReleaseNotes";
import Support from "./pages/Support";
import Documentation from "./pages/Documentation";
import Careers from "./pages/Careers";
import Partners from "./pages/Partners";

import { PWAInstallController } from "./components/PWAInstallController";

// Helper component to scroll to top during navigation transitions
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen bg-white text-gray-900 font-sans antialiased selection:bg-brand-red selection:text-white">
          <ScrollToTop />
          <PWAInstallController />
          <Header />
          
          {/* Main responsive stage content */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/features" element={<Features />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/offline-first" element={<OfflineFirst />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/request-demo" element={<RequestDemo />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/terms-and-conditions" element={<Terms />} />
              
              {/* New Core Routes */}
              <Route path="/construction-erp" element={<ConstructionERP />} />
              <Route path="/real-estate-management" element={<RealEstateManagement />} />
              <Route path="/license-management" element={<LicenseManagement />} />
              <Route path="/multi-company" element={<MultiCompany />} />
              <Route path="/security" element={<Security />} />
              
              {/* New Resource Routes */}
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/downloads" element={<Downloads />} />
              <Route path="/release-notes" element={<ReleaseNotes />} />
              <Route path="/support" element={<Support />} />
              <Route path="/documentation" element={<Documentation />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/partners" element={<Partners />} />
              
              {/* Fallback to Home */}
              <Route path="*" element={<Home />} />
            </Routes>
          </main>

          <Footer />
          <WhatsAppButton />
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
