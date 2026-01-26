"use client";

import React from "react"

import { useState, useRef } from "react";
import { Mail, Phone, Github, Linkedin, Upload, User } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  profileImage: string | null;
  onImageUpload: (imageUrl: string) => void;
}

export function Hero({ profileImage, onImageUpload }: HeroProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onImageUpload(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text Content */}
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-primary font-mono text-sm tracking-wide">
              Hello, I&apos;m
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
              Faison Robert
            </h1>
            <h2 className="text-xl md:text-2xl text-primary font-medium">
              Full Stack Developer
            </h2>
          </div>

          <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
            Senior Full Stack Software Developer with over{" "}
            <span className="text-foreground font-semibold">7 years</span> of
            experience building secure, production-grade systems in{" "}
            <span className="text-primary">fintech</span> and{" "}
            <span className="text-primary">insurance</span> industries.
          </p>

          <p className="text-muted-foreground leading-relaxed max-w-xl">
            Passionate about building technology that supports critical
            operations and delivers real-world impact. Experienced in AI-enabled
            automation, performance optimization, and cross-platform web and
            mobile development.
          </p>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="mailto:faisonn.robert@gmail.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">faisonn.robert@gmail.com</span>
            </a>
            <a
              href="tel:+263771034161"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">+263 771 034 161</span>
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border hover:bg-secondary hover:text-secondary-foreground bg-transparent"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-4">
            <a
              href="#"
              className="p-2 rounded-lg bg-secondary hover:bg-primary/20 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-foreground" />
            </a>
            <a
              href="#"
              className="p-2 rounded-lg bg-secondary hover:bg-primary/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-foreground" />
            </a>
          </div>
        </div>

        {/* Right Column - Profile Image */}
        <div className="flex justify-center lg:justify-end">
          <div
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden bg-secondary border-2 border-border cursor-pointer group"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onClick={() => fileInputRef.current?.click()}
          >
            {profileImage ? (
              <img
                src={profileImage || "/placeholder.svg"}
                alt="Faison Robert"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center gap-4 text-muted-foreground">
                <User className="w-24 h-24" />
                <span className="text-sm">Upload your photo</span>
              </div>
            )}

            {/* Upload Overlay */}
            <div
              className={`absolute inset-0 bg-background/80 flex flex-col items-center justify-center gap-2 transition-opacity duration-300 ${
                isHovering ? "opacity-100" : "opacity-0"
              }`}
            >
              <Upload className="w-8 h-8 text-primary" />
              <span className="text-sm text-foreground font-medium">
                {profileImage ? "Change Photo" : "Upload Photo"}
              </span>
            </div>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
              aria-label="Upload profile photo"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
        <span className="text-xs">Scroll</span>
        <div className="w-px h-8 bg-border" />
      </div>
    </section>
  );
}
