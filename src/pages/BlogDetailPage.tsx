import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion, useScroll, useSpring } from "motion/react";
import {
  Calendar,
  Clock,
  Share2,
  Bookmark,
  ArrowLeft,
  ArrowRight,
  MessageSquare,
} from "lucide-react";
import { SEO } from "@/components/layout/SEO";
import { CheckCircleIcon } from "@/components/ui/CheckCircleIcon";
import { blogPosts } from "@/data/blogData";
import { RelatedPosts } from "@/features/blog/RelatedPosts";

export const BlogDetailPage = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.id === Number(id));

  // Hook for Reading Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  if (!post) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-white dark:bg-slate-950 gap-6 px-4 text-center">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
          Artikel Tidak Ditemukan
        </h2>
        <p className="text-slate-500 max-w-sm">
          Artikel yang Anda cari tidak tersedia atau telah dihapus.
        </p>
        <Link to="/blog">
          <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-all cursor-pointer">
            <ArrowLeft className="h-4 w-4" /> Kembali ke Blog
          </button>
        </Link>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        })
        .catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Tautan disalin ke papan klip!");
    }
  };

  // Get related posts (exclude current)
  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <div className="w-full bg-white dark:bg-slate-950 pb-20 relative">
      <SEO
        title={post.title}
        description={post.excerpt}
        url={`https://xeranet.co.id/blog/${post.id}`}
        type="article"
      />

      {/* Reading Progress Bar (Fixed below sticky navbar) */}
      <motion.div
        className="fixed top-17 left-0 right-0 h-1 z-50 origin-left"
        style={{
          scaleX,
          background: `linear-gradient(to right, ${post.color}, #3b82f6)`,
        }}
      />

      {/* Article Hero Header */}
      <section className="relative pt-28 pb-16 md:pt-36 bg-linear-to-b from-slate-50 to-white dark:from-slate-900/40 dark:to-slate-950 border-b border-border overflow-hidden">
        {/* Dot grid decoration */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-size-[2.5rem_2.5rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_100%,#000_80%,transparent_100%)] opacity-30 pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8 max-w-4xl relative z-10">
          <div className="flex flex-col gap-6">
            {/* Breadcrumb & tag */}
            <div className="flex items-center gap-3 text-xs md:text-sm font-semibold text-slate-400">
              <Link to="/blog" className="hover:text-primary transition-colors">
                Blog
              </Link>
              <span>/</span>
              <span className="text-primary font-bold">{post.category}</span>
            </div>

            {/* Title */}
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white leading-tight tracking-tight">
              {post.title}
            </h1>

            {/* Author meta & actions */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border/60">
              <div className="flex items-center gap-6 text-xs md:text-sm text-slate-500 dark:text-slate-400 font-semibold">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4 text-slate-400" /> {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-slate-400" /> {post.readTime}{" "}
                  {t("blog.readTime")}
                </span>
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handleShare}
                  className="p-2 rounded-xl border border-border text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                  title="Bagikan"
                >
                  <Share2 className="h-4 w-4" />
                </button>
                <button
                  className="p-2 rounded-xl border border-border text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                  title="Simpan"
                >
                  <Bookmark className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Sidebar Kiri: Sticky actions (desktop) */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="sticky top-32 flex flex-col items-center gap-4 py-4 border-r border-border/50 pr-4">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                  Aksi
                </span>
                <button
                  onClick={handleShare}
                  className="p-3 rounded-2xl border border-border bg-white dark:bg-slate-900 text-slate-500 hover:border-primary hover:text-primary transition-all cursor-pointer shadow-sm"
                  title="Bagikan"
                >
                  <Share2 className="h-4 w-4" />
                </button>
                <button
                  className="p-3 rounded-2xl border border-border bg-white dark:bg-slate-900 text-slate-500 hover:border-primary hover:text-primary transition-all cursor-pointer shadow-sm"
                  title="Simpan"
                >
                  <Bookmark className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Middle: Article Body content */}
            <article className="lg:col-span-7 flex flex-col gap-6">
              {/* Dynamic render of content blocks */}
              {post.content.map((block, idx) => {
                switch (block.type) {
                  case "intro":
                    return (
                      <blockquote
                        key={idx}
                        className="pl-6 border-l-4 font-medium text-slate-700 dark:text-slate-300 text-base md:text-lg italic leading-relaxed py-1 bg-slate-50 dark:bg-slate-900/50 pr-4 rounded-r-2xl"
                        style={{ borderLeftColor: post.color }}
                      >
                        {block.text}
                      </blockquote>
                    );
                  case "heading":
                    return (
                      <h2
                        key={idx}
                        className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-6 pt-4 relative flex items-center gap-3"
                      >
                        <span
                          className="w-1.5 h-6 rounded-full inline-block"
                          style={{ backgroundColor: post.color }}
                        />
                        {block.text}
                      </h2>
                    );
                  case "paragraph":
                    return (
                      <p
                        key={idx}
                        className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed"
                      >
                        {block.text}
                      </p>
                    );
                  case "list":
                    return (
                      <ul key={idx} className="flex flex-col gap-3 my-2 pl-2">
                        {block.items.map((item, itemIdx) => (
                          <li
                            key={itemIdx}
                            className="flex gap-3 items-start text-slate-700 dark:text-slate-300 text-sm md:text-base"
                          >
                            <CheckCircleIcon className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  default:
                    return null;
                }
              })}

              {/* Tags Footer */}
              <div className="flex flex-wrap items-center gap-2 mt-8 pt-6 border-t border-border">
                <span className="text-xs font-bold text-slate-400 uppercase mr-2">
                  Tags:
                </span>
                <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 rounded-xl text-xs font-bold border border-border">
                  Transformasi Digital
                </span>
                <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 rounded-xl text-xs font-bold border border-border">
                  {post.category}
                </span>
                <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 rounded-xl text-xs font-bold border border-border">
                  Startup
                </span>
              </div>

              {/* Author Bio Card */}
              <div className="bg-slate-50 dark:bg-slate-900 rounded-3xl border border-border p-6 mt-8 flex flex-col sm:flex-row gap-4 items-center sm:items-start text-center sm:text-left">
                <div
                  className={`w-16 h-16 rounded-2xl bg-linear-to-tr ${id === "1" ? "from-red-500 to-amber-500" : "from-blue-600 to-indigo-600"} flex items-center justify-center text-white font-extrabold text-xl shrink-0 shadow-sm`}
                >
                  {id === "1" ? "BS" : "RH"}
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="font-extrabold text-slate-900 dark:text-white text-base">
                    {id === "1" ? "Budi Santoso" : "Rian Hidayat"}
                  </h4>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    {id === "1" ? "CEO & Founder" : "CTO & Co-Founder"}
                  </span>
                  <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm mt-1 leading-relaxed">
                    Fokus dalam merancang strategi adopsi IT berskala besar,
                    menulis ulasan tren arsitektur data, dan membimbing
                    korporasi mencapai kesuksesan transformasi digital.
                  </p>
                </div>
              </div>

              {/* Footer navigation */}
              <div className="flex items-center justify-between mt-10 pt-6 border-t border-border">
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" /> Kembali ke Blog
                </Link>
              </div>
            </article>

            {/* Sidebar Kanan (Desktop) */}
            <aside className="lg:col-span-4 flex flex-col gap-8">
              {/* Mini dark newsletter box */}
              <div className="bg-slate-900 text-white rounded-3xl border border-slate-800 p-6 shadow-md relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/20 rounded-full blur-xl pointer-events-none" />
                <h3 className="font-extrabold text-lg mb-2">
                  Langganan Newsletter
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-4">
                  Dapatkan wawasan teknologi terhangat langsung di email Anda
                  setiap minggu.
                </p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Berhasil berlangganan!");
                  }}
                  className="flex flex-col gap-2"
                >
                  <input
                    type="email"
                    required
                    placeholder="Alamat email Anda"
                    className="px-4 py-2.5 rounded-xl border border-slate-800 bg-slate-950 text-white text-xs w-full focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                  <button
                    type="submit"
                    className="py-2.5 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary-dark cursor-pointer transition-colors"
                  >
                    Daftar Sekarang
                  </button>
                </form>
              </div>

              {/* Related posts */}
              <RelatedPosts posts={relatedPosts} />

              {/* Floating CTA */}
              <div className="bg-slate-50 dark:bg-slate-900 rounded-3xl border border-border p-6 flex flex-col gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <h3 className="font-extrabold text-slate-900 dark:text-white text-base">
                  Konsultasi Gratis
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">
                  Punya pertanyaan teknis seputar arsitektur sistem atau
                  jaringan bisnis Anda? Diskusi gratis bersama CTO kami.
                </p>
                <Link to="/contact">
                  <button className="w-full py-3 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary-dark transition-all cursor-pointer inline-flex items-center justify-center gap-1.5">
                    Hubungi CTO <ArrowRight className="h-4 w-4" />
                  </button>
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetailPage;
