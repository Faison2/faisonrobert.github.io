"use client";

import { useState, useEffect } from "react";
import { Navigation } from "@/components/portfolio/navigation";
import { Hero } from "@/components/portfolio/hero";
import { Experience } from "@/components/portfolio/experience";
import { Skills } from "@/components/portfolio/skills";
import { Projects } from "@/components/portfolio/projects";
import { Education } from "@/components/portfolio/education";
import { Contact } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";

export default function Portfolio() {
  const [profileImage, setProfileImage] = useState<string | null>(null);

  // Load profile image from localStorage on mount
  useEffect(() => {
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
      setProfileImage(savedImage);
    }
  }, []);

  // Save profile image to localStorage when it changes
  const handleImageUpload = (imageUrl: string) => {
    setProfileImage(imageUrl);
    localStorage.setItem("profileImage", imageUrl);
  };

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section with ID for scroll */}
      <div id="about">
        <Hero profileImage={profileImage} onImageUpload={handleImageUpload} />
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
