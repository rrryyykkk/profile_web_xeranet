import { motion } from "motion/react";

// Inline SVG icons
const techStack = [
  {
    name: "React",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Flutter",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  },
  {
    name: "Laravel",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  },
  {
    name: "Node.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "MySQL",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "Firebase",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  {
    name: "Tailwind",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "TypeScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Docker",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "PostgreSQL",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "MongoDB",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Redis",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  },
];

export const TechStack = () => {
  return (
    <section className="py-20 bg-white dark:bg-slate-950 border-y border-border overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span
              className="text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border inline-block mb-4"
              style={{
                background: "hsl(263 69% 49% / 0.08)",
                borderColor: "hsl(263 69% 49% / 0.2)",
                color: "#6D28D9",
              }}
            >
              Tech Stack
            </span>
            <h2 className="text-slate-900 dark:text-white text-3xl font-extrabold tracking-tight">
              Teknologi yang Kami Gunakan
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mt-3 max-w-md mx-auto text-sm">
              Kami menggunakan teknologi modern dan terpercaya untuk membangun
              solusi yang scalable dan maintainable.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 md:gap-6 justify-center">
          {techStack.map(({ name, src }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.04, duration: 0.3 }}
              className="flex flex-col items-center gap-2 group"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center border border-border bg-slate-50 dark:bg-slate-900 group-hover:border-violet-400/40 group-hover:shadow-md group-hover:-translate-y-1 transition-all">
                <img
                  src={src}
                  alt={name}
                  className="h-8 w-8 md:h-10 md:w-10 object-contain transition-transform group-hover:scale-110"
                  loading="lazy"
                  width={40}
                  height={40}
                />
              </div>
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                {name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
