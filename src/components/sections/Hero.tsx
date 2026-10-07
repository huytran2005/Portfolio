import React from "react";
import { Container, Section, Button, Badge } from "@/components/ui";
import { profileData } from "@/data/profile";
import { ArrowDown, Github, Terminal } from "lucide-react";

export function Hero() {
  const githubLink =
    profileData.socialLinks.find((s) => s.name === "GitHub")?.url || "https://github.com";

  return (
    <Section id="hero" className="relative pt-24 pb-20 sm:pt-32 sm:pb-28">
      <Container>
        <div className="max-w-4xl space-y-8">
          {/* Status Indicator */}
          <div className="inline-flex">
            <Badge variant="accent" dot className="py-1.5 px-4 gap-2.5 shadow-sm text-xs">
              <span className="text-zinc-200">Available for Opportunities</span>
              <span className="text-zinc-600 font-normal">|</span>
              <span className="text-emerald-400 font-semibold">{profileData.role}</span>
            </Badge>
          </div>

          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                {profileData.name}
              </span>
              .
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-zinc-300 tracking-tight leading-snug">
              {profileData.headline}
            </p>
          </div>

          {/* Bio Description */}
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-3xl">
            {profileData.bio}
          </p>

          {/* Action Buttons with comfortable spacing */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            <a href="#projects">
              <Button variant="primary" size="md">
                <span>Explore Projects</span>
                <ArrowDown className="h-4 w-4" />
              </Button>
            </a>
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="md">
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </Button>
            </a>
            <a href="#contact">
              <Button variant="secondary" size="md">
                <span>Let&apos;s talk</span>
              </Button>
            </a>
          </div>

          {/* Quick Highlight Pills */}
          <div className="pt-8 border-t border-zinc-800/80 flex flex-wrap items-center gap-2.5 text-xs text-zinc-400">
            <span className="flex items-center gap-1.5 font-mono text-zinc-400 pr-1">
              <Terminal className="h-3.5 w-3.5 text-emerald-400" />
              Focus:
            </span>
            <span className="rounded-lg bg-zinc-900/90 border border-zinc-800 px-3.5 py-1.5 text-zinc-300">
              Kotlin 2.x
            </span>
            <span className="rounded-lg bg-zinc-900/90 border border-zinc-800 px-3.5 py-1.5 text-zinc-300">
              Jetpack Compose
            </span>
            <span className="rounded-lg bg-zinc-900/90 border border-zinc-800 px-3.5 py-1.5 text-zinc-300">
              Coroutines &amp; Flow
            </span>
            <span className="rounded-lg bg-zinc-900/90 border border-zinc-800 px-3.5 py-1.5 text-zinc-300">
              Clean Architecture
            </span>
          </div>
        </div>
      </Container>
    </Section>
  );
}
