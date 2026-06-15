"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FolderGit2,
  ExternalLink,
  Globe,
  ArrowUpRight,
} from "lucide-react";
import { type Project, mobileApps, webApps, palettes } from "@/lib/projects";

function ProjectCard({ project }: { project: Project }) {
  const p = palettes[project.paletteIndex];

  return (
    <Link
      href={`/projects/${project.id}`}
      className="group block w-full rounded-xl bg-card border border-border overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      {project.imagePath ? (
        <div className="relative aspect-[3/5] overflow-hidden bg-secondary">
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
              `,
              backgroundSize: "24px 24px",
            }}
          />
          <div className="absolute inset-0 overflow-hidden transition-transform duration-500 group-hover:scale-105">
            <Image
              src={`${project.imagePath}/cover.jpg`}
              alt={project.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background/60 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <div className="flex gap-1.5">
              {project.platforms?.slice(0, 2).map((p, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 text-[10px] font-medium rounded bg-background/80 backdrop-blur-sm text-foreground"
                >
                  {p}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-1 text-foreground/80 text-xs font-medium opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              <span>View</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      ) : (
        <div className={`relative aspect-[4/3] overflow-hidden bg-gradient-to-br ${p.from} ${p.to}`}>
          <div
            className="absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
              `,
              backgroundSize: "24px 24px",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <span className="text-2xl md:text-3xl font-bold text-white/80 text-center leading-tight select-none drop-shadow-sm">
              {project.name}
            </span>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <div className="flex gap-1.5">
              {project.platforms?.slice(0, 2).map((p, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 text-[10px] font-medium rounded bg-white/20 backdrop-blur-sm text-white"
                >
                  {p}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-1 text-white/80 text-xs font-medium opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              <span>View</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      )}

      <div className="p-5">
        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap items-center gap-1.5 mt-3">
          {project.tech.slice(0, 3).map((t, i) => (
            <span
              key={i}
              className={`px-2 py-0.5 text-[11px] font-mono rounded ${p.light} ${p.text} ${p.border} border`}
            >
              {t}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="text-[11px] text-muted-foreground font-mono">
              +{project.tech.length - 3}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6 md:px-12 lg:px-24 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <FolderGit2 className="w-6 h-6 text-primary" />
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Projects
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {mobileApps.map((app, index) => (
              <ProjectCard key={index} project={app} />
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-primary/10">
              <Globe className="w-4 h-4 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">
              Web Applications
            </h3>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {webApps.map((app, index) => (
              <div
                key={index}
                className="p-5 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:-translate-y-1 duration-300"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-foreground">
                    {app.name}
                  </h4>
                  {app.url && (
                    <a
                      href={app.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors shrink-0 ml-2"
                      aria-label={`Visit ${app.name}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  {app.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {app.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 text-xs font-mono rounded bg-secondary text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border hover:border-primary/50 hover:bg-primary/5 transition-all text-sm text-muted-foreground hover:text-foreground">
            View All Projects
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
