import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { profileData } from "@/data/profile";
import { Smartphone, Github, Mail } from "lucide-react";

export function Navbar() {
  const githubLink =
    profileData.socialLinks.find((s) => s.name === "GitHub")?.url || "https://github.com";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/70 bg-zinc-950/70 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/40 transition-all duration-300">
            <Smartphone className="h-4 w-4" />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm tracking-tight text-white group-hover:text-emerald-300 transition-colors">
              {profileData.name}
            </span>
            <span className="text-[10px] font-mono text-zinc-500 -mt-0.5">{profileData.role}</span>
          </div>
        </Link>

        {/* Navigation */}
        <nav
          aria-label="Main Navigation"
          className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm"
        >
          <a
            href="#skills"
            className="px-3 py-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-colors"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="px-3 py-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="px-3 py-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-colors"
          >
            Contact
          </a>

          <div className="h-4 w-[1px] bg-zinc-800 mx-1 hidden sm:block" />

          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800/50 transition-colors"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${profileData.email}`}
            aria-label="Send Email"
            className="hidden sm:inline-flex items-center gap-1.5 ml-1 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-700/80 text-xs font-medium text-zinc-200 hover:border-emerald-500/40 hover:text-emerald-300 transition-all"
          >
            <Mail className="h-3.5 w-3.5 text-emerald-400" />
            <span>Email</span>
          </a>
        </nav>
      </Container>
    </header>
  );
}
