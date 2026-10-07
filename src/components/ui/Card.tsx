import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  interactive?: boolean;
}

export function Card({ className, interactive = false, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-6 sm:p-7 backdrop-blur-md",
        "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]",
        "transition-all duration-300",
        interactive &&
          "hover:-translate-y-1 hover:border-zinc-700 hover:bg-zinc-900/60 hover:shadow-xl hover:shadow-emerald-500/5",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
