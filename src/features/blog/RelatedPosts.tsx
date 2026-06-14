import { Link } from "react-router-dom";
import { Tag } from "lucide-react";
import { type BlogPost } from "@/types/blog.types";

interface RelatedPostsProps {
  posts: BlogPost[];
}

export const RelatedPosts = ({ posts }: RelatedPostsProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-extrabold text-slate-900 dark:text-white text-lg border-b border-border pb-2">
        Artikel Terkait
      </h3>
      <div className="flex flex-col gap-4">
        {posts.map((rPost) => (
          <Link
            key={rPost.id}
            to={`/blog/${rPost.id}`}
            className="group flex gap-3 items-center hover:opacity-95"
          >
            <div
              className="w-20 h-20 rounded-2xl shrink-0 flex items-center justify-center text-white font-extrabold"
              style={{ background: rPost.bg }}
            >
              <Tag className="h-6 w-6 text-white/20" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold text-primary uppercase">
                {rPost.category}
              </span>
              <h4 className="font-bold text-slate-900 dark:text-white text-sm group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                {rPost.title}
              </h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;
