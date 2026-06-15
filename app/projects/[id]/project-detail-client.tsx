"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";
import { allProjects, palettes } from "@/lib/projects";

export default function ProjectDetailClient() {
  const { id } = useParams<{ id: string }>();
  const project = allProjects.find((p) => p.id === id);

  const [imageIndex, setImageIndex] = useState(0);

  if (!project) {
    notFound();
  }

  const p = palettes[project.paletteIndex];

  const prevImage = () =>
    setImageIndex((i) => (i === 0 ? project.images - 1 : i - 1));
  const nextImage = () =>
    setImageIndex((i) => (i === project.images - 1 ? 0 : i + 1));

  useEffect(() => {
    if (project.images <= 1) return;
    const timeout = setTimeout(() => {
      setImageIndex((i) => (i === project.images - 1 ? 0 : i + 1));
    }, 4000);
    return () => clearTimeout(timeout);
  }, [imageIndex, project.images]);

  return (
    <main className="min-h-screen bg-background">
      {/* Back nav */}
      <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 py-4 flex items-center justify-between">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Projects</span>
          </Link>
          <span className="text-sm font-mono text-muted-foreground">
            {project.name}
          </span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 py-8 md:py-12">
        {/* Hero section: image + info side by side on desktop */}
        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          {/* Gallery - takes 3/5 on desktop */}
          <div className="lg:col-span-3">
            <div className="relative rounded-2xl overflow-hidden bg-secondary">
              <div className="aspect-[1/1] md:aspect-[4/5] relative overflow-hidden">
                {project.imagePath ? (
                  <div
                    className="flex h-full transition-transform duration-500 will-change-transform"
                    style={{
                      transform: `translateX(-${imageIndex * 100}%)`,
                      transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                    }}
                  >
                    {Array.from({ length: project.images }).map((_, i) => (
                      <div key={i} className="relative w-full h-full shrink-0">
                        <Image
                          src={`${project.imagePath}/${i === 0 ? "cover" : i}.jpg`}
                          alt={`${project.name} screenshot ${i + 1}`}
                          fill
                          className="object-contain p-4 md:p-6"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="absolute inset-0 opacity-[0.1]"
                      style={{
                        backgroundImage: `
                          linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)
                        `,
                        backgroundSize: "32px 32px",
                      }}
                    />
                    <span className="text-2xl md:text-4xl font-bold text-white/30 text-center select-none">
                      {project.name}
                    </span>
                  </div>
                )}

                {project.images > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/70 backdrop-blur-md text-foreground hover:bg-background/90 transition-all hover:scale-110 z-10"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/70 backdrop-blur-md text-foreground hover:bg-background/90 transition-all hover:scale-110 z-10"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}

                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1.5 text-xs rounded-full bg-background/70 backdrop-blur-md text-foreground font-mono">
                    {String(imageIndex + 1).padStart(2, "0")} / {String(project.images).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </div>

            {/* Thumbnail strip */}
            {project.images > 1 && (
              <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                {Array.from({ length: project.images }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setImageIndex(i)}
                    className={`shrink-0 w-10 h-16 md:w-14 md:h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      i === imageIndex
                        ? "border-primary opacity-100"
                        : "border-transparent opacity-50 hover:opacity-80"
                    }`}
                  >
                    {project.imagePath ? (
                      <div className="relative w-full h-full bg-secondary">
                        <Image
                          src={`${project.imagePath}/${i === 0 ? "cover" : i}.jpg`}
                          alt={`${project.name} thumbnail ${i + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-full h-full bg-secondary" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info panel - takes 2/5 on desktop */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                {project.name}
              </h1>
              <div className="flex flex-wrap items-center gap-2 mt-3">
                <span className={`px-3 py-1 text-sm rounded-full ${p.light} ${p.text} font-medium`}>
                  {project.role}
                </span>
                {project.platforms?.map((pl, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground"
                  >
                    {pl}
                  </span>
                ))}
              </div>
            </div>

            <div className="h-px bg-border" />

            <p className="text-muted-foreground leading-relaxed">
              {project.details}
            </p>

            <div className="h-px bg-border" />

            <div className="space-y-3">
              <h3 className="text-xs font-semibold text-foreground uppercase tracking-widest">
                Key Features
              </h3>
              <ul className="space-y-2">
                {project.features.slice(0, 4).map((f, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${p.text}`} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs font-semibold text-foreground uppercase tracking-widest">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1.5 text-xs font-mono rounded-lg ${p.light} ${p.text} ${p.border} border`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary/10 text-primary hover:bg-primary/20 transition-all text-sm font-medium"
              >
                <span>Visit Live</span>
                <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            )}
          </div>
        </div>

        {/* All features expanded */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-xl font-bold text-foreground">
              All Features
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            {project.features.map((f, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border"
              >
                <CheckCircle2 className={`w-5 h-5 mt-0.5 shrink-0 ${p.text}`} />
                <span className="text-sm text-foreground">{f}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation between projects */}
        <div className="flex items-center justify-between py-8 border-t border-border">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Projects</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
