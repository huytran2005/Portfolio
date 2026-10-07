import React from "react";
import { Container, Section, Card, Badge, Grid, Button } from "@/components/ui";
import { certificatesData, credlyProfileUrl } from "@/data/certificates";
import { ExternalLink, CheckCircle2, ArrowUpRight, Award } from "lucide-react";

export function Certifications() {
  return (
    <Section id="certifications">
      <Container>
        <div className="space-y-10">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-wider text-emerald-400 font-semibold">
                {"// Verified Credentials"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Certifications &amp; Badges
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 max-w-xl">
                Official cloud architecture, networking, and ML credentials issued by Google Cloud
                and verified via Credly.
              </p>
            </div>

            <a
              href={credlyProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-emerald-400 transition-colors"
            >
              <span>View full Credly Profile</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Badges Grid */}
          <Grid cols={3}>
            {certificatesData.map((cert) => (
              <Card
                key={cert.id}
                interactive
                className="flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  {/* Badge Image with subtle glow */}
                  <div className="flex items-center justify-between">
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-zinc-800/40 p-2 border border-zinc-700/50 group-hover:border-emerald-500/30 transition-all duration-300">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={cert.badgeImageUrl}
                        alt={cert.name}
                        className="h-full w-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      <span>Verified</span>
                    </div>
                  </div>

                  {/* Title & Issuer Info */}
                  <div className="space-y-1.5">
                    <h3 className="text-base font-semibold text-zinc-100 group-hover:text-emerald-300 transition-colors leading-snug">
                      {cert.name}
                    </h3>
                    <p className="text-xs text-zinc-400 flex items-center gap-2">
                      <span className="text-zinc-300 font-medium">{cert.issuer}</span>
                      <span>&bull;</span>
                      <span>{cert.issuedDate}</span>
                    </p>
                  </div>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cert.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-[11px] px-2 py-0.5">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Direct Verification Link */}
                <div className="pt-3 border-t border-zinc-800/80">
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full justify-between text-xs font-mono text-zinc-300 group-hover:border-emerald-500/40 group-hover:text-white"
                    >
                      <span className="flex items-center gap-1.5">
                        <Award className="h-3.5 w-3.5 text-emerald-400" />
                        Verify Credential
                      </span>
                      <ExternalLink className="h-3.5 w-3.5 text-zinc-400" />
                    </Button>
                  </a>
                </div>
              </Card>
            ))}
          </Grid>
        </div>
      </Container>
    </Section>
  );
}
