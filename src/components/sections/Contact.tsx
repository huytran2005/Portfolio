import React from "react";
import { Container, Section, Card, Button } from "@/components/ui";
import { profileData } from "@/data/profile";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";

export function Contact() {
  const githubLink =
    profileData.socialLinks.find((s) => s.name === "GitHub")?.url || "https://github.com";
  const linkedinLink =
    profileData.socialLinks.find((s) => s.name === "LinkedIn")?.url || "https://linkedin.com";

  return (
    <Section id="contact" className="pb-24">
      <Container>
        <Card className="relative overflow-hidden p-8 sm:p-12 text-center max-w-3xl mx-auto border-zinc-800 bg-gradient-to-b from-zinc-900/60 to-zinc-950/80">
          {/* Subtle top glow line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />

          <div className="max-w-xl mx-auto space-y-6">
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-wider text-emerald-400 font-semibold">
                {"// Let's Connect"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Ready to build something great?
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                Whether you have an Android project idea, an open engineering position, or just want
                to chat Kotlin &amp; Compose — feel free to drop a message.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a href={`mailto:${profileData.email}`}>
                <Button variant="primary" size="md" className="gap-2">
                  <Mail className="h-4 w-4" />
                  <span>Send Email</span>
                </Button>
              </a>
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="md" className="gap-2">
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                </Button>
              </a>
              <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="md" className="gap-2">
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                </Button>
              </a>
            </div>

            <div className="pt-4 flex items-center justify-center gap-2 text-xs font-mono text-zinc-500">
              <MapPin className="h-3.5 w-3.5 text-emerald-400" />
              <span>Based in {profileData.location}</span>
              <span>&bull;</span>
              <span className="text-emerald-400">Remote &amp; On-site</span>
            </div>
          </div>
        </Card>
      </Container>
    </Section>
  );
}
