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
    <div className="flex flex-col bg-secondary max-w-96 sm:w-full sm:col-span-6 lg:col-span-6 xl:col-span-4 rounded-lg hover:scale-105 transition-transform ease-in-out min-h-[450px]">
      <Link
        href={`/archives/${props.archive.slug.current}`}
        className="flex flex-col gap-4 flex-grow"
      >
        <div className="relative w-full aspect-video">
          <Image
            src={props.archive.thumbnail}
            alt="thumbnail"
            fill
            className="rounded-t-lg object-cover"
          />
        </div>
        <div className="flex-grow flex flex-col gap-4 p-4">
          <h3 className="text-2xl leading-none tracking-tight font-medium">
            {props.archive.name}
          </h3>
          <div className="text-justify">
            <PortableText value={props.archive.description} />
          </div>
        </div>
        <div className="flex flex-col gap-4 p-4">
          <p className="font-semibold">{dateString}</p>
        </div>
      </Link>
    </div>
  )
}

export default Archives
