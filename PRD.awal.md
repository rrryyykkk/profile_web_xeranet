# PRD — PT XERANET Company Portfolio Website

> **Status:** Draft v1.1 — Updated  
> **Tipe Dokumen:** Product Requirements Document  
> **Stack:** React + Vite + TypeScript + Tailwind CSS + shadcn/ui + Lucide Icons + Framer Motion

---

## Changelog

| Versi | Perubahan                                                                                                                                                                         |
| ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| v1.0  | Initial draft                                                                                                                                                                     |
| v1.1  | Tambah Framer Motion guidelines, AuroraBackground component, halaman `ErrorPage` & `NotFoundPage`, update NFR Lighthouse score, update BlogDetail spec dari referensi kode aktual |

---

## 1. Overview

| Field               | Detail                                                           |
| ------------------- | ---------------------------------------------------------------- |
| **Client**          | PT XERANET                                                       |
| **Jenis Produk**    | Company Portfolio Website                                        |
| **Target Audience** | B2B (perusahaan/bisnis) & B2C (end user/individual)              |
| **Fokus Bisnis**    | IT Solutions / Software Development, Networking & Infrastructure |
| **Bahasa**          | Indonesia (default) + English (i18n toggle)                      |
| **Base Theme**      | White base, Primary Red, Secondary Blue/Navy                     |
| **Total Halaman**   | 5 halaman utama + 2 halaman error                                |

---

## 2. Tech Stack

### Core

| Package            | Versi | Kegunaan                |
| ------------------ | ----- | ----------------------- |
| `react`            | 18+   | UI library              |
| `vite`             | 5+    | Build tool & dev server |
| `typescript`       | 5+    | Type safety             |
| `react-router-dom` | v6    | Client-side routing     |

### Styling & UI

| Package          | Kegunaan                           |
| ---------------- | ---------------------------------- |
| `tailwindcss` v3 | Utility-first CSS                  |
| `shadcn/ui`      | Base component library             |
| `lucide-react`   | Icon library — **import per-icon** |

### Animasi

| Package         | Kegunaan                                                      |
| --------------- | ------------------------------------------------------------- |
| `framer-motion` | Page transitions, scroll-triggered reveal, micro-interactions |

### Form & Validasi

| Package               | Kegunaan                         |
| --------------------- | -------------------------------- |
| `react-hook-form`     | Form state management            |
| `zod`                 | Schema validasi TypeScript-first |
| `@hookform/resolvers` | Bridge RHF + Zod                 |

### Internasionalisasi

| Package                            | Kegunaan                   |
| ---------------------------------- | -------------------------- |
| `react-i18next`                    | i18n runtime               |
| `i18next`                          | i18n core                  |
| `i18next-browser-languagedetector` | Auto-detect bahasa browser |

### SEO

| Package              | Kegunaan                      |
| -------------------- | ----------------------------- |
| `react-helmet-async` | Dynamic meta tags per halaman |

---

## 3. Arsitektur Folder

```
src/
├── assets/
│   ├── images/
│   ├── logos/
│   └── fonts/
│
├── components/
│   ├── ui/                         # shadcn/ui + custom base components
│   │   ├── aurora-background.tsx   # AuroraBackground (hero effect)
│   │   ├── CheckCircleIcon.tsx     # Custom icon untuk blog list
│   │   └── ...shadcn components
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── SEO.tsx                 # react-helmet-async wrapper
│   └── sections/                   # Shared reusable sections
│       ├── PageHeader.tsx          # Header section per halaman
│       ├── CTASection.tsx          # CTA banner global
│       └── Newsletter.tsx          # Newsletter signup section
│
├── features/
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── StatsBanner.tsx
│   │   ├── ServicesPreview.tsx
│   │   ├── TechStack.tsx
│   │   ├── ClientLogos.tsx
│   │   └── CTASection.tsx
│   ├── about/
│   │   ├── CompanyStory.tsx
│   │   ├── VisionMission.tsx
│   │   ├── Timeline.tsx
│   │   ├── TeamGrid.tsx
│   │   └── WhyChooseUs.tsx
│   ├── services/
│   │   ├── ServicesHero.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── PricingTabs.tsx
│   │   ├── PricingCard.tsx
│   │   ├── ComparisonTable.tsx
│   │   └── FAQAccordion.tsx
│   ├── blog/
│   │   ├── BlogGrid.tsx
│   │   ├── BlogCard.tsx
│   │   ├── CategoryFilter.tsx
│   │   ├── SearchBar.tsx
│   │   └── RelatedPosts.tsx
│   └── contact/
│       ├── ContactForm.tsx
│       ├── ContactInfo.tsx
│       ├── MapEmbed.tsx
│       └── WhatsAppCTA.tsx
│
├── hooks/
│   ├── useTranslation.ts
│   ├── useMediaQuery.ts
│   └── useScrollProgress.ts
│
├── i18n/
│   ├── index.ts
│   └── locales/
│       ├── id.json
│       └── en.json
│
├── lib/
│   ├── utils.ts                    # cn() helper dari shadcn
│   └── validations/
│       └── contact.schema.ts
│
├── data/
│   ├── blogData.ts                 # Static blog posts array
│   └── servicesData.ts
│
├── pages/
│   ├── HomePage.tsx
│   ├── AboutPage.tsx
│   ├── ServicesPage.tsx
│   ├── BlogPage.tsx
│   ├── BlogDetailPage.tsx
│   ├── ContactPage.tsx
│   ├── NotFoundPage.tsx            # Route * → 404
│   └── ErrorPage.tsx               # React Router errorElement
│
├── router/
│   └── index.tsx
│
├── types/
│   ├── blog.types.ts
│   ├── service.types.ts
│   └── team.types.ts
│
└── main.tsx
```

---

## 4. Routing

```
/                     → HomePage
/about                → AboutPage
/services             → ServicesPage
/blog                 → BlogPage
/blog/:id             → BlogDetailPage
/contact              → ContactPage
*                     → NotFoundPage (404)
```

**Error Handling di Router:**

```typescript
// router/index.tsx
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "@/pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,   // handles loader/action errors
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "services", element: <ServicesPage /> },
      { path: "blog", element: <BlogPage /> },
      { path: "blog/:id", element: <BlogDetailPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
```

> Semua page di-lazy load via `React.lazy + Suspense`.

---

## 5. Spesifikasi Halaman

### 5.1 Home / Landing — `/`

**Tujuan:** Pintu masuk utama dengan efek Aurora di hero section, memperkenalkan brand XERANET dan mendorong pengunjung ke layanan atau kontak.

**Komponen:**

| Komponen          | Deskripsi                                                                                                                | Icon (Lucide)                    |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- |
| `HeroSection`     | Menggunakan `AuroraBackground` sebagai wrapper. Headline, subheadline, dua CTA button. Animasi entry dengan `motion.div` | `ArrowRight`, `Phone`            |
| `StatsBanner`     | Counter angka: klien, proyek, tahun berdiri. Scroll-triggered fade-in                                                    | `Users`, `Briefcase`, `Calendar` |
| `ServicesPreview` | Grid 2–3 card preview layanan dengan stagger animation                                                                   | `Server`, `Code`, `Network`      |
| `TechStack`       | Strip logo teknologi                                                                                                     | —                                |
| `ClientLogos`     | Logo klien / mitra                                                                                                       | —                                |
| `CTASection`      | Banner CTA akhir halaman                                                                                                 | `Mail`                           |

**Penggunaan AuroraBackground di HeroSection:**

```tsx
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";

export const HeroSection = () => (
  <AuroraBackground>
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
      className="flex flex-col items-center gap-6 text-center px-4"
    >
      <h1>Solusi IT & Infrastruktur Terpercaya</h1>
      {/* ... */}
    </motion.div>
  </AuroraBackground>
);
```

---

### 5.2 About — `/about`

**Komponen:**

| Komponen        | Deskripsi                                           | Icon (Lucide)                |
| --------------- | --------------------------------------------------- | ---------------------------- |
| `PageHeader`    | Header section reusable (badge, title, description) | —                            |
| `CompanyStory`  | Narasi pendirian XERANET, fade-in on scroll         | `BookOpen`                   |
| `VisionMission` | Dua card: Visi & Misi. Stagger reveal               | `Eye`, `Target`              |
| `Timeline`      | Milestone perusahaan, slide-in dari kiri            | `Milestone`                  |
| `TeamGrid`      | Grid foto + nama + jabatan, hover scale             | `UserCircle`                 |
| `WhyChooseUs`   | 4–6 poin keunggulan                                 | `CheckCircle`, `ShieldCheck` |

---

### 5.3 Services & Pricing — `/services`

**Catatan:** Digabung satu halaman, navigasi via anchor scroll.

**Komponen:**

| Komponen                     | Deskripsi                                        | Icon (Lucide)                  |
| ---------------------------- | ------------------------------------------------ | ------------------------------ |
| `PageHeader`                 | Header section reusable                          | `Layers`                       |
| `ServiceCard` (IT Solutions) | Card: Software Dev, Web App, Mobile App          | `Code2`, `Globe`, `Smartphone` |
| `ServiceCard` (Networking)   | Card: Network Setup, Infrastructure, Maintenance | `Network`, `Server`, `Wrench`  |
| `PricingTabs`                | shadcn Tabs — toggle B2B / B2C                   | `ToggleLeft`                   |
| `PricingCard`                | Nama paket, harga, fitur list, CTA button        | `Package`                      |
| `ComparisonTable`            | Tabel perbandingan fitur antar paket             | `TableProperties`              |
| `FAQAccordion`               | shadcn Accordion                                 | `CircleHelp`                   |
| `CTASection`                 | CTA konsultasi                                   | `MessageSquare`                |

---

### 5.4 Blog Listing — `/blog`

**Referensi implementasi:** `Blog.tsx` (kode aktual terlampir di dokumen).

**Komponen:**

| Komponen         | Deskripsi                                                                                                                                 | Icon (Lucide)                            |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| `PageHeader`     | Badge "Wawasan & Tips", judul, deskripsi                                                                                                  | —                                        |
| `CategoryFilter` | Chip filter sticky di bawah navbar (`top-[68px] z-30`). Active state dengan background primary                                            | `Tag`                                    |
| `BlogCard`       | Card artikel: border-top accent warna per kategori, thumbnail placeholder dengan nomor artikel, badge tag, judul, excerpt, date, readTime | `Calendar`, `Clock`, `Tag`, `ArrowRight` |
| `BlogGrid`       | `AnimatePresence` + `motion.div` dengan `layout` prop untuk smooth filter transition                                                      | —                                        |
| Empty State      | Ilustrasi icon + teks + tombol reset filter                                                                                               | `Tag`                                    |
| `Newsletter`     | Section newsletter (shared)                                                                                                               | —                                        |
| `CTASection`     | CTA section (shared)                                                                                                                      | —                                        |

**Data structure (`blogData.ts`):**

```typescript
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  color: string; // accent color per post
  bg: string; // background thumbnail
  tag?: string; // optional badge (e.g. "Trending")
  content: ContentBlock[];
}

export type ContentBlock =
  | { type: "intro"; text: string }
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };
```

**Kategori yang tersedia:**

```typescript
const categories = [
  "Semua",
  "Teknologi",
  "Mobile App",
  "Bisnis Digital",
  "Desain",
  "Infrastruktur",
  "Keamanan",
];
```

---

### 5.5 Blog Detail — `/blog/:id`

**Referensi implementasi:** `BlogDetail.tsx` (kode aktual terlampir di dokumen).

**Layout:** 12-column grid — `col-span-1` (sidebar kiri) + `col-span-7` (konten) + `col-span-4` (sidebar kanan).

**Komponen & Fitur:**

| Komponen / Fitur       | Deskripsi                                                                                                                                            | Icon (Lucide)                                    |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| Reading Progress Bar   | `useScroll` + `useSpring` dari framer-motion. Fixed di bawah navbar, warna gradient dari `post.color`                                                | —                                                |
| Hero Section           | Background abstract blur + dot grid. Breadcrumb, badge kategori, judul, author info, share/bookmark buttons                                          | `Calendar`, `Clock`, `Tag`, `Share2`, `Bookmark` |
| Sidebar kiri (desktop) | Sticky social actions: Share, Bookmark                                                                                                               | `Share2`, `Bookmark`                             |
| Article Body           | Render `post.content` blocks: `intro` (blockquote style), `heading` (dengan accent strip warna), `paragraph`, `list` (menggunakan `CheckCircleIcon`) | —                                                |
| Tags footer            | Tag chips: Startup, {category}, Digital Transformation                                                                                               | —                                                |
| Author Bio Card        | Avatar inisial gradient, nama, deskripsi, links                                                                                                      | —                                                |
| Sidebar kanan          | Newsletter card (dark), Related Posts (3 artikel), Floating CTA konsultasi                                                                           | `ArrowRight`                                     |
| Footer Navigation      | Tombol kembali ke blog + share platform buttons                                                                                                      | `ArrowLeft`                                      |
| Not Found state        | Redirect-friendly: jika `post` tidak ditemukan tampilkan pesan + tombol kembali                                                                      | `ArrowLeft`                                      |

**File tambahan yang dibutuhkan:**

```
src/components/ui/CheckCircleIcon.tsx   # Custom SVG icon untuk list item
src/components/sections/Newsletter.tsx  # Shared newsletter section
src/components/sections/CTASection.tsx  # Shared CTA section
src/components/layout/SEO.tsx           # react-helmet-async wrapper
```

**SEO per artikel:**

```tsx
<SEO
  title={post.title}
  description={post.excerpt}
  url={`https://xeranet.co.id/blog/${post.id}`}
  type="article"
/>
```

**Share functionality:**

```typescript
const handleShare = () => {
  if (navigator.share) {
    navigator.share({
      title: post.title,
      text: post.excerpt,
      url: window.location.href,
    });
  } else {
    navigator.clipboard.writeText(window.location.href);
    // toast notification
  }
};
```

---

### 5.6 Contact — `/contact`

**Komponen:**

| Komponen      | Deskripsi                                            | Icon (Lucide)                      |
| ------------- | ---------------------------------------------------- | ---------------------------------- |
| `PageHeader`  | Header section                                       | —                                  |
| `ContactForm` | RHF + Zod: Nama, Email, No. HP, Jenis Layanan, Pesan | `Send`                             |
| `ContactInfo` | Alamat, email, telepon                               | `MapPin`, `Mail`, `Phone`          |
| `SocialLinks` | Instagram, LinkedIn, YouTube                         | `Instagram`, `Linkedin`, `Youtube` |
| `MapEmbed`    | Google Maps iframe                                   | `Map`                              |
| `WhatsAppCTA` | Floating button WhatsApp                             | `MessageCircle`                    |

**Zod Schema:**

```typescript
import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Nama minimal 2 karakter"),
  email: z.string().email("Format email tidak valid"),
  phone: z.string().min(10, "Nomor HP tidak valid").optional(),
  service: z.enum(["it-solutions", "networking", "konsultasi", "lainnya"]),
  message: z.string().min(20, "Pesan minimal 20 karakter"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
```

---

### 5.7 Not Found Page — `*`

**Tujuan:** Halaman 404 yang friendly, membantu user kembali ke halaman yang benar.

**Komponen:**

| Elemen                 | Deskripsi                                                | Icon (Lucide)       |
| ---------------------- | -------------------------------------------------------- | ------------------- |
| Ilustrasi / kode `404` | Teks besar `404` dengan accent primary red               | —                   |
| Heading                | "Halaman Tidak Ditemukan"                                | —                   |
| Subtext                | Penjelasan singkat + saran navigasi                      | —                   |
| Tombol kembali         | "Ke Halaman Utama" (primary) + "Lihat Layanan" (outline) | `Home`, `ArrowLeft` |

**Animasi:** Entry animation `motion.div` fade + slide up.

```tsx
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const NotFoundPage = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-background gap-6 px-4 text-center">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col items-center gap-6"
    >
      <span className="text-[120px] font-black leading-none text-primary/10 select-none">
        404
      </span>
      <h1 className="text-3xl font-bold text-foreground">
        Halaman Tidak Ditemukan
      </h1>
      <p className="text-muted-foreground max-w-sm">
        Halaman yang kamu cari tidak ada atau sudah dipindahkan.
      </p>
      <div className="flex items-center gap-3 mt-2">
        <Link to="/">
          <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-all">
            <Home className="h-4 w-4" /> Ke Halaman Utama
          </button>
        </Link>
        <button
          onClick={() => window.history.back()}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border font-semibold text-sm hover:bg-muted transition-all"
        >
          <ArrowLeft className="h-4 w-4" /> Kembali
        </button>
      </div>
    </motion.div>
  </div>
);

export default NotFoundPage;
```

---

### 5.8 Error Page — `errorElement`

**Tujuan:** Menangkap error runtime dari React Router (loader/action errors, uncaught exceptions).

**Implementasi:**

```tsx
import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { RefreshCw, Home } from "lucide-react";

const ErrorPage = () => {
  const error = useRouteError();

  const message = isRouteErrorResponse(error)
    ? `${error.status} — ${error.statusText}`
    : error instanceof Error
      ? error.message
      : "Terjadi kesalahan yang tidak diketahui.";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background gap-6 px-4 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col items-center gap-6 max-w-md"
      >
        <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center">
          <RefreshCw className="h-7 w-7 text-destructive" />
        </div>
        <h1 className="text-2xl font-bold text-foreground">
          Ups, Ada yang Error
        </h1>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {message}
        </p>
        <div className="flex items-center gap-3">
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-all"
          >
            <RefreshCw className="h-4 w-4" /> Coba Lagi
          </button>
          <Link to="/">
            <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border font-semibold text-sm hover:bg-muted transition-all">
              <Home className="h-4 w-4" /> Beranda
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default ErrorPage;
```

---

## 6. Framer Motion — Guidelines

### 6.1 Prinsip Animasi

- **Smooth, bukan showy** — animasi harus terasa natural, bukan menarik perhatian ke dirinya sendiri
- **Satu tujuan per animasi** — reveal konten, feedback interaksi, atau transisi halaman — jangan campur
- **Durasi singkat** — maksimal `0.6s` untuk reveal, `0.3s` untuk micro-interaction
- **Selalu gunakan `prefers-reduced-motion`** via `useReducedMotion()` hook

### 6.2 Pola Animasi yang Dipakai

#### Page Entry (per halaman)

```tsx
const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

// Gunakan di wrapper page
<motion.div
  variants={pageVariants}
  initial="initial"
  animate="animate"
  exit="exit"
  transition={{ duration: 0.4, ease: "easeOut" }}
>
```

#### Scroll-triggered Section Reveal

```tsx
// Untuk section / card yang muncul saat di-scroll
<motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-80px" }}
  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
>
```

#### Stagger Children (untuk grid card)

```tsx
const containerVariants = {
  animate: { transition: { staggerChildren: 0.07 } },
};

const itemVariants = {
  initial: { opacity: 0, scale: 0.96, y: 12 },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
};
```

#### AnimatePresence (untuk filter blog)

```tsx
// Blog grid — layout animation saat filter berubah
<AnimatePresence mode="popLayout">
  {filteredPosts.map((post, i) => (
    <motion.div
      key={post.id}
      layout
      initial={{ opacity: 0, scale: 0.95, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 10 }}
      transition={{ duration: 0.5, delay: i * 0.04, ease: [0.16, 1, 0.3, 1], layout: { duration: 0.4 } }}
    >
```

#### Reading Progress Bar (Blog Detail)

```tsx
const { scrollYProgress } = useScroll();
const scaleX = useSpring(scrollYProgress, {
  stiffness: 100,
  damping: 30,
  restDelta: 0.001,
});

<motion.div
  className="fixed top-17 left-0 right-0 h-1.5 z-50 origin-left"
  style={{
    scaleX,
    background: `linear-gradient(to right, ${post.color}, #06B6D4)`,
  }}
/>;
```

### 6.3 Yang Harus Dihindari

- Jangan animasi semua elemen — pilih elemen yang punya makna kontekstual
- Jangan gunakan durasi > `0.8s` kecuali untuk efek ambient (AuroraBackground)
- Jangan nested `AnimatePresence` tanpa alasan yang jelas
- Jangan `whileHover` dengan transform besar pada mobile (bisa laggy)
- Jangan lupa `viewport={{ once: true }}` agar animasi scroll tidak repeat

### 6.4 Reduced Motion

```tsx
import { useReducedMotion } from "framer-motion";

const shouldReduceMotion = useReducedMotion();

const variants = shouldReduceMotion
  ? { initial: { opacity: 0 }, animate: { opacity: 1 } }
  : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } };
```

---

## 7. Komponen Khusus

### 7.1 AuroraBackground (`/components/ui/aurora-background.tsx`)

Digunakan di `HeroSection` halaman Home sebagai efek latar visual ambient.

**Setup tambahan di `tailwind.config.ts`:**

```ts
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        aurora: "aurora 60s linear infinite",
      },
      keyframes: {
        aurora: {
          from: { backgroundPosition: "50% 50%, 50% 50%" },
          to: { backgroundPosition: "350% 50%, 350% 50%" },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );
  addBase({ ":root": newVars });
}
```

**Props:**

| Prop                 | Type        | Default | Deskripsi                                          |
| -------------------- | ----------- | ------- | -------------------------------------------------- |
| `children`           | `ReactNode` | —       | Konten di dalam aurora                             |
| `showRadialGradient` | `boolean`   | `true`  | Tampilkan radial gradient mask di sudut kanan atas |
| `className`          | `string`    | —       | Override class tambahan                            |

### 7.2 CheckCircleIcon (`/components/ui/CheckCircleIcon.tsx`)

Icon custom SVG yang digunakan di `BlogDetail` untuk list item konten artikel.

```tsx
interface CheckCircleIconProps {
  className?: string;
}

const CheckCircleIcon = ({ className }: CheckCircleIconProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default CheckCircleIcon;
```

### 7.3 PageHeader (`/components/sections/PageHeader.tsx`)

Section header reusable yang dipakai di semua halaman (Blog, Services, Contact, About).

**Props:**

```typescript
interface PageHeaderProps {
  badge?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
}
```

### 7.4 SEO (`/components/layout/SEO.tsx`)

Wrapper `react-helmet-async` untuk dynamic meta tags.

```typescript
interface SEOProps {
  title: string;
  description: string;
  url?: string;
  type?: "website" | "article";
  image?: string;
}
```

---

## 8. Fitur Global

### 8.1 Navbar

- Logo XERANET (kiri)
- Navigation links: Home, About, Services, Blog, Contact
- `LanguageSwitcher` — icon `Globe` (Lucide)
- CTA Button "Hubungi Kami" (desktop)
- Hamburger → shadcn `Sheet` (mobile)
- Sticky + backdrop blur

### 8.2 Footer

- Logo + tagline
- Kolom links: Layanan, Perusahaan, Blog
- Kolom kontak: alamat, email, WA
- Lucide: `Instagram`, `Linkedin`, `Youtube`
- Copyright notice

### 8.3 Multi-language (i18n)

- Default: **Indonesia**, fallback: **English**
- Toggle realtime tanpa reload
- Auto-detect dari `navigator.language`

### 8.4 SEO

- Meta title & description dinamis per halaman
- Open Graph: `og:title`, `og:description`, `og:image`, `og:type`
- Canonical URL
- `/public/sitemap.xml` dan `/public/robots.txt`

### 8.5 Performance

- `React.lazy` + `Suspense` per route
- Image `loading="lazy"` + format WebP
- Font preload
- Import Lucide per-icon:

```typescript
// ✅ Benar
import { ArrowRight, Phone, Server } from "lucide-react";

// ❌ Hindari
import * as Icons from "lucide-react";
```

---

## 9. Design Tokens

### 9.1 Warna

| Token                   | Hex       | Kegunaan                     |
| ----------------------- | --------- | ---------------------------- |
| `--color-primary`       | `#DC2626` | CTA, highlight, accent utama |
| `--color-primary-dark`  | `#B91C1C` | Hover state                  |
| `--color-primary-light` | `#FEE2E2` | Badge background             |
| `--color-secondary`     | `#1D4ED8` | Link, icon secondary         |
| `--color-navy`          | `#1E3A5F` | Corporate header tone        |
| `--color-base`          | `#FFFFFF` | Background utama             |
| `--color-surface`       | `#F8FAFC` | Section alternating bg       |
| `--color-text`          | `#1E293B` | Body text                    |
| `--color-text-muted`    | `#64748B` | Subtext, caption             |
| `--color-border`        | `#E2E8F0` | Card border, divider         |

> Token ini di-override dari file theme shadcn/ui klien di `globals.css`.

### 9.2 Tipografi

| Role              | Font           | Weight  | Size    |
| ----------------- | -------------- | ------- | ------- |
| Display / Heading | Inter          | 700–800 | 36–56px |
| Subheading        | Inter          | 600     | 20–30px |
| Body              | Inter          | 400     | 14–16px |
| Caption / Label   | Inter          | 400–500 | 11–12px |
| Code              | JetBrains Mono | 400     | 13px    |

### 9.3 Spacing & Radius

| Token               | Nilai                         |
| ------------------- | ----------------------------- |
| Border radius kecil | `0.375rem` (6px)              |
| Border radius card  | `0.75rem` (12px)              |
| Border radius pill  | `9999px`                      |
| Gap grid            | `1.5rem` (24px)               |
| Container padding   | `1rem` mobile, `2rem` desktop |

---

## 10. Non-Functional Requirements

| Kategori                      | Target                                                           | Prioritas |
| ----------------------------- | ---------------------------------------------------------------- | --------- |
| **Lighthouse Performance**    | **≥ 85** (mobile), **≥ 90** (desktop)                            | **P1**    |
| **Lighthouse Accessibility**  | **≥ 95**                                                         | **P1**    |
| **Lighthouse Best Practices** | **≥ 95**                                                         | **P1**    |
| **Lighthouse SEO**            | **≥ 95**                                                         | **P1**    |
| First Contentful Paint        | ≤ 1.8s                                                           | P1        |
| Largest Contentful Paint      | ≤ 2.5s                                                           | P1        |
| Total Blocking Time           | ≤ 200ms                                                          | P1        |
| Cumulative Layout Shift       | ≤ 0.1                                                            | P1        |
| Responsif (breakpoint)        | 320px – 1920px                                                   | P1        |
| `prefers-reduced-motion`      | Semua animasi Framer Motion di-bypass                            | P1        |
| Multi-language realtime       | ID & EN tanpa reload                                             | P2        |
| SEO on-page                   | Meta, OG, canonical, sitemap                                     | P2        |
| Initial JS bundle (gzip)      | < 200KB                                                          | P2        |
| AuroraBackground performa     | `will-change-transform`, `opacity-50` — tidak blokir main thread | P2        |
| Blog CMS integration          | Static JSON → Headless CMS (v2)                                  | P3        |

### Strategi Mencapai Lighthouse ≥ 85/95

| Area               | Tindakan                                                                                                                         |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| **Performance**    | Code split per route, tree-shake Lucide, image WebP + lazy load, font preload, AuroraBackground pakai `will-change-transform`    |
| **Accessibility**  | Semua `<img>` ada `alt`, semua form punya `<label>`, warna contrast AA+, keyboard navigable, icon-only button punya `aria-label` |
| **Best Practices** | HTTPS, no console error di production, semua resource dari HTTPS, tidak ada deprecated API                                       |
| **SEO**            | `react-helmet-async` per halaman, canonical, sitemap.xml, robots.txt, meta description 150–160 karakter                          |

---

## 11. Out of Scope (v1.0)

- Admin dashboard / CMS panel internal
- Payment gateway / e-commerce
- Dark mode toggle
- User authentication / login
- Push notification
- Live chat widget

---

## 12. Catatan Tambahan

- **Theme shadcn/ui** di-override di `globals.css` setelah file theme klien diterima. Struktur komponen tidak berubah.
- **Blog data** v1.0 pakai static array di `src/data/blogData.ts`. Migrasi ke Headless CMS bisa dilakukan di v2 tanpa ubah komponen — cukup ganti data source.
- **AuroraBackground** hanya dipakai di HeroSection homepage. Jangan dipakai di section lain karena berat secara rendering.
- **Framer Motion** — selalu `once: true` di `whileInView` agar animasi tidak repeat saat scroll balik ke atas.
- **BlogDetail** menggunakan `id` (number) sebagai param, bukan `slug` string — pastikan konsisten dengan routing `/blog/:id`.

---

_Dokumen ini akan diperbarui seiring diskusi desain dan pengembangan berlanjut._
