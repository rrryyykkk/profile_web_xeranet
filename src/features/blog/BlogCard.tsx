import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { Clock, Tag, ArrowRight } from "lucide-react";
import { type BlogPost } from "@/types/blog.types";

interface BlogCardProps {
  post: BlogPost;
  idx: number;
}

export const BlogCard = ({ post, idx }: BlogCardProps) => {
  const { t } = useTranslation();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.96, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 10 }}
      transition={{
        duration: 0.4,
        delay: idx * 0.05,
        ease: "easeOut",
        layout: { duration: 0.3 },
      }}
      className="flex flex-col bg-slate-50 dark:bg-slate-900 rounded-3xl border border-border overflow-hidden hover:shadow-lg transition-shadow group"
      style={{ borderTop: `4px solid ${post.color}` }}
    >
      {/* Thumbnail box */}
      <div
        className="h-48 flex items-center justify-center p-8 relative overflow-hidden group-hover:opacity-95 transition-opacity"
        style={{ background: post.bg }}
      >
        {post.tag && (
          <span className="absolute top-4 left-4 text-[10px] font-black tracking-widest uppercase bg-white dark:bg-slate-950 text-slate-800 dark:text-white px-2 py-1 rounded-md shadow-sm">
            {post.tag}
          </span>
        )}
        <Tag className="h-16 w-16 text-slate-800/10 dark:text-white/10" />
      </div>

      {/* Metadata & Title */}
      <div className="p-6 flex flex-col justify-between grow gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3 text-xs text-slate-400 font-semibold uppercase">
            <span className="text-primary font-bold">{post.category}</span>
            <span>&bull;</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" /> {post.readTime} {t("blog.readTime")}
            </span>
          </div>

          <h3 className="text-lg font-extrabold text-slate-900 dark:text-white group-hover:text-primary transition-colors leading-tight line-clamp-2 mt-1">
            {post.title}
          </h3>

          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed line-clamp-3 mt-1">
            {post.excerpt}
          </p>
        </div>

        <div className="flex items-center justify-between mt-2 pt-4 border-t border-border/50">
          <span className="text-xs text-slate-400 font-semibold">
            {post.date}
          </span>
          <Link
            to={`/blog/${post.id}`}
            className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-dark group-hover:gap-2 transition-all"
          >
            {t("common.readMore")}
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;
