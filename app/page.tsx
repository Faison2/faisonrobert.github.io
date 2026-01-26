"use client";

import { Navigation } from "@/components/portfolio/navigation";
import { Hero } from "@/components/portfolio/hero";
import { Experience } from "@/components/portfolio/experience";
import { Skills } from "@/components/portfolio/skills";
import { Projects } from "@/components/portfolio/projects";
import { Education } from "@/components/portfolio/education";
import { Contact } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section with ID for scroll */}
      <div id="about">
        <Hero />
      </div>

      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
