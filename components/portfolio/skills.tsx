"use client";

import { Code2, Database, Cloud, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Technologies",
    icon: Code2,
    skills: [
      "React",
      "Vue.js",
      "Angular",
      "Flutter",
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
    ],
  },
  {
    title: "Backend Technologies",
    icon: Database,
    skills: ["Spring Boot", "Laravel", "PHP", "Python", "C#", "Node.js"],
  },
  {
    title: "Mobile Development",
    icon: Code2,
    skills: ["Flutter", "React Native", "Android", "iOS"],
  },
  {
    title: "Database Systems",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS", "Docker", "Microservices", "Spring Cloud", "Eureka"],
  },
  {
    title: "Tools & Frameworks",
    icon: Wrench,
    skills: ["Git", "REST APIs", "GraphQL", "JSON", "XML"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6 md:px-12 lg:px-24 bg-card/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <Code2 className="w-6 h-6 text-primary" />
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Technical Expertise
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-sm rounded-lg bg-secondary text-foreground hover:bg-primary/20 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "7+", label: "Years Experience" },
            { value: "15+", label: "Apps Deployed" },
            { value: "5000+", label: "Users Served" },
            { value: "40%", label: "Performance Boost" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-card border border-border"
            >
              <p className="text-3xl md:text-4xl font-bold text-primary">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
