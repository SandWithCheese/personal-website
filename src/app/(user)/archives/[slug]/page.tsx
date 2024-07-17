import { Skeleton } from "@/components/ui/skeleton";
import { getArchive } from "@/sanity/sanity-utils";
import { Description } from "@/types/Archive";
import { PortableText } from "@portabletext/react";
import { getImageDimensions } from "@sanity/asset-utils";
import urlBuilder from "@sanity/image-url";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 60;

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const archive = await getArchive(params.slug);

  if (archive === null) {
    return undefined;
  }

  const description = archive.description[0].children as Description[];
  const descriptionText = description[0].text;

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
  };
}

async function page({ params }: { params: { slug: string } }) {
  const archive = await getArchive(params.slug);

  if (archive === null) {
    return <Skeleton />;
  }

  const date = new Date(archive._createdAt);
  const dateString = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex flex-col gap-8 justify-self-center py-12 xl:w-[900px]">
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

      <div className="flex flex-col gap-8 justify-self-center text-base leading-8 sm:text-lg xl:w-[900px]">
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
  );
}

const ImageComponent = ({
  value,
}: {
  value: { asset: { _ref: string }; alt: string };
}) => {
  const { width, height } = getImageDimensions(value);
  return (
    <div className="flex max-w-[600px] flex-col gap-2 self-center">
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
  );
};

const hyperlinkComponent = ({
  value,
}: {
  value: { href: string; hyperlink: string };
}) => {
  return (
    <Link href={value.href} target="_blank" className="underline">
      {value.hyperlink}
    </Link>
  );
};

export default page;
