import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, Loader2, User, Share2, Construction } from "lucide-react";
import { BlogPost } from "../types";
import SEO from "../components/SEO";

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadPost() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/blog/${slug}`);
        if (!res.ok) {
          throw new Error("Educational log could not be located in server database.");
        }
        const data = await res.json();
        setPost(data);
      } catch (err: any) {
        setError(err?.message || "Failure downloading operational log.");
      } finally {
        setLoading(false);
      }
    }
    if (slug) {
      loadPost();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center py-20 text-center font-sans">
        <Loader2 className="w-8 h-8 animate-spin text-brand-red mb-3" />
        <p className="text-xs text-gray-400 font-mono">Synchronizing Educational Post Record...</p>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center py-20 text-center font-sans">
        <div className="max-w-md p-8 bg-white border border-gray-200 rounded-3xl space-y-4 shadow-sm">
          <p className="text-sm font-bold text-brand-red font-mono uppercase">Operational Check Block</p>
          <h2 className="text-xl font-bold text-black">Log Record Unavailable</h2>
          <p className="text-xs text-gray-500 leading-relaxed">
            The target article could not be resolved. It may have been modified or deleted inside the management portal.
          </p>
          <div className="pt-2">
            <Link to="/blog" className="bg-black hover:bg-brand-red text-white text-xs font-bold px-5 py-3 rounded-lg inline-flex items-center gap-1">
              <ArrowLeft className="w-4 h-4" />
              Return To Directory
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen text-left font-sans">
      <SEO 
        title={post.title}
        description={post.summary}
        keywords={`eurosia blog, ${post.category}, construction ERP, builders management`}
      />

      {/* Main Container */}
      <section className="py-12 bg-slate-50/50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-brand-red mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Insights Index
          </Link>

          {/* Article Header */}
          <div className="space-y-6">
            <span className="text-[10px] font-bold font-mono tracking-widest uppercase bg-brand-blue text-white px-2.5 py-1 rounded">
              {post.category}
            </span>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black tracking-tight leading-tight">
              {post.title}
            </h1>

            <p className="text-gray-500 text-sm max-w-3xl leading-relaxed italic">
              &ldquo;{post.summary}&rdquo;
            </p>

            {/* Author row */}
            <div className="pt-4 border-t border-gray-200 flex flex-wrap gap-6 items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-100 text-brand-red flex items-center justify-center font-bold text-sm font-mono border border-brand-red/10 animate-pulse">
                  {post.author?.name ? post.author.name.split(" ").map((n) => n[0]).join("") : "EB"}
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-black">{post.author?.name || "Eurosia Civil Engineer"}</h4>
                  <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">{post.author?.role || "ERP Strategist"}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs text-gray-400 font-mono">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {post.publishedAt}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Body */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* cover image layout */}
          {post.coverImage && (
            <div className="rounded-3xl overflow-hidden h-72 sm:h-96 bg-slate-900 border border-gray-100 mb-12 shadow-sm">
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          )}

          {/* Content parsing (splitting by paragraphs correctly) */}
          <div className="prose max-w-none text-xs sm:text-sm text-gray-750 leading-relaxed space-y-6">
            {post.content.split("\n\n").map((para, pIdx) => {
              if (para.trim().startsWith("###")) {
                return (
                  <h3 key={pIdx} className="text-lg sm:text-xl font-bold text-black pt-4 pb-1 border-b border-slate-50">
                    {para.replace("###", "").trim()}
                  </h3>
                );
              }
              if (para.trim().startsWith("-") || para.trim().startsWith("*")) {
                const parts = para.split("\n");
                return (
                  <ul key={pIdx} className="list-disc pl-6 space-y-2 mt-2">
                    {parts.map((p, itemIdx) => (
                      <li key={itemIdx}>{p.replace(/^[-*]\s*/, "").trim()}</li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={pIdx} className="leading-relaxed">
                  {para}
                </p>
              );
            })}
          </div>

          {/* Social share column */}
          <div className="pt-12 mt-12 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400 font-mono">
            <span>Corporate Publications Unit Ledger</span>
            <button 
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                alert("Article URL copied to clipboard for direct corporate sharing!");
              }}
              className="flex items-center gap-1.5 p-1.5 hover:text-black hover:bg-gray-50 border rounded-lg hover:border-gray-300 transition-colors cursor-pointer"
            >
              <Share2 className="w-4 h-4" /> Share This Article
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
