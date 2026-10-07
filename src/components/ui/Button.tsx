import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-xl whitespace-nowrap transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs gap-2 tracking-wide",
    md: "px-6 py-3 text-sm gap-2.5 tracking-wide font-medium",
    lg: "px-8 py-3.5 text-base gap-3 tracking-wide font-semibold",
  }[size];

  const variantStyles = {
    primary:
      "bg-emerald-400 text-zinc-950 font-semibold hover:bg-emerald-300 shadow-md shadow-emerald-500/20 hover:shadow-lg hover:shadow-emerald-500/30",
    secondary:
      "bg-zinc-800/90 text-zinc-100 hover:bg-zinc-700/90 border border-zinc-700/80 shadow-sm",
    outline:
      "border border-zinc-700/80 bg-zinc-900/80 text-zinc-200 hover:border-zinc-600 hover:bg-zinc-800 hover:text-white shadow-sm",
    ghost: "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60 px-4",
  }[variant];

  return (
    <button className={cn(baseStyles, sizeStyles, variantStyles, className)} {...props}>
      {children}
    </button>
  );
}
