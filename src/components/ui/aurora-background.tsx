import { cn } from "@/lib/utils";
import React from "react";

interface AuroraBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col min-h-screen items-center justify-center bg-white dark:bg-slate-950 text-slate-900 transition-colors duration-300 overflow-hidden w-full",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div
          className={cn(
            "absolute -inset-[10px] opacity-30 blur-[40px] will-change-transform",
            "bg-[radial-gradient(circle_at_20%_30%,#fee2e2_0%,transparent_50%),radial-gradient(circle_at_80%_20%,#dbeafe_0%,transparent_50%),radial-gradient(circle_at_50%_80%,#fee2e2_0%,transparent_50%)]",
            showRadialGradient && "[mask-image:radial-gradient(ellipse_at_top_left,black_10%,transparent_75%)]"
          )}
        >
          {/* Animated background element */}
          <div 
            className="absolute inset-0 animate-aurora mix-blend-multiply opacity-70"
            style={{
              backgroundImage: `repeating-linear-gradient(100deg, var(--color-primary-light) 0%, var(--color-secondary) 15%, var(--color-primary) 30%, var(--color-primary-light) 45%)`,
              backgroundSize: "300% 200%",
              backgroundPosition: "50% 50%",
            }}
          />
        </div>
      </div>
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
};

export default AuroraBackground;
