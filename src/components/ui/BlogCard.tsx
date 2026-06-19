import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { BlogPost } from "../../types";
import { TiltCard } from "./MotionWrappers";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case "offline-sync":
        return "bg-red-50 text-brand-red border-red-100";
      case "technology":
        return "bg-blue-50 text-brand-blue border-blue-100";
      case "enterprise":
        return "bg-indigo-50 text-indigo-700 border-indigo-100";
      default:
        return "bg-slate-50 text-gray-700 border-gray-100";
    }
  };

  const getCategoryLabel = (cat: string) => {
    return cat.toUpperCase().replace("-", " ");
  };

  return (
    <TiltCard 
      className="bg-white border border-gray-200 overflow-hidden"
      id={`blog-card-${post.id}`}
    >
      <div className="flex flex-col h-full text-left group">
        <div className="relative overflow-hidden aspect-[16/9] bg-neutral-100 shrink-0">
          <img 
            src={post.coverImage} 
            alt={post.title}
            referrerPolicy="no-referrer"
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          />
          <span className={`absolute top-4 left-4 border text-[9px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm z-10 ${getCategoryColor(post.category)}`}>
            {getCategoryLabel(post.category)}
          </span>
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center gap-4 text-xs text-gray-400 mb-3 font-mono">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {post.publishedAt}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>

          <h3 className="text-lg font-bold text-black mb-3 line-clamp-2 leading-snug group-hover:text-brand-red transition-colors font-sans">
            <Link to={`/blog/${post.slug}`} className="hover:underline">
              {post.title}
            </Link>
          </h3>

          <p className="text-sm text-gray-500 mb-6 line-clamp-3 leading-relaxed font-sans">
            {post.summary}
          </p>

          <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-slate-100 font-bold text-xs text-slate-700 flex items-center justify-center border border-gray-200 shrink-0">
                {post.author.name.charAt(0) + (post.author.name.split(" ")[1]?.charAt(0) || "")}
              </div>
              <div>
                <p className="text-xs font-bold text-black leading-none">{post.author.name}</p>
                <p className="text-[10px] text-gray-400 leading-none mt-1">{post.author.role}</p>
              </div>
            </div>

            <Link 
              to={`/blog/${post.slug}`}
              className="text-brand-red font-bold text-xs flex items-center gap-1 group-hover:gap-2 transition-all"
            >
              Read Article
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </TiltCard>
  );
}
