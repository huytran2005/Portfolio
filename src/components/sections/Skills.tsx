import React from "react";
import { Container, Section, Card, Badge, Grid } from "@/components/ui";
import { skillsData } from "@/data/skills";
import { Code2, Layers, Cpu } from "lucide-react";

export function Skills() {
  const getCategoryIcon = (category: string) => {
    if (category.toLowerCase().includes("language")) {
      return <Code2 className="h-5 w-5 text-emerald-400" />;
    }
    if (category.toLowerCase().includes("architecture")) {
      return <Layers className="h-5 w-5 text-teal-400" />;
    }
    return <Cpu className="h-5 w-5 text-cyan-400" />;
  };

  return (
    <Section id="skills">
      <Container>
        <div className="space-y-10">
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-wider text-emerald-400 font-semibold">
              {"// Technical Capabilities"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Skills &amp; Technologies
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 max-w-xl">
              Specialized tools, frameworks, and architecture patterns I employ for high-performance
              Android engineering.
            </p>
          </div>

          <Grid cols={3}>
            {skillsData.map((group) => (
              <Card
                key={group.category}
                interactive
                className="flex flex-col justify-between space-y-5"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-zinc-800/60 border border-zinc-700/50">
                      {getCategoryIcon(group.category)}
                    </div>
                    <h3 className="text-base font-semibold text-zinc-100">{group.category}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {group.items.map((skill) => (
                      <Badge
                        key={skill}
                        variant="default"
                        className="cursor-default hover:border-emerald-500/40 hover:text-emerald-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </Grid>
        </div>
      </Container>
    </Section>
  );
}
