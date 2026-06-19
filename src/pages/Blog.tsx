import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, Calendar, User, Clock, Loader2, BookOpen } from "lucide-react";
import { BlogPost } from "../types";
import SEO from "../components/SEO";

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("/api/blog");
        if (res.ok) {
          const data = await res.json();
          setPosts(data);
        }
      } catch (err) {
        console.error("Failed to load blog posts:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-white min-h-screen text-left font-sans">
      <SEO 
        title="Insights, Technical Logs & Construction ERP Blog"
        description="Explore the Eurosia Buildnex blog. Read educational logs on smart project tracking, local SQLite sync, and real estate developer CRM guidelines."
        keywords="construction erp articles, offline sync tech blogs, property management blog posts, eurosia builders guide"
      />

      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-4">
          <span className="text-[11px] font-bold text-brand-red uppercase tracking-widest bg-zinc-900 border border-zinc-800 px-3 py-1 rounded">
            Corporate Insights &amp; Engineering Logs
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Eurosia Buildnex Knowledge Base
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm max-w-2xl leading-relaxed">
            Read comprehensive structural guidelines, accounting principles, and tech insights penned by our Bangladesh consulting engineers and ERP architects.
          </p>
        </div>
      </section>

      {/* Main Grid Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Controls Bar */}
          <div className="p-4 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search articles..."
                className="pl-10 pr-4 py-2 w-full border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-brand-blue"
              />
            </div>

            {/* Category selection */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              {[
                { name: "All Insights", value: "all" },
                { name: "Technology", value: "technology" },
                { name: "Enterprise Systems", value: "enterprise" },
                { name: "Offline-Sync Engineering", value: "offline-sync" },
                { name: "Industry Insights", value: "industry-insights" },
              ].map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`px-3 py-2 rounded-lg text-xs font-bold transition-all ${
                    selectedCategory === cat.value
                      ? "bg-black text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-600"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Core Content output */}
          {loading ? (
            <div className="text-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-brand-red mx-auto mb-4" />
              <p className="text-xs text-gray-400 font-mono">Synchronizing Educational Logs...</p>
            </div>
          ) : filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white border border-gray-200 hover:border-brand-red/30 rounded-2xl overflow-hidden flex flex-col justify-between group hover:shadow-lg transition-all duration-300"
                >
                  <div>
                    {/* Visual Cover */}
                    <div className="relative h-44 bg-slate-900 overflow-hidden">
                      <img
                        src={post.coverImage || "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=640&auto=format&fit=crop"}
                        alt={post.title}
                        className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <span className="absolute top-4 left-4 bg-brand-blue text-white text-[9px] uppercase font-bold px-2 py-0.5 rounded shadow">
                        {post.category}
                      </span>
                    </div>

                    <div className="p-6 space-y-3">
                      {/* Meta information row */}
                      <div className="flex items-center gap-4 text-[10px] text-gray-400 font-mono">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {post.publishedAt}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="font-extrabold text-base text-black group-hover:text-brand-red transition-colors leading-snug">
                        <Link to={`/blog/${post.slug}`} id={`blog-link-${post.id}`}>
                          {post.title}
                        </Link>
                      </h3>

                      <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">
                        {post.summary}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-gray-100 mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-red-150 text-brand-red flex items-center justify-center font-bold text-[10px] font-mono">
                        {post.author?.name ? post.author.name.split(" ").map((n) => n[0]).join("") : "EA"}
                      </div>
                      <span className="text-[10px] font-semibold text-gray-700">{post.author?.name || "Eurosia Architect"}</span>
                    </div>

                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-xs font-bold text-brand-red hover:text-black flex items-center gap-1"
                    >
                      Read Log &rarr;
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white border rounded-2xl">
              <BookOpen className="w-8 h-8 text-gray-300 mx-auto mb-2" />
              <p className="text-xs text-gray-400">No matching search logs could be located. Broaden your categories.</p>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
