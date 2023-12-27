import Link from "next/link"
import { Archive } from "../../types/Archive"
import Image from "next/image"
import { PortableText } from "@portabletext/react"

function Archives(props: { archive: Archive }) {
  const date = new Date(props.archive._createdAt)
  const dateString = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="bg-secondary max-w-96 sm:w-full sm:col-span-6 lg:col-span-4 xl:col-span-3 rounded-lg">
      <Link
        href={`/archives/${props.archive.slug.current}`}
        className="flex flex-col gap-4"
      >
        <div className="relative w-full aspect-video">
          <Image
            src={props.archive.thumbnail}
            alt=""
            fill
            className="rounded-t-lg object-cover"
          />
        </div>
        <div className="flex flex-col gap-4 p-4">
          <h3>{props.archive.name}</h3>
          <PortableText value={props.archive.description} />
          <p>{dateString}</p>
        </div>
      </Link>
    </div>
  )
}

export default Archives
