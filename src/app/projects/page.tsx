import CardProject from "@/components/CardProject"
import { getProjects } from "../../../sanity/sanity-utils"
import { Project } from "../../../types/Project"

async function page() {
  const projects = await getProjects()
  return (
    <div className="flex flex-wrap justify-center gap-8">
      {projects.map((project: Project) => (
        <CardProject project={project} key={project._id} />
      ))}
    </div>
  )
}

export default page
