import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "motion/react";
import { Inbox } from "lucide-react";
import { type BlogPost } from "@/types/blog.types";
import { BlogCard } from "./BlogCard";

interface BlogGridProps {
  posts: BlogPost[];
  onReset: () => void;
}

export const BlogGrid = ({ posts, onReset }: BlogGridProps) => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 md:px-8 max-w-6xl min-h-[40vh]">
      <AnimatePresence mode="popLayout">
        {posts.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {posts.map((post, idx) => (
              <BlogCard key={post.id} post={post} idx={idx} />
            ))}
          </motion.div>
        ) : (
          /* Empty State */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center py-20 text-center max-w-sm mx-auto"
          >
            <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-slate-400 mb-6 border border-border">
              <Inbox className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">
              Tidak Ada Artikel
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mt-1">
              {t("blog.noResults")}
            </p>
            <button
              onClick={onReset}
              className="mt-6 px-5 py-2.5 rounded-xl border border-border text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 dark:text-white transition-all cursor-pointer"
            >
              {t("blog.reset")}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BlogGrid;
