import { Skeleton } from "@/components/ui/skeleton"
import { getArchive, getArchives } from "../../../../sanity/sanity-utils"
import Image from "next/image"
import { PortableText } from "@portabletext/react"
import urlBuilder from "@sanity/image-url"
import { getImageDimensions } from "@sanity/asset-utils"
import Link from "next/link"
import type { Metadata, Viewport } from "next"
import { Description } from "../../../../types/Archive"

export const revalidate = 60

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#271971",
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata | undefined> {
  const archive = await getArchive(params.slug)
  const archives = await getArchives()

  if (archive === null || archives === null) {
    return undefined
  }

  const id = archive._id
  const index = archives.findIndex((archive) => archive._id === id)

  const description = archives[index].description[0].children as Description[]
  const descriptionText = description[0].text

  return {
    title: archive.name,
    description: descriptionText,
    generator: "Next.js",
    applicationName: "Sandwicheese",
    keywords: [
      "Sandwicheese",
      "Ahmad Naufal Ramadan",
      ...archive.name.split(" "),
    ],
    verification: {
      google: "fv_CNbFwrtMZ1V0Z2RV4p3t48ULjscLJ97A_P08DT8E",
      yandex: "yandex",
      yahoo: "yahoo",
    },
    openGraph: {
      title: archive.name,
      description: descriptionText,
      url: `https://sandwicheese.vercel.app/archives/${params.slug}`,
      siteName: "Sandwicheese",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: archive.thumbnail,
          width: 1280,
          height: 720,
          alt: archive.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: archive.name,
      description: descriptionText,
    },
  }
}

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
    <div className="flex flex-col gap-8 justify-self-center xl:w-[900px] py-12">
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

      <div className="flex flex-col gap-8 justify-self-center xl:w-[900px] leading-8 text-base sm:text-lg">
        <PortableText
          value={archive.content}
          components={{
            types: {
              customImage: ImageComponent,
              link: hyperlinkComponent,
            },
          }}
        />
      </div>
    </div>
  )
}

const ImageComponent = ({
  value,
}: {
  value: { asset: { _ref: string }; alt: string }
}) => {
  const { width, height } = getImageDimensions(value)
  return (
    <div className="max-w-[600px] self-center flex flex-col gap-2">
      <Image
        src={urlBuilder({ projectId: "s4v7i3a0", dataset: "production" })
          .image(value)
          .auto("format")
          .url()}
        alt={value.alt}
        width={width}
        height={height}
      />
      <p className="text-center">{value.alt}</p>
    </div>
  )
}

const hyperlinkComponent = ({
  value,
}: {
  value: { href: string; hyperlink: string }
}) => {
  return (
    <Link href={value.href} target="_blank" className="underline">
      {value.hyperlink}
    </Link>
  )
}

export default page
