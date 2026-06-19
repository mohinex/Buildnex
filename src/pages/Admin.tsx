import React, { useState, useEffect } from "react";
import { 
  Users, 
  CalendarDays, 
  PlusCircle, 
  Settings, 
  Globe, 
  BookOpen, 
  CheckCircle, 
  Trash2, 
  Loader2, 
  Mail, 
  Phone,
  Building,
  Award,
  AlertCircle,
  Lock,
  Unlock,
  KeyRound,
  Eye,
  LogOut,
  ChevronRight,
  ShieldCheck,
  Smartphone,
  Server,
  Grid
} from "lucide-react";
import { LeadSubmission, DemoRequest, BlogPost } from "../types";
import SEO from "../components/SEO";

export default function Admin() {
  // Cinematic Brand Bootup Loading Phase
  const [splashLoading, setSplashLoading] = useState(true);
  
  // Authentication Gates & Navigation Routing State
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authScreen, setAuthScreen] = useState<"login" | "pin" | "register" | "forgot">("login");
  const [activeTab, setActiveTab] = useState<"leads" | "demos" | "blogs" | "settings" | "seo">("leads");
  
  // Interactive Credentials Inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [fullName, setFullName] = useState("");
  const [sector, setSector] = useState("builder");
  const [pinCode, setPinCode] = useState<string[]>([]);
  
  // Data State
  const [leads, setLeads] = useState<LeadSubmission[]>([]);
  const [demos, setDemos] = useState<DemoRequest[]>([]);
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // New Blog Post Form State
  const [newBlog, setNewBlog] = useState({
    title: "",
    summary: "",
    content: "",
    category: "technology" as const,
    authorName: "Engr. Rahman",
    authorRole: "Civil Architect",
    coverImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=640&auto=format&fit=crop"
  });

  // Website Settings State
  const [webSettings, setWebSettings] = useState({
    phone: "+8801711408725",
    whatsapp: "+8801709371514",
    email: "support@eurosia.com.bd",
    facebook: "https://facebook.com/eurosia",
    linkedin: "https://linkedin.com/company/eurosia",
    x: "https://x.com/eurosia_buildnex"
  });

  // SEO settings State
  const [seoSettings, setSeoSettings] = useState({
    globalPrefix: "Eurosia Buildnex",
    metaDesc: "The complete offline-first smart construction ERP platform for modern builders.",
    keywords: "construction ERP, real estate ERP, offline-first construction software, property management",
  });

  const [notification, setNotification] = useState<{ message: string; type: "success" | "error" } | null>(null);

  // Trigger 1.5s brand animated load screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setSplashLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      loadAllData();
    }
  }, [isLoggedIn]);

  const showNotification = (message: string, type: "success" | "error" = "success") => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 4000);
  };

  async function loadAllData() {
    setLoading(true);
    setError(null);
    try {
      const [leadsRes, demosRes, blogsRes, settingsRes] = await Promise.all([
        fetch("/api/admin/leads"),
        fetch("/api/admin/demos"),
        fetch("/api/blog"),
        fetch("/api/settings")
      ]);

      if (leadsRes.ok && demosRes.ok && blogsRes.ok && settingsRes.ok) {
        setLeads(await leadsRes.json());
        setDemos(await demosRes.json());
        setBlogs(await blogsRes.json());
        
        const sets = await settingsRes.json();
        setWebSettings({
          phone: sets.phone || "+8801711408725",
          whatsapp: sets.whatsapp || "+8801709371514",
          email: sets.email || "support@eurosia.com.bd",
          facebook: sets.facebook || "https://facebook.com/eurosia",
          linkedin: sets.linkedin || "https://linkedin.com/company/eurosia",
          x: sets.x || "https://x.com/eurosia_buildnex"
        });
        
        setSeoSettings({
          globalPrefix: sets.globalPrefix || "Eurosia Buildnex",
          metaDesc: sets.metaDesc || "The complete offline-first smart construction ERP platform for modern builders.",
          keywords: sets.keywords || "construction ERP, real estate ERP, offline-first construction software, property management"
        });
      } else {
        throw new Error("Local full-stack database is starting or unresponsive.");
      }
    } catch (err: any) {
      setError(err?.message || "Failure compiling admin state.");
    } finally {
      setLoading(false);
    }
  }

  // Handle Demo status updates
  const updateDemoStatus = async (id: string, currentStatus: string) => {
    setActionLoading(true);
    const nextStatuses: Record<string, "pending" | "contacted" | "scheduled" | "completed"> = {
      pending: "contacted",
      contacted: "scheduled",
      scheduled: "completed",
      completed: "pending"
    };
    const nextStatus = nextStatuses[currentStatus] || "pending";

    try {
      const res = await fetch(`/api/admin/demos/${id}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: nextStatus })
      });

      if (res.ok) {
        showNotification("Demo request status updated successfully");
        setDemos(demos.map(d => d.id === id ? { ...d, status: nextStatus } : d));
      } else {
        throw new Error("Failed to patch status on server.");
      }
    } catch (err: any) {
      showNotification(err?.message || "Error modifying status", "error");
    } finally {
      setActionLoading(false);
    }
  };

  // Handle Blog submission
  const handleBlogSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setActionLoading(true);

    try {
      const res = await fetch("/api/blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newBlog)
      });

      if (res.ok) {
        showNotification("Blog post published securely to index directory");
        const addedPost = await res.json();
        setBlogs([addedPost, ...blogs]);
        setNewBlog({
          title: "",
          summary: "",
          content: "",
          category: "technology",
          authorName: "Engr. Rahman",
          authorRole: "Civil Architect",
          coverImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=640&auto=format&fit=crop"
        });
      } else {
        throw new Error("Internal server write blockage.");
      }
    } catch (err: any) {
      showNotification(err?.message || "Error uploading post", "error");
    } finally {
      setActionLoading(false);
    }
  };

  // Handle Blog Deletion
  const deleteBlogPost = async (id: string) => {
    if (!confirm("Are you positive you wish to remove this publication record?")) return;
    setActionLoading(true);

    try {
      const res = await fetch(`/api/blog/${id}`, { method: "DELETE" });
      if (res.ok) {
        showNotification("Blog post successfully deleted");
        setBlogs(blogs.filter(b => b.id !== id));
      } else {
        throw new Error("Failed deleting record from server.");
      }
    } catch (err: any) {
      showNotification(err?.message || "Error deleting post", "error");
    } finally {
      setActionLoading(false);
    }
  };

  // Save Settings Real Connection
  const saveSettings = async (type: "web" | "seo") => {
    setActionLoading(true);
    try {
      const body = type === "web" ? webSettings : seoSettings;
      const res = await fetch("/api/settings", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      if (res.ok) {
        showNotification(`${type === "web" ? "Website Operations" : "Search Engine Optimization"} overrides saved successfully!`, "success");
      } else {
        throw new Error("Unable to save settings to backend.");
      }
    } catch (err: any) {
      showNotification(err?.message || "Error saving overrides", "error");
    } finally {
      setActionLoading(false);
    }
  };

  // Simulated Authentications Handling
  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      showNotification("Please supply an email and password", "error");
      return;
    }
    setActionLoading(true);
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok && data.success) {
        showNotification(data.message || "Authorized login success.", "success");
        if (data.name) {
          setFullName(data.name);
        }
        setIsLoggedIn(true);
      } else {
        showNotification(data.error || "Authentication failed. Check credentials.", "error");
      }
    } catch (err: any) {
      showNotification("Authentication gateway is currently unreachable.", "error");
    } finally {
      setActionLoading(false);
    }
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !companyName || !fullName) {
      showNotification("Full name, company, and team email required.", "error");
      return;
    }
    showNotification("Enterprise registry saved successfully! Please log in.", "success");
    setAuthScreen("login");
  };

  const handleForgotSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      showNotification("Please write your email coordinate first.", "error");
      return;
    }
    showNotification("Secure unlock parameters dispatched to corporate mailbox.", "success");
    setAuthScreen("login");
  };

  // Interactive PIN Pad Actions
  const appendPinDigit = async (digit: string) => {
    if (pinCode.length >= 4) return;
    const nextPin = [...pinCode, digit];
    setPinCode(nextPin);
    
    // Auto submit upon 4 digits
    if (nextPin.length === 4) {
      const combined = nextPin.join("");
      try {
        const response = await fetch("/api/auth/pin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ pin: combined }),
        });
        const data = await response.json();
        if (response.ok && data.success) {
          setTimeout(() => {
            showNotification(data.message || "Role offline supervisor PIN verified.", "success");
            if (data.name) {
              setFullName(data.name);
              setCompanyName(`Buildnex ${data.role}`);
            }
            setIsLoggedIn(true);
            setPinCode([]);
          }, 300);
        } else {
          setTimeout(() => {
            showNotification(data.error || "Invalid PIN badge code. Try again.", "error");
            setPinCode([]);
          }, 500);
        }
      } catch (err: any) {
        setTimeout(() => {
          showNotification("Authentication gateway offline.", "error");
          setPinCode([]);
        }, 500);
      }
    }
  };

  const clearPin = () => {
    setPinCode([]);
  };

  // BRAND LOGO COMPONENT REFERENCE (To avoid SVG duplication and ensure optimized render)
  const BrandLogo = ({ size = "w-12 h-12" }: { size?: string }) => (
    <img 
      src="/logo.svg" 
      className={`${size} object-contain rounded-xl shadow-md`}
      alt="Eurosia Buildnex Corporate Logo"
      referrerPolicy="no-referrer"
    />
  );

  // ----------------------------------------------------
  // PHASE 1: SPINNER LOADING STATE (Requirements Item 9)
  // ----------------------------------------------------
  if (splashLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white" id="brand-splash-screen">
        <div className="relative mb-6 animate-[pulse_1.5s_infinite_ease-in-out]">
          <BrandLogo size="w-24 h-24" />
        </div>
        <div className="flex items-center gap-2 text-zinc-400 font-mono text-xs tracking-widest pl-1">
          <Loader2 className="w-4 h-4 animate-spin text-brand-red" />
          <span className="uppercase text-[10px] font-black">loading buildnex...</span>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // PHASE 2: AUTHENTICATION PORTALS (Requirements Item 7)
  // ----------------------------------------------------
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans relative overflow-hidden text-left" id="admin-gate-screen">
        <div className="absolute inset-0 bg-[radial-gradient(#cc1a2f_0.5px,transparent_0.5px)] [background-size:16px_16px] opacity-10"></div>
        
        <SEO 
          title="Secure Enterprise Gateway | Eurosia Buildnex"
          description="Access the Eurosia Buildnex administrative terminal. Secure local sync, leads rollup and insights portal."
        />

        <div className="max-w-md w-full space-y-8 bg-black/95 border border-zinc-800 rounded-3xl p-8 sm:p-10 shadow-2xl relative z-10">
          
          {/* Main Centered Logo */}
          <div className="text-center space-y-4">
            <div className="inline-flex justify-center">
              <BrandLogo size="w-16 h-16" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-white tracking-tight">eurosia buildnex</h2>
              <p className="text-[10px] font-bold text-brand-red uppercase tracking-widest font-mono">
                secure operating gateway
              </p>
            </div>
          </div>

          {/* Render authentication sub-route panels */}
          
          {/* AUTHENTICATION 1: STANDARD SECURE LOGIN */}
          {authScreen === "login" && (
            <form onSubmit={handleLoginSubmit} className="space-y-6 text-xs text-zinc-300">
              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="font-bold text-zinc-500 uppercase font-mono tracking-wider">Corporate Mail</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="rahman@eurosia.com.bd"
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 focus:border-brand-red outline-none rounded-xl text-white font-medium"
                    id="login-email"
                  />
                </div>
                
                <div className="space-y-1">
                  <div className="flex justify-between items-center">
                    <label className="font-bold text-zinc-500 uppercase font-mono tracking-wider">Access Secret</label>
                    <button 
                      type="button" 
                      onClick={() => setAuthScreen("forgot")}
                      className="text-[10px] text-zinc-500 hover:text-brand-red font-semibold uppercase tracking-wider"
                    >
                      Forgot?
                    </button>
                  </div>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 focus:border-brand-red outline-none rounded-xl text-white font-medium"
                    id="login-pass"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <button
                  type="submit"
                  className="w-full py-3 bg-brand-red hover:bg-white hover:text-black text-white font-extrabold rounded-xl transition-all uppercase tracking-wider text-xs shadow-lg shadow-brand-red/10 cursor-pointer"
                  id="login-submit-btn"
                >
                  Authorize Console
                </button>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => { setAuthScreen("pin"); clearPin(); }}
                    className="py-2.5 bg-zinc-900 hover:bg-zinc-800 text-white font-bold rounded-xl border border-zinc-800 flex items-center justify-center gap-1.5 uppercase font-mono text-[10px]"
                    id="switch-to-pin-btn"
                  >
                    <KeyRound className="w-3.5 h-3.5 text-brand-red" /> PIN SignIn
                  </button>
                  <button
                    type="button"
                    onClick={() => setAuthScreen("register")}
                    className="py-2.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white font-bold rounded-xl border border-zinc-800 flex items-center justify-center gap-1.5 uppercase font-mono text-[10px]"
                    id="switch-to-reg-btn"
                  >
                    New Tenant
                  </button>
                </div>
              </div>
            </form>
          )}

          {/* AUTHENTICATION 2: OFFLINE PIN BADGE GATEWAY */}
          {authScreen === "pin" && (
            <div className="space-y-6">
              <div className="text-center space-y-1 bg-zinc-950 p-3 rounded-xl border border-zinc-900">
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest font-mono">FIELD OFFLINE SYSTEM</span>
                <p className="text-[11px] text-zinc-300 font-bold uppercase tracking-wide">SECURE OFFLINE AUTHENTICATION GATEWAY</p>
                <p className="text-[10px] text-brand-red font-mono font-black mt-1 uppercase">AUTHORIZED PERSONNEL ONLY</p>
              </div>

              {/* Pin dots indicator */}
              <div className="flex justify-center gap-4 py-3">
                {[0, 1, 2, 3].map((idx) => (
                  <div 
                    key={idx}
                    className={`w-4.5 h-4.5 rounded-full border-2 transition-all duration-150 ${
                      pinCode.length > idx 
                        ? "bg-brand-red border-brand-red scale-110 shadow-lg shadow-brand-red/30" 
                        : "border-zinc-700 bg-transparent"
                    }`}
                  />
                ))}
              </div>

              {/* Pin pad keypad */}
              <div className="grid grid-cols-3 gap-3 px-4">
                {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((num) => (
                  <button
                    key={num}
                    onClick={() => appendPinDigit(num)}
                    className="py-4 bg-zinc-900 hover:bg-zinc-800 active:bg-brand-red text-white hover:text-white rounded-2xl text-lg font-black font-mono transition-colors border border-zinc-800 focus:outline-none flex justify-center items-center cursor-pointer"
                  >
                    {num}
                  </button>
                ))}
                <button
                  onClick={clearPin}
                  className="py-4 bg-zinc-950 hover:bg-zinc-900 text-zinc-500 hover:text-white rounded-2xl text-[10px] uppercase font-black tracking-widest transition-colors border border-zinc-900 focus:outline-none flex justify-center items-center cursor-pointer"
                >
                  Clear
                </button>
                <button
                  onClick={() => appendPinDigit("0")}
                  className="py-4 bg-zinc-900 hover:bg-zinc-800 active:bg-brand-red text-white hover:text-white rounded-2xl text-lg font-black font-mono transition-colors border border-zinc-800 focus:outline-none flex justify-center items-center cursor-pointer"
                >
                  0
                </button>
                <button
                  onClick={() => setAuthScreen("login")}
                  className="py-4 bg-zinc-950 hover:bg-zinc-900 text-zinc-400 hover:text-white rounded-2xl text-[10px] uppercase font-black tracking-widest transition-colors border border-zinc-900 focus:outline-none flex justify-center items-center cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {/* AUTHENTICATION 3: TENANT REGISTRATION */}
          {authScreen === "register" && (
            <form onSubmit={handleRegisterSubmit} className="space-y-4 text-xs text-zinc-300">
              <div className="space-y-3">
                <div className="space-y-1">
                  <label className="font-bold text-zinc-500 uppercase font-mono tracking-wider">Enterprise Title</label>
                  <input
                    type="text"
                    required
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="Eurosia Properties Group"
                    className="w-full px-4 py-2.5 bg-zinc-900 border border-zinc-800 focus:border-brand-red outline-none rounded-xl text-white font-medium"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-zinc-500 uppercase font-mono tracking-wider">Supervisor Name</label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Engr. Rahman"
                    className="w-full px-4 py-2.5 bg-zinc-900 border border-zinc-800 focus:border-brand-red outline-none rounded-xl text-white font-medium"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-zinc-500 uppercase font-mono tracking-wider">Supervisor Mail</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="rahman@eurosia.com.bd"
                    className="w-full px-4 py-2.5 bg-zinc-900 border border-zinc-800 focus:border-brand-red outline-none rounded-xl text-white font-medium"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-zinc-500 uppercase font-mono tracking-wider">Sector</label>
                  <select
                    value={sector}
                    onChange={(e) => setSector(e.target.value)}
                    className="w-full px-4 py-2.5 bg-zinc-900 border border-zinc-800 focus:border-brand-red outline-none rounded-xl text-white font-medium text-xs font-mono"
                  >
                    <option value="builder">Real Estate Builder &amp; Dev</option>
                    <option value="contractor">Commercial Sub-contractor</option>
                    <option value="conglomerate">Logistics &amp; Infrastructure</option>
                  </select>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-brand-red hover:bg-white hover:text-black text-white font-extrabold rounded-xl transition-all uppercase tracking-wider text-xs shadow-lg cursor-pointer"
                >
                  Submit Registration Request
                </button>
                <button
                  type="button"
                  onClick={() => setAuthScreen("login")}
                  className="w-full py-2 bg-transparent text-zinc-500 hover:text-white font-bold rounded-xl text-[10px] uppercase font-mono tracking-widest text-center"
                >
                  Already registered? Sign In
                </button>
              </div>
            </form>
          )}

          {/* AUTHENTICATION 4: FORGOT PASSWORD */}
          {authScreen === "forgot" && (
            <form onSubmit={handleForgotSubmit} className="space-y-6 text-xs text-zinc-300 font-sans">
              <p className="text-[11px] text-zinc-400 text-center leading-relaxed">
                Provide your supervisor email address coordinate below. We will dispatch encrypted recovery procedures instantly.
              </p>

              <div className="space-y-1">
                <label className="font-bold text-zinc-500 uppercase font-mono tracking-wider">Registered Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="rahman@eurosia.com.bd"
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 focus:border-brand-red outline-none rounded-xl text-white font-medium"
                />
              </div>

              <div className="space-y-3">
                <button
                  type="submit"
                  className="w-full py-3 bg-brand-red hover:bg-white hover:text-black text-white font-extrabold rounded-xl transition-all uppercase tracking-wider text-xs cursor-pointer"
                >
                  Send Recovery Direct link
                </button>
                <button
                  type="button"
                  onClick={() => setAuthScreen("login")}
                  className="w-full py-2 bg-transparent text-zinc-500 hover:text-white font-bold rounded-xl text-[10px] uppercase font-mono tracking-widest text-center"
                >
                  Back to Sign In
                </button>
              </div>
            </form>
          )}

          {/* Core feedback banner alert */}
          {notification && (
            <div className={`p-3.5 rounded-xl flex items-center gap-2 text-[10px] font-bold border ${
              notification.type === "success" 
                ? "bg-emerald-950/50 border-emerald-900 text-emerald-300" 
                : "bg-red-950/50 border-red-900 text-brand-red"
            }`}>
              <AlertCircle className="w-4.5 h-4.5 shrink-0" />
              <span>{notification.message}</span>
            </div>
          )}

        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // PHASE 3: ADMIN DASHBOARD (Requirements Item 8)
  // ----------------------------------------------------
  return (
    <div className="bg-slate-50 min-h-screen text-left font-sans flex flex-col md:flex-row" id="admin-management-portal">
      <SEO 
        title="Admin Marketing Master Console | Eurosia Buildnex"
        description="Headquarters website and operations CRM. Manage inbound client leads, scheduling, SEO metadata and blog insights."
      />

      {/* SIDEBAR: Requirements Item 8 (Sidebar Logo) */}
      <aside className="w-full md:w-64 bg-[#050505] text-zinc-400 flex flex-col border-b md:border-b-0 md:border-r border-zinc-900 shrink-0 select-none">
        {/* Sidebar Header Branding */}
        <div className="flex items-center gap-3 p-6 border-b border-zinc-900 bg-black">
          <BrandLogo size="w-9 h-9" />
          <div className="flex flex-col text-left">
            <span className="font-extrabold text-sm text-white tracking-tight leading-none">
              Eurosia <span className="text-brand-red">Buildnex</span>
            </span>
            <span className="text-[8px] font-mono leading-none tracking-widest text-zinc-500 uppercase mt-1">
              Admin Console v1.0
            </span>
          </div>
        </div>

        {/* Sidebar Navigation */}
        <div className="p-4 flex-1 space-y-1.5 overflow-y-auto">
          <span className="text-[9px] font-black font-mono text-zinc-600 block pl-3.5 pb-2 uppercase tracking-wider">
            Ledger Modules
          </span>

          {[
            { id: "leads", name: "Inbound Leads", count: leads.length, icon: Users },
            { id: "demos", name: "Demo Requests", count: demos.length, icon: CalendarDays },
            { id: "blogs", name: "Insight Publisher", count: blogs.length, icon: BookOpen },
          ].map((tab) => {
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`w-full px-4 py-3 rounded-xl text-xs font-bold flex items-center gap-3 transition-all cursor-pointer text-left ${
                  isSelected
                    ? "bg-zinc-900 text-white shadow"
                    : "hover:text-white hover:bg-zinc-950 text-zinc-400"
                }`}
              >
                <tab.icon className={`w-4 h-4 shrink-0 ${isSelected ? "text-brand-red" : ""}`} />
                <span className="flex-1">{tab.name}</span>
                {tab.count !== null && (
                  <span className={`text-[9px] px-1.5 py-0.5 rounded font-mono font-black ${
                    isSelected ? "bg-brand-red text-white" : "bg-zinc-900 text-zinc-500"
                  }`}>
                    {tab.count}
                  </span>
                )}
              </button>
            );
          })}

          <span className="text-[9px] font-black font-mono text-zinc-600 block pl-3.5 pt-4 pb-2 uppercase tracking-wider">
            Global Metadata
          </span>

          {[
            { id: "settings", name: "Website Settings", icon: Settings },
            { id: "seo", name: "SEO Optimization", icon: Globe },
          ].map((tab) => {
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`w-full px-4 py-3 rounded-xl text-xs font-bold flex items-center gap-3 transition-all cursor-pointer text-left ${
                  isSelected
                    ? "bg-zinc-900 text-white shadow"
                    : "hover:text-white hover:bg-zinc-950 text-zinc-400"
                }`}
              >
                <tab.icon className={`w-4 h-4 shrink-0 ${isSelected ? "text-brand-red" : ""}`} />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* Sidebar Footer Logout */}
        <div className="p-4 border-t border-zinc-900 bg-black">
          <button
            onClick={() => { setIsLoggedIn(false); showNotification("Logged out safely.", "success"); }}
            className="w-full flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-bold hover:bg-zinc-950 hover:text-white text-zinc-500 uppercase font-mono tracking-wider transition-colors cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5 text-zinc-600" />
            <span>Secure Logout</span>
          </button>
        </div>
      </aside>

      {/* WORKSPACE & TOP BAR: Requirements Item 8 (Top Navbar Logo) */}
      <main className="flex-1 flex flex-col min-w-0">
        
        {/* TOP NAVBAR */}
        <header className="h-16 bg-white border-b border-gray-150 flex items-center justify-between px-6 shrink-0 select-none">
          <div className="flex items-center gap-2.5">
            {/* Desktop breadcrumb logo */}
            <div className="md:hidden flex items-center gap-1.5 mr-2">
              <BrandLogo size="w-7 h-7" />
              <span className="font-extrabold text-xs text-black">eurosia</span>
            </div>
            <Grid className="w-4.5 h-4.5 text-zinc-500 hidden md:block" />
            <div className="text-xs font-bold text-gray-500 items-center gap-1 hidden md:flex font-mono">
              <span className="hover:text-black transition-colors">Supervisor</span>
              <ChevronRight className="w-3 h-3" />
              <span className="text-black uppercase">{activeTab} Ledger</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-right">
              <span className="text-[11px] font-bold text-black block leading-none">Engr. Rahman</span>
              <span className="text-[8px] font-black text-emerald-600 uppercase font-mono leading-none flex items-center gap-1 justify-end">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span> Active Sync
              </span>
            </div>
            
            <div className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center font-mono font-extrabold text-xs text-white">
              ER
            </div>
          </div>
        </header>

        {/* CORE WORKSPACE CONTENT AREA */}
        <div className="p-6 md:p-8 flex-1 overflow-y-auto space-y-6">
          
          {/* Top Banner section */}
          <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl md:flex justify-between items-center gap-6 border-b-4 border-brand-red relative overflow-hidden shadow-sm">
            <div className="absolute inset-0 bg-[radial-gradient(#cc1a2f_0.5px,transparent_0.5px)] [background-size:16px_16px] opacity-10"></div>
            <div className="space-y-1 relative z-10">
              <span className="text-[8px] bg-brand-red text-white font-mono font-extrabold px-2 py-0.5 rounded uppercase tracking-widest">
                Ledger Sync Active
              </span>
              <h2 className="text-xl sm:text-2xl font-black tracking-tight mt-1">
                Eurosia Buildnex Corporate Terminal
              </h2>
              <p className="text-xs text-zinc-400">
                Authorized Workspace: Eurosia Technologies Ltd. Dhaka, Bangladesh.
              </p>
            </div>
            
            <button 
              onClick={loadAllData}
              className="mt-4 md:mt-0 px-4 py-2.5 bg-black border border-zinc-800 rounded-xl hover:border-white font-mono text-[11px] font-bold text-zinc-100 transition-colors cursor-pointer relative z-10 flex items-center gap-2 justify-center"
            >
              Force Sync Database
            </button>
          </div>

          {/* Notification Alert banners inside workspace */}
          {notification && (
            <div className={`p-4 rounded-xl flex items-center gap-2 border text-xs font-bold transition-all bg-white shadow-sm ${
              notification.type === "success" 
                ? "border-emerald-200 text-emerald-800" 
                : "border-red-200 text-brand-red"
            }`}>
              <CheckCircle className={`w-5 h-5 shrink-0 ${notification.type === "success" ? "text-emerald-500" : "text-brand-red"}`} />
              <span>{notification.message}</span>
            </div>
          )}

          {error && (
            <div className="p-4 bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold rounded-xl flex items-center gap-2">
              <AlertCircle className="w-5 h-5 shrink-0 text-amber-600" />
              <span>{error} - Make sure local server is initialized and running.</span>
            </div>
          )}

          {/* ACTIVE MODULE CONTAINER */}
          {loading ? (
            <div className="text-center py-24 bg-white border border-gray-150 rounded-3xl">
              <Loader2 className="w-8 h-8 animate-spin text-brand-red mx-auto mb-4" />
              <p className="text-xs text-gray-400 font-mono">Consolidating Ledger Nodes...</p>
            </div>
          ) : (
            <div className="bg-white border border-gray-150 rounded-3xl p-6 sm:p-8 shadow-sm">
              
              {/* 1. Leads Content */}
              {activeTab === "leads" && (
                <div className="space-y-6">
                  <div className="border-b pb-4">
                    <h3 className="font-extrabold text-lg text-black">Inbound Leads Ledger</h3>
                    <p className="text-xs text-gray-400">Direct inquiries filed through the website contact coordinates.</p>
                  </div>

                  {leads.length > 0 ? (
                    <div className="divide-y divide-gray-150 text-xs">
                      {leads.map((lead) => (
                        <div key={lead.id} className="py-6 first:pt-0 last:pb-0 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                          <div className="md:col-span-4 space-y-2">
                            <p className="font-bold text-base text-black">{lead.name}</p>
                            <p className="text-xs text-brand-red font-semibold">{lead.company}</p>
                            <div className="flex flex-col gap-1.5 text-gray-400 font-mono text-[11px] pt-1">
                              <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5" /> {lead.email}</span>
                              <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" /> {lead.phone}</span>
                            </div>
                          </div>

                          <div className="md:col-span-8 bg-slate-50 p-4 rounded-xl border border-slate-100 flex flex-col justify-between">
                            <p className="text-gray-700 leading-relaxed italic">&ldquo;{lead.message}&rdquo;</p>
                            <p className="text-[10px] text-gray-400 font-mono mt-4 text-right">Filed At: {lead.submittedAt}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-16">
                      <p className="text-gray-400 text-sm">No inbound contact inquiries recorded yet.</p>
                    </div>
                  )}
                </div>
              )}

              {/* 2. Demos Content */}
              {activeTab === "demos" && (
                <div className="space-y-6">
                  <div className="border-b pb-4">
                    <h3 className="font-extrabold text-lg text-black">Demo Requests Matrix</h3>
                    <p className="text-xs text-gray-400">Direct demo bookings mapped to system needs and sizing.</p>
                  </div>

                  {demos.length > 0 ? (
                    <div className="divide-y divide-gray-150 text-xs">
                      {demos.map((demo) => (
                        <div key={demo.id} className="py-6 first:pt-0 last:pb-0 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                          <div className="lg:col-span-4 space-y-2">
                            <div className="flex items-center gap-2">
                              <p className="font-bold text-base text-black">{demo.name}</p>
                              <button
                                onClick={() => updateDemoStatus(demo.id, demo.status)}
                                disabled={actionLoading}
                                className={`px-2 py-0.5 rounded uppercase font-black font-mono text-[9px] border hover:bg-slate-50 cursor-pointer ${
                                  demo.status === "completed" ? "bg-emerald-50 border-emerald-200 text-emerald-800" :
                                  demo.status === "scheduled" ? "bg-indigo-50 border-indigo-200 text-indigo-800" :
                                  demo.status === "contacted" ? "bg-blue-50 border-blue-200 text-blue-800" :
                                  "bg-amber-50 border-amber-200 text-amber-800"
                                }`}
                              >
                                {demo.status}
                              </button>
                            </div>

                            <p className="text-xs text-brand-red font-bold flex items-center gap-1 pt-1">
                              <Building className="w-4 h-4 shrink-0" /> {demo.company}
                            </p>
                            
                            <div className="flex flex-col gap-1 text-gray-400 font-mono text-[10px] pt-1 leading-snug">
                              <span>Email: {demo.email}</span>
                              <span>Phone: {demo.phone}</span>
                              <span>Staff density: <strong className="text-black">{demo.employeeCount}</strong></span>
                              <span>Focus Module: <strong className="text-black">{demo.primaryNeed}</strong></span>
                            </div>
                          </div>

                          <div className="lg:col-span-8 bg-slate-50 p-4 rounded-xl border border-slate-100 flex flex-col justify-between">
                            <p className="text-gray-700 leading-relaxed italic">&ldquo;{demo.message}&rdquo;</p>
                            <p className="text-[10px] text-gray-400 font-mono mt-4 text-right">Logged At: {demo.submittedAt}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-16">
                      <p className="text-gray-400 text-sm">No demo bookings saved in directory.</p>
                    </div>
                  )}
                </div>
              )}

              {/* 3. Blogs Content */}
              {activeTab === "blogs" && (
                <div className="space-y-8">
                  <div className="border-b pb-4">
                    <h3 className="font-extrabold text-lg text-black">Insights Publishing Control</h3>
                    <p className="text-xs text-gray-400">Post educational articles directly to the Eurosia marketing blog index.</p>
                  </div>

                  {/* Blog form */}
                  <form onSubmit={handleBlogSubmit} className="bg-slate-50 p-6 rounded-2xl border border-gray-150 space-y-4 text-xs text-gray-700 text-left">
                    <h4 className="font-black text-sm text-black flex items-center gap-1.5 border-b pb-2">
                      <PlusCircle className="w-4.5 h-4.5 text-brand-red" /> Draft Educational Insights Article
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="font-bold text-gray-400 font-mono uppercase tracking-wider text-[9px]">Post Title</label>
                        <input
                          type="text"
                          required
                          value={newBlog.title}
                          onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
                          placeholder="e.g. Navigating Concrete Pour Logs Offline"
                          className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-xs font-semibold"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="font-bold text-gray-400 font-mono uppercase tracking-wider text-[9px]">Category</label>
                        <select
                          value={newBlog.category}
                          onChange={(e) => setNewBlog({ ...newBlog, category: e.target.value as any })}
                          className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-xs"
                        >
                          <option value="technology">Technology &amp; WASM</option>
                          <option value="enterprise">Enterprise ERP System</option>
                          <option value="offline-sync">Offline-Sync Architecture</option>
                          <option value="industry-insights">Civil Industry Insights</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="font-bold text-gray-400 font-mono uppercase tracking-wider text-[9px]">Brief Description Preview</label>
                      <input
                        type="text"
                        required
                        value={newBlog.summary}
                        onChange={(e) => setNewBlog({ ...newBlog, summary: e.target.value })}
                        placeholder="Write a concise preview..."
                        className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-xs"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-bold text-gray-400 font-mono uppercase tracking-wider text-[9px]">Article Content</label>
                      <textarea
                        required
                        rows={6}
                        value={newBlog.content}
                        onChange={(e) => setNewBlog({ ...newBlog, content: e.target.value })}
                        placeholder="Start writing the informative article here..."
                        className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-xs font-sans"
                      ></textarea>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="space-y-1">
                        <label className="font-bold text-gray-400 font-mono uppercase tracking-wider text-[9px]">Author Name</label>
                        <input
                          type="text"
                          value={newBlog.authorName}
                          onChange={(e) => setNewBlog({ ...newBlog, authorName: e.target.value })}
                          className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-xs"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="font-bold text-gray-400 font-mono uppercase tracking-wider text-[9px]">Author Position</label>
                        <input
                          type="text"
                          value={newBlog.authorRole}
                          onChange={(e) => setNewBlog({ ...newBlog, authorRole: e.target.value })}
                          className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-xs"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="font-bold text-gray-400 font-mono uppercase tracking-wider text-[9px]">Cover Image URL</label>
                        <input
                          type="text"
                          value={newBlog.coverImage}
                          onChange={(e) => setNewBlog({ ...newBlog, coverImage: e.target.value })}
                          className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-xs"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={actionLoading}
                      className="bg-black hover:bg-brand-red text-white text-xs font-black px-6 py-3 rounded-xl transition-all shadow-md cursor-pointer"
                    >
                      Publish Article Securely
                    </button>
                  </form>

                  {/* List of current blogs */}
                  <div className="space-y-4">
                    <h4 className="font-extrabold text-sm text-black uppercase tracking-wider border-b pb-2">Active Published Articles</h4>
                    <div className="divide-y divide-gray-150">
                      {blogs.map((b) => (
                        <div key={b.id} className="py-4 flex justify-between items-center text-xs">
                          <div className="space-y-1 text-left">
                            <p className="font-bold text-sm text-black">{b.title}</p>
                            <div className="space-x-3 text-gray-400 font-mono text-[10px]">
                              <span>Slug: <strong className="text-gray-700">{b.slug}</strong></span>
                              <span>Category: <strong className="text-gray-700">{b.category}</strong></span>
                              <span>Date: <strong>{b.publishedAt}</strong></span>
                            </div>
                          </div>

                          <button
                            onClick={() => deleteBlogPost(b.id)}
                            disabled={actionLoading}
                            className="text-brand-red hover:bg-red-50 p-2 rounded-lg transition-colors cursor-pointer shrink-0"
                            title="Delete publication"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* 4. Settings Modification */}
              {activeTab === "settings" && (
                <div className="space-y-6">
                  <div className="border-b pb-4">
                    <h3 className="font-extrabold text-lg text-black">Global Website Branding Configuration</h3>
                    <p className="text-xs text-gray-400">Manage direct numbers and socials listed inside headers, footers and layouts.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-slate-700">
                    <div className="space-y-2">
                      <label className="font-bold text-gray-400 uppercase font-mono tracking-wider">Corporate Hotline</label>
                      <input
                        type="text"
                        value={webSettings.phone}
                        onChange={(e) => setWebSettings({ ...webSettings, phone: e.target.value })}
                        className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-bold text-gray-400 uppercase font-mono tracking-wider">WhatsApp Coordinate</label>
                      <input
                        type="text"
                        value={webSettings.whatsapp}
                        onChange={(e) => setWebSettings({ ...webSettings, whatsapp: e.target.value })}
                        className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-bold text-gray-400 uppercase font-mono tracking-wider">Contact Mail Inbox</label>
                      <input
                        type="email"
                        value={webSettings.email}
                        onChange={(e) => setWebSettings({ ...webSettings, email: e.target.value })}
                        className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-bold text-gray-400 uppercase font-mono tracking-wider">Facebook Page Link</label>
                      <input
                        type="text"
                        value={webSettings.facebook}
                        onChange={(e) => setWebSettings({ ...webSettings, facebook: e.target.value })}
                        className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <button
                      onClick={() => saveSettings("web")}
                      className="bg-black hover:bg-brand-red text-white font-bold text-xs px-6 py-3 rounded-xl shadow-md cursor-pointer"
                    >
                      Save Global Configurations
                    </button>
                  </div>
                </div>
              )}

              {/* 5. SEO Overrides */}
              {activeTab === "seo" && (
                <div className="space-y-6">
                  <div className="border-b pb-4">
                    <h3 className="font-extrabold text-lg text-black">SEO Metadata Override Console</h3>
                    <p className="text-xs text-gray-400">Administered parameters for web spiders, crawling robots and schema indexes.</p>
                  </div>

                  <div className="space-y-4 text-xs text-slate-700">
                    <div className="space-y-1">
                      <label className="font-bold text-gray-400 uppercase font-mono tracking-wider">Default Site Prefix Title</label>
                      <input
                        type="text"
                        value={seoSettings.globalPrefix}
                        onChange={(e) => setSeoSettings({ ...seoSettings, globalPrefix: e.target.value })}
                        className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-xl"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="font-bold text-gray-400 uppercase font-mono tracking-wider">Meta Description template</label>
                      <textarea
                        rows={3}
                        value={seoSettings.metaDesc}
                        onChange={(e) => setSeoSettings({ ...seoSettings, metaDesc: e.target.value })}
                        className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-xl"
                      ></textarea>
                    </div>
                    <div className="space-y-1">
                      <label className="font-bold text-gray-400 uppercase font-mono tracking-wider">Fallback Keyword Tags (comma separated)</label>
                      <input
                        type="text"
                        value={seoSettings.keywords}
                        onChange={(e) => setSeoSettings({ ...seoSettings, keywords: e.target.value })}
                        className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="pt-4 border-t flex justify-between items-center flex-wrap gap-4">
                    <button
                      onClick={() => saveSettings("seo")}
                      className="bg-black hover:bg-brand-red text-white font-bold text-xs px-6 py-3 rounded-xl shadow-md cursor-pointer"
                    >
                      Override Live Metadata Indexes
                    </button>
                    <p className="text-[10px] text-gray-400 font-mono">
                      Schema ID: <strong>SoftwareApplication, ERP</strong> &bull; Index target: <strong>Public Google Bots</strong>
                    </p>
                  </div>
                </div>
              )}

            </div>
          )}

        </div>
      </main>
    </div>
  );
}
