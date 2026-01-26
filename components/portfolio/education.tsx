"use client";

import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section
      id="education"
      className="py-20 px-6 md:px-12 lg:px-24 bg-card/50"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <GraduationCap className="w-6 h-6 text-primary" />
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Education
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Education Card */}
        <div className="max-w-2xl">
          <div className="p-8 rounded-lg bg-card border border-border">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  Honours Degree in Computer Science
                </h3>
                <p className="text-primary font-medium mt-1">
                  University of Zimbabwe
                </p>
                <p className="text-muted-foreground mt-4">
                  Comprehensive study in software engineering, algorithms, data
                  structures, database systems, and computer networks. Strong
                  foundation in theoretical computer science and practical
                  application development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
