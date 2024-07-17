import CardProject from "@/components/card-project";
import { Skeleton } from "@/components/ui/skeleton";
import { openGraphTemplate, twitterTemplate } from "@/lib/metadata";
import { getProjects } from "@/sanity/sanity-utils";
import { Project } from "@/types/Project";
import { Metadata } from "next";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Projects | Sandwicheese",
  openGraph: {
    ...openGraphTemplate,
    title: "Projects | Sandwicheese",
  },
  twitter: {
    ...twitterTemplate,
    title: "Projects | Sandwicheese",
  },
};

async function page() {
  const projects = await getProjects();

  if (projects === null) {
    return <Skeleton />;
  }

  return (
    <div className="flex flex-col gap-4 py-12">
      <h2 className="text-center font-medium">My Projects</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {projects &&
          projects.map((project: Project) => (
            <CardProject project={project} key={project._id} />
          ))}
      </div>
    </div>
  );
}

export default page;
