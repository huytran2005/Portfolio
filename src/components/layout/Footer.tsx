import React from "react";
import { Container } from "@/components/ui/Container";
import { profileData } from "@/data/profile";
import { Terminal } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-zinc-900 py-10 bg-zinc-950/40">
      <Container className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
        <div className="flex items-center gap-2 font-mono">
          <Terminal className="h-3.5 w-3.5 text-emerald-400" />
          <span>
            &copy; {currentYear} {profileData.name}
          </span>
          <span className="text-zinc-700">&bull;</span>
          <span>Android &amp; Kotlin</span>
        </div>

        <div className="flex items-center gap-4 text-zinc-400">
          <a href="#hero" className="hover:text-emerald-400 transition-colors">
            Back to top ↑
          </a>
        </div>
      </Container>
    </footer>
  );
}
