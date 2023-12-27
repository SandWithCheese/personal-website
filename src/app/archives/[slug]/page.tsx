import { Skeleton } from "@/components/ui/skeleton"
import { getArchive } from "../../../../sanity/sanity-utils"
import Image from "next/image"
import { PortableText } from "@portabletext/react"
import urlBuilder from "@sanity/image-url"
import { getImageDimensions } from "@sanity/asset-utils"

async function page({ params }: { params: { slug: string } }) {
  const archive = await getArchive(params.slug)

  if (archive === null) {
    return <Skeleton />
  }

  const date = new Date(archive._createdAt)
  const dateString = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="flex flex-col gap-8 justify-self-center xl:w-[900px]">
      <div>
        <h1>{archive.name}</h1>
        <p>{dateString}</p>
      </div>

      <div className="relative aspect-video">
        <Image
          src={archive.thumbnail}
          fill
          alt="thumbnail"
          className="object-cover"
        />
      </div>

      <PortableText
        value={archive.content}
        components={{ types: { image: ImageComponent } }}
      />
    </div>
  )
}

const ImageComponent = ({ value }: { value: { asset: { _ref: string } } }) => {
  const { width, height } = getImageDimensions(value)
  return (
    <div className="max-w-[600px] self-center">
      <Image
        src={urlBuilder({ projectId: "s4v7i3a0", dataset: "production" })
          .image(value)
          .auto("format")
          .url()}
        alt={value.asset._ref}
        width={width}
        height={height}
      />
    </div>
  )
}

export default page
