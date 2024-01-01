import Archives from "@/components/Archives"
import { Archive } from "../../../types/Archive"
import { getArchives } from "../../../sanity/sanity-utils"
import { Skeleton } from "@/components/ui/skeleton"

export const revalidate = 60

async function page() {
  const archives = await getArchives()

  if (archives === null) {
    return <Skeleton />
  }

  return (
    <div className="flex flex-col gap-8">
      <h2 className="font-medium text-center sm:text-start">Archives</h2>
      <div className="flex flex-col items-center sm:grid sm:grid-cols-12 gap-8 sm:items-stretch">
        {archives &&
          archives.map((archive: Archive) => (
            <Archives key={archive._id} archive={archive} />
          ))}
      </div>
    </div>
  )
}

export default page
