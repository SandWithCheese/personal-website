import CardProject from "@/components/CardProject"
import { getProjects } from "../../../sanity/sanity-utils"
import { Project } from "../../../types/Project"
import { Skeleton } from "@/components/ui/skeleton"

export const revalidate = 60

async function page() {
  const projects = await getProjects()

  if (projects === null) {
    return <Skeleton />
  }

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-center font-medium">My Projects</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {projects &&
          projects.map((project: Project) => (
            <CardProject project={project} key={project._id} />
          ))}
      </div>
    </div>
  )
}

export default page
