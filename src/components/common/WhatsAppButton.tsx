import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { fetchSettings } from "../../services/api";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);
  const [whatsappNumber, setWhatsappNumber] = useState("8801709371514");

  useEffect(() => {
    // Disable first load bounce after animation completes
    const timer = setTimeout(() => {
      setFirstLoad(false);
    }, 2500);

    async function loadWhatsappSettings() {
      try {
        const sData = await fetchSettings();
        if (sData && sData.whatsapp) {
          // Clean non-numeric characters for proper API link
          const cleaned = sData.whatsapp.replace(/\D/g, "");
          if (cleaned) {
            setWhatsappNumber(cleaned);
          }
        }
      } catch (err) {
        console.warn("Failed to load WhatsApp settings from API, using default", err);
      }
    }
    loadWhatsappSettings();

    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[9999] print:hidden flex flex-col items-end"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Tooltip */}
      <div 
        className={`absolute bottom-full right-0 mb-3.5 bg-slate-900 text-white text-xs font-semibold px-4 py-2 rounded-xl shadow-xl border border-slate-800 transition-all duration-300 pointer-events-none whitespace-nowrap ${
          showTooltip 
            ? "opacity-100 translate-y-0 scale-100" 
            : "opacity-0 translate-y-2 scale-95"
        }`}
      >
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Chat with us on WhatsApp
        </div>
        {/* Tooltip arrow decoration */}
        <div className="absolute top-full right-6 w-2.5 h-2.5 bg-slate-900 border-r border-b border-[#1ebe57] transform rotate-45 -translate-y-1.5"></div>
      </div>

      {/* Main Button */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Eurosia Buildnex on WhatsApp"
        className={`relative flex items-center justify-center rounded-full text-white shadow-2xl transition-all duration-300 ease-out select-none active:scale-95 cursor-pointer
          w-14 h-14 md:w-[60px] md:h-[60px] lg:w-16 lg:h-16 bg-[#25D366] hover:bg-[#1ebe57]
          ${firstLoad ? "animate-whatsapp-bounce" : "animate-whatsapp-pulse hover:scale-[1.08]"}
          widget-glow-whatsapp
        `}
      >
        {/* Pulse Ripple Layers */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 -z-10 animate-whatsapp-ping"></span>
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-20 -z-10 animate-whatsapp-ping-delayed"></span>

        {/* WhatsApp Icon (MessageCircle size matches responsively) */}
        <MessageCircle className="w-7 h-7 md:w-8 md:h-8 shrink-0 transition-transform duration-300 group-hover:scale-110" />

        {/* Online Status Badge Indicator */}
        <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-500 border-2 border-[#25D366] text-[8px] font-extrabold text-white items-center justify-center">1</span>
        </span>
      </a>
    </div>
  );
}
