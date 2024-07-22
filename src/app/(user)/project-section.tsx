import CardProject from "@/components/card-project";
import { Project } from "@/types/Project";
import Link from "next/link";
import React from "react";

function ProjectSection({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="flex min-h-screen flex-col gap-8 py-8">
      <h3 className="mt-4 text-center font-semibold">My Projects</h3>
      <div className="flex flex-wrap justify-center gap-8">
        {projects.slice(0, 3).map((project: Project) => (
          <CardProject project={project} key={project._id} />
        ))}
      </div>
      <Link
        href="/projects"
        className="self-center rounded-md bg-primary px-12 py-3 transition-transform ease-in-out hover:bg-background hover:outline hover:outline-2 hover:outline-primary"
      >
        View More
      </Link>
    </section>
  );
}

export default ProjectSection;
