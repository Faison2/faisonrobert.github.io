import { allProjects } from "@/lib/projects";
import ProjectDetailClient from "./project-detail-client";

export function generateStaticParams() {
  return allProjects.map((p) => ({ id: p.id }));
}

export default function ProjectPage() {
  return <ProjectDetailClient />;
}
