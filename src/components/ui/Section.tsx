import React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  children: React.ReactNode;
}

export function Section({ id, className, children, ...props }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-16 sm:py-24 border-b border-zinc-900/60 last:border-b-0", className)}
      {...props}
    >
      {children}
    </section>
  );
}
