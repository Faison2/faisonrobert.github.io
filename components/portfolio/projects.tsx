"use client";

import { FolderGit2, ExternalLink, Smartphone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const mobileApps = [
  {
    name: "Inuka Fund App",
    description: "Fintech mobile application for seamless fund management",
    platforms: ["App Store", "Play Store"],
    tech: ["Flutter", "Spring Boot", "PostgreSQL"],
  },
  {
    name: "C-Trade Mobile",
    description: "Trading platform with real-time market data",
    platforms: ["App Store", "Play Store"],
    tech: ["Flutter", "WebSocket", "REST APIs"],
  },
  {
    name: "ZMX Mobile",
    description: "Cryptocurrency trading application with advanced charting",
    platforms: ["App Store", "Play Store"],
    tech: ["Flutter", "GraphQL", "Redis"],
  },
  {
    name: "ReInsurance Mobile App",
    description: "Insurance management platform for policy holders",
    platforms: ["App Store", "Play Store"],
    tech: ["Flutter", "Vue.js", "Spring Boot"],
  },
  {
    name: "Njere Mobile App",
    description: "E-commerce solution for African markets",
    platforms: ["App Store", "Play Store"],
    tech: ["React Native", "Node.js", "MongoDB"],
  },
  {
    name: "SmatPay Mobile App",
    description: "Payment processing application",
    platforms: ["App Store", "Play Store"],
    tech: ["Flutter", "Laravel", "MySQL"],
  },
];

const webApps = [
  {
    name: "C-Trade Web System",
    description: "Comprehensive trading platform with portfolio management",
    url: null,
    tech: ["React", "Spring Boot", "PostgreSQL"],
  },
  {
    name: "ZMX Web System",
    description: "Cryptocurrency exchange interface with analytics",
    url: null,
    tech: ["Vue.js", "Node.js", "MongoDB"],
  },
  {
    name: "FMS Web System",
    description: "Financial management solution for operations and reporting",
    url: null,
    tech: ["React", "Spring Boot", "AWS"],
  },
  {
    name: "SmatProp Portal",
    description: "Real estate platform with property management features",
    url: "https://www.smatprop.com/",
    tech: ["Laravel", "Vue.js", "MySQL"],
  },
  {
    name: "Njere E-commerce",
    description: "Full-featured e-commerce platform",
    url: "https://www.njere.africa/",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    name: "Exit Interview System",
    description: "HR management solution for employee feedback",
    url: null,
    tech: ["React", "C#", "SQL Server"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <FolderGit2 className="w-6 h-6 text-primary" />
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Projects Portfolio
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Mobile Applications */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Smartphone className="w-5 h-5 text-primary" />
            <h3 className="text-xl font-semibold text-foreground">
              Mobile Applications
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mobileApps.map((app, index) => (
              <div
                key={index}
                className="p-5 rounded-lg bg-card border border-border hover:border-primary/50 transition-all hover:-translate-y-1 duration-300"
              >
                <h4 className="font-semibold text-foreground mb-2">
                  {app.name}
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  {app.description}
                </p>

                <div className="flex gap-2 mb-3">
                  {app.platforms.map((platform, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 text-xs rounded bg-primary/10 text-primary"
                    >
                      {platform}
                    </span>
                  ))}
                </div>

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

        {/* Web Applications */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Globe className="w-5 h-5 text-primary" />
            <h3 className="text-xl font-semibold text-foreground">
              Web Applications
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {webApps.map((app, index) => (
              <div
                key={index}
                className="p-5 rounded-lg bg-card border border-border hover:border-primary/50 transition-all hover:-translate-y-1 duration-300"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-foreground">{app.name}</h4>
                  {app.url && (
                    <a
                      href={app.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                      aria-label={`Visit ${app.name}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mb-3">
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

        {/* View More CTA */}
        <div className="mt-12 text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-border hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            View All Projects
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
