import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "accent" | "outline" | "success";
  dot?: boolean;
}

export function Badge({
  variant = "default",
  dot = false,
  className,
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    default:
      "bg-zinc-800/60 text-zinc-300 border border-zinc-700/60 hover:border-zinc-600 hover:text-zinc-100",
    accent: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 font-medium",
    success: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium",
    outline:
      "bg-transparent text-zinc-400 border border-zinc-800 hover:border-zinc-700 hover:text-zinc-300",
  }[variant];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium tracking-wide transition-all duration-200",
        variantStyles,
        className
      )}
      {...props}
    >
      {dot && (
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
        </span>
      )}
      {children}
    </span>
  );
}
