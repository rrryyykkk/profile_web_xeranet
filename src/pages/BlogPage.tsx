import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Search } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { Newsletter } from "@/components/sections/Newsletter";
import { CTASection } from "@/components/sections/CTASection";
import { SEO } from "@/components/layout/SEO";
import { blogPosts } from "@/data/blogData";
import { CategoryFilter } from "@/features/blog/CategoryFilter";
import { BlogGrid } from "@/features/blog/BlogGrid";

export const BlogPage = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === "Semua" || post.category === selectedCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleReset = () => {
    setSelectedCategory("Semua");
    setSearchQuery("");
  };

  return (
    <div className="w-full bg-white dark:bg-slate-950">
      <SEO title={t("blog.title")} description={t("blog.subtitle")} />

      {/* Page Header */}
      <PageHeader
        badge="Wawasan & Tips"
        title="Artikel &"
        titleHighlight="Berita"
        description={t("blog.subtitle")}
      />

      {/* Sticky Filter & Search Bar */}
      <div className="sticky top-17 z-30 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-border py-4">
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row gap-4 items-center justify-between max-w-6xl">
          {/* Category Chips */}
          <CategoryFilter
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder={t("blog.searchPlaceholder")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2.5 rounded-xl border border-border bg-slate-50 dark:bg-slate-900 text-sm w-full focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
            />
          </div>
        </div>
      </div>

      {/* Blog Grid Content */}
      <section className="py-16">
        <BlogGrid posts={filteredPosts} onReset={handleReset} />
      </section>

      {/* Newsletter */}
      <Newsletter />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default BlogPage;
