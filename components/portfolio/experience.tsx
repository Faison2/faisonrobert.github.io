"use client";

import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Escrow Group",
    period: "Jan 2025 - Present",
    description:
      "Led development of multiple high-impact fintech applications serving thousands of users across mobile and web platforms.",
    achievements: [
      "Architected and deployed Inuka Fund mobile application on App Store and Play Store",
      "Built comprehensive C-Trade trading platform with real-time trading capabilities",
      "Designed and implemented FMS (Financial Management System) for financial operations",
      "Developed ZMX trading ecosystem for cryptocurrency trading with advanced analytics",
      "Optimized application performance resulting in 40% faster load times",
    ],
    technologies: ["React", "Flutter", "Spring Boot", "AWS", "PostgreSQL"],
  },
  {
    title: "Full Stack Developer",
    company: "Smatech Group",
    period: "March 2024 - December 2024",
    description:
      "Engineered comprehensive insurance mobile applications and web platforms using modern tech stack.",
    achievements: [
      "Built insurance mobile app using Flutter, serving 5,000+ active users",
      "Developed scalable web applications with Vue.js frontend and Spring Boot backend",
      "Built SmatProp real estate platform with advanced search and booking functionality",
      "Implemented DevOps practices reducing deployment time by 60%",
      "Successfully delivered 4 major projects ahead of schedule",
    ],
    technologies: ["Flutter", "Vue.js", "Spring Boot", "Laravel", "Docker"],
  },
  {
    title: "Software Developer",
    company: "Moonlight Funeral Assurance",
    period: "October 2020 - February 2024",
    description:
      "Developed enterprise solutions and AI-powered systems for insurance operations.",
    achievements: [
      "Developed enterprise Exit Interview System streamlining HR processes",
      "Created AI-powered helpdesk chatbot increasing customer engagement by 45%",
      "Built Moon Direct mobile applications for Android and iOS platforms",
      "Optimized matrix generation system from 2 hours to 15 minutes processing time",
      "Maintained comprehensive IT documentation improving team efficiency",
    ],
    technologies: ["React", "Python", "C#", "Node.js", "MySQL"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <Briefcase className="w-6 h-6 text-primary" />
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Experience
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Timeline */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-border">
              {/* Timeline Dot */}
              <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-primary" />

              <div className="space-y-4">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground">{exp.description}</p>

                {/* Achievements */}
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-muted-foreground"
                    >
                      <span className="text-primary mt-1.5">▹</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-mono rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Experience */}
        <div className="mt-12 p-6 rounded-lg bg-card border border-border">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Private Programming Tutor
          </h3>
          <p className="text-muted-foreground text-sm mb-2">
            July 2021 - Present
          </p>
          <p className="text-muted-foreground">
            Providing specialized programming instruction to university students
            in various programming languages and software development concepts.
          </p>
        </div>
      </div>
    </section>
  );
}
