import React, { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  useSpring,
} from "motion/react";

interface LocationMapProps {
  location?: string;
  coordinates?: string;
  className?: string;
}

export const MapEmbed = ({
  location = "Banyumas, ID",
  coordinates = "7.4882° S, 109.2170° E",
  className,
}: LocationMapProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-50, 50], [4, -4]);
  const rotateY = useTransform(mouseX, [-50, 50], [-4, 4]);

  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 });
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current || isExpanded) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  const handleClick = () => {
    if (!isExpanded) {
      mouseX.set(0);
      mouseY.set(0);
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="py-12 border-t border-border flex justify-center">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl flex justify-center">
        <motion.div
          ref={containerRef}
          className={`relative cursor-pointer select-none ${className || ""}`}
          style={{ perspective: 1200 }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
          animate={{ width: isExpanded ? "100%" : 280 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <motion.div
            className="relative overflow-hidden rounded-3xl bg-slate-50 dark:bg-slate-900 border border-border shadow-lg mx-auto"
            style={{
              rotateX: isExpanded ? 0 : springRotateX,
              rotateY: isExpanded ? 0 : springRotateY,
              transformStyle: "preserve-3d",
            }}
            animate={{
              height: isExpanded ? 450 : 160,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 35,
            }}
          >
            {/* Subtle gradient overlay when not expanded */}
            {!isExpanded && (
              <div className="absolute inset-0 bg-linear-to-br from-slate-200/20 via-transparent to-slate-300/40 dark:from-slate-800/40 dark:to-slate-900/60" />
            )}

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  className="absolute inset-0 z-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1546.980899137422!2d109.21699878205527!3d-7.488235833546576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1781447006223!5m2!1sen!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps Kantor PT XERANET"
                  ></iframe>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Grid pattern - only show when collapsed */}
            <motion.div
              className="absolute inset-0 opacity-10 pointer-events-none"
              animate={{ opacity: isExpanded ? 0 : 0.05 }}
              transition={{ duration: 0.3 }}
            >
              <svg width="100%" height="100%" className="absolute inset-0">
                <defs>
                  <pattern
                    id="grid"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 20 0 L 0 0 0 20"
                      fill="none"
                      className="stroke-slate-900 dark:stroke-white"
                      strokeWidth="0.5"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </motion.div>

            {/* Content Header when collapsed */}
            <motion.div
              className="relative z-10 h-full flex flex-col justify-between p-5 pointer-events-none"
              animate={{ opacity: isExpanded ? 0 : 1 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-start justify-between">
                <div className="relative">
                  <motion.svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                    animate={{
                      filter: isHovered
                        ? "drop-shadow(0 0 8px rgba(14, 165, 233, 0.6))"
                        : "drop-shadow(0 0 4px rgba(14, 165, 233, 0.2))",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
                    <line x1="9" x2="9" y1="3" y2="18" />
                    <line x1="15" x2="15" y1="6" y2="21" />
                  </motion.svg>
                </div>

                <motion.div
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-200/50 dark:bg-slate-800/50 backdrop-blur-sm"
                  animate={{
                    scale: isHovered ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="text-[10px] font-bold text-slate-600 dark:text-slate-300 tracking-wider uppercase">
                    Live Map
                  </span>
                </motion.div>
              </div>

              <div className="space-y-1">
                <motion.h3
                  className="text-slate-900 dark:text-white font-bold text-sm tracking-tight"
                  animate={{ x: isHovered ? 4 : 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  {location}
                </motion.h3>

                <motion.p
                  className="text-slate-500 dark:text-slate-400 text-xs font-mono"
                  animate={{ x: isHovered ? 4 : 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                    delay: 0.05,
                  }}
                >
                  {coordinates}
                </motion.p>

                <motion.div
                  className="h-px bg-linear-to-r from-primary/50 via-primary/30 to-transparent mt-2"
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: isHovered ? 1 : 0.3 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </div>
            </motion.div>

            {/* Close button when expanded */}
            <AnimatePresence>
              {isExpanded && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsExpanded(false);
                  }}
                  className="absolute top-4 right-4 z-20 bg-white dark:bg-slate-900 border border-border shadow-lg p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-slate-600 dark:text-slate-300"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.p
            className="absolute -bottom-6 left-1/2 text-xs font-semibold text-slate-500 dark:text-slate-400 whitespace-nowrap"
            style={{ x: "-50%" }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: isHovered && !isExpanded ? 1 : 0,
              y: isHovered ? 0 : 4,
            }}
            transition={{ duration: 0.2 }}
          >
            Klik untuk melihat peta
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default MapEmbed;
