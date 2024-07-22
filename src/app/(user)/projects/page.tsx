import { Skeleton } from "@/components/ui/skeleton";
import { openGraphTemplate, twitterTemplate } from "@/lib/metadata";
import { getProjects } from "@/sanity/sanity-utils";
import { Metadata } from "next";

import ProjectsPagination from "./projects-pagination";

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
    <div className="flex flex-col gap-8 py-12">
      <h2 className="text-center font-medium sm:text-start">My Projects</h2>
      <ProjectsPagination projects={projects} />
    </div>
  );
}

export default page;
