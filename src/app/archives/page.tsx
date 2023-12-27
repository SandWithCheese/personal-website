import Archives from "@/components/Archives"
import { Archive } from "../../../types/Archive"
import { getArchives } from "../../../sanity/sanity-utils"
import { Skeleton } from "@/components/ui/skeleton"

async function page() {
  const archives = await getArchives()

  if (archives === null) {
    return <Skeleton />
  }

  return (
    <div className="flex flex-col gap-8">
      <h1>Archives</h1>
      <div className="flex flex-col items-center sm:grid sm:grid-cols-12 gap-8">
        {archives &&
          archives.map((archive: Archive) => (
            <Archives key={archive._id} archive={archive} />
          ))}
      </div>
    </div>
  )
}

export default page
