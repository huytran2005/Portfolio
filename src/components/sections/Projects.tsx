import React from "react";
import { Container, Section, Card, Badge, Grid, Button } from "@/components/ui";
import { projectsData } from "@/data/projects";
import { profileData } from "@/data/profile";
import { ExternalLink, Github, Smartphone, ArrowUpRight } from "lucide-react";

export function Projects() {
  const githubLink =
    profileData.socialLinks.find((s) => s.name === "GitHub")?.url || "https://github.com";

  return (
    <Section id="projects">
      <Container>
        <div className="space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-wider text-emerald-400 font-semibold">
                {"// Selected Works"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Featured Projects
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 max-w-xl">
                Open-source repositories, Android applications, and technical explorations.
              </p>
            </div>

            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-emerald-400 transition-colors"
            >
              <span>Explore full GitHub</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {projectsData.length === 0 ? (
            <div className="relative rounded-2xl border border-dashed border-zinc-800 bg-zinc-900/20 p-8 sm:p-12 text-center overflow-hidden">
              <div className="relative z-10 max-w-md mx-auto space-y-4">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-800/80 border border-zinc-700/60 text-emerald-400 shadow-inner">
                  <Smartphone className="h-7 w-7" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-lg font-semibold text-zinc-100">
                    Projects in Active Development
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Currently finalizing code samples and project documentation. Follow my GitHub
                    profile for live commits and updates.
                  </p>
                </div>
                <div className="pt-2">
                  <a href={githubLink} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="gap-2">
                      <Github className="h-4 w-4" />
                      <span>Follow on GitHub</span>
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <Grid cols={2}>
              {projectsData.map((project) => (
                <Card
                  key={project.id}
                  interactive
                  className="flex flex-col justify-between space-y-6 group"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-zinc-800/80 border border-zinc-700/60 text-emerald-400 group-hover:border-emerald-500/40 transition-colors">
                          <Smartphone className="h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-emerald-300 transition-colors">
                          {project.title}
                        </h3>
                      </div>

                      <div className="flex items-center gap-1.5">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`GitHub repo for ${project.title}`}
                            className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
                          >
                            <Github className="h-4 w-4" />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Live demo for ${project.title}`}
                            className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="text-sm text-zinc-400 leading-relaxed">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-800/80">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </Grid>
          )}
        </div>
      </Container>
    </Section>
  );
}
